import AppIntents
import SwiftUI
import WidgetKit

struct ITTrendWidgetEntry: TimelineEntry {
    let date: Date
    let current: DisplayArticle
    let next: DisplayArticle
    let currentIndex: Int
    let totalCount: Int
    let updatedAt: String
    let filterLabel: String
}

struct ITTrendTimelineProvider: TimelineProvider {
    func placeholder(in context: Context) -> ITTrendWidgetEntry {
        makeSampleEntry()
    }

    func getSnapshot(in context: Context, completion: @escaping (ITTrendWidgetEntry) -> Void) {
        Task { @MainActor in
            let entries = ArticleStore.shared.buildWidgetEntries(maxCount: 1)
            if let first = entries.first {
                completion(ITTrendWidgetEntry(
                    date: first.date,
                    current: first.current,
                    next: first.next,
                    currentIndex: first.index,
                    totalCount: first.total,
                    updatedAt: first.updatedAt,
                    filterLabel: first.filterLabel
                ))
            } else {
                completion(makeSampleEntry())
            }
        }
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<ITTrendWidgetEntry>) -> Void) {
        Task { @MainActor in
            if !context.isPreview {
                await ArticleStore.shared.refreshFromNetwork()
            }
            let rawEntries = ArticleStore.shared.buildWidgetEntries(maxCount: 24)
            let mapped = rawEntries.map { item in
                ITTrendWidgetEntry(
                    date: item.date,
                    current: item.current,
                    next: item.next,
                    currentIndex: item.index,
                    totalCount: item.total,
                    updatedAt: item.updatedAt,
                    filterLabel: item.filterLabel
                )
            }
            let finalEntries = mapped.isEmpty ? [makeSampleEntry()] : mapped
            completion(Timeline(entries: finalEntries, policy: .atEnd))
        }
    }

    private func makeSampleEntry() -> ITTrendWidgetEntry {
        let sample = DisplayArticle(
            id: "sample",
            title: "最新ITトレンド記事を読み込み中…",
            url: "https://github.com",
            source: "Zenn",
            publishedAt: nil,
            publishedText: "たった今",
            genreCode: .ai,
            genreDisplay: "AI・LLM",
            headlineText: "AI要約とトレンドニュースを自動で整理して表示します",
            summary: "最新の技術記事を2時間おきに自動取得し、Geminiで簡潔に要約します。",
            summaryPages: ["最新の技術記事を2時間おきに自動取得し、Geminiで簡潔に要約します。"],
            importance: 8,
            isDiscovery: false
        )
        return ITTrendWidgetEntry(
            date: Date(),
            current: sample,
            next: sample,
            currentIndex: 0,
            totalCount: 1,
            updatedAt: "更新待機中",
            filterLabel: "ALL"
        )
    }
}

struct ITTrendTimelineWidget: Widget {
    let kind = "ITTrendTimelineWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: ITTrendTimelineProvider()) { entry in
            ITTrendWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("IT Trend ウィジェット")
        .description("最新のITトレンド記事とAI要約を自動ローテーション表示します。")
        .supportedFamilies([
            .systemLarge,
            .accessoryRectangular,
            .accessoryInline,
            .accessoryCircular,
        ])
    }
}

private struct ITTrendWidgetEntryView: View {
    @Environment(\.widgetFamily) private var family
    let entry: ITTrendWidgetEntry

    var body: some View {
        Group {
            switch family {
            case .accessoryRectangular:
                rectangularAccessoryView
            case .accessoryInline:
                inlineAccessoryView
            case .accessoryCircular:
                circularAccessoryView
            default:
                largeHomeWidgetView
            }
        }
        .containerBackground(for: .widget) {
            if family == .systemLarge {
                LinearGradient(
                    colors: [
                        Color(red: 15 / 255, green: 23 / 255, blue: 42 / 255),
                        Color(red: 30 / 255, green: 27 / 255, blue: 75 / 255)
                    ],
                    startPoint: .top,
                    endPoint: .bottom
                )
            } else {
                Color.clear
            }
        }
    }

    private var rectangularAccessoryView: some View {
        VStack(alignment: .leading, spacing: 1) {
            Text("⚡ [\(entry.current.genreDisplay)] \(entry.currentIndex + 1)/\(max(1, entry.totalCount))件")
                .font(.system(size: 10, weight: .bold))
                .lineLimit(1)

            Text(entry.current.title)
                .font(.system(size: 11, weight: .bold))
                .lineLimit(2)

            let sub = entry.current.headlineText.isEmpty ? entry.current.summary : entry.current.headlineText
            Text("💡 \(sub)")
                .font(.system(size: 10))
                .lineLimit(1)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .widgetURL(URL(string: entry.current.url))
    }

    private var inlineAccessoryView: some View {
        let sub = entry.current.headlineText.isEmpty ? entry.current.title : entry.current.headlineText
        return Text("⚡ [\(entry.current.genreDisplay)] \(sub)")
            .widgetURL(URL(string: entry.current.url))
    }

    private var circularAccessoryView: some View {
        ZStack {
            AccessoryWidgetBackground()
            VStack(spacing: 1) {
                Text("⚡ IT")
                    .font(.system(size: 11, weight: .bold))
                Text("\(entry.currentIndex + 1)/\(max(1, entry.totalCount))")
                    .font(.system(size: 10, weight: .medium))
            }
        }
        .widgetURL(URL(string: entry.current.url))
    }

    private var largeHomeWidgetView: some View {
        let current = entry.current
        let isZenn = current.source.lowercased().contains("zenn")

        return VStack(alignment: .leading, spacing: 6) {
            // 1. ヘッダー
            HStack(spacing: 6) {
                Text("⚡ IT Trend")
                    .font(.system(size: 13, weight: .bold))
                    .foregroundColor(Color(red: 96 / 255, green: 165 / 255, blue: 250 / 255))

                Text(entry.filterLabel)
                    .font(.system(size: 9, weight: .bold))
                    .padding(.horizontal, 6)
                    .padding(.vertical, 2)
                    .background(Color(red: 51 / 255, green: 65 / 255, blue: 85 / 255).opacity(0.85))
                    .foregroundColor(Color(red: 203 / 255, green: 213 / 255, blue: 225 / 255))
                    .clipShape(RoundedRectangle(cornerRadius: 4))

                Spacer()

                Text("\(entry.currentIndex + 1)/\(max(1, entry.totalCount))件 • \(entry.updatedAt)")
                    .font(.system(size: 10, weight: .medium))
                    .foregroundColor(Color(red: 148 / 255, green: 163 / 255, blue: 184 / 255))
                    .lineLimit(1)
            }

            // 2. メインカード
            Link(destination: URL(string: current.url) ?? URL(string: "https://github.com")!) {
                VStack(alignment: .leading, spacing: 6) {
                    HStack(spacing: 4) {
                        Text(current.genreDisplay)
                            .font(.system(size: 9, weight: .bold))
                            .padding(.horizontal, 6)
                            .padding(.vertical, 2)
                            .background(current.genreCode.accentColor.opacity(0.28))
                            .foregroundColor(current.genreCode.accentColor)
                            .clipShape(RoundedRectangle(cornerRadius: 4))

                        Text(current.source.uppercased())
                            .font(.system(size: 9, weight: .bold))
                            .padding(.horizontal, 5)
                            .padding(.vertical, 2)
                            .background((isZenn ? Color.blue : Color.red).opacity(0.22))
                            .foregroundColor(isZenn
                                ? Color(red: 125 / 255, green: 211 / 255, blue: 252 / 255)
                                : Color(red: 252 / 255, green: 165 / 255, blue: 165 / 255))
                            .clipShape(RoundedRectangle(cornerRadius: 4))

                        if current.isDiscovery {
                            Text("✨ 注目枠")
                                .font(.system(size: 9, weight: .bold))
                                .padding(.horizontal, 5)
                                .padding(.vertical, 2)
                                .background(Color.orange.opacity(0.25))
                                .foregroundColor(Color(red: 252 / 255, green: 211 / 255, blue: 77 / 255))
                                .clipShape(RoundedRectangle(cornerRadius: 4))
                        }

                        Spacer()

                        if !current.publishedText.isEmpty {
                            Text("🕒 \(current.publishedText)")
                                .font(.system(size: 9, weight: .medium))
                                .foregroundColor(Color(red: 148 / 255, green: 163 / 255, blue: 184 / 255))
                                .lineLimit(1)
                        }
                    }

                    Text(current.title)
                        .font(.system(size: 14, weight: .bold))
                        .foregroundColor(Color(red: 248 / 255, green: 250 / 255, blue: 252 / 255))
                        .lineLimit(3)
                        .multilineTextAlignment(.leading)

                    if !current.headlineText.isEmpty && current.headlineText != current.title {
                        Text("💡 \(current.headlineText)")
                            .font(.system(size: 11, weight: .bold))
                            .foregroundColor(Color(red: 56 / 255, green: 189 / 255, blue: 248 / 255))
                            .lineLimit(2)
                            .multilineTextAlignment(.leading)
                    }

                    Text(current.summary)
                        .font(.system(size: 11))
                        .foregroundColor(Color(red: 226 / 255, green: 232 / 255, blue: 240 / 255))
                        .lineLimit(9)
                        .multilineTextAlignment(.leading)

                    Spacer(minLength: 0)
                }
                .padding(11)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                .background(Color(red: 30 / 255, green: 41 / 255, blue: 59 / 255).opacity(0.8))
                .clipShape(RoundedRectangle(cornerRadius: 12))
            }
            .buttonStyle(.plain)

            // 3. フッター
            HStack(spacing: 6) {
                Button(intent: PrevArticleIntent()) {
                    Text("←")
                        .font(.system(size: 10, weight: .bold))
                        .padding(.horizontal, 8)
                        .padding(.vertical, 3)
                        .background(Color(red: 51 / 255, green: 65 / 255, blue: 85 / 255).opacity(0.9))
                        .foregroundColor(.white)
                        .clipShape(RoundedRectangle(cornerRadius: 5))
                }
                .buttonStyle(.plain)

                Text("NEXT ▸")
                    .font(.system(size: 9, weight: .bold))
                    .foregroundColor(Color(red: 56 / 255, green: 189 / 255, blue: 248 / 255))

                Text("[\(entry.next.genreDisplay)] \(entry.next.title)")
                    .font(.system(size: 9.5))
                    .foregroundColor(Color(red: 148 / 255, green: 163 / 255, blue: 184 / 255))
                    .lineLimit(1)

                Spacer()

                Button(intent: NextArticleIntent()) {
                    Text("→")
                        .font(.system(size: 10, weight: .bold))
                        .padding(.horizontal, 8)
                        .padding(.vertical, 3)
                        .background(Color(red: 51 / 255, green: 65 / 255, blue: 85 / 255).opacity(0.9))
                        .foregroundColor(.white)
                        .clipShape(RoundedRectangle(cornerRadius: 5))
                }
                .buttonStyle(.plain)
            }
        }
    }
}
