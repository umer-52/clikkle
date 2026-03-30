"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  new?: boolean;
};

type NavSection = {
  label?: string;
  items: NavItem[];
};

const navigation: NavSection[] = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/sites'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/sites/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Rendering',
                    href: '/docs/products/sites/rendering'
                },
                {
                    label: 'Deployments',
                    href: '/docs/products/sites/deployments'
                },
                {
                    label: 'Previews',
                    href: '/docs/products/sites/previews'
                },
                {
                    label: 'Instant rollbacks',
                    href: '/docs/products/sites/instant-rollbacks'
                },
                {
                    label: 'Logs',
                    href: '/docs/products/sites/logs'
                },
                {
                    label: 'Domains',
                    href: '/docs/products/sites/domains'
                },
                {
                    label: 'Frameworks',
                    href: '/docs/products/sites/frameworks'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'Templates',
                    href: '/docs/products/sites/templates'
                },
                {
                    label: 'Develop',
                    href: '/docs/products/sites/develop'
                },
                {
                    label: 'Deploy from Git',
                    href: '/docs/products/sites/deploy-from-git'
                },
                {
                    label: 'Deploy from CLI',
                    href: '/docs/products/sites/deploy-from-cli'
                },
                {
                    label: 'Deploy manually',
                    href: '/docs/products/sites/deploy-manually'
                }
            ]
        },
        {
            label: 'References',
            items: [
                {
                    label: 'Sites API',
                    href: '/docs/references/cloud/server-nodejs/sites'
                }
            ]
        }
    ];

export function SitesSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[240px] shrink-0 border-r border-white/6 lg:block">
      <nav className="sticky top-[64px] h-[calc(100vh-64px)] overflow-y-auto py-8 pr-4 pl-2 hide-scrollbar">
        
        {/* Back Button */}
        <div className="mb-6 px-3">
          <Link
            href="/docs"
            className="group flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-white/50 transition-colors hover:text-white"
          >
            <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            SITES
          </Link>
        </div>

        {navigation.map((section, sectionIdx) => (
          <div key={sectionIdx} className={cn(sectionIdx > 0 && "mt-8")}>
            {section.label ? (
              <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-wider text-white/40">
                {section.label}
              </p>
            ) : null}
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                        isActive
                          ? "text-white bg-white/5"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                      {item.new ? <span className="ml-1.5 rounded-full bg-[#2D63FF]/10 px-1.5 py-0.5 text-[10px] font-semibold text-[#2D63FF]">New</span> : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
