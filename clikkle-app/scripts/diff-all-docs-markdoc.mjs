/**
 * Compare every Svelte docs route `+page.markdoc` to Clikkle `content/docs` files.
 * Normalizes `/images/` → `/clikkle/images/` (same as product diff).
 *
 * Usage: node clikkle-app/scripts/diff-all-docs-markdoc.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "..");
const svelteDocs = path.join(root, "src/routes/docs");
const clikkleDocs = path.join(root, "clikkle-app/content/docs");

function walkMarkdoc(dir, acc) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkMarkdoc(full, acc);
    else if (name === "+page.markdoc") acc.push(full);
  }
}

/** Match `getDocBySlug`: `{slug}.markdoc` or `{slug}/index.markdoc` */
function resolveClikkle(relDir) {
  const base = path.join(clikkleDocs, relDir);
  const direct = `${base}.markdoc`;
  if (fs.existsSync(direct)) return direct;
  const indexFile = path.join(base, "index.markdoc");
  if (fs.existsSync(indexFile)) return indexFile;
  return null;
}

function norm(s) {
  return s.replace(/\/images\//g, "/clikkle/images/").trimEnd();
}

const allSvelte = [];
walkMarkdoc(svelteDocs, allSvelte);
allSvelte.sort();

const mismatches = [];
const missing = [];
const matched = [];

for (const sp of allSvelte) {
  const relDir = path.relative(svelteDocs, path.dirname(sp));
  const cp = resolveClikkle(relDir);
  const sv = norm(fs.readFileSync(sp, "utf8"));

  if (!cp) {
    missing.push({ svelte: sp.replace(/\\/g, "/"), relSlug: relDir.replace(/\\/g, "/") });
    continue;
  }
  const cv = fs.readFileSync(cp, "utf8").trimEnd();
  if (sv !== cv) {
    mismatches.push({
      svelte: sp.replace(/\\/g, "/"),
      clikkle: cp.replace(/\\/g, "/"),
      svelteBytes: sv.length,
      clikkleBytes: cv.length,
    });
  } else {
    matched.push(relDir.replace(/\\/g, "/"));
  }
}

function topSegment(rel) {
  const i = rel.indexOf("/");
  return i === -1 ? rel || "(root)" : rel.slice(0, i);
}

const missingByTop = {};
for (const m of missing) {
  const t = topSegment(m.relSlug);
  missingByTop[t] = (missingByTop[t] || 0) + 1;
}

const out = {
  totalSvelteMarkdocPages: allSvelte.length,
  matchedCount: matched.length,
  mismatchCount: mismatches.length,
  missingInClikkleCount: missing.length,
  missingByTopSegment: missingByTop,
  mismatches,
  missing: missing.slice(0, 500),
};

if (missing.length > 500) {
  out.missingTruncated = true;
  out.missingNote = `Showing first 500 of ${missing.length} missing`;
}

console.log(JSON.stringify(out, null, 2));
