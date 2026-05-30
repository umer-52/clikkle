"use client";

import Link from "next/link";
import { useEffect, useState, useRef, type CSSProperties } from "react";
import { Star, X, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ProductsMegaMenu } from "./products-mega-menu";
import { WorksuiteMegaMenu } from "./worksuite-mega-menu";
import { stripBasePathFromPathname, withBasePath } from "@/lib/basepath";

/** Docs layout provides its own chrome; hide marketing header on all `/docs` URLs. */
function isUnderDocsRoute(pathname: string | null | undefined) {
  const p = stripBasePathFromPathname(pathname ?? "") || "/";
  return p === "/docs" || p.startsWith("/docs/");
}

export function SiteHeader() {
  /** Keep top transparent header longer before scrolled glass kicks in. */
  const HEADER_SCROLL_THRESHOLD = 64;
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isWorksuiteMenuOpen, setIsWorksuiteMenuOpen] = useState(false);
  const [chromeTone, setChromeTone] = useState<"light" | "dark">("dark");
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileNavPanel = useRef<HTMLElement>(null);
  const appSwitcherRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const navPath = stripBasePathFromPathname(pathname ?? "") || "/";
  const isChromeLight = chromeTone === "light";
  const logoMarkSrc = withBasePath(
    isChromeLight
      ? "/2-version/Clikkle core (V1 Black Text).png"
      : "/2-version/Clikkle core (V1 White Text).png",
  );

  useEffect(() => {
    const parseRgb = (value: string) => {
      const v = value.trim().toLowerCase();
      if (v === "transparent") return null;
      const match = v.match(/rgba?\(([^)]+)\)/);
      if (!match) return null;
      const parts = match[1].split(",").map((p) => p.trim());
      if (parts.length < 3) return null;
      const r = Number.parseFloat(parts[0]);
      const g = Number.parseFloat(parts[1]);
      const b = Number.parseFloat(parts[2]);
      const a = parts.length >= 4 ? Number.parseFloat(parts[3]) : 1;
      if (![r, g, b, a].every((n) => Number.isFinite(n))) return null;
      if (a === 0) return null;
      return { r, g, b, a };
    };

    const relativeLuminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
      const srgb = [r, g, b].map((c) => {
        const v = c / 255;
        return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
    };

    const toneFromAncestors = (start: Element | null): "light" | "dark" | null => {
      let el: Element | null = start;
      while (el && el !== document.documentElement) {
        if (el instanceof HTMLElement) {
          const themeAttr = el.getAttribute("data-theme");
          if (themeAttr === "light") return "light";
          if (themeAttr === "dark") return "dark";
          if (el.classList.contains("light")) return "light";
          if (el.classList.contains("dark")) return "dark";
        }
        el = el.parentElement;
      }
      return null;
    };

    const effectiveBackground = (start: Element | null) => {
      let el: Element | null = start;
      while (el && el !== document.documentElement) {
        const bg = parseRgb(getComputedStyle(el).backgroundColor);
        if (bg) return bg;
        el = el.parentElement;
      }
      const bodyBg = parseRgb(getComputedStyle(document.body).backgroundColor);
      return bodyBg ?? { r: 255, g: 255, b: 255, a: 1 };
    };

    const detectToneUnderHeader = () => {
      const headerRect = headerRef.current?.getBoundingClientRect();
      const probeY = Math.min(
        window.innerHeight - 1,
        Math.max(1, (headerRect?.bottom ?? 72) + 1),
      );
      const probeX = Math.min(window.innerWidth - 1, Math.max(1, window.innerWidth / 2));
      const stack = document.elementsFromPoint(probeX, probeY);
      const headerNode = headerRef.current;
      const under = stack.find((node) => (headerNode ? !headerNode.contains(node) : true)) ?? null;

      const explicitTone = toneFromAncestors(under);
      if (explicitTone) return explicitTone;

      const bg = effectiveBackground(under);
      return relativeLuminance(bg) > 0.72 ? "light" : "dark";
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      const y =
        typeof window !== "undefined"
          ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
          : 0;
      const scrolled = y > HEADER_SCROLL_THRESHOLD;
      setIsScrolled(scrolled);
      setChromeTone(scrolled ? detectToneUnderHeader() : "dark");
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [HEADER_SCROLL_THRESHOLD]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileNavOpen(false);
        setIsAppSwitcherOpen(false);
        setIsProductsMenuOpen(false);
        setIsWorksuiteMenuOpen(false);
      }
    };

    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    }

    if (isMobileNavOpen || isAppSwitcherOpen || isProductsMenuOpen || isWorksuiteMenuOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isMobileNavOpen, isAppSwitcherOpen, isProductsMenuOpen, isWorksuiteMenuOpen]);

  useEffect(() => {
    if (!isAppSwitcherOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!appSwitcherRef.current?.contains(event.target as Node)) {
        setIsAppSwitcherOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isAppSwitcherOpen]);

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
  const appSwitcherItems = [
    {
      name: "Clikkle Core",
      description: "Backend Platform",
      href: "/",
      tileClass: "from-indigo-100 to-blue-700",
      initials: "C",
    },
    {
      name: "Clikkle Worksuite",
      description: "Productivity Suite",
      href: "/",
      tileClass: "from-indigo-100 to-blue-700",
      initials: "W",
    },
    {
      name: "K-Collect",
      description: "Data Intelligence",
      href: "/",
      tileClass: "from-indigo-100 to-blue-700",
      initials: "K",
    },
  ];

  /* Inline surface so Turbopack/Tailwind layer order cannot strip glass (tokens from `appwrite-pink-design-system.css`). */
  const headerChromeStyle: CSSProperties = isScrolled
    ? {
        backgroundColor: "var(--color-background-glass)",
        WebkitBackdropFilter: "blur(8px)",
        backdropFilter: "blur(8px)",
      }
    : {
        backgroundColor: "var(--color-background-glass)",
        WebkitBackdropFilter: "blur(8px)",
        backdropFilter: "blur(8px)",
      };

  return (
    <>
      <div className={isScrolled ? chromeTone : undefined} style={{ display: "contents" }}>
        <header
          ref={headerRef}
          className={`aw-header px-4! lg:px-15! ${isScrolled ? "aw-header-scrolled" : ""}`}
          style={headerChromeStyle}
        >
          {/* Clikkle `Main.svelte`: flat shell — logo, nav, actions as siblings; `gap: 2rem`; `lg` = 1024px */}
          <div className="aw-header-shell">
          {/* Clikkle `Main.svelte`: logo image `height="24"` — keep wordmark compact for 72px bar */}
          {/* Clikkle `Main.svelte`: `<img ... height="24" width="130" />` — fixed wordmark box for layout parity */}
          <div className="relative" ref={appSwitcherRef}>
            <button
              type="button"
              className="aw-logo-link aw-focus-ring flex items-center cursor-pointer gap-3 rounded-lg px-2 py-1.5 hover:bg-white/8"
              aria-label="Open app switcher"
              aria-expanded={isAppSwitcherOpen}
              aria-haspopup="menu"
              onClick={() => !isMobile ? setIsAppSwitcherOpen((open) => !open) : router.push("/")}
            >
              <img
                src={logoMarkSrc}
                alt="Clikkle"
                className="block h-7 w-auto mb-2.5 shrink-0 object-contain object-left md:h-8"
              />
              <ChevronDown
                className={`aw-header-chevron size-4 transition-transform hidden lg:block ${isAppSwitcherOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>

            {isAppSwitcherOpen ? (
              <div
                className="absolute top-full left-0 z-50 mt-3 w-[18rem] overflow-hidden rounded-2xl border border-greyscale-800 bg-greyscale-800 shadow-[0_20px_40px_rgba(2,12,27,0.35)]"
                role="menu"
                aria-label="App switcher"
              >
                <div className="p-2">
                  {appSwitcherItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-greyscale-750"
                      role="menuitem"
                      onClick={(e) => {
                        if (item.name === "Clikkle Worksuite") {
                          e.preventDefault();
                          setIsAppSwitcherOpen(false);
                          setIsWorksuiteMenuOpen(true);
                          return;
                        }
                        setIsAppSwitcherOpen(false);
                      }}
                    >
                      <span
                        className={`flex size-10 items-center justify-center rounded-xl bg-linear-to-br ${item.tileClass} text-sm font-semibold text-white`}
                        aria-hidden
                      >
                        {item.initials}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base leading-tight font-medium">{item.name}</span>
                        <span className="block text-sm leading-tight text-secondary">{item.description}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <Link href="https://clikkle.com" className="border-t border-greyscale-700 px-4 py-3 text-base hover:bg-greyscale-750 transition-colors">
                  Powered by <span className="font-semibold text-secondary">clikkle.com</span>
                </Link>
              </div>
            ) : null}
          </div>

          <nav className="aw-header-nav hidden lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => {
              if (link.label === "Products") {
                return (
                  <ProductsMegaMenu
                    key={link.href}
                    isOpen={isProductsMenuOpen}
                    onOpenChange={setIsProductsMenuOpen}
                  />
                );
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

          <WorksuiteMegaMenu
            isOpen={isWorksuiteMenuOpen}
            onOpenChange={setIsWorksuiteMenuOpen}
          />

          <div className="aw-header-actions">
            <a
              className="web-button is-text aw-focus-ring"
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star Clikkle on GitHub"
            >
              <Star className="size-4 shrink-0" aria-hidden strokeWidth={1.5} />
              <span className="text text-secondary">Star on GitHub</span>
              <span className="web-inline-tag">{GITHUB_STARS}</span>
            </a>

            <a className="aw-cta-button aw-focus-ring hidden lg:block" href={CTA_LINK}>
              Start building for free
            </a>

            <a className="web-btn web-btn-primary flex lg:hidden" href={CTA_LINK}>
              Sign up
            </a>

            <button
              className="aw-menu-button aw-focus-ring flex lg:hidden mx-0!"
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
      </div>

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
                src={logoMarkSrc}
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
