"use client";

import { useState } from "react";
import Link from "next/link";
import { changelogEntries, formatChangelogDate } from "@/lib/changelog-data";
import { SiteFooter } from "@/components/site-footer";
import { PreFooter } from "@/components/pre-footer";
import ReactMarkdown from "react-markdown";
import "./changelog.css";

export default function ChangelogPage() {
  const [visibleCount, setVisibleCount] = useState(10);

  const visibleEntries = changelogEntries.slice(0, visibleCount);
  const hasMore = visibleCount < changelogEntries.length;

  return (
    <div className="web-big-padding-section" data-changelog-shell>
      <div className="changelog-hero-pad">
        <div className="web-big-padding-section-level-2">
          <div className="changelog-wrapper">
            <h1 className="text-display font-aeonik-pro text-primary">
              Changelog
            </h1>

            <ul className="changelog-timeline">
              {visibleEntries.map((entry) => {
                const entryHash = `changelog-${entry.slug}`;
                return (
                <li key={entry.slug} id={entryHash}>
                  <div className="changelog-dot" aria-hidden />
                  {/*
                    Changelog entry layout: `grid gap-5` → time, optional cover, then prose + title + body.
                  */}
                  <div className="grid gap-5">
                    <time
                      className="text-eyebrow px-4 uppercase text-[var(--color-text-muted)] sm:px-0 dark:text-white/50"
                      dateTime={entry.date}
                    >
                      {formatChangelogDate(entry.date)}
                    </time>

                    {entry.cover ? (
                      <Link
                        href={`#${entryHash}`}
                        className="changelog-web-media"
                        aria-label={`${entry.title} — jump to entry`}
                      >
                        <img
                          src={entry.cover}
                          alt=""
                          loading="lazy"
                        />
                      </Link>
                    ) : null}

                    <div className="changelog-prose prose prose-large max-w-none px-4 sm:px-0 prose-invert prose-p:text-[var(--color-text-secondary)] dark:prose-p:text-white/70 prose-headings:text-[var(--color-text-primary)] prose-strong:text-[var(--color-text-primary)] prose-a:text-[var(--color-brand-primary)] prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[color-mix(in_srgb,var(--color-brand-primary)_88%,white)]">
                      <h2 className="not-prose mb-8 font-aeonik-pro text-title text-primary">
                        <Link
                          href={`#${entryHash}`}
                          className="changelog-title-link"
                        >
                          {entry.title}
                        </Link>
                      </h2>
                      <ReactMarkdown
                        components={{
                          a: ({ href, children }) => (
                            <Link
                              href={href || "#"}
                              className="font-medium text-[var(--color-brand-primary)] underline decoration-[color-mix(in_srgb,var(--color-brand-primary)_45%,transparent)] underline-offset-[0.3125rem] transition-colors hover:text-[color-mix(in_srgb,var(--color-brand-primary)_85%,white)] hover:decoration-[var(--color-brand-primary)]"
                            >
                              {children}
                            </Link>
                          ),
                          code: ({
                            className,
                            children,
                            ...props
                          }) => {
                            const isInline = !className;
                            if (isInline) {
                              return (
                                <code
                                  className="changelog-inline-code not-prose"
                                  {...props}
                                >
                                  {children}
                                </code>
                              );
                            }
                            return (
                              <code className={className} {...props}>
                                {children}
                              </code>
                            );
                          },
                          pre: ({ children }) => (
                            <pre className="changelog-code-block not-prose">
                              {children}
                            </pre>
                          ),
                        }}
                      >
                        {entry.body}
                      </ReactMarkdown>
                    </div>
                  </div>
                </li>
              );
              })}
            </ul>

            {hasMore && (
              <button
                className="web-btn web-btn-secondary mx-auto mt-20 min-w-44"
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + 5, changelogEntries.length)
                  )
                }
              >
                Load more
              </button>
            )}
          </div>
        </div>
      </div>

      {/* PreFooter + site footer */}
      <div className="dark relative overflow-hidden pt-10">
        <div className="pt-[7.5rem]">
          <div className="container">
            <PreFooter headingId="changelog-pre-footer-heading" />
            <SiteFooter noOuterContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
