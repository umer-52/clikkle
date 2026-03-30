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
            label: 'Platform',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/advanced/platform'
                },
                {
                    label: 'Shortcuts',
                    href: '/docs/advanced/platform/shortcuts'
                },
                {
                    label: 'Roles',
                    href: '/docs/advanced/platform/roles'
                }
            ]
        },
        {
            label: 'Integration',
            items: [
                {
                    label: 'Events',
                    href: '/docs/advanced/platform/events'
                },
                {
                    label: 'Webhooks',
                    href: '/docs/advanced/platform/webhooks'
                },
                {
                    label: 'Response codes',
                    href: '/docs/advanced/platform/response-codes'
                },
                {
                    label: 'Error handling',
                    new: true,
                    href: '/docs/advanced/platform/error-handling'
                }
            ]
        },
        {
            label: 'Access control',
            items: [
                {
                    label: 'Permissions',
                    href: '/docs/advanced/platform/permissions'
                },
                {
                    label: 'Rate limits',
                    href: '/docs/advanced/platform/rate-limits'
                },
                {
                    label: 'API keys',
                    href: '/docs/advanced/platform/api-keys'
                },
                {
                    label: 'Dev keys',
                    href: '/docs/advanced/platform/dev-keys'
                }
            ]
        },
        {
            label: 'Plans',
            items: [
                {
                    label: 'Billing',
                    href: '/docs/advanced/platform/billing'
                },
                {
                    label: 'Free',
                    href: '/docs/advanced/platform/free'
                },
                {
                    label: 'Pro',
                    href: '/docs/advanced/platform/pro'
                },
                {
                    label: 'Enterprise',
                    href: '/docs/advanced/platform/enterprise'
                },
                {
                    label: 'Open source',
                    href: '/docs/advanced/platform/oss'
                }
            ]
        },
        {
            label: 'Add ons',
            items: [
                {
                    label: 'Compute',
                    new: true,
                    href: '/docs/advanced/platform/compute'
                },
                {
                    label: 'Phone OTP',
                    new: true,
                    href: '/docs/advanced/platform/phone-otp'
                },
                {
                    new: true,
                    label: 'Image Transformations',
                    href: '/docs/advanced/platform/image-transformations'
                },
                {
                    new: true,
                    label: 'Database Reads and Writes',
                    href: '/docs/advanced/platform/database-reads-and-writes'
                }
            ]
        },
        {
            label: 'Configuration',
            items: [
                {
                    label: 'Custom domains',
                    href: '/docs/advanced/platform/custom-domains'
                },
                {
                    label: 'Message templates',
                    href: '/docs/advanced/platform/message-templates'
                }
            ]
        },
        {
            label: 'Policies',
            items: [
                {
                    label: 'Release',
                    href: '/docs/advanced/platform/release-policy'
                },
                {
                    new: true,
                    label: 'Fair use',
                    href: '/docs/advanced/platform/fair-use-policy'
                },
                {
                    new: true,
                    label: 'Abuse',
                    href: '/docs/advanced/platform/abuse'
                },
                {
                    new: true,
                    label: 'Support SLA',
                    href: '/docs/advanced/platform/support-sla'
                },
                {
                    new: true,
                    label: 'Uptime SLA',
                    href: '/docs/advanced/platform/uptime-sla'
                },
                {
                    new: true,
                    label: 'Refund',
                    href: '/docs/advanced/platform/refund-policy'
                }
            ]
        }
    ];

export function PlatformSidebar() {
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
            PLATFORM
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
