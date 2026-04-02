"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const links: Record<string, { label: string; href: string; target?: string; rel?: string }[]> = {
  "Quick starts": [
    { label: "Web", href: "/docs/quick-starts/web" },
    { label: "Next.js", href: "/docs/quick-starts/nextjs" },
    { label: "React", href: "/docs/quick-starts/react" },
    { label: "Vue.js", href: "/docs/quick-starts/vue" },
    { label: "Nuxt", href: "/docs/quick-starts/nuxt" },
    { label: "SvelteKit", href: "/docs/quick-starts/sveltekit" },
    { label: "Angular", href: "/docs/quick-starts/angular" },
    { label: "React Native", href: "/docs/quick-starts/react-native" },
    { label: "Flutter", href: "/docs/quick-starts/flutter" },
    { label: "Apple", href: "/docs/quick-starts/apple" },
    { label: "Android", href: "/docs/quick-starts/android" },
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
    <Link
      className="text-sub-body text-primary transition-colors hover:text-accent"
      href={href}
      target={target}
      rel={rel}
    >
      {label}
    </Link>
  );
}

type SiteFooterProps = {
  /** When true, omit the outer `.container` (e.g. parent already wraps PreFooter + footer in one container). */
  noOuterContainer?: boolean;
};

export function SiteFooter({ noOuterContainer = false }: SiteFooterProps) {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const inner = (
    <>
      {/* Matches src/scss/7-components/_footer-nav.scss + FooterNav.svelte */}
      <nav
        aria-label="Footer"
        className="relative mt-24 flex flex-col gap-10 border-t border-white/10 pt-16 text-xs lg:flex-row lg:justify-between lg:gap-8"
      >
        <Link
          href="/"
          className="shrink-0 self-start"
          aria-label="Clikkle home"
        >
          <Image
            src="/clikkle/images/logos/logo.svg"
            alt=""
            width={130}
            height={24}
            priority={false}
            className="h-6 w-[130px] object-contain object-left"
          />
        </Link>

        {/* Desktop: flex-basis 830px, justify-between columns (break2open ≥1024px) */}
        <div className="hidden min-w-0 lg:flex lg:max-w-full lg:basis-[830px] lg:shrink lg:flex-row lg:justify-between lg:gap-2">
          {Object.entries(links).map(([title, items]) => (
            <div key={`desktop-${title}`} className="min-w-0">
              <h2 className="text-caption mb-6 font-medium uppercase text-secondary">{title}</h2>
              <ul className="flex flex-col gap-2.5 text-sub-body">
                {items.map(({ href, label, target, rel }) => (
                  <li key={label}>
                    <FooterLink href={href} label={label} target={target} rel={rel} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile / tablet: &lt;1024px — column + accordion (matches $break1) */}
        <div className="flex w-full flex-col gap-3 lg:hidden">
          {Object.entries(links).map(([title, items]) => (
            <div
              key={`mobile-${title}`}
              className="flex flex-col overflow-hidden rounded-lg bg-white/[0.04] backdrop-blur-sm"
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
                    openSections.includes(title) && "rotate-180"
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

      <footer className="border-smooth border-t border-dashed py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-caption text-secondary">
            © {new Date().getFullYear()} Clikkle. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-caption text-secondary transition-colors hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-caption text-secondary transition-colors hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-caption text-secondary transition-colors hover:text-primary"
            >
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </>
  );

  if (noOuterContainer) {
    return inner;
  }

  return <div className="container">{inner}</div>;
}
