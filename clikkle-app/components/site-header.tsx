"use client";

import Link from "next/link";
import { useEffect, useState, useRef, type CSSProperties } from "react";
import { Star, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ProductsMegaMenu } from "./products-mega-menu";
import { stripBasePathFromPathname } from "@/lib/basepath";

/** Docs layout provides its own chrome; hide marketing header on all `/docs` URLs. */
function isUnderDocsRoute(pathname: string | null | undefined) {
  const p = stripBasePathFromPathname(pathname ?? "") || "/";
  return p === "/docs" || p.startsWith("/docs/");
}

export function SiteHeader() {
  /** Keep top transparent header longer before scrolled glass kicks in. */
  const HEADER_SCROLL_THRESHOLD = 64;
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNavPanel = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const navPath = stripBasePathFromPathname(pathname ?? "") || "/";

  useEffect(() => {
    const onScroll = () => {
      const y =
        typeof window !== "undefined"
          ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
          : 0;
      setIsScrolled(y > HEADER_SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [HEADER_SCROLL_THRESHOLD]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileNavOpen(false);
    };

    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isMobileNavOpen]);

  if (isUnderDocsRoute(pathname)) {
    return null;
  }

  /* Appwrite `Main.svelte` `navLinks` — same labels, order, and routing shape (Clikkle paths). */
  const navLinks = [
    { label: "Products", href: "/products", match: (p: string) => p.startsWith("/products") },
    { label: "Docs", href: "/docs", match: (p: string) => p.startsWith("/docs") },
    { label: "Pricing", href: "/pricing", match: (p: string) => p.startsWith("/pricing") },
    {
      label: "Customers",
      href: "/blog/category/customer-stories",
      match: (p: string) =>
        p.includes("customer-stories") || p.startsWith("/customers"),
    },
    { label: "Blog", href: "/blog", match: (p: string) => p.startsWith("/blog") },
    { label: "Changelog", href: "/changelog", match: (p: string) => p.startsWith("/changelog") },
  ];

  const GITHUB_STARS = "55.2K";
  const GITHUB_LINK = "https://github.com/clikkle/clikkle";
  const CTA_LINK = "https://console.clikkle.com/";

  /* Inline surface so Turbopack/Tailwind layer order cannot strip glass (tokens from `appwrite-pink-design-system.css`). */
  const headerChromeStyle: CSSProperties = isScrolled
    ? {
        backgroundColor: "var(--color-background-glass)",
        WebkitBackdropFilter: "blur(24px)",
        backdropFilter: "blur(24px)",
      }
    : {
        backgroundColor: "var(--aw-header-top-bg)",
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
      };

  return (
    <>
      <header
        className={`aw-header ${isScrolled ? "aw-header-scrolled" : ""}`}
        style={headerChromeStyle}
      >
        {/* Clikkle `Main.svelte`: flat shell — logo, nav, actions as siblings; `gap: 2rem`; `lg` = 1024px */}
        <div className="aw-header-shell">
          {/* Clikkle `Main.svelte`: logo image `height="24"` — keep wordmark compact for 72px bar */}
          {/* Clikkle `Main.svelte`: `<img ... height="24" width="130" />` — fixed wordmark box for layout parity */}
          <Link className="aw-logo-link aw-focus-ring" href="/" aria-label="Clikkle home">
            <Image
              src="/clikkle/images/logos/clikkle-core-white.png"
              alt="Clikkle"
              width={140}
              height={63}
              className="block h-7 w-auto shrink-0 object-contain object-left md:h-8"
              priority
            />
          </Link>

          <nav className="aw-header-nav hidden lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => {
              if (link.label === "Products") {
                return <ProductsMegaMenu key={link.href} />;
              }
              return (
                <Link
                  key={link.href}
                  className="aw-header-link aw-focus-ring"
                  href={link.href}
                  data-active={link.match(navPath) ? "true" : undefined}
                  aria-current={link.match(navPath) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="aw-header-actions">
            <a
              className="web-button is-text aw-focus-ring"
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star Clikkle on GitHub"
            >
              <Star className="size-4 shrink-0" aria-hidden strokeWidth={1.5} />
              <span className="text">Star on GitHub</span>
              <span className="web-inline-tag">{GITHUB_STARS}</span>
            </a>

            <a className="aw-cta-button aw-focus-ring" href={CTA_LINK}>
              Start building for free
            </a>

            <button
              className="aw-menu-button aw-focus-ring flex lg:hidden"
              type="button"
              aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <span className="aw-menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay matching Clikkle's exactly */}
      <div
        className="aw-mobile-overlay"
        data-open={isMobileNavOpen ? "true" : "false"}
        aria-hidden={!isMobileNavOpen}
        inert={!isMobileNavOpen ? true : undefined}
      >
        <button
          className="aw-mobile-backdrop"
          type="button"
          tabIndex={isMobileNavOpen ? 0 : -1}
          aria-label="Close navigation menu"
          onClick={() => setIsMobileNavOpen(false)}
        />

        <aside
          id="mobile-navigation"
          className="aw-mobile-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-navigation-title"
          tabIndex={-1}
          ref={mobileNavPanel as any}
        >
          <div className="aw-mobile-panel-header">
            <Link className="aw-logo-link aw-focus-ring" href="/" aria-label="Clikkle home">
              <Image
                src="/clikkle/images/logos/clikkle-core-white.png"
                alt="Clikkle"
                width={140}
                height={63}
                className="block h-7 w-auto shrink-0 object-contain object-left md:h-8"
                priority
              />
            </Link>

            <button
              className="aw-close-button aw-focus-ring"
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <X aria-hidden="true" className="aw-button-icon" strokeWidth={1.5} />
            </button>
          </div>

          <h2 id="mobile-navigation-title" className="aw-mobile-title">
            Navigation
          </h2>

          <nav className="aw-mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="aw-mobile-link aw-focus-ring"
                href={link.href}
                data-active={link.match(navPath) ? "true" : undefined}
                aria-current={link.match(navPath) ? "page" : undefined}
                onClick={() => setIsMobileNavOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="aw-mobile-actions">
            <a
              className="web-button is-text aw-focus-ring"
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star Clikkle on GitHub"
            >
              <Star className="size-4 shrink-0" aria-hidden strokeWidth={1.5} />
              <span className="text">Star on GitHub</span>
              <span className="web-inline-tag">{GITHUB_STARS}</span>
            </a>

            <a className="aw-cta-button aw-focus-ring" href={CTA_LINK}>
              Start building for free
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
