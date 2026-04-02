/**
 * Appwrite `src/lib/layouts/Sidebar.svelte` (module) — single source of truth for nav types.
 */
export type NavLink = {
  label: string;
  href: string;
  icon?: string;
  new?: boolean;
  isParent?: boolean;
  openInNewTab?: boolean;
};

export type NavGroup = {
  label?: string;
  items: NavLink[];
  collapsible?: boolean;
  initiallyCollapsed?: boolean;
};

export type NavParent = {
  label: string;
  href: string;
};

export type NavTree = Array<NavGroup | NavLink>;

export function isNavLink(item: NavLink | NavGroup): item is NavLink {
  return "href" in item;
}

export type DocsLayoutVariant = "default" | "expanded" | "two-side-navs";
