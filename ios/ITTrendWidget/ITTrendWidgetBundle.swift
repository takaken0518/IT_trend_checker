import SwiftUI
import WidgetKit

@main
struct ITTrendWidgetBundle: WidgetBundle {
    var body: some Widget {
        ITTrendTimelineWidget()
        ITTrendLiveActivityWidget()
    }
}
