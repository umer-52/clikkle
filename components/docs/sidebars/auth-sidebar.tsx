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
                    href: '/docs/products/auth'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/auth/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Accounts',
                    href: '/docs/products/auth/accounts'
                },
                {
                    label: 'Users',
                    href: '/docs/products/auth/users'
                },
                {
                    label: 'Teams',
                    href: '/docs/products/auth/teams'
                },
                {
                    label: 'Preferences',
                    href: '/docs/products/auth/preferences'
                },
                {
                    label: 'Labels',
                    href: '/docs/products/auth/labels'
                },
                {
                    label: 'Security',
                    href: '/docs/products/auth/security'
                },
                {
                    label: 'Tokens',
                    href: '/docs/products/auth/tokens'
                },
                {
                    label: 'Identities',
                    href: '/docs/products/auth/identities'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'Email and password login',
                    href: '/docs/products/auth/email-password'
                },
                {
                    label: 'Phone (SMS) login',
                    href: '/docs/products/auth/phone-sms'
                },
                {
                    label: 'Magic URL login',
                    href: '/docs/products/auth/magic-url'
                },
                {
                    label: 'Email OTP login',
                    href: '/docs/products/auth/email-otp'
                },
                {
                    label: 'OAuth2 login',
                    href: '/docs/products/auth/oauth2'
                },
                {
                    label: 'Anonymous login',
                    href: '/docs/products/auth/anonymous'
                },
                {
                    label: 'JWT login',
                    href: '/docs/products/auth/jwt'
                },
                {
                    label: 'SSR login',
                    href: '/docs/products/auth/server-side-rendering'
                },
                {
                    label: 'Custom token login',
                    href: '/docs/products/auth/custom-token'
                },
                {
                    label: 'Multi-factor authentication',
                    href: '/docs/products/auth/mfa'
                },
                {
                    label: 'Auth status check',
                    href: '/docs/products/auth/checking-auth-status'
                },
                {
                    label: 'User verification',
                    href: '/docs/products/auth/verify-user'
                },
                {
                    label: 'Team invites',
                    href: '/docs/products/auth/team-invites'
                },
                {
                    label: 'Multi-tenancy',
                    href: '/docs/products/auth/multi-tenancy'
                }
            ]
        },
        {
            label: 'References',
            items: [
                {
                    label: 'Account API',
                    href: '/docs/references/cloud/client-web/account'
                },
                {
                    label: 'Users API',
                    href: '/docs/references/cloud/server-nodejs/users'
                },
                {
                    label: 'Teams API',
                    href: '/docs/references/cloud/client-web/teams'
                }
            ]
        }
    ];

export function AuthSidebar() {
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
            AUTH
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
