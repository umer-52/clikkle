/** Appwrite `src/lib/utils/copy.ts` — `tryCatch(navigator.clipboard.writeText)` */
export async function copyToClipboard(value: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    /* denied / non-secure context — mirror Appwrite `tryCatch` no-throw */
  }
}

/** Backward-compatible alias (Appwrite `export { copyToClipboard as copy }`) */
export const copy = copyToClipboard;
