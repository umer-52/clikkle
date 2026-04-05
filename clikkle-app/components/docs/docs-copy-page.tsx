"use client";

/**
 * Appwrite `src/lib/components/blog/copy-as-markdown.svelte` — split "Copy page" + menu.
 * Uses `web-button is-secondary is-split` class system from `_button.scss`.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
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
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

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

  useEffect(
    () => () => {
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
    },
    []
  );

  return (
    <div
      ref={rootRef}
      className={cn("copy-ctl relative inline-flex items-center", className)}
    >
      <div className="split-button">
        <button
          type="button"
          disabled={copying}
          onClick={doCopy}
          onMouseLeave={resetCopied}
          aria-label="Copy page as Markdown"
          className="web-button is-secondary is-split is-split-first text-sm"
        >
          <span className="web-icon-copy text-sm" aria-hidden="true" />
          <span data-ignore="true" data-noindex="true">
            Copy page
          </span>
        </button>
        <button
          type="button"
          aria-expanded={open}
          aria-label="Open options"
          onClick={() => setOpen((v) => !v)}
          className="web-button is-secondary is-split is-split-last text-sm"
        >
          {open ? (
            <span className="web-icon-chevron-up" aria-hidden="true" />
          ) : (
            <span className="web-icon-chevron-down" aria-hidden="true" />
          )}
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
          className="web-select-menu is-normal absolute end-0 top-[calc(100%+4px)] z-[100] min-w-[200px] p-1"
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
                <span
                  className="web-icon-copy text-sm"
                  aria-hidden="true"
                />
                <span>Copy as Markdown</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                role="menuitem"
                className="docs-copy-page-menu-btn"
                onClick={viewAsMarkdown}
              >
                <span
                  className="web-icon-external-icon text-sm"
                  aria-hidden="true"
                />
                <span>View as Markdown</span>
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
