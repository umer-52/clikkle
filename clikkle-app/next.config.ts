import type { NextConfig } from "next";

/**
 * Parent repo may contain another lockfile; Turbopack must treat this package as the app root.
 * `import.meta.url` on `next.config` can resolve to unexpected paths on some setups — `cwd` matches
 * `npm run dev` / `npm run build` when run from `clikkle-app/`.
 */
const basePath = "/clikkle";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  /**
   * Default parallel static export can exhaust RAM on Vercel while prerendering ~5k `/docs/[...slug]`
   * pages. Cap export concurrency and logical CPUs so peak memory stays within typical build runners.
   */
  experimental: {
    cpus: 2,
    staticGenerationMaxConcurrency: 1,
  },
  output: "export",
  basePath,
  /** Ensures client `withBasePath()` matches `basePath` after restart (fixes broken `<img src>` without manual .env). */
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
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

