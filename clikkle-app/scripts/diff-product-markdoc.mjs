/**
 * Products-only (auth, databases, storage, functions, messaging, sites).
 * For every `+page.markdoc` under `src/routes/docs`, use `diff-all-docs-markdoc.mjs`.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "..");
const products = ["auth", "databases", "storage", "functions", "messaging", "sites"];
const svelteBase = path.join(root, "src/routes/docs/products");
const clikkleBase = path.join(root, "clikkle-app/content/docs/products");

function walk(dir, acc) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else if (name === "+page.markdoc") acc.push(full);
  }
}

function svelteToClikkle(sveltePath) {
  const rel = path.relative(svelteBase, path.dirname(sveltePath));
  const parts = rel.split(path.sep).filter(Boolean);
  const product = parts[0];
  const rest = parts.slice(1);
  if (rest.length === 0) {
    return path.join(clikkleBase, `${product}.markdoc`);
  }
  return `${path.join(clikkleBase, product, ...rest)}.markdoc`;
}

function norm(s) {
  return s.replace(/\/images\//g, "/clikkle/images/").trimEnd();
}

const mismatches = [];
const missing = [];

for (const p of products) {
  const acc = [];
  walk(path.join(svelteBase, p), acc);
  for (const sp of acc.sort()) {
    const cp = svelteToClikkle(sp);
    const sv = norm(fs.readFileSync(sp, "utf8"));
    if (!fs.existsSync(cp)) {
      missing.push({ svelte: sp, clikkle: cp });
      continue;
    }
    const cv = fs.readFileSync(cp, "utf8").trimEnd();
    if (sv !== cv) {
      mismatches.push({ svelte: sp, clikkle: cp });
    }
  }
}

console.log(JSON.stringify({ mismatchCount: mismatches.length, missingCount: missing.length, mismatches: mismatches.map((m) => ({ clikkle: m.clikkle.replace(/\\/g, "/") })), missing }, null, 2));
