"use client";

import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

export type DocsOnThisPageItem = {
  id: string;
  title: string;
  level: number;
};

/** Appwrite `table-of-contents.svelte`: `h-6` indicator */
const LINE_HEIGHT_PX = 24;
/** Appwrite `table-of-contents.svelte`: clamp pad so the bar stays inside the list viewport */
const LINE_BOTTOM_PAD_PX = 22;

/** Prefer the TOC `<ul>` whenever it is the scroll container in CSS (two-side-navs), even before overflow. */
function tocListScrollPort(ul: HTMLElement): HTMLElement {
  const ulSt = getComputedStyle(ul);
  if (ulSt.overflowY === "auto" || ulSt.overflowY === "scroll") {
    return ul;
  }
  let el: HTMLElement | null = ul.parentElement;
  while (el) {
    const st = getComputedStyle(el);
    if (
      (st.overflowY === "auto" || st.overflowY === "scroll") &&
      el.scrollHeight > el.clientHeight
    ) {
      return el;
    }
    el = el.parentElement;
  }
  return ul;
}

/**
 * Appwrite `table-of-contents.svelte` + `Heading.svelte` + `Article.svelte`:
 * sticky rail (layout CSS), scrollable list, active line + selection from the same
 * IntersectionObserver rootMargin as in-doc headings; preserve last active when no
 * heading intersects; window scroll + hashchange refresh line position like Svelte's
 * `<svelte:window onscroll on:hashchange>`.
 */
export function DocsOnThisPage({ items }: { items: DocsOnThisPageItem[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const visibleRef = useRef<Map<string, boolean>>(new Map());
  const itemsRef = useRef(items);
  itemsRef.current = items;
  const [listHeight, setListHeight] = useState(0);
  const [activeId, setActiveId] = useState<string>("");
  const [lineY, setLineY] = useState(0);

  const resolvedActiveIndex = items.findIndex((item) => item.id === activeId);

  const updateLinePosition = useCallback(() => {
    const ul = listRef.current;
    if (!ul) return;
    const height = ul.clientHeight;
    setListHeight(height);
    if (!activeId || height <= 0) {
      setLineY(0);
      return;
    }
    const li = ul.querySelector(`[data-toc-id="${CSS.escape(activeId)}"]`);
    if (!(li instanceof HTMLElement)) {
      setLineY(0);
      return;
    }
    const ulRect = ul.getBoundingClientRect();
    const liRect = li.getBoundingClientRect();
    const topInList = liRect.top - ulRect.top;
    const maxY = Math.max(0, height - LINE_BOTTOM_PAD_PX);
    setLineY(Math.min(Math.max(0, topInList), maxY));
  }, [activeId, items]);

  const itemsKey = items.map((i) => i.id).join("\n");

  useLayoutEffect(() => {
    updateLinePosition();
  }, [updateLinePosition, items.length]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateLinePosition());
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateLinePosition]);

  /* Appwrite `Article.svelte` + `Heading.svelte`: IO rootMargin + first visible in TOC order */
  useEffect(() => {
    const toc = itemsRef.current;
    if (!toc.length) return;

    const visible = visibleRef.current;
    visible.clear();
    toc.forEach((i) => visible.set(i.id, false));

    const idToEl = new Map<string, HTMLElement>();
    for (const item of toc) {
      const node = document.getElementById(item.id);
      if (node) idToEl.set(item.id, node);
    }
    if (idToEl.size === 0) return;

    const recomputeActive = () => {
      const latest = itemsRef.current;
      setActiveId((prev) => {
        const hash =
          typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "";
        if (hash && latest.some((item) => item.id === hash)) {
          return hash;
        }
        const firstVisible = latest.find((item) => visible.get(item.id));
        if (firstVisible) return firstVisible.id;
        /* Article.svelte: if (selected && noVisible) return; — keep previous */
        return prev;
      });
    };

    const observers: IntersectionObserver[] = [];
    for (const item of toc) {
      const el = idToEl.get(item.id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            visible.set(item.id, entry.isIntersecting);
          }
          recomputeActive();
        },
        { root: null, threshold: 0, rootMargin: "-100px 0px -80% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    }

    recomputeActive();

    const onWin = () => {
      recomputeActive();
      updateLinePosition();
    };
    window.addEventListener("scroll", onWin, { passive: true });
    window.addEventListener("hashchange", onWin);

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onWin);
      window.removeEventListener("hashchange", onWin);
    };
  }, [itemsKey, updateLinePosition]);

  /* Keep the active row in view inside the scrollable TOC (`max-h` rail) — Appwrite list `overflow-scroll` */
  useLayoutEffect(() => {
    if (!activeId || !listRef.current) return;
    const li = listRef.current.querySelector(`[data-toc-id="${CSS.escape(activeId)}"]`);
    if (li instanceof HTMLElement) {
      li.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
    updateLinePosition();
  }, [activeId, updateLinePosition]);

  useEffect(() => {
    const ul = listRef.current;
    if (!ul) return;
    const onScroll = () => updateLinePosition();
    const port = tocListScrollPort(ul);
    port.addEventListener("scroll", onScroll, { passive: true });
    return () => port.removeEventListener("scroll", onScroll);
  }, [updateLinePosition]);

  if (!items.length) return null;

  return (
    <div className="web-references-menu-content web-references-menu-sticky-inner">
      <h5 className="web-references-menu-title text-eyebrow font-aeonik-fono uppercase">
        On This Page
      </h5>
      <div className="docs-toc-body">
        <ul
          ref={listRef}
          className="relative web-references-menu-list docs-toc-scroll flex list-none flex-col gap-4"
        >
          {listHeight > 0 && resolvedActiveIndex >= 0 ? (
            <div
              className="pointer-events-none absolute -start-px top-0 z-[1] w-px bg-[var(--color-text-primary)] transition-transform duration-150 ease-linear"
              style={{
                height: LINE_HEIGHT_PX,
                transform: `translateY(${lineY}px)`,
              }}
              aria-hidden
            />
          ) : null}
          {items.map((item) => {
            const isActive = item.id === activeId;
            const padClass =
              item.level >= 3 ? "ps-16" : item.level === 2 ? "ps-12" : "ps-6";
            return (
              <li
                key={item.id}
                className={cn("web-references-menu-item", padClass)}
                data-toc-id={item.id}
              >
                <NextLink
                  href={`#${item.id}`}
                  className={cn(
                    "web-references-menu-link text-caption line-clamp-1 transition-colors",
                    isActive
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  )}
                >
                  {item.title}
                </NextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
