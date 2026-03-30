"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  PlayCircle,
  BookOpen,
  Settings,
  Clock,
  Puzzle,
  FileText,
  Users,
  Database,
  FolderOpen,
  Zap,
  Send,
  Globe,
  ChevronRight,
  ExternalLink,
  UserCircle,
  Braces,
  Hexagon,
  Terminal,
  Command,
  Sparkles,
  ServerCog,
  BrainCircuit,
  Swords,
  Type,
  Layers,
  Share2,
  RefreshCcw,
  ShieldCheck,
  Server,
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  isExternal?: boolean;
  hasChildren?: boolean;
  isNew?: boolean;
};

type NavSection = {
  label?: string;
  items: NavItem[];
};

const iconSize = 16;

const navigation: NavSection[] = [
  {
    items: [
      {
        label: "Home",
        href: "/docs",
        icon: <Home size={iconSize} className="text-[#2D63FF]" />,
      },
      {
        label: "Quick start",
        href: "/docs/quick-starts",
        icon: <PlayCircle size={iconSize} />,
      },
      {
        label: "Tutorials",
        href: "/docs/tutorials",
        icon: <BookOpen size={iconSize} />,
      },
      {
        label: "SDKs",
        href: "/docs/sdks",
        icon: <Settings size={iconSize} />,
      },
      {
        label: "Changelog",
        href: "/changelog",
        icon: <Clock size={iconSize} />,
        isExternal: true,
      },
      {
        label: "Integrations",
        href: "/integrations",
        icon: <Puzzle size={iconSize} />,
        isExternal: true,
      },
      {
        label: "API references",
        href: "/docs/references",
        icon: <FileText size={iconSize} />,
        hasChildren: true,
      },
    ],
  },
  {
    label: "PRODUCTS",
    items: [
      {
        label: "Auth",
        href: "/docs/products/auth",
        icon: <Users size={iconSize} />,
        hasChildren: true,
      },
      {
        label: "Databases",
        href: "/docs/products/databases",
        icon: <Database size={iconSize} />,
        hasChildren: true,
      },
      {
        label: "Storage",
        href: "/docs/products/storage",
        icon: <FolderOpen size={iconSize} />,
        hasChildren: true,
      },
      {
        label: "Functions",
        href: "/docs/products/functions",
        icon: <Zap size={iconSize} />,
        hasChildren: true,
      },
      {
        label: "Messaging",
        href: "/docs/products/messaging",
        icon: <Send size={iconSize} />,
        hasChildren: true,
      },
      {
        label: "Sites",
        href: "/docs/products/sites",
        icon: <Globe size={iconSize} />,
        hasChildren: true,
        isNew: true,
      },
    ],
  },
  {
    label: "UTILITIES",
    items: [
      {
        label: "Avatars",
        href: "/docs/products/avatars",
        icon: <UserCircle size={iconSize} />,
        hasChildren: true,
        isNew: true,
      },
    ],
  },
  {
    label: "APIS",
    items: [
      {
        label: "Realtime",
        href: "/docs/apis/realtime",
        icon: <Clock size={iconSize} />,
        hasChildren: true,
      },
      {
        label: "REST",
        href: "/docs/apis/rest",
        icon: <Braces size={iconSize} />,
      },
      {
        label: "GraphQL",
        href: "/docs/apis/graphql",
        icon: <Hexagon size={iconSize} />,
      },
    ],
  },
  {
    label: "TOOLING",
    items: [
      {
        label: "CLI",
        href: "/docs/tooling/command-line/installation",
        icon: <Terminal size={iconSize} />,
        hasChildren: true,
      },
      {
        label: "Command Center",
        href: "/docs/tooling/command-center",
        icon: <Command size={iconSize} />,
      },
      {
        label: "Assistant",
        href: "/docs/tooling/assistant",
        icon: <Sparkles size={iconSize} />,
      },
      {
        label: "MCP Server",
        href: "/docs/tooling/mcp",
        icon: <ServerCog size={iconSize} />,
      },
      {
        label: "Skills",
        href: "/docs/tooling/skills",
        icon: <BrainCircuit size={iconSize} />,
      },
      {
        label: "Arena",
        href: "/docs/tooling/arena",
        icon: <Swords size={iconSize} />,
      },
      {
        label: "The Appwriter",
        href: "/docs/tooling/appwriter",
        icon: <Type size={iconSize} />,
      },
    ],
  },
  {
    label: "ADVANCED",
    items: [
      {
        label: "Platform",
        href: "/docs/advanced/platform",
        icon: <Layers size={iconSize} />,
        hasChildren: true,
      },
      {
        label: "Network",
        href: "/docs/products/network",
        icon: <Share2 size={iconSize} />,
        hasChildren: true,
      },
      {
        label: "Migrations",
        href: "/docs/advanced/migrations",
        icon: <RefreshCcw size={iconSize} />,
        hasChildren: true,
      },
      {
        label: "Security",
        href: "/docs/advanced/security",
        icon: <ShieldCheck size={iconSize} />,
        hasChildren: true,
      },
      {
        label: "Self-hosting",
        href: "/docs/advanced/self-hosting",
        icon: <Server size={iconSize} />,
        hasChildren: true,
      },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[240px] shrink-0 border-r border-white/6 lg:block">
      <nav className="sticky top-[64px] h-[calc(100vh-64px)] overflow-y-auto py-8 pr-4 pl-2 hide-scrollbar">
        {navigation.map((section, sectionIdx) => (
          <div key={sectionIdx} className={cn(sectionIdx > 0 && "mt-6")}>
            {section.label ? (
              <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/40">
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
                      target={item.isExternal ? "_blank" : undefined}
                      className={cn(
                        "group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span className={cn(isActive ? "text-white" : "text-white/40 group-hover:text-white/60")}>
                        {item.icon}
                      </span>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.isNew && (
                        <span className="rounded-full px-1.5 py-px text-[10px] font-semibold text-[#2D63FF] bg-[#2D63FF]/10 flex-shrink-0">
                          New
                        </span>
                      )}
                      {item.isExternal ? (
                        <ExternalLink size={12} className="text-white/30 flex-shrink-0" />
                      ) : null}
                      {item.hasChildren ? (
                        <ChevronRight size={14} className="text-white/30" />
                      ) : null}
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
