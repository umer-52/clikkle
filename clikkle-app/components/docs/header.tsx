"use client";

import { useDocsLayout } from "@/components/docs/docs-layout-context";
import { DocsConsoleCta } from "@/components/docs/docs-console-cta";
import Link from "next/link";
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
      className={`web-main-header hidden lg:block ${
        isReferences ? "is-reference" : "is-docs"
      } ${headerTransparent ? "is-transparent" : ""}`}
    >
      <div className="web-main-header-wrapper">
        <div className="web-main-header-start flex-1">
          <Link
            className="docs-header-logo flex shrink-0 items-center gap-2.5"
            href="/"
            aria-label="Clikkle home"
          >
            <Image
              src="/clikkle/images/logos/logo.svg"
              alt="Clikkle"
              width={24}
              height={24}
              className="size-6 object-contain"
              priority
            />
            <span className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] dark:text-white/90">
              Clikkle
            </span>
          </Link>

          <nav className="web-main-header-nav" aria-label="Top">
            <ul className="web-main-header-nav-list">
              <li className="web-main-header-nav-item">
                <Link href="/docs" className="web-link">
                  Docs
                </Link>
              </li>
            </ul>
          </nav>

          <div className="web-u-margin-inline-start-48 flex flex-1">
            <button
              type="button"
              className="web-input-button web-u-flex-basis-400"
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
          <div className="flex gap-2">
            <a
              className="web-button is-text"
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="web-icon-star" aria-hidden="true" />
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
