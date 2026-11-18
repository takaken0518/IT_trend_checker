import SwiftUI

struct ContentView: View {
    @EnvironmentObject private var store: ArticleStore
    @Environment(\.openURL) private var openURL

    @State private var showArticleList = false
    @State private var showSettings = false

    private let bgTop = Color(red: 15 / 255, green: 23 / 255, blue: 42 / 255)
    private let bgBottom = Color(red: 30 / 255, green: 27 / 255, blue: 75 / 255)
    private let cardBg = Color(red: 30 / 255, green: 41 / 255, blue: 59 / 255)

    var body: some View {
        ZStack {
            LinearGradient(colors: [bgTop, bgBottom], startPoint: .top, endPoint: .bottom)
                .ignoresSafeArea()

            VStack(spacing: 12) {
                headerView
                liveActivityControlCard
                genreFilterBar
                articleCardView
                bottomControlsBar
            }
            .padding(.horizontal, 14)
            .padding(.vertical, 10)
        }
        .sheet(isPresented: $showArticleList) {
            ArticleListSheet()
                .environmentObject(store)
        }
        .sheet(isPresented: $showSettings) {
            SettingsSheet()
                .environmentObject(store)
        }
    }

    private var headerView: some View {
        HStack(spacing: 8) {
            Text("⚡ IT Trend")
                .font(.headline.bold())
                .foregroundColor(Color(red: 96 / 255, green: 165 / 255, blue: 250 / 255))

            Text(store.filterLabel)
                .font(.caption2.bold())
                .padding(.horizontal, 7)
                .padding(.vertical, 3)
                .background(Color(red: 51 / 255, green: 65 / 255, blue: 85 / 255))
                .foregroundColor(Color(red: 203 / 255, green: 213 / 255, blue: 225 / 255))
                .clipShape(RoundedRectangle(cornerRadius: 6))
                .lineLimit(1)

            Spacer()

            if !store.rotationList.isEmpty {
                Text("\(store.currentIndex + 1)/\(store.rotationList.count) • \(store.formattedUpdatedAt)")
                    .font(.caption2)
                    .foregroundColor(Color(red: 148 / 255, green: 163 / 255, blue: 184 / 255))
                    .lineLimit(1)
            }

            Button {
                Task { await store.refreshFromNetwork() }
            } label: {
                if store.isLoading {
                    ProgressView()
                        .controlSize(.small)
                        .tint(.white)
                } else {
                    Image(systemName: "arrow.clockwise")
                        .font(.subheadline.weight(.semibold))
                        .foregroundColor(.white.opacity(0.85))
                }
            }
            .buttonStyle(.plain)

            Button {
                showArticleList = true
            } label: {
                Image(systemName: "list.bullet")
                    .font(.subheadline.weight(.semibold))
                    .foregroundColor(.white.opacity(0.85))
            }
            .buttonStyle(.plain)

            Button {
                showSettings = true
            } label: {
                Image(systemName: "gearshape")
                    .font(.subheadline.weight(.semibold))
                    .foregroundColor(.white.opacity(0.85))
            }
            .buttonStyle(.plain)
        }
    }

    private var liveActivityControlCard: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack(spacing: 8) {
                Circle()
                    .fill(store.isLiveActivityActive ? Color.green : Color.gray)
                    .frame(width: 8, height: 8)

                Text(store.isLiveActivityActive ? "ロック画面カード表示中 (Live Activity)" : "ロック画面カード停止中")
                    .font(.caption.bold())
                    .foregroundColor(.white)

                Spacer()

                if store.isLiveActivityActive {
                    Button {
                        Task { await store.endAllLiveActivities() }
                    } label: {
                        Text("停止")
                            .font(.caption2.bold())
                            .padding(.horizontal, 10)
                            .padding(.vertical, 4)
                            .background(Color.red.opacity(0.25))
                            .foregroundColor(Color(red: 252 / 255, green: 165 / 255, blue: 165 / 255))
                            .clipShape(Capsule())
                    }
                    .buttonStyle(.plain)
                }
            }

            Button {
                Task { await store.startOrUpdateLiveActivity() }
            } label: {
                HStack(spacing: 6) {
                    Image(systemName: "lock.display")
                    Text(store.isLiveActivityActive ? "ロック画面のカードを最新状態に同期" : "ロック画面にカードを表示 (Live Activity)")
                }
                .font(.subheadline.bold())
                .frame(maxWidth: .infinity)
                .padding(.vertical, 10)
                .background(
                    LinearGradient(
                        colors: [
                            Color(red: 37 / 255, green: 99 / 255, blue: 235 / 255),
                            Color(red: 99 / 255, green: 102 / 255, blue: 241 / 255)
                        ],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .foregroundColor(.white)
                .clipShape(RoundedRectangle(cornerRadius: 10))
            }
            .buttonStyle(.plain)

            if let message = store.statusMessage, !message.isEmpty {
                Text(message)
                    .font(.caption2)
                    .foregroundColor(Color(red: 125 / 255, green: 211 / 255, blue: 252 / 255))
                    .lineLimit(2)
            } else {
                Text("💡 表示開始後は画面をロックしたまま「← 前」「📄 1/2 ▾」「次 →」ボタンで記事・要約を切り替えられます。")
                    .font(.caption2)
                    .foregroundColor(Color(red: 148 / 255, green: 163 / 255, blue: 184 / 255))
            }
        }
        .padding(12)
        .background(cardBg.opacity(0.88))
        .overlay(
            RoundedRectangle(cornerRadius: 14)
                .stroke(Color.white.opacity(0.1), lineWidth: 1)
        )
        .clipShape(RoundedRectangle(cornerRadius: 14))
    }

    private var genreFilterBar: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 6) {
                genreChip(title: "ALL", isSelected: store.selectedGenres.isEmpty, color: Color.blue) {
                    Task { await store.toggleGenre(nil) }
                }

                ForEach(GenreCode.selectableFilterGenres) { genre in
                    let selected = store.selectedGenres.contains(genre)
                    genreChip(title: genre.shortLabel, isSelected: selected, color: genre.accentColor) {
                        Task { await store.toggleGenre(genre) }
                    }
                }
            }
            .padding(.vertical, 2)
        }
    }

    private func genreChip(title: String, isSelected: Bool, color: Color, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Text(title)
                .font(.caption.bold())
                .padding(.horizontal, 11)
                .padding(.vertical, 6)
                .background(isSelected ? color.opacity(0.32) : cardBg.opacity(0.75))
                .foregroundColor(isSelected ? .white : Color(red: 148 / 255, green: 163 / 255, blue: 184 / 255))
                .overlay(
                    Capsule()
                        .stroke(isSelected ? color : Color.white.opacity(0.1), lineWidth: 1)
                )
                .clipShape(Capsule())
        }
        .buttonStyle(.plain)
    }

    private var articleCardView: some View {
        Group {
            if let article = store.currentArticle {
                VStack(alignment: .leading, spacing: 10) {
                    HStack(spacing: 6) {
                        badgeView(
                            text: article.genreDisplay,
                            bg: article.genreCode.accentColor.opacity(0.24),
                            fg: article.genreCode.accentColor
                        )

                        let isZenn = article.source.lowercased().contains("zenn")
                        badgeView(
                            text: article.source.uppercased(),
                            bg: (isZenn ? Color.blue : Color.red).opacity(0.22),
                            fg: isZenn
                                ? Color(red: 125 / 255, green: 211 / 255, blue: 252 / 255)
                                : Color(red: 252 / 255, green: 165 / 255, blue: 165 / 255)
                        )

                        if article.isDiscovery {
                            badgeView(
                                text: "✨ 注目枠",
                                bg: Color.orange.opacity(0.25),
                                fg: Color(red: 252 / 255, green: 211 / 255, blue: 77 / 255)
                            )
                        }

                        Spacer()

                        if !article.publishedText.isEmpty {
                            Text("🕒 \(article.publishedText)")
                                .font(.caption2)
                                .foregroundColor(Color(red: 148 / 255, green: 163 / 255, blue: 184 / 255))
                                .lineLimit(1)
                        }
                    }

                    Text(article.title)
                        .font(.title3.bold())
                        .foregroundColor(Color(red: 248 / 255, green: 250 / 255, blue: 252 / 255))
                        .fixedSize(horizontal: false, vertical: true)

                    if !article.headlineText.isEmpty && article.headlineText != article.title {
                        Text("💡 \(article.headlineText)")
                            .font(.subheadline.bold())
                            .foregroundColor(Color(red: 56 / 255, green: 189 / 255, blue: 248 / 255))
                            .fixedSize(horizontal: false, vertical: true)
                    }

                    Divider()
                        .background(Color.white.opacity(0.12))

                    ScrollView {
                        Text(article.summary)
                            .font(.body)
                            .lineSpacing(5)
                            .foregroundColor(Color(red: 226 / 255, green: 232 / 255, blue: 240 / 255))
                            .frame(maxWidth: .infinity, alignment: .leading)
                    }
                }
                .padding(14)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                .background(cardBg.opacity(0.84))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .stroke(Color.white.opacity(0.09), lineWidth: 1)
                )
                .clipShape(RoundedRectangle(cornerRadius: 16))
            } else {
                Spacer()
                Text("記事がありません")
                    .foregroundColor(.secondary)
                Spacer()
            }
        }
    }

    private func badgeView(text: String, bg: Color, fg: Color) -> some View {
        Text(text)
            .font(.caption2.bold())
            .padding(.horizontal, 7)
            .padding(.vertical, 3)
            .background(bg)
            .foregroundColor(fg)
            .clipShape(RoundedRectangle(cornerRadius: 5))
    }

    private var bottomControlsBar: some View {
        VStack(spacing: 8) {
            HStack(spacing: 8) {
                Button {
                    Task { await store.stepArticle(delta: -1) }
                } label: {
                    Text("← 前へ")
                        .font(.subheadline.bold())
                        .padding(.horizontal, 14)
                        .padding(.vertical, 11)
                        .background(cardBg.opacity(0.9))
                        .foregroundColor(.white)
                        .overlay(
                            RoundedRectangle(cornerRadius: 10)
                                .stroke(Color.white.opacity(0.12), lineWidth: 1)
                        )
                        .clipShape(RoundedRectangle(cornerRadius: 10))
                }
                .buttonStyle(.plain)

                Button {
                    if let urlStr = store.currentArticle?.url, let url = URL(string: urlStr) {
                        openURL(url)
                    }
                } label: {
                    Text("元記事を開く ↗")
                        .font(.subheadline.bold())
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 11)
                        .background(Color(red: 37 / 255, green: 99 / 255, blue: 235 / 255))
                        .foregroundColor(.white)
                        .clipShape(RoundedRectangle(cornerRadius: 10))
                }
                .buttonStyle(.plain)

                Button {
                    Task { await store.stepArticle(delta: 1) }
                } label: {
                    Text("次へ →")
                        .font(.subheadline.bold())
                        .padding(.horizontal, 14)
                        .padding(.vertical, 11)
                        .background(cardBg.opacity(0.9))
                        .foregroundColor(.white)
                        .overlay(
                            RoundedRectangle(cornerRadius: 10)
                                .stroke(Color.white.opacity(0.12), lineWidth: 1)
                        )
                        .clipShape(RoundedRectangle(cornerRadius: 10))
                }
                .buttonStyle(.plain)
            }

            if let next = store.nextArticle {
                HStack(spacing: 6) {
                    Text("NEXT ▸")
                        .font(.caption2.bold())
                        .foregroundColor(Color(red: 56 / 255, green: 189 / 255, blue: 248 / 255))
                    Text("[\(next.genreDisplay)] \(next.title)")
                        .font(.caption)
                        .foregroundColor(Color(red: 148 / 255, green: 163 / 255, blue: 184 / 255))
                        .lineLimit(1)
                    Spacer()
                }
                .padding(.horizontal, 4)
            }
        }
    }
}

private struct ArticleListSheet: View {
    @EnvironmentObject private var store: ArticleStore
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            List {
                ForEach(Array(store.rotationList.enumerated()), id: \.element.id) { index, item in
                    Button {
                        Task {
                            await store.selectArticle(at: index)
                            dismiss()
                        }
                    } label: {
                        HStack(alignment: .top, spacing: 10) {
                            Text("\(index + 1)")
                                .font(.caption.bold())
                                .foregroundColor(index == store.currentIndex ? .blue : .secondary)
                                .frame(width: 24, alignment: .trailing)

                            VStack(alignment: .leading, spacing: 4) {
                                HStack(spacing: 6) {
                                    Text(item.genreDisplay)
                                        .font(.caption2.bold())
                                        .foregroundColor(item.genreCode.accentColor)
                                    Text(item.source.uppercased())
                                        .font(.caption2)
                                        .foregroundColor(.secondary)
                                    if item.isDiscovery {
                                        Text("✨ 注目枠")
                                            .font(.caption2.bold())
                                            .foregroundColor(.orange)
                                    }
                                }
                                Text(item.title)
                                    .font(.subheadline.weight(index == store.currentIndex ? .bold : .regular))
                                    .foregroundColor(.primary)
                                    .lineLimit(2)
                            }
                        }
                        .padding(.vertical, 4)
                    }
                }
            }
            .navigationTitle("記事一覧 (\(store.rotationList.count)件)")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("閉じる") { dismiss() }
                }
            }
        }
    }
}

private struct SettingsSheet: View {
    @EnvironmentObject private var store: ArticleStore
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            Form {
                Section("データソース設定") {
                    TextField("articles.json URL", text: $store.jsonURLString)
                        .textInputAutocapitalization(.never)
                        .autocorrectionDisabled()
                        .keyboardType(.URL)

                    SecureField("GitHub Token (Privateリポジトリ用・任意)", text: $store.githubToken)
                        .textInputAutocapitalization(.never)
                        .autocorrectionDisabled()

                    Button("デフォルトURLに戻す") {
                        store.jsonURLString = ArticleStore.defaultJsonURL
                    }
                }

                Section("ロック画面の自動起動（ショートカット推奨）") {
                    Text("iOSの仕様上、Live Activityは最長8時間で自動終了します。iPhone標準の「ショートカット」アプリ＞オートメーションで毎朝「ロック画面カードを開始・更新（またはURL `ittrend://start` を開く）」を設定すると、毎日自動でロック画面に最新記事カードが表示されます。")
                        .font(.footnote)
                        .foregroundColor(.secondary)
                }
            }
            .navigationTitle("設定")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("完了") {
                        Task {
                            await store.refreshFromNetwork()
                            dismiss()
                        }
                    }
                }
            }
        }
    }
}
