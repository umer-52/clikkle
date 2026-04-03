/**
 * Appwrite `src/lib/utils/routePrompts.ts`: routes that ship `prompt.md` hide the
 * article “Copy page” control (LLM prompt pages).
 *
 * Keys are paths under `/docs/` without leading slash (slug segments joined by `/`).
 */
const ROUTES_WITH_PROMPT = new Set<string>(["quick-starts/nextjs", "quick-starts/react-native"]);

export function hasDocsRoutePrompt(slugSegments: string[]): boolean {
  if (slugSegments.length === 0) return false;
  const key = slugSegments.join("/");
  return ROUTES_WITH_PROMPT.has(key);
}
