"use client";

import { useLayoutEffect, useMemo } from "react";
import { getCodeHtml, platformMap } from "@/lib/markdoc/code";
import { useMultiCodeOptional } from "@/components/markdoc/multi-code-context";
import { useInTutorialDocs } from "@/components/markdoc/tutorial-code-context";
import { copyToClipboard } from "@/lib/markdoc/copy";
import { CodeCopyTooltip } from "@/components/markdoc/code-copy-tooltip";

/** Appwrite `Fence.svelte` */
export function MarkdocFence({
  content,
  language,
  process = true,
  withLineNumbers = true,
  toCopy,
  badge,
}: {
  content: string;
  language?: string;
  process?: boolean;
  withLineNumbers?: boolean;
  toCopy?: string;
  badge?: string | null;
}) {
  const multi = useMultiCodeOptional();
  const inTutorialDocs = useInTutorialDocs();
  const lang = (language ?? "sh") as string;

  useLayoutEffect(() => {
    if (!multi) return;
    multi.registerSnippet(lang, content);
  }, [multi, lang, content]);

  const html = useMemo(() => {
    if (!process) return content;
    return getCodeHtml({ content, language: lang, withLineNumbers });
  }, [content, lang, process, withLineNumbers]);

  const badgeValue = badge ?? platformMap[lang] ?? platformMap[lang.toLowerCase()] ?? lang;

  const copyPayload = toCopy ?? content;

  if (multi) {
    if (multi.selected !== lang) return null;
    return (
      <div
        className="markdoc-fence-multicode"
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
    );
  }

  return (
    <section
      className={`dark web-code-snippet not-prose my-8! ${inTutorialDocs ? "no-top-margin" : ""}`}
      aria-label="code-snippet panel"
    >
      <header className="web-code-snippet-header">
        <div className="web-code-snippet-header-start">
          {badgeValue ? (
            <div className="flex gap-4">
              <div className="web-tag">
                <span className="text">{badgeValue}</span>
              </div>
            </div>
          ) : null}
        </div>
        <div className="web-code-snippet-header-end">
          <ul className="buttons-list flex gap-2">
            <li className="buttons-list-item ps-5">
              <CodeCopyTooltip copyAction={() => copyToClipboard(copyPayload)}>
                <button
                  type="button"
                  className="web-icon-button"
                  aria-label="copy code from code-snippet"
                >
                  <span className="web-icon-copy" aria-hidden="true" />
                </button>
              </CodeCopyTooltip>
            </li>
          </ul>
        </div>
      </header>
      <div
        className="web-code-snippet-content"
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
    </section>
  );
}
