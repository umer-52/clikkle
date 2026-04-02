"use client";

import { useDocsLayout } from "@/components/docs/docs-layout-context";
import { DocsAccordion, DocsAccordionItem } from "@/components/markdoc/docs-accordion";
import { DocsHeading } from "@/components/markdoc/docs-heading";
import { MarkdocFence } from "@/components/markdoc/markdoc-fence";
import { setPreferredPlatform } from "@/lib/markdoc/preferred-platform";
import { setPreferredVersion } from "@/lib/docs/preferred-version";
import { platformMap, type Platform as CodePlatform } from "@/lib/markdoc/code";
import { getService, type SDKMethod } from "@/lib/references/specs";
import { groupMethodsByGroup, sortMethods } from "@/lib/references/method-helpers";
import { Platform, serviceMap, versions } from "@/lib/references/constants";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { DocsReferenceSelect } from "./docs-reference-select";
import { RefMarkdown } from "./ref-markdown";
import { ReferenceRateLimitsSection } from "./reference-rate-limits-section";
import { ReferenceRequestSection } from "./reference-request-section";
import { ReferenceResponseSection } from "./reference-response-section";

type ServicePayload = Awaited<ReturnType<typeof getService>>;

const clientPlatforms = Object.values(Platform).filter((p) => p.startsWith("client-"));
const serverPlatforms = Object.values(Platform).filter((p) => p.startsWith("server-"));

function hasRateKeyData(method: SDKMethod): boolean {
  const rk = method["rate-key"];
  if (rk == null) return false;
  return Array.isArray(rk) ? rk.length > 0 : rk.length > 0;
}

function pickSelectedSection(
  vis: Record<string, boolean>,
  orderedIds: string[],
  prev: string | undefined
): string | undefined {
  const anyVisible = orderedIds.some((id) => vis[id]);
  if (!anyVisible && prev) return prev;
  let last: string | undefined;
  for (const id of orderedIds) {
    if (vis[id]) last = id;
  }
  return last;
}

export function ReferenceServicePage({
  data,
  versionParam,
  platformParam,
  serviceSlug,
}: {
  data: ServicePayload;
  versionParam: string;
  platformParam: string;
  serviceSlug: string;
}) {
  const router = useRouter();
  const asideRef = useRef<HTMLElement>(null);
  const visibilityRef = useRef<Record<string, boolean>>({});
  const { showReferences, toggleReferences, setLayoutState } = useDocsLayout();
  const [selectedSectionId, setSelectedSectionId] = useState<string | undefined>(undefined);

  const serviceName = serviceMap[data.service.name];
  const platformType = platformParam.startsWith("client-") ? "CLIENT" : "SERVER";

  const grouped = useMemo(() => groupMethodsByGroup(data.methods), [data.methods]);

  const orderedMethodIds = useMemo(() => {
    const ids: string[] = [];
    for (const [, methods] of Object.entries(grouped)) {
      for (const m of sortMethods(methods)) {
        ids.push(m.id);
      }
    }
    return ids;
  }, [grouped]);

  const navigateWithHash = useCallback(
    (path: string) => {
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      router.push(`${path}${hash && !path.includes("#") ? hash : ""}`, { scroll: false });
    },
    [router]
  );

  const onPlatformChange = useCallback(
    (platformVal: CodePlatform) => {
      setPreferredPlatform(platformVal);
      navigateWithHash(`/docs/references/${versionParam}/${platformVal}/${serviceSlug}`);
    },
    [navigateWithHash, serviceSlug, versionParam]
  );

  const onVersionChange = useCallback(
    (version: string) => {
      setPreferredVersion(version);
      navigateWithHash(`/docs/references/${version}/${platformParam}/${serviceSlug}`);
    },
    [navigateWithHash, platformParam, serviceSlug]
  );

  const platformOptions = useMemo(
    () => [
      ...clientPlatforms.map((p) => ({
        value: p,
        label: platformMap[p] ?? p,
        group: "Client",
      })),
      ...serverPlatforms.map((p) => ({
        value: p,
        label: platformMap[p] ?? p,
        group: "Server",
      })),
    ],
    []
  );

  const versionOptions = useMemo(
    () => [
      { value: "cloud", label: "Cloud" },
      ...versions.map((v) => ({ value: v, label: v })),
    ],
    []
  );

  useEffect(() => {
    setPreferredPlatform(platformParam as CodePlatform);
    setPreferredVersion(versionParam);
  }, [platformParam, versionParam]);

  useEffect(() => {
    if (!showReferences) return;
    const onDoc = (e: MouseEvent) => {
      if (asideRef.current && !asideRef.current.contains(e.target as Node)) {
        setLayoutState({ showReferences: false });
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [showReferences, setLayoutState]);

  useEffect(() => {
    if (orderedMethodIds.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!id) continue;
          visibilityRef.current[id] = entry.isIntersecting;
        }
        setSelectedSectionId((prev) =>
          pickSelectedSection(visibilityRef.current, orderedMethodIds, prev)
        );
      },
      { root: null, threshold: 0, rootMargin: "-100px 0px -80% 0px" }
    );

    const raf = requestAnimationFrame(() => {
      for (const id of orderedMethodIds) {
        const el = document.getElementById(id);
        if (el) obs.observe(el);
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [orderedMethodIds]);

  return (
    <>
      <main className="contents" id="main">
        <article className="web-article contents">
          <header className="web-article-header">
            <div className="web-article-header-start">
              <h1 className="text-title font-aeonik-pro">{serviceName}</h1>
              <div className="web-inline-code">{platformType}</div>
            </div>
            <div className="web-article-header-end">
              <div className="text-primary flex flex-col gap-6 md:flex-row">
                <div className="flex items-center gap-2">
                  <label className="web-is-not-mobile text-xs" htmlFor="platform">
                    Platform
                  </label>
                  <DocsReferenceSelect<CodePlatform>
                    id="platform"
                    nativeMobile
                    minWidth="10rem"
                    value={platformParam as CodePlatform}
                    options={platformOptions}
                    onChange={onPlatformChange}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="web-is-not-mobile text-xs" htmlFor="version">
                    Version
                  </label>
                  <DocsReferenceSelect
                    id="version"
                    nativeMobile
                    minWidth="10rem"
                    value={versionParam}
                    options={versionOptions}
                    onChange={onVersionChange}
                  />
                </div>
              </div>
            </div>
          </header>

          <div className="web-article-content prose" style={{ gap: "6rem" }}>
            <section className="web-article-content-grid-6-4">
              <div className="web-article-content-grid-6-4-column-1 flex flex-col gap-2">
                <RefMarkdown markdown={data.service.description} />
              </div>
              <div className="web-article-content-grid-6-4-column-2 j-end flex flex-col gap-8">
                <MarkdocFence
                  language="text"
                  badge="Base URL"
                  content="https://<REGION>.cloud.clikkle.io/v1"
                  process
                  withLineNumbers={false}
                />
              </div>

              {data.methods.length === 0 ? (
                <div className="web-article-content-grid-6-4-column-2 flex flex-col gap-8">
                  <div className="web-inline-info not-prose">
                    <span className="icon-info" aria-hidden="true" />
                    <h5 className="text-sub-body text-primary font-medium">
                      No endpoint found for this version and platform
                    </h5>
                    Please switch to a newer version or different platform.
                  </div>
                </div>
              ) : null}
            </section>

            {Object.entries(grouped).map(([group, methods]) =>
              sortMethods(methods).map((method) => (
                <section key={method.id} className="web-article-content-grid-6-4">
                  <div className="web-article-content-grid-6-4-column-1 flex flex-col gap-8">
                    <header className="web-article-content-header">
                      <DocsHeading id={method.id} level={2} articleReference>
                        {method.title}
                      </DocsHeading>
                    </header>
                    <div className="flex flex-col gap-2">
                      <RefMarkdown markdown={method.description} />
                    </div>
                    <DocsAccordion>
                      {method.parameters.length > 0 ? (
                        <DocsAccordionItem open title="Request">
                          <ReferenceRequestSection method={method} />
                        </DocsAccordionItem>
                      ) : null}
                      <DocsAccordionItem title="Response">
                        <ReferenceResponseSection method={method} versionParam={versionParam} />
                      </DocsAccordionItem>
                      {method["rate-limit"] > 0 && hasRateKeyData(method) ? (
                        <DocsAccordionItem title="Rate limits">
                          <ReferenceRateLimitsSection method={method} platformType={platformType} />
                        </DocsAccordionItem>
                      ) : null}
                    </DocsAccordion>
                  </div>
                  <div className="web-article-content-grid-6-4-column-2 flex flex-col gap-8">
                    <div className="dark contents">
                      <div
                        className="sticky"
                        style={
                          {
                            "--inset-block-start": "var(--p-grid-huge-navs-secondary-sticky-position)",
                          } as CSSProperties
                        }
                      >
                        <MarkdocFence
                          language="text"
                          badge="Endpoint"
                          content={`${String(method.method).toUpperCase()} ${method.url}`}
                          toCopy={method.url}
                          process
                          withLineNumbers={false}
                        />
                        <div className="mt-6">
                          <MarkdocFence
                            language={platformParam}
                            content={method.demo}
                            process
                            withLineNumbers={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))
            )}
          </div>

          <aside
            ref={asideRef}
            className={`web-references-menu ${showReferences ? "is-open" : ""}`}
          >
            {data.methods.length > 0 ? (
              <>
                <button
                  type="button"
                  className="web-icon-button"
                  id="refOpen"
                  onClick={toggleReferences}
                  aria-label="Toggle references"
                >
                  <span className="icon-menu-alt-4" aria-hidden="true" />
                </button>
                <div className="web-references-menu-content">
                  <div className="web-references-menu-header mt-6 flex items-center justify-between gap-4">
                    <h5 className="web-references-menu-title text-eyebrow font-aeonik-fono uppercase">
                      On This Page
                    </h5>
                    <button
                      type="button"
                      className="web-icon-button"
                      id="refClose"
                      onClick={toggleReferences}
                      aria-label="Toggle references"
                    >
                      <span className="icon-x" aria-hidden="true" />
                    </button>
                  </div>
                  <ul className="web-references-menu-list">
                    {Object.entries(grouped).map(([group, gMethods]) => (
                      <li key={group || "default"} className="web-references-menu-group">
                        {group !== "" ? (
                          <h6 className="text-eyebrow mb-2 uppercase text-[var(--color-greyscale-500)]">
                            {group}
                          </h6>
                        ) : null}
                        <ul className="web-references-menu-list flex flex-col">
                          {sortMethods(gMethods).map((method) => (
                            <li key={method.id} className="web-references-menu-item">
                              <a
                                href={`#${method.id}`}
                                className={`web-references-menu-link text-caption ${
                                  method.id === selectedSectionId ? "is-selected" : ""
                                }`}
                              >
                                {method.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                  <div className="web-u-padding-block-20 border-t border-[color-mix(in_srgb,var(--color-greyscale-900)_4%,transparent)]">
                    <button
                      type="button"
                      className="web-link inline-flex items-center gap-2"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      <span className="web-icon-arrow-up" aria-hidden="true" />
                      <span className="text-caption">Back to top</span>
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </aside>
        </article>
      </main>
    </>
  );
}
