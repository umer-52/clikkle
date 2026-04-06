"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import "./site-footer.css";

/**
 * Mirrors `src/lib/components/FooterNav.svelte` link map (Appwrite source of truth).
 * URLs are Clikkle routes / external targets.
 */
const links: Record<string, { label: string; href: string; target?: string; rel?: string }[]> = {
  "Quick starts": [
    { label: "Web", href: "/docs/quick-starts/web" },
    { label: "Next.js", href: "/docs/quick-starts/nextjs" },
    { label: "React", href: "/docs/quick-starts/react" },
    { label: "Vue.js", href: "/docs/quick-starts/vue" },
    { label: "Nuxt", href: "/docs/quick-starts/nuxt" },
    { label: "SvelteKit", href: "/docs/quick-starts/sveltekit" },
    { label: "Refine", href: "/docs/quick-starts/refine" },
    { label: "Angular", href: "/docs/quick-starts/angular" },
    { label: "React Native", href: "/docs/quick-starts/react-native" },
    { label: "Flutter", href: "/docs/quick-starts/flutter" },
    { label: "Apple", href: "/docs/quick-starts/apple" },
    { label: "Android", href: "/docs/quick-starts/android" },
    { label: "Qwik", href: "/docs/quick-starts/qwik" },
    { label: "Astro", href: "/docs/quick-starts/astro" },
    { label: "Solid", href: "/docs/quick-starts/solid" },
  ],
  Products: [
    { label: "Auth", href: "/products/auth" },
    { label: "Databases", href: "/docs/products/databases" },
    { label: "Storage", href: "/products/storage" },
    { label: "Functions", href: "/products/functions" },
    { label: "Messaging", href: "/products/messaging" },
    { label: "Realtime", href: "/docs/apis/realtime" },
    { label: "Hosting", href: "/products/sites" },
    { label: "Network", href: "/docs/products/network" },
  ],
  Learn: [
    { label: "Blog", href: "/blog" },
    { label: "Docs", href: "/docs" },
    { label: "Integrations", href: "/integrations" },
    { label: "Community", href: "/community" },
    { label: "Init", href: "/init" },
    { label: "Threads", href: "/threads" },
    { label: "Changelog", href: "/changelog" },
    {
      label: "Roadmap",
      href: "https://github.com/orgs/clikkle/projects",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "Source code",
      href: "https://github.com/clikkle",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    { label: "Arena", href: "https://arena.clikkle.com", target: "_blank", rel: "noopener noreferrer" },
    {
      label: "Tech news",
      href: "https://refetch.io",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
  Programs: [
    { label: "Heroes", href: "/heroes" },
    { label: "Startups", href: "/startups" },
    { label: "Education", href: "/education" },
    { label: "Partners", href: "/partners" },
  ],
  About: [
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
    {
      label: "Careers",
      href: "https://clikkle.com/careers",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "Store",
      href: "https://clikkle.com/store",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    { label: "Contact us", href: "/contact-us" },
    { label: "Assets", href: "/assets" },
    { label: "Security", href: "/docs/advanced/security" },
  ],
};

/** Same order as `src/lib/constants.ts` `socials` — links point to Clikkle properties. */
const socials: { label: string; href: string }[] = [
  { label: "Discord", href: "/discord" },
  { label: "GitHub", href: "https://github.com/clikkle" },
  { label: "X", href: "https://twitter.com/intent/follow?screen_name=clikkle" },
  { label: "LinkedIn", href: "https://linkedin.com/company/clikkle" },
  { label: "YouTube", href: "https://youtube.com/@clikkle" },
  { label: "Daily.dev", href: "https://app.daily.dev" },
  { label: "Bluesky", href: "https://bsky.app" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

function FooterLink({
  href,
  label,
  target,
  rel,
}: {
  href: string;
  label: string;
  target?: string;
  rel?: string;
}) {
  return (
    <Link className="site-footer__link text-sub-body text-primary transition-colors hover:text-accent" href={href} target={target} rel={rel}>
      {label}
    </Link>
  );
}

function SocialIcon({ label }: { label: string }) {
  const common = "size-[14px] shrink-0";
  switch (label) {
    case "Discord":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "X":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "Daily.dev":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M8.225 21.876c-.417 0-.79-.26-.935-.65L4.437 12l2.853-9.226c.145-.39.518-.65.935-.65h7.55c.417 0 .79.26.935.65L19.563 12l-2.853 9.226c-.145.39-.518.65-.935.65h-7.55zm.935-2.5h5.68l2.28-7.376-2.28-7.376h-5.68L6.88 12l2.28 7.376z" />
        </svg>
      );
    case "Bluesky":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.023.465-.115.967-.35 1.462-.691-.18.13-.376.252-.578.362-2.444 1.285-4.638-.425-4.638-.425l-.868 1.03s2.004 1.52 4.504.914c1.58-.38 3.087-1.064 4.372-1.914 1.285.85 2.792 1.534 4.372 1.914 2.5.606 4.504-.914 4.504-.914l-.868-1.03s-2.194 1.71-4.638.425a4.08 4.08 0 0 1-.578-.362c.495.341.997.576 1.462.691 2.67.637 5.568-.287 6.383-3.023.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    default:
      return <span className={cn(common, "block rounded-sm bg-current/30")} aria-hidden />;
  }
}

type SiteFooterProps = {
  noOuterContainer?: boolean;
  /** `FooterNav.svelte` `noBorder` — omit top separator (e.g. heroes pre-footer). */
  footerNavNoTopBorder?: boolean;
};

export function SiteFooter({ noOuterContainer = false, footerNavNoTopBorder = false }: SiteFooterProps) {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const year = new Date().getFullYear();

  const toggleSection = (title: string) => {
    setOpenSections((prev) => (prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]));
  };

  const inner = (
    <>
      {/* FooterNav.svelte — .web-footer-nav */}
      <nav
        aria-label="Footer"
        className={cn(
          "site-footer__nav web-footer-nav relative mt-24",
          footerNavNoTopBorder && "site-footer__nav--no-top-border web-footer-nav--no-top-border",
        )}
      >
        <Link href="/" className="site-footer__brand web-logo shrink-0 self-start" aria-label="Clikkle home">
          <Image
            src="/clikkle/images/logos/logo.svg"
            alt=""
            width={24}
            height={24}
            priority={false}
            className="site-footer__brand-mark"
          />
          {/*
           * Appwrite: one SVG combines mark + wordmark. Clikkle mark is icon-only; wordmark uses theme primary
           * (same as link body), sized to the 24px-high lockup in `appwrite.svg`.
           */}
          <span className="site-footer__wordmark text-primary">Clikkle</span>
        </Link>

        <ul className="web-footer-nav-main-list">
          {Object.entries(links).map(([title, items]) => (
            <li key={`desktop-${title}`} className="min-w-0">
              <h2 className="web-footer-nav-main-title text-caption font-medium uppercase text-secondary">{title}</h2>
              <ul className="site-footer__link-list flex flex-col gap-2.5 text-sub-body">
                {items.map(({ href, label, target, rel }) => (
                  <li key={label}>
                    <FooterLink href={href} label={label} target={target} rel={rel} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-col gap-10 lg:hidden">
          {Object.entries(links).map(([title, items]) => (
            <div
              key={`mobile-${title}`}
              className="site-footer__accordion-item flex flex-col overflow-hidden rounded-lg bg-white/[0.04] backdrop-blur-sm"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                onClick={() => toggleSection(title)}
              >
                <span className="text-caption font-medium uppercase text-secondary">{title}</span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-secondary transition-transform duration-200",
                    openSections.includes(title) && "rotate-180",
                  )}
                />
              </button>
              {openSections.includes(title) ? (
                <ul className="flex flex-col gap-2.5 px-4 pb-4 text-sub-body">
                  {items.map(({ href, label, target, rel }) => (
                    <li key={label}>
                      <FooterLink href={href} label={label} target={target} rel={rel} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </nav>

      {/* MainFooter.svelte variant homepage — .web-main-footer */}
      <footer className="site-footer__main web-main-footer relative">
        <ul className="flex flex-wrap gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="site-footer__icon-button web-icon-button"
                aria-label={s.label}
                {...(s.href.startsWith("http")
                  ? { target: "_blank" as const, rel: "noopener noreferrer" }
                  : {})}
              >
                <SocialIcon label={s.label} />
              </a>
            </li>
          ))}
        </ul>

        <div className="site-footer__main-grid mt-1 grid grid-cols-1 gap-y-4 md:grid-cols-3">
          <div className="text-caption text-secondary md:self-center">Copyright © {year} Clikkle</div>

          <div className="site-footer__status flex items-center justify-start md:justify-center">
            <a
              href="https://status.clikkle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-caption text-secondary transition-colors hover:text-primary"
            >
              <span className="inline-block size-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
              <span>All services are online</span>
            </a>
          </div>

          <ul className="site-footer__legal flex flex-wrap gap-4 text-caption md:justify-end md:text-right">
            <li>
              <Link href="/terms" className="text-secondary transition-colors hover:text-primary">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-secondary transition-colors hover:text-primary">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-secondary transition-colors hover:text-primary">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );

  if (noOuterContainer) {
    return inner;
  }

  return <div className="container">{inner}</div>;
}
