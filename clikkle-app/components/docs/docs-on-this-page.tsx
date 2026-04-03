"use client";

import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

export type DocsOnThisPageItem = {
  id: string;
  title: string;
  level: number;
};

const ROW_STRIDE_PX = 38;
const LINE_HEIGHT_PX = 24;

/**
 * Appwrite `table-of-contents.svelte`: sticky rail, list scrolls inside max height,
 * active item + moving vertical line synced to scroll (window + hashchange).
 */
export function DocsOnThisPage({ items }: { items: DocsOnThisPageItem[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [listHeight, setListHeight] = useState(0);
  const [activeId, setActiveId] = useState<string>("");
  const [lineY, setLineY] = useState(0);

  const resolvedActiveIndex = items.findIndex((item) => item.id === activeId);

  const updateLinePosition = useCallback(() => {
    const height = listRef.current?.clientHeight ?? 0;
    setListHeight(height);
    const idx = items.findIndex((item) => item.id === activeId);
    if (idx < 0 || height <= 0) {
      setLineY(0);
      return;
    }
    setLineY(Math.min(idx * ROW_STRIDE_PX, Math.max(0, height - LINE_HEIGHT_PX)));
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

  useEffect(() => {
    if (!items.length) return;

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((n): n is HTMLElement => n != null);

    if (elements.length === 0) return;

    const pickActive = () => {
      const hash = typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "";
      if (hash && items.some((i) => i.id === hash)) {
        setActiveId(hash);
        return;
      }

      const visible = elements
        .map((node) => ({
          node,
          rect: node.getBoundingClientRect(),
        }))
        .filter((o) => o.rect.top < window.innerHeight * 0.35 && o.rect.bottom > 0)
        .sort((a, b) => a.rect.top - b.rect.top);

      if (visible.length > 0) {
        setActiveId(visible[0].node.id);
        return;
      }

      let best = elements[0];
      let bestDist = Infinity;
      for (const node of elements) {
        const top = node.getBoundingClientRect().top;
        const dist = Math.abs(top - 140);
        if (dist < bestDist) {
          bestDist = dist;
          best = node;
        }
      }
      setActiveId(best.id);
    };

    pickActive();

    const observer = new IntersectionObserver(
      () => {
        pickActive();
      },
      {
        rootMargin: "-12% 0px -78% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 1],
      }
    );

    elements.forEach((node) => observer.observe(node));
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("hashchange", pickActive);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("hashchange", pickActive);
    };
  }, [itemsKey]);

  useEffect(() => {
    updateLinePosition();
  }, [activeId, updateLinePosition]);

  if (!items.length) return null;

  return (
    <div className="web-references-menu-content web-references-menu-sticky-inner">
      <h5 className="web-references-menu-title text-eyebrow font-aeonik-fono uppercase">
        On This Page
      </h5>
      <div className="docs-toc-body">
        <ul
          ref={listRef}
          className="web-references-menu-list docs-toc-scroll flex list-none flex-col gap-4"
        >
          {items.map((item) => {
            const isActive = item.id === activeId;
            const padClass =
              item.level >= 3 ? "ps-16" : item.level === 2 ? "ps-12" : "ps-6";
            return (
              <li key={item.id} className={cn("web-references-menu-item", padClass)}>
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
      </div>
    </div>
  );
}
