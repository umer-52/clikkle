import {
  getDocBySlug,
  getAllDocSlugs,
  getDocRawMarkdown,
  getTutorialSeriesTitle,
  getTutorialStepsFull,
} from "@/lib/docs";
import { hasDocsRoutePrompt } from "@/lib/docs/route-prompts";
import { DocsCopyPage } from "@/components/docs/docs-copy-page";
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
import { DocsTutorialView } from "@/components/docs/docs-tutorial-view";
import { TutorialHeadingsProvider } from "@/components/docs/tutorial-headings-context";
import { TutorialCodeProvider } from "@/components/markdoc/tutorial-code-context";
import { AiPromptBox } from "@/components/docs/ai-prompt-box";
import { DatabasesArticleBanner } from "@/components/docs/databases-article-banner";
import { DocsArticleGridContent } from "@/components/docs/docs-article-grid-content";
import { DocsOnThisPage } from "@/components/docs/docs-on-this-page";
import { DocsProse } from "@/components/docs/docs-prose";
import { getDocsProseSurfaceClasses } from "@/lib/docs-prose-surface-classes";
import { resolveDocsVariantForSlug } from "@/lib/docs/resolve-docs-sidebar";
import { cn } from "@/lib/utils";
import { MultiCode } from "@/components/markdoc/multi-code";
import { MarkdocFence } from "@/components/markdoc/markdoc-fence";
import { DocsHeading } from "@/components/markdoc/docs-heading";
import { DocsInlineInfo } from "@/components/markdoc/docs-inline-info";
import { DocsCards, DocsCardsItem, DocsCardsImageItem } from "@/components/markdoc/docs-cards";
import { DocsAccordion, DocsAccordionItem } from "@/components/markdoc/docs-accordion";
import { DocsList } from "@/components/markdoc/docs-list";
import { DocsTable, TableTag } from "@/components/markdoc/docs-table";
import {
  DocsThead,
  DocsTbody,
  DocsTr,
  DocsTh,
  DocsTd,
} from "@/components/markdoc/docs-table-parts";
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
  Table: TableTag,
  Thead: DocsThead,
  Tbody: DocsTbody,
  Tr: DocsTr,
  Th: DocsTh,
  Td: DocsTd,
  Width: ({ children }: { children: React.ReactNode }) => (
    <span className="block w-full">{children}</span>
  ),
  Heading: DocsHeading,
  Paragraph: ({ children }: any) => (
    <p className="mb-4 leading-7 text-[var(--color-text-secondary)] dark:text-white/70">{children}</p>
  ),
  Link: ({ href, children }: any) => (
    <DocMarkdownLink href={href}>{children}</DocMarkdownLink>
  ),
  Image: ({ src, alt, width, height }: any) => {
    const prefixedSrc = src?.startsWith("/clikkle/") ? src : (src?.startsWith("/images/") ? `/clikkle${src}` : src);
    const w = width != null && width !== "" ? Number(width) : undefined;
    const h = height != null && height !== "" ? Number(height) : undefined;
    // Use <span className="block"> not <div>: Markdoc often nests images inside <Paragraph> (<p>),
    // and HTML forbids <div> inside <p> — browsers rewrite the DOM and break hydration.
    return (
      <span className="my-8 block overflow-hidden rounded-xl border border-[var(--color-border-subtle)] bg-[var(--bg-secondary)] dark:border-white/10 dark:bg-white/[0.02]">
        <img
          src={prefixedSrc}
          alt={alt ?? ""}
          {...(w != null && !Number.isNaN(w) ? { width: w } : {})}
          {...(h != null && !Number.isNaN(h) ? { height: h } : {})}
          className="h-auto w-full object-contain"
          decoding="async"
          loading="lazy"
        />
      </span>
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

  /* Appwrite `docs/products/databases/legacy/+page.ts` — static export needs the param row */
  allParams.push({ slug: ["products", "databases", "legacy"] });

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

  /* Appwrite `src/routes/docs/products/databases/legacy/+page.ts` */
  if (
    slug.length === 3 &&
    slug[0] === "products" &&
    slug[1] === "databases" &&
    slug[2] === "legacy"
  ) {
    redirect("/docs/products/databases/legacy/databases");
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

  const rawMarkdown = await getDocRawMarkdown(slug);

  // Render Markdoc AST to React elements
  const content = Markdoc.renderers.react(doc.content, React, { components });

  const isTutorial = doc.frontmatter?.layout === "tutorial" || doc.slug.startsWith("tutorials/");
  if (isTutorial) {
    if (slug.length < 3) {
      notFound();
    }
    const framework = slug[1];
    const stepSlug = slug[2];
    const stepsFull = getTutorialStepsFull(framework);
    const currentStepItem =
      stepsFull.find((s) => s.fileSlug === stepSlug) ?? stepsFull[0];
    if (!stepsFull.length || !currentStepItem) {
      notFound();
    }
    const seriesTitle = getTutorialSeriesTitle(framework);
    const back = String(doc.frontmatter?.back ?? "/docs/tutorials");
    const showTutorialCopy = !hasDocsRoutePrompt(slug) && rawMarkdown != null;

    return (
      <TutorialCodeProvider>
        <TutorialHeadingsProvider>
          <DocsTutorialView
            seriesTitle={seriesTitle}
            steps={stepsFull}
            currentStep={currentStepItem.step}
            currentStepItem={currentStepItem}
            back={back}
            copyMarkdown={showTutorialCopy ? rawMarkdown : null}
          >
            <div className={cn(getDocsProseSurfaceClasses(true), "max-w-none")}>{content}</div>
          </DocsTutorialView>
        </TutorialHeadingsProvider>
      </TutorialCodeProvider>
    );
  }

  const isArticleLayout = doc.frontmatter?.layout === "article";
  const layoutVariant = resolveDocsVariantForSlug(slug);
  const useArticleContentsGrid = isArticleLayout && layoutVariant === "two-side-navs";
  const showArticleCopy =
    isArticleLayout && !hasDocsRoutePrompt(slug) && rawMarkdown != null;

  /**
   * Appwrite `src/markdoc/layouts/Article.svelte`: `description` is SEO/meta only — the slot is
   * Markdoc body. We were also rendering `description` above the body, which duplicated the lead
   * on product overviews whose body repeats the same intro (e.g. Databases).
   */
  const suppressArticleDescriptionLead =
    isArticleLayout && doc.slug === "products/databases";

  const metadataRow =
    doc.frontmatter?.difficulty || doc.frontmatter?.readtime ? (
      <ul className="web-metadata text-caption mb-3 capitalize text-[var(--color-text-muted)] dark:text-white/50">
        {doc.frontmatter?.difficulty ? <li>{doc.frontmatter.difficulty}</li> : null}
        {doc.frontmatter?.difficulty && doc.frontmatter?.readtime ? (
          <li className="text-[var(--color-border-strong)] dark:text-white/25" aria-hidden>
            •
          </li>
        ) : null}
        {doc.frontmatter?.readtime ? <li>{doc.frontmatter.readtime} min</li> : null}
      </ul>
    ) : null;

  const titleBlock = doc.frontmatter?.title ? (
    <h1 className="text-title m-0 font-aeonik-pro tracking-tight text-primary">
      {doc.frontmatter.title}
    </h1>
  ) : null;

  const articleHeader = (
    <header
      className={
        useArticleContentsGrid
          ? "web-article-header flex items-start justify-between"
          : isArticleLayout
            ? "sticky top-0 z-[17] -mx-6 mb-6 border-b border-[var(--color-border-subtle)] bg-[var(--bg-primary)]/95 pb-8 pt-2 backdrop-blur-sm dark:border-white/[0.08] dark:bg-[var(--bg-primary)]/95 md:-mx-10 lg:pl-0"
            : "mb-8"
      }
    >
      {useArticleContentsGrid ? (
        <>
          <div className="web-article-header-start flex flex-col items-start gap-0">
            <div className="docs-article-mobile-header-row mb-2 flex w-full items-center lg:hidden">
              {doc.frontmatter?.back ? (
                <NextLink href={doc.frontmatter.back} className="web-icon-button" aria-label="Back">
                  <ChevronLeft className="h-5 w-5 pr-0.5" />
                </NextLink>
              ) : null}
              {showArticleCopy ? (
                <div className="copy-button-wrapper-mobile ml-auto">
                  <DocsCopyPage markdown={rawMarkdown!} className="ml-0" />
                </div>
              ) : null}
            </div>
            {metadataRow}
            <div className="relative flex items-center">
              {doc.frontmatter?.back ? (
                <NextLink
                  href={doc.frontmatter.back}
                  className="web-icon-button absolute start-0 top-1/2 hidden size-10 -translate-y-1/2 md:flex"
                  style={{ marginInlineStart: "-2.75rem" }}
                  aria-label="Back"
                >
                  <ChevronLeft className="h-5 w-5 pr-0.5" />
                </NextLink>
              ) : null}
              {titleBlock}
            </div>
          </div>
          {showArticleCopy ? (
            <div className="web-article-header-end copy-button-wrapper hidden self-center lg:block">
              <DocsCopyPage markdown={rawMarkdown!} className="ml-0" />
            </div>
          ) : null}
        </>
      ) : isArticleLayout ? (
        <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-full items-center justify-between gap-3 lg:hidden">
            <div className="flex items-center gap-2">
              {doc.frontmatter?.back ? (
                <NextLink href={doc.frontmatter.back} className="web-icon-button" aria-label="Back">
                  <ChevronLeft className="h-5 w-5 pr-0.5" />
                </NextLink>
              ) : null}
            </div>
            {showArticleCopy ? <DocsCopyPage markdown={rawMarkdown!} /> : null}
          </div>
          <div className="flex min-w-0 flex-1 items-start gap-4 md:gap-6">
            {doc.frontmatter?.back ? (
              <NextLink
                href={doc.frontmatter.back}
                className="mt-1 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--bg-secondary)] text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-smooth)] lg:flex dark:border-white/10 dark:bg-[var(--bg-secondary)] dark:text-white dark:hover:bg-white/10"
                aria-label="Back"
              >
                <ChevronLeft className="h-5 w-5 pr-0.5" />
              </NextLink>
            ) : null}
            <div className="min-w-0 flex-1">
              {metadataRow}
              {titleBlock}
            </div>
          </div>
          {showArticleCopy ? (
            <div className="copy-button-wrapper hidden shrink-0 self-center lg:block">
              <DocsCopyPage markdown={rawMarkdown!} />
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex items-start gap-4">
          {doc.frontmatter?.back ? (
            <NextLink
              href={doc.frontmatter.back}
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--bg-secondary)] text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-smooth)] dark:border-white/10 dark:bg-[var(--bg-secondary)] dark:text-white dark:hover:bg-white/10"
              aria-label="Back"
            >
              <ChevronLeft className="h-5 w-5 pr-0.5" />
            </NextLink>
          ) : null}
          <div className="min-w-0 flex-1">
            {metadataRow}
            {titleBlock}
          </div>
        </div>
      )}
    </header>
  );

  const descriptionBlock =
    doc.frontmatter?.description && !suppressArticleDescriptionLead ? (
      <p
        className={
          isArticleLayout
            ? "text-description mb-6 max-w-none font-medium text-[var(--color-text-secondary)] dark:text-white/60"
            : "mb-6 max-w-[700px] text-lg text-[var(--color-text-muted)] dark:text-white/50"
        }
      >
        {doc.frontmatter.description}
      </p>
    ) : null;

  const databasesBanner =
    isArticleLayout && doc.slug.startsWith("products/databases") ? (
      <DatabasesArticleBanner slug={slug} />
    ) : null;

  const proseBody = (
    <DocsProse
      isArticleLayout={isArticleLayout}
      contentOnly={useArticleContentsGrid}
    >
      {content}
    </DocsProse>
  );

  const tocAside =
    doc.toc && doc.toc.length > 0 ? (
      <aside className="web-references-menu ps-6">
        <DocsOnThisPage items={doc.toc} />
      </aside>
    ) : null;

  const articleGridBelowHeader = (
    <>
      {databasesBanner}
      {doc.slug.startsWith("quick-starts/") ? <AiPromptBox /> : null}
      {proseBody}
    </>
  );

  const mainBody = useArticleContentsGrid ? (
    <>
      {articleHeader}
      <DocsArticleGridContent
        className={cn("pb-24", getDocsProseSurfaceClasses(isArticleLayout))}
      >
        {descriptionBlock}
        {suppressArticleDescriptionLead ? (
          <div className="mt-6">{articleGridBelowHeader}</div>
        ) : (
          articleGridBelowHeader
        )}
      </DocsArticleGridContent>
      {tocAside}
    </>
  ) : (
    <>
      {articleHeader}
      {descriptionBlock}
      {suppressArticleDescriptionLead ? (
        <div className="mt-6">{articleGridBelowHeader}</div>
      ) : (
        articleGridBelowHeader
      )}
    </>
  );

  if (useArticleContentsGrid) {
    return (
      <main className="contents" id="main">
        <article className="web-article contents">{mainBody}</article>
      </main>
    );
  }

  return (
    <div className="flex w-full flex-row overflow-visible xl:gap-14 2xl:gap-24">
      <div
        className={`min-w-0 flex-1 px-6 pb-24 pt-12 md:px-10 lg:pl-[4rem] ${
          isArticleLayout ? "max-w-[41.5rem]" : "max-w-[800px]"
        }`}
      >
        {mainBody}
      </div>

      <aside className="relative z-0 hidden w-[240px] shrink-0 pl-1 xl:block">
        <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto pb-8 pr-4 pt-16 hide-scrollbar">
          {doc.toc && doc.toc.length > 0 ? (
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
          ) : null}
        </div>
      </aside>
    </div>
  );
}
