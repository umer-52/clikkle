"use client";

import type { NavLink } from "@/lib/docs/nav-tree";
import { stripBasePathFromPathname } from "@/lib/basepath";
import Link from "next/link";
import { useDocsPathname } from "@/lib/docs/use-docs-pathname";

/** Appwrite `SidebarNavButton.svelte` — active: `page.url?.pathname === groupItem.href` */
export function DocsSidebarNavButton({
  groupItem,
  title,
}: {
  groupItem: NavLink;
  /** Appwrite `Tooltip` when expandable rail + desktop sidenav closed */
  title?: string;
}) {
  const pathname = useDocsPathname();
  const path = stripBasePathFromPathname(pathname);
  const selected = path === groupItem.href;

  return (
    <Link
      className={`web-side-nav-button flex w-full items-center rounded-lg whitespace-nowrap${selected ? " is-selected" : ""}`}
      href={groupItem.href}
      target={groupItem.openInNewTab ? "_blank" : undefined}
      rel={groupItem.openInNewTab ? "noopener noreferrer" : undefined}
      title={title}
    >
      {groupItem.icon ? (
        <span className={`icon ${groupItem.icon}`} aria-hidden="true" />
      ) : null}
      <span className="text-caption web-side-nav-button-label flex min-w-0 flex-1 items-center gap-2">
        <span className="min-w-0 truncate">{groupItem.label}</span>
        {groupItem.new ? <span className="web-inline-tag is-pink shrink-0">New</span> : null}
        {groupItem.openInNewTab ? (
          <span className="icon icon-external-link icon-secondary shrink-0" aria-hidden="true" />
        ) : null}
      </span>
      {groupItem.isParent ? (
        <span className="icon-cheveron-right ml-auto shrink-0" aria-hidden="true" />
      ) : null}
    </Link>
  );
}
