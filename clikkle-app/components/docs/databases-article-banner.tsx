import NextLink from "next/link";
import { DocsInlineInfo } from "@/components/markdoc/docs-inline-info";

/**
 * Appwrite `docs/products/databases/+layout.svelte` + `legacy/+layout.svelte`:
 * contextual info above article body (intended for `headerSectionInfoAlert` in Svelte).
 */
const HIDE_NEW_API_SEGMENTS = ["offline", "backups", "csv-imports", "csv-exports"] as const;

function legacyPathFromModernSlug(slug: string[]): string {
  const tail = slug.slice(2).map((s) => (s === "tables" ? "collections" : s === "rows" ? "documents" : s));
  return "/docs/products/databases/legacy/" + tail.join("/");
}

function modernPathFromLegacySlug(slug: string[]): string {
  const tail = slug.slice(3).map((s) =>
    s === "collections" ? "tables" : s === "documents" ? "rows" : s
  );
  return tail.length ? "/docs/products/databases/" + tail.join("/") : "/docs/products/databases";
}

export function DatabasesArticleBanner({ slug }: { slug: string[] }) {
  if (slug[0] !== "products" || slug[1] !== "databases") return null;

  if (slug[2] === "legacy") {
    const href = modernPathFromLegacySlug(slug);
    return (
      <DocsInlineInfo title="Deprecated API">
        <p className="text-caption mt-2 leading-relaxed text-[var(--color-text-secondary)] dark:text-white/70">
          This API uses outdated terminology and is no longer maintained. Refer to the{" "}
          <NextLink href={href} className="web-link underline">
            updated documentation
          </NextLink>{" "}
          for improved compatibility and migration guidance.
        </p>
      </DocsInlineInfo>
    );
  }

  if (slug.length === 2) return null;
  if (HIDE_NEW_API_SEGMENTS.some((seg) => slug.includes(seg))) return null;

  const legacyHref = legacyPathFromModernSlug(slug);
  return (
    <DocsInlineInfo title="New API">
      <p className="text-caption mt-2 leading-relaxed text-[var(--color-text-secondary)] dark:text-white/70">
        This is a relatively new API. For details on the previous version and its terminology, see the
        legacy{" "}
        <NextLink href={legacyHref} className="web-link underline">
          Collections API documentation
        </NextLink>
        .
      </p>
    </DocsInlineInfo>
  );
}
