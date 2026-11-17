"use strict";
(() => {
  // frontend/src/index.ts
  var GITHUB_RAW_JSON_URL = "https://raw.githubusercontent.com/takaken0518/IT_trend_checker/main/articles.json";
  var GITHUB_TOKEN = "";
  var CACHE_FILENAME = "it_trend_articles_cache.json";
  var ROTATION_STATE_FILENAME = "it_trend_rotation_state.json";
  var ROTATION_INTERVAL_MINUTES = 10;
  var GENRE_META = {
    ai: { shortLabel: "AI\u30FBLLM", fullLabel: "AI\u30FBLLM\u30FB\u6A5F\u68B0\u5B66\u7FD2", color: "#8b5cf6" },
    web: { shortLabel: "Web\u30FB\u8A00\u8A9E", fullLabel: "Web\u958B\u767A\u30FB\u8A00\u8A9E", color: "#3b82f6" },
    infra: { shortLabel: "\u30A4\u30F3\u30D5\u30E9", fullLabel: "\u30A4\u30F3\u30D5\u30E9\u30FB\u30AF\u30E9\u30A6\u30C9", color: "#10b981" },
    mobile: { shortLabel: "\u30E2\u30D0\u30A4\u30EB", fullLabel: "\u30E2\u30D0\u30A4\u30EB\u30FB\u500B\u4EBA\u958B\u767A", color: "#f97316" },
    biz: { shortLabel: "\u30D3\u30B8\u30CD\u30B9", fullLabel: "IT\u30D3\u30B8\u30CD\u30B9\u30FB\u7D44\u7E54", color: "#eab308" },
    other: { shortLabel: "\u7DCF\u5408IT", fullLabel: "\u7DCF\u5408\u30FB\u305D\u306E\u4ED6IT", color: "#64748b" }
  };
  var GENRE_ALIASES = {
    ai: "ai",
    llm: "ai",
    ml: "ai",
    "\u6A5F\u68B0\u5B66\u7FD2": "ai",
    "\u751F\u6210ai": "ai",
    web: "web",
    frontend: "web",
    backend: "web",
    lang: "web",
    "\u8A00\u8A9E": "web",
    "web\u958B\u767A": "web",
    infra: "infra",
    cloud: "infra",
    devops: "infra",
    security: "infra",
    sec: "infra",
    "\u30A4\u30F3\u30D5\u30E9": "infra",
    "\u30AF\u30E9\u30A6\u30C9": "infra",
    "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3": "infra",
    mobile: "mobile",
    gadget: "mobile",
    ios: "mobile",
    android: "mobile",
    indie: "mobile",
    "\u30E2\u30D0\u30A4\u30EB": "mobile",
    "\u30AC\u30B8\u30A7\u30C3\u30C8": "mobile",
    "\u500B\u4EBA\u958B\u767A": "mobile",
    biz: "biz",
    business: "biz",
    career: "biz",
    mgmt: "biz",
    "\u30D3\u30B8\u30CD\u30B9": "biz",
    "it\u30D3\u30B8\u30CD\u30B9": "biz",
    "\u30AD\u30E3\u30EA\u30A2": "biz",
    "\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8": "biz",
    other: "other",
    "\u305D\u306E\u4ED6": "other",
    "\u7DCF\u5408": "other"
  };
  function getCachePath(filename) {
    const fm = FileManager.local();
    return fm.joinPath(fm.cacheDirectory(), filename);
  }
  function getEffectiveToken() {
    if (GITHUB_TOKEN) return GITHUB_TOKEN;
    const shared = globalThis.__IT_TREND_GITHUB_TOKEN__;
    return typeof shared === "string" ? shared : "";
  }
  async function loadArticles() {
    const fm = FileManager.local();
    const cachePath = getCachePath(CACHE_FILENAME);
    const cacheBuster = `?t=${Date.now()}`;
    const requestUrl = GITHUB_RAW_JSON_URL.includes("?") ? `${GITHUB_RAW_JSON_URL}&t=${Date.now()}` : `${GITHUB_RAW_JSON_URL}${cacheBuster}`;
    try {
      const req = new Request(requestUrl);
      req.timeoutInterval = 10;
      const token = getEffectiveToken();
      if (token) {
        req.headers = {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3.raw"
        };
      }
      const json = await req.loadJSON();
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
          const cachedJson = JSON.parse(cachedStr);
          return { data: cachedJson, isOffline: true };
        } catch (cacheErr) {
          console.error(`[Cache Error] Failed to read cached data: ${cacheErr}`);
        }
      }
      return {
        isOffline: true,
        data: {
          updated_at: "\u672A\u53D6\u5F97 (\u30AA\u30D5\u30E9\u30A4\u30F3)",
          articles: [
            {
              title: "\u8A18\u4E8B\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
              url: "https://github.com",
              source: "System",
              genre: "other",
              headline: "URL\u8A2D\u5B9A\u307E\u305F\u306F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
              summary: "GitHub\u306ERaw URL\u307E\u305F\u306FPrivate\u30EA\u30DD\u30B8\u30C8\u30EA\u7528\u306E\u30C8\u30FC\u30AF\u30F3\u304C\u6B63\u3057\u304F\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3057\u3001\u518D\u5EA6\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u66F4\u65B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
              importance: 5
            }
          ]
        }
      };
    }
  }
  function parseWidgetParameter(rawParam) {
    if (typeof rawParam !== "string" || !rawParam.trim()) {
      return [];
    }
    const tokens = rawParam.split(/[,、\s]+/).map((t) => t.trim().toLowerCase()).filter(Boolean);
    const selected = /* @__PURE__ */ new Set();
    for (const token of tokens) {
      if (token === "all" || token === "\u3059\u3079\u3066" || token === "\u5168\u30B8\u30E3\u30F3\u30EB") {
        return [];
      }
      const mapped = GENRE_ALIASES[token];
      if (mapped) {
        selected.add(mapped);
      }
    }
    return Array.from(selected);
  }
  function normalizeArticle(art, isDiscovery) {
    const rawGenre = (art.genre || "other").toLowerCase();
    const genreCode = rawGenre in GENRE_META ? rawGenre : "other";
    const meta = GENRE_META[genreCode];
    const headlineText = art.headline && art.headline.trim().length > 0 ? art.headline.trim() : art.summary.slice(0, 40);
    return {
      ...art,
      genreCode,
      genreDisplay: meta.shortLabel,
      headlineText,
      isDiscovery
    };
  }
  function buildRotationList(rawArticles, selectedGenres) {
    if (rawArticles.length === 0) {
      return [];
    }
    if (selectedGenres.length === 0) {
      return rawArticles.map((art) => normalizeArticle(art, false));
    }
    const selectedSet = new Set(selectedGenres);
    const preferred = [];
    const others = [];
    for (const art of rawArticles) {
      const rawCode = (art.genre || "other").toLowerCase();
      const code = rawCode in GENRE_META ? rawCode : "other";
      if (selectedSet.has(code)) {
        preferred.push(normalizeArticle(art, false));
      } else {
        others.push(normalizeArticle(art, true));
      }
    }
    others.sort((a, b) => (b.importance ?? 5) - (a.importance ?? 5));
    if (preferred.length === 0) {
      return others;
    }
    if (others.length === 0) {
      return preferred;
    }
    const blended = [];
    let pIdx = 0;
    let oIdx = 0;
    while (pIdx < preferred.length) {
      for (let i = 0; i < 3 && pIdx < preferred.length; i++) {
        blended.push(preferred[pIdx++]);
      }
      if (oIdx < others.length) {
        blended.push(others[oIdx++]);
      } else if (others.length > 0 && pIdx < preferred.length) {
        oIdx = 0;
        blended.push(others[oIdx++]);
      }
    }
    return blended;
  }
  function getNormalizedShortcutParam() {
    if (typeof args === "undefined" || args.shortcutParameter == null) {
      return "";
    }
    return String(args.shortcutParameter).trim().toLowerCase();
  }
  function isWallpaperRequest() {
    const actionParam = typeof args !== "undefined" && args.queryParameters ? args.queryParameters.action : void 0;
    const shortcutParam = getNormalizedShortcutParam();
    return Boolean(config.runsWithSiri) || shortcutParam === "wallpaper" || actionParam === "wallpaper";
  }
  function getNextArticlePair(list, filterKey) {
    const fm = FileManager.local();
    const statePath = getCachePath(ROTATION_STATE_FILENAME);
    let state = { currentIndex: -1, filterKey };
    if (fm.fileExists(statePath)) {
      try {
        const parsed = JSON.parse(fm.readString(statePath));
        if (parsed && typeof parsed.currentIndex === "number" && parsed.filterKey === filterKey) {
          state = parsed;
        }
      } catch {
      }
    }
    const now = Date.now();
    const minIntervalMs = ROTATION_INTERVAL_MINUTES * 60 * 1e3;
    const actionParam = typeof args !== "undefined" && args.queryParameters ? args.queryParameters.action : void 0;
    const shortcutParam = getNormalizedShortcutParam();
    const effectiveAction = actionParam || (shortcutParam === "prev" || shortcutParam === "next" ? shortcutParam : void 0);
    let nextIndex = 0;
    let didRotate = true;
    if (effectiveAction === "prev") {
      const baseIdx = state.currentIndex >= 0 ? state.currentIndex : 0;
      nextIndex = (baseIdx - 1 + list.length) % list.length;
    } else if (effectiveAction === "next" || isWallpaperRequest()) {
      const baseIdx = state.currentIndex >= 0 ? state.currentIndex : 0;
      nextIndex = (baseIdx + 1) % list.length;
    } else {
      const shouldHold = state.currentIndex >= 0 && typeof state.lastRotatedAt === "number" && now - state.lastRotatedAt < minIntervalMs;
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
          lastRotatedAt: didRotate ? now : state.lastRotatedAt
        })
      );
    } catch (err) {
      console.warn(`[State Warning] Could not save rotation state: ${err}`);
    }
    return {
      current: list[nextIndex],
      next: list[upcomingIndex],
      currentIndex: nextIndex,
      total: list.length
    };
  }
  function addProgressDots(widget, currentIndex, total) {
    const dotRow = widget.addStack();
    dotRow.layoutHorizontally();
    dotRow.centerAlignContent();
    dotRow.spacing = 4;
    const maxDots = Math.min(total, 15);
    const activeDot = total <= 15 ? currentIndex : Math.floor(currentIndex / total * maxDots);
    for (let i = 0; i < maxDots; i++) {
      const dot = dotRow.addStack();
      const isActive = i === activeDot;
      dot.size = new Size(isActive ? 14 : 5, 4);
      dot.cornerRadius = 2;
      dot.backgroundColor = isActive ? new Color("#38bdf8") : new Color("#475569", 0.65);
    }
    dotRow.addSpacer();
  }
  function formatJapanesePublishedAt(raw) {
    if (!raw) return "";
    const match = raw.trim().match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
    if (!match) return raw;
    const year = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const day = parseInt(match[3], 10);
    const hour = match[4];
    const min = match[5];
    const pubUtcMs = Date.UTC(year, month - 1, day, parseInt(hour, 10), parseInt(min, 10)) - 9 * 3600 * 1e3;
    const diffMs = Math.max(0, Date.now() - pubUtcMs);
    const diffMin = Math.floor(diffMs / 6e4);
    let relLabel = "";
    if (diffMin < 1) {
      relLabel = "\u305F\u3063\u305F\u4ECA";
    } else if (diffMin < 60) {
      relLabel = `${diffMin}\u5206\u524D`;
    } else {
      const diffHours = Math.floor(diffMin / 60);
      if (diffHours < 24) {
        relLabel = `${diffHours}\u6642\u9593\u524D`;
      } else {
        const diffDays = Math.floor(diffHours / 24);
        relLabel = diffDays === 1 ? "\u6628\u65E5" : `${diffDays}\u65E5\u524D`;
      }
    }
    return `${month}\u6708${day}\u65E5 ${hour}:${min}\uFF08${relLabel}\uFF09`;
  }
  function formatUpdatedTime(raw) {
    const match = raw.trim().match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
    if (!match) {
      return raw.replace(" JST", "");
    }
    return `${parseInt(match[2], 10)}\u6708${parseInt(match[3], 10)}\u65E5 ${match[4]}:${match[5]}\u66F4\u65B0`;
  }
  function ensureParagraphs(text) {
    const trimmed = text.trim();
    if (!trimmed) return "";
    if (trimmed.includes("\n\n")) return trimmed;
    const sentences = trimmed.split(/(?<=[。！？])(?![」』）\)])\s*/).map((s) => s.trim()).filter(Boolean);
    if (sentences.length <= 2) return trimmed;
    const paras = [];
    let buf = [];
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
  function buildActionUrl(action) {
    try {
      const base = URLScheme.forRunningScript();
      const sep = base.includes("?") ? "&" : "?";
      return `${base}${sep}action=${action}`;
    } catch {
      return "";
    }
  }
  function getFilterLabel(selectedGenres) {
    return selectedGenres.length > 0 ? `${selectedGenres.map((g) => g.toUpperCase()).join("\u30FB")}+\u{1F310}` : "ALL";
  }
  async function prepareArticleContext() {
    const { data, isOffline } = await loadArticles();
    const widgetParam = typeof args !== "undefined" ? args.widgetParameter : "";
    const rawShortcut = getNormalizedShortcutParam();
    const shortcutGenreParam = rawShortcut && rawShortcut !== "wallpaper" && rawShortcut !== "prev" && rawShortcut !== "next" ? rawShortcut : "";
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
      selectedGenres
    };
  }
  function createLockScreenRectangularWidget(current, currentIndex, total) {
    const widget = new ListWidget();
    widget.setPadding(2, 4, 2, 4);
    widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1e3);
    try {
      widget.url = URLScheme.forRunningScript();
    } catch {
      widget.url = current.url;
    }
    const headerText = widget.addText(
      `\u26A1 [${current.genreDisplay}] ${currentIndex + 1}/${total}\u4EF6`
    );
    headerText.font = Font.boldSystemFont(10);
    headerText.lineLimit = 1;
    headerText.minimumScaleFactor = 0.85;
    widget.addSpacer(1);
    const titleText = widget.addText(current.title);
    titleText.font = Font.boldSystemFont(11);
    titleText.lineLimit = 2;
    titleText.minimumScaleFactor = 0.85;
    widget.addSpacer(1);
    const sub = current.headlineText || current.summary;
    const subText = widget.addText(`\u{1F4A1} ${sub}`);
    subText.font = Font.systemFont(10);
    subText.lineLimit = 1;
    subText.minimumScaleFactor = 0.85;
    return widget;
  }
  function createLockScreenInlineWidget(current) {
    const widget = new ListWidget();
    widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1e3);
    try {
      widget.url = URLScheme.forRunningScript();
    } catch {
      widget.url = current.url;
    }
    const label = `\u26A1 [${current.genreDisplay}] ${current.headlineText || current.title}`;
    widget.addText(label);
    return widget;
  }
  function createLockScreenCircularWidget(currentIndex, total) {
    const widget = new ListWidget();
    widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1e3);
    try {
      widget.url = URLScheme.forRunningScript();
    } catch {
    }
    const title = widget.addText("\u26A1 IT");
    title.font = Font.boldSystemFont(11);
    title.centerAlignText();
    const count = widget.addText(`${currentIndex + 1}/${total}`);
    count.font = Font.mediumSystemFont(10);
    count.centerAlignText();
    return widget;
  }
  function createWidget(ctx) {
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
    widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1e3);
    const gradient = new LinearGradient();
    gradient.colors = [new Color("#0f172a"), new Color("#1e1b4b")];
    gradient.locations = [0, 1];
    widget.backgroundGradient = gradient;
    const headerStack = widget.addStack();
    headerStack.layoutHorizontally();
    headerStack.centerAlignContent();
    headerStack.spacing = 6;
    const logoText = headerStack.addText("\u26A1 IT Trend");
    logoText.font = Font.boldSystemFont(13);
    logoText.textColor = new Color("#60a5fa");
    const filterBadge = headerStack.addStack();
    filterBadge.cornerRadius = 4;
    filterBadge.setPadding(2, 6, 2, 6);
    filterBadge.backgroundColor = new Color("#334155", 0.85);
    const filterLabelStr = getFilterLabel(selectedGenres);
    const filterText = filterBadge.addText(filterLabelStr);
    filterText.font = Font.boldSystemFont(9);
    filterText.textColor = new Color("#cbd5e1");
    headerStack.addSpacer();
    const statusStr = isOffline ? `${currentIndex + 1} / ${total}\u4EF6 \u2022 \u30AD\u30E3\u30C3\u30B7\u30E5` : `${currentIndex + 1} / ${total}\u4EF6 \u2022 ${cleanTime}`;
    const statusText = headerStack.addText(statusStr);
    statusText.font = Font.mediumSystemFont(10);
    statusText.textColor = new Color("#94a3b8");
    widget.addSpacer(5);
    addProgressDots(widget, currentIndex, total);
    widget.addSpacer(8);
    const cardStack = widget.addStack();
    cardStack.layoutVertically();
    cardStack.setPadding(10, 12, 10, 12);
    cardStack.cornerRadius = 12;
    cardStack.backgroundColor = new Color("#1e293b", 0.78);
    cardStack.url = current.url;
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
      const discoveryText = discoveryBadge.addText("\u2728 \u6CE8\u76EE\u67A0");
      discoveryText.font = Font.boldSystemFont(9);
      discoveryText.textColor = new Color("#fcd34d");
      discoveryText.lineLimit = 1;
    }
    badgeRow.addSpacer();
    const formattedPub = formatJapanesePublishedAt(current.published_at);
    if (formattedPub) {
      const pubText = badgeRow.addText(`\u{1F552} ${formattedPub}`);
      pubText.font = Font.mediumSystemFont(9);
      pubText.textColor = new Color("#94a3b8");
      pubText.lineLimit = 1;
      pubText.minimumScaleFactor = 0.75;
      pubText.rightAlignText();
    }
    cardStack.addSpacer(6);
    const titleText = cardStack.addText(current.title);
    titleText.font = Font.boldSystemFont(14);
    titleText.textColor = new Color("#f8fafc");
    titleText.lineLimit = 4;
    titleText.minimumScaleFactor = 0.75;
    if (current.headlineText && current.headlineText !== current.title) {
      cardStack.addSpacer(5);
      const headlineText = cardStack.addText(`\u{1F4A1} ${current.headlineText}`);
      headlineText.font = Font.boldSystemFont(11);
      headlineText.textColor = new Color("#38bdf8");
      headlineText.lineLimit = 2;
      headlineText.minimumScaleFactor = 0.85;
    }
    cardStack.addSpacer(6);
    const summaryText = cardStack.addText(ensureParagraphs(current.summary));
    summaryText.font = Font.systemFont(11);
    summaryText.textColor = new Color("#e2e8f0");
    summaryText.lineLimit = 9;
    summaryText.minimumScaleFactor = 0.8;
    widget.addSpacer();
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
    const prevText = prevBtn.addText("\u2190");
    prevText.font = Font.boldSystemFont(10);
    prevText.textColor = new Color("#e2e8f0");
    const nextInfoStack = footerStack.addStack();
    nextInfoStack.layoutHorizontally();
    nextInfoStack.centerAlignContent();
    nextInfoStack.spacing = 4;
    nextInfoStack.url = next.url;
    const nextLabel = nextInfoStack.addText("NEXT \u25B8");
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
    const nextBtnText = nextBtn.addText("\u2192");
    nextBtnText.font = Font.boldSystemFont(10);
    nextBtnText.textColor = new Color("#e2e8f0");
    return widget;
  }
  function lerpRgbColor(c1, c2, t, alpha = 1) {
    const clampByte = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
    const r = clampByte(c1[0] + (c2[0] - c1[0]) * t);
    const g = clampByte(c1[1] + (c2[1] - c1[1]) * t);
    const b = clampByte(c1[2] + (c2[2] - c1[2]) * t);
    return new Color(`#${r}${g}${b}`, alpha);
  }
  function fillRoundedRect(dc, rect, radius, color) {
    const path = new Path();
    path.addRoundedRect(rect, radius, radius);
    dc.addPath(path);
    dc.setFillColor(color);
    dc.fillPath();
  }
  function strokeRoundedRect(dc, rect, radius, color, lineWidth) {
    const path = new Path();
    path.addRoundedRect(rect, radius, radius);
    dc.addPath(path);
    dc.setStrokeColor(color);
    dc.setLineWidth(lineWidth);
    dc.strokePath();
  }
  function drawWallpaperBackground(dc, width, height) {
    const stops = [
      [9, 13, 24],
      [15, 23, 42],
      [30, 27, 75],
      [9, 13, 24]
    ];
    const bands = 42;
    const bandH = Math.ceil(height / bands) + 2;
    for (let i = 0; i < bands; i++) {
      const progress = i / (bands - 1) * (stops.length - 1);
      const idx = Math.min(stops.length - 2, Math.floor(progress));
      const localT = progress - idx;
      dc.setFillColor(lerpRgbColor(stops[idx], stops[idx + 1], localT));
      dc.fillRect(new Rect(0, Math.floor(i * height / bands), width, bandH));
    }
    dc.setFillColor(new Color("#3b82f6", 0.1));
    dc.fillEllipse(new Rect(680, 560, 580, 580));
    dc.setFillColor(new Color("#8b5cf6", 0.09));
    dc.fillEllipse(new Rect(-140, 1760, 640, 640));
  }
  function estimateDisplayUnits(text) {
    let units = 0;
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i);
      units += code >= 32 && code <= 126 ? 0.58 : 1;
    }
    return units;
  }
  function estimateWrappedLineCount(text, unitsPerLine) {
    const lines = text.split(/\n/);
    let total = 0;
    for (const line of lines) {
      if (!line) {
        total += 1;
        continue;
      }
      total += Math.max(1, Math.ceil(estimateDisplayUnits(line) * 1.12 / unitsPerLine));
    }
    return total;
  }
  function truncateByUnits(text, maxUnits) {
    let units = 0;
    let out = "";
    for (const ch of Array.from(text)) {
      const u = estimateDisplayUnits(ch);
      if (units + u > maxUnits - 1) {
        return `${out}\u2026`;
      }
      out += ch;
      units += u;
    }
    return out;
  }
  function drawPillBadge(dc, label, x, y, height, fontSize, bgColor, textColor) {
    const pillW = Math.max(height, Math.ceil(estimateDisplayUnits(label) * fontSize * 0.96 + 30));
    fillRoundedRect(dc, new Rect(x, y, pillW, height), 10, bgColor);
    dc.setFont(Font.boldSystemFont(fontSize));
    dc.setTextColor(textColor);
    dc.setTextAlignedCenter();
    const textY = y + Math.max(2, Math.round((height - fontSize * 1.25) / 2));
    dc.drawTextInRect(label, new Rect(x, textY, pillW, height - (textY - y)));
    return pillW;
  }
  function createWallpaperImage(ctx) {
    const W = 1179;
    const H = 2556;
    const dc = new DrawContext();
    dc.size = new Size(W, H);
    dc.opaque = true;
    dc.respectScreenScale = false;
    drawWallpaperBackground(dc, W, H);
    const cardX = 48;
    const cardY = 790;
    const cardW = W - cardX * 2;
    const cardH = 1410;
    const padX = 48;
    const innerX = cardX + padX;
    const innerW = cardW - padX * 2;
    fillRoundedRect(dc, new Rect(cardX, cardY, cardW, cardH), 38, new Color("#0f172a", 0.88));
    strokeRoundedRect(dc, new Rect(cardX, cardY, cardW, cardH), 38, new Color("#38bdf8", 0.28), 2);
    const { current, next, currentIndex, total, updatedAt, isOffline, selectedGenres } = ctx;
    if (!current) {
      dc.setFont(Font.boldSystemFont(34));
      dc.setTextColor(new Color("#f8fafc"));
      dc.setTextAlignedCenter();
      dc.drawTextInRect("\u8868\u793A\u3067\u304D\u308B\u8A18\u4E8B\u304C\u3042\u308A\u307E\u305B\u3093", new Rect(innerX, cardY + 640, innerW, 80));
      return dc.getImage();
    }
    dc.setFont(Font.boldSystemFont(30));
    dc.setTextColor(new Color("#60a5fa"));
    dc.setTextAlignedLeft();
    dc.drawTextInRect("\u26A1 IT Trend", new Rect(innerX, 834, 210, 42));
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
    const statusStr = isOffline ? `${currentIndex + 1} / ${total}\u4EF6 \u2022 \u30AD\u30E3\u30C3\u30B7\u30E5` : `${currentIndex + 1} / ${total}\u4EF6 \u2022 ${updatedAt}`;
    const statusStartX = Math.max(216 + filterPillW + 14, 520);
    dc.setFont(Font.mediumSystemFont(23));
    dc.setTextColor(new Color("#94a3b8"));
    dc.setTextAlignedRight();
    dc.drawTextInRect(statusStr, new Rect(innerX + statusStartX, 839, innerW - statusStartX, 34));
    const maxDots = Math.min(Math.max(total, 1), 15);
    const activeDot = total <= 15 ? currentIndex : Math.floor(currentIndex / total * maxDots);
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
    let badgeX = innerX;
    const badgeY = 924;
    const genreMeta = GENRE_META[current.genreCode];
    badgeX += drawPillBadge(
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
    badgeX += drawPillBadge(
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
      badgeX += drawPillBadge(
        dc,
        "\u2728 \u6CE8\u76EE\u67A0",
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
      dc.drawTextInRect(`\u{1F552} ${formattedPub}`, new Rect(badgeX, 930, innerX + innerW - badgeX, 34));
    }
    let curY = 992;
    const titleLines = Math.min(4, estimateWrappedLineCount(current.title, 22.5));
    const titleH = titleLines * 54 + 6;
    dc.setFont(Font.boldSystemFont(40));
    dc.setTextColor(new Color("#f8fafc"));
    dc.setTextAlignedLeft();
    dc.drawTextInRect(current.title, new Rect(innerX, curY, innerW, titleH));
    curY += titleH + 14;
    if (current.headlineText && current.headlineText !== current.title) {
      const hlStr = `\u{1F4A1} ${current.headlineText}`;
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
    dc.setFillColor(new Color("#334155", 0.8));
    dc.fillRect(new Rect(innerX, curY, innerW, 2));
    curY += 22;
    const footerTopY = 2116;
    const bodyMaxY = footerTopY - 14;
    const availableBodyH = Math.max(120, bodyMaxY - curY);
    const paragraphs = ensureParagraphs(current.summary).split(/\n{2,}/).filter((p) => p.trim().length > 0);
    const fontPresets = [
      { size: 31, lineH: 45, uPerLine: 30.2, gap: 20 },
      { size: 28, lineH: 40, uPerLine: 33.5, gap: 17 },
      { size: 25, lineH: 36, uPerLine: 37.5, gap: 14 }
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
    dc.setFillColor(new Color("#334155", 0.8));
    dc.fillRect(new Rect(innerX, footerTopY, innerW, 2));
    dc.setFont(Font.boldSystemFont(24));
    dc.setTextColor(new Color("#38bdf8"));
    dc.setTextAlignedLeft();
    dc.drawTextInRect("NEXT \u25B8", new Rect(innerX, footerTopY + 22, 118, 36));
    const nextSummary = truncateByUnits(`[${next.genreDisplay}] ${next.title}`, 34);
    dc.setFont(Font.systemFont(24));
    dc.setTextColor(new Color("#94a3b8"));
    dc.setTextAlignedLeft();
    dc.drawTextInRect(nextSummary, new Rect(innerX + 120, footerTopY + 22, innerW - 120, 36));
    dc.setFont(Font.mediumSystemFont(22));
    dc.setTextColor(new Color("#94a3b8", 0.78));
    dc.setTextAlignedCenter();
    dc.drawTextInRect(
      "\u{1F4A1} \u80CC\u9762\u30BF\u30C3\u30D7\u3084\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u5B9F\u884C\u3067\u6B21\u306E\u8A18\u4E8B\u30AB\u30FC\u30C9\u3078\u66F4\u65B0",
      new Rect(cardX, cardY + cardH + 18, cardW, 34)
    );
    return dc.getImage();
  }
  async function presentInteractiveReader(list, startIndex, updatedAt, selectedGenres) {
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
        publishedText: formatJapanesePublishedAt(art.published_at)
      }))
    ).replace(/</g, "\\u003c");
    const filterBadgeText = selectedGenres.length > 0 ? `${selectedGenres.map((g) => g.toUpperCase()).join("\u30FB")}+\u{1F310}` : "ALL";
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
    <span class="logo">\u26A1 IT Trend Reader</span>
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
    <button class="btn" onclick="move(-1)">\u2190 \u524D\u306E\u8A18\u4E8B</button>
    <a id="open-link" class="btn btn-primary" href="#">\u5143\u8A18\u4E8B\u3092\u958B\u304F \u2197</a>
    <button class="btn" onclick="move(1)">\u6B21\u306E\u8A18\u4E8B \u2192</button>
  </div>
  <div class="footer">
    <span class="next-label">NEXT \u25B8</span>
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
    document.getElementById("status").textContent = (idx + 1) + " / " + ITEMS.length + "\u4EF6 \u2022 ${updatedAt}";
    const meta = COLORS[cur.genreCode] || COLORS.other;
    let badges = '<span class="tag" style="background:rgba(139,92,246,0.22);color:' + meta.color + '">' + cur.genreDisplay + '</span>';
    const isZenn = cur.source.toLowerCase().includes("zenn");
    badges += '<span class="tag" style="background:' + (isZenn ? "rgba(62,168,255,0.22);color:#7dd3fc" : "rgba(239,68,68,0.22);color:#fca5a5") + '">' + cur.source.toUpperCase() + '</span>';
    if (cur.isDiscovery) badges += '<span class="tag" style="background:rgba(245,158,11,0.25);color:#fcd34d">\u2728 \u6CE8\u76EE\u67A0</span>';
    if (cur.publishedText) badges += '<span class="pub">\u{1F552} ' + cur.publishedText + '</span>';
    document.getElementById("meta").innerHTML = badges;
    document.getElementById("title").textContent = cur.title;
    const hlEl = document.getElementById("headline");
    if (cur.headlineText && cur.headlineText !== cur.title) {
      hlEl.textContent = "\u{1F4A1} " + cur.headlineText;
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
<\/script>
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
  async function run() {
    const ctx = await prepareArticleContext();
    if (isWallpaperRequest()) {
      const wallpaperImage = createWallpaperImage(ctx);
      Script.setShortcutOutput(wallpaperImage);
    } else if (config.runsInWidget || config.runsInAccessoryWidget) {
      const widget = createWidget(ctx);
      Script.setWidget(widget);
    } else {
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
})();
