/**
 * Writes processed Markdoc sources under public/docs (mirroring slug paths with .md)
 * so “View as Markdown” (pathname + ".md") works with static export — Appwrite hooks.server.ts.
 */
import { mkdirSync, rmSync, writeFileSync } from "fs";
import path from "path";
import { getAllDocSlugs, getDocRawMarkdown } from "../lib/docs";

async function main() {
  const cwd = process.cwd();
  const outRoot = path.join(cwd, "public", "docs");
  rmSync(outRoot, { recursive: true, force: true });

  const slugs = await getAllDocSlugs();
  let n = 0;
  for (const s of slugs) {
    const md = await getDocRawMarkdown(s);
    if (!md) continue;
    const dest = path.join(outRoot, ...s) + ".md";
    mkdirSync(path.dirname(dest), { recursive: true });
    writeFileSync(dest, md, "utf8");
    n++;
  }
  console.log(`export-docs-md: wrote ${n} files under public/docs`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
