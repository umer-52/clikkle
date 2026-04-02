import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

const pinkPath = path.join(
  repoRoot,
  "node_modules/@appwrite.io/pink-icons/dist/icon.css"
);
const webPath = path.join(repoRoot, "src/icons/output/web-icon.css");
const outPath = path.join(__dirname, "../app/docs/docs-fonts.css");

/** @font-face is served from public/fonts/docs/font-face.css (relative URLs). */
function stripFontFaces(css) {
  return css.replace(/@font-face\s*\{[\s\S]*?\}\s*/g, "").trim();
}

let pink = stripFontFaces(fs.readFileSync(pinkPath, "utf8"));
let web = stripFontFaces(fs.readFileSync(webPath, "utf8"));

const header = `/* Glyph rules only — load /clikkle/fonts/docs/font-face.css for @font-face (see docs layout). */

`;

const extra = `
/* Docs listing cards: icon size aligned with appwrite.io */
span.docs-card-icon {
  font-size: 24px !important;
  line-height: 1;
  flex-shrink: 0;
  color: inherit;
}
`;

fs.writeFileSync(outPath, header + pink + "\n" + web + extra);
console.log("Wrote", outPath);
