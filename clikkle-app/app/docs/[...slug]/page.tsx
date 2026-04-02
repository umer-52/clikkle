import { getDocBySlug, getAllDocSlugs, getTutorialSteps } from "@/lib/docs";
import { ReferenceServicePage } from "@/components/references/reference-service-page";
import { loadReferenceServicePageData } from "@/lib/references/load-reference-service";
import { isReferenceServiceSlug } from "@/lib/references/reference-slug";
import { serviceMap } from "@/lib/references/constants";
import React from "react";
import Markdoc from "@markdoc/markdoc";
import type { Metadata } from "next";
import NextLink from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { Tabs, TabsItem } from "@/components/docs/tabs";
import { OnlyDark, OnlyLight, Section } from "@/components/docs/markdoc-ui";
import { TutorialLayout } from "@/components/docs/tutorial-layout";
import { AiPromptBox } from "@/components/docs/ai-prompt-box";
import { DocsProse } from "@/components/docs/docs-prose";
import { MultiCode } from "@/components/markdoc/multi-code";
import { MarkdocFence } from "@/components/markdoc/markdoc-fence";
import { DocsHeading } from "@/components/markdoc/docs-heading";
import { DocsInlineInfo } from "@/components/markdoc/docs-inline-info";
import { DocsCards, DocsCardsItem, DocsCardsImageItem } from "@/components/markdoc/docs-cards";
import { DocsAccordion, DocsAccordionItem } from "@/components/markdoc/docs-accordion";
import { DocsList } from "@/components/markdoc/docs-list";
import { DocsTable } from "@/components/markdoc/docs-table";
import { DocsIcon } from "@/components/markdoc/docs-icon";
import { DocsIconImage } from "@/components/markdoc/docs-icon-image";

const LINK_WHITELIST = ["clikkle.io", "cloud.clikkle.io"];

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href || "");
}

function isExternalAndNotWhitelisted(href: string) {
  if (!["http://", "https://"].some((p) => href.startsWith(p))) return false;
  try {
    const hostname = new URL(href).hostname.replace(/^www\./, "");
    return !LINK_WHITELIST.includes(hostname);
  } catch {
    return true;
  }
}

/** Appwrite `Link.svelte`: whitelisted hosts stay followable; optional dofollow query stripped. */
function DocMarkdownLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const cn =
    "font-medium text-[#2D63FF] underline decoration-[#2D63FF]/35 underline-offset-2 hover:text-[#6b93ff]";
  let nextHref = href;
  const doFollow = nextHref.includes("?dofollow=true") || nextHref.includes("&dofollow=true");
  if (doFollow) {
    nextHref = nextHref.replace(/[?&]dofollow=true/g, "").replace(/[?&]$/, "");
  }
  if (isExternalHref(nextHref)) {
    const target = isExternalAndNotWhitelisted(nextHref) ? "_blank" : undefined;
    const rel =
      target === "_blank" ? `noopener${doFollow ? "" : " nofollow"}` : undefined;
    return (
      <a href={nextHref} className={cn} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={nextHref} className={cn}>
      {children}
    </NextLink>
  );
}

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  const cn =
    "group mt-6 inline-flex w-full max-w-full items-center justify-between rounded-lg border border-[var(--color-border-default)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-smooth)] sm:w-auto dark:border-white/15 dark:text-white dark:hover:border-white/25 dark:hover:bg-white/[0.06]";
  const inner = (
    <>
      <span className="underline decoration-[var(--color-border-strong)] underline-offset-4 transition-colors group-hover:decoration-[var(--color-brand-primary)] dark:decoration-white/30 dark:group-hover:decoration-white/60">
        {children}
      </span>
      <ArrowRight className="ml-4 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
    </>
  );
  if (isExternalHref(href)) {
    return (
      <a href={href} className={cn} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return <NextLink href={href} className={cn}>{inner}</NextLink>;
}

function PartialTag() {
  return null;
}

// Map the AST nodes to our React elements (names match `lib/docs.ts` markdocConfig `render` keys).
const components = {
  Cards: DocsCards,
  CardsItem: DocsCardsItem,
  ArrowLink,
  DocsInlineInfo,
  Tabs,
  TabsItem,
  MultiCode,
  Step: ({ children }: { children: React.ReactNode }) => <li className="mb-4">{children}</li>,
  Steps: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-6 list-decimal pl-6 text-[var(--color-text-secondary)] dark:text-white/80">{children}</ul>
  ),
  Accordion: DocsAccordion,
  AccordionItem: DocsAccordionItem,
  CardsImageItem: DocsCardsImageItem,
  Icon: DocsIcon,
  IconImage: DocsIconImage,
  OnlyDark,
  OnlyLight,
  Partial: PartialTag,
  Section,
  MarkdocFence,
  List: DocsList,
  DocsTable,
  Table: ({ children }: { children: React.ReactNode }) => <DocsTable>{children}</DocsTable>,
  Width: ({ children }: { children: React.ReactNode }) => <div className="w-full">{children}</div>,
  Heading: DocsHeading,
  Paragraph: ({ children }: any) => (
    <p className="mb-4 leading-7 text-[var(--color-text-secondary)] dark:text-white/70">{children}</p>
  ),
  Link: ({ href, children }: any) => (
    <DocMarkdownLink href={href}>{children}</DocMarkdownLink>
  ),
  Image: ({ src, alt, width, height }: any) => {
    const prefixedSrc = src?.startsWith("/clikkle/") ? src : (src?.startsWith("/images/") ? `/clikkle${src}` : src);
    return (
      <div className="my-8 overflow-hidden rounded-xl border border-[var(--color-border-subtle)] bg-[var(--bg-secondary)] dark:border-white/10 dark:bg-white/[0.02]">
        <img src={prefixedSrc} 
          alt={alt || ""} 
          width={width} 
          height={height} 
          className="h-auto w-full object-contain"
          loading="lazy" />
      </div>
    );
  },
};


export async function generateStaticParams() {
  const slugs = await getAllDocSlugs();
  
  // Find all unique tutorial frameworks (e.g. ['tutorials', 'react', 'step-1'] -> 'react')
  const tutorialFrameworks = new Set<string>();
  slugs.forEach((slugPath) => {
    if (slugPath.length >= 3 && slugPath[0] === "tutorials") {
      tutorialFrameworks.add(slugPath[1]);
    }
  });

  // Create the base slugs
  const allParams = slugs.map((slugPath) => ({
    slug: slugPath,
  }));

  // Append the missing base tutorial paths to allow the redirect to be statically generated
  tutorialFrameworks.forEach((framework) => {
    allParams.push({ slug: ["tutorials", framework] });
  });

  return allParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isReferenceServiceSlug(slug)) {
    return {};
  }
  const data = await loadReferenceServicePageData(slug[1], slug[2], slug[3]);
  if (!data) {
    return {};
  }
  const serviceName = serviceMap[data.service.name];
  const cleaned = (data.service.description ?? "").replace(/\[([^\]]+)]\([^)]+\)/g, "$1");
  const dot = cleaned.indexOf(".");
  const shortened = dot >= 0 ? cleaned.substring(0, dot + 1) : cleaned.slice(0, 160);
  return {
    title: `${serviceName} API Reference`,
    description: shortened,
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  // Tutorial route intercept for /docs/tutorials/framework
  if (slug.length === 2 && slug[0] === "tutorials") {
    // e.g. /docs/tutorials/react -> /docs/tutorials/react/step-1
    redirect(`/docs/tutorials/${slug[1]}/step-1`);
  }

  if (isReferenceServiceSlug(slug)) {
    const data = await loadReferenceServicePageData(slug[1], slug[2], slug[3]);
    if (!data) {
      notFound();
    }
    return (
      <ReferenceServicePage
        data={data}
        versionParam={slug[1]}
        platformParam={slug[2]}
        serviceSlug={slug[3]}
      />
    );
  }

  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  // Render Markdoc AST to React elements
  const content = Markdoc.renderers.react(doc.content, React, { components });

  const isTutorial = doc.frontmatter?.layout === "tutorial" || doc.slug.startsWith("tutorials/");
  const isArticleLayout = doc.frontmatter?.layout === "article";

  const mainBody = (
    <>
      <header
        className={
          isArticleLayout
            ? "sticky top-0 z-[17] -mx-6 mb-6 border-b border-[var(--color-border-subtle)] bg-[var(--bg-primary)]/95 pb-8 pt-2 backdrop-blur-sm dark:border-white/[0.08] dark:bg-[#19191c]/95 md:-mx-10 lg:pl-0"
            : "mb-8"
        }
      >
        <div className={`flex items-start gap-4 ${isArticleLayout ? "md:gap-6" : ""}`}>
          {doc.frontmatter?.back && (
            <NextLink
              href={doc.frontmatter.back}
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--bg-secondary)] text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-smooth)] dark:border-white/10 dark:bg-[#1C1C1E] dark:text-white dark:hover:bg-white/10"
              aria-label="Back"
            >
              <ChevronLeft className="h-5 w-5 pr-0.5" />
            </NextLink>
          )}

          <div className="min-w-0 flex-1">
            {(doc.frontmatter?.difficulty || doc.frontmatter?.readtime) && (
              <ul className="mb-3 flex list-none flex-wrap items-center gap-2 p-0 text-[0.6875rem] font-bold uppercase tracking-wider text-[var(--color-text-muted)] dark:text-white/40">
                {doc.frontmatter?.difficulty ? (
                  <li className="m-0">{doc.frontmatter.difficulty}</li>
                ) : null}
                {doc.frontmatter?.difficulty && doc.frontmatter?.readtime ? (
                  <li className="m-0 text-[var(--color-border-strong)] dark:text-white/20" aria-hidden>
                    •
                  </li>
                ) : null}
                {doc.frontmatter?.readtime ? (
                  <li className="m-0">{doc.frontmatter.readtime} min</li>
                ) : null}
              </ul>
            )}
            {doc.frontmatter?.title ? (
              <h1 className="text-title m-0 font-aeonik-pro font-bold tracking-tight text-[var(--color-text-primary)] dark:text-white">
                {doc.frontmatter.title}
              </h1>
            ) : null}
          </div>
        </div>
      </header>

      {doc.frontmatter?.description ? (
        <p
          className={
            isArticleLayout
              ? "text-description mb-6 max-w-none font-medium text-[var(--color-text-secondary)] dark:text-white/60"
              : "mb-6 max-w-[700px] text-lg text-[var(--color-text-muted)] dark:text-white/50"
          }
        >
          {doc.frontmatter.description}
        </p>
      ) : null}

      {doc.slug.startsWith("quick-starts/") ? <AiPromptBox /> : null}

      <DocsProse isArticleLayout={isArticleLayout}>{content}</DocsProse>
    </>
  );

  if (isTutorial) {
    // Use slug[1] because path is tutorials/react/step-1
    const steps = getTutorialSteps(slug[1]);
    return <TutorialLayout steps={steps}>{mainBody}</TutorialLayout>;
  }

  return (
    <div className="flex w-full flex-row xl:gap-14 2xl:gap-24 overflow-visible">
      
      {/* Main Document Body */}
      <div
        className={`min-w-0 flex-1 px-6 pb-24 pt-12 md:px-10 lg:pl-[4rem] ${
          isArticleLayout ? "max-w-[41.5rem]" : "max-w-[800px]"
        }`}
      >
        {mainBody}
      </div>

      {/* Right Table of Contents Sidebar */}
      <aside className="hidden w-[240px] shrink-0 xl:block relative z-0 pl-1">
        <div className="sticky top-[64px] max-h-[calc(100vh-64px)] overflow-y-auto pt-16 pb-8 pr-4 hide-scrollbar">
          {doc.toc && doc.toc.length > 0 && (
            <div className="relative">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] dark:text-white/50">
                On this page
              </h4>
              <nav className="relative flex flex-col space-y-3 border-l border-l-transparent border-[var(--color-border-subtle)] pl-4 dark:border-white/10">
                <div className="absolute bottom-0 left-[-1px] top-0 w-px bg-[var(--color-border-subtle)] transition-colors dark:bg-white/10" />
                {doc.toc.map((heading) => (
                  <NextLink
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block py-1 text-sm font-medium transition-colors hover:text-[var(--color-text-primary)] dark:hover:text-white ${
                      heading.level === 3
                        ? "pl-4 text-[var(--color-text-muted)] dark:text-white/50"
                        : "text-[var(--color-text-secondary)] dark:text-white/60"
                    }`}
                  >
                    {heading.title}
                  </NextLink>
                ))}
              </nav>
            </div>
          )}
        </div>
      </aside>

    </div>
  );
}
