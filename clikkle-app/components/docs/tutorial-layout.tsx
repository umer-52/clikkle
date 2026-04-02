"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TutorialCodeProvider } from "@/components/markdoc/tutorial-code-context";

export type TutorialStepMeta = {
  step: number;
  title: string;
  href: string;
};

interface TutorialLayoutProps {
  steps: TutorialStepMeta[];
  children: React.ReactNode;
}

export function TutorialLayout({ steps, children }: TutorialLayoutProps) {
  const pathname = usePathname();

  // Find current step index
  const currentIndex = steps.findIndex((s) => s.href === pathname);
  const currentStep = steps[currentIndex];
  const prevStep = currentIndex > 0 ? steps[currentIndex - 1] : null;
  const nextStep = currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;

  return (
    <TutorialCodeProvider>
    <div className="flex w-full flex-row xl:gap-14 2xl:gap-24 overflow-visible">
      {/* Main Document Body */}
      <div className="flex-1 min-w-0 max-w-[800px] pt-12 pb-24 px-6 md:px-10 lg:pl-[4rem]">
        {children}

        {/* Tutorial Pagination */}
        <div className="mt-16 flex items-center justify-between border-t border-[var(--color-border-subtle)] pt-8 dark:border-white/10">
          <div className="flex-1 pr-4">
            {prevStep ? (
              <Link
                href={prevStep.href}
                className="group flex flex-col items-start gap-1 rounded-xl border border-[var(--color-border-default)] bg-transparent p-4 transition-colors hover:bg-[var(--color-smooth)] dark:border-white/10 dark:hover:bg-white/5"
              >
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] dark:text-white/50">
                  <ChevronLeft className="h-4 w-4" /> Previous step
                </span>
                <span className="text-sm font-medium text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-brand-primary)] dark:text-white dark:group-hover:text-blue-500">
                  {prevStep.title}
                </span>
              </Link>
            ) : null}
          </div>

          <div className="flex flex-1 justify-end pl-4">
            {nextStep && (
              <Link
                href={nextStep.href}
                className="group flex flex-col items-end gap-1 rounded-xl border border-[var(--color-border-default)] bg-transparent p-4 text-right transition-colors hover:bg-[var(--color-smooth)] dark:border-white/10 dark:hover:bg-white/5"
              >
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] dark:text-white/50">
                  Next step <ChevronRight className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-brand-primary)] dark:text-white dark:group-hover:text-blue-500">
                  {nextStep.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Internal Navigation List (Right Sidebar for Tutorials) */}
      <aside className="hidden lg:block w-[240px] shrink-0 pt-12 pr-6">
        <div className="sticky top-[100px] flex flex-col gap-1 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
          <h4 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] dark:text-white/40">
            Tutorial
          </h4>
          <ul className="flex flex-col gap-1">
            {steps.map((step) => {
              const isActive = step.href === pathname;
              return (
                <li key={step.step}>
                  <Link
                    href={step.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                      isActive
                        ? "bg-[var(--bg-accent-soft)] text-[var(--color-brand-primary)] dark:bg-white/10 dark:text-white"
                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-smooth)] hover:text-[var(--color-text-primary)] dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                        isActive
                          ? "bg-[var(--color-brand-primary)] text-white dark:bg-white dark:text-black"
                          : "bg-[var(--color-smooth)] text-[var(--color-text-muted)] group-hover:bg-[var(--color-border-subtle)] dark:bg-white/10 dark:text-white/60 dark:group-hover:bg-white/20"
                      }`}
                    >
                      {step.step}
                    </span>
                    <span className="truncate">{step.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
    </TutorialCodeProvider>
  );
}
