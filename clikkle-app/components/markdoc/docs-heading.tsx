"use client";

import { useTutorialHeadingsOptional } from "@/components/docs/tutorial-headings-context";
import { slugify } from "@/lib/markdoc/slugify";
import { cn } from "@/lib/utils";
import React, { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

const LEVEL_CLASS: Record<number, string> = {
  1: "text-3xl font-aeonik-pro font-bold text-[var(--color-text-primary)] mt-12 mb-6 dark:text-white",
  2: "text-2xl font-aeonik-pro font-bold text-[var(--color-text-primary)] mt-10 mb-4 dark:text-white",
  3: "text-xl font-aeonik-pro font-bold text-[var(--color-text-primary)] mt-8 mb-4 dark:text-white",
};

/**
 * Appwrite `Heading.svelte`: rendered tag is `h{level + 1}`, children wrapped in `<a href="#id">`.
 */
export function DocsHeading({
  level,
  id: elementId,
  children,
  step,
  /** Appwrite reference `Heading.svelte`: no utility classes on the heading tag. */
  articleReference,
}: {
  level: number;
  id?: string;
  children: ReactNode;
  step?: number;
  articleReference?: boolean;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const tagName = `h${Math.min(6, level + 1)}`;
  const [derivedId, setDerivedId] = useState(elementId ?? "");
  const tutorialCtx = useTutorialHeadingsOptional();

  useLayoutEffect(() => {
    if (elementId) {
      setDerivedId(elementId);
      return;
    }
    const el = ref.current;
    if (el?.innerText) {
      setDerivedId(slugify(el.innerText));
    }
  }, [elementId, children]);

  const resolvedId = elementId || derivedId;
  const href = resolvedId ? `#${resolvedId}` : "#";
  const cls = articleReference
    ? undefined
    : cn(
        LEVEL_CLASS[level] ??
          "text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-4 dark:text-white",
        "scroll-mt-24"
      );

  const tutorialCtxRef = useRef(tutorialCtx);
  tutorialCtxRef.current = tutorialCtx;

  useEffect(() => {
    const ctx = tutorialCtxRef.current;
    if (!ctx || !resolvedId || articleReference) return;

    const el = ref.current;
    if (!el) return;

    const title = el.innerText?.trim() || "";
    ctx.register(resolvedId, { title, level, step });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ctx.setVisible(resolvedId, entry.isIntersecting);
        });
      },
      { root: null, threshold: 0, rootMargin: "-100px 0px -80% 0px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      ctx.unregister(resolvedId);
    };
  }, [resolvedId, level, step, articleReference]);

  return React.createElement(
    tagName,
    { ref, id: resolvedId || undefined, suppressHydrationWarning: true, className: cls },
    <a href={href} className="no-underline hover:underline">
      {children}
    </a>
  );
}
