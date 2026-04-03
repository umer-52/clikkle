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
    description: "Learn Appwrite Auth, Databases, and more with React.",
  },
  {
    href: "/docs/tutorials/nextjs",
    cover: "/clikkle/images/tutorials/nextjs.png",
    title: "Next.js tutorial",
    description: "Learn Appwrite Auth, Databases, and more with Next.js.",
  },
  {
    href: "/docs/tutorials/sveltekit",
    cover: "/clikkle/images/tutorials/svelte.png",
    title: "SvelteKit tutorial",
    description: "Learn Appwrite Auth, Databases, and more with SvelteKit.",
  },
  {
    href: "/docs/tutorials/vue",
    cover: "/clikkle/images/tutorials/vue.png",
    title: "Vue tutorial",
    description: "Learn Appwrite Auth, Databases, and more with Vue.",
  },
  {
    href: "/docs/tutorials/android",
    cover: "/clikkle/images/tutorials/android.png",
    title: "Android tutorial",
    description: "Learn Appwrite Auth, Databases, and more with Android.",
  },
  {
    href: "/docs/tutorials/flutter",
    cover: "/clikkle/images/tutorials/flutter.png",
    title: "Flutter tutorial",
    description: "Learn Appwrite Auth, Databases, and more with Flutter.",
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
    description: "Move data from self-hosted to Appwrite Cloud.",
  },
  {
    href: "/docs/advanced/migrations/firebase",
    title: "Firebase",
    description: "Migrate users and data from Firebase to Appwrite.",
  },
  {
    href: "/docs/advanced/migrations/supabase",
    title: "Supabase",
    description: "Migrate users and data from Supabase to Appwrite.",
  },
  {
    href: "/docs/advanced/migrations/nhost",
    title: "Nhost",
    description: "Migrate users and data from NHost to Appwrite.",
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
      className="group flex flex-col gap-1 rounded-2xl border border-offset bg-card p-5 transition-all hover:bg-smooth"
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
      <h4 className="text-[14px] font-medium leading-[1.2] text-primary">{title}</h4>
      <p className="text-[14px] leading-[1.375] text-secondary">{description}</p>
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
      className="flex items-center gap-2 rounded-2xl border border-offset bg-card p-5 transition-all hover:bg-smooth"
    >
      <img src={icon} alt="" width={24} height={24} loading="lazy" />
      <h4 className="text-[14px] font-medium leading-[1.2] text-primary">{title}</h4>
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
    <div className="relative mt-8">
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
            className="group w-[260px] shrink-0 overflow-hidden rounded-2xl border border-offset bg-card transition-all hover:bg-smooth"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={t.cover}
                alt={t.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
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

/** Appwrite `src/routes/docs/+page.svelte` */
export function DocsLandingContent() {
  return (
    <main className="web-main-section relative overflow-x-hidden" id="main">
      <div className="absolute top-0 left-12 -z-10 translate-x-32 opacity-60 md:translate-x-96">
        <img
          src="/clikkle/images/bgs/docs-blur-1.svg"
          alt=""
          className="h-auto max-w-none w-[800px]"
          loading="lazy"
        />
      </div>
      <div className="absolute top-4 -left-12 -z-10 opacity-40 md:opacity-60">
        <img
          src="/clikkle/images/bgs/docs-blur-2.png"
          alt=""
          className="h-auto max-w-none w-[600px]"
          loading="lazy"
        />
      </div>

      <section className="relative mt-8 xl:mt-20">
        <Link
          href="/docs/tooling/mcp"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-badge-border)] bg-[var(--color-badge-bg)] px-4 py-1.5 text-sm font-medium text-secondary transition-colors hover:border-[var(--color-brand-primary)]"
        >
          <span className="flex items-center gap-1 text-[#2D63FF]">
            <Sparkles size={14} />
            New
          </span>
          <span>MCP Server</span>
          <ArrowRight size={14} className="text-tertiary" />
        </Link>

        <h1 className="font-aeonik-pro text-[4rem] leading-none font-bold tracking-tight text-primary md:text-[5rem]">
          Docs<span className="text-[#2D63FF]">_</span>
        </h1>
        <p className="mt-6 max-w-[600px] text-lg text-secondary">
          Appwrite helps you build secure and scalable apps, faster. Leverage Appwrite&apos;s
          powerful APIs to stop fighting technologies and start delivering value.
        </p>

        <Link
          href="/docs/quick-starts"
          className="mt-8 inline-flex items-center justify-center rounded-lg border border-[#2D63FF] px-6 py-2.5 text-sm font-semibold text-[#2D63FF] transition-colors hover:bg-[#2D63FF] hover:text-white"
        >
          Quickstart guides
        </Link>
      </section>

      <section className="mt-12 flex flex-wrap gap-4">
        {platforms.map((p) => {
          const light = "lightFile" in p ? p.lightFile : p.file;
          return (
            <Link
              key={p.href}
              href={p.href}
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border-subtle)] bg-[var(--bg-secondary)] text-tertiary transition-colors hover:border-[var(--color-border-strong)]"
              title={p.name}
            >
              <>
                <img
                  src={`/clikkle/images/platforms/dark/${p.file}.svg`}
                  alt=""
                  width={24}
                  height={24}
                  loading="lazy"
                  className="web-u-only-dark grayscale transition-all duration-300 group-hover:grayscale-0"
                />
                <img
                  src={`/clikkle/images/platforms/light/${light}.svg`}
                  alt=""
                  width={24}
                  height={24}
                  loading="lazy"
                  className="web-u-only-light grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </>
            </Link>
          );
        })}
      </section>

      <section className="mt-12">
        <h2 className="font-aeonik-pro text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Show me some code
        </h2>
        <p className="mt-4 max-w-[600px] text-secondary">
          If you learn best from code examples, follow one of our tutorials.
        </p>
        <TutorialCarousel />
      </section>

      <section className="mt-12">
        <h2 className="font-aeonik-pro text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Explore capabilities
        </h2>
        <p className="mt-4 max-w-[600px] text-secondary">
          All the core functionalities you need with a scalable and flexible API. Explore
          Appwrite&apos;s product offerings.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <DocCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-aeonik-pro text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Build faster with AI
        </h2>
        <p className="mt-4 max-w-[600px] text-secondary">
          Appwrite&apos;s Model Context Protocol (MCP) server lets LLMs interact directly with your
          Appwrite API.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {mcpTools.map((t) => (
            <McpCard key={t.title} {...t} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-aeonik-pro text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Explore ways to integrate
        </h2>
        <p className="mt-4 max-w-[600px] text-secondary">
          Choose how you integrate with Appwrite. Explore references for the Appwrite SDK, REST API,
          GraphQL API, or Realtime API.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          {integrations.map((i) => (
            <DocCard key={i.title} {...i} />
          ))}
        </div>
      </section>

      <section className="mt-12 pb-20">
        <h2 className="font-aeonik-pro text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Migrate to Appwrite
        </h2>
        <p className="mt-4 max-w-[600px] text-secondary">
          Own your data with automatic data migrations.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {migrations.map((m) => (
            <DocCard key={m.title} {...m} />
          ))}
        </div>
      </section>
    </main>
  );
}
