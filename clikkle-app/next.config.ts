import type { NextConfig } from "next";

/**
 * Parent repo may contain another lockfile; Turbopack must treat this package as the app root.
 * `import.meta.url` on `next.config` can resolve to unexpected paths on some setups — `cwd` matches
 * `npm run dev` / `npm run build` when run from `clikkle-app/`.
 */
const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  output: "export",
  basePath: "/clikkle",
  /** OpenAPI + examples are read at runtime via fs; avoid bundler tracing the whole package tree. */
  serverExternalPackages: ["@appwrite.io/specs"],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/clikkle",
        basePath: false,
        permanent: false,
      },
      /* Appwrite `logo-list.svelte` href; site uses `/customers` instead of blog category */
      {
        source: "/blog/category/customer-stories",
        destination: "/customers",
        permanent: false,
      },
      /* Appwrite `src/routes/docs/products/databases/legacy/+page.ts` */
      {
        source: "/docs/products/databases/legacy",
        destination: "/docs/products/databases/legacy/databases",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

