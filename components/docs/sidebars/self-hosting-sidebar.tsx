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
                    href: '/docs/advanced/self-hosting/'
                },
                {
                    label: 'Installation',
                    href: '/docs/advanced/self-hosting/installation'
                }
            ]
        },
        {
            label: 'Platform deployment',
            items: [
                {
                    label: 'AWS',
                    href: '/docs/advanced/self-hosting/platforms/aws'
                },
                {
                    label: 'DigitalOcean',
                    href: '/docs/advanced/self-hosting/platforms/digitalocean'
                },
                {
                    label: 'Google Cloud',
                    href: '/docs/advanced/self-hosting/platforms/google-cloud'
                },
                {
                    label: 'Azure',
                    href: '/docs/advanced/self-hosting/platforms/azure'
                },
                {
                    label: 'Coolify',
                    href: '/docs/advanced/self-hosting/platforms/coolify'
                }
            ]
        },
        {
            label: 'Configuration',
            items: [
                {
                    label: 'Environment variables',
                    href: '/docs/advanced/self-hosting/configuration/environment-variables'
                },
                {
                    label: 'Email delivery',
                    href: '/docs/advanced/self-hosting/configuration/email'
                },
                {
                    label: 'SMS delivery',
                    href: '/docs/advanced/self-hosting/configuration/sms'
                },
                {
                    label: 'Functions',
                    href: '/docs/advanced/self-hosting/configuration/functions'
                },
                {
                    label: 'Sites',
                    href: '/docs/advanced/self-hosting/configuration/sites'
                },
                {
                    label: 'Storage',
                    href: '/docs/advanced/self-hosting/configuration/storage'
                },
                {
                    label: 'TLS certificates',
                    href: '/docs/advanced/self-hosting/configuration/tls-certificates'
                },
                {
                    label: 'Version control',
                    href: '/docs/advanced/self-hosting/configuration/version-control'
                }
            ]
        },
        {
            label: 'Production',
            items: [
                {
                    label: 'Preparation',
                    href: '/docs/advanced/self-hosting/production'
                },
                {
                    label: 'Security',
                    href: '/docs/advanced/self-hosting/production/security'
                },
                {
                    label: 'Scaling',
                    href: '/docs/advanced/self-hosting/production/scaling'
                },
                {
                    label: 'Rate limits',
                    href: '/docs/advanced/self-hosting/production/rate-limits'
                },
                {
                    label: 'Email delivery',
                    href: '/docs/advanced/self-hosting/production/emails'
                },
                {
                    label: 'Error monitoring',
                    href: '/docs/advanced/self-hosting/production/errors'
                },
                {
                    label: 'Backups',
                    href: '/docs/advanced/self-hosting/production/backups'
                },
                {
                    label: 'Updates and migrations',
                    href: '/docs/advanced/self-hosting/production/updates'
                },
                {
                    label: 'Debugging',
                    href: '/docs/advanced/self-hosting/production/debugging'
                }
            ]
        }
    ];

export function SelfHostingSidebar() {
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
            SELF-HOSTING
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
