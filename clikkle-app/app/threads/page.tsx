"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, MessageSquare, Plus, Check } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { getThreads, sanitizeContent } from "@/lib/threads-data";
import { withBasePath } from "@/lib/basepath";
import "./threads.css";

const popularTags = ["Web", "Flutter", "GraphQL", "Cloud", "Self Hosted"];

const moreTags = [
  "Tools",
  "Accounts",
  "Users",
  "Teams",
  "Databases",
  "Storage",
  "Functions",
  "Realtime",
  "Locale",
  "Avatars",
  "Webhooks",
  "General",
  "REST API"
];

function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query || !query.trim()) return <>{text}</>;
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return <>{text}</>;

  // Escape regex chars
  const pattern = terms.map(t => t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="thread-highlight-match">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function ThreadsPage() {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle toggling tags
  const handleToggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag];
      return next;
    });
  };

  // Perform search and filtering dynamically
  const filteredThreads = useMemo(() => {
    return getThreads({
      q: query,
      tags: selectedTags,
      allTags: true
    });
  }, [query, selectedTags]);

  const handleClearSearch = () => {
    setQuery("");
    setSelectedTags([]);
  };

  return (
    <>
      <main className="threads-page relative min-h-screen text-white overflow-hidden pt-16">
        <div className="w-big-padding-section">
          <section className="threads-hero-section web-big-padding-section-level-2 web-u-margin-block-0 web-u-sep-block-end relative overflow-hidden py-10">
            <div className="threads-bg-red" />
            <div className="threads-bg-green" />

            <div className="container relative z-10">
              <h1 className="text-display font-aeonik-pro text-primary threads-hero-title">
                Threads
              </h1>
            </div>
          </section>

          <section className="web-big-padding-section-level-2 web-u-margin-block-start-24">
            <div className="container">
              <div className="flex flex-wrap items-center gap-8">
            {/* Tag Selection Row */}
            <ul className="flex flex-wrap gap-2">
              {popularTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <li key={tag} className="flex items-center">
                    <button
                      type="button"
                      className={`web-btn-tag cursor-pointer ${isSelected ? "is-selected" : ""}`}
                      onClick={() => handleToggleTag(tag)}
                    >
                      {tag}
                    </button>
                  </li>
                );
              })}

              {/* More Tags Dropdown */}
              <li className="relative">
                <button
                  type="button"
                  className={`web-btn-tag cursor-pointer ${
                    moreTags.some((tag) => selectedTags.includes(tag))
                      ? "border-accent text-white"
                      : ""
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-expanded={isDropdownOpen}
                >
                  <span>More</span>
                  <ChevronDown className="size-4 opacity-70" />
                </button>

                {isDropdownOpen && (
                  <>
                    {/* Backdrop cover for click-outside */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <div className="threads-menu-wrapper web-card is-normal has-border-gradient absolute top-full left-0 z-50 mt-2">
                      <ul className="threads-dropdown-list text-sub-body">
                        {moreTags.map((tag) => {
                          const isSelected = selectedTags.includes(tag);
                          return (
                            <li key={tag}>
                              <button
                                type="button"
                                className="threads-dropdown-item"
                                onClick={() => {
                                  handleToggleTag(tag);
                                  setIsDropdownOpen(false);
                                }}
                              >
                                <span>{tag}</span>
                                {isSelected ? (
                                  <Check className="size-4 text-accent" />
                                ) : (
                                  <Plus className="size-4 opacity-40" />
                                )}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                )}
              </li>
            </ul>

            {/* Live Search Input Bar */}
            <div className="web-input-text-search-wrapper web-u-max-inline-size-none-mobile relative ml-auto w-full max-w-[350px]">
              <Search className="threads-search-icon" />
              <input
                type="text"
                id="search"
                className="web-input-button relative z-1 !pl-10 w-full"
                placeholder="Search for threads"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
              </div>

          {/* Results Counter */}
          {filteredThreads.length > 0 && (
            <h2 className="text-primary mt-4 animate-fade-in" aria-live="polite">
              Found {query.length || selectedTags.length > 0 ? filteredThreads.length : "5000+"} results.
            </h2>
          )}

          {/* Thread Cards Grid */}
          <div className="mt-4 flex flex-col gap-4">
            {filteredThreads.map((thread) => (
              <Link
                key={thread.$id}
                href={`/threads/${thread.$id}`}
                className="web-card is-normal has-border-gradient thread-card-item block"
              >
                <div className="flex min-w-0 gap-2">
                  <h3 className="text-main-body text-primary min-w-0 flex-1 font-medium">
                    <HighlightText text={thread.title} query={query} />
                  </h3>
                </div>

                <p className="web-main-body-500 u-margin-block-start-4 u-break-word min-w-0">
                  <HighlightText text={sanitizeContent(thread.content)} query={query} />
                </p>

                <div className="mt-4 flex min-w-0 flex-wrap justify-between gap-4">
                  {/* Tags */}
                  <ul className="flex min-w-0 flex-wrap gap-2">
                    {thread.tags?.map((tag) => (
                      <li key={tag} className="min-w-0">
                        <div className="web-tag truncate">
                          {tag}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Replies count */}
                  <div className="web-icon-button is-more-content web-u-pointer-events-none flex shrink-0 items-center" aria-label="Replies">
                    <MessageSquare className="size-4 opacity-70" />
                    <span className="text-caption font-inter">{thread.message_count}</span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Empty state */}
            {filteredThreads.length === 0 && (
              <div className="web-card is-normal has-border-gradient threads-empty-card">
                <Image
                  src={withBasePath("/images/empty-state.avif")}
                  alt="Empty state"
                  width={220}
                  height={220}
                  className="mb-4 object-contain opacity-70"
                />
                <span className="text-lg font-medium text-white mb-2">No support threads found</span>
                <p className="text-secondary text-sm max-w-md mb-6">
                  We couldn&apos;t find any support threads matching your query. Try clearing filters or searching for something else.
                </p>
                <button
                  type="button"
                  className="web-button is-secondary px-6 py-2 rounded-full cursor-pointer font-medium border border-white/10 hover:bg-white/5 transition-all"
                  onClick={handleClearSearch}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
            </div>
          </section>

          {/* Need Support PreFooter */}
          <section className="web-big-padding-section-level-2 web-u-margin-block-end-0">
          <div className="threads-prefooter-wrapper">
            <div className="container">
              <div className="text-center">
                <h2 className="text-display font-aeonik-pro text-primary leading-tight">
                  Need support?
                </h2>
              </div>
              <div className="threads-prefooter-cards">
                <div className="threads-prefooter-card">
                  <h3 className="text-label text-primary">Join our Discord</h3>
                  <p className="text-main-body text-primary mt-4">
                    Get community support by joining our Discord server.
                  </p>
                  <a
                    href="https://discord.gg/clikkle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="web-button is-primary mt-6"
                  >
                    <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    <span>Join Discord</span>
                  </a>
                </div>

                <div className="threads-prefooter-card">
                  <h3 className="text-label text-primary">Get premium support</h3>
                  <p className="text-main-body text-primary mt-4">
                    Join Clikkle Pro and get email support from our team.
                  </p>
                  <Link
                    href="/pricing"
                    className="web-button is-secondary mt-6"
                  >
                    <span>Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </section>
        </div>
      </main>
      <SiteFooter footerNavNoTopBorder />
    </>
  );
}
