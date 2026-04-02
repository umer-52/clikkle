"use client";

import { useCallback, useEffect, useState } from "react";
import { Platform, VALID_PLATFORMS } from "@/lib/markdoc/code";

const STORAGE_KEY = "preferredPlatform";

function readStoredPlatform(): Platform {
  if (typeof window === "undefined") return Platform.ClientWeb;
  const stored = window.localStorage.getItem(STORAGE_KEY) ?? Platform.ClientWeb;
  if (VALID_PLATFORMS.has(stored)) return stored as Platform;
  return Platform.ClientWeb;
}

export function getPreferredPlatform(): Platform {
  return readStoredPlatform();
}

export function setPreferredPlatform(value: Platform) {
  if (typeof window === "undefined") return;
  if (value && VALID_PLATFORMS.has(value)) {
    window.localStorage.setItem(STORAGE_KEY, value);
  }
}

/** Syncs with localStorage like Appwrite `preferredPlatform` store. */
export function usePreferredPlatform() {
  const [platform, setPlatform] = useState<Platform>(Platform.ClientWeb);

  useEffect(() => {
    setPlatform(readStoredPlatform());
  }, []);

  const update = useCallback((next: Platform) => {
    setPlatform(next);
    setPreferredPlatform(next);
  }, []);

  return { platform, setPlatform: update };
}
