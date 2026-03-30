import React from "react";
import { CopyButton } from "./copy-button"; // Assuming we have or will build this

// Since this clone is purely dark-mode, we only render dark tags and hide light tags entirely.
export function OnlyDark({ children }: { children: React.ReactNode }) {
  return <div className="block">{children}</div>;
}

export function OnlyLight({ children }: { children: React.ReactNode }) {
  return <div className="hidden" aria-hidden="true">{children}</div>;
}

// Vertical Timeline Section Component
// Used heavily in quick-starts `{% section step=1 title="Create project" %}`
export function Section({
  step,
  title,
  children,
}: {
  step?: string | number;
  title?: string;
  children: React.ReactNode;
}) {
  if (!step) {
    // Fallback if it's just a generic section without a timeline
    return <section className="my-12">{children}</section>;
  }

  return (
    <section className="relative flex flex-col pt-8 pb-4">
      {/* The vertical tracking line */}
      <div className="absolute left-[15px] top-10 bottom-0 w-px bg-white/10" aria-hidden="true" />
      
      <div className="flex flex-row gap-6 lg:gap-8">
        {/* Step Circle */}
        <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#19191c] border border-white/20 text-sm font-bold text-white shadow-[0_0_0_8px_#19191c]">
          {step}
        </div>
        
        {/* Content Area */}
        <div className="flex-1 pb-10">
          {title && (
            <h2 className="text-2xl font-aeonik-pro font-bold text-white mt-0.5 mb-6">
              {title}
            </h2>
          )}
          <div className="prose prose-invert prose-blue max-w-none text-white/70 leading-7
             prose-p:my-5 prose-img:rounded-xl prose-img:border prose-img:border-white/10
          ">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

// Rich Code Block
// Wraps standard `<pre>` fences to add the dark Appwrite header and language controls.
export function CodeBlock({
  language,
  children,
}: {
  language?: string;
  children: React.ReactNode;
}) {
  // Extract text content for the copy button if needed, although standard approach
  // is to pass the text down or have the button read deeply.
  
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-[#0e0e11] shadow-xl">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-2">
        <div className="text-xs font-mono font-medium tracking-wider uppercase text-white/40">
          {language || "code"}
        </div>
        <div>
          <CopyButton text={""} /> {/* The copy button component handles extracting the actual text */}
        </div>
      </div>
      
      {/* Code Content */}
      <div className="p-4 overflow-x-auto text-[13px] leading-relaxed custom-scrollbar bg-[#0e0e11]">
        {children}
      </div>
    </div>
  );
}
