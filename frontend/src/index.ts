// ==========================================
// IT Trend Widget for Scriptable
// ==========================================

// ▼ 設定: ご自身のGitHubリポジトリ情報に合わせて書き換えてください
// Publicリポジトリの場合: Raw URLを指定（例: https://raw.githubusercontent.com/<USER>/<REPO>/main/articles.json）
// Privateリポジトリの場合: loader/scriptable-loader.js の GITHUB_TOKEN が自動引き継ぎされます（このファイルは空のままでOK）
const GITHUB_RAW_JSON_URL = "https://raw.githubusercontent.com/takaken0518/IT_trend_checker/main/articles.json";
const GITHUB_TOKEN = ""; // 通常は空のまま（iPhone側の scriptable-loader.js にのみ設定）

const CACHE_FILENAME = "it_trend_articles_cache.json";
const ROTATION_STATE_FILENAME = "it_trend_rotation_state.json";
const ROTATION_INTERVAL_MINUTES = 10; // ウィジェットの最小自動切替間隔（分）

type GenreCode = "ai" | "web" | "infra" | "mobile" | "biz" | "other";

interface ArticleItem {
  title: string;
  url: string;
  source: "Zenn" | "Hatena" | string;
  published_at?: string;
  genre?: GenreCode | string;
  genre_label?: string;
  headline?: string;
  summary: string;
  importance?: number;
}

interface NewsData {
  updated_at: string;
  total_count?: number;
  config?: {
    selected_genres?: string[];
    other_genre_min_ratio?: number;
    genres?: Record<string, string>;
  };
  articles: ArticleItem[];
}

interface DisplayArticle extends ArticleItem {
  genreCode: GenreCode;
  genreDisplay: string;
  headlineText: string;
  isDiscovery: boolean;
}

interface RotationState {
  currentIndex: number;
  filterKey: string;
  lastRotatedAt?: number;
}

const GENRE_META: Record<
  GenreCode,
  { shortLabel: string; fullLabel: string; color: string }
> = {
  ai: { shortLabel: "AI・LLM", fullLabel: "AI・LLM・機械学習", color: "#8b5cf6" },
  web: { shortLabel: "Web・言語", fullLabel: "Web開発・言語", color: "#3b82f6" },
  infra: { shortLabel: "インフラ", fullLabel: "インフラ・クラウド", color: "#10b981" },
  mobile: { shortLabel: "モバイル", fullLabel: "モバイル・個人開発", color: "#f97316" },
  biz: { shortLabel: "ビジネス", fullLabel: "ITビジネス・組織", color: "#eab308" },
  other: { shortLabel: "総合IT", fullLabel: "総合・その他IT", color: "#64748b" },
};

const GENRE_ALIASES: Record<string, GenreCode> = {
  ai: "ai",
  llm: "ai",
  ml: "ai",
  "機械学習": "ai",
  "生成ai": "ai",
  web: "web",
  frontend: "web",
  backend: "web",
  lang: "web",
  "言語": "web",
  "web開発": "web",
  infra: "infra",
  cloud: "infra",
  devops: "infra",
  security: "infra",
  sec: "infra",
  "インフラ": "infra",
  "クラウド": "infra",
  "セキュリティ": "infra",
  mobile: "mobile",
  gadget: "mobile",
  ios: "mobile",
  android: "mobile",
  indie: "mobile",
  "モバイル": "mobile",
  "ガジェット": "mobile",
  "個人開発": "mobile",
  biz: "biz",
  business: "biz",
  career: "biz",
  mgmt: "biz",
  "ビジネス": "biz",
  "itビジネス": "biz",
  "キャリア": "biz",
  "マネジメント": "biz",
  other: "other",
  "その他": "other",
  "総合": "other",
};

/**
 * ローカルキャッシュ用のファイルパスを取得
 */
function getCachePath(filename: string): string {
  const fm = FileManager.local();
  return fm.joinPath(fm.cacheDirectory(), filename);
}

function getEffectiveToken(): string {
  if (GITHUB_TOKEN) return GITHUB_TOKEN;
  const shared = (globalThis as Record<string, unknown>).__IT_TREND_GITHUB_TOKEN__;
  return typeof shared === "string" ? shared : "";
}

/**
 * 記事データを取得（ネットワーク優先、失敗時はローカルキャッシュにフォールバック）
 */
async function loadArticles(): Promise<{ data: NewsData; isOffline: boolean }> {
  const fm = FileManager.local();
  const cachePath = getCachePath(CACHE_FILENAME);

  const cacheBuster = `?t=${Date.now()}`;
  const requestUrl = GITHUB_RAW_JSON_URL.includes("?")
    ? `${GITHUB_RAW_JSON_URL}&t=${Date.now()}`
    : `${GITHUB_RAW_JSON_URL}${cacheBuster}`;

  try {
    const req = new Request(requestUrl);
    req.timeoutInterval = 10;
    const token = getEffectiveToken();
    if (token) {
      req.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3.raw",
      };
    }

    const json = (await req.loadJSON()) as NewsData;
    if (json && Array.isArray(json.articles) && json.articles.length > 0) {
      fm.writeString(cachePath, JSON.stringify(json));
      return { data: json, isOffline: false };
    }
    throw new Error("Invalid response format");
  } catch (err) {
    console.warn(`[Network Error] Failed to fetch articles, fallback to cache: ${err}`);

    if (fm.fileExists(cachePath)) {
      try {
        const cachedStr = fm.readString(cachePath);
        const cachedJson = JSON.parse(cachedStr) as NewsData;
        return { data: cachedJson, isOffline: true };
      } catch (cacheErr) {
        console.error(`[Cache Error] Failed to read cached data: ${cacheErr}`);
      }
    }

    return {
      isOffline: true,
      data: {
        updated_at: "未取得 (オフライン)",
        articles: [
          {
            title: "記事の取得に失敗しました",
            url: "https://github.com",
            source: "System",
            genre: "other",
            headline: "URL設定またはネットワーク接続を確認してください。",
            summary:
              "GitHubのRaw URLまたはPrivateリポジトリ用のトークンが正しく設定されているか確認し、再度ウィジェットを更新してください。",
            importance: 5,
          },
        ],
      },
    };
  }
}

/**
 * ウィジェットのParameter文字列を解析してジャンルコード配列を返す
 */
function parseWidgetParameter(rawParam: unknown): GenreCode[] {
  if (typeof rawParam !== "string" || !rawParam.trim()) {
    return [];
  }
  const tokens = rawParam
    .split(/[,、\s]+/)
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);

  const selected = new Set<GenreCode>();
  for (const token of tokens) {
    if (token === "all" || token === "すべて" || token === "全ジャンル") {
      return [];
    }
    const mapped = GENRE_ALIASES[token];
    if (mapped) {
      selected.add(mapped);
    }
  }
  return Array.from(selected);
}

/**
 * ジャンル正規化＆表示用オブジェクトへの変換
 */
function normalizeArticle(art: ArticleItem, isDiscovery: boolean): DisplayArticle {
  const rawGenre = (art.genre || "other").toLowerCase();
  const genreCode: GenreCode = rawGenre in GENRE_META ? (rawGenre as GenreCode) : "other";
  const meta = GENRE_META[genreCode];
  const headlineText =
    art.headline && art.headline.trim().length > 0
      ? art.headline.trim()
      : art.summary.slice(0, 40);

  return {
    ...art,
    genreCode,
    genreDisplay: meta.shortLabel,
    headlineText,
    isDiscovery,
  };
}

/**
 * ウィジェットParameterに基づき優先ジャンルと他ジャンルの注目トレンドをブレンドする
 * （指定ジャンル3件 ＋ 他ジャンル注目1件の割合で混ぜて取りこぼしを防止）
 */
function buildRotationList(
  rawArticles: ArticleItem[],
  selectedGenres: GenreCode[]
): DisplayArticle[] {
  if (rawArticles.length === 0) {
    return [];
  }

  // 未指定時は全記事をそのままローテーション対象にする
  if (selectedGenres.length === 0) {
    return rawArticles.map((art) => normalizeArticle(art, false));
  }

  const selectedSet = new Set<GenreCode>(selectedGenres);
  const preferred: DisplayArticle[] = [];
  const others: DisplayArticle[] = [];

  for (const art of rawArticles) {
    const rawCode = (art.genre || "other").toLowerCase();
    const code: GenreCode = rawCode in GENRE_META ? (rawCode as GenreCode) : "other";
    if (selectedSet.has(code)) {
      preferred.push(normalizeArticle(art, false));
    } else {
      others.push(normalizeArticle(art, true));
    }
  }

  // 他ジャンル枠は注目度(importance)降順で厳選
  others.sort((a, b) => (b.importance ?? 5) - (a.importance ?? 5));

  if (preferred.length === 0) {
    return others;
  }
  if (others.length === 0) {
    return preferred;
  }

  // 優先ジャンル3件ごとに他ジャンル枠を1件挟み込む
  const blended: DisplayArticle[] = [];
  let pIdx = 0;
  let oIdx = 0;
  while (pIdx < preferred.length) {
    for (let i = 0; i < 3 && pIdx < preferred.length; i++) {
      blended.push(preferred[pIdx++]);
    }
    if (oIdx < others.length) {
      blended.push(others[oIdx++]);
    } else if (others.length > 0 && pIdx < preferred.length) {
      // 他ジャンルも循環させて取りこぼし枠を維持
      oIdx = 0;
      blended.push(others[oIdx++]);
    }
  }

  return blended;
}

function getNormalizedShortcutParam(): string {
  if (typeof args === "undefined" || args.shortcutParameter == null) {
    return "";
  }
  return String(args.shortcutParameter).trim().toLowerCase();
}

function isWallpaperRequest(): boolean {
  const actionParam =
    typeof args !== "undefined" && args.queryParameters
      ? args.queryParameters.action
      : undefined;
  const shortcutParam = getNormalizedShortcutParam();
  return (
    Boolean(config.runsWithSiri) ||
    shortcutParam === "wallpaper" ||
    actionParam === "wallpaper"
  );
}

/**
 * ローテーション状態を読み込み、今回の記事と次回の記事を決定して保存する
 */
function getNextArticlePair(
  list: DisplayArticle[],
  filterKey: string
): {
  current: DisplayArticle;
  next: DisplayArticle;
  currentIndex: number;
  total: number;
} {
  const fm = FileManager.local();
  const statePath = getCachePath(ROTATION_STATE_FILENAME);
  let state: RotationState = { currentIndex: -1, filterKey };

  if (fm.fileExists(statePath)) {
    try {
      const parsed = JSON.parse(fm.readString(statePath)) as RotationState;
      if (parsed && typeof parsed.currentIndex === "number" && parsed.filterKey === filterKey) {
        state = parsed;
      }
    } catch {
      // 読み込み失敗時は初期状態のまま進める
    }
  }

  const now = Date.now();
  const minIntervalMs = ROTATION_INTERVAL_MINUTES * 60 * 1000;
  const actionParam =
    typeof args !== "undefined" && args.queryParameters
      ? args.queryParameters.action
      : undefined;
  const shortcutParam = getNormalizedShortcutParam();
  const effectiveAction =
    actionParam || (shortcutParam === "prev" || shortcutParam === "next" ? shortcutParam : undefined);

  let nextIndex = 0;
  let didRotate = true;

  if (effectiveAction === "prev") {
    const baseIdx = state.currentIndex >= 0 ? state.currentIndex : 0;
    nextIndex = (baseIdx - 1 + list.length) % list.length;
  } else if (effectiveAction === "next" || isWallpaperRequest()) {
    // 次へボタンまたはショートカット経由の壁紙更新時は必ず次の記事へ送る
    const baseIdx = state.currentIndex >= 0 ? state.currentIndex : 0;
    nextIndex = (baseIdx + 1) % list.length;
  } else {
    // ウィジェット表示中またはロック画面ウィジェットタップ起動後10分以内は同じ記事を維持してズレを防止
    const shouldHold =
      state.currentIndex >= 0 &&
      typeof state.lastRotatedAt === "number" &&
      now - state.lastRotatedAt < minIntervalMs;

    if (shouldHold) {
      nextIndex = state.currentIndex % list.length;
      didRotate = false;
    } else {
      nextIndex = (state.currentIndex + 1) % list.length;
    }
  }

  const upcomingIndex = (nextIndex + 1) % list.length;

  try {
    fm.writeString(
      statePath,
      JSON.stringify({
        currentIndex: nextIndex,
        filterKey,
        lastRotatedAt: didRotate ? now : state.lastRotatedAt,
      } satisfies RotationState)
    );
  } catch (err) {
    console.warn(`[State Warning] Could not save rotation state: ${err}`);
  }

  return {
    current: list[nextIndex],
    next: list[upcomingIndex],
    currentIndex: nextIndex,
    total: list.length,
  };
}

/**
 * 進捗インジケータードットを描画
 */
function addProgressDots(widget: ListWidget, currentIndex: number, total: number): void {
  const dotRow = widget.addStack();
  dotRow.layoutHorizontally();
  dotRow.centerAlignContent();
  dotRow.spacing = 4;

  const maxDots = Math.min(total, 15);
  const activeDot = total <= 15 ? currentIndex : Math.floor((currentIndex / total) * maxDots);

  for (let i = 0; i < maxDots; i++) {
    const dot = dotRow.addStack();
    const isActive = i === activeDot;
    dot.size = new Size(isActive ? 14 : 5, 4);
    dot.cornerRadius = 2;
    dot.backgroundColor = isActive ? new Color("#38bdf8") : new Color("#475569", 0.65);
  }

  dotRow.addSpacer();
}

/**
 * 記事の公開日時を日本人向けにわかりやすい表記へ変換
 * 例: "2026-11-17 18:59" -> "11月17日 18:59（1時間前）"
 */
function formatJapanesePublishedAt(raw?: string): string {
  if (!raw) return "";
  const match = raw.trim().match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
  if (!match) return raw;

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const day = parseInt(match[3], 10);
  const hour = match[4];
  const min = match[5];

  // JST (UTC+9) としてUTCミリ秒を算出し、端末タイムゾーンに依存せず差分を計算
  const pubUtcMs =
    Date.UTC(year, month - 1, day, parseInt(hour, 10), parseInt(min, 10)) - 9 * 3600 * 1000;
  const diffMs = Math.max(0, Date.now() - pubUtcMs);
  const diffMin = Math.floor(diffMs / 60000);

  let relLabel = "";
  if (diffMin < 1) {
    relLabel = "たった今";
  } else if (diffMin < 60) {
    relLabel = `${diffMin}分前`;
  } else {
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) {
      relLabel = `${diffHours}時間前`;
    } else {
      const diffDays = Math.floor(diffHours / 24);
      relLabel = diffDays === 1 ? "昨日" : `${diffDays}日前`;
    }
  }

  return `${month}月${day}日 ${hour}:${min}（${relLabel}）`;
}

/**
 * データ更新時刻を簡潔な日本語表記へ変換
 * 例: "2026-11-17 19:56:43 JST" -> "11月17日 19:56更新"
 */
function formatUpdatedTime(raw: string): string {
  const match = raw.trim().match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
  if (!match) {
    return raw.replace(" JST", "");
  }
  return `${parseInt(match[2], 10)}月${parseInt(match[3], 10)}日 ${match[4]}:${match[5]}更新`;
}

/**
 * 要約テキストが1塊のとき、2文ごとに段落(\n\n)を補って読みやすくする
 */
function ensureParagraphs(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return "";
  if (trimmed.includes("\n\n")) return trimmed;

  const sentences = trimmed
    .split(/(?<=[。！？])(?![」』）\)])\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (sentences.length <= 2) return trimmed;

  const paras: string[] = [];
  let buf: string[] = [];
  let bufLen = 0;
  for (const s of sentences) {
    buf.push(s);
    bufLen += s.length;
    if (buf.length >= 2 || bufLen >= 130) {
      paras.push(buf.join(""));
      buf = [];
      bufLen = 0;
    }
  }
  if (buf.length > 0) {
    paras.push(buf.join(""));
  }
  return paras.join("\n\n");
}

function buildActionUrl(action: "prev" | "next"): string {
  try {
    const base = URLScheme.forRunningScript();
    const sep = base.includes("?") ? "&" : "?";
    return `${base}${sep}action=${action}`;
  } catch {
    return "";
  }
}

interface ArticleContext {
  rotationList: DisplayArticle[];
  current: DisplayArticle;
  next: DisplayArticle;
  currentIndex: number;
  total: number;
  updatedAt: string;
  isOffline: boolean;
  selectedGenres: GenreCode[];
}

function getFilterLabel(selectedGenres: GenreCode[]): string {
  return selectedGenres.length > 0
    ? `${selectedGenres.map((g) => g.toUpperCase()).join("・")}+🌐`
    : "ALL";
}

async function prepareArticleContext(): Promise<ArticleContext> {
  const { data, isOffline } = await loadArticles();
  const widgetParam = typeof args !== "undefined" ? args.widgetParameter : "";
  const rawShortcut = getNormalizedShortcutParam();
  const shortcutGenreParam =
    rawShortcut && rawShortcut !== "wallpaper" && rawShortcut !== "prev" && rawShortcut !== "next"
      ? rawShortcut
      : "";
  const selectedGenres = parseWidgetParameter(widgetParam || shortcutGenreParam);
  const filterKey = selectedGenres.length > 0 ? selectedGenres.join(",") : "all";

  const rotationList = buildRotationList(data.articles, selectedGenres);
  const { current, next, currentIndex, total } = getNextArticlePair(rotationList, filterKey);
  const updatedAt = formatUpdatedTime(data.updated_at);

  return {
    rotationList,
    current,
    next,
    currentIndex,
    total,
    updatedAt,
    isOffline,
    selectedGenres,
  };
}

/**
 * ロック画面（時計の下・長方形 accessoryRectangular）向けウィジェットを構築
 */
function createLockScreenRectangularWidget(
  current: DisplayArticle,
  currentIndex: number,
  total: number
): ListWidget {
  const widget = new ListWidget();
  widget.setPadding(2, 4, 2, 4);
  widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1000);
  try {
    widget.url = URLScheme.forRunningScript();
  } catch {
    widget.url = current.url;
  }

  // 1行目: ジャンル＆進捗カウンター
  const headerText = widget.addText(
    `⚡ [${current.genreDisplay}] ${currentIndex + 1}/${total}件`
  );
  headerText.font = Font.boldSystemFont(10);
  headerText.lineLimit = 1;
  headerText.minimumScaleFactor = 0.85;

  widget.addSpacer(1);

  // 2〜3行目: 記事タイトル
  const titleText = widget.addText(current.title);
  titleText.font = Font.boldSystemFont(11);
  titleText.lineLimit = 2;
  titleText.minimumScaleFactor = 0.85;

  widget.addSpacer(1);

  // 4行目: キャッチコピーまたは要約冒頭
  const sub = current.headlineText || current.summary;
  const subText = widget.addText(`💡 ${sub}`);
  subText.font = Font.systemFont(10);
  subText.lineLimit = 1;
  subText.minimumScaleFactor = 0.85;

  return widget;
}

/**
 * ロック画面（時計の上・1行 accessoryInline）向けウィジェットを構築
 */
function createLockScreenInlineWidget(current: DisplayArticle): ListWidget {
  const widget = new ListWidget();
  widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1000);
  try {
    widget.url = URLScheme.forRunningScript();
  } catch {
    widget.url = current.url;
  }
  const label = `⚡ [${current.genreDisplay}] ${current.headlineText || current.title}`;
  widget.addText(label);
  return widget;
}

/**
 * ロック画面（時計の下・丸型 accessoryCircular）向けウィジェットを構築
 */
function createLockScreenCircularWidget(currentIndex: number, total: number): ListWidget {
  const widget = new ListWidget();
  widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1000);
  try {
    widget.url = URLScheme.forRunningScript();
  } catch {
    // ignore
  }
  const title = widget.addText("⚡ IT");
  title.font = Font.boldSystemFont(11);
  title.centerAlignText();

  const count = widget.addText(`${currentIndex + 1}/${total}`);
  count.font = Font.mediumSystemFont(10);
  count.centerAlignText();

  return widget;
}

/**
 * ウィジェットを構築（ロック画面サイズ＆Largeサイズの両方に対応）
 */
function createWidget(ctx: ArticleContext): ListWidget {
  const { current, next, currentIndex, total, updatedAt: cleanTime, isOffline, selectedGenres } = ctx;

  const family = config.widgetFamily;
  if (family === "accessoryRectangular") {
    return createLockScreenRectangularWidget(current, currentIndex, total);
  }
  if (family === "accessoryInline") {
    return createLockScreenInlineWidget(current);
  }
  if (family === "accessoryCircular") {
    return createLockScreenCircularWidget(currentIndex, total);
  }

  const widget = new ListWidget();
  widget.setPadding(12, 14, 12, 14);

  // OSの次期リフレッシュ時刻をROTATION_INTERVAL_MINUTES後に設定
  widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1000);

  // 背景: ダークグラデーション
  const gradient = new LinearGradient();
  gradient.colors = [new Color("#0f172a"), new Color("#1e1b4b")];
  gradient.locations = [0.0, 1.0];
  widget.backgroundGradient = gradient;

  // --- 1. ヘッダー領域 ---
  const headerStack = widget.addStack();
  headerStack.layoutHorizontally();
  headerStack.centerAlignContent();
  headerStack.spacing = 6;

  const logoText = headerStack.addText("⚡ IT Trend");
  logoText.font = Font.boldSystemFont(13);
  logoText.textColor = new Color("#60a5fa");

  // フィルタ状態バッジ
  const filterBadge = headerStack.addStack();
  filterBadge.cornerRadius = 4;
  filterBadge.setPadding(2, 6, 2, 6);
  filterBadge.backgroundColor = new Color("#334155", 0.85);
  const filterLabelStr = getFilterLabel(selectedGenres);
  const filterText = filterBadge.addText(filterLabelStr);
  filterText.font = Font.boldSystemFont(9);
  filterText.textColor = new Color("#cbd5e1");

  headerStack.addSpacer();

  // ページ番号 & 更新時刻
  const statusStr = isOffline
    ? `${currentIndex + 1} / ${total}件 • キャッシュ`
    : `${currentIndex + 1} / ${total}件 • ${cleanTime}`;
  const statusText = headerStack.addText(statusStr);
  statusText.font = Font.mediumSystemFont(10);
  statusText.textColor = new Color("#94a3b8");

  widget.addSpacer(5);

  // --- 2. 進捗インジケーターバー ---
  addProgressDots(widget, currentIndex, total);

  widget.addSpacer(8);

  // --- 3. メイン記事カード（タップで記事を開く） ---
  const cardStack = widget.addStack();
  cardStack.layoutVertically();
  cardStack.setPadding(10, 12, 10, 12);
  cardStack.cornerRadius = 12;
  cardStack.backgroundColor = new Color("#1e293b", 0.78);
  cardStack.url = current.url;

  // カード上部バッジ群（ジャンル / ソース / セレンディピティ枠 / 投稿日時）
  const badgeRow = cardStack.addStack();
  badgeRow.layoutHorizontally();
  badgeRow.centerAlignContent();
  badgeRow.spacing = 4;

  const genreMeta = GENRE_META[current.genreCode];
  const genreBadge = badgeRow.addStack();
  genreBadge.cornerRadius = 4;
  genreBadge.setPadding(2, 6, 2, 6);
  genreBadge.backgroundColor = new Color(genreMeta.color, 0.28);
  const genreText = genreBadge.addText(current.genreDisplay);
  genreText.font = Font.boldSystemFont(9);
  genreText.textColor = new Color(genreMeta.color);
  genreText.lineLimit = 1;

  const sourceBadge = badgeRow.addStack();
  sourceBadge.cornerRadius = 4;
  sourceBadge.setPadding(2, 5, 2, 5);
  const isZenn = current.source.toLowerCase().includes("zenn");
  sourceBadge.backgroundColor = new Color(isZenn ? "#3ea8ff" : "#ef4444", 0.22);
  const sourceText = sourceBadge.addText(current.source.toUpperCase());
  sourceText.font = Font.boldSystemFont(9);
  sourceText.textColor = new Color(isZenn ? "#7dd3fc" : "#fca5a5");
  sourceText.lineLimit = 1;

  if (current.isDiscovery) {
    const discoveryBadge = badgeRow.addStack();
    discoveryBadge.cornerRadius = 4;
    discoveryBadge.setPadding(2, 5, 2, 5);
    discoveryBadge.backgroundColor = new Color("#f59e0b", 0.25);
    const discoveryText = discoveryBadge.addText("✨ 注目枠");
    discoveryText.font = Font.boldSystemFont(9);
    discoveryText.textColor = new Color("#fcd34d");
    discoveryText.lineLimit = 1;
  }

  badgeRow.addSpacer();

  const formattedPub = formatJapanesePublishedAt(current.published_at);
  if (formattedPub) {
    const pubText = badgeRow.addText(`🕒 ${formattedPub}`);
    pubText.font = Font.mediumSystemFont(9);
    pubText.textColor = new Color("#94a3b8");
    pubText.lineLimit = 1;
    pubText.minimumScaleFactor = 0.75;
    pubText.rightAlignText();
  }

  cardStack.addSpacer(6);

  // 記事タイトル（最大4行、長いタイトルでも途中で切れないよう設定）
  const titleText = cardStack.addText(current.title);
  titleText.font = Font.boldSystemFont(14);
  titleText.textColor = new Color("#f8fafc");
  titleText.lineLimit = 4;
  titleText.minimumScaleFactor = 0.75;

  // 一言キャッチ要約（タイトルと重複する場合は省略して本文スペースを優先）
  if (current.headlineText && current.headlineText !== current.title) {
    cardStack.addSpacer(5);
    const headlineText = cardStack.addText(`💡 ${current.headlineText}`);
    headlineText.font = Font.boldSystemFont(11);
    headlineText.textColor = new Color("#38bdf8");
    headlineText.lineLimit = 2;
    headlineText.minimumScaleFactor = 0.85;
  }

  cardStack.addSpacer(6);

  // 詳細AI要約（段落分け＋静止ウィジェット上で可能な限り全文表示）
  const summaryText = cardStack.addText(ensureParagraphs(current.summary));
  summaryText.font = Font.systemFont(11);
  summaryText.textColor = new Color("#e2e8f0");
  summaryText.lineLimit = 9;
  summaryText.minimumScaleFactor = 0.8;

  widget.addSpacer();

  // --- 4. フッター（← 前へボタン / NEXT UP 予告 / → 次へボタン） ---
  const footerStack = widget.addStack();
  footerStack.layoutHorizontally();
  footerStack.centerAlignContent();
  footerStack.setPadding(3, 0, 0, 0);
  footerStack.spacing = 6;

  const prevBtn = footerStack.addStack();
  prevBtn.setPadding(2, 6, 2, 6);
  prevBtn.cornerRadius = 5;
  prevBtn.backgroundColor = new Color("#334155", 0.85);
  const prevUrl = buildActionUrl("prev");
  if (prevUrl) prevBtn.url = prevUrl;
  const prevText = prevBtn.addText("←");
  prevText.font = Font.boldSystemFont(10);
  prevText.textColor = new Color("#e2e8f0");

  const nextInfoStack = footerStack.addStack();
  nextInfoStack.layoutHorizontally();
  nextInfoStack.centerAlignContent();
  nextInfoStack.spacing = 4;
  nextInfoStack.url = next.url;

  const nextLabel = nextInfoStack.addText("NEXT ▸");
  nextLabel.font = Font.boldSystemFont(9);
  nextLabel.textColor = new Color("#38bdf8");

  const nextTitle = nextInfoStack.addText(`[${next.genreDisplay}] ${next.title}`);
  nextTitle.font = Font.systemFont(9);
  nextTitle.textColor = new Color("#94a3b8");
  nextTitle.lineLimit = 1;
  nextTitle.minimumScaleFactor = 0.8;

  footerStack.addSpacer();

  const nextBtn = footerStack.addStack();
  nextBtn.setPadding(2, 6, 2, 6);
  nextBtn.cornerRadius = 5;
  nextBtn.backgroundColor = new Color("#334155", 0.85);
  const nextUrl = buildActionUrl("next");
  if (nextUrl) nextBtn.url = nextUrl;
  const nextBtnText = nextBtn.addText("→");
  nextBtnText.font = Font.boldSystemFont(10);
  nextBtnText.textColor = new Color("#e2e8f0");

  return widget;
}

function lerpRgbColor(
  c1: [number, number, number],
  c2: [number, number, number],
  t: number,
  alpha = 1
): Color {
  const clampByte = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
  const r = clampByte(c1[0] + (c2[0] - c1[0]) * t);
  const g = clampByte(c1[1] + (c2[1] - c1[1]) * t);
  const b = clampByte(c1[2] + (c2[2] - c1[2]) * t);
  return new Color(`#${r}${g}${b}`, alpha);
}

function fillRoundedRect(dc: DrawContext, rect: Rect, radius: number, color: Color): void {
  const path = new Path();
  path.addRoundedRect(rect, radius, radius);
  dc.addPath(path);
  dc.setFillColor(color);
  dc.fillPath();
}

function strokeRoundedRect(
  dc: DrawContext,
  rect: Rect,
  radius: number,
  color: Color,
  lineWidth: number
): void {
  const path = new Path();
  path.addRoundedRect(rect, radius, radius);
  dc.addPath(path);
  dc.setStrokeColor(color);
  dc.setLineWidth(lineWidth);
  dc.strokePath();
}

function drawWallpaperBackground(dc: DrawContext, width: number, height: number): void {
  const stops: [number, number, number][] = [
    [9, 13, 24],
    [15, 23, 42],
    [30, 27, 75],
    [9, 13, 24],
  ];
  const bands = 42;
  const bandH = Math.ceil(height / bands) + 2;

  for (let i = 0; i < bands; i++) {
    const progress = (i / (bands - 1)) * (stops.length - 1);
    const idx = Math.min(stops.length - 2, Math.floor(progress));
    const localT = progress - idx;
    dc.setFillColor(lerpRgbColor(stops[idx], stops[idx + 1], localT));
    dc.fillRect(new Rect(0, Math.floor((i * height) / bands), width, bandH));
  }

  // カード背後に控えめなアンビエント光を配置
  dc.setFillColor(new Color("#3b82f6", 0.1));
  dc.fillEllipse(new Rect(680, 560, 580, 580));
  dc.setFillColor(new Color("#8b5cf6", 0.09));
  dc.fillEllipse(new Rect(-140, 1760, 640, 640));
}

function estimateDisplayUnits(text: string): number {
  let units = 0;
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    units += code >= 0x20 && code <= 0x7e ? 0.58 : 1.0;
  }
  return units;
}

function estimateWrappedLineCount(text: string, unitsPerLine: number): number {
  const lines = text.split(/\n/);
  let total = 0;
  for (const line of lines) {
    if (!line) {
      total += 1;
      continue;
    }
    total += Math.max(1, Math.ceil((estimateDisplayUnits(line) * 1.12) / unitsPerLine));
  }
  return total;
}

function truncateByUnits(text: string, maxUnits: number): string {
  let units = 0;
  let out = "";
  for (const ch of Array.from(text)) {
    const u = estimateDisplayUnits(ch);
    if (units + u > maxUnits - 1) {
      return `${out}…`;
    }
    out += ch;
    units += u;
  }
  return out;
}

function drawPillBadge(
  dc: DrawContext,
  label: string,
  x: number,
  y: number,
  height: number,
  fontSize: number,
  bgColor: Color,
  textColor: Color
): number {
  const pillW = Math.max(height, Math.ceil(estimateDisplayUnits(label) * fontSize * 0.96 + 30));
  fillRoundedRect(dc, new Rect(x, y, pillW, height), 10, bgColor);
  dc.setFont(Font.boldSystemFont(fontSize));
  dc.setTextColor(textColor);
  dc.setTextAlignedCenter();
  const textY = y + Math.max(2, Math.round((height - fontSize * 1.25) / 2));
  dc.drawTextInRect(label, new Rect(x, textY, pillW, height - (textY - y)));
  return pillW;
}

/**
 * ロック画面壁紙用の大カード画像（1179x2556px）を生成（iOSショートカット「壁紙を設定」向け）
 */
function createWallpaperImage(ctx: ArticleContext): Image {
  const W = 1179;
  const H = 2556;
  const dc = new DrawContext();
  dc.size = new Size(W, H);
  dc.opaque = true;
  dc.respectScreenScale = false;

  drawWallpaperBackground(dc, W, H);

  // 時計領域(y: 0..760)と下部ボタン領域(y: 2260..2556)を避けたメインカード領域
  const cardX = 48;
  const cardY = 790;
  const cardW = W - cardX * 2; // 1083
  const cardH = 1410; // y = 790 .. 2200
  const padX = 48;
  const innerX = cardX + padX; // 96
  const innerW = cardW - padX * 2; // 987

  fillRoundedRect(dc, new Rect(cardX, cardY, cardW, cardH), 38, new Color("#0f172a", 0.88));
  strokeRoundedRect(dc, new Rect(cardX, cardY, cardW, cardH), 38, new Color("#38bdf8", 0.28), 2);

  const { current, next, currentIndex, total, updatedAt, isOffline, selectedGenres } = ctx;
  if (!current) {
    dc.setFont(Font.boldSystemFont(34));
    dc.setTextColor(new Color("#f8fafc"));
    dc.setTextAlignedCenter();
    dc.drawTextInRect("表示できる記事がありません", new Rect(innerX, cardY + 640, innerW, 80));
    return dc.getImage();
  }

  // --- 1. ヘッダー行 ---
  dc.setFont(Font.boldSystemFont(30));
  dc.setTextColor(new Color("#60a5fa"));
  dc.setTextAlignedLeft();
  dc.drawTextInRect("⚡ IT Trend", new Rect(innerX, 834, 210, 42));

  const filterLabel = truncateByUnits(getFilterLabel(selectedGenres), 14);
  const filterPillW = drawPillBadge(
    dc,
    filterLabel,
    innerX + 216,
    834,
    36,
    20,
    new Color("#334155", 0.9),
    new Color("#cbd5e1")
  );

  const statusStr = isOffline
    ? `${currentIndex + 1} / ${total}件 • キャッシュ`
    : `${currentIndex + 1} / ${total}件 • ${updatedAt}`;
  const statusStartX = Math.max(216 + filterPillW + 14, 520);
  dc.setFont(Font.mediumSystemFont(23));
  dc.setTextColor(new Color("#94a3b8"));
  dc.setTextAlignedRight();
  dc.drawTextInRect(statusStr, new Rect(innerX + statusStartX, 839, innerW - statusStartX, 34));

  // --- 2. 進捗ドット ---
  const maxDots = Math.min(Math.max(total, 1), 15);
  const activeDot = total <= 15 ? currentIndex : Math.floor((currentIndex / total) * maxDots);
  let dotX = innerX;
  for (let i = 0; i < maxDots; i++) {
    const isActive = i === activeDot;
    const dotW = isActive ? 42 : 16;
    fillRoundedRect(
      dc,
      new Rect(dotX, 892, dotW, 10),
      5,
      isActive ? new Color("#38bdf8") : new Color("#475569", 0.65)
    );
    dotX += dotW + 10;
  }

  // --- 3. ジャンル / ソース / 投稿日時バッジ行 ---
  let badgeX = innerX;
  const badgeY = 924;
  const genreMeta = GENRE_META[current.genreCode];
  badgeX +=
    drawPillBadge(
      dc,
      current.genreDisplay,
      badgeX,
      badgeY,
      40,
      22,
      new Color(genreMeta.color, 0.26),
      new Color(genreMeta.color)
    ) + 12;

  const isZenn = current.source.toLowerCase().includes("zenn");
  badgeX +=
    drawPillBadge(
      dc,
      current.source.toUpperCase(),
      badgeX,
      badgeY,
      40,
      22,
      new Color(isZenn ? "#3ea8ff" : "#ef4444", 0.22),
      new Color(isZenn ? "#7dd3fc" : "#fca5a5")
    ) + 12;

  if (current.isDiscovery) {
    badgeX +=
      drawPillBadge(
        dc,
        "✨ 注目枠",
        badgeX,
        badgeY,
        40,
        22,
        new Color("#f59e0b", 0.25),
        new Color("#fcd34d")
      ) + 12;
  }

  const formattedPub = formatJapanesePublishedAt(current.published_at);
  if (formattedPub && badgeX < innerX + innerW - 140) {
    dc.setFont(Font.mediumSystemFont(22));
    dc.setTextColor(new Color("#94a3b8"));
    dc.setTextAlignedRight();
    dc.drawTextInRect(`🕒 ${formattedPub}`, new Rect(badgeX, 930, innerX + innerW - badgeX, 34));
  }

  // --- 4. タイトル ---
  let curY = 992;
  const titleLines = Math.min(4, estimateWrappedLineCount(current.title, 22.5));
  const titleH = titleLines * 54 + 6;
  dc.setFont(Font.boldSystemFont(40));
  dc.setTextColor(new Color("#f8fafc"));
  dc.setTextAlignedLeft();
  dc.drawTextInRect(current.title, new Rect(innerX, curY, innerW, titleH));
  curY += titleH + 14;

  // --- 5. 一言キャッチ要約（タイトル重複時は省略） ---
  if (current.headlineText && current.headlineText !== current.title) {
    const hlStr = `💡 ${current.headlineText}`;
    const hlLines = Math.min(2, estimateWrappedLineCount(hlStr, 31.5));
    const hlBoxH = hlLines * 38 + 20;
    fillRoundedRect(dc, new Rect(innerX, curY, innerW, hlBoxH), 14, new Color("#0ea5e9", 0.13));
    fillRoundedRect(dc, new Rect(innerX, curY + 6, 6, hlBoxH - 12), 3, new Color("#38bdf8"));
    dc.setFont(Font.boldSystemFont(28));
    dc.setTextColor(new Color("#38bdf8"));
    dc.setTextAlignedLeft();
    dc.drawTextInRect(hlStr, new Rect(innerX + 22, curY + 10, innerW - 36, hlBoxH - 14));
    curY += hlBoxH + 18;
  }

  // --- 6. 区切り線 & 全文AI要約（段落分け＋自動サイズ最適化） ---
  dc.setFillColor(new Color("#334155", 0.8));
  dc.fillRect(new Rect(innerX, curY, innerW, 2));
  curY += 22;

  const footerTopY = 2116;
  const bodyMaxY = footerTopY - 14;
  const availableBodyH = Math.max(120, bodyMaxY - curY);
  const paragraphs = ensureParagraphs(current.summary)
    .split(/\n{2,}/)
    .filter((p) => p.trim().length > 0);

  const fontPresets = [
    { size: 31, lineH: 45, uPerLine: 30.2, gap: 20 },
    { size: 28, lineH: 40, uPerLine: 33.5, gap: 17 },
    { size: 25, lineH: 36, uPerLine: 37.5, gap: 14 },
  ];

  let chosen = fontPresets[fontPresets.length - 1];
  for (const preset of fontPresets) {
    let neededH = 0;
    for (let i = 0; i < paragraphs.length; i++) {
      neededH += estimateWrappedLineCount(paragraphs[i], preset.uPerLine) * preset.lineH;
      if (i < paragraphs.length - 1) neededH += preset.gap;
    }
    if (neededH <= availableBodyH) {
      chosen = preset;
      break;
    }
  }

  dc.setFont(Font.systemFont(chosen.size));
  dc.setTextColor(new Color("#e2e8f0"));
  dc.setTextAlignedLeft();

  for (const para of paragraphs) {
    const remainingH = bodyMaxY - curY;
    if (remainingH < chosen.lineH) break;
    const estH = estimateWrappedLineCount(para, chosen.uPerLine) * chosen.lineH + 6;
    const drawH = Math.min(estH, remainingH);
    dc.drawTextInRect(para, new Rect(innerX, curY, innerW, drawH));
    curY += drawH + chosen.gap;
  }

  // --- 7. カード内フッター（NEXT 予告） ---
  dc.setFillColor(new Color("#334155", 0.8));
  dc.fillRect(new Rect(innerX, footerTopY, innerW, 2));

  dc.setFont(Font.boldSystemFont(24));
  dc.setTextColor(new Color("#38bdf8"));
  dc.setTextAlignedLeft();
  dc.drawTextInRect("NEXT ▸", new Rect(innerX, footerTopY + 22, 118, 36));

  const nextSummary = truncateByUnits(`[${next.genreDisplay}] ${next.title}`, 34);
  dc.setFont(Font.systemFont(24));
  dc.setTextColor(new Color("#94a3b8"));
  dc.setTextAlignedLeft();
  dc.drawTextInRect(nextSummary, new Rect(innerX + 120, footerTopY + 22, innerW - 120, 36));

  // --- 8. カード下部操作ヒント ---
  dc.setFont(Font.mediumSystemFont(22));
  dc.setTextColor(new Color("#94a3b8", 0.78));
  dc.setTextAlignedCenter();
  dc.drawTextInRect(
    "💡 背面タップやショートカット実行で次の記事カードへ更新",
    new Rect(cardX, cardY + cardH + 18, cardW, 34)
  );

  return dc.getImage();
}

/**
 * Scriptableアプリ内実行用のインタラクティブ要約リーダー（要約縦スクロール＋NEXTティッカーアニメーション対応）
 */
async function presentInteractiveReader(
  list: DisplayArticle[],
  startIndex: number,
  updatedAt: string,
  selectedGenres: GenreCode[]
): Promise<void> {
  const payloadJson = JSON.stringify(
    list.map((art) => ({
      title: art.title,
      url: art.url,
      source: art.source,
      genreCode: art.genreCode,
      genreDisplay: art.genreDisplay,
      headlineText: art.headlineText,
      summary: ensureParagraphs(art.summary),
      isDiscovery: art.isDiscovery,
      publishedText: formatJapanesePublishedAt(art.published_at),
    }))
  ).replace(/</g, "\\u003c");

  const filterBadgeText =
    selectedGenres.length > 0
      ? `${selectedGenres.map((g) => g.toUpperCase()).join("・")}+🌐`
      : "ALL";

  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif;
    background: linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%);
    color: #f8fafc;
    min-height: 100vh;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .header { display: flex; align-items: center; gap: 8px; font-size: 13px; }
  .logo { font-weight: 700; color: #60a5fa; }
  .badge-filter {
    background: rgba(51,65,85,0.85); color: #cbd5e1;
    padding: 2px 7px; border-radius: 5px; font-size: 10px; font-weight: 700;
  }
  .status { margin-left: auto; color: #94a3b8; font-size: 11px; }
  .card {
    flex: 1; display: flex; flex-direction: column; gap: 10px;
    background: rgba(30,41,59,0.82); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px; padding: 14px; min-height: 0;
  }
  .meta-row { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .tag { padding: 2px 7px; border-radius: 5px; font-size: 11px; font-weight: 700; }
  .pub { margin-left: auto; font-size: 11px; color: #94a3b8; }
  .title { font-size: 18px; font-weight: 700; line-height: 1.4; color: #f8fafc; }
  .headline { font-size: 13px; font-weight: 700; line-height: 1.5; color: #38bdf8; }
  .summary-box {
    flex: 1; overflow-y: auto; -webkit-overflow-scrolling: touch;
    font-size: 14px; line-height: 1.7; color: #e2e8f0;
    padding-right: 4px; border-top: 1px solid rgba(255,255,255,0.07); padding-top: 10px;
  }
  .summary-box p { margin-bottom: 10px; }
  .summary-box p:last-child { margin-bottom: 0; }
  .actions { display: flex; gap: 8px; }
  .btn {
    padding: 10px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12);
    background: rgba(30,41,59,0.9); color: #f8fafc; font-size: 13px; font-weight: 600;
    text-decoration: none; text-align: center;
  }
  .btn-primary { background: #2563eb; border-color: #3b82f6; flex: 1; }
  .footer {
    display: flex; align-items: center; gap: 8px; padding: 6px 4px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .next-label { font-size: 11px; font-weight: 700; color: #38bdf8; flex-shrink: 0; }
  .marquee-wrap { flex: 1; overflow: hidden; white-space: nowrap; position: relative; }
  .marquee-track {
    display: inline-block; padding-left: 100%;
    animation: marquee-rtl 14s linear infinite;
    font-size: 12px; color: #cbd5e1; text-decoration: none;
  }
  .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
  @keyframes marquee-rtl {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
</style>
</head>
<body>
  <div class="header">
    <span class="logo">⚡ IT Trend Reader</span>
    <span class="badge-filter">${filterBadgeText}</span>
    <span id="status" class="status"></span>
  </div>
  <div class="card">
    <div id="meta" class="meta-row"></div>
    <div id="title" class="title"></div>
    <div id="headline" class="headline"></div>
    <div id="summary" class="summary-box"></div>
  </div>
  <div class="actions">
    <button class="btn" onclick="move(-1)">← 前の記事</button>
    <a id="open-link" class="btn btn-primary" href="#">元記事を開く ↗</a>
    <button class="btn" onclick="move(1)">次の記事 →</button>
  </div>
  <div class="footer">
    <span class="next-label">NEXT ▸</span>
    <div class="marquee-wrap">
      <a id="next-marquee" class="marquee-track" href="#"></a>
    </div>
  </div>
<script>
  const ITEMS = ${payloadJson};
  const COLORS = ${JSON.stringify(GENRE_META)};
  let idx = ${startIndex};
  function render() {
    const cur = ITEMS[idx];
    const nxt = ITEMS[(idx + 1) % ITEMS.length];
    document.getElementById("status").textContent = (idx + 1) + " / " + ITEMS.length + "件 • ${updatedAt}";
    const meta = COLORS[cur.genreCode] || COLORS.other;
    let badges = '<span class="tag" style="background:rgba(139,92,246,0.22);color:' + meta.color + '">' + cur.genreDisplay + '</span>';
    const isZenn = cur.source.toLowerCase().includes("zenn");
    badges += '<span class="tag" style="background:' + (isZenn ? "rgba(62,168,255,0.22);color:#7dd3fc" : "rgba(239,68,68,0.22);color:#fca5a5") + '">' + cur.source.toUpperCase() + '</span>';
    if (cur.isDiscovery) badges += '<span class="tag" style="background:rgba(245,158,11,0.25);color:#fcd34d">✨ 注目枠</span>';
    if (cur.publishedText) badges += '<span class="pub">🕒 ' + cur.publishedText + '</span>';
    document.getElementById("meta").innerHTML = badges;
    document.getElementById("title").textContent = cur.title;
    const hlEl = document.getElementById("headline");
    if (cur.headlineText && cur.headlineText !== cur.title) {
      hlEl.textContent = "💡 " + cur.headlineText;
      hlEl.style.display = "block";
    } else {
      hlEl.style.display = "none";
    }
    const sumEl = document.getElementById("summary");
    sumEl.innerHTML = "";
    cur.summary.split(/\\n\\n+/).forEach(function(para) {
      const t = para.trim();
      if (!t) return;
      const p = document.createElement("p");
      p.textContent = t;
      sumEl.appendChild(p);
    });
    sumEl.scrollTop = 0;
    document.getElementById("open-link").href = cur.url;
    const mEl = document.getElementById("next-marquee");
    mEl.textContent = "[" + nxt.genreDisplay + "] " + nxt.title;
    mEl.href = nxt.url;
    mEl.style.animation = "none";
    mEl.offsetHeight;
    mEl.style.animation = "";
  }
  function move(d) {
    idx = (idx + d + ITEMS.length) % ITEMS.length;
    render();
  }
  render();
</script>
</body>
</html>`;

  const wv = new WebView();
  wv.shouldAllowRequest = (req) => {
    if (req.url && req.url.startsWith("http")) {
      Safari.openInApp(req.url, true);
      return false;
    }
    return true;
  };
  await wv.loadHTML(html);
  await wv.present(false);
}

// 実行エントリーポイント
async function run() {
  const ctx = await prepareArticleContext();

  if (isWallpaperRequest()) {
    // iOSショートカット（「スクリプトを実行」→「壁紙に設定」）経由では大カード壁紙画像を出力
    const wallpaperImage = createWallpaperImage(ctx);
    Script.setShortcutOutput(wallpaperImage);
  } else if (config.runsInWidget || config.runsInAccessoryWidget) {
    const widget = createWidget(ctx);
    Script.setWidget(widget);
  } else {
    // Scriptableアプリ内で実行した場合はスクロール＆NEXTティッカー付きリーダーを表示
    await presentInteractiveReader(
      ctx.rotationList,
      ctx.currentIndex,
      ctx.updatedAt,
      ctx.selectedGenres
    );
  }
  Script.complete();
}

run();
