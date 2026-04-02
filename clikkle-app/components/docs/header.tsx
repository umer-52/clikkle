"use client";

import { useDocsLayout } from "@/components/docs/docs-layout-context";
import Link from "next/link";
import { Star } from "lucide-react";
import React, { useEffect } from "react";
import Image from "next/image";
import { SearchModal } from "./search-modal";

export function DocsHeader({
  isReferences = false,
  headerTransparent = true,
}: {
  isReferences?: boolean;
  /** Appwrite `is-transparent={variant !== 'expanded'}` */
  headerTransparent?: boolean;
}) {
  const { showSearch, setShowSearch } = useDocsLayout();

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
  const CTA_LINK = "https://cloud.clikkle.com/register";

  return (
    <header
      className={`web-main-header sticky top-0 z-50 hidden w-full border-b border-[var(--color-border-subtle)] backdrop-blur-md dark:border-white/10 lg:block ${
        isReferences ? "is-reference" : "is-docs"
      } ${headerTransparent ? "is-transparent bg-[var(--bg-primary)]/90 dark:bg-[#19191c]/80" : "bg-[var(--bg-primary)] dark:bg-[#19191c]"}`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        
        {/* Left Section: Logo and Navigation */}
        <div className="flex flex-1 items-center gap-6">
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
            <span className="docs-header-logo__suffix ml-1 text-xl font-bold tracking-tight text-[var(--color-text-muted)] transition-colors dark:text-white/40">
              Docs
            </span>
          </Link>
          

          {/* Center Search Bar */}
          <div className="hidden lg:flex flex-1 ml-12">
            <button
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
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span>Search in docs</span>
              </div>
              <div className="flex gap-1 items-center">
                <kbd className="inline-flex h-5 items-center justify-center rounded border border-[var(--color-border-subtle)] bg-[var(--bg-primary)] px-1.5 text-[10px] font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] dark:border-transparent dark:bg-white/10 dark:text-white/60 dark:group-hover:bg-white/20 dark:group-hover:text-white">Ctrl</kbd>
                <kbd className="inline-flex h-5 items-center justify-center rounded border border-[var(--color-border-subtle)] bg-[var(--bg-primary)] px-1.5 text-[10px] font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] dark:border-transparent dark:bg-white/10 dark:text-white/60 dark:group-hover:bg-white/20 dark:group-hover:text-white">K</kbd>
              </div>
            </button>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-4">
          <a
            className="hidden lg:flex items-center gap-2 rounded-full border border-[var(--color-border-default)] bg-transparent px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-border-strong)] hover:bg-[var(--color-smooth)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] dark:border-white/10 dark:text-white dark:hover:border-white/20 dark:hover:bg-white/5"
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star Clikkle on GitHub"
          >
            <Star className="h-4 w-4" aria-hidden="true" />
            <span>Star on GitHub</span>
            <span className="ml-1 rounded-md bg-[var(--color-smooth)] px-1.5 py-0.5 text-xs font-semibold dark:bg-white/10">{GITHUB_STARS}</span>
          </a>

          <a 
            className="flex items-center justify-center rounded-full bg-[var(--color-brand-primary)] px-5 py-2 text-sm font-medium text-white shadow-[0_0_15px_rgba(45,99,255,0.3)] transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)] dark:focus:ring-offset-[#19191c]" 
            href={CTA_LINK}
          >
            Start building for free
          </a>
        </div>
      </div>
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </header>
  );
}
