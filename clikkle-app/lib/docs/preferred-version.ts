"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "preferredVersion";

/** Appwrite `references.ts` — version string e.g. `1.8.x`, `cloud` */
export function getPreferredVersion(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(STORAGE_KEY);
}

export function setPreferredVersion(value: string | null) {
  if (typeof window === "undefined") return;
  if (value) window.localStorage.setItem(STORAGE_KEY, value);
  else window.localStorage.removeItem(STORAGE_KEY);
}

export function usePreferredVersion() {
  const [version, setVersionState] = useState<string | null>(null);

  useEffect(() => {
    setVersionState(getPreferredVersion());
  }, []);

  const setVersion = useCallback((next: string | null) => {
    setVersionState(next);
    setPreferredVersion(next);
  }, []);

  return { version, setVersion: setVersion };
}
