import Link from "next/link";
import type { SDKMethod } from "@/lib/references/specs";

const RateKeys: Record<string, string> = {
  ip: "IP",
  userId: "USER ID",
  url: "URL",
  phone: "PHONE",
  token: "TOKEN",
  method: "METHOD",
  email: "EMAIL",
};

function hasMultipleKeys(keys: string | string[]): keys is string[] {
  return Array.isArray(keys);
}

function parseKeys(keys: string) {
  if (!keys) return "";
  const keyValuePairs = keys.split(",");
  return keyValuePairs
    .map((pair) => {
      const key = pair.split(":")[0] as keyof typeof RateKeys;
      return RateKeys[key] ?? key;
    })
    .join(" + ");
}

export function ReferenceRateLimitsSection({
  method,
  platformType,
}: {
  method: SDKMethod;
  platformType: "CLIENT" | "SERVER";
}) {
  const rateKeys = method["rate-key"];
  const rateTime = method["rate-time"];
  const rateLimit = method["rate-limit"];

  return (
    <div className="web-card is-normal p-4 reference-rate-card">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          {platformType === "CLIENT" ? (
            <p className="text-sub-body text-[var(--color-text-secondary)] dark:text-white/70">
              This endpoint is rate limited. You can only make a limited number of request to his endpoint within a
              specific time frame.
            </p>
          ) : (
            <p className="text-sub-body text-[var(--color-text-secondary)] dark:text-white/70">
              This endpoint is not limited when using Server SDKs with API keys. If you are using SSR with{" "}
              <code className="web-code">setSession</code>, these rate limits will still apply.{" "}
              <Link
                href="/docs/products/auth/server-side-rendering#rate-limits"
                className="u-link text-primary font-medium text-[#2D63FF] underline-offset-2 hover:underline"
              >
                Learn more about SSR rate limits.
              </Link>
            </p>
          )}
          <p className="text-sub-body text-[var(--color-text-secondary)] dark:text-white/70">
            The limit is applied for each unique limit key.
          </p>
        </div>
        <div className="web-table-wrapper">
          <div className="web-table-scroll is-remove-outer-styles">
            <table className="web-table">
              <thead className="web-table-header">
                <tr className="web-table-row">
                  <th className="web-table-head-col">
                    <div className="text-eyebrow font-aeonik-fono text-primary uppercase">Time frame</div>
                  </th>
                  <th className="web-table-head-col">
                    <div className="text-eyebrow font-aeonik-fono text-primary uppercase">Attempts</div>
                  </th>
                  <th className="web-table-head-col">
                    <div className="text-eyebrow font-aeonik-fono text-primary uppercase">Key</div>
                  </th>
                </tr>
              </thead>
              <tbody className="web-table-body">
                {hasMultipleKeys(rateKeys) ? (
                  rateKeys.map((key) => (
                    <tr key={key} className="web-table-row">
                      <td className="web-table-col">{Math.floor(rateTime / 60)} minutes</td>
                      <td className="web-table-col">{rateLimit} requests</td>
                      <td className="web-table-col">{parseKeys(key)}</td>
                    </tr>
                  ))
                ) : typeof rateKeys === "string" ? (
                  <tr className="web-table-row">
                    <td className="web-table-col">{Math.floor(rateTime / 60)} minutes</td>
                    <td className="web-table-col">{rateLimit} requests</td>
                    <td className="web-table-col">{parseKeys(rateKeys)}</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <Link
            href="/docs/advanced/platform/rate-limits"
            className="u-link text-primary inline-flex items-center gap-2 font-medium text-[#2D63FF] underline-offset-2 hover:underline"
          >
            <span>Learn more about rate limits</span>
            <span className="icon-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
