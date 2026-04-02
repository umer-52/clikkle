import NextLink from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const LINK_WHITELIST = ["clikkle.io", "cloud.clikkle.io"];

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href || "");
}

function isExternalAndNotWhitelisted(href: string) {
  if (!["http://", "https://"].some((p) => href.startsWith(p))) return false;
  try {
    const hostname = new URL(href).hostname.replace(/^www\./, "");
    return !LINK_WHITELIST.includes(hostname);
  } catch {
    return true;
  }
}

function RefMarkdownLink({ href, children }: { href?: string; children?: React.ReactNode }) {
  const raw = href ?? "";
  const cn =
    "font-medium text-[#2D63FF] underline decoration-[#2D63FF]/35 underline-offset-2 hover:text-[#6b93ff]";
  let nextHref = raw;
  const doFollow = nextHref.includes("?dofollow=true") || nextHref.includes("&dofollow=true");
  if (doFollow) {
    nextHref = nextHref.replace(/[?&]dofollow=true/g, "").replace(/[?&]$/, "");
  }
  if (!nextHref) {
    return <span className={cn}>{children}</span>;
  }
  if (isExternalHref(nextHref)) {
    const target = isExternalAndNotWhitelisted(nextHref) ? "_blank" : undefined;
    const rel = target === "_blank" ? `noopener${doFollow ? "" : " nofollow"}` : undefined;
    return (
      <a href={nextHref} className={cn} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={nextHref} className={cn}>
      {children}
    </NextLink>
  );
}

/** Appwrite `parse()` for reference descriptions — markdown → elements, no full-page Markdoc. */
export function RefMarkdown({ markdown }: { markdown: string }) {
  if (!markdown?.trim()) return null;
  return (
    <div className="reference-markdown max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => <RefMarkdownLink href={href}>{children}</RefMarkdownLink>,
          p: ({ children }) => <p>{children}</p>,
          table: ({ children }) => (
            <div className="markdown-table-wrap">
              <table>{children}</table>
            </div>
          ),
          code: ({ className, children }) => {
            const inline = !className;
            if (inline) {
              return (
                <code className="web-code rounded bg-[var(--color-smooth)] px-1 py-0.5 text-[0.9em] dark:bg-white/10">
                  {children}
                </code>
              );
            }
            return <code className={className}>{children}</code>;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
