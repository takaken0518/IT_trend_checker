import ActivityKit
import AppIntents
import SwiftUI
import WidgetKit

struct ITTrendLiveActivityWidget: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: ITTrendAttributes.self) { context in
            LockScreenLiveActivityView(context: context)
                .widgetURL(URL(string: context.state.url))
                .activityBackgroundTint(Color(red: 15 / 255, green: 23 / 255, blue: 42 / 255).opacity(0.94))
                .activitySystemActionForegroundColor(.white)
        } dynamicIsland: { context in
            let state = context.state
            let genre = GenreCode.parse(state.genreCode)
            let isZenn = state.source.lowercased().contains("zenn")

            return DynamicIsland {
                DynamicIslandExpandedRegion(.leading) {
                    HStack(spacing: 4) {
                        Text("⚡")
                        Text(state.genreDisplay)
                            .font(.caption2.bold())
                            .padding(.horizontal, 6)
                            .padding(.vertical, 2)
                            .background(genre.accentColor.opacity(0.28))
                            .foregroundColor(genre.accentColor)
                            .clipShape(RoundedRectangle(cornerRadius: 4))
                    }
                }

                DynamicIslandExpandedRegion(.trailing) {
                    Text("\(state.currentIndex + 1)/\(max(1, state.totalCount))件")
                        .font(.caption2.bold())
                        .foregroundColor(Color(red: 148 / 255, green: 163 / 255, blue: 184 / 255))
                }

                DynamicIslandExpandedRegion(.center) {
                    VStack(alignment: .leading, spacing: 3) {
                        Text(state.title)
                            .font(.caption.bold())
                            .foregroundColor(.white)
                            .lineLimit(2)

                        Text(state.summaryPageText)
                            .font(.caption2)
                            .foregroundColor(Color(red: 226 / 255, green: 232 / 255, blue: 240 / 255))
                            .lineLimit(3)
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                }

                DynamicIslandExpandedRegion(.bottom) {
                    HStack(spacing: 8) {
                        Button(intent: PrevArticleIntent()) {
                            Text("← 前")
                                .font(.caption2.bold())
                                .padding(.horizontal, 10)
                                .padding(.vertical, 5)
                                .background(Color.white.opacity(0.14))
                                .foregroundColor(.white)
                                .clipShape(Capsule())
                        }
                        .buttonStyle(.plain)

                        if state.totalPages > 1 {
                            Button(intent: ToggleSummaryPageIntent()) {
                                Text("📄 \(state.currentPage + 1)/\(state.totalPages)")
                                    .font(.caption2.bold())
                                    .padding(.horizontal, 10)
                                    .padding(.vertical, 5)
                                    .background(Color(red: 56 / 255, green: 189 / 255, blue: 248 / 255).opacity(0.24))
                                    .foregroundColor(Color(red: 125 / 255, green: 211 / 255, blue: 252 / 255))
                                    .clipShape(Capsule())
                            }
                            .buttonStyle(.plain)
                        }

                        Spacer()

                        Text(state.source.uppercased())
                            .font(.caption2.bold())
                            .foregroundColor(isZenn
                                ? Color(red: 125 / 255, green: 211 / 255, blue: 252 / 255)
                                : Color(red: 252 / 255, green: 165 / 255, blue: 165 / 255))

                        Button(intent: NextArticleIntent()) {
                            Text("次 →")
                                .font(.caption2.bold())
                                .padding(.horizontal, 10)
                                .padding(.vertical, 5)
                                .background(Color(red: 37 / 255, green: 99 / 255, blue: 235 / 255))
                                .foregroundColor(.white)
                                .clipShape(Capsule())
                        }
                        .buttonStyle(.plain)
                    }
                }
            } compactLeading: {
                Text("⚡")
                    .foregroundColor(Color(red: 56 / 255, green: 189 / 255, blue: 248 / 255))
            } compactTrailing: {
                Text("\(state.currentIndex + 1)/\(max(1, state.totalCount))")
                    .font(.caption2.bold())
                    .foregroundColor(.white)
            } minimal: {
                Text("⚡")
            }
            .widgetURL(URL(string: state.url))
            .keylineTint(Color(red: 56 / 255, green: 189 / 255, blue: 248 / 255))
        }
    }
}

private struct LockScreenLiveActivityView: View {
    let context: ActivityViewContext<ITTrendAttributes>

    var body: some View {
        let state = context.state
        let genre = GenreCode.parse(state.genreCode)
        let isZenn = state.source.lowercased().contains("zenn")
        let showHeadline = state.currentPage == 0
            && !state.headlineText.isEmpty
            && state.headlineText != state.title

        VStack(alignment: .leading, spacing: 6) {
            // 1. ヘッダー行
            HStack(spacing: 5) {
                Text("⚡ IT Trend")
                    .font(.system(size: 11.5, weight: .bold))
                    .foregroundColor(Color(red: 96 / 255, green: 165 / 255, blue: 250 / 255))

                pill(
                    state.genreDisplay,
                    bg: genre.accentColor.opacity(0.28),
                    fg: genre.accentColor
                )

                pill(
                    state.source.uppercased(),
                    bg: (isZenn ? Color.blue : Color.red).opacity(0.24),
                    fg: isZenn
                        ? Color(red: 125 / 255, green: 211 / 255, blue: 252 / 255)
                        : Color(red: 252 / 255, green: 165 / 255, blue: 165 / 255)
                )

                if state.isDiscovery {
                    pill(
                        "✨注目",
                        bg: Color.orange.opacity(0.26),
                        fg: Color(red: 252 / 255, green: 211 / 255, blue: 77 / 255)
                    )
                }

                Spacer(minLength: 4)

                Text("\(state.currentIndex + 1)/\(max(1, state.totalCount))件")
                    .font(.system(size: 11, weight: .semibold))
                    .foregroundColor(Color(red: 148 / 255, green: 163 / 255, blue: 184 / 255))
            }
            .layoutPriority(1)

            // 2. 記事タイトル
            Text(state.title)
                .font(.system(size: 14.5, weight: .bold))
                .foregroundColor(.white)
                .lineLimit(3)
                .minimumScaleFactor(0.9)
                .fixedSize(horizontal: false, vertical: true)

            // 3. 一言キャッチ（1ページ目のみ）
            if showHeadline {
                Text("💡 \(state.headlineText)")
                    .font(.system(size: 11.5, weight: .semibold))
                    .foregroundColor(Color(red: 56 / 255, green: 189 / 255, blue: 248 / 255))
                    .lineLimit(2)
                    .minimumScaleFactor(0.9)
            }

            // 4. AI要約（現在ページ）
            Text(state.summaryPageText)
                .font(.system(size: 12))
                .lineSpacing(2)
                .foregroundColor(Color(red: 226 / 255, green: 232 / 255, blue: 240 / 255))
                .lineLimit(showHeadline ? 5 : 6)
                .minimumScaleFactor(0.85)

            // 5. 専用 NEXT プレビューバー（横幅いっぱいに次記事を表示・タップで次へ）
            if !state.nextTitle.isEmpty {
                Button(intent: NextArticleIntent()) {
                    HStack(spacing: 6) {
                        Text("NEXT ▸")
                            .font(.system(size: 10, weight: .bold))
                            .foregroundColor(Color(red: 56 / 255, green: 189 / 255, blue: 248 / 255))

                        Text(state.nextTitle)
                            .font(.system(size: 10.5, weight: .medium))
                            .foregroundColor(Color(red: 203 / 255, green: 213 / 255, blue: 225 / 255))
                            .lineLimit(1)

                        Spacer(minLength: 0)
                    }
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(Color.white.opacity(0.06))
                    .clipShape(RoundedRectangle(cornerRadius: 6))
                    .contentShape(Rectangle())
                }
                .buttonStyle(.plain)
                .layoutPriority(1)
            }

            // 6. ロック画面操作ボタン行
            HStack(spacing: 8) {
                Button(intent: PrevArticleIntent()) {
                    Text("← 前の記事")
                        .font(.system(size: 11.5, weight: .bold))
                        .padding(.horizontal, 12)
                        .padding(.vertical, 6)
                        .background(Color(red: 51 / 255, green: 65 / 255, blue: 85 / 255))
                        .foregroundColor(.white)
                        .clipShape(Capsule())
                        .contentShape(Capsule())
                }
                .buttonStyle(.plain)

                if state.totalPages > 1 {
                    Button(intent: ToggleSummaryPageIntent()) {
                        Text("📄 続き \(state.currentPage + 1)/\(state.totalPages)")
                            .font(.system(size: 11.5, weight: .bold))
                            .padding(.horizontal, 12)
                            .padding(.vertical, 6)
                            .background(Color(red: 14 / 255, green: 165 / 255, blue: 233 / 255).opacity(0.28))
                            .foregroundColor(Color(red: 125 / 255, green: 211 / 255, blue: 252 / 255))
                            .clipShape(Capsule())
                            .contentShape(Capsule())
                    }
                    .buttonStyle(.plain)
                }

                Spacer(minLength: 4)

                Button(intent: NextArticleIntent()) {
                    Text("次の記事 →")
                        .font(.system(size: 11.5, weight: .bold))
                        .padding(.horizontal, 12)
                        .padding(.vertical, 6)
                        .background(Color(red: 37 / 255, green: 99 / 255, blue: 235 / 255))
                        .foregroundColor(.white)
                        .clipShape(Capsule())
                        .contentShape(Capsule())
                }
                .buttonStyle(.plain)
            }
            .layoutPriority(1)
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 13)
    }

    private func pill(_ text: String, bg: Color, fg: Color) -> some View {
        Text(text)
            .font(.system(size: 9.5, weight: .bold))
            .padding(.horizontal, 5)
            .padding(.vertical, 2)
            .background(bg)
            .foregroundColor(fg)
            .clipShape(RoundedRectangle(cornerRadius: 4))
            .lineLimit(1)
    }
}
