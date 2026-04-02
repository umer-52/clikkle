import type { ReactNode } from "react";

/** Appwrite `Table.svelte` (default docs, not policy). */
export function DocsTable({ children }: { children: ReactNode }) {
  return (
    <div className="web-table-wrapper my-8!">
      <div className="web-table-scroll">
        <table className="web-table">{children}</table>
      </div>
    </div>
  );
}
