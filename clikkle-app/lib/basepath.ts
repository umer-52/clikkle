/**
 * Returns the correct asset path for both dev and production.
 * In production (static export), Next.js applies basePath to <Image> but NOT
 * to raw <img src="..."> tags or CSS url() references.
 * This helper prepends the basePath for raw paths consistently.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path) return path;
  // Avoid double-prefixing
  if (BASE_PATH && path.startsWith(BASE_PATH)) return path;
  return `${BASE_PATH}${path}`;
}
