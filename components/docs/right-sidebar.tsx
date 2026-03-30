"use client";

import { useEffect, useState, useRef } from "react";

type TOCItem = {
  id: string;
  text: string;
  level: number;
};

export function RightSidebar() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // 1. Gather all H2 and H3 headings from the prose content
    const elements = Array.from(document.querySelectorAll("main h2, main h3"));
    
    // Assign IDs if they don't have them
    elements.forEach((el, index) => {
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/\s+/g, '-') || `heading-${index}`;
      }
    });

    const tocData: TOCItem[] = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: Number(el.nodeName.charAt(1)),
    }));
    
    setHeadings(tocData);

    // 2. Set up IntersectionObserver to track scroll
    const callback: IntersectionObserverCallback = (entries) => {
      // Find the first intersecting entry
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // We take the uppermost visible heading
        setActiveId(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -80% 0px", // Triggers when element is near the top 20% of the screen
      threshold: 1.0,
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="w-[240px] shrink-0 hidden xl:block h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto hide-scrollbar border-l border-white/10 py-8 pl-6">
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-semibold tracking-wide text-white uppercase mb-2">
          On this page
        </h4>
        <nav>
          <ul className="flex flex-col border-l border-white/10 space-y-1.5 list-none m-0 p-0">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              // Indent H3s further than H2s
              const paddingLeft = heading.level === 3 ? "pl-6" : "pl-3";
              return (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(heading.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                        setActiveId(heading.id);
                      }
                    }}
                    className={`block py-1 -ml-[1px] text-sm transition-colors border-l-2 ${paddingLeft} ${
                      isActive
                        ? "border-[#2D63FF] text-[#2D63FF] font-medium"
                        : "border-transparent text-aw-text-secondary hover:text-white hover:border-white/30"
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
