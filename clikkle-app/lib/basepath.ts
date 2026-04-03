/**
 * Returns the correct asset path for both dev and production.
 * In production (static export), Next.js applies basePath to <Image> but NOT
 * to raw <img src="..."> tags or CSS url() references.
 * This helper prepends the basePath for raw paths consistently.
 */
/** Keep in sync with `basePath` in `next.config.ts` when env is unset (raw `<img src>` needs prefix). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/clikkle";

export function withBasePath(path: string): string {
  if (!path) return path;
  // Avoid double-prefixing
  if (BASE_PATH && path.startsWith(BASE_PATH)) return path;
  return `${BASE_PATH}${path}`;
}

/** `usePathname()` may include `basePath`; docs nav + `resolveDocsSidebar` use hrefs without it. */
export function stripBasePathFromPathname(pathname: string): string {
  if (!pathname) return "";
  if (!BASE_PATH || BASE_PATH === "/") return pathname;
  if (pathname === BASE_PATH) return "/";
  if (pathname.startsWith(`${BASE_PATH}/`)) return pathname.slice(BASE_PATH.length) || "/";
  return pathname;
}
