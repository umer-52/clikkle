import type { Metadata } from "next";
import { DocsLandingContent } from "@/components/docs/docs-landing";

/** Appwrite `src/routes/docs/+page.svelte` — `TITLE_SUFFIX` */
const description =
  "Learn how to build like a team of hundreds. Get started with Authentication, Databases, Storage, Functions, and Messaging in your preferred framework.";

export const metadata: Metadata = {
  title: "Docs - Appwrite",
  description,
};

export default function DocsPage() {
  return <DocsLandingContent />;
}
