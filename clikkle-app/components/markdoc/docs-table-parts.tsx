import type { ReactNode } from "react";

/** Appwrite `Thead.svelte` */
export function DocsThead({ children }: { children: ReactNode }) {
  return <thead className="web-table-header">{children}</thead>;
}

/** Appwrite `Tbody.svelte` */
export function DocsTbody({ children }: { children: ReactNode }) {
  return <tbody className="web-table-body">{children}</tbody>;
}

/** Appwrite `Tr.svelte` */
export function DocsTr({ children }: { children: ReactNode }) {
  return <tr className="web-table-row">{children}</tr>;
}

/** Appwrite `Th.svelte` (`<td role="columnheader">` in thead row). */
export function DocsTh({ children }: { children: ReactNode }) {
  return (
    <td
      role="columnheader"
      className="web-table-head-cell min-w-44 px-3 py-[0.5625rem] align-top"
    >
      <span className="text-sm leading-[1.375rem] text-[var(--color-text-primary)] dark:text-white">
        {children}
      </span>
    </td>
  );
}

/** Appwrite `Td.svelte` */
export function DocsTd({ children }: { children: ReactNode }) {
  return (
    <td className="web-table-col px-3 py-[0.5625rem] text-sm leading-[1.375rem] text-[var(--color-text-secondary)] dark:text-white/70">
      <div className="td-wrapper">{children}</div>
    </td>
  );
}
