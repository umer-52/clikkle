"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const links: Record<string, { label: string; href: string; target?: string; rel?: string }[]> = {
  'Quick starts': [
    { label: 'Web', href: '/docs/quick-starts/web' },
    { label: 'Next.js', href: '/docs/quick-starts/nextjs' },
    { label: 'React', href: '/docs/quick-starts/react' },
    { label: 'Vue.js', href: '/docs/quick-starts/vue' },
    { label: 'Nuxt', href: '/docs/quick-starts/nuxt' },
    { label: 'SvelteKit', href: '/docs/quick-starts/sveltekit' },
    { label: 'Angular', href: '/docs/quick-starts/angular' },
    { label: 'React Native', href: '/docs/quick-starts/react-native' },
    { label: 'Flutter', href: '/docs/quick-starts/flutter' },
    { label: 'Apple', href: '/docs/quick-starts/apple' },
    { label: 'Android', href: '/docs/quick-starts/android' },
  ],
  'Products': [
    { label: 'Auth', href: '/products/auth' },
    { label: 'Databases', href: '/docs/products/databases' },
    { label: 'Storage', href: '/products/storage' },
    { label: 'Functions', href: '/products/functions' },
    { label: 'Messaging', href: '/products/messaging' },
    { label: 'Realtime', href: '/docs/apis/realtime' },
    { label: 'Hosting', href: '/products/sites' },
    { label: 'Network', href: '/docs/products/network' },
  ],
  'Learn': [
    { label: 'Blog', href: '/blog' },
    { label: 'Docs', href: '/docs' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Community', href: '/community' },
    { label: 'Init', href: '/init' },
    { label: 'Threads', href: '/threads' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Roadmap', href: 'https://github.com/orgs/appwrite/projects', target: '_blank', rel: 'noopener noreferrer' },
    { label: 'Source code', href: 'https://github.com/appwrite', target: '_blank', rel: 'noopener noreferrer' },
    { label: 'Arena', href: 'https://arena.clikkle.com', target: '_blank', rel: 'noopener noreferrer' },
  ],
  'Programs': [
    { label: 'Heroes', href: '/heroes' },
    { label: 'Startups', href: '/startups' },
    { label: 'Education', href: '/education' },
    { label: 'Partners', href: '/partners' },
  ],
  'About': [
    { label: 'Company', href: '/company' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Careers', href: 'https://appwrite.careers', target: '_blank', rel: 'noopener noreferrer' },
    { label: 'Store', href: 'https://appwrite.store', target: '_blank', rel: 'noopener noreferrer' },
    { label: 'Contact us', href: '/contact-us' },
    { label: 'Assets', href: '/assets' },
    { label: 'Security', href: '/docs/advanced/security' },
  ],
};

export function SiteFooter() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  return (
    <div className="container">
      <nav aria-label="Footer" className="relative mt-24 border-smooth border-t pt-12 pb-8">
        <Link className="aw-logo-link aw-focus-ring flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-white/90 transition-colors mb-8" href="/" aria-label="Clikkle home">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shadow-[0_0_15px_rgba(45,99,255,0.5)]">
             <div className="w-3 h-3 bg-white rounded-sm" />
          </div>
          Clikkle
        </Link>
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {Object.entries(links).map(([title, items]) => (
            <li key={title}>
              {/* Desktop version */}
              <div className="hidden md:block">
                <h2 className="text-caption font-medium uppercase mb-4 text-secondary">{title}</h2>
                <ul className="flex flex-col gap-2">
                  {items.map(({ href, label, target, rel }) => (
                    <li key={label}>
                      <Link className="text-sub-body text-primary hover:text-accent transition-colors" href={href} target={target} rel={rel}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile version */}
              <div className="md:hidden">
                <button
                  className="flex w-full items-center justify-between py-3"
                  onClick={() => toggleSection(title)}
                >
                  <span className="text-caption font-medium uppercase text-secondary">{title}</span>
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200 text-secondary",
                      openSections.includes(title) && "rotate-180"
                    )}
                  />
                </button>
                {openSections.includes(title) ? (
                  <ul className="flex flex-col gap-2 pb-4">
                    {items.map(({ href, label, target, rel }) => (
                      <li key={label}>
                        <Link className="text-sub-body text-primary hover:text-accent transition-colors" href={href} target={target} rel={rel}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main footer bottom bar */}
      <footer className="border-smooth border-t border-dashed py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-caption text-secondary">
            © {new Date().getFullYear()} Clikkle. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-caption text-secondary hover:text-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="text-caption text-secondary hover:text-primary transition-colors">Privacy</Link>
            <Link href="/cookies" className="text-caption text-secondary hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
