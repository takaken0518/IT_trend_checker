import ActivityKit
import Foundation
import SwiftUI

enum GenreCode: String, CaseIterable, Codable, Hashable, Identifiable {
    case ai
    case web
    case infra
    case mobile
    case biz
    case other

    var id: String { rawValue }

    var shortLabel: String {
        switch self {
        case .ai: return "AI・LLM"
        case .web: return "Web・言語"
        case .infra: return "インフラ"
        case .mobile: return "モバイル"
        case .biz: return "ビジネス"
        case .other: return "総合IT"
        }
    }

    var fullLabel: String {
        switch self {
        case .ai: return "AI・LLM・機械学習"
        case .web: return "Web開発・言語"
        case .infra: return "インフラ・クラウド"
        case .mobile: return "モバイル・個人開発"
        case .biz: return "ITビジネス・組織"
        case .other: return "総合・その他IT"
        }
    }

    var accentColor: Color {
        switch self {
        case .ai: return Color(red: 139 / 255, green: 92 / 255, blue: 246 / 255)
        case .web: return Color(red: 59 / 255, green: 130 / 255, blue: 246 / 255)
        case .infra: return Color(red: 16 / 255, green: 185 / 255, blue: 129 / 255)
        case .mobile: return Color(red: 249 / 255, green: 115 / 255, blue: 22 / 255)
        case .biz: return Color(red: 234 / 255, green: 179 / 255, blue: 8 / 255)
        case .other: return Color(red: 100 / 255, green: 116 / 255, blue: 139 / 255)
        }
    }

    static var selectableFilterGenres: [GenreCode] {
        [.ai, .web, .infra, .mobile, .biz]
    }

    static func parse(_ raw: String?) -> GenreCode {
        guard let normalized = raw?.trimmingCharacters(in: .whitespacesAndNewlines).lowercased(),
              let code = GenreCode(rawValue: normalized) else {
            return .other
        }
        return code
    }
}

struct ArticleItem: Codable, Hashable {
    let title: String
    let url: String
    let source: String
    let publishedAt: String?
    let genre: String?
    let genreLabel: String?
    let headline: String?
    let summary: String
    let importance: Int?

    enum CodingKeys: String, CodingKey {
        case title
        case url
        case source
        case publishedAt = "published_at"
        case genre
        case genreLabel = "genre_label"
        case headline
        case summary
        case importance
    }
}

struct NewsConfig: Codable, Hashable {
    let selectedGenres: [String]?
    let otherGenreMinRatio: Double?
    let maxAgeHours: Double?

    enum CodingKeys: String, CodingKey {
        case selectedGenres = "selected_genres"
        case otherGenreMinRatio = "other_genre_min_ratio"
        case maxAgeHours = "max_age_hours"
    }
}

struct NewsData: Codable, Hashable {
    let updatedAt: String
    let totalCount: Int?
    let config: NewsConfig?
    let articles: [ArticleItem]

    enum CodingKeys: String, CodingKey {
        case updatedAt = "updated_at"
        case totalCount = "total_count"
        case config
        case articles
    }
}

struct DisplayArticle: Identifiable, Hashable {
    let id: String
    let title: String
    let url: String
    let source: String
    let publishedAt: String?
    let publishedText: String
    let genreCode: GenreCode
    let genreDisplay: String
    let headlineText: String
    let summary: String
    let summaryPages: [String]
    let importance: Int
    let isDiscovery: Bool
}

struct ITTrendAttributes: ActivityAttributes {
    struct ContentState: Codable, Hashable {
        var title: String
        var url: String
        var source: String
        var genreCode: String
        var genreDisplay: String
        var publishedText: String
        var headlineText: String
        var summaryPageText: String
        var isDiscovery: Bool
        var currentIndex: Int
        var totalCount: Int
        var currentPage: Int
        var totalPages: Int
        var nextTitle: String
        var updatedAt: String
    }

    var filterLabel: String
}
