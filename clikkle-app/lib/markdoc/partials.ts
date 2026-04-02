import { readFile } from "fs/promises";
import path, { join, normalize, resolve } from "path";

const partialsCache = new Map<string, string>();

/**
 * Inlines `{% partial file="..." /%}` before Markdoc parse — mirrors Appwrite
 * `src/lib/server/markdown.ts` `processMarkdownWithPartials`.
 */
export async function processMarkdownWithPartials(content: string): Promise<string> {
  const partialsDir = join(process.cwd(), "partials");
  const resolvedPartialsDir = resolve(partialsDir);
  const partialRegex = /\{%\s*partial\s+file="([^"]+)"\s*\/%\}/g;

  const matches = [...content.matchAll(partialRegex)];
  if (matches.length === 0) return content;

  let result = content;
  for (const match of matches) {
    const partialFile = match[1];
    const fullMatch = match[0];

    if (!partialsCache.has(partialFile)) {
      try {
        const normalizedPartialFile = normalize(partialFile).replace(/^(\.\.(\/|\\|$))+/, "");
        const partialPath = resolve(partialsDir, normalizedPartialFile);

        if (
          !partialPath.startsWith(resolvedPartialsDir + path.sep) &&
          partialPath !== resolvedPartialsDir
        ) {
          console.warn(`Partial path traversal attempt detected: ${partialFile}`);
          partialsCache.set(partialFile, "");
          continue;
        }

        const partialContent = await readFile(partialPath, "utf-8");
        partialsCache.set(partialFile, partialContent);
      } catch {
        console.warn(`Partial not found: ${partialFile}`);
        partialsCache.set(partialFile, "");
      }
    }

    const partialContent = partialsCache.get(partialFile) || "";
    result = result.replaceAll(fullMatch, partialContent);
  }

  return result;
}
