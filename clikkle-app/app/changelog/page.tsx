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
    <div className="web-big-padding-section">
      <div className="pt-10">
        <div className="web-big-padding-section-level-2">
          <div className="changelog-wrapper container">
            <h1 className="text-display font-aeonik-pro text-primary">
              Changelog
            </h1>

            <ul className="changelog-timeline">
              {visibleEntries.map((entry) => (
                <li key={entry.slug}>
                  <div className="changelog-dot" />
                  <div className="changelog-entry">
                    <time
                      className="text-eyebrow uppercase text-secondary"
                      dateTime={entry.date}
                    >
                      {formatChangelogDate(entry.date)}
                    </time>

                    {entry.cover && (
                      <div className="changelog-media mt-5 overflow-hidden rounded-lg">
                        <img src={entry.cover}
                          alt=""
                          loading="lazy"
                          className="w-full aspect-video object-cover" />
                      </div>
                    )}

                    <div className="changelog-content mt-5">
                      <h2 className="text-title font-aeonik-pro text-primary mb-8">
                        {entry.title}
                      </h2>
                      <div className="changelog-prose">
                        <ReactMarkdown
                          components={{
                            a: ({ href, children }) => (
                              <Link
                                href={href || "#"}
                                className="text-accent hover:underline"
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
                                  <code className="changelog-inline-code" {...props}>
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
                              <pre className="changelog-code-block">
                                {children}
                              </pre>
                            ),
                          }}
                        >
                          {entry.body}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
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

      {/* PreFooter + footer — matches src/routes/changelog/[[page]]/+page.svelte */}
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
