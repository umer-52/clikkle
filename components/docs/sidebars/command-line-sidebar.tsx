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
            label: 'Guides',
            items: [
                {
                    label: 'Installation',
                    href: '/docs/tooling/command-line/installation'
                },
                {
                    label: 'Commands',
                    href: '/docs/tooling/command-line/commands'
                },
                {
                    label: 'Non interactive',
                    href: '/docs/tooling/command-line/non-interactive'
                },
                {
                    label: 'Generate SDK',
                    href: '/docs/tooling/command-line/generate'
                }
            ]
        },
        {
            label: 'Deployments',
            items: [
                {
                    label: 'Tables',
                    href: '/docs/tooling/command-line/tables'
                },
                {
                    label: 'Functions',
                    href: '/docs/tooling/command-line/functions'
                },
                {
                    label: 'Sites',
                    href: '/docs/tooling/command-line/sites'
                },
                {
                    label: 'Teams',
                    href: '/docs/tooling/command-line/teams'
                },
                {
                    label: 'Topics',
                    href: '/docs/tooling/command-line/topics'
                },
                {
                    label: 'Buckets',
                    href: '/docs/tooling/command-line/buckets'
                }
            ]
        }
    ];

export function CommandLineSidebar() {
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
            CLI
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
