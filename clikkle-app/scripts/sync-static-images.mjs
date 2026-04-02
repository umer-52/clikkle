/**
 * Merge SvelteKit repo `static/images` into clikkle-app `public/images` so blog,
 * changelog, customers, and avatars match appwrite.io / the marketing static tree.
 * Required for Vercel (only clikkle-app is installed) and keeps assets in one source.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clikkleRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(clikkleRoot, "..");
const src = path.join(repoRoot, "static", "images");
const dest = path.join(clikkleRoot, "public", "images");

if (!fs.existsSync(src)) {
  console.warn(
    "sync-static-images: skip — no",
    src,
    "(deploy clikkle-app inside monorepo or copy static/images manually)"
  );
  process.exit(0);
}

fs.mkdirSync(dest, { recursive: true });
fs.cpSync(src, dest, { recursive: true, force: true });
console.log("sync-static-images: merged", src, "->", dest);
