import { DocsLayoutProvider } from "@/components/docs/docs-layout-context";
import { DocsShell } from "@/components/docs/docs-shell";
import "./docs-fonts.css";
import "./docs-article-sections.css";
import "./docs-markdoc-parity.css";
import "./docs-web-layout.css";
import "./docs-select.css";
import "./docs-footer.css";
import "./docs-references.css";
import "./docs-tutorial.css";
/* Last: wins over Tailwind `@layer` + other docs sheets — desktop header chrome (search + buttons). */
import "./docs-header.css";

export const metadata = {
  title: "Docs - Clikkle",
  description:
    "Learn how to build like a team of hundreds. Get started with Authentication, Databases, Storage, Functions, and Messaging in your preferred framework.",
};

/** Must match `basePath` in next.config.ts — used for static font CSS (relative binary URLs). */
const DOCS_BASE_PATH = "/clikkle";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        rel="stylesheet"
        href={`${DOCS_BASE_PATH}/fonts/docs/font-face.css`}
      />
      <link rel="stylesheet" href={`${DOCS_BASE_PATH}/fonts/docs/icon.css`} />
      {/*
        Solid canvas like Appwrite docs (`p-body-bg-color` / `--bg-primary`); no marketing
        body glare inside docs (see `globals.css` + Svelte: lighting only on select pages).
      */}
      <div className="docs-route-shell relative min-h-screen bg-[var(--bg-primary)] text-[var(--color-text-primary)] transition-colors duration-200">
        <DocsLayoutProvider>
          <DocsShell>{children}</DocsShell>
        </DocsLayoutProvider>
      </div>
    </>
  );
}
