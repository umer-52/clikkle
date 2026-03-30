"use client";

import { usePathname } from "next/navigation";
import { DocsSidebar } from "./left-sidebar";
import { AuthSidebar } from "./sidebars/auth-sidebar";
import { DatabasesSidebar } from "./sidebars/databases-sidebar";
import { StorageSidebar } from "./sidebars/storage-sidebar";
import { FunctionsSidebar } from "./sidebars/functions-sidebar";
import { MessagingSidebar } from "./sidebars/messaging-sidebar";
import { SitesSidebar } from "./sidebars/sites-sidebar";
import { AvatarsSidebar } from "./sidebars/avatars-sidebar";
import { NetworkSidebar } from "./sidebars/network-sidebar";
import { AiSidebar } from "./sidebars/ai-sidebar";
import { RealtimeSidebar } from "./sidebars/realtime-sidebar";
import { CommandLineSidebar } from "./sidebars/command-line-sidebar";
import { McpSidebar } from "./sidebars/mcp-sidebar";
import { PlatformSidebar } from "./sidebars/platform-sidebar";
import { MigrationsSidebar } from "./sidebars/migrations-sidebar";
import { SecuritySidebar } from "./sidebars/security-sidebar";
import { SelfHostingSidebar } from "./sidebars/self-hosting-sidebar";
import { IntegrationSidebar } from "./sidebars/integration-sidebar";

export function SidebarSwitcher() {
  const pathname = usePathname() || "";

  // Products
  if (pathname.startsWith("/docs/products/auth")) return <AuthSidebar />;
  if (pathname.startsWith("/docs/products/databases")) return <DatabasesSidebar />;
  if (pathname.startsWith("/docs/products/storage")) return <StorageSidebar />;
  if (pathname.startsWith("/docs/products/functions")) return <FunctionsSidebar />;
  if (pathname.startsWith("/docs/products/messaging")) return <MessagingSidebar />;
  if (pathname.startsWith("/docs/products/sites")) return <SitesSidebar />;
  if (pathname.startsWith("/docs/products/avatars")) return <AvatarsSidebar />;
  if (pathname.startsWith("/docs/products/network")) return <NetworkSidebar />;
  if (pathname.startsWith("/docs/products/ai")) return <AiSidebar />;

  // APIs
  if (pathname.startsWith("/docs/apis/realtime")) return <RealtimeSidebar />;

  // Tooling
  if (pathname.startsWith("/docs/tooling/command-line")) return <CommandLineSidebar />;
  if (pathname.startsWith("/docs/tooling/mcp")) return <McpSidebar />;

  // Advanced
  if (pathname.startsWith("/docs/advanced/platform")) return <PlatformSidebar />;
  if (pathname.startsWith("/docs/advanced/migrations")) return <MigrationsSidebar />;
  if (pathname.startsWith("/docs/advanced/security")) return <SecuritySidebar />;
  if (pathname.startsWith("/docs/advanced/self-hosting")) return <SelfHostingSidebar />;
  if (pathname.startsWith("/docs/advanced/integration")) return <IntegrationSidebar />;

  // Fallback to Global docs navigation
  return <DocsSidebar />;
}
