"use client";

import type { DocsLayoutVariant } from "@/lib/docs/nav-tree";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/** Appwrite `Docs.svelte` `layoutState` + `DocsLayoutVariant` */
export type DocsLayoutState = {
  showReferences: boolean;
  showSidenav: boolean;
  showSearch: boolean;
  currentVariant: DocsLayoutVariant | null;
};

const defaultState: DocsLayoutState = {
  showReferences: false,
  showSidenav: false,
  showSearch: false,
  currentVariant: null,
};

type DocsLayoutContextValue = DocsLayoutState & {
  setLayoutState: (u: Partial<DocsLayoutState>) => void;
  toggleReferences: () => void;
  toggleSidenav: () => void;
  setShowSearch: (open: boolean) => void;
  syncVariant: (v: DocsLayoutVariant) => void;
};

const DocsLayoutContext = createContext<DocsLayoutContextValue | null>(null);

export function DocsLayoutProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DocsLayoutState>(defaultState);

  const setLayoutState = useCallback((u: Partial<DocsLayoutState>) => {
    setState((prev) => ({ ...prev, ...u }));
  }, []);

  const toggleReferences = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showReferences: !prev.showReferences,
      showSidenav: false,
    }));
  }, []);

  const toggleSidenav = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showReferences: false,
      showSidenav: !prev.showSidenav,
    }));
  }, []);

  const setShowSearch = useCallback((open: boolean) => {
    setState((prev) => ({ ...prev, showSearch: open }));
  }, []);

  const syncVariant = useCallback((v: DocsLayoutVariant) => {
    setState((prev) => ({ ...prev, currentVariant: v }));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setState((prev) => {
          if (!prev.showReferences && !prev.showSidenav) return prev;
          return { ...prev, showReferences: false, showSidenav: false };
        });
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const syncOverflow = () => {
      const mobile = window.matchMedia("(max-width: 1023px)").matches;
      document.body.style.overflow =
        state.showSidenav && mobile ? "hidden" : "";
    };
    syncOverflow();
    const mq = window.matchMedia("(max-width: 1023px)");
    mq.addEventListener("change", syncOverflow);
    return () => {
      mq.removeEventListener("change", syncOverflow);
      document.body.style.overflow = "";
    };
  }, [state.showSidenav]);

  const value = useMemo(
    () => ({
      ...state,
      setLayoutState,
      toggleReferences,
      toggleSidenav,
      setShowSearch,
      syncVariant,
    }),
    [state, setLayoutState, toggleReferences, toggleSidenav, setShowSearch, syncVariant]
  );

  return <DocsLayoutContext.Provider value={value}>{children}</DocsLayoutContext.Provider>;
}

export function useDocsLayout() {
  const ctx = useContext(DocsLayoutContext);
  if (!ctx) throw new Error("useDocsLayout must be used within DocsLayoutProvider");
  return ctx;
}

export function useDocsLayoutOptional() {
  return useContext(DocsLayoutContext);
}
