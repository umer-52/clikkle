"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="flex w-full flex-row xl:gap-14 2xl:gap-24 overflow-visible">
      {/* Main Document Body */}
      <div className="flex-1 min-w-0 max-w-[800px] pt-12 pb-24 px-6 md:px-10 lg:pl-[4rem]">
        {children}

        {/* Tutorial Pagination */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
          <div className="flex-1 pr-4">
            {prevStep ? (
              <Link
                href={prevStep.href}
                className="group flex flex-col items-start gap-1 p-4 rounded-xl border border-white/10 bg-transparent transition-colors hover:bg-white/5"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50 flex items-center gap-1">
                  <ChevronLeft className="h-4 w-4" /> Previous step
                </span>
                <span className="text-sm font-medium text-white group-hover:text-blue-500 transition-colors">
                  {prevStep.title}
                </span>
              </Link>
            ) : (
              <div /> // Empty spacer
            )}
          </div>

          <div className="flex-1 pl-4 flex justify-end">
            {nextStep && (
              <Link
                href={nextStep.href}
                className="group flex flex-col items-end gap-1 p-4 rounded-xl border border-white/10 bg-transparent transition-colors hover:bg-white/5 text-right"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50 flex items-center gap-1">
                  Next step <ChevronRight className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-white group-hover:text-blue-500 transition-colors">
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
          <h4 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-white/40">
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
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-white/10 text-white/60 group-hover:bg-white/20"
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
  );
}
