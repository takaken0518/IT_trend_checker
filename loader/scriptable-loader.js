// ==========================================
// IT Trend Widget - Scriptable Loader
// ==========================================
// このスクリプトをiPhoneのScriptableアプリに新規作成して貼り付けてください。
// GitHub上の最新 dist/widget.js を自動ダウンロード・更新して実行します。

// ▼ 設定: ご自身のGitHubリポジトリに合わせて書き換えてください
// 例: https://raw.githubusercontent.com/<USER>/<REPO>/main/dist/widget.js
const WIDGET_SCRIPT_URL = "https://raw.githubusercontent.com/takaken0518/IT_trend_checker/main/dist/widget.js";
const GITHUB_TOKEN = ""; // Privateリポジトリの場合はここに Fine-grained PAT (Contents: Read-only) を入力（本体側にも自動引き継ぎされます）

const SCRIPT_NAME = "it_trend_widget_bundle.js";

async function loadAndRun() {
  const fm = FileManager.local();
  const dir = fm.libraryDirectory();
  const scriptPath = fm.joinPath(dir, SCRIPT_NAME);

  let scriptCode = "";
  let downloaded = false;

  // 1. 最新のバンドル済みコードをリモートから取得
  try {
    const cacheBuster = `?t=${Date.now()}`;
    const url = WIDGET_SCRIPT_URL.includes("?")
      ? `${WIDGET_SCRIPT_URL}&t=${Date.now()}`
      : `${WIDGET_SCRIPT_URL}${cacheBuster}`;

    const req = new Request(url);
    req.timeoutInterval = 10;
    if (GITHUB_TOKEN) {
      req.headers = {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw",
      };
    }

    scriptCode = await req.loadString();
    if (scriptCode && scriptCode.length > 50) {
      fm.writeString(scriptPath, scriptCode);
      downloaded = true;
    }
  } catch (err) {
    console.warn(`[Loader] Remote fetch failed: ${err}. Falling back to local cache.`);
  }

  // 2. 取得失敗時は保存済みのキャッシュコードを読み込む
  if (!downloaded) {
    if (fm.fileExists(scriptPath)) {
      scriptCode = fm.readString(scriptPath);
      console.log("[Loader] Running cached script.");
    } else {
      const errorWidget = new ListWidget();
      errorWidget.addText("⚠️ IT Trend Widget");
      errorWidget.addSpacer(4);
      errorWidget.addText("ウィジェットスクリプトの取得に失敗しました。URLまたは接続を確認してください。");
      if (config.runsInWidget) {
        Script.setWidget(errorWidget);
      } else {
        await errorWidget.presentLarge();
      }
      Script.complete();
      return;
    }
  }

  // 3. スクリプトの実行（ローダーに設定されたトークンを本体側へ引き継ぐ）
  try {
    globalThis.__IT_TREND_GITHUB_TOKEN__ = GITHUB_TOKEN;
    await eval(scriptCode);
  } catch (evalErr) {
    console.error(`[Loader] Script execution failed: ${evalErr}`);
    const errWidget = new ListWidget();
    errWidget.addText("❌ 実行エラー");
    errWidget.addSpacer(4);
    errWidget.addText(String(evalErr));
    if (config.runsInWidget) {
      Script.setWidget(errWidget);
    } else {
      await errWidget.presentLarge();
    }
    Script.complete();
  }
}

await loadAndRun();
