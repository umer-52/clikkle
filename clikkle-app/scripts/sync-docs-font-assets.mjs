/**
 * Copies icon font binaries into public/fonts/docs so docs icon fonts load in dev/build.
 * Expects monorepo layout: clikkle-app/ next to node_modules/@appwrite.io/pink-icons and src/icons/output.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clikkleRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(clikkleRoot, "..");
const dest = path.join(clikkleRoot, "public", "fonts", "docs");

const copies = [
  [
    path.join(repoRoot, "node_modules", "@appwrite.io", "pink-icons", "dist"),
    ["icon.eot", "icon.woff2", "icon.woff", "icon.ttf"],
  ],
  [
    path.join(repoRoot, "src", "icons", "output"),
    ["web-icon.eot", "web-icon.woff2", "web-icon.woff", "web-icon.ttf"],
  ],
];

fs.mkdirSync(dest, { recursive: true });

let ok = true;
for (const [dir, files] of copies) {
  for (const name of files) {
    const from = path.join(dir, name);
    const to = path.join(dest, name);
    if (!fs.existsSync(from)) {
      console.warn(`sync-docs-font-assets: missing source ${from}`);
      ok = false;
      continue;
    }
    fs.copyFileSync(from, to);
  }
}

const iconWoff2 = path.join(dest, "icon.woff2");
if (!fs.existsSync(iconWoff2)) {
  console.error(
    "sync-docs-font-assets: icon.woff2 missing after sync — install deps at repo root or copy fonts into public/fonts/docs."
  );
  process.exit(1);
}

if (!ok) {
  console.warn(
    "sync-docs-font-assets: some sources were missing but required binaries may already exist."
  );
} else {
  console.log("sync-docs-font-assets: copied icon + web-icon binaries to public/fonts/docs");
}
