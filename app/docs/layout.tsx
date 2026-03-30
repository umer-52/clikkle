import { SidebarSwitcher } from "@/components/docs/sidebar-switcher";

import { DocsHeader } from "@/components/docs/header";

export const metadata = {
  title: "Docs - Clikkle",
  description:
    "Learn how to build like a team of hundreds. Get started with Authentication, Databases, Storage, Functions, and Messaging in your preferred framework.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#19191c]">
      <DocsHeader />
      <div className="mx-auto flex max-w-[1400px]">
        {/* Left Navigation Sidebar */}
        <SidebarSwitcher />

        {/* Main Content Area */}
        <main className="min-w-0 flex-1 overflow-x-hidden px-6 py-12 lg:pl-12 lg:pr-8">
          {children}
        </main>
      </div>
    </div>
  );
}
