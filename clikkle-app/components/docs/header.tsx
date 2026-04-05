"use client";

import { useDocsLayout } from "@/components/docs/docs-layout-context";
import { DocsConsoleCta } from "@/components/docs/docs-console-cta";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SearchModal } from "./search-modal";
import { isMac } from "@/lib/platform";
import { GithubHeaderStar } from "@/components/github-header-star";

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
      className={`web-main-header ${
        isReferences ? "is-reference" : "is-docs"
      } ${headerTransparent ? "is-transparent" : ""}`}
    >
      <div className="web-main-header-wrapper">
        {/* Appwrite `src/lib/layouts/Docs.svelte`: `web-main-header-start flex-1` → logo, nav, then `web-u-margin-inline-start-48 flex flex-1` + `web-u-flex-basis-400` button */}
        <div className="web-main-header-start flex min-w-0 flex-1">
          {/* Width = side-nav rail (15rem) minus Appwrite `web-u-margin-inline-start-48` so search starts on the main column edge. */}
          <div className="docs-header-bar-leading min-w-0">
            <Link
              className="docs-header-logo flex min-w-0 max-w-full items-center gap-2.5"
              href="/"
              aria-label="Clikkle home"
            >
              <Image
                src="/clikkle/images/logos/logo.svg"
                alt="Clikkle"
                width={24}
                height={24}
                className="size-6 shrink-0 object-contain"
                priority
              />
              <span className="truncate text-xl font-bold tracking-tight text-[var(--color-text-primary)] dark:text-white/90">
                Clikkle
              </span>
            </Link>

            <nav className="web-main-header-nav shrink-0" aria-label="Top">
              <ul className="web-main-header-nav-list">
                <li className="web-main-header-nav-item">
                  <Link href="/docs" className="web-link">
                    Docs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="docs-header-search-row web-u-margin-inline-start-48 flex min-w-0 flex-1">
            <button
              type="button"
              className="web-input-button web-u-flex-basis-400 min-w-0"
              onClick={() => setShowSearch(true)}
            >
              <span className="web-icon-search" aria-hidden="true" />
              <span className="text">Search in docs</span>

              <div className="ml-auto flex gap-1">
                <span className="web-kbd">{searchModKey}</span>
                <span className="web-kbd">K</span>
              </div>
            </button>
          </div>
        </div>

        <div className="web-main-header-end">
          {/* Appwrite `Docs.svelte`: `flex gap-2` + `_main-header.scss` `.web-main-header-end` gap 8px */}
          <div className="flex shrink-0 gap-2">
            <a
              className="web-button is-text"
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubHeaderStar className="size-4" aria-hidden />
              <span className="text">Star on GitHub</span>
              <span className="web-inline-tag">{GITHUB_STARS}</span>
            </a>

            <DocsConsoleCta className="web-button is-primary" />
          </div>
        </div>
      </div>
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </header>
  );
}
