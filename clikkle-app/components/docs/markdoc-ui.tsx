import React from "react";

/** Appwrite `Only_Dark.svelte` */
export function OnlyDark({ children }: { children: React.ReactNode }) {
  return <span className="web-u-only-dark">{children}</span>;
}

/** Appwrite `Only_Light.svelte` */
export function OnlyLight({ children }: { children: React.ReactNode }) {
  return <span className="web-u-only-light">{children}</span>;
}

export { DocsSection as Section } from "@/components/markdoc/docs-section";
