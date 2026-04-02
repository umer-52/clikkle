"use client";

import type { NavLink } from "@/lib/docs/nav-tree";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Appwrite `SidebarNavButton.svelte` — active: `page.url?.pathname === groupItem.href` */
export function DocsSidebarNavButton({
  groupItem,
  title,
}: {
  groupItem: NavLink;
  /** Appwrite `Tooltip` when expandable rail + desktop sidenav closed */
  title?: string;
}) {
  const pathname = usePathname() ?? "";
  const selected = pathname === groupItem.href;

  return (
    <Link
      className={`web-side-nav-button flex h-9 min-h-9 w-full items-center rounded-lg px-3 py-0 whitespace-nowrap${selected ? " is-selected" : ""}`}
      href={groupItem.href}
      target={groupItem.openInNewTab ? "_blank" : undefined}
      rel={groupItem.openInNewTab ? "noopener noreferrer" : undefined}
      title={title}
    >
      {groupItem.icon ? (
        <span className={`icon ${groupItem.icon}`} aria-hidden="true" />
      ) : null}
      <span className="text-caption flex gap-2">
        <span>{groupItem.label}</span>
        {groupItem.new ? <span className="web-inline-tag is-pink">New</span> : null}
        {groupItem.openInNewTab ? (
          <span className="icon icon-external-link icon-secondary" aria-hidden="true" />
        ) : null}
      </span>
      {groupItem.isParent ? (
        <span className="icon-cheveron-right ml-auto" aria-hidden="true" />
      ) : null}
    </Link>
  );
}
