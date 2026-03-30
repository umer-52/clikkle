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
                    href: '/docs/advanced/security'
                }
            ]
        },
        {
            label: 'Compliances',
            items: [
                {
                    label: 'GDPR',
                    href: '/docs/advanced/security/gdpr'
                },
                {
                    label: 'PCI',
                    href: '/docs/advanced/security/pci'
                },
                {
                    label: 'SOC 2',
                    href: '/docs/advanced/security/soc2'
                },
                {
                    label: 'HIPAA',
                    href: '/docs/advanced/security/hipaa'
                },
                {
                    label: 'CCPA',
                    href: '/docs/advanced/security/ccpa'
                }
            ]
        },
        {
            label: 'Measures',
            items: [
                {
                    label: 'Authentication',
                    href: '/docs/advanced/security/authentication'
                },
                {
                    label: 'Encryption',
                    href: '/docs/advanced/security/encryption'
                },
                {
                    label: 'Multi-Factor authentication',
                    href: '/docs/advanced/security/mfa'
                },
                {
                    label: 'HTTPS',
                    href: '/docs/advanced/security/https'
                },
                {
                    label: 'TLS',
                    href: '/docs/advanced/security/tls'
                },
                {
                    label: 'Backups',
                    href: '/docs/advanced/security/backups'
                },
                {
                    label: 'Penetration tests',
                    href: '/docs/advanced/security/penetration-tests'
                },
                {
                    label: 'Audit logs',
                    href: '/docs/advanced/security/audit-logs'
                },
                {
                    label: 'Abuse protection',
                    href: '/docs/advanced/security/abuse-protection'
                }
            ]
        }
    ];

export function SecuritySidebar() {
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
            SECURITY
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
