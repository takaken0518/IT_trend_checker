import os
import sys
import json
import re
import time
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
from collections import defaultdict
from datetime import datetime, timezone, timedelta
from email.utils import parsedate_to_datetime
from typing import Dict, List, Literal, Tuple
import requests
from bs4 import BeautifulSoup
from pydantic import BaseModel, Field
from google import genai
from google.genai import types

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CONFIG_PATH = os.path.join(ROOT_DIR, "config.json")
OUTPUT_PATH = os.path.join(ROOT_DIR, "articles.json")

JST = timezone(timedelta(hours=9))

DEFAULT_GENRES: Dict[str, str] = {
    "ai": "AI・LLM・機械学習",
    "web": "Web開発・言語",
    "infra": "インフラ・クラウド・セキュリティ",
    "mobile": "モバイル・ガジェット・個人開発",
    "biz": "ITビジネス・キャリア・マネジメント",
    "other": "総合・その他IT",
}

DEFAULT_CONFIG = {
    "total_articles": 50,
    "max_age_hours": 72,
    "sources": {
        "hatena_hot_limit": 25,
        "hatena_new_limit": 20,
        "zenn_limit": 35,
    },
    "genres": DEFAULT_GENRES,
    "selected_genres": ["ai", "web", "infra", "mobile", "biz"],
    "other_genre_min_ratio": 0.25,
}

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36 ITTrendBot/1.0"
    )
}

GenreCode = Literal["ai", "web", "infra", "mobile", "biz", "other"]

GENRE_KEYWORDS: Dict[str, List[str]] = {
    "ai": [
        "ai", "llm", "gpt", "gemini", "claude", "anthropic", "openai", "rag",
        "機械学習", "生成ai", "ディープラーニング", "エージェント", "プロンプト",
        "mcp", "copilot", "cursor", "llama", "gguf", "transformer", "推論",
    ],
    "web": [
        "typescript", "javascript", "react", "next", "vue", "nuxt", "svelte",
        "rust", "go", "golang", "python", "ruby", "rails", "php", "java",
        "web", "css", "html", "frontend", "backend", "api", "graphql", "node",
        "vite", "esbuild", "フロントエンド", "バックエンド",
    ],
    "infra": [
        "aws", "gcp", "azure", "cloudflare", "docker", "kubernetes", "k8s",
        "linux", "db", "sql", "postgresql", "mysql", "redis", "terraform",
        "ci/cd", "github actions", "セキュリティ", "脆弱性", "情報漏えい",
        "ネットワーク", "インフラ", "クラウド", "サーバー", "nginx", "ebpf",
    ],
    "mobile": [
        "ios", "android", "swift", "kotlin", "flutter", "react native",
        "iphone", "ipad", "スマホ", "ガジェット", "個人開発", "ラズパイ",
        "raspberry", "esp32", "arduino", "scriptable", "bluetooth", "アプリ",
    ],
    "biz": [
        "マネジメント", "キャリア", "組織", "エンジニア", "採用", "負債",
        "レビュー", "開発生産性", "scrum", "スクラム", "アジャイル", "cto",
        "em", "プロダクト", "経営", "チーム", "働き方", "年収", "面接",
    ],
}


class ArticleItem:
    def __init__(
        self,
        title: str,
        url: str,
        source: str,
        snippet: str = "",
        published_at: str = "",
        published_ts: float = 0.0,
    ):
        self.title = title
        self.url = url
        self.source = source
        self.snippet = snippet
        self.published_at = published_at
        self.published_ts = published_ts
        self.content: str = ""
        self.genre: str = "other"
        self.headline: str = ""
        self.summary: str = ""
        self.importance: int = 5


def parse_iso_datetime(dt_str: str) -> Tuple[str, float]:
    """ISO8601またはRFC2822日時文字列をJST 'YYYY-MM-DD HH:MM' とUNIXタイムスタンプに変換"""
    if not dt_str or not dt_str.strip():
        return ("", 0.0)
    raw = dt_str.strip()
    try:
        # Python 3.10のfromisoformat対応のため末尾Zを+00:00へ変換
        normalized = raw[:-1] + "+00:00" if raw.endswith("Z") else raw
        dt = datetime.fromisoformat(normalized)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=JST)
        dt_jst = dt.astimezone(JST)
        return (dt_jst.strftime("%Y-%m-%d %H:%M"), dt.timestamp())
    except Exception:
        try:
            dt = parsedate_to_datetime(raw)
            if dt.tzinfo is None:
                dt = dt.replace(tzinfo=JST)
            dt_jst = dt.astimezone(JST)
            return (dt_jst.strftime("%Y-%m-%d %H:%M"), dt.timestamp())
        except Exception:
            return ("", 0.0)


def load_dotenv_if_present() -> None:
    """リポジトリルートの.envが存在すれば環境変数として読み込む"""
    dotenv_path = os.path.join(ROOT_DIR, ".env")
    if not os.path.exists(dotenv_path):
        return
    try:
        with open(dotenv_path, "r", encoding="utf-8") as f:
            for line in f:
                stripped = line.strip()
                if not stripped or stripped.startswith("#") or "=" not in stripped:
                    continue
                key, val = stripped.split("=", 1)
                key = key.strip()
                val = val.strip().strip('"').strip("'")
                if key and val and key not in os.environ:
                    os.environ[key] = val
    except Exception as e:
        print(f"[Warning] Failed to read .env: {e}", file=sys.stderr)


def load_config() -> dict:
    """config.jsonを読み込み、不足項目はデフォルト値で補完する"""
    if not os.path.exists(CONFIG_PATH):
        print(f"[Info] {CONFIG_PATH} not found. Using default config.")
        return DEFAULT_CONFIG.copy()
    try:
        with open(CONFIG_PATH, "r", encoding="utf-8") as f:
            user_cfg = json.load(f)
        merged = DEFAULT_CONFIG.copy()
        merged.update({k: v for k, v in user_cfg.items() if k != "sources"})
        sources = DEFAULT_CONFIG["sources"].copy()
        if isinstance(user_cfg.get("sources"), dict):
            sources.update(user_cfg["sources"])
        merged["sources"] = sources
        if not isinstance(merged.get("genres"), dict):
            merged["genres"] = DEFAULT_GENRES.copy()
        return merged
    except Exception as e:
        print(f"[Warning] Failed to load config.json: {e}. Using defaults.", file=sys.stderr)
        return DEFAULT_CONFIG.copy()


def _fetch_hatena_feed(feed_url: str, limit: int) -> List[ArticleItem]:
    """指定のはてなブックマークRSSから記事を取得"""
    articles: List[ArticleItem] = []
    try:
        resp = requests.get(feed_url, headers=HEADERS, timeout=12)
        resp.raise_for_status()
        root = ET.fromstring(resp.content)
        ns = {
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "rss": "http://purl.org/rss/1.0/",
            "dc": "http://purl.org/dc/elements/1.1/",
        }
        items = root.findall(".//rss:item", ns)
        if not items:
            items = root.findall(".//item")

        for item in items[:limit]:
            title_elem = (
                item.find("rss:title", ns)
                if item.find("rss:title", ns) is not None
                else item.find("title")
            )
            link_elem = (
                item.find("rss:link", ns)
                if item.find("rss:link", ns) is not None
                else item.find("link")
            )
            desc_elem = (
                item.find("rss:description", ns)
                if item.find("rss:description", ns) is not None
                else item.find("description")
            )
            date_elem = item.find("dc:date", ns)
            if date_elem is None:
                date_elem = item.find("pubDate")

            title = (
                title_elem.text.strip()
                if title_elem is not None and title_elem.text
                else "No title"
            )
            link = link_elem.text.strip() if link_elem is not None and link_elem.text else ""
            snippet = (
                desc_elem.text.strip()
                if desc_elem is not None and desc_elem.text
                else ""
            )
            raw_date = date_elem.text.strip() if date_elem is not None and date_elem.text else ""
            pub_str, pub_ts = parse_iso_datetime(raw_date)

            if link:
                articles.append(
                    ArticleItem(
                        title=title,
                        url=link,
                        source="Hatena",
                        snippet=snippet,
                        published_at=pub_str,
                        published_ts=pub_ts,
                    )
                )
    except Exception as e:
        print(f"[Warning] Failed to fetch Hatena RSS ({feed_url}): {e}", file=sys.stderr)
    return articles


def fetch_hatena_articles(hot_limit: int = 25, new_limit: int = 20) -> List[ArticleItem]:
    """はてなブックマークITの人気RSS＋新着RSSから取得し新しい順ベースで統合"""
    hot_items = _fetch_hatena_feed("https://b.hatena.ne.jp/hotentry/it.rss", hot_limit)
    new_items = _fetch_hatena_feed("https://b.hatena.ne.jp/entrylist/it.rss", new_limit)
    # 新着と人気を混ぜ、同一URLは新しい方/人気側を残す
    combined = new_items + hot_items
    seen = set()
    unique: List[ArticleItem] = []
    for art in sorted(combined, key=lambda x: x.published_ts, reverse=True):
        norm = art.url.rstrip("/")
        if norm not in seen:
            seen.add(norm)
            unique.append(art)
    return unique


def fetch_zenn_articles(limit: int = 35) -> List[ArticleItem]:
    """Zenn トレンドAPIとデイリーAPIから取得し、published_atの新しい順に返却"""
    endpoints = [
        "https://zenn.dev/api/articles?order=trend&count=48",
        "https://zenn.dev/api/articles?order=daily&count=40",
    ]
    seen_urls = set()
    articles: List[ArticleItem] = []

    for url in endpoints:
        try:
            resp = requests.get(url, headers=HEADERS, timeout=12)
            resp.raise_for_status()
            data = resp.json()
            for item in data.get("articles", []):
                title = item.get("title", "No title")
                path = item.get("path", "")
                link = f"https://zenn.dev{path}" if path.startswith("/") else path
                norm = link.rstrip("/")
                if not link or norm in seen_urls:
                    continue
                seen_urls.add(norm)
                pub_str, pub_ts = parse_iso_datetime(item.get("published_at", ""))
                articles.append(
                    ArticleItem(
                        title=title,
                        url=link,
                        source="Zenn",
                        snippet=title,
                        published_at=pub_str,
                        published_ts=pub_ts,
                    )
                )
        except Exception as e:
            print(f"[Warning] Failed to fetch Zenn API ({url}): {e}", file=sys.stderr)

    # 新着順で上位limit件を返す
    articles.sort(key=lambda x: x.published_ts, reverse=True)
    return articles[:limit]


def _title_tokens(title: str) -> set:
    """タイトルから2文字以上の英数字・漢字・カタカナの主要トークンを抽出"""
    tokens = re.findall(r"[A-Za-z0-9]{2,}|[一-龥々ヶ]{2,}|[ァ-ヴー]{2,}", title.lower())
    return set(tokens)


def _is_same_topic(tokens_a: set, tokens_b: set) -> bool:
    if not tokens_a or not tokens_b:
        return False
    inter = len(tokens_a & tokens_b)
    if inter >= 3:
        return True
    union = len(tokens_a | tokens_b)
    return (inter / union) >= 0.35 if union > 0 else False


def deduplicate_and_prioritize_fresh(
    articles: List[ArticleItem], max_age_hours: float = 72.0, max_candidates: int = 60
) -> List[ArticleItem]:
    """URL重複と同一ニュースの連続を抑制しつつ、直近max_age_hours以内の新着記事を優先抽出"""
    now_ts = time.time()
    cutoff_ts = now_ts - (max_age_hours * 3600.0)

    seen_urls = set()
    fresh: List[ArticleItem] = []
    older: List[ArticleItem] = []

    for art in articles:
        norm_url = art.url.rstrip("/")
        if norm_url in seen_urls:
            continue
        seen_urls.add(norm_url)
        if art.published_ts >= cutoff_ts or art.published_ts == 0.0:
            fresh.append(art)
        else:
            older.append(art)

    fresh.sort(key=lambda x: x.published_ts, reverse=True)
    older.sort(key=lambda x: x.published_ts, reverse=True)

    ordered = fresh + older
    selected: List[ArticleItem] = []
    deferred: List[ArticleItem] = []
    topic_clusters: List[Tuple[set, int]] = []

    for art in ordered:
        tokens = _title_tokens(art.title)
        matched_idx = -1
        for i, (c_tokens, _) in enumerate(topic_clusters):
            if _is_same_topic(tokens, c_tokens):
                matched_idx = i
                break

        if matched_idx >= 0:
            c_tokens, count = topic_clusters[matched_idx]
            if count >= 2:
                deferred.append(art)
                continue
            topic_clusters[matched_idx] = (c_tokens | tokens, count + 1)
        else:
            topic_clusters.append((tokens, 1))

        selected.append(art)
        if len(selected) >= max_candidates:
            break

    if len(selected) < max_candidates and deferred:
        selected.extend(deferred[: max_candidates - len(selected)])

    return selected


NOISE_PATTERNS = [
    r"[▼▲]\s*サーバー運営を助ける支援をお願いします",
    r"毎月\s*825円.*?毎月\s*1回",
    r"親愛なる読者の皆さまへ。.*?状態です。",
    r"このままだと1ページを10分割.*?から！",
    r"Googleで優先するソースとして追加",
    r"Continue to CNET Japan.*?(?:Newsletter|$)",
    r"よく検索されるワード.*?お試しください。",
    r"サーバーで一時的なエラーが発生し.*?お試しください。",
    r"日経の記事利用サービスについて.*?ご覧ください。",
    r"トピックをフォローすると.*?なります。",
    r"Share\s+印刷する",
    r"Share\s+Email\s*\d*",
    r"Table of contents\s+Exit editor mode.*?Read in English",
]


def _remove_site_noise(text: str) -> str:
    cleaned = text
    for pat in NOISE_PATTERNS:
        cleaned = re.sub(pat, " ", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned


def extract_article_body(url: str, max_chars: int = 2500) -> str:
    """記事URLからmeta概要＋本文テキスト（最大2500文字）をノイズ除去しつつ抽出"""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=6)
        resp.raise_for_status()
        resp.encoding = resp.apparent_encoding or "utf-8"
        soup = BeautifulSoup(resp.text, "html.parser")

        # meta description / og:description を優先取得
        meta_desc = ""
        for attr_key, attr_val in [("property", "og:description"), ("name", "description")]:
            tag = soup.find("meta", attrs={attr_key: attr_val})
            if tag and tag.get("content"):
                meta_desc = re.sub(r"\s+", " ", str(tag["content"])).strip()
                break

        for tag in soup(
            ["script", "style", "nav", "header", "footer", "aside", "svg", "noscript", "form", "button"]
        ):
            tag.decompose()

        article_elem = soup.find("article") or soup.find("main") or soup.body
        body_text = ""
        if article_elem:
            # 段落・見出し・箇条書きタグを優先抽出して見やすい本文を得る
            blocks = [
                el.get_text(" ", strip=True)
                for el in article_elem.find_all(["p", "h2", "h3", "li"])
                if len(el.get_text(strip=True)) >= 12
            ]
            if blocks:
                body_text = " ".join(blocks)
            else:
                body_text = article_elem.get_text(separator=" ", strip=True)

        body_text = _remove_site_noise(body_text)

        # meta_descが省略抜粋(...)であったり本文冒頭と重複する場合は本文のみを優先
        if meta_desc:
            head_sig = re.sub(r"\s+", "", meta_desc)[:20]
            body_sig = re.sub(r"\s+", "", body_text)[:120]
            is_truncated_meta = meta_desc.endswith(("...", "…"))
            if body_text and (head_sig in body_sig or is_truncated_meta):
                combined = body_text
            else:
                combined = f"{meta_desc} {body_text}".strip()
        else:
            combined = body_text

        return combined[:max_chars]
    except Exception as e:
        print(f"[Info] Scrape failed for {url}: {e}", file=sys.stderr)
        return ""


def extract_bodies_parallel(articles: List[ArticleItem], max_chars: int = 2500) -> None:
    """ThreadPoolExecutorで各記事の本文テキストを並列抽出"""
    with ThreadPoolExecutor(max_workers=12) as executor:
        future_to_art = {
            executor.submit(extract_article_body, art.url, max_chars): art
            for art in articles
        }
        for future in as_completed(future_to_art):
            art = future_to_art[future]
            try:
                art.content = future.result()
            except Exception as e:
                print(f"[Info] Worker error for {art.url}: {e}", file=sys.stderr)
                art.content = ""


class AnalyzedArticle(BaseModel):
    index: int
    genre: GenreCode = Field(
        description=(
            "記事の主要ジャンル: "
            "'ai' (AI・LLM・機械学習), "
            "'web' (Web開発・フロント/バックエンド・プログラミング言語), "
            "'infra' (インフラ・クラウド・DevOps・セキュリティ・DB), "
            "'mobile' (モバイルアプリ・ハードウェア・ガジェット・個人開発), "
            "'biz' (ITビジネス・キャリア・マネジメント・開発組織), "
            "'other' (上記に当てはまらない総合IT記事)"
        )
    )
    headline: str = Field(
        description="記事の結論や核心テーマがひと目でわかる60文字以内の日本語1文"
    )
    summary: str = Field(
        description=(
            "記事を開かなくても背景・具体的な技術内容・結論・ポイントが十分理解できるよう、"
            "250〜380文字程度で2〜3段落（段落間は\\n\\nで区切る）に分けて詳しく解説した日本語要約"
        )
    )
    importance: int = Field(
        description="ITトレンドとしての注目度・技術的インパクトスコア（1〜10の整数、10が最高）"
    )


class BatchAnalysisResponse(BaseModel):
    articles: List[AnalyzedArticle]


def _guess_genre_from_text(text: str) -> str:
    """キーワードマッチでジャンルを推定する（フォールバック用）"""
    lowered = text.lower()
    best_genre = "other"
    best_hits = 0
    for genre, keywords in GENRE_KEYWORDS.items():
        hits = sum(1 for kw in keywords if kw in lowered)
        if hits > best_hits:
            best_hits = hits
            best_genre = genre
    return best_genre


def _split_sentences(text: str) -> List[str]:
    """日本語・英語テキストを文単位に分割（カギ括弧内での分断を防止）"""
    cleaned = re.sub(r"\s+", " ", text).strip()
    if not cleaned:
        return []
    parts = re.split(r"(?<=[。！？])(?![」』）\)])\s*|(?<=\.)\s+(?=[A-Z0-9「『])", cleaned)
    return [p.strip() for p in parts if p.strip()]


def _format_into_paragraphs(text: str, max_len: int = 480) -> str:
    """重複文を除去しつつ文の区切りで切り出し、2文または120〜160文字ごとに段落(\\n\\n)化する"""
    if "\n\n" in text:
        paras = [re.sub(r"\s+", " ", p).strip() for p in text.split("\n\n") if p.strip()]
        if len(paras) >= 2:
            return "\n\n".join(paras)

    raw_sentences = _split_sentences(text)
    if not raw_sentences:
        return text.strip()

    deduped: List[str] = []
    seen_sigs: List[str] = []
    for sent in raw_sentences:
        # 途切れ抜粋（「... 」や「… 」を含む文）はスキップして完全な本文を優先
        if "... " in sent or "… " in sent or sent.endswith(("...", "…")):
            continue
        sig = re.sub(r"\s+", "", sent)[:22]
        if not sig:
            continue
        if any(sig in prev or prev in sig for prev in seen_sigs):
            continue
        seen_sigs.append(sig)
        deduped.append(sent)

    if not deduped:
        deduped = raw_sentences

    selected: List[str] = []
    total_chars = 0
    for sent in deduped:
        if selected and total_chars + len(sent) > max_len:
            break
        if not selected and len(sent) > max_len:
            selected.append(sent[: max_len - 1] + "。")
            break
        selected.append(sent)
        total_chars += len(sent) + 1

    # 2文ごと、または120文字を超えたタイミングで段落分割して読みやすくする
    paragraphs: List[str] = []
    buf: List[str] = []
    buf_len = 0
    for sent in selected:
        buf.append(sent)
        buf_len += len(sent)
        if len(buf) >= 2 or buf_len >= 130:
            paragraphs.append("".join(buf))
            buf = []
            buf_len = 0
    if buf:
        paragraphs.append("".join(buf))

    return "\n\n".join(paragraphs)


def _extract_first_headline(text: str, max_len: int = 68) -> str:
    """途中で不自然に切れない先頭1文をキャッチとして抽出"""
    sentences = _split_sentences(text)
    for sent in sentences:
        if ("…" in sent or "..." in sent) and len(sent) < 60:
            continue
        if len(sent) <= max_len:
            return sent
        return sent[: max_len - 1] + "…"
    cleaned = re.sub(r"\s+", " ", text).strip()
    return cleaned if len(cleaned) <= max_len else cleaned[: max_len - 1] + "…"


def _apply_fallback_analysis(articles: List[ArticleItem]) -> None:
    """APIキー未設定時やAPI失敗時のフォールバック解析（重複除去＆段落分け付き）"""
    for art in articles:
        combined_text = f"{art.title} {art.snippet} {art.content[:600]}"
        if art.genre not in DEFAULT_GENRES or art.genre == "other":
            art.genre = _guess_genre_from_text(combined_text)

        if not art.headline:
            base_head = art.snippet if (art.snippet and art.snippet != art.title) else (art.content or art.title)
            art.headline = _extract_first_headline(base_head, 68)

        if not art.summary:
            body_text = art.content.strip()
            if body_text and len(body_text) > 40:
                if art.snippet and art.snippet != art.title and art.snippet[:20] not in body_text[:120]:
                    base_sum = f"{art.snippet} {body_text}"
                else:
                    base_sum = body_text
            elif art.snippet and art.snippet != art.title:
                base_sum = f"{art.title}。{art.snippet}"
            else:
                base_sum = f"{art.source}で注目されている記事: {art.title}"
            art.summary = _format_into_paragraphs(base_sum, max_len=480)


MODEL_CANDIDATES = ["gemini-3.1-flash-lite", "gemini-2.5-flash-lite", "gemini-3.8-flash"]


def analyze_articles_with_gemini(
    articles: List[ArticleItem], genres_map: Dict[str, str], chunk_size: int = 15
) -> None:
    """Gemini APIを使ってチャンクごとにジャンル分類・要約・重要度判定を実行"""
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print(
            "[Warning] GEMINI_API_KEY is not set. Generating keyword-based fallback summaries.",
            file=sys.stderr,
        )
        _apply_fallback_analysis(articles)
        return

    client = genai.Client(
        api_key=api_key,
        http_options=types.HttpOptions(
            timeout=30000,
            retry_options=types.HttpRetryOptions(attempts=2),
        ),
    )
    genre_desc = "\n".join([f"- {k}: {v}" for k, v in genres_map.items()])

    for start in range(0, len(articles), chunk_size):
        chunk = articles[start : start + chunk_size]
        articles_payload = []
        for idx, art in enumerate(chunk):
            context = f"【タイトル】: {art.title}\n【ソース】: {art.source}\n"
            if art.published_at:
                context += f"【公開日時】: {art.published_at}\n"
            if art.snippet and art.snippet != art.title:
                context += f"【概要】: {art.snippet}\n"
            if art.content:
                context += f"【本文抜粋】: {art.content}\n"
            articles_payload.append(f"--- 記事 ID: {idx} ---\n{context}")

        prompt = (
            "あなたは優秀なIT・技術系ニュースキュレーターです。\n"
            "以下の各技術記事を解析し、指定のJSONスキーマに従って情報を出力してください。\n\n"
            "【ジャンル分類基準】\n"
            f"{genre_desc}\n\n"
            "【生成ルール】\n"
            "1. genre: 記事内容に最も合致するジャンルキー（ai, web, infra, mobile, biz, other）を1つ選ぶ。\n"
            "2. headline: 記事の結論やテーマが一目でわかる60文字以内の日本語1文（体言止め・簡潔表現）。\n"
            "3. summary: 記事を開かなくても背景・具体的な技術内容・結論・ポイントが十分理解できるよう、250〜380文字程度で「背景・概要」「具体的な内容」「結論・ポイント」の2〜3段落（段落間は\\n\\nで区切る）に分けて詳しく解説した日本語要約を書く。\n"
            "4. importance: 業界への影響度やエンジニアの関心度を1〜10の整数で評価する。\n\n"
            + "\n".join(articles_payload)
        )

        parsed = None
        for model_name in MODEL_CANDIDATES:
            try:
                response = client.models.generate_content(
                    model=model_name,
                    contents=prompt,
                    config=types.GenerateContentConfig(
                        response_mime_type="application/json",
                        response_schema=BatchAnalysisResponse,
                        temperature=0.2,
                    ),
                )
                parsed = BatchAnalysisResponse.model_validate_json(response.text)
                print(f"  -> Chunk offset={start} summarized using {model_name}")
                break
            except Exception as e:
                print(
                    f"[Warning] Model {model_name} failed for chunk offset={start}: {e}",
                    file=sys.stderr,
                )

        if parsed is None:
            print(
                f"[Error] All Gemini models failed for chunk offset={start}. Applying fallback.",
                file=sys.stderr,
            )
            _apply_fallback_analysis(chunk)
            continue

        result_map = {item.index: item for item in parsed.articles}
        for idx, art in enumerate(chunk):
            res = result_map.get(idx)
            if res:
                art.genre = res.genre if res.genre in genres_map else "other"
                art.headline = res.headline.strip()
                art.summary = _format_into_paragraphs(res.summary.strip(), max_len=480)
                art.importance = max(1, min(10, int(res.importance)))
            else:
                _apply_fallback_analysis([art])


def _freshness_score(art: ArticleItem, now_ts: float) -> Tuple[float, float]:
    """鮮度ボーナスを加味した実効スコアと公開タイムスタンプを返す"""
    bonus = 0.0
    if art.published_ts > 0:
        age_hours = max(0.0, (now_ts - art.published_ts) / 3600.0)
        if age_hours <= 6.0:
            bonus = 4.0
        elif age_hours <= 24.0:
            bonus = 2.5
        elif age_hours <= 48.0:
            bonus = 1.0
    return (art.importance + bonus, art.published_ts)


def _round_robin_by_genre(items: List[ArticleItem], now_ts: float) -> List[ArticleItem]:
    """同ジャンルが連続しないよう、鮮度＋重要度降順を保ちつつジャンル間でラウンドロビン配置する"""
    grouped: Dict[str, List[ArticleItem]] = defaultdict(list)
    for item in sorted(items, key=lambda x: _freshness_score(x, now_ts), reverse=True):
        grouped[item.genre].append(item)

    genre_order = sorted(
        grouped.keys(),
        key=lambda g: _freshness_score(grouped[g][0], now_ts) if grouped[g] else (0.0, 0.0),
        reverse=True,
    )

    result: List[ArticleItem] = []
    while any(grouped[g] for g in genre_order):
        for g in genre_order:
            if grouped[g]:
                result.append(grouped[g].pop(0))
    return result


def select_and_interleave_articles(
    candidates: List[ArticleItem],
    selected_genres: List[str],
    total_articles: int = 50,
    other_ratio: float = 0.25,
) -> List[ArticleItem]:
    """
    選択ジャンルを優先しつつ、他ジャンルの重要・新着記事も一定割合(other_ratio)以上混ぜて選出・交互配置する。
    """
    if not candidates:
        return []

    now_ts = time.time()
    selected_set = set(selected_genres) if selected_genres else set(DEFAULT_GENRES.keys())
    preferred_raw = [a for a in candidates if a.genre in selected_set]
    others_raw = sorted(
        [a for a in candidates if a.genre not in selected_set],
        key=lambda x: _freshness_score(x, now_ts),
        reverse=True,
    )

    preferred_rr = _round_robin_by_genre(preferred_raw, now_ts)

    if not others_raw or other_ratio <= 0:
        return (preferred_rr + others_raw)[:total_articles]

    target_total = min(total_articles, len(candidates))
    min_other_count = min(len(others_raw), max(1, round(target_total * other_ratio)))
    preferred_target = target_total - min_other_count

    chosen_preferred = preferred_rr[:preferred_target]
    chosen_others = others_raw[:min_other_count]

    if len(chosen_preferred) < preferred_target:
        shortage = preferred_target - len(chosen_preferred)
        chosen_others = others_raw[: min_other_count + shortage]

    if len(chosen_preferred) + len(chosen_others) < target_total:
        used_urls = {a.url for a in chosen_preferred + chosen_others}
        for art in preferred_rr:
            if art.url not in used_urls:
                chosen_preferred.append(art)
                used_urls.add(art.url)
                if len(chosen_preferred) + len(chosen_others) >= target_total:
                    break

    step = max(1, round((1.0 - other_ratio) / other_ratio)) if other_ratio < 1.0 else 1
    interleaved: List[ArticleItem] = []
    p_idx = 0
    o_idx = 0

    while p_idx < len(chosen_preferred) or o_idx < len(chosen_others):
        for _ in range(step):
            if p_idx < len(chosen_preferred):
                interleaved.append(chosen_preferred[p_idx])
                p_idx += 1
        if o_idx < len(chosen_others):
            interleaved.append(chosen_others[o_idx])
            o_idx += 1

    return interleaved[:target_total]


def main():
    load_dotenv_if_present()
    config = load_config()
    total_articles = int(config.get("total_articles", 50))
    max_age_hours = float(config.get("max_age_hours", 72))
    sources_cfg = config.get("sources", {})
    hatena_hot_limit = int(sources_cfg.get("hatena_hot_limit", 25))
    hatena_new_limit = int(sources_cfg.get("hatena_new_limit", 20))
    zenn_limit = int(sources_cfg.get("zenn_limit", 35))
    genres_map: Dict[str, str] = config.get("genres", DEFAULT_GENRES)
    selected_genres: List[str] = config.get("selected_genres", list(DEFAULT_GENRES.keys()))
    other_ratio = float(config.get("other_genre_min_ratio", 0.25))

    print(
        f"[1/5] Fetching articles (Hatena hot={hatena_hot_limit}/new={hatena_new_limit}, "
        f"Zenn={zenn_limit})..."
    )
    hatena = fetch_hatena_articles(hot_limit=hatena_hot_limit, new_limit=hatena_new_limit)
    zenn = fetch_zenn_articles(limit=zenn_limit)

    combined: List[ArticleItem] = []
    max_len = max(len(hatena), len(zenn))
    for i in range(max_len):
        if i < len(zenn):
            combined.append(zenn[i])
        if i < len(hatena):
            combined.append(hatena[i])

    candidates = deduplicate_and_prioritize_fresh(
        combined, max_age_hours=max_age_hours, max_candidates=60
    )
    if not candidates:
        print("[Error] No articles retrieved from sources.", file=sys.stderr)
        sys.exit(1)

    print(f"[2/5] Extracting body text in parallel for {len(candidates)} candidates...")
    extract_bodies_parallel(candidates, max_chars=2500)

    print("[3/5] Classifying & summarizing with Gemini 2.5 Flash...")
    analyze_articles_with_gemini(candidates, genres_map, chunk_size=15)

    print(
        f"[4/5] Selecting {total_articles} fresh articles "
        f"(selected_genres={selected_genres}, other_ratio={other_ratio})..."
    )
    final_articles = select_and_interleave_articles(
        candidates,
        selected_genres=selected_genres,
        total_articles=total_articles,
        other_ratio=other_ratio,
    )

    updated_at_str = datetime.now(JST).strftime("%Y-%m-%d %H:%M:%S JST")

    output_data = {
        "updated_at": updated_at_str,
        "total_count": len(final_articles),
        "config": {
            "selected_genres": selected_genres,
            "other_genre_min_ratio": other_ratio,
            "max_age_hours": max_age_hours,
            "genres": genres_map,
        },
        "articles": [
            {
                "title": art.title,
                "url": art.url,
                "source": art.source,
                "published_at": art.published_at,
                "genre": art.genre,
                "genre_label": genres_map.get(art.genre, art.genre),
                "headline": art.headline,
                "summary": art.summary,
                "importance": art.importance,
            }
            for art in final_articles
        ],
    }

    print(f"[5/5] Writing {len(final_articles)} articles to {OUTPUT_PATH}...")
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print(f"[Success] Updated {len(final_articles)} articles at {updated_at_str}")


if __name__ == "__main__":
    main()
