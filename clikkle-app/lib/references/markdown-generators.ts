import { generateModelMarkdown } from "./model-markdown";
import { generateServiceMarkdown } from "./service-markdown";

type MarkdownGenerator = (match: RegExpMatchArray) => Promise<string | null>;

const markdownGenerators = new Map<RegExp, MarkdownGenerator>();

markdownGenerators.set(/^\/docs\/references\/([^/]+)\/models\/([^/]+)$/, async (match) => {
  const [, versionParam, modelName] = match;
  return generateModelMarkdown(versionParam, modelName);
});

/** Appwrite `src/lib/server/markdown-generators.ts` — service API reference */
markdownGenerators.set(/^\/docs\/references\/([^/]+)\/([^/]+)\/([^/]+)$/, async (match) => {
  const [, versionParam, platform, serviceName] = match;
  if (platform === "models") return null;
  return generateServiceMarkdown(versionParam, platform, serviceName);
});

export async function generateDynamicMarkdown(routeId: string): Promise<string | null> {
  for (const [pattern, generator] of markdownGenerators) {
    const m = routeId.match(pattern);
    if (m) {
      return await generator(m);
    }
  }
  return null;
}

export function hasDynamicMarkdownGenerator(routeId: string): boolean {
  for (const pattern of markdownGenerators.keys()) {
    if (pattern.test(routeId)) {
      return true;
    }
  }
  return false;
}
