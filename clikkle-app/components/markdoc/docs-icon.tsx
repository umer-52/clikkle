const SIZES: Record<string, string> = {
  s: "16px",
  m: "20px",
  l: "32px",
  xl: "40px",
};

/** Appwrite `Icon.svelte` */
export function DocsIcon({ icon, size = "s" }: { icon: string; size?: string }) {
  return <span className={`icon-${icon}`} style={{ fontSize: SIZES[size] ?? SIZES.s }} />;
}
