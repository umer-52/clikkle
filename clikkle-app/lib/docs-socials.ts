/**
 * Footer social links — mirrors `src/lib/constants.ts` `socials` (Svelte),
 * with Clikkle-branded targets where the marketing site uses them.
 */
export type DocsSocial = {
  label: string;
  href: string;
  /** Open in new tab */
  external: boolean;
};

/** Same order as `socials` in Svelte `src/lib/constants.ts` */
export const DOCS_SOCIALS: DocsSocial[] = [
  { label: "Discord", href: "https://discord.gg/clikkle", external: true },
  { label: "Github", href: "https://github.com/clikkle", external: true },
  {
    label: "Twitter",
    href: "https://twitter.com/intent/follow?screen_name=clikkle",
    external: true,
  },
  { label: "LinkedIn", href: "https://linkedin.com/company/clikkle", external: true },
  {
    label: "YouTube",
    href: "https://youtube.com/c/clikkle?sub_confirmation=1",
    external: true,
  },
  { label: "Daily.dev", href: "https://app.daily.dev/squads/clikkle", external: true },
  { label: "Bluesky", href: "https://bsky.app/profile/clikkle.com", external: true },
  { label: "Tiktok", href: "https://tiktok.com/@clikkle", external: true },
  { label: "Instagram", href: "https://instagram.com/clikkle", external: true },
];

/** Mirrors Svelte MainFooter `Support` / `Status` targets */
export const DOCS_SUPPORT_HREF = "https://discord.gg/clikkle";
export const DOCS_STATUS_HREF = "https://clikkle.online";
