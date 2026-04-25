"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

const ILLUSTRATED_BASE = "/clikkle/images/icons/illustrated";

const tutorials = [
  {
    href: "/docs/tutorials/react",
    cover: "/clikkle/images/tutorials/react.png",
    title: "React tutorial",
    description: "Learn Clikkle Auth, Databases, and more with React.",
  },
  {
    href: "/docs/tutorials/nextjs",
    cover: "/clikkle/images/tutorials/nextjs.png",
    title: "Next.js tutorial",
    description: "Learn Clikkle Auth, Databases, and more with Next.js.",
  },
  {
    href: "/docs/tutorials/sveltekit",
    cover: "/clikkle/images/tutorials/svelte.png",
    title: "SvelteKit tutorial",
    description: "Learn Clikkle Auth, Databases, and more with SvelteKit.",
  },
  {
    href: "/docs/tutorials/vue",
    cover: "/clikkle/images/tutorials/vue.png",
    title: "Vue tutorial",
    description: "Learn Clikkle Auth, Databases, and more with Vue.",
  },
  {
    href: "/docs/tutorials/android",
    cover: "/clikkle/images/tutorials/android.png",
    title: "Android tutorial",
    description: "Learn Clikkle Auth, Databases, and more with Android.",
  },
  {
    href: "/docs/tutorials/flutter",
    cover: "/clikkle/images/tutorials/flutter.png",
    title: "Flutter tutorial",
    description: "Learn Clikkle Auth, Databases, and more with Flutter.",
  },
];

/** `src/routes/(marketing)/(components)/platforms.svelte` — basename under `platforms/dark|light`, quick-start href */
const platforms = [
  { name: "Next.js", file: "nextjs", href: "/docs/quick-starts/nextjs" },
  { name: "React", file: "react", href: "/docs/quick-starts/react" },
  { name: "Vue", file: "vue", href: "/docs/quick-starts/vue" },
  { name: "Angular", file: "angular", href: "/docs/quick-starts/angular" },
  { name: "Svelte", file: "svelte", href: "/docs/quick-starts/sveltekit" },
  {
    name: "TanStack Start",
    file: "tanstack",
    href: "/docs/quick-starts/tanstack-start",
    lightFile: "tanstack",
  },
  {
    name: "React Native",
    file: "react-native",
    href: "/docs/quick-starts/react-native",
  },
  { name: "Flutter", file: "flutter", href: "/docs/quick-starts/flutter" },
  {
    name: "iOS",
    file: "apple",
    lightFile: "apple",
    href: "/docs/quick-starts/apple",
  },
  { name: "Android", file: "android", href: "/docs/quick-starts/android" },
  { name: "Kotlin", file: "kotlin", href: "/docs/quick-starts/kotlin" },
  { name: "Swift", file: "swift", href: "/docs/quick-starts/swift" },
  { name: "Node.js", file: "nodejs", href: "/docs/quick-starts/node" },
  { name: "Python", file: "python", href: "/docs/quick-starts/python" },
  { name: "PHP", file: "php", href: "/docs/quick-starts/php" },
  { name: "Ruby", file: "ruby", href: "/docs/quick-starts/ruby" },
  { name: ".NET", file: "dotnet", href: "/docs/quick-starts/dotnet" },
  {
    name: "Go",
    file: "go",
    lightFile: "go",
    href: "/docs/quick-starts/go",
  },
  {
    name: "Deno",
    file: "deno",
    lightFile: "deno",
    href: "/docs/quick-starts/deno",
  },
  { name: "Dart", file: "dart", href: "/docs/quick-starts/dart" },
] as const;

const capabilities = [
  {
    href: "/docs/products/auth",
    illustrated: "auth",
    title: "Auth",
    description: "Sign in users with multiple OAuth providers.",
  },
  {
    href: "/docs/products/databases",
    illustrated: "databases",
    title: "Databases",
    description: "Store your application and user data.",
  },
  {
    href: "/docs/products/functions",
    illustrated: "functions",
    title: "Functions",
    description: "Extend and customize your server's functionality.",
  },
  {
    href: "/docs/products/sites",
    illustrated: "sites",
    title: "Sites",
    description: "Deploy websites on the internet at scale.",
  },
  {
    href: "/docs/products/messaging",
    illustrated: "messaging",
    title: "Messaging",
    description: "Send and schedule email, SMS, and push notifications.",
  },
  {
    href: "/docs/products/storage",
    illustrated: "storage",
    title: "Storage",
    description: "Store images, videos, documents, and files.",
  },
  {
    href: "/docs/products/avatars",
    illustrated: "avatars",
    title: "Avatars",
    description: "Generate icons, screenshots, and QR codes for your apps.",
  },
  {
    href: "/docs/apis/realtime",
    illustrated: "realtime",
    title: "Realtime",
    description: "Respond to server events in realtime.",
  },
];

const mcpTools = [
  {
    href: "/docs/tooling/mcp/claude-desktop",
    icon: "/clikkle/images/docs/mcp/logos/dark/claude.svg",
    title: "Claude Desktop",
  },
  {
    href: "/docs/tooling/mcp/claude-code",
    icon: "/clikkle/images/docs/mcp/logos/dark/claude.svg",
    title: "Claude Code",
  },
  {
    href: "/docs/tooling/mcp/cursor",
    icon: "/clikkle/images/docs/mcp/logos/dark/cursor-ai.svg",
    title: "Cursor",
  },
  {
    href: "/docs/tooling/mcp/windsurf",
    icon: "/clikkle/images/docs/mcp/logos/dark/windsurf.svg",
    title: "Windsurf Editor",
  },
  {
    href: "/docs/tooling/mcp/vscode",
    icon: "/clikkle/images/docs/mcp/logos/dark/vscode.svg",
    title: "VS Code",
  },
  {
    href: "/docs/tooling/mcp/opencode",
    icon: "/clikkle/images/docs/mcp/logos/dark/opencode.svg",
    title: "OpenCode",
  },
  {
    href: "/docs/tooling/mcp/antigravity",
    icon: "/clikkle/images/docs/mcp/logos/dark/google-antigravity.svg",
    title: "Google Antigravity",
  },
];

const integrations = [
  {
    href: "/docs/sdks",
    title: "SDKs",
    description: "Light-weight SDKs for your favorite platforms.",
  },
  {
    href: "/docs/apis/rest",
    title: "REST API",
    description: "Integrate with HTTP requests without needing an SDK.",
  },
  {
    href: "/docs/apis/graphql",
    title: "GraphQL",
    description:
      "Leverage GraphQL through our SDKs or integrate directly with REST endpoints.",
  },
  {
    href: "/docs/apis/realtime",
    title: "Realtime",
    description:
      "Respond to auth, databases, storage, and function events in realtime.",
  },
];

const migrations = [
  {
    href: "/docs/advanced/migrations/self-hosted",
    title: "Self-hosted",
    description: "Move data from self-hosted to Clikkle Cloud.",
  },
  {
    href: "/docs/advanced/migrations/firebase",
    title: "Firebase",
    description: "Migrate users and data from Firebase to Clikkle.",
  },
  {
    href: "/docs/advanced/migrations/supabase",
    title: "Supabase",
    description: "Migrate users and data from Supabase to Clikkle.",
  },
  {
    href: "/docs/advanced/migrations/nhost",
    title: "Nhost",
    description: "Migrate users and data from NHost to Clikkle.",
  },
];

function DocCard({
  href,
  illustrated,
  title,
  description,
}: {
  href: string;
  illustrated?: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="web-card is-normal bg-[#212125]! hover:bg-[#212125]/90"
    >
      {illustrated ? (
        <>
          <img
            src={`${ILLUSTRATED_BASE}/dark/${illustrated}.png`}
            alt=""
            width={40}
            height={40}
            className="web-u-only-dark mb-1"
            loading="lazy"
          />
          <img
            src={`${ILLUSTRATED_BASE}/light/${illustrated}.png`}
            alt=""
            width={40}
            height={40}
            className="web-u-only-light mb-1"
            loading="lazy"
          />
        </>
      ) : null}
      <h4 className="text-[14px] font-medium leading-[1.2] text-[var(--color-primary)] mt-0 mb-0">{title}</h4>
      <p className="text-[14px] leading-[1.375] text-[var(--color-secondary)] mt-1 mb-0">{description}</p>
    </Link>
  );
}

function McpCard({
  href,
  icon,
  title,
}: {
  href: string;
  icon: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="web-card is-normal flex! flex-row! items-center! gap-4! w-full! bg-[#212125]! hover:bg-[#212125]/90! transition-colors"
    >
      <img src={icon} alt="" width={24} height={24} loading="lazy" />
      <h4 className="text-[14px] font-medium leading-[1.2] text-[var(--color-primary)] mt-0 mb-0">{title}</h4>
    </Link>
  );
}

function TutorialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-16">
      <div className="absolute -top-12 right-0 flex gap-2">
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-offset text-tertiary transition-colors hover:text-primary disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-offset text-tertiary transition-colors hover:text-primary disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {tutorials.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group w-82.5 shrink-0 overflow-hidden rounded-2xl transition-all hover:bg-smooth p-2 bg-[#2B2B2C]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="aspect-5/3 overflow-hidden">
              <img
                src={t.cover}
                alt={t.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105 rounded-md"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h4 className="text-[14px] font-medium leading-[1.2] text-primary">{t.title}</h4>
              <p className="mt-1 text-[14px] leading-[1.375] text-secondary">{t.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Clikkle `src/routes/docs/+page.svelte` — `web-main-section` + `web-hero` live in `DocsShell` */
export function DocsLandingContent() {
  return (
    <>
      <div className="pointer-events-none absolute -z-10 translate-x-96">
        <img src="/clikkle/images/bgs/docs-blur-1.svg" alt="" loading="lazy" />
      </div>
      <div className="web-u-opacity-40-mobile pointer-events-none absolute top-4 left-0 -z-10">
        <img
          src="/clikkle/images/bgs/docs-blur-2.png"
          alt=""
          className="h-auto max-w-none w-[600px]"
          loading="lazy"
        />
      </div>

      {/* `web-hero is-align-start e-hero-docs` — main padding from `.web-grid-side-nav .web-main-section` (break1) */}
      <section className="web-hero is-align-start e-hero-docs relative">
        <Link
          href="/docs/tooling/mcp"
          className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-[var(--color-badge-border)] bg-[var(--color-badge-bg)] px-4 py-1.5 text-sm font-medium text-secondary transition-colors hover:border-[var(--color-brand-primary)]"
        >
          <span className="flex items-center gap-1 text-[#2D63FF]">
            <Sparkles size={14} />
            New
          </span>
          <span>MCP Server</span>
          <ArrowRight size={14} className="text-tertiary" />
        </Link>

        <h1 className="text-display font-aeonik-pro text-primary max-w-[600px]">
          Docs<span className="text-[#2D63FF]">_ </span>
        </h1>
        <p className="text-description max-w-[600px] text-secondary">
          Clikkle helps you build secure and scalable apps, faster. Leverage Clikkle&apos;s
          powerful APIs to stop fighting technologies and start delivering value.
        </p>

        <Link href="/docs/quick-starts" className="web-button is-secondary mt-8 self-start">
          Quickstart guides
        </Link>
      </section>

      <section className="mt-12! w-full overflow-x-auto pt-10">
        <div className="inline-flex min-w-max items-center border border-(--color-border-subtle) border-dotted bg-transparent">
          {platforms.map((p) => {
            const light = "lightFile" in p ? p.lightFile : p.file;
            return (
              <Link
                key={p.href}
                href={p.href}
                className="group relative flex h-15 w-11.5 shrink-0 items-center justify-center border-r border-dotted border-(--color-border-subtle) transition-colors hover:bg-(--bg-secondary) last:border-r-0"
                title={p.name}
              >
                <span className="pointer-events-none absolute -top-10 left-1/2 z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-greyscale-750 px-2 py-1 text-xs text-primary opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
                  {p.name}
                </span>
                <>
                  <img
                    src={`/clikkle/images/platforms/dark/${p.file}.svg`}
                    alt=""
                    width={22}
                    height={22}
                    loading="lazy"
                    className="web-u-only-dark opacity-80 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <img
                    src={`/clikkle/images/platforms/light/${light}.svg`}
                    alt=""
                    width={22}
                    height={22}
                    loading="lazy"
                    className="web-u-only-light opacity-80 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-20!">
        <h2 className="text-title font-aeonik-pro text-primary max-w-[600px] md:text-5xl">
          Show me some code
        </h2>
        <p className="text-description mt-4 max-w-[600px] text-secondary">
          If you learn best from code examples, follow one of our tutorials.
        </p>
        <TutorialCarousel />
      </section>

      <section className="web-hero is-align-start is-no-max-width mt-12">
        <h2 className="text-title font-aeonik-pro text-primary max-w-[600px] md:text-5xl">
          Explore capabilities
        </h2>
        <p className="text-description mt-4 max-w-[600px] text-secondary">
          All the core functionalities you need with a scalable and flexible API. Explore
          Clikkle&apos;s product offerings.
        </p>
        <div className="mt-6">
          <ul className="web-grid-row-4 web-grid-row-4-mobile-1">
            {capabilities.map((c) => (
              <li key={c.title}>
                <DocCard {...c} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="web-hero is-align-start is-no-max-width mt-12">
        <h2 className="text-title font-aeonik-pro text-primary max-w-[600px] md:text-5xl">
          Build faster with AI
        </h2>
        <p className="text-description mt-1 max-w-[600px] text-secondary">
          Clikkle&apos;s Model Context Protocol (MCP) server lets LLMs interact directly with your
          Clikkle API.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 w-full">
          {mcpTools.map((t) => (
            <McpCard key={t.title} {...t} />
          ))}
        </div>
      </section>

      <section className="web-hero is-align-start is-no-max-width mt-12">
        <h2 className="text-title font-aeonik-pro text-primary max-w-[600px] md:text-5xl">
          Explore ways to integrate
        </h2>
        <p className="text-description mt-4 max-w-[600px] text-secondary">
          Choose how you integrate with Clikkle. Explore references for the Clikkle SDK, REST API,
          GraphQL API, or Realtime API.
        </p>
        <div className="mt-6">
          <ul className="web-grid-row-2">
            {integrations.map((i) => (
              <li key={i.title}>
                <DocCard {...i} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="web-hero is-align-start is-no-max-width mt-12 pb-40">
        <h2 className="text-title font-aeonik-pro text-primary max-w-[600px] md:text-5xl">
          Migrate to Clikkle
        </h2>
        <p className="text-description mt-1 max-w-[600px] text-secondary">
          Own your data with automatic data migrations.
        </p>
        <div className="mt-6">
          <ul className="web-grid-row-4">
            {migrations.map((m) => (
              <li key={m.title}>
                <DocCard {...m} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
