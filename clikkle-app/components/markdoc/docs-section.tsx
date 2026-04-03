"use client";

import { useEffect, type ReactNode } from "react";
import { DocsHeading } from "@/components/markdoc/docs-heading";
import { useDocsArticleNumericBadgeRegistration } from "@/components/docs/docs-article-grid-content";

/** Appwrite `Section.svelte` */
export function DocsSection({
  id,
  step,
  title,
  children,
}: {
  id?: string;
  step?: number | string;
  title?: string;
  children: ReactNode;
}) {
  const stepVal = step !== undefined && step !== null && `${step}` !== "" ? step : null;
  const badgeRegistry = useDocsArticleNumericBadgeRegistration();
  const isNumericSection = stepVal !== null && Boolean(title);

  useEffect(() => {
    if (!isNumericSection || !badgeRegistry) return;
    badgeRegistry.addBadge();
    return () => badgeRegistry.removeBadge();
  }, [isNumericSection, badgeRegistry]);

  if (stepVal === null || !title) {
    return <section className="web-article-content-section mt-8">{children}</section>;
  }

  return (
    <section className="web-article-content-section is-with-line mt-8">
      <section className="web-article-content-sub-section">
        <header className="web-article-content-header">
          <span className="web-numeric-badge docs-numeric-badge">{stepVal}</span>
          <div className="contents">
            <DocsHeading level={2} id={id}>
              {title}
            </DocsHeading>
          </div>
        </header>
        {children}
      </section>
    </section>
  );
}
