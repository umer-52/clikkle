"use client";

import {
  DOC_TUTORIAL_MAIN_HEADING_ID,
  useTutorialHeadingsList,
} from "@/components/docs/tutorial-headings-context";
import { DocsHeading } from "@/components/markdoc/docs-heading";
import type { TutorialStepFull } from "@/lib/docs";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NextLink from "next/link";
import { useEffect, useRef, type ReactNode } from "react";

function getCorrectTitle(stepItem: TutorialStepFull, checkAt: number) {
  if (stepItem.step === checkAt) return "Introduction";
  return stepItem.title;
}

function scrollToElement(pageHash: string) {
  const element = document.getElementById(pageHash);
  if (!element) return;
  const offset = 50;
  const rect = element.getBoundingClientRect();
  window.scroll({ top: window.scrollY + rect.top - offset });
}

function TutorialStepsAside({
  steps,
  currentStep,
}: {
  steps: TutorialStepFull[];
  currentStep: number;
}) {
  const toc = useTutorialHeadingsList();
  const absoluteToc = toc.slice(1);

  const subTocKey = absoluteToc.map((t) => t.id).join("|");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || absoluteToc.length === 0) return;
    const firstId = absoluteToc[0]?.id;
    if (!firstId || hash !== firstId) return;
    scrollToElement(hash);
  }, [subTocKey]);

  function scrollToItem(parentHref: string, innerIndex: number) {
    if (absoluteToc.length === 0) return;
    const id = parentHref.replace(/^#/, "");
    const element = document.getElementById(id);
    if (innerIndex === 0) {
      scrollToElement(id);
    } else {
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    history.pushState(null, "", parentHref);
  }

  return (
    <aside className="docs-tutorial-rail web-references-menu min-w-0 ps-6">
      {/*
        Appwrite `DocsTutorial.svelte` + `table-of-contents` parity: sticky shell from
        `_grid-two-side-navs.scss`; scrollable steps live in `.docs-toc-body > .web-references-menu-list`
        (`docs-web-layout.css`), same as `DocsOnThisPage`.
      */}
      <div className="web-references-menu-content web-references-menu-sticky-inner">
        <div className="flex shrink-0 items-center justify-between gap-4">
          <h5 className="web-references-menu-title text-eyebrow font-aeonik-fono uppercase">
            Tutorial Steps
          </h5>
        </div>
        <div className="docs-toc-body">
          <ol className="web-references-menu-list docs-tutorial-steps-ol docs-toc-scroll flex list-none flex-col">
            {steps.map((tutorial, index) => {
              const isCurrentStep = currentStep === tutorial.step;
              return (
                <li key={tutorial.href} className="web-references-menu-item">
                  <NextLink
                    href={tutorial.href}
                    className={cn(
                      "web-references-menu-link text-caption",
                      isCurrentStep && "is-selected",
                      isCurrentStep && absoluteToc.length === 0 && "tutorial-scroll-indicator"
                    )}
                  >
                    <span className="web-numeric-badge docs-numeric-badge shrink-0">{tutorial.step}</span>
                    <span className="text-caption">
                      {index === 0 ? "Introduction" : tutorial.title}
                    </span>
                  </NextLink>
                  {isCurrentStep && absoluteToc.length > 0 ? (
                    <ol className="docs-tutorial-nested-toc web-references-menu-list mt-4 ms-8 flex list-none flex-col gap-2">
                      {absoluteToc.map((parent, innerIndex) => (
                        <li key={parent.id} className="web-references-menu-item">
                          <a
                            href={parent.href}
                            className={cn(
                              "web-references-menu-link is-inner text-caption",
                              parent.selected && "is-selected tutorial-scroll-indicator"
                            )}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToItem(parent.href, innerIndex);
                            }}
                          >
                            <span className="text-caption">{parent.title}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>

        <div className="shrink-0 border-t border-[color-mix(in_srgb,var(--color-greyscale-900)_4%,transparent)] pt-4 dark:border-white/[0.06]">
          <button
            type="button"
            className="web-link inline-flex items-center gap-2 text-caption text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="web-icon-arrow-up" aria-hidden />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export function DocsTutorialView({
  seriesTitle,
  steps,
  currentStep,
  currentStepItem,
  back,
  children,
}: {
  seriesTitle: string;
  steps: TutorialStepFull[];
  currentStep: number;
  currentStepItem: TutorialStepFull;
  back: string;
  children: ReactNode;
}) {
  const slotRef = useRef<HTMLDivElement>(null);
  const firstStepItem = steps[0] ?? currentStepItem;
  const nextStep = steps.find((t) => t.step === currentStep + 1);
  const prevStep = steps.find((t) => t.step === currentStep - 1);

  useEffect(() => {
    const root = slotRef.current;
    if (!root) return;
    const patch = () => {
      root.querySelectorAll<HTMLHeadingElement>("h2.text-label").forEach((header) => {
        header.classList.replace("text-label", "web-main-body-500");
      });
    };
    patch();
    const obs = new MutationObserver(patch);
    obs.observe(root, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, [currentStepItem.href]);

  const introTitle = getCorrectTitle(currentStepItem, 1);

  return (
    <main className="contents" id="main">
      <article className="web-article contents">
        <header className="docs-tutorial-article-header web-article-header flex items-start justify-between">
          <div className="web-article-header-start flex flex-col items-start gap-0">
            {back ? (
              <NextLink
                href={back}
                className="web-icon-button web-is-only-mobile mb-2 lg:hidden"
                aria-label="previous page"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </NextLink>
            ) : null}
            <ul className="mb-3 flex list-none flex-wrap items-center gap-2 p-0 text-caption text-[var(--color-text-muted)] dark:text-white/50">
              {currentStepItem.difficulty ? (
                <li className="m-0 capitalize">{currentStepItem.difficulty}</li>
              ) : null}
              {currentStepItem.difficulty && currentStepItem.readtime != null ? (
                <li className="m-0 text-[var(--color-border-strong)] dark:text-white/20" aria-hidden>
                  •
                </li>
              ) : null}
              {currentStepItem.readtime != null ? (
                <li className="m-0">{String(currentStepItem.readtime)} min</li>
              ) : null}
            </ul>
            <div className="relative flex items-center">
              {back ? (
                <NextLink
                  href={back}
                  className="web-icon-button absolute start-0 top-1/2 hidden size-10 -translate-y-1/2 md:flex"
                  style={{ marginInlineStart: "-2.75rem" }}
                  aria-label="previous page"
                >
                  <ChevronLeft className="size-6 text-[var(--color-text-primary)]" aria-hidden />
                </NextLink>
              ) : null}
              <h1
                className={cn(
                  "text-title m-0 font-aeonik-pro font-bold text-[var(--color-text-primary)] dark:text-white",
                  currentStep === 1 && "lg:-ms-5"
                )}
              >
                {firstStepItem?.title ?? seriesTitle}
              </h1>
            </div>
          </div>
          <div className="web-article-header-end copy-button-wrapper hidden self-start md:block md:self-auto lg:block" />
        </header>

        <div className="web-article-content prose max-w-none pb-24">
          <section className="web-article-content-section">
            <section className="web-article-content-sub-section">
              <header className="web-article-content-header">
                <span className="web-numeric-badge docs-numeric-badge mt-8 shrink-0">{currentStep}</span>
                <div className="tutorial-heading">
                  <DocsHeading level={1} id={DOC_TUTORIAL_MAIN_HEADING_ID} step={currentStep}>
                    {introTitle}
                  </DocsHeading>
                </div>
              </header>

              <div ref={slotRef} className="prose mt-8 max-w-none dark:prose-invert">
                {children}
              </div>

              <div className="mt-8 flex justify-between gap-4 pt-8">
                <div className="min-w-0 flex-1">
                  {prevStep ? (
                    <NextLink
                      href={prevStep.href}
                      className="previous-step-anchor inline-flex items-center gap-2 text-caption text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] dark:text-white/70 dark:hover:text-white"
                    >
                      <ChevronLeft className="size-4 shrink-0" aria-hidden />
                      <span className="font-medium">
                        Step {prevStep.step}
                        <span className="hidden md:inline">
                          : {getCorrectTitle(prevStep, 1)}
                        </span>
                      </span>
                    </NextLink>
                  ) : null}
                </div>
                <div
                  className={cn(
                    "min-w-0 flex-1 flex justify-end",
                    !prevStep && nextStep && "ms-auto w-full"
                  )}
                >
                  {nextStep ? (
                    <NextLink
                      href={nextStep.href}
                      className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--bg-secondary)] px-4 py-2.5 text-caption font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-smooth)] dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/10"
                    >
                      <span>
                        Step {nextStep.step}
                        <span className="hidden md:inline">: {nextStep.title}</span>
                      </span>
                      <ChevronRight className="size-4 shrink-0" aria-hidden />
                    </NextLink>
                  ) : null}
                </div>
              </div>
            </section>
          </section>
        </div>

        <TutorialStepsAside steps={steps} currentStep={currentStep} />
      </article>
    </main>
  );
}
