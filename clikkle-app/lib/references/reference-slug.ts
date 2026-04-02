/**
 * `/docs/references/:version/:platform/:service` — not model pages (`.../models/...`).
 */
export function isReferenceServiceSlug(slug: string[]): boolean {
  return slug.length === 4 && slug[0] === "references" && slug[2] !== "models";
}
