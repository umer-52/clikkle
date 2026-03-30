import { getDocBySlug, getAllDocSlugs, getTutorialSteps } from "@/lib/docs";
import React from "react";
import Markdoc from "@markdoc/markdoc";
import Link from "next/link";
import { ArrowRight, Info, ChevronLeft, Sparkles } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { Tabs, TabsItem } from "@/components/docs/tabs";
import { OnlyDark, OnlyLight, Section, CodeBlock } from "@/components/docs/markdoc-ui";
import { TutorialLayout } from "@/components/docs/tutorial-layout";
import { AiPromptBox } from "@/components/docs/ai-prompt-box";

// --- Custom Markdoc Components ---
function Cards({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

function CardsItem({ title, href, children }: { title: string; href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04] hover:border-white/10">
      <div>
        <h3 className="font-aeonik-pro text-lg font-bold text-white transition-colors group-hover:text-blue-500">{title}</h3>
        <div className="mt-2 text-sm text-white/50">{children}</div>
      </div>
    </Link>
  );
}

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group mt-6 inline-flex items-center justify-between rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 hover:border-white/30">
      <span className="underline decoration-white/30 underline-offset-4 group-hover:decoration-white/60 transition-colors">
        {children}
      </span>
      <ArrowRight className="h-4 w-4 ml-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

// Fallback callout for missing tags
function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 flex gap-4 text-white/80">
      <Info className="h-5 w-5 text-blue-500 flex-shrink-0" />
      <div>
        {title && <h4 className="font-bold text-white mb-1">{title}</h4>}
        <div className="text-sm prose-p:my-1">{children}</div>
      </div>
    </div>
  );
}

// Fallback component for undocumented or missing tags in Svelte->React migration
function DummyContainer({ name, children }: { name: string; children: React.ReactNode }) {
  return <div className="p-4 border border-dashed border-white/20 rounded-xl my-4"><div className="text-xs text-white/50 mb-2 font-mono">[{name}]</div>{children}</div>;
}

// Map the AST nodes to our React elements
const components = {
  Cards,
  CardsItem,
  ArrowLink,
  Callout,
  Tabs,
  TabsItem,
  MultiCode: ({ children }: any) => <DummyContainer name="MultiCode">{children}</DummyContainer>,
  Step: ({ children }: any) => <li className="mb-4">{children}</li>,
  Steps: ({ children }: any) => <ul className="list-decimal pl-6 my-6 text-white/80">{children}</ul>,
  Accordion: ({ children }: any) => <DummyContainer name="Accordion">{children}</DummyContainer>,
  AccordionItem: ({ children }: any) => <DummyContainer name="AccordionItem">{children}</DummyContainer>,
  CardsImageItem: ({ children }: any) => <DummyContainer name="CardsImageItem">{children}</DummyContainer>,
  Icon: ({ name }: any) => <span className="inline-block px-1 border border-white/20 rounded font-mono text-xs">{name}</span>,
  OnlyDark,
  OnlyLight,
  Partial: ({ file }: any) => <DummyContainer name={`Partial: ${file}`}>Missing Content</DummyContainer>,
  Section,
  CodeBlock,
  Table: ({ children }: any) => <div className="overflow-x-auto my-6"><table className="text-left border-collapse w-full">{children}</table></div>,
  Width: ({ children }: any) => <div className="w-full">{children}</div>,
  Heading: ({ level, id, children }: any) => {
    const Tag = `h${level}` as any;
    const levelClasses: Record<number, string> = {
      1: "text-3xl font-aeonik-pro font-bold text-white mt-12 mb-6",
      2: "text-2xl font-aeonik-pro font-bold text-white mt-10 mb-4",
      3: "text-xl font-aeonik-pro font-bold text-white mt-8 mb-4",
    };
    const classes = levelClasses[level as number] || "text-lg font-bold text-white mt-6 mb-4";
    
    return <Tag id={id} className={classes}>{children}</Tag>;
  },
  Paragraph: ({ children }: any) => <p className="leading-7 text-white/70 mb-4">{children}</p>,
  Link: ({ href, children }: any) => <Link href={href} className="text-blue-500 hover:text-blue-400 underline decoration-blue-500/30 underline-offset-2">{children}</Link>,
};


export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  
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

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  // Tutorial route intercept for /docs/tutorials/framework
  if (slug.length === 2 && slug[0] === "tutorials") {
    // e.g. /docs/tutorials/react -> /docs/tutorials/react/step-1
    redirect(`/docs/tutorials/${slug[1]}/step-1`);
  }

  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  // Render Markdoc AST to React elements
  const content = Markdoc.renderers.react(doc.content, React, { components });

  const isTutorial = doc.frontmatter?.layout === "tutorial" || doc.slug.startsWith("tutorials/");

  const mainBody = (
    <>
      {/* HERO META AND BACK BUTTON */}
      <div className="mb-8 flex items-start gap-6">
        {doc.frontmatter?.back && (
          <Link
            href={doc.frontmatter.back}
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#1C1C1E] text-white transition-colors hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5 pr-0.5" />
          </Link>
        )}
        
        <div>
          {(doc.frontmatter?.difficulty || doc.frontmatter?.readtime) && (
            <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/40">
              {doc.frontmatter?.difficulty}
              {doc.frontmatter?.difficulty && doc.frontmatter?.readtime && <span className="text-white/20">•</span>}
              {doc.frontmatter?.readtime && <span>{doc.frontmatter.readtime} min</span>}
            </div>
          )}
          {doc.frontmatter?.title && (
            <h1 className="text-4xl font-aeonik-pro font-bold tracking-tight text-white m-0">
              {doc.frontmatter.title}
            </h1>
          )}
        </div>
      </div>

      {doc.frontmatter?.description && (
        <p className="text-lg text-white/50 max-w-[700px]">
          {doc.frontmatter.description}
        </p>
      )}

      {/* INJECT AI PROMPT BOX FOR QUICK STARTS */}
      {doc.slug.startsWith("quick-starts/") && <AiPromptBox />}

      
      <article className="prose prose-invert prose-blue max-w-none mt-10">
        {content}
      </article>
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
      <div className="flex-1 min-w-0 max-w-[800px] pt-12 pb-24 px-6 md:px-10 lg:pl-[4rem]">
        {mainBody}
        
        {/* Simple Footer/Pagination placeholder */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-sm">
          <span className="text-white/40">Appwrite Documentation Clone</span>
        </div>
      </div>

      {/* Right Table of Contents Sidebar */}
      <aside className="hidden w-[240px] shrink-0 xl:block relative z-0 pl-1">
        <div className="sticky top-[64px] max-h-[calc(100vh-64px)] overflow-y-auto pt-16 pb-8 pr-4 hide-scrollbar">
          {doc.toc && doc.toc.length > 0 && (
            <div className="relative">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                On this page
              </h4>
              <nav className="flex flex-col space-y-3 relative border-l border-white/10 pl-4 border-l-transparent">
                <div className="absolute left-[-1px] top-0 bottom-0 w-px bg-white/10 transition-colors" />
                {doc.toc.map((heading) => (
                  <Link
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block py-1 text-sm font-medium transition-colors hover:text-white ${
                      heading.level === 3 ? "pl-4 text-white/50" : "text-white/60"
                    }`}
                  >
                    {heading.title}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </aside>

    </div>
  );
}
