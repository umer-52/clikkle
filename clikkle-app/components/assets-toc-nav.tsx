"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { CSSProperties, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  label: string;
}

interface AssetsTocNavProps {
  items: TocItem[];
}

export function AssetsTocNav({ items }: AssetsTocNavProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [showToc, setShowToc] = useState(false);

  const activeIndex = useMemo(() => {
    const index = items.findIndex((item) => item.id === activeId);
    return index >= 0 ? index : 0;
  }, [activeId, items]);

  const progress =
    items.length > 1 ? Math.min(100, (activeIndex / (items.length - 1)) * 100) : 0;

  const handleScroll = useCallback(() => {
    const activationOffset = window.innerWidth >= 1024 ? 132 : 120;
    const current = items.reduce(
      (best, item, index) => {
        const el = document.getElementById(item.id);
        if (!el) return best;

        const top = el.getBoundingClientRect().top;
        if (top <= activationOffset && top > best.top) {
          return { id: item.id, index, top };
        }

        return best;
      },
      { id: items[0]?.id ?? "", index: 0, top: -Infinity }
    );

    if (current.id) {
      setActiveId(current.id);
      return;
    }

    const firstVisible = items.find((item) => {
      const el = document.getElementById(item.id);
      return el ? el.getBoundingClientRect().top > activationOffset : false;
    });

    if (firstVisible) setActiveId(firstVisible.id);
  }, [items]);

  useEffect(() => {
    const handleResize = () => setShowToc(window.innerWidth >= 1024);
    const frame = window.requestAnimationFrame(() => {
      handleResize();
      handleScroll();
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll]);

  const handleItemClick = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

    if (window.innerWidth < 1024) {
      setShowToc(false);
    }
  };

  return (
    <section className="assets-toc web-mobile-header">
      <div className="assets-toc-mobile-toggle">
        <button
          type="button"
          className="flex w-full items-center justify-between"
          aria-expanded={showToc}
          aria-controls="assets-toc-list"
          onClick={() => setShowToc((value) => !value)}
        >
          <span className="text-description">Table of contents</span>
          <span
            aria-hidden="true"
            className={cn("assets-toc-toggle-icon", showToc ? "is-open" : "")}
          />
        </button>
      </div>

      <aside
        className={cn("assets-toc-side web-grid-120-1fr-auto-side", !showToc && "is-closed")}
        aria-label="Table of contents"
      >
        <nav className="web-page-steps" aria-label="Table of contents">
          <div
            className="web-page-steps-location assets-toc-location"
            style={{ "--location": `${progress}%` } as CSSProperties}
            aria-hidden="true"
          >
            <span className="web-page-steps-location-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#assets_toc_clip)">
                  <g filter="url(#assets_toc_blur)">
                    <circle cx="8" cy="8" r="8" fill="url(#assets_toc_fill)" fillOpacity="0.32" />
                    <circle
                      cx="8"
                      cy="8"
                      r="7.75"
                      stroke="url(#assets_toc_stroke)"
                      strokeWidth="0.5"
                    />
                  </g>
                  <circle cx="8" cy="7.992" r="3" fill="white" />
                </g>
                <defs>
                  <filter
                    id="assets_toc_blur"
                    x="-200"
                    y="-200"
                    width="416"
                    height="416"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="100" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="assets_toc_fill"
                    x1="2.021"
                    y1="1.108"
                    x2="16.387"
                    y2="17.29"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.4" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="assets_toc_stroke"
                    x1="7.456"
                    y1="-1.106"
                    x2="5.538"
                    y2="17.997"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.16" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="assets_toc_clip">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>

          <div id="assets-toc-list" className="toc-tree-holder">
            <ul className="web-page-steps-list text-sub-body font-medium">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(activeId === item.id && "is-selected")}
                    onClick={handleItemClick(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </section>
  );
}
