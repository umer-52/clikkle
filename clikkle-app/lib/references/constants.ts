/** Mirrors `src/lib/utils/references.ts` (Appwrite website) — values only, no Svelte stores. */

const allVersions = [
  "1.8.x",
  "1.7.x",
  "1.6.x",
  "1.5.x",
  "1.4.x",
  "1.3.x",
  "1.2.x",
  "1.1.x",
  "1.0.x",
  "0.15.x",
  "cloud",
] as const;

export type Version = (typeof allVersions)[number];

export const versions: ReadonlyArray<Exclude<Version, "cloud">> = allVersions.filter(
  (v): v is Exclude<Version, "cloud"> => v !== "cloud"
);

export const Service = {
  Account: "account",
  Avatars: "avatars",
  Databases: "databases",
  TablesDB: "tablesDB",
  Functions: "functions",
  Messaging: "messaging",
  Health: "health",
  Locale: "locale",
  Storage: "storage",
  Teams: "teams",
  Users: "users",
  Sites: "sites",
  Tokens: "tokens",
} as const;

export type ServiceValue = (typeof Service)[keyof typeof Service];

export const Platform = {
  ClientWeb: "client-web",
  ClientFlutter: "client-flutter",
  ClientReactNative: "client-react-native",
  ClientApple: "client-apple",
  ClientAndroidKotlin: "client-android-kotlin",
  ClientAndroidJava: "client-android-java",
  ClientGraphql: "client-graphql",
  ClientRest: "client-rest",
  ServerNodeJs: "server-nodejs",
  ServerPython: "server-python",
  ServerDart: "server-dart",
  ServerPhp: "server-php",
  ServerRuby: "server-ruby",
  ServerDotNet: "server-dotnet",
  ServerDeno: "server-deno",
  ServerGo: "server-go",
  ServerSwift: "server-swift",
  ServerKotlin: "server-kotlin",
  ServerJava: "server-java",
  ServerGraphql: "server-graphql",
  ServerRest: "server-rest",
} as const;

export type Platform = (typeof Platform)[keyof typeof Platform];

export const VALID_PLATFORMS = new Set<string>(Object.values(Platform));

export const serviceMap: Record<ServiceValue, string> = {
  [Service.Account]: "Account",
  [Service.Avatars]: "Avatars",
  [Service.Databases]: "Databases",
  [Service.TablesDB]: "TablesDB",
  [Service.Functions]: "Functions",
  [Service.Messaging]: "Messaging",
  [Service.Health]: "Health",
  [Service.Locale]: "Locale",
  [Service.Storage]: "Storage",
  [Service.Teams]: "Teams",
  [Service.Users]: "Users",
  [Service.Sites]: "Sites",
  [Service.Tokens]: "Tokens",
};

/** URL segment → OpenAPI pack version (matches Svelte `+page.server.ts`). */
export function resolveReferenceVersion(versionParam: string): string {
  return versionParam === "cloud" ? "1.8.x" : versionParam;
}

export function isValidReferenceVersion(versionParam: string): boolean {
  const v = resolveReferenceVersion(versionParam);
  return (versions as readonly string[]).includes(v);
}
