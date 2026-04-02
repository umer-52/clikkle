import type { CSSProperties, ReactNode } from "react";

/** Appwrite `$lib/components/Accordion/Root.svelte` */
export function DocsAccordion({ children }: { children: ReactNode }) {
  return (
    <ul
      className="collapsible not-prose w-full"
      style={{ "--p-toggle-border-color": "var(--web-color-border)" } as CSSProperties}
    >
      {children}
    </ul>
  );
}

/** Appwrite `$lib/components/Accordion/Item.svelte` */
export function DocsAccordionItem({
  title,
  open = false,
  children,
}: {
  title: string;
  open?: boolean;
  children: ReactNode;
}) {
  return (
    <li className="collapsible-item">
      <details className="collapsible-wrapper group" open={open}>
        <summary className="collapsible-button flex cursor-pointer list-none appearance-none items-center justify-between marker:hidden [&::-webkit-details-marker]:hidden">
          <span className="text-primary text-sub-body font-medium">{title}</span>
          <div className="icon text-primary transition-transform group-[&[open]]:rotate-180">
            <span className="icon-cheveron-down" aria-hidden="true" />
          </div>
        </summary>
        <div className="collapsible-content text-secondary text-sub-body flex flex-col">{children}</div>
      </details>
    </li>
  );
}
