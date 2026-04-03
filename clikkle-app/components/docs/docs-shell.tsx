"use client";

import { DocsFooter } from "@/components/docs/footer";
import { DocsHeader } from "@/components/docs/header";
import { useDocsLayout } from "@/components/docs/docs-layout-context";
import { DocsNavSidebar } from "@/components/docs/docs-sidebar";
import { resolveDocsSidebar } from "@/lib/docs/resolve-docs-sidebar";
import { usePreferredPlatform } from "@/lib/markdoc/preferred-platform";
import { usePreferredVersion } from "@/lib/docs/preferred-version";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDocsPathname } from "@/lib/docs/use-docs-pathname";
import { useEffect, useMemo } from "react";

const CTA_LINK = "https://cloud.clikkle.com/register";

/** Appwrite `Docs.svelte` composition: mobile header, main header, grid (`variantClass` + `is-open`), slot. */
export function DocsShell({ children }: { children: React.ReactNode }) {
  const pathname = useDocsPathname();
  const { version } = usePreferredVersion();
  const { platform } = usePreferredPlatform();
  const { showSidenav, toggleSidenav, syncVariant, setLayoutState } = useDocsLayout();

  const resolved = useMemo(
    () => resolveDocsSidebar(pathname, version, platform),
    [pathname, version, platform]
  );

  useEffect(() => {
    syncVariant(resolved.variant);
  }, [resolved.variant, syncVariant]);

  useEffect(() => {
    setLayoutState({ showSidenav: false, showReferences: false });
    document.body.style.overflow = "";
  }, [pathname, setLayoutState]);

  const gridClass = cn(
    resolved.variant === "default" && "web-grid-side-nav",
    resolved.variant === "expanded" && "web-grid-huge-navs",
    resolved.variant === "two-side-navs" && "web-grid-two-side-navs",
    showSidenav && "is-open"
  );

  /** Appwrite `Docs.svelte`: expanded references slot is direct grid children (no `web-main-section`). */
  const expandedReferencesGrid = resolved.variant === "expanded";

  return (
    <div className="relative min-h-screen" data-variant={resolved.variant}>
      <section className="web-mobile-header is-transparent flex lg:hidden">
        <div className="flex flex-1 items-center gap-3">
          <Link href="/" aria-label="homepage" className="flex items-center gap-2">
            <Image
              src="/clikkle/images/logos/logo.svg"
              alt="Clikkle"
              width={24}
              height={24}
              className="size-6 object-contain"
            />
            <span className="text-lg font-bold text-[var(--color-text-primary)] dark:text-white/90">
              Clikkle
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={CTA_LINK}
            className="hidden rounded-full bg-[var(--color-brand-primary)] px-3 py-1.5 text-sm font-medium text-white md:inline-flex"
          >
            Start building
          </a>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-lg text-[var(--color-text-primary)] dark:text-white"
            aria-label="open navigation"
            onClick={toggleSidenav}
          >
            {showSidenav ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </section>

      <DocsHeader
        isReferences={resolved.isReferences}
        headerTransparent={resolved.variant !== "expanded"}
      />

      <div className={gridClass}>
        <DocsNavSidebar
          expandable={resolved.expandable}
          navigation={resolved.navigation}
          parent={resolved.parent}
        />
        {expandedReferencesGrid ? (
          <>
            {children}
            <DocsFooter />
          </>
        ) : (
          <div
            className={cn(
              "web-main-section min-w-0 flex-1 overflow-x-hidden",
              resolved.variant === "two-side-navs" && "web-main-section--grid-contents",
              resolved.variant !== "two-side-navs" && "px-6 py-12 lg:pl-12 lg:pr-8"
            )}
          >
            {children}
            <DocsFooter />
          </div>
        )}
      </div>
    </div>
  );
}
