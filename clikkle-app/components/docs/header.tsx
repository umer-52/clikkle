"use client";

import { useDocsLayout } from "@/components/docs/docs-layout-context";
import { DocsConsoleCta } from "@/components/docs/docs-console-cta";
import Link from "next/link";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SearchModal } from "./search-modal";
import { isMac } from "@/lib/platform";

export function DocsHeader({
  isReferences = false,
  headerTransparent = true,
}: {
  isReferences?: boolean;
  /** Appwrite `is-transparent={variant !== 'expanded'}` */
  headerTransparent?: boolean;
}) {
  const { showSearch, setShowSearch } = useDocsLayout();
  const [searchModKey, setSearchModKey] = useState<"⌘" | "Ctrl">("Ctrl");

  useEffect(() => {
    setSearchModKey(isMac() ? "⌘" : "Ctrl");
  }, []);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowSearch(true);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [setShowSearch]);

  const GITHUB_STARS = "55.2K";
  const GITHUB_LINK = "https://github.com/clikkle";

  return (
    <header
      className={`web-main-header hidden w-full border-b border-[var(--color-border-subtle)] backdrop-blur-md dark:border-white/10 lg:block ${
        isReferences ? "is-reference" : "is-docs"
      } ${headerTransparent ? "is-transparent bg-[var(--bg-primary)]/90 dark:bg-[var(--bg-primary)]/80" : "bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)]"}`}
    >
      <div className="web-main-header-wrapper w-full">
        <div className="web-main-header-start flex min-w-0 flex-1 items-center gap-6">
          <Link
            className="group docs-header-logo aw-logo-link aw-focus-ring flex shrink-0 items-center gap-2.5"
            href="/"
            aria-label="Clikkle home"
          >
            <Image
              src="/clikkle/images/logos/logo.svg"
              alt="Clikkle"
              width={24}
              height={24}
              className="size-6 object-contain transition-opacity group-hover:opacity-90"
              priority
            />
            <span className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] transition-colors dark:text-white/90 dark:group-hover:text-white">
              Clikkle
            </span>
          </Link>

          <nav className="web-main-header-nav shrink-0" aria-label="Top">
            <ul className="web-main-header-nav-list">
              <li className="web-main-header-nav-item">
                <Link
                  href="/docs"
                  className="web-link text-[0.9375rem] font-medium text-[var(--color-text-primary)] no-underline transition-colors hover:text-[var(--color-brand-primary)] focus-visible:text-[var(--color-brand-primary)] dark:text-white/90 dark:hover:text-[var(--color-brand-primary)] dark:focus-visible:text-[var(--color-brand-primary)]"
                >
                  Docs
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ms-12 hidden min-w-0 flex-1 lg:flex">
            <button
              type="button"
              className="group flex h-10 w-full max-w-[400px] items-center justify-between rounded-lg border border-[var(--color-border-default)] bg-[var(--bg-secondary)] px-3 font-medium text-[var(--color-text-muted)] transition-all hover:border-[var(--color-border-strong)] hover:bg-[var(--color-smooth)] hover:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] dark:border-white/10 dark:bg-white/[0.02] dark:text-white/40 dark:hover:border-white/20 dark:hover:bg-white/[0.04] dark:hover:text-white/60"
              onClick={() => setShowSearch(true)}
            >
              <div className="flex items-center gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search"
                  aria-hidden
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span>Search in docs</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="inline-flex h-5 min-w-[1.5rem] items-center justify-center rounded border border-[var(--color-border-subtle)] bg-[var(--bg-primary)] px-1.5 text-[10px] font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] dark:border-transparent dark:bg-white/10 dark:text-white/60 dark:group-hover:bg-white/20 dark:group-hover:text-white">
                  {searchModKey}
                </kbd>
                <kbd className="inline-flex h-5 items-center justify-center rounded border border-[var(--color-border-subtle)] bg-[var(--bg-primary)] px-1.5 text-[10px] font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] dark:border-transparent dark:bg-white/10 dark:text-white/60 dark:group-hover:bg-white/20 dark:group-hover:text-white">
                  K
                </kbd>
              </div>
            </button>
          </div>
        </div>

        <div className="web-main-header-end flex items-center gap-2 md:gap-4">
          <a
            className="web-btn web-btn-secondary aw-github-button aw-focus-ring hidden lg:inline-flex"
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star Clikkle on GitHub"
          >
            <Star aria-hidden="true" />
            <span>Star on GitHub</span>
            <span className="aw-github-count">{GITHUB_STARS}</span>
          </a>

          <DocsConsoleCta className="web-btn web-btn-primary aw-cta-button aw-focus-ring hidden lg:inline-flex" />
        </div>
      </div>
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </header>
  );
}
