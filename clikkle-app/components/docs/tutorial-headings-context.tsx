"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

/** Always first in `order` so `toc.slice(1)` matches Appwrite `DocsTutorial.svelte`. */
export const DOC_TUTORIAL_MAIN_HEADING_ID = "doc-tutorial-step-title";

export type TutorialHeadingEntry = {
  title: string;
  level: number;
  step?: number;
  visible: boolean;
};

type Registry = {
  order: string[];
  entries: Record<string, TutorialHeadingEntry>;
};

/**
 * Appwrite `Article.svelte` / `Tutorial.svelte` `headings` context + `Heading.svelte` registration.
 */
export function TutorialHeadingsProvider({ children }: { children: ReactNode }) {
  const [version, setVersion] = useState(0);
  const registry = useRef<Registry>({ order: [], entries: {} });
  const bumpScheduled = useRef(false);

  /** Coalesce many heading registers / visibility updates into one re-render (avoids DevTools / subtree churn). */
  const scheduleBump = useCallback(() => {
    if (bumpScheduled.current) return;
    bumpScheduled.current = true;
    queueMicrotask(() => {
      bumpScheduled.current = false;
      setVersion((v) => v + 1);
    });
  }, []);

  const register = useCallback(
    (id: string, init: { title: string; level: number; step?: number }) => {
      const r = registry.current;
      if (!r.entries[id]) {
        if (id === DOC_TUTORIAL_MAIN_HEADING_ID) {
          r.order.unshift(id);
        } else {
          r.order.push(id);
        }
      }
      r.entries[id] = { ...init, visible: r.entries[id]?.visible ?? false };
      scheduleBump();
    },
    [scheduleBump]
  );

  const unregister = useCallback(
    (id: string) => {
      const r = registry.current;
      delete r.entries[id];
      r.order = r.order.filter((x) => x !== id);
      scheduleBump();
    },
    [scheduleBump]
  );

  const setVisible = useCallback(
    (id: string, visible: boolean) => {
      const r = registry.current;
      if (!r.entries[id]) return;
      if (r.entries[id].visible === visible) return;
      r.entries[id] = { ...r.entries[id], visible };
      scheduleBump();
    },
    [scheduleBump]
  );

  const value = useMemo(
    () => ({
      register,
      unregister,
      setVisible,
      getSnapshot: () => registry.current,
      version,
    }),
    [register, unregister, setVisible, version]
  );

  return (
    <TutorialHeadingsContext.Provider value={value}>{children}</TutorialHeadingsContext.Provider>
  );
}

type Ctx = {
  register: (id: string, init: { title: string; level: number; step?: number }) => void;
  unregister: (id: string) => void;
  setVisible: (id: string, visible: boolean) => void;
  getSnapshot: () => Registry;
  version: number;
};

const TutorialHeadingsContext = createContext<Ctx | null>(null);

export function useTutorialHeadingsOptional() {
  return useContext(TutorialHeadingsContext);
}

export function useTutorialHeadingsList(): Array<{
  id: string;
  href: string;
  title: string;
  level: number;
  step?: number;
  selected: boolean;
}> {
  const ctx = useContext(TutorialHeadingsContext);
  if (!ctx) return [];
  const { order, entries } = ctx.getSnapshot();

  let selectedId: string | undefined;
  for (const id of order) {
    if (entries[id]?.visible) {
      selectedId = id;
      break;
    }
  }

  return order.map((id) => {
    const e = entries[id];
    return {
      id,
      href: `#${id}`,
      title: e?.title ?? "",
      level: e?.level ?? 2,
      step: e?.step,
      selected: selectedId === id,
    };
  });
}
