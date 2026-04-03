"use client";

import { createContext, useContext, type ReactNode } from "react";

/**
 * `{% table %}` wraps a markdown `table` node. Both used to render full
 * `DocsTable` (wrapper + `<table>`), producing invalid `<table><div>…`.
 * Tag supplies the scroll wrapper; inner node renders only `<table>` when
 * `TableDepthContext` is set.
 */
const TableDepthContext = createContext(0);

/** Markdoc **tag** `{% table %}` — outer scroll wrapper only (matches Appwrite `Table.svelte` shell). */
export function TableTag({ children }: { children: ReactNode }) {
  return (
    <div className="web-table-wrapper my-8!">
      <div className="web-table-scroll">
        <TableDepthContext.Provider value={1}>{children}</TableDepthContext.Provider>
      </div>
    </div>
  );
}

/** Markdoc **node** `table` (pipe tables) — full wrapper, or inner `<table>` only inside `{% table %}`. */
export function DocsTable({ children }: { children: ReactNode }) {
  const depth = useContext(TableDepthContext);
  if (depth > 0) {
    return <table className="web-table">{children}</table>;
  }
  return (
    <div className="web-table-wrapper my-8!">
      <div className="web-table-scroll">
        <table className="web-table">{children}</table>
      </div>
    </div>
  );
}
