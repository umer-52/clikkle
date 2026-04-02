import { getApi } from "./specs";
import { Platform, Service, versions } from "./constants";

/**
 * All reference URLs produced by the markdown generators (matches Svelte
 * `entries` for services + OpenAPI `components.schemas` keys per version for models).
 */
export async function getGeneratedReferenceSlugs(): Promise<string[][]> {
  const versionParams = ["cloud", ...versions] as const;
  const out: string[][] = [];

  for (const v of versionParams) {
    const apiVersion = v === "cloud" ? "1.8.x" : v;

    for (const platform of Object.values(Platform)) {
      for (const service of Object.values(Service)) {
        out.push(["references", v, platform, service]);
      }
    }

    try {
      const api = await getApi(apiVersion, "console-web");
      for (const model of Object.keys(api.components?.schemas ?? {})) {
        out.push(["references", v, "models", model]);
      }
    } catch {
      /* missing spec pack for this version */
    }
  }

  return out;
}
