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
import { withBasePath } from "@/lib/basepath";
import { useDocsPathname } from "@/lib/docs/use-docs-pathname";
import { useEffect, useMemo } from "react";
import { SearchModal } from "./search-modal";
import { DocsConsoleCta } from "@/components/docs/docs-console-cta";

/** Appwrite `Docs.svelte` composition: mobile header, main header, grid (`variantClass` + `is-open`), slot. */
export function DocsShell({ children }: { children: React.ReactNode }) {
  const pathname = useDocsPathname();
  const { version } = usePreferredVersion();
  const { platform } = usePreferredPlatform();
  const { showSidenav, toggleSidenav, syncVariant, setLayoutState, setShowSearch, showSearch } = useDocsLayout();

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
      {/* Appwrite `Docs.svelte`: `web-mobile-header is-transparent` + text nav toggle (`Button variant="text"`) */}
      <section className="web-mobile-header is-transparent flex lg:hidden">
        <div className="web-mobile-header-start">
          <Link href="/" aria-label="homepage" className="flex min-w-0 items-center gap-2">
            <Image
              src={withBasePath("/2-version/Clikkle core (V1 White Text).png")}
              alt="Clikkle"
              width={24}
              height={24}
              className="size-6 shrink-0 object-contain"
            />
            <span className="min-w-0 truncate text-lg font-bold text-[var(--color-text-primary)] dark:text-white/90">
              Clikkle
            </span>
          </Link>
        </div>
        <div className="web-mobile-header-end">
          <DocsConsoleCta className="web-button is-primary !w-auto shrink-0" />
          <button
            type="button"
            className="web-button is-text shrink-0"
            aria-label={showSidenav ? "close navigation" : "open navigation"}
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
          <main
            id="main"
            className={cn(
              "web-main-section min-w-0 flex-1",
              /* `overflow-x-hidden` breaks `position:sticky` on the docs right rail (grid side-b). */
              resolved.variant !== "two-side-navs" && "overflow-x-hidden",
              resolved.variant === "two-side-navs" && "web-main-section--grid-contents"
            )}
          >
            {children}
            <DocsFooter />
          </main>
        )}
      </div>
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </div>
  );
}
