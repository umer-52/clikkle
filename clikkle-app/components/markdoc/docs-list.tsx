import type { ReactNode } from "react";

/** Appwrite `List.svelte` (docs — no policy/changelog branches). */
export function DocsList({
  ordered,
  start,
  children,
}: {
  ordered?: boolean;
  start?: number;
  children: ReactNode;
}) {
  if (ordered) {
    return (
      <ol className="web-numeric-list" start={start}>
        {children}
      </ol>
    );
  }
  return <ul className="web-pink-dots">{children}</ul>;
}
