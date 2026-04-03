"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export type ThemeSetting = "dark" | "light" | "system";

type ThemeContextValue = {
  theme: ThemeSetting;
  setTheme: (t: ThemeSetting) => void;
  resolvedTheme: "dark" | "light";
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "theme";

function isTheme(v: unknown): v is ThemeSetting {
  return v === "dark" || v === "light" || v === "system";
}

function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStored(): ThemeSetting {
  if (typeof window === "undefined") return "dark";
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (isTheme(raw)) return raw;
  } catch {
    /* ignore */
  }
  return "dark";
}

/**
 * Svelte `applyTheme`: resolved `dark` | `light` on **body** (and we mirror on `html`
 * so Tailwind `@custom-variant dark` and design tokens on `:root.light` / `.dark` match).
 * Svelte `currentTheme.set` also sets `document.documentElement.style.colorScheme` to the
 * stored value (`dark` | `light` | `system`); CSS accepts `light dark` for system.
 */
function applyColorScheme(theme: ThemeSetting) {
  const html = document.documentElement;
  if (theme === "system") {
    html.style.colorScheme = "light dark";
  } else {
    html.style.colorScheme = theme;
  }
}

function applyDom(theme: ThemeSetting) {
  if (typeof document === "undefined") return;
  const resolved = theme === "system" ? getSystemTheme() : theme;
  const html = document.documentElement;
  const body = document.body;
  html.classList.remove("dark", "light");
  body.classList.remove("dark", "light");
  html.classList.add(resolved);
  body.classList.add(resolved);
  applyColorScheme(theme);
}

function isDocsPathname(pathname: string): boolean {
  return /(^|\/)docs(\/|$)/.test(pathname);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [theme, setThemeState] = React.useState<ThemeSetting>("dark");
  const [resolvedTheme, setResolvedTheme] = React.useState<"dark" | "light">("dark");

  /* Read persisted preference once; route-scoped application happens below. */
  React.useLayoutEffect(() => {
    const initial = readStored();
    setThemeState(initial);
  }, []);

  /*
   * Appwrite parity:
   * - /docs routes use user-selected theme.
   * - all non-doc routes are hard-forced to dark.
   */
  React.useLayoutEffect(() => {
    const currentPath =
      pathname ??
      (typeof window !== "undefined" ? window.location.pathname : "/");
    const docsRoute = isDocsPathname(currentPath);
    const effectiveTheme: ThemeSetting = docsRoute ? theme : "dark";
    const resolved = effectiveTheme === "system" ? getSystemTheme() : effectiveTheme;

    setResolvedTheme(resolved);
    applyDom(effectiveTheme);
  }, [pathname, theme]);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const currentPath =
        pathname ??
        (typeof window !== "undefined" ? window.location.pathname : "/");
      if (!isDocsPathname(currentPath)) return;

      const t = readStored();
      if (t !== "system") return;
      const r = getSystemTheme();
      setResolvedTheme(r);
      applyDom("system");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [pathname]);

  const setTheme = React.useCallback((t: ThemeSetting) => {
    setThemeState(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* ignore */
    }
    const resolved = t === "system" ? getSystemTheme() : t;
    setResolvedTheme(resolved);
  }, []);

  const value = React.useMemo(
    () => ({ theme, setTheme, resolvedTheme }),
    [theme, setTheme, resolvedTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
