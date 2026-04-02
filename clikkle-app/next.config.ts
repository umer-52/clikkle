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
    ];
  },
};

export default nextConfig;

