/** Appwrite `src/lib/utils/platform.ts` — docs search kbd hint */

export function isDom(): boolean {
  return typeof window !== "undefined";
}

function getPlatform(): string {
  if (!isDom()) return "";
  const agent = (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData;
  return (agent?.platform ?? navigator.platform ?? "").toLowerCase();
}

export function isTouchDevice(): boolean {
  return isDom() && !!navigator.maxTouchPoints;
}

/** Mac keyboard (excludes iPad with Mac UA when touch). Mirrors Appwrite `isMac`. */
export function isMac(): boolean {
  return /^mac/.test(getPlatform()) && !isTouchDevice();
}
