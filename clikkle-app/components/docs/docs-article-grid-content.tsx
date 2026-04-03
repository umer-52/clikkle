"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type BadgeRegistry = {
  addBadge: () => void;
  removeBadge: () => void;
};

const DocsArticleNumericBadgeContext = createContext<BadgeRegistry | null>(null);

export function useDocsArticleNumericBadgeRegistration(): BadgeRegistry | null {
  return useContext(DocsArticleNumericBadgeContext);
}

/**
 * Wraps `.web-article-content` inside `web-grid-two-side-navs` (Appwrite `DocsArticle.svelte`).
 * `web-reduced-article-size` applies only when a Markdoc `Section` with step+title registers — same as Svelte `articleHasNumericBadge`.
 */
export function DocsArticleGridContent({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [reduced, setReduced] = useState(false);
  const countRef = useRef(0);

  const addBadge = useCallback(() => {
    countRef.current += 1;
    if (countRef.current === 1) setReduced(true);
  }, []);

  const removeBadge = useCallback(() => {
    countRef.current -= 1;
    if (countRef.current <= 0) {
      countRef.current = 0;
      setReduced(false);
    }
  }, []);

  return (
    <DocsArticleNumericBadgeContext.Provider value={{ addBadge, removeBadge }}>
      <div
        className={cn(
          "web-article-content",
          reduced && "web-reduced-article-size",
          className
        )}
      >
        {children}
      </div>
    </DocsArticleNumericBadgeContext.Provider>
  );
}
