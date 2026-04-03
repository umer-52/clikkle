import { cn } from "@/lib/utils";

/** Shared with `DocsProse` and server doc pages (RSC-safe, no `"use client"`). */
export function getDocsProseSurfaceClasses(isArticleLayout: boolean) {
  return cn(
    "prose prose-blue max-w-none",
    "prose-slate prose-headings:font-aeonik-pro prose-headings:text-[var(--color-text-primary)]",
    "prose-p:text-[var(--color-text-secondary)] prose-strong:text-[var(--color-text-primary)]",
    "prose-li:text-[var(--color-text-secondary)] prose-li:marker:text-[var(--color-text-muted)]",
    "prose-blockquote:border-[var(--color-border-subtle)] prose-hr:border-[var(--color-border-subtle)]",
    "dark:prose-invert",
    isArticleLayout
      ? "dark:prose-headings:font-aeonik-pro dark:prose-p:text-white/70 dark:prose-strong:text-white/90 dark:prose-li:marker:text-white/40"
      : ""
  );
}
