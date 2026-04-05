"use client";

import { DocsSidebarNavButton } from "@/components/docs/docs-sidebar-nav-button";
import { DocsConsoleCta } from "@/components/docs/docs-console-cta";
import { useDocsLayout } from "@/components/docs/docs-layout-context";
import type { NavLink, NavParent, NavTree } from "@/lib/docs/nav-tree";
import { isNavLink } from "@/lib/docs/nav-tree";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const GITHUB_LINK = "https://github.com/clikkle";
const GITHUB_STARS = "55.2K";

/** Appwrite `Sidebar.svelte` */
export function DocsNavSidebar({
  expandable = false,
  navigation,
  parent,
}: {
  expandable?: boolean;
  navigation: NavTree;
  parent?: NavParent;
}) {
  const { showSidenav, toggleSidenav, setShowSearch, setLayoutState } = useDocsLayout();
  const navRef = useRef<HTMLElement>(null);
  const [collapsedGroups, setCollapsedGroups] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setCollapsedGroups((prev) => {
      const next = { ...prev };
      navigation.forEach((navGroup, index) => {
        if (!isNavLink(navGroup) && navGroup.collapsible && !(index in next)) {
          next[index] = navGroup.initiallyCollapsed ?? true;
        }
      });
      return next;
    });
  }, [navigation]);

  const isCollapsed = useCallback(
    (index: number) => collapsedGroups[index] ?? true,
    [collapsedGroups]
  );

  const toggleGroup = useCallback((index: number) => {
    setCollapsedGroups((prev) => ({ ...prev, [index]: !(prev[index] ?? true) }));
  }, []);

  useEffect(() => {
    if (!showSidenav) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target;
      if (!(t instanceof HTMLElement)) return;
      if (t.closest(".web-main-header") || t.closest(".web-mobile-header")) return;
      if (navRef.current?.contains(t)) return;
      setLayoutState({ showSidenav: false });
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [showSidenav, setLayoutState]);

  const wrapItem = (groupItem: NavLink, key: string) => {
    const tooltipTitle =
      expandable && !showSidenav ? groupItem.label : undefined;
    return (
      <DocsSidebarNavButton key={key} groupItem={groupItem} title={tooltipTitle} />
    );
  };

  return (
    <nav ref={navRef} className="web-side-nav" aria-label="Side">
      <div className="web-side-nav-wrapper">
        <button
          type="button"
          className="web-input-text web-is-not-desktop lg:hidden"
          onClick={() => setShowSearch(true)}
        >
          <span className="web-icon-search" aria-hidden="true" />
          <span className="text">Search in docs</span>
        </button>
        <div className="web-side-nav-scroll">
          {parent ? (
            <section className="web-side-nav-wrapper-parent">
              <Link href={parent.href} aria-label="go back">
                <span className="icon-cheveron-left" aria-hidden="true" />
              </Link>
              <span className="web-side-nav-wrapper-parent-title text-eyebrow uppercase">
                {parent.label}
              </span>
            </section>
          ) : null}
          {navigation.map((navGroup, index) => (
            <section key={index}>
              {isNavLink(navGroup) ? (
                wrapItem(navGroup, `link-${index}`)
              ) : (
                <>
                  {navGroup.label ? (
                    navGroup.collapsible ? (
                      <button
                        type="button"
                        className="web-side-nav-header-collapsible text-eyebrow web-side-nav-header mb-2 flex w-full cursor-pointer items-center pr-3 uppercase"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleGroup(index);
                        }}
                        aria-expanded={!isCollapsed(index)}
                      >
                        <span>{navGroup.label}</span>
                        <span
                          className="icon-cheveron-down ml-auto"
                          aria-hidden="true"
                          style={{
                            transform: isCollapsed(index) ? "rotate(0deg)" : "rotate(180deg)",
                            transition: "transform 0.2s ease-in-out",
                          }}
                        />
                      </button>
                    ) : (
                      <h2 className="text-eyebrow web-side-nav-header mb-2 whitespace-nowrap uppercase">
                        {navGroup.label}
                      </h2>
                    )
                  ) : null}
                  {!navGroup.collapsible || !isCollapsed(index) ? (
                    <ul>
                      {navGroup.items.map((groupItem, j) => (
                        <li key={j}>{wrapItem(groupItem, `${index}-${j}`)}</li>
                      ))}
                    </ul>
                  ) : null}
                </>
              )}
            </section>
          ))}
        </div>
        {expandable ? (
          <button
            type="button"
            onClick={toggleSidenav}
            className="web-icon-button ml-auto"
            style={{ marginBottom: "1rem" }}
            aria-label="toggle nav"
          >
            <span className="icon-cheveron-right" aria-hidden="true" />
          </button>
        ) : null}
        <div className="web-side-nav-mobile-footer-buttons">
          {/* Appwrite `Sidebar.svelte`: `IsLoggedIn` then GitHub (`web-u-inline-width-100-percent-mobile` on GitHub) */}
          <DocsConsoleCta className="web-button is-primary web-u-inline-width-100-percent-mobile" />
          <a
            className="web-side-nav-mobile-footer-github web-u-inline-width-100-percent-mobile"
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon icon-star" aria-hidden="true" />
            <span className="text">Star on GitHub</span>
            <span className="web-inline-tag is-subtle">{GITHUB_STARS}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
