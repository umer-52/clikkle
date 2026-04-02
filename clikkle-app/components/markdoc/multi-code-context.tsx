"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getPreferredPlatform, setPreferredPlatform, usePreferredPlatform } from "@/lib/markdoc/preferred-platform";
import { Platform, VALID_PLATFORMS } from "@/lib/markdoc/code";

/** Appwrite `MultiCode.svelte` `tabsSelection.subscribe` — bumps when doc tabs switch. */
export const TabGenerationContext = createContext<number | null>(null);

export function useTabGenerationOptional(): number | null {
  return useContext(TabGenerationContext);
}

type Registry = {
  bodies: Map<string, string>;
  langs: string[];
};

export type MultiCodeContextValue = {
  selected: string | null;
  setSelected: (lang: string | null) => void;
  langs: readonly string[];
  registerSnippet: (language: string, content: string) => void;
  content: string;
};

const MultiCodeContext = createContext<MultiCodeContextValue | null>(null);

export function useMultiCodeOptional() {
  return useContext(MultiCodeContext);
}

/**
 * Appwrite `MultiCode.svelte` — context stores, `selected`/`preferredPlatform` two-way sync,
 * onMount init, `tabs-selection` subscription.
 */
export function MultiCodeProvider({ children }: { children: ReactNode }) {
  const { platform: preferredPlatform, setPlatform: setPreferredPlatformState } = usePreferredPlatform();
  const [registry, setRegistry] = useState<Registry>({ bodies: new Map(), langs: [] });
  const [selected, setSelectedState] = useState<string | null>(null);
  const initDoneRef = useRef(false);
  const hasMountedRef = useRef(false);
  const tabGen = useTabGenerationOptional();

  const langsKey = registry.langs.join("\0");

  const registerSnippet = useCallback((language: string, body: string) => {
    setRegistry((prev) => {
      const bodies = new Map(prev.bodies);
      bodies.set(language, body);
      const langs = prev.langs.includes(language) ? prev.langs : [...prev.langs, language];
      return { bodies, langs };
    });
  }, []);

  const setSelected = useCallback(
    (lang: string | null) => {
      setSelectedState(lang);
      if (lang && VALID_PLATFORMS.has(lang)) {
        setPreferredPlatform(lang as Platform);
        setPreferredPlatformState(lang as Platform);
      }
    },
    [setPreferredPlatformState]
  );

  const content = selected ? registry.bodies.get(selected) ?? "" : "";

  useLayoutEffect(() => {
    if (registry.langs.length === 0 || initDoneRef.current) return;
    initDoneRef.current = true;
    const pref = getPreferredPlatform();
    if (pref && registry.langs.includes(pref)) {
      setSelectedState(pref);
    } else if (pref && !registry.langs.includes(pref)) {
      setSelectedState(registry.langs[0] ?? null);
    } else {
      setSelectedState(registry.langs[0] ?? null);
    }
    hasMountedRef.current = true;
  }, [langsKey, registry.langs]);

  /* Appwrite `preferredPlatform.subscribe` — read storage each run so we are not beaten by `usePreferredPlatform` hydration. */
  useEffect(() => {
    if (!initDoneRef.current || registry.langs.length === 0) return;
    const pref = getPreferredPlatform();
    if (pref && registry.langs.includes(pref) && pref !== selected) {
      setSelectedState(pref);
    }
  }, [preferredPlatform, langsKey, selected, registry.langs]);

  useEffect(() => {
    if (tabGen === null) return;
    if (!hasMountedRef.current) return;
    const pref = getPreferredPlatform();
    if (registry.langs.length > 0 && pref && !registry.langs.includes(pref)) {
      setSelectedState(registry.langs[0] ?? null);
    }
  }, [tabGen, langsKey, registry.langs]);

  const value = useMemo(
    () => ({
      selected,
      setSelected,
      langs: registry.langs,
      registerSnippet,
      content,
    }),
    [selected, setSelected, registry.langs, registerSnippet, content]
  );

  return <MultiCodeContext.Provider value={value}>{children}</MultiCodeContext.Provider>;
}
