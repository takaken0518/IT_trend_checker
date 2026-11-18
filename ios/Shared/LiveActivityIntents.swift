import AppIntents
import Foundation

struct NextArticleIntent: LiveActivityIntent {
    static var title: LocalizedStringResource = "次の記事へ"
    static var description = IntentDescription("ITトレンドの次の記事を表示します。")

    init() {}

    func perform() async throws -> some IntentResult {
        await ArticleStore.shared.stepArticle(delta: 1)
        return .result()
    }
}

struct PrevArticleIntent: LiveActivityIntent {
    static var title: LocalizedStringResource = "前の記事へ"
    static var description = IntentDescription("ITトレンドの前の記事を表示します。")

    init() {}

    func perform() async throws -> some IntentResult {
        await ArticleStore.shared.stepArticle(delta: -1)
        return .result()
    }
}

struct ToggleSummaryPageIntent: LiveActivityIntent {
    static var title: LocalizedStringResource = "要約ページを切り替え"
    static var description = IntentDescription("ロック画面のカード上で要約の続きページを切り替えます。")

    init() {}

    func perform() async throws -> some IntentResult {
        await ArticleStore.shared.toggleSummaryPage()
        return .result()
    }
}

struct StartITTrendLiveActivityIntent: LiveActivityIntent {
    static var title: LocalizedStringResource = "ロック画面カードを開始・更新"
    static var description = IntentDescription("最新のITトレンド記事を取得し、ロック画面のLive Activityに表示します。")

    init() {}

    func perform() async throws -> some IntentResult {
        await ArticleStore.shared.refreshFromNetwork()
        await ArticleStore.shared.startOrUpdateLiveActivity(forceRestart: false)
        return .result()
    }
}
