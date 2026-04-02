import { MAIN_DOCS_NAVIGATION } from "@/lib/docs/main-docs-navigation";
import type { DocsLayoutVariant, NavParent, NavTree } from "@/lib/docs/nav-tree";
import {
  buildReferenceNavigation,
  isReferencesExpandablePath,
  normalizeReferencePlatform,
} from "@/lib/docs/reference-navigation";
import { SECTION_SIDEBAR_DEFS } from "@/lib/docs/section-sidebars-data";
import { Platform } from "@/lib/markdoc/code";

export type ResolvedDocsSidebar = {
  navigation: NavTree;
  parent?: NavParent;
  expandable: boolean;
  variant: DocsLayoutVariant;
  /** Appwrite `Docs` `isReferences` — main header `is-reference` */
  isReferences: boolean;
};

function parseReferencesSegments(pathname: string): {
  version: string;
  platform: string;
} | null {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] !== "docs" || parts[1] !== "references") return null;
  if (!parts[2]) return null;
  if (parts[2] === "quick-start") return null;
  const version = parts[2];
  const platformRaw = parts[3];
  if (!platformRaw) return { version, platform: Platform.ClientWeb };
  return { version, platform: normalizeReferencePlatform(platformRaw) };
}

/**
 * Pure resolver — Appwrite route/layout composition:
 * - `src/routes/docs/references/+layout.svelte`
 * - `src/routes/docs/Sidebar.svelte` + product `+layout.svelte` files
 * - `quick-starts` / `tutorials` / `sdks` variants from Appwrite layouts
 */
export function resolveDocsSidebar(
  pathname: string,
  preferredVersion: string | null,
  preferredPlatform: string
): ResolvedDocsSidebar {
  const expandable = isReferencesExpandablePath(pathname);

  if (pathname.startsWith("/docs/references")) {
    const fromUrl = parseReferencesSegments(pathname);
    const version = fromUrl?.version ?? preferredVersion ?? "cloud";
    const platform = normalizeReferencePlatform(fromUrl?.platform ?? preferredPlatform ?? Platform.ClientWeb);
    const navigation = buildReferenceNavigation(version, platform);
    return {
      navigation,
      parent: { href: "/docs", label: "API reference" },
      expandable,
      variant: expandable ? "expanded" : "two-side-navs",
      isReferences: expandable,
    };
  }

  const section = SECTION_SIDEBAR_DEFS.find(
    (s) => pathname === s.prefix || pathname.startsWith(`${s.prefix}/`)
  );
  if (section) {
    return {
      navigation: section.navigation,
      parent: section.parent,
      expandable: false,
      variant: "two-side-navs",
      isReferences: false,
    };
  }

  const isQuickStartIndex = pathname === "/docs/quick-starts" || pathname === "/docs/quick-starts/";
  const isTutorialsIndex = pathname === "/docs/tutorials" || pathname === "/docs/tutorials/";

  if (pathname.startsWith("/docs/quick-starts/") && !isQuickStartIndex) {
    return {
      navigation: MAIN_DOCS_NAVIGATION,
      expandable: false,
      variant: "two-side-navs",
      isReferences: false,
    };
  }
  if (pathname.startsWith("/docs/tutorials/") && !isTutorialsIndex) {
    return {
      navigation: MAIN_DOCS_NAVIGATION,
      expandable: false,
      variant: "two-side-navs",
      isReferences: false,
    };
  }
  // Appwrite sdks/+layout.svelte: Docs variant="two-side-navs" + main Sidebar.
  if (pathname.startsWith("/docs/sdks")) {
    return {
      navigation: MAIN_DOCS_NAVIGATION,
      expandable: false,
      variant: "two-side-navs",
      isReferences: false,
    };
  }

  return {
    navigation: MAIN_DOCS_NAVIGATION,
    expandable: false,
    variant: "default",
    isReferences: false,
  };
}
