"use client";

import { usePathname, useSelectedLayoutSegments } from "next/navigation";

/**
 * `usePathname()` can be null during SSR / streaming (especially in dev), while
 * `useSelectedLayoutSegments()` still reflects the active route under `app/docs`.
 * Mismatched pathname breaks `resolveDocsSidebar` → different DOM (e.g. expanded
 * references grid vs `web-main-section`) and React hydration.
 */
export function useDocsPathname(): string {
  const hookPath = usePathname();
  const segments = useSelectedLayoutSegments();

  if (hookPath && hookPath.length > 0) {
    return hookPath;
  }

  if (segments?.length) {
    return `/docs/${segments.join("/")}`;
  }

  return "";
}
