import Link from "next/link";
import type { SDKMethod } from "@/lib/references/specs";

type MethodResponse = SDKMethod["responses"][number];

function responseHasModels(
  r: MethodResponse
): r is MethodResponse & { models: NonNullable<MethodResponse["models"]> } {
  return r.models != null;
}

export function ReferenceResponseSection({
  method,
  versionParam,
}: {
  method: SDKMethod;
  versionParam: string;
}) {
  const visibleResponses = method.responses.filter(responseHasModels);

  return (
    <div className="web-card is-transparent p-4 reference-response-card">
      <ul>
        {visibleResponses.map((response, idx) => (
          <li
            key={`${response.code}-${response.contentType ?? ""}-${idx}`}
            className={idx === 0 ? "" : "border-t border-[var(--color-border-subtle)] pt-4"}
          >
            <article>
              <header className="flex items-baseline gap-2">
                <span className="text-eyebrow font-aeonik-fono text-primary uppercase">
                  {response.code}
                </span>
                <span className="text-caption text-[var(--color-text-secondary)] dark:text-white/70">
                  {response.contentType ?? "no content"}
                </span>
              </header>
              {response.models.length > 0 ? (
                <ul className="text-sub-body mt-4 text-[var(--color-text-secondary)] dark:text-white/70">
                  {response.models.map((model) => (
                    <li key={model.id}>
                      <Link
                        className="web-link font-medium text-[#2D63FF] underline-offset-2 hover:underline"
                        href={`/docs/references/${versionParam}/models/${model.id}`}
                      >
                        {model.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
