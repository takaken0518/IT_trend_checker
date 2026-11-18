import SwiftUI

@main
struct ITTrendApp: App {
    @Environment(\.scenePhase) private var scenePhase
    @StateObject private var store = ArticleStore.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(store)
                .preferredColorScheme(.dark)
                .task {
                    await store.refreshFromNetwork()
                }
                .onChange(of: scenePhase) { _, newPhase in
                    if newPhase == .active {
                        store.refreshLiveActivityStatus()
                    }
                }
                .onOpenURL { url in
                    handleIncomingURL(url)
                }
        }
    }

    private func handleIncomingURL(_ url: URL) {
        guard url.scheme?.lowercased() == "ittrend" else { return }
        let host = url.host?.lowercased() ?? ""
        Task {
            switch host {
            case "start":
                await store.refreshFromNetwork()
                await store.startOrUpdateLiveActivity()
            case "next":
                await store.stepArticle(delta: 1)
            case "prev":
                await store.stepArticle(delta: -1)
            case "refresh":
                await store.refreshFromNetwork()
            default:
                break
            }
        }
    }
}
