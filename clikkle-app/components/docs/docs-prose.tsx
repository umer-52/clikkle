"use client";

import type { ReactNode } from "react";
import { getDocsProseSurfaceClasses } from "@/lib/docs-prose-surface-classes";
import { cn } from "@/lib/utils";

export { getDocsProseSurfaceClasses } from "@/lib/docs-prose-surface-classes";

export function DocsProse({
  isArticleLayout,
  as = "article",
  /** Fragment: parent must supply `.prose` (Appwrite `DocsArticle` `web-article-content prose`). */
  contentOnly,
  children,
}: {
  isArticleLayout: boolean;
  as?: "article" | "div";
  contentOnly?: boolean;
  children: ReactNode;
}) {
  if (contentOnly) {
    return <>{children}</>;
  }
  const cls = cn(
    getDocsProseSurfaceClasses(isArticleLayout),
    /* Body offset lives on `.docs-article-after-header` to avoid margin collapse with the header. */
    isArticleLayout ? "mt-0" : "mt-10"
  );
  if (as === "div") {
    return <div className={cls}>{children}</div>;
  }
  return <article className={cls}>{children}</article>;
}
