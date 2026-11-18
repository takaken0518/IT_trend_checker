import ActivityKit
import Foundation
import SwiftUI
import WidgetKit

@MainActor
final class ArticleStore: ObservableObject {
    static let shared = ArticleStore()

    static let defaultJsonURL = "https://raw.githubusercontent.com/takaken0518/IT_trend_checker/main/articles.json"
    static let rotationIntervalMinutes = 10

    private enum Keys {
        static let cachedNewsData = "it_trend_cached_news_data"
        static let customJsonURL = "it_trend_custom_json_url"
        static let githubToken = "it_trend_github_token"
        static let selectedGenres = "it_trend_selected_genres"
        static let currentIndex = "it_trend_current_index"
        static let currentPage = "it_trend_current_page"
        static let lastRotatedAt = "it_trend_last_rotated_at"
    }

    @Published private(set) var newsData: NewsData
    @Published private(set) var rotationList: [DisplayArticle] = []
    @Published private(set) var selectedGenres: [GenreCode] = []
    @Published private(set) var currentIndex: Int = 0
    @Published private(set) var currentPage: Int = 0
    @Published private(set) var isOffline: Bool = false
    @Published private(set) var isLoading: Bool = false
    @Published private(set) var isLiveActivityActive: Bool = false
    @Published var statusMessage: String?

    @Published var jsonURLString: String {
        didSet {
            UserDefaults.standard.set(jsonURLString, forKey: Keys.customJsonURL)
        }
    }

    @Published var githubToken: String {
        didSet {
            UserDefaults.standard.set(githubToken, forKey: Keys.githubToken)
        }
    }

    private init() {
        let defaults = UserDefaults.standard
        let savedURL = defaults.string(forKey: Keys.customJsonURL)?.trimmingCharacters(in: .whitespacesAndNewlines)
        self.jsonURLString = (savedURL?.isEmpty == false) ? savedURL! : Self.defaultJsonURL
        self.githubToken = defaults.string(forKey: Keys.githubToken) ?? ""

        if let genreRaw = defaults.stringArray(forKey: Keys.selectedGenres) {
            self.selectedGenres = genreRaw.compactMap { GenreCode(rawValue: $0) }
        }

        if let data = defaults.data(forKey: Keys.cachedNewsData),
           let decoded = try? JSONDecoder().decode(NewsData.self, from: data),
           !decoded.articles.isEmpty {
            self.newsData = decoded
            self.isOffline = false
        } else {
            self.newsData = Self.makeOfflineFallbackData()
            self.isOffline = true
        }

        self.currentIndex = defaults.integer(forKey: Keys.currentIndex)
        self.currentPage = defaults.integer(forKey: Keys.currentPage)
        rebuildRotationList(resetIndex: false)
        refreshLiveActivityStatus()
    }

    var currentArticle: DisplayArticle? {
        guard !rotationList.isEmpty else { return nil }
        let safeIdx = ((currentIndex % rotationList.count) + rotationList.count) % rotationList.count
        return rotationList[safeIdx]
    }

    var nextArticle: DisplayArticle? {
        guard !rotationList.isEmpty else { return nil }
        let safeIdx = ((currentIndex + 1) % rotationList.count + rotationList.count) % rotationList.count
        return rotationList[safeIdx]
    }

    var filterLabel: String {
        if selectedGenres.isEmpty {
            return "ALL"
        }
        return selectedGenres.map { $0.shortLabel }.joined(separator: "・") + "+🌐"
    }

    var formattedUpdatedAt: String {
        Self.formatUpdatedTime(newsData.updatedAt)
    }

    func refreshLiveActivityStatus() {
        isLiveActivityActive = !Activity<ITTrendAttributes>.activities.isEmpty
    }

    func refreshFromNetwork() async {
        isLoading = true
        defer { isLoading = false }

        let rawURL = jsonURLString.trimmingCharacters(in: .whitespacesAndNewlines)
        let baseURL = rawURL.isEmpty ? Self.defaultJsonURL : rawURL
        let sep = baseURL.contains("?") ? "&" : "?"
        let requestURLString = "\(baseURL)\(sep)t=\(Int(Date().timeIntervalSince1970))"

        guard let url = URL(string: requestURLString) else {
            statusMessage = "URLの形式が正しくありません"
            return
        }

        var request = URLRequest(url: url, timeoutInterval: 12)
        let token = githubToken.trimmingCharacters(in: .whitespacesAndNewlines)
        if !token.isEmpty {
            request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
            request.setValue("application/vnd.github.v3.raw", forHTTPHeaderField: "Accept")
        }

        do {
            let (data, response) = try await URLSession.shared.data(for: request)
            if let http = response as? HTTPURLResponse, !(200...299).contains(http.statusCode) {
                throw URLError(.badServerResponse)
            }
            let decoded = try JSONDecoder().decode(NewsData.self, from: data)
            guard !decoded.articles.isEmpty else {
                throw URLError(.cannotParseResponse)
            }

            newsData = decoded
            isOffline = false
            statusMessage = nil
            UserDefaults.standard.set(data, forKey: Keys.cachedNewsData)
            rebuildRotationList(resetIndex: false)
            WidgetCenter.shared.reloadAllTimelines()
            await syncActiveLiveActivities()
        } catch {
            if let cachedData = UserDefaults.standard.data(forKey: Keys.cachedNewsData),
               let cachedDecoded = try? JSONDecoder().decode(NewsData.self, from: cachedData),
               !cachedDecoded.articles.isEmpty {
                newsData = cachedDecoded
                isOffline = true
                statusMessage = "オフラインキャッシュを表示中"
            } else {
                newsData = Self.makeOfflineFallbackData()
                isOffline = true
                statusMessage = "記事の取得に失敗しました"
            }
            rebuildRotationList(resetIndex: false)
        }
    }

    func toggleGenre(_ genre: GenreCode?) async {
        if let genre {
            if let existingIdx = selectedGenres.firstIndex(of: genre) {
                selectedGenres.remove(at: existingIdx)
            } else {
                selectedGenres.append(genre)
            }
        } else {
            selectedGenres = []
        }

        UserDefaults.standard.set(selectedGenres.map(\.rawValue), forKey: Keys.selectedGenres)
        rebuildRotationList(resetIndex: true)
        WidgetCenter.shared.reloadAllTimelines()
        await syncActiveLiveActivities()
    }

    func stepArticle(delta: Int) async {
        reloadStateFromDefaultsIfNeeded()
        guard !rotationList.isEmpty else { return }
        let count = rotationList.count
        currentIndex = ((currentIndex + delta) % count + count) % count
        currentPage = 0
        saveRotationPosition()
        WidgetCenter.shared.reloadAllTimelines()
        await syncActiveLiveActivities()
    }

    func selectArticle(at index: Int) async {
        guard index >= 0, index < rotationList.count else { return }
        currentIndex = index
        currentPage = 0
        saveRotationPosition()
        WidgetCenter.shared.reloadAllTimelines()
        await syncActiveLiveActivities()
    }

    func toggleSummaryPage() async {
        reloadStateFromDefaultsIfNeeded()
        guard let current = currentArticle else { return }
        let totalPages = max(1, current.summaryPages.count)
        currentPage = (currentPage + 1) % totalPages
        saveRotationPosition()
        await syncActiveLiveActivities()
    }

    func startOrUpdateLiveActivity(forceRestart: Bool = false) async {
        let authInfo = ActivityAuthorizationInfo()
        guard authInfo.areActivitiesEnabled else {
            statusMessage = "iPhoneの「設定 > アプリ > IT Trend > ライブアクティビティ」をオンにしてください"
            refreshLiveActivityStatus()
            return
        }

        if newsData.articles.isEmpty || isOffline {
            await refreshFromNetwork()
        }

        if forceRestart {
            await endAllLiveActivities()
        }

        let state = buildContentState()
        let staleDate = Calendar.current.date(byAdding: .hour, value: 8, to: Date())
        let content = ActivityContent(state: state, staleDate: staleDate)

        if let existing = Activity<ITTrendAttributes>.activities.first {
            for duplicate in Activity<ITTrendAttributes>.activities.dropFirst() {
                await duplicate.end(nil, dismissalPolicy: .immediate)
            }
            await existing.update(content)
            statusMessage = "ロック画面のLive Activityを更新しました"
        } else {
            let attributes = ITTrendAttributes(filterLabel: filterLabel)
            do {
                _ = try Activity.request(
                    attributes: attributes,
                    content: content,
                    pushType: nil
                )
                statusMessage = "ロック画面にLive Activityを開始しました！画面をロックして確認してください"
            } catch {
                statusMessage = "Live Activity開始エラー: \(error.localizedDescription)"
            }
        }
        refreshLiveActivityStatus()
    }

    func endAllLiveActivities() async {
        for activity in Activity<ITTrendAttributes>.activities {
            await activity.end(nil, dismissalPolicy: .immediate)
        }
        refreshLiveActivityStatus()
        statusMessage = "ロック画面のLive Activityを終了しました"
    }

    func syncActiveLiveActivities() async {
        let activities = Activity<ITTrendAttributes>.activities
        guard !activities.isEmpty else {
            refreshLiveActivityStatus()
            return
        }
        let state = buildContentState()
        let staleDate = Calendar.current.date(byAdding: .hour, value: 8, to: Date())
        let content = ActivityContent(state: state, staleDate: staleDate)
        for activity in activities {
            await activity.update(content)
        }
        refreshLiveActivityStatus()
    }

    func buildContentState() -> ITTrendAttributes.ContentState {
        guard let current = currentArticle else {
            return ITTrendAttributes.ContentState(
                title: "表示できる記事がありません",
                url: "https://github.com",
                source: "System",
                genreCode: GenreCode.other.rawValue,
                genreDisplay: GenreCode.other.shortLabel,
                publishedText: "",
                headlineText: "",
                summaryPageText: "更新ボタンを押して記事を読み込んでください。",
                isDiscovery: false,
                currentIndex: 0,
                totalCount: 0,
                currentPage: 0,
                totalPages: 1,
                nextTitle: "",
                updatedAt: formattedUpdatedAt
            )
        }

        let pages = current.summaryPages.isEmpty ? [current.summary] : current.summaryPages
        let safePage = min(max(0, currentPage), pages.count - 1)
        let pageText = pages[safePage]
        let next = nextArticle ?? current

        // ActivityKit の ContentState 上限 (4KB) に絶対に収まるよう長さを制御
        return ITTrendAttributes.ContentState(
            title: Self.truncate(current.title, maxChars: 110),
            url: Self.truncate(current.url, maxChars: 260),
            source: Self.truncate(current.source, maxChars: 24),
            genreCode: current.genreCode.rawValue,
            genreDisplay: current.genreDisplay,
            publishedText: Self.truncate(current.publishedText, maxChars: 36),
            headlineText: Self.truncate(current.headlineText, maxChars: 90),
            summaryPageText: Self.truncate(pageText, maxChars: 210),
            isDiscovery: current.isDiscovery,
            currentIndex: currentIndex,
            totalCount: rotationList.count,
            currentPage: safePage,
            totalPages: pages.count,
            nextTitle: Self.truncate(next.title, maxChars: 55),
            updatedAt: Self.truncate(formattedUpdatedAt, maxChars: 32)
        )
    }

    func buildWidgetEntries(maxCount: Int = 24, intervalMinutes: Int = rotationIntervalMinutes) -> [(date: Date, current: DisplayArticle, next: DisplayArticle, index: Int, total: Int, updatedAt: String, filterLabel: String)] {
        guard !rotationList.isEmpty else { return [] }
        let now = Date()
        let total = rotationList.count
        let startIdx = ((currentIndex % total) + total) % total
        var entries: [(Date, DisplayArticle, DisplayArticle, Int, Int, String, String)] = []

        for offset in 0..<maxCount {
            let entryDate = Calendar.current.date(byAdding: .minute, value: offset * intervalMinutes, to: now) ?? now
            let idx = (startIdx + offset) % total
            let nextIdx = (idx + 1) % total
            entries.append((
                entryDate,
                rotationList[idx],
                rotationList[nextIdx],
                idx,
                total,
                formattedUpdatedAt,
                filterLabel
            ))
        }
        return entries
    }

    private func reloadStateFromDefaultsIfNeeded() {
        let defaults = UserDefaults.standard
        if let genreRaw = defaults.stringArray(forKey: Keys.selectedGenres) {
            let parsed = genreRaw.compactMap { GenreCode(rawValue: $0) }
            if parsed != selectedGenres {
                selectedGenres = parsed
                rebuildRotationList(resetIndex: false)
            }
        }
        if let data = defaults.data(forKey: Keys.cachedNewsData),
           let decoded = try? JSONDecoder().decode(NewsData.self, from: data),
           !decoded.articles.isEmpty,
           decoded.updatedAt != newsData.updatedAt {
            newsData = decoded
            isOffline = false
            rebuildRotationList(resetIndex: false)
        }
        currentIndex = defaults.integer(forKey: Keys.currentIndex)
        currentPage = defaults.integer(forKey: Keys.currentPage)
    }

    private func saveRotationPosition() {
        let defaults = UserDefaults.standard
        defaults.set(currentIndex, forKey: Keys.currentIndex)
        defaults.set(currentPage, forKey: Keys.currentPage)
        defaults.set(Date().timeIntervalSince1970, forKey: Keys.lastRotatedAt)
    }

    private func rebuildRotationList(resetIndex: Bool) {
        rotationList = Self.buildRotationList(from: newsData.articles, selectedGenres: selectedGenres)
        if resetIndex || currentIndex < 0 || currentIndex >= rotationList.count {
            currentIndex = 0
            currentPage = 0
            saveRotationPosition()
        }
    }

    // MARK: - Pure Helpers (aligned with frontend/src/index.ts)

    static func buildRotationList(from rawArticles: [ArticleItem], selectedGenres: [GenreCode]) -> [DisplayArticle] {
        guard !rawArticles.isEmpty else { return [] }

        if selectedGenres.isEmpty {
            return rawArticles.enumerated().map { idx, art in
                normalizeArticle(art, index: idx, isDiscovery: false)
            }
        }

        let selectedSet = Set(selectedGenres)
        var preferred: [DisplayArticle] = []
        var others: [DisplayArticle] = []

        for (idx, art) in rawArticles.enumerated() {
            let code = GenreCode.parse(art.genre)
            if selectedSet.contains(code) {
                preferred.append(normalizeArticle(art, index: idx, isDiscovery: false))
            } else {
                others.append(normalizeArticle(art, index: idx, isDiscovery: true))
            }
        }

        others.sort { $0.importance > $1.importance }

        if preferred.isEmpty { return others }
        if others.isEmpty { return preferred }

        // 指定ジャンル3件 + 他ジャンル注目1件のセレンディピティブレンド
        var blended: [DisplayArticle] = []
        var pIdx = 0
        var oIdx = 0
        while pIdx < preferred.count {
            for _ in 0..<3 where pIdx < preferred.count {
                blended.append(preferred[pIdx])
                pIdx += 1
            }
            if oIdx < others.count {
                blended.append(others[oIdx])
                oIdx += 1
            } else if !others.isEmpty && pIdx < preferred.count {
                oIdx = 0
                blended.append(others[oIdx])
                oIdx += 1
            }
        }
        return blended
    }

    static func normalizeArticle(_ item: ArticleItem, index: Int, isDiscovery: Bool) -> DisplayArticle {
        let genreCode = GenreCode.parse(item.genre)
        let trimmedHeadline = item.headline?.trimmingCharacters(in: .whitespacesAndNewlines) ?? ""
        let headlineText = trimmedHeadline.isEmpty ? String(item.summary.prefix(40)) : trimmedHeadline
        let formattedSummary = ensureParagraphs(item.summary)
        let pages = paginateSummary(formattedSummary, maxCharsPerPage: 125)

        return DisplayArticle(
            id: "\(index)-\(item.url)",
            title: item.title,
            url: item.url,
            source: item.source,
            publishedAt: item.publishedAt,
            publishedText: formatJapanesePublishedAt(item.publishedAt),
            genreCode: genreCode,
            genreDisplay: genreCode.shortLabel,
            headlineText: headlineText,
            summary: formattedSummary,
            summaryPages: pages,
            importance: item.importance ?? 5,
            isDiscovery: isDiscovery
        )
    }

    static func ensureParagraphs(_ text: String) -> String {
        let trimmed = text.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else { return "" }
        if trimmed.contains("\n\n") {
            return trimmed
        }

        let sentences = splitSentences(trimmed)
        if sentences.count <= 2 {
            return trimmed
        }

        var paragraphs: [String] = []
        var buffer: [String] = []
        var bufferLength = 0

        for sentence in sentences {
            buffer.append(sentence)
            bufferLength += sentence.count
            if buffer.count >= 2 || bufferLength >= 130 {
                paragraphs.append(buffer.joined())
                buffer.removeAll()
                bufferLength = 0
            }
        }
        if !buffer.isEmpty {
            paragraphs.append(buffer.joined())
        }
        return paragraphs.joined(separator: "\n\n")
    }

    static func paginateSummary(_ summary: String, maxCharsPerPage: Int = 135) -> [String] {
        let cleaned = summary
            .replacingOccurrences(of: "\n\n", with: "\n")
            .trimmingCharacters(in: .whitespacesAndNewlines)
        guard !cleaned.isEmpty else { return [""] }
        if cleaned.count <= maxCharsPerPage {
            return [cleaned]
        }

        let sentences = splitSentences(cleaned)
        guard !sentences.isEmpty else {
            return [String(cleaned.prefix(maxCharsPerPage))]
        }

        var pages: [String] = []
        var current = ""

        for sentence in sentences {
            if current.isEmpty {
                if sentence.count <= maxCharsPerPage {
                    current = sentence
                } else {
                    var remaining = sentence
                    while remaining.count > maxCharsPerPage {
                        pages.append(String(remaining.prefix(maxCharsPerPage)))
                        remaining = String(remaining.dropFirst(maxCharsPerPage))
                    }
                    current = remaining
                }
            } else if current.count + sentence.count <= maxCharsPerPage {
                current += sentence
            } else {
                pages.append(current.trimmingCharacters(in: .whitespacesAndNewlines))
                current = sentence
            }
        }

        if !current.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty {
            pages.append(current.trimmingCharacters(in: .whitespacesAndNewlines))
        }

        return pages.isEmpty ? [cleaned] : pages
    }

    private static func splitSentences(_ text: String) -> [String] {
        var result: [String] = []
        var buffer = ""
        let endPunctuations: Set<Character> = ["。", "！", "？", "\n"]
        let closingBrackets: Set<Character> = ["」", "』", "）", ")"]

        let chars = Array(text)
        for i in chars.indices {
            let ch = chars[i]
            buffer.append(ch)
            if endPunctuations.contains(ch) {
                let nextChar: Character? = (i + 1 < chars.count) ? chars[i + 1] : nil
                if let nextChar, closingBrackets.contains(nextChar) {
                    continue
                }
                let trimmed = buffer.trimmingCharacters(in: .whitespacesAndNewlines)
                if !trimmed.isEmpty {
                    result.append(trimmed)
                }
                buffer = ""
            } else if closingBrackets.contains(ch), let prev = i > 0 ? chars[i - 1] : nil, endPunctuations.contains(prev) {
                let trimmed = buffer.trimmingCharacters(in: .whitespacesAndNewlines)
                if !trimmed.isEmpty {
                    result.append(trimmed)
                }
                buffer = ""
            }
        }

        let tail = buffer.trimmingCharacters(in: .whitespacesAndNewlines)
        if !tail.isEmpty {
            result.append(tail)
        }
        return result
    }

    static func formatJapanesePublishedAt(_ raw: String?) -> String {
        guard let raw, !raw.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
            return ""
        }
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "en_US_POSIX")
        formatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
        formatter.dateFormat = "yyyy-MM-dd HH:mm"

        guard let date = formatter.date(from: String(raw.trimmingCharacters(in: .whitespacesAndNewlines).prefix(16))) else {
            return raw
        }

        let calendar = Calendar(identifier: .gregorian)
        var jstCal = calendar
        jstCal.timeZone = TimeZone(identifier: "Asia/Tokyo") ?? .current

        let month = jstCal.component(.month, from: date)
        let day = jstCal.component(.day, from: date)
        let hour = String(format: "%02d", jstCal.component(.hour, from: date))
        let minute = String(format: "%02d", jstCal.component(.minute, from: date))

        let diffMin = max(0, Int(Date().timeIntervalSince(date) / 60))
        let relLabel: String
        if diffMin < 1 {
            relLabel = "たった今"
        } else if diffMin < 60 {
            relLabel = "\(diffMin)分前"
        } else {
            let diffHours = diffMin / 60
            if diffHours < 24 {
                relLabel = "\(diffHours)時間前"
            } else {
                let diffDays = diffHours / 24
                relLabel = diffDays == 1 ? "昨日" : "\(diffDays)日前"
            }
        }
        return "\(month)月\(day)日 \(hour):\(minute)（\(relLabel)）"
    }

    static func formatUpdatedTime(_ raw: String) -> String {
        let trimmed = raw.trimmingCharacters(in: .whitespacesAndNewlines)
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "en_US_POSIX")
        formatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
        formatter.dateFormat = "yyyy-MM-dd HH:mm"

        if let date = formatter.date(from: String(trimmed.prefix(16))) {
            var jstCal = Calendar(identifier: .gregorian)
            jstCal.timeZone = TimeZone(identifier: "Asia/Tokyo") ?? .current
            let month = jstCal.component(.month, from: date)
            let day = jstCal.component(.day, from: date)
            let hour = String(format: "%02d", jstCal.component(.hour, from: date))
            let minute = String(format: "%02d", jstCal.component(.minute, from: date))
            return "\(month)月\(day)日 \(hour):\(minute)更新"
        }
        return trimmed.replacingOccurrences(of: " JST", with: "")
    }

    private static func truncate(_ text: String, maxChars: Int) -> String {
        guard text.count > maxChars else { return text }
        return String(text.prefix(maxChars - 1)) + "…"
    }

    private static func makeOfflineFallbackData() -> NewsData {
        NewsData(
            updatedAt: "未取得 (オフライン)",
            totalCount: 1,
            config: nil,
            articles: [
                ArticleItem(
                    title: "記事データを読み込みます",
                    url: "https://github.com",
                    source: "System",
                    publishedAt: nil,
                    genre: "other",
                    genreLabel: "総合IT",
                    headline: "ネットワークに接続して記事を取得してください。",
                    summary: "GitHubのRaw URLまたはPrivateリポジトリ用トークンを設定し、最新記事を取得してください。",
                    importance: 5
                )
            ]
        )
    }
}
