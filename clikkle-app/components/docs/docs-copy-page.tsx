"use client";

/**
 * Appwrite `src/lib/components/blog/copy-as-markdown.svelte` — split “Copy page” + menu
 * (Copy as Markdown, View as Markdown). Theme tokens only (no Appwrite pink).
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Copy, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function DocsCopyPage({
  markdown,
  className,
}: {
  markdown: string;
  className?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const resetCopied = useCallback(() => {
    if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
    setCopied(false);
  }, []);

  const doCopy = useCallback(async () => {
    setCopying(true);
    resetCopied();
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      copiedTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    } finally {
      setCopying(false);
    }
  }, [markdown, resetCopied]);

  const copyAndClose = useCallback(async () => {
    await doCopy();
    setOpen(false);
  }, [doCopy]);

  const viewAsMarkdown = useCallback(() => {
    const base = pathname.endsWith(".md") ? pathname : `${pathname}.md`;
    window.open(base, "_blank", "noopener,noreferrer");
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => () => {
    if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
  }, []);

  return (
    <div ref={rootRef} className={cn("docs-copy-page relative inline-flex items-center", className)}>
      <div className="docs-copy-page-split flex items-stretch overflow-hidden rounded-lg border border-[var(--color-border-default)] dark:border-white/12">
        <button
          type="button"
          disabled={copying}
          onClick={doCopy}
          onMouseLeave={resetCopied}
          aria-label="Copy page as Markdown"
          className="docs-copy-page-split-first inline-flex h-9 items-center gap-2 px-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-smooth)] disabled:opacity-50 dark:text-white dark:hover:bg-white/[0.06]"
        >
          <Copy className="size-4 shrink-0 opacity-80" aria-hidden />
          <span data-ignore="true" data-noindex="true">
            Copy page
          </span>
        </button>
        <button
          type="button"
          aria-expanded={open}
          aria-label="Open options"
          onClick={() => setOpen((v) => !v)}
          className="docs-copy-page-split-last inline-flex h-9 w-9 items-center justify-center border-l border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-smooth)] dark:border-white/12 dark:text-white/70 dark:hover:bg-white/[0.06]"
        >
          {open ? <ChevronUp className="size-4" aria-hidden /> : <ChevronDown className="size-4" aria-hidden />}
        </button>
      </div>

      {copied ? (
        <span
          className="pointer-events-none absolute end-0 top-full z-10 mt-1 whitespace-nowrap rounded-md border border-[var(--color-border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 text-xs text-[var(--color-text-primary)] shadow-sm dark:border-white/10 dark:bg-[var(--bg-secondary)] dark:text-white"
          role="status"
        >
          Copied
        </span>
      ) : null}

      {open ? (
        <div
          className="docs-copy-page-menu web-select-menu is-normal absolute end-0 top-[calc(100%+4px)] z-[100] min-w-[200px] p-1"
          role="menu"
        >
          <ul className="m-0 list-none p-0 text-[0.875rem] leading-snug">
            <li>
              <button
                type="button"
                role="menuitem"
                className="docs-copy-page-menu-btn"
                onClick={() => void copyAndClose()}
              >
                <Copy className="size-4 shrink-0 opacity-80" aria-hidden />
                <span>Copy as Markdown</span>
              </button>
            </li>
            <li>
              <button type="button" role="menuitem" className="docs-copy-page-menu-btn" onClick={viewAsMarkdown}>
                <ExternalLink className="size-4 shrink-0 opacity-80" aria-hidden />
                <span>View as Markdown</span>
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
