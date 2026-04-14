/**
 * Remove `.next` while the dev server is stopped.
 * Fixes Turbopack "SST file" / "compaction" / ENOENT errors after cache corruption or deleting `.next` mid-run.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = path.join(root, ".next");

if (fs.existsSync(nextDir)) {
  fs.rmSync(nextDir, { recursive: true, force: true });
  process.stdout.write(`clean-next: removed ${nextDir}\n`);
} else {
  process.stdout.write("clean-next: no .next directory\n");
}
