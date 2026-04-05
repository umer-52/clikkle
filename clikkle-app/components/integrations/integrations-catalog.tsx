"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Integration } from "@/lib/integrations-data";
import "./integrations-sidebar.css";

type Props = {
  integrations: Integration[];
  categories: string[];
  platforms: string[];
};

function matchesQuery(integration: Integration, q: string): boolean {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  const hay = [
    integration.title,
    integration.description,
    integration.category,
    integration.product?.vendor,
    integration.product?.description,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return hay.includes(s);
}

function matchesPlatform(integration: Integration, platform: string): boolean {
  if (platform === "All") return true;
  const plats = integration.platform ?? [];
  return plats.includes(platform);
}

/** Categories that have ≥1 integration for the current platform (ignores search — matches Appwrite sidebar options). */
function categoriesForPlatform(
  integrations: Integration[],
  categories: string[],
  platform: string,
) {
  return categories.filter((c) => {
    const items = integrations.filter(
      (i) =>
        i.category === c &&
        (platform === "All" ||
          (i.platform ?? []).some((p) => p === platform)),
    );
    return items.length > 0;
  });
}

export function IntegrationsCatalog({ integrations, categories, platforms }: Props) {
  const [search, setSearch] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  const platformList = useMemo(() => ["All", ...platforms] as const, [platforms]);

  const hasQuery = search.trim().length > 0;

  const filtered = useMemo(
    () =>
      integrations.filter(
        (i) => matchesQuery(i, search) && matchesPlatform(i, selectedPlatform),
      ),
    [integrations, search, selectedPlatform],
  );

  /** Sidebar category list follows platform only (search disables nav; Appwrite `+page.svelte`). */
  const navCategories = useMemo(
    () => categoriesForPlatform(integrations, categories, selectedPlatform),
    [integrations, categories, selectedPlatform],
  );

  const featuredIntegrations = useMemo(
    () => filtered.filter((i) => i.featured),
    [filtered],
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-scroll-smooth", "");
    return () => document.documentElement.removeAttribute("data-scroll-smooth");
  }, []);

  return (
      <div className="border-t border-white/10 bg-[var(--bg-primary)] py-10">
        <div className="container">
          <div className="integrations-l-grid">
            <aside className="integrations-sidebar flex flex-col gap-8" id="integrations-side">
              <section>
                <label className="integrations-search-label" htmlFor="integrations-search">
                  <Search className="size-4 shrink-0 text-[var(--color-text-muted)]" aria-hidden />
                  <input
                    id="integrations-search"
                    name="search"
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    autoComplete="off"
                  />
                </label>
              </section>

              <section className="flex flex-col">
                <section className="flex flex-col gap-4">
                  <h2 className="integrations-sidebar__heading">Platform</h2>
                  <ul
                    className={cn(
                      "flex flex-wrap gap-2",
                      hasQuery && "integrations-sidebar__list--disabled",
                    )}
                  >
                    {platformList.map((p) => (
                      <li key={p}>
                        <button
                          type="button"
                          className="integrations-platform-tag"
                          data-active={selectedPlatform === p}
                          onClick={() => setSelectedPlatform(p)}
                        >
                          {p}
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="integrations-sidebar-sep" aria-hidden />

                <section className="flex flex-col gap-4">
                  <h2 className="integrations-sidebar__heading">Categories</h2>

                  <div className="integrations-category-select-wrap relative block sm:hidden">
                    <select
                      className="integrations-category-select"
                      disabled={hasQuery}
                      defaultValue=""
                      aria-label="Select category"
                      onChange={(e) => {
                        const v = e.target.value;
                        if (v) window.location.hash = `#${v}`;
                      }}
                    >
                      <option value="" disabled>
                        Select category
                      </option>
                      {navCategories.map((c) => (
                        <option key={c} value={c.toLowerCase()}>
                          {c.replace("-", " ").replace(/\b\w/g, (ch) => ch.toUpperCase())}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="integrations-category-select-chevron size-4 text-[var(--color-text-muted)]"
                      aria-hidden
                    />
                  </div>

                  <ul
                    className={cn(
                      "hidden flex-col gap-4 sm:flex",
                      hasQuery && "integrations-sidebar__list--disabled",
                    )}
                  >
                    {navCategories.map((c) => (
                      <li key={c}>
                        <a
                          href={`#${c.toLowerCase()}`}
                          className="integrations-category-link capitalize"
                        >
                          {c.replace("-", " ")}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              </section>
            </aside>

            {/* Appwrite: outer `gap-16`; section headers `gap-1` + text-label / text-description */}
            <section className="flex flex-col gap-16">
              {filtered.length === 0 ? (
                <p className="text-center text-secondary">
                  No integrations match your filters. Try a different search or platform.
                </p>
              ) : null}

              {featuredIntegrations.length > 0 ? (
                <div className="flex flex-col gap-8">
                  <header className="flex flex-col gap-1">
                    <h2 className="text-label text-primary">Featured</h2>
                    <p className="text-description">Top recommended integrations</p>
                  </header>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {featuredIntegrations.map((item) => (
                      <li key={item.slug} className="relative">
                      <Link
                        href={`/integrations/${item.slug}`}
                        className="group relative block aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#242427] before:absolute before:inset-x-0 before:bottom-0 before:block before:h-80 before:rounded-[inherit] before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-black"
                      >
                        {item.cover ? (
                          <img
                            src={item.cover}
                            alt={item.title}
                            className="absolute inset-0 block h-full w-full object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-60"
                            loading="lazy"
                          />
                        ) : null}

                        <div className="absolute bottom-4 left-4 z-10 flex gap-x-2">
                          {item.product?.avatar ? (
                            <img
                              className="row-span-2 size-12 shrink-0 rounded-full bg-white object-contain p-1"
                              src={item.product.avatar}
                              alt={item.product.vendor ? `Avatar for ${item.product.vendor}` : ""}
                              width={40}
                              height={40}
                            />
                          ) : (
                            <div
                              className="size-12 shrink-0 rounded-full bg-white/20"
                              aria-hidden
                            />
                          )}
                          <div className="min-w-0">
                            <div className="text-main-body font-medium">
                              <span className="text-primary mt-3 block">{item.title}</span>
                            </div>
                            <div className="text-caption text-secondary capitalize">{item.category}</div>
                          </div>
                        </div>
                      </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {categories.map((category) => {
                const categoryItems = filtered.filter((i) => i.category === category);
                if (categoryItems.length === 0) return null;

                return (
                  <div
                    key={category}
                    id={category.toLowerCase()}
                    className="flex scroll-mt-32 flex-col gap-8 lg:scroll-mt-[7.5rem]"
                  >
                    <header className="flex flex-col gap-1">
                      <h2 className="text-label text-primary capitalize">
                        {category.replace("-", " ")}
                      </h2>
                    </header>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {categoryItems.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/integrations/${item.slug}`}
                          className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-[#242427] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#2C2C30] md:p-8"
                        >
                          <div className="flex items-center justify-between">
                            <div className="h-14 w-14 rounded-2xl bg-white p-2.5 shadow-sm">
                              {item.product?.avatar ? (
                                <img
                                  src={item.product.avatar}
                                  alt={item.product.vendor}
                                  className="h-full w-full object-contain"
                                  loading="lazy"
                                />
                              ) : (
                                <div className="h-full w-full rounded-lg bg-gray-200" />
                              )}
                            </div>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/40 transition-colors hover:text-white">
                              <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden
                              >
                                <path
                                  d="M5.5 5.5L18.5 18.5M18.5 18.5V7M18.5 18.5H7"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h4 className="m-0 line-clamp-1 font-medium text-primary">{item.title}</h4>
                            <p className="text-sub-body text-secondary mt-1 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
  );
}
