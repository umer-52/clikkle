import type { NavTree } from "@/lib/docs/nav-tree";

/** Appwrite `src/routes/docs/references/+layout.svelte` — `resolvedPlatformPrefix` + API list */
export function normalizeReferencePlatform(platform: string): string {
  return /^server-|^client-/.test(platform) ? platform : `server-${platform}`;
}

/**
 * Builds reference sidebar links using version + platform (preferred or URL).
 * Mirrors `navigation` array in Appwrite `references/+layout.svelte`.
 */
export function buildReferenceNavigation(version: string, resolvedPlatformPrefix: string): NavTree {
  const prefix = `/docs/references/${version}/${resolvedPlatformPrefix}`;

  return [
    {
      label: "Getting started",
      items: [
        {
          label: "Overview",
          href: "/docs/references",
          icon: "icon-view-grid",
        },
        {
          label: "Quick start",
          href: "/docs/references/quick-start",
          icon: "icon-play",
        },
      ],
    },
    {
      label: "APIs",
      items: [
        { label: "Account", icon: "icon-user", href: `${prefix}/account` },
        { label: "Users", icon: "icon-user-group", href: `${prefix}/users` },
        { label: "Teams", icon: "icon-users", href: `${prefix}/teams` },
        { label: "Databases", icon: "icon-database", href: `${prefix}/databases` },
        { label: "TablesDB", icon: "icon-database", href: `${prefix}/tablesDB` },
        { label: "Sites", icon: "icon-globe-alt", href: `${prefix}/sites` },
        { label: "Storage", icon: "icon-folder", href: `${prefix}/storage` },
        { label: "Functions", icon: "icon-lightning-bolt", href: `${prefix}/functions` },
        { label: "Messaging", icon: "icon-send", href: `${prefix}/messaging` },
        { label: "Tokens", icon: "icon-key", href: `${prefix}/tokens` },
        { label: "Localization", icon: "icon-location-marker", href: `${prefix}/locale` },
        { label: "Avatars", icon: "icon-user-circle", href: `${prefix}/avatars` },
      ],
    },
  ];
}

/** Appwrite `references/+layout.svelte` expandable regex */
export function isReferencesExpandablePath(pathname: string): boolean {
  return !!pathname.match(/\/docs\/references\/.*?\/(client|server).*?\/.*?\/?/);
}
