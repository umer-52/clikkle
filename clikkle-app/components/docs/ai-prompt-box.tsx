"use client";

import React, { useState } from "react";
import { Sparkles, Copy, Check, ChevronDown } from "lucide-react";

export function AiPromptBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Note: The actual prompt text would depend on the context of the page it's placed on.
    const promptText = "Generate a basic CRUD application using the Clikkle SDK and Next.js";
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 flex items-center justify-between rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--bg-elevated)] p-2 pr-4 shadow-sm transition-colors hover:bg-[var(--color-smooth)] dark:border-white/[0.08] dark:bg-[var(--bg-secondary)] dark:hover:bg-[var(--bg-muted)]">
      <div className="flex items-center gap-4 px-2">
        {/* Sparkle Icon Box (Mimics the Official Clikkle AI box) */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2D63FF]/20 bg-[#2D63FF]/5 text-[#2D63FF]">
          <Sparkles className="h-5 w-5" />
        </div>
        
        {/* Text */}
        <span className="text-[15px] font-medium text-[var(--color-text-primary)] dark:text-white">
          Use this pre-built prompt to get started faster
        </span>
      </div>

      {/* Split Button Group */}
      <div className="flex items-center rounded-lg border border-[#2D63FF]/30 bg-transparent transition-colors hover:border-[#2D63FF]/50">
        <button
          onClick={handleCopy}
          className="flex h-[36px] items-center gap-2 px-4 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-smooth)] dark:text-white dark:hover:bg-white/5"
          aria-label="Copy prompt"
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          Copy prompt
        </button>
        
        {/* Divider line in split button */}
        <div className="h-[36px] w-[1px] bg-[#2D63FF]/30" />
        
        <button 
          className="flex h-[36px] w-[36px] items-center justify-center rounded-r-lg text-[#2D63FF] transition-colors hover:bg-[var(--color-smooth)] dark:hover:bg-white/5"
          aria-label="More options"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
