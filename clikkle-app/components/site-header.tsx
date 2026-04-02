"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Star, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ProductsMegaMenu } from "./products-mega-menu";

export function SiteHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNavPanel = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  if (pathname?.startsWith("/docs")) {
    return null;
  }

  const navLinks = [
    { label: 'Products', href: '/products', match: (p: string) => p.startsWith('/products') },
    { label: 'Docs', href: '/docs', match: (p: string) => p.startsWith('/docs') },
    { label: 'Pricing', href: '/pricing', match: (p: string) => p.startsWith('/pricing') },
    { label: 'Customers', href: '/customers', match: (p: string) => p.includes('customer-stories') },
    { label: 'Blog', href: '/blog', match: (p: string) => p.startsWith('/blog') },
    { label: 'Changelog', href: '/changelog', match: (p: string) => p.startsWith('/changelog') },
  ];

  const GITHUB_STARS = "55.2K";
  const GITHUB_LINK = "https://github.com/clikkle/clikkle";
  const CTA_LINK = "https://cloud.clikkle.com/register";

  return (
    <>
      <header className={`aw-header ${isScrolled ? "aw-header-scrolled" : ""}`}>
        <div className="aw-header-shell">
          <Link className="aw-logo-link aw-focus-ring shrink-0 flex items-center gap-2" href="/" aria-label="Clikkle home">
            <Image src="/clikkle/images/logos/logo.svg" alt="Clikkle" width={28} height={28} className="object-contain h-7 w-auto" priority />
            <span className="text-xl font-bold tracking-tight text-white font-display">Clikkle</span>
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
                  data-active={link.match(pathname) ? "true" : undefined}
                  aria-current={link.match(pathname) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="aw-header-actions">
            <a
              className="web-btn web-btn-secondary aw-github-button aw-focus-ring hidden lg:inline-flex"
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star Clikkle on GitHub"
            >
              <Star aria-hidden="true" />
              <span>Star on GitHub</span>
              <span className="aw-github-count">{GITHUB_STARS}</span>
            </a>

            <a className="web-btn web-btn-primary aw-cta-button aw-focus-ring hidden lg:inline-flex" href={CTA_LINK}>
              Start building for free
            </a>

            <button
              className="web-btn web-btn-ghost web-btn--icon aw-menu-button aw-focus-ring lg:hidden flex"
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
            <Link className="aw-logo-link aw-focus-ring shrink-0 flex items-center gap-2" href="/" aria-label="Clikkle home">
              <Image src="/clikkle/images/logos/logo.svg" alt="Clikkle" width={28} height={28} className="object-contain h-7 w-auto" priority />
              <span className="text-xl font-bold tracking-tight text-white font-display">Clikkle</span>
            </Link>

            <button
              className="web-btn web-btn-ghost web-btn--icon aw-close-button aw-focus-ring"
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <X aria-hidden="true" />
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
                data-active={link.match(pathname) ? "true" : undefined}
                aria-current={link.match(pathname) ? "page" : undefined}
                onClick={() => setIsMobileNavOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="aw-mobile-actions">
            <a
              className="web-btn web-btn-secondary aw-github-button aw-focus-ring"
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star Clikkle on GitHub"
            >
              <Star aria-hidden="true" />
              <span>Star on GitHub</span>
              <span className="aw-github-count">{GITHUB_STARS}</span>
            </a>

            <a className="web-btn web-btn-primary aw-cta-button aw-focus-ring" href={CTA_LINK}>
              Start building for free
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
