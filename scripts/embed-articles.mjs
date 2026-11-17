import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const articlesPath = path.join(rootDir, "articles.json");
const bundlePath = path.join(rootDir, "dist", "widget.js");

if (!fs.existsSync(articlesPath) || !fs.existsSync(bundlePath)) {
  console.error("[embed-articles] articles.json or dist/widget.js not found.");
  process.exit(1);
}

const articlesData = JSON.parse(fs.readFileSync(articlesPath, "utf8"));
const compactJson = JSON.stringify(articlesData)
  .replace(/\u2028/g, "\\u2028")
  .replace(/\u2029/g, "\\u2029");

const header = `// __EMBEDDED_NEWS_START__\nglobalThis.__IT_TREND_EMBEDDED_DATA__ = ${compactJson};\n// __EMBEDDED_NEWS_END__\n`;

const rawBundle = fs.readFileSync(bundlePath, "utf8");
const cleanedBundle = rawBundle.replace(
  /^\/\/ __EMBEDDED_NEWS_START__[\s\S]*?\/\/ __EMBEDDED_NEWS_END__\r?\n?/,
  ""
);

fs.writeFileSync(bundlePath, `${header}${cleanedBundle}`, "utf8");
console.log(
  `[embed-articles] Embedded ${articlesData.articles?.length ?? 0} articles into dist/widget.js`
);
