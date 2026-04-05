import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

