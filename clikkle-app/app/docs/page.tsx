"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

/* ─── Data ─── */

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

const capabilities = [
  {
    href: "/docs/products/auth",
    icon: "/clikkle/images/icons/illustrated/dark/auth.png",
    title: "Auth",
    description: "Sign in users with multiple OAuth providers.",
  },
  {
    href: "/docs/products/databases",
    icon: "/clikkle/images/icons/illustrated/dark/databases.png",
    title: "Databases",
    description: "Store your application and user data.",
  },
  {
    href: "/docs/products/functions",
    icon: "/clikkle/images/icons/illustrated/dark/functions.png",
    title: "Functions",
    description: "Extend and customize your server's functionality.",
  },
  {
    href: "/docs/products/sites",
    icon: "/clikkle/images/icons/illustrated/dark/sites.png",
    title: "Sites",
    description: "Deploy websites on the internet at scale.",
  },
  {
    href: "/docs/products/messaging",
    icon: "/clikkle/images/icons/illustrated/dark/messaging.png",
    title: "Messaging",
    description: "Send and schedule email, SMS, and push notifications.",
  },
  {
    href: "/docs/products/storage",
    icon: "/clikkle/images/icons/illustrated/dark/storage.png",
    title: "Storage",
    description: "Store images, videos, documents, and files.",
  },
  {
    href: "/docs/products/avatars",
    icon: "/clikkle/images/icons/illustrated/dark/avatars.png",
    title: "Avatars",
    description: "Generate icons, screenshots, and QR codes for your apps.",
  },
  {
    href: "/docs/apis/realtime",
    icon: "/clikkle/images/icons/illustrated/dark/realtime.png",
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

/* Platform icon strip — matching the clikkle.io docs hero */
const platformIcons = [
  "nextjs", "react", "vue", "angular", "svelte", "nuxt",
  "remix", "apple", "android", "kotlin", "swift", "react-native",
  "nodejs", "php", "deno", "dotnet", "go", "python",
];

/* ─── Components ─── */

function DocCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon?: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-1 rounded-2xl border border-offset bg-card p-5 transition-all hover:bg-smooth"
    >
      {icon ? (
        <img src={icon}
          alt=""
          width={40}
          height={40}
          className="mb-1"
          loading="lazy" />
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
      {/* Nav arrows */}
      <div className="absolute -top-12 right-0 flex gap-2">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-offset text-tertiary transition-colors hover:text-primary disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>
        <button
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
              <img src={t.cover}
                alt={t.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy" />
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

/* ─── Page ─── */

export default function DocsPage() {
  return (
    <div className="relative">
      {/* BGS */}
      <div className="absolute top-0 left-12 -z-10 translate-x-32 md:translate-x-96 opacity-60">
        <img src="/clikkle/images/bgs/docs-blur-1.svg" alt="" className="w-[800px] h-auto max-w-none" loading="lazy" />
      </div>
      <div className="absolute top-4 -left-12 -z-10 opacity-40 md:opacity-60">
        <img src="/clikkle/images/bgs/docs-blur-2.png" alt="" className="w-[600px] h-auto max-w-none" loading="lazy" />
      </div>

      {/* Hero */}
      <section className="relative mt-8 xl:mt-20">
        {/* Announcement badge */}
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

        <h1 className="font-aeonik-pro text-[4rem] font-bold leading-none tracking-tight text-primary md:text-[5rem]">
          Docs<span className="text-[#2D63FF]">_</span>
        </h1>
        <p className="mt-6 max-w-[600px] text-lg text-secondary">
          Clikkle helps you build secure and scalable apps, faster. Leverage
          Clikkle&apos;s powerful APIs to stop fighting technologies and start
          delivering value.
        </p>

        <Link
          href="/docs/quick-starts"
          className="mt-8 inline-flex items-center justify-center rounded-lg border border-[#2D63FF] px-6 py-2.5 text-sm font-semibold text-[#2D63FF] transition-colors hover:bg-[#2D63FF] hover:text-white"
        >
          Quickstart guides
        </Link>
      </section>

      {/* Platform Icons Strip */}
      <section className="mt-12 flex flex-wrap gap-4">
        {platformIcons.map((name) => (
          <div
            key={name}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border-subtle)] bg-[var(--bg-secondary)] text-tertiary"
          >
            <img src={`/clikkle/images/platforms/dark/${name}.svg`}
              alt={name}
              width={24}
              height={24}
              loading="lazy"
              className="opacity-50"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        ))}
      </section>

      {/* Show Me Some Code */}
      <section className="mt-12">
        <h2 className="font-aeonik-pro text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Show me some code
        </h2>
        <p className="mt-4 max-w-[600px] text-secondary">
          If you learn best from code examples, follow one of our tutorials.
        </p>
        <TutorialCarousel />
      </section>

      {/* Explore Capabilities */}
      <section className="mt-12">
        <h2 className="font-aeonik-pro text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Explore capabilities
        </h2>
        <p className="mt-4 max-w-[600px] text-secondary">
          All the core functionalities you need with a scalable and flexible
          API. Explore Clikkle&apos;s product offerings.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <DocCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* Build faster with AI */}
      <section className="mt-12">
        <h2 className="font-aeonik-pro text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Build faster with AI
        </h2>
        <p className="mt-4 max-w-[600px] text-secondary">
          Clikkle&apos;s Model Context Protocol (MCP) server lets LLMs interact
          directly with your Clikkle API.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {mcpTools.map((t) => (
            <McpCard key={t.title} {...t} />
          ))}
        </div>
      </section>

      {/* Explore ways to integrate */}
      <section className="mt-12">
        <h2 className="font-aeonik-pro text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Explore ways to integrate
        </h2>
        <p className="mt-4 max-w-[600px] text-secondary">
          Choose how you integrate with Clikkle. Explore references for the
          Clikkle SDK, REST API, GraphQL API, or Realtime API.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          {integrations.map((i) => (
            <DocCard key={i.title} {...i} />
          ))}
        </div>
      </section>

      {/* Migrate to Clikkle */}
      <section className="mt-12 pb-20">
        <h2 className="font-aeonik-pro text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Migrate to Clikkle
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

    </div>
  );
}
