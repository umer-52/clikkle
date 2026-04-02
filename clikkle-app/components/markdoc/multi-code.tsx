"use client";

import { MultiCodeProvider, useMultiCodeOptional } from "@/components/markdoc/multi-code-context";
import { CodeCopyTooltip } from "@/components/markdoc/code-copy-tooltip";
import { platformMap } from "@/lib/markdoc/code";
import { copyToClipboard } from "@/lib/markdoc/copy";

/** Appwrite `MultiCode.svelte` shell + header (Select + Tooltip copy). */
function MultiCodeInner({ children }: { children: React.ReactNode }) {
  const ctx = useMultiCodeOptional();

  if (!ctx) return <>{children}</>;

  const multi = ctx;
  const options = multi.langs.map((language) => ({
    value: language,
    label: platformMap[language] ?? language,
  }));

  return (
    <section className="dark web-code-snippet not-prose my-8!" aria-label="code-snippet panel">
      <header className="web-code-snippet-header">
        <div className="web-code-snippet-header-start">
          <div className="flex gap-4" />
        </div>
        <div className="web-code-snippet-header-end">
          <ul className="buttons-list flex gap-3">
            <li className="buttons-list-item flex self-center">
              <label className="sr-only" htmlFor="multicode-lang">
                Language
              </label>
              <select
                id="multicode-lang"
                className="markdoc-multicode-select rounded-md border border-[var(--color-border-default)] bg-[var(--bg-secondary)] px-2 py-1 text-sm text-[var(--color-text-primary)] dark:border-white/15 dark:bg-[#1C1C1E] dark:text-white"
                value={multi.selected ?? ""}
                onChange={(e) => multi.setSelected(e.target.value || null)}
              >
                {options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </li>
            <li className="buttons-list-item" style={{ paddingInlineStart: 13 }}>
              <CodeCopyTooltip copyAction={() => copyToClipboard(multi.content)}>
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
      <div className="web-code-snippet-content">{children}</div>
    </section>
  );
}

export function MultiCode({ children }: { children: React.ReactNode }) {
  return (
    <MultiCodeProvider>
      <MultiCodeInner>{children}</MultiCodeInner>
    </MultiCodeProvider>
  );
}
