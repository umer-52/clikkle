"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { slugify } from "@/lib/markdoc/slugify";
import { TabGenerationContext } from "@/components/markdoc/multi-code-context";

type Trigger = { id: string; title: string };

type TabsCtxValue = {
  register: (t: Trigger) => () => void;
  activeId: string;
  setActiveId: (id: string) => void;
};

const TabsCtx = createContext<TabsCtxValue | null>(null);

export function useDocsTabsOptional() {
  return useContext(TabsCtx);
}

/**
 * Appwrite `Tabs.svelte` + `melt/builders` Tabs — triggers, first 7 + More (desktop),
 * first 2 + More (mobile). `TabGenerationContext` feeds `MultiCode` `tabs-selection` parity.
 */
export function Tabs({ children }: { children: React.ReactNode }) {
  const [triggers, setTriggers] = useState<Trigger[]>([]);
  const [activeId, setActiveId] = useState("");
  const [tabGeneration, setTabGeneration] = useState(0);

  const register = useCallback((t: Trigger) => {
    setTriggers((prev) => {
      if (prev.some((x) => x.id === t.id)) return prev;
      return [...prev, t];
    });
    return () => {
      setTriggers((prev) => prev.filter((x) => x.id !== t.id));
    };
  }, []);

  useEffect(() => {
    if (triggers.length > 0 && !triggers.some((x) => x.id === activeId)) {
      setActiveId(triggers[0].id);
    }
  }, [triggers, activeId]);

  useEffect(() => {
    setTabGeneration((g) => g + 1);
  }, [activeId]);

  const ctx = useMemo(
    () => ({
      register,
      activeId,
      setActiveId,
    }),
    [register, activeId]
  );

  const desktopPrimary = triggers.slice(0, 7);
  const desktopMore = triggers.slice(7);
  const mobilePrimary = triggers.slice(0, 2);
  const mobileMore = triggers.slice(2);

  return (
    <TabGenerationContext.Provider value={tabGeneration}>
      <TabsCtx.Provider value={ctx}>
        <div className="dark:bg-greyscale-850/90 not-prose mt-4 mb-8 flex flex-col gap-1 rounded-2xl border border-black/8 bg-white/90 px-6 pt-4 pb-6 outline-0 dark:border-white/10">
          <div className="flex items-center gap-4 overflow-scroll [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="hidden items-center gap-4 sm:flex">
              {desktopPrimary.map(({ id, title }) => (
                <button
                  key={id}
                  type="button"
                  className={cn(
                    "shrink-0 rounded-t-[0.625rem] text-center hover:bg-white/4",
                    "relative cursor-pointer bg-clip-padding px-1 py-[0.625rem] font-light outline-none",
                    "after:relative after:top-1 after:bottom-0 after:block after:h-px after:transition-all",
                    activeId === id && "after:bg-(--color-primary)"
                  )}
                  onClick={() => setActiveId(id)}
                >
                  {title}
                </button>
              ))}
              {desktopMore.length > 0 ? (
                <label className="sr-only" htmlFor="docs-tabs-more-desktop">
                  More tabs
                </label>
              ) : null}
              {desktopMore.length > 0 ? (
                <select
                  id="docs-tabs-more-desktop"
                  className="markdoc-tabs-more-select max-w-[140px] shrink-0 rounded-md border-0 bg-transparent py-[0.625rem] text-sm font-light text-[var(--color-text-primary)] dark:text-white/90"
                  value={desktopMore.some((t) => t.id === activeId) ? activeId : ""}
                  onChange={(e) => {
                    if (e.target.value) setActiveId(e.target.value);
                  }}
                >
                  <option value="">More</option>
                  {desktopMore.map(({ id, title }) => (
                    <option key={id} value={id}>
                      {title}
                    </option>
                  ))}
                </select>
              ) : null}
            </div>
            <div className="flex items-center gap-4 sm:hidden">
              {mobilePrimary.map(({ id, title }) => (
                <button
                  key={id}
                  type="button"
                  className={cn(
                    "shrink-0 rounded-t-[0.625rem] text-center hover:bg-white/4",
                    "relative cursor-pointer bg-clip-padding px-1 py-[0.625rem] font-light outline-none",
                    "after:relative after:top-1 after:bottom-0 after:block after:h-px after:transition-all",
                    activeId === id && "after:bg-(--color-primary)"
                  )}
                  onClick={() => setActiveId(id)}
                >
                  {title}
                </button>
              ))}
              {mobileMore.length > 0 ? (
                <label className="sr-only" htmlFor="docs-tabs-more-mobile">
                  More tabs
                </label>
              ) : null}
              {mobileMore.length > 0 ? (
                <select
                  id="docs-tabs-more-mobile"
                  className="markdoc-tabs-more-select max-w-[120px] shrink-0 rounded-md border-0 bg-transparent py-[0.625rem] text-sm font-light text-[var(--color-text-primary)] dark:text-white/90"
                  value={mobileMore.some((t) => t.id === activeId) ? activeId : ""}
                  onChange={(e) => {
                    if (e.target.value) setActiveId(e.target.value);
                  }}
                >
                  <option value="">More</option>
                  {mobileMore.map(({ id, title }) => (
                    <option key={id} value={id}>
                      {title}
                    </option>
                  ))}
                </select>
              ) : null}
            </div>
          </div>
          {children}
        </div>
      </TabsCtx.Provider>
    </TabGenerationContext.Provider>
  );
}

export function TabsItem({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  const ctx = useContext(TabsCtx);
  const tabId = id?.trim() ? id : `tab-${slugify(title)}`;

  useEffect(() => {
    if (!ctx) return;
    return ctx.register({ id: tabId, title });
  }, [ctx, tabId, title]);

  if (!ctx) {
    return <div className="border-smooth border-t pt-4">{children}</div>;
  }

  return (
    <div hidden={ctx.activeId !== tabId} className="border-smooth border-t pt-4">
      {children}
    </div>
  );
}
