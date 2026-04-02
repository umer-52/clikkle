import type { SDKMethod } from "@/lib/references/specs";
import { RefMarkdown } from "./ref-markdown";

export function ReferenceRequestSection({ method }: { method: SDKMethod }) {
  return (
    <div className="web-card is-transparent p-4 reference-request-card">
      <ul className="flex flex-col">
        {method.parameters.map((parameter, i) => {
          const first = i === 0;
          return (
            <li key={parameter.name} className={first ? "" : "border-t border-[var(--color-border-subtle)] pt-4"}>
              <article>
                <header className="flex items-baseline gap-2">
                  <span className="web-code text-primary font-mono text-sm">{parameter.name}</span>
                  <span className="text-caption text-[var(--color-text-secondary)] dark:text-white/70">
                    {parameter.type}
                  </span>
                  {parameter.required ? (
                    <div className="web-tag">
                      <span className="text">required</span>
                    </div>
                  ) : null}
                </header>
                <div className="text-sub-body mt-4 text-[var(--color-text-secondary)] dark:text-white/70 [&_*:last-child]:mb-0">
                  <RefMarkdown markdown={parameter.description} />
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
