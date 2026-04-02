import type { ReactNode } from "react";

/** Appwrite `Info.svelte` — same structure for info / warning / error / success callouts. */
export function DocsInlineInfo({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="web-inline-info not-prose my-12!">
      <span className="icon-info" aria-hidden="true" />
      <h5 className="text-sub-body text-primary font-medium">{title}</h5>
      {children}
    </div>
  );
}
