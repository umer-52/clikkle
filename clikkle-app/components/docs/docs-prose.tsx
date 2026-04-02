"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

export function DocsProse({
  isArticleLayout,
  children,
}: {
  isArticleLayout: boolean;
  children: ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <article
      className={cn(
        "prose prose-blue max-w-none",
        isLight
          ? cn(
              "prose-slate prose-headings:font-aeonik-pro prose-headings:text-[var(--color-text-primary)]",
              "prose-p:text-[var(--color-text-secondary)] prose-strong:text-[var(--color-text-primary)]",
              "prose-li:text-[var(--color-text-secondary)] prose-li:marker:text-[var(--color-text-muted)]",
              "prose-blockquote:border-[var(--color-border-subtle)] prose-hr:border-[var(--color-border-subtle)]",
              isArticleLayout ? "mt-2" : "mt-10"
            )
          : cn(
              "prose-invert",
              isArticleLayout
                ? "mt-2 prose-headings:font-aeonik-pro prose-p:text-white/70 prose-strong:text-white/90 prose-li:marker:text-white/40"
                : "mt-10"
            )
      )}
    >
      {children}
    </article>
  );
}
