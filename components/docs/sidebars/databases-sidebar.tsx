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
                    href: '/docs/products/databases'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/databases/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Databases',
                    href: '/docs/products/databases/databases'
                },
                {
                    label: 'Tables',
                    href: '/docs/products/databases/tables'
                },
                {
                    label: 'Rows',
                    href: '/docs/products/databases/rows'
                },
                {
                    label: 'Permissions',
                    href: '/docs/products/databases/permissions'
                },
                {
                    label: 'Relationships',
                    href: '/docs/products/databases/relationships'
                },
                {
                    label: 'Queries',
                    href: '/docs/products/databases/queries'
                },
                {
                    label: 'Order',
                    href: '/docs/products/databases/order'
                },
                {
                    label: 'Operators',
                    href: '/docs/products/databases/operators',
                    new: true
                },
                {
                    label: 'Geo queries',
                    href: '/docs/products/databases/geo-queries',
                    new: true
                },
                {
                    label: 'Backups',
                    href: '/docs/products/databases/backups'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'Pagination',
                    href: '/docs/products/databases/pagination'
                },
                {
                    label: 'Transactions',
                    href: '/docs/products/databases/transactions',
                    new: true
                },
                {
                    label: 'Type generation',
                    href: '/docs/products/databases/type-generation',
                    new: true
                },
                {
                    label: 'Offline sync',
                    href: '/docs/products/databases/offline'
                },
                {
                    label: 'Bulk operations',
                    href: '/docs/products/databases/bulk-operations',
                    new: true
                },
                {
                    label: 'Atomic numeric operations',
                    href: '/docs/products/databases/atomic-numeric-operations',
                    new: true
                },
                {
                    label: 'CSV imports',
                    href: '/docs/products/databases/csv-imports',
                    new: true
                },
                {
                    label: 'CSV exports',
                    href: '/docs/products/databases/csv-exports',
                    new: true
                },
                {
                    label: 'AI suggestions',
                    href: '/docs/products/databases/ai-suggestions',
                    new: true
                },
                {
                    label: 'Timestamp overrides',
                    href: '/docs/products/databases/timestamp-overrides'
                }
            ]
        },
        {
            label: 'References',
            items: [
                {
                    label: 'TablesDB API',
                    href: '/docs/references/cloud/client-web/tablesDB',
                    new: true
                },
                {
                    label: 'Legacy API',
                    href: '/docs/references/cloud/client-web/databases'
                }
            ]
        }
    ];

export function DatabasesSidebar() {
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
            DATABASES
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
