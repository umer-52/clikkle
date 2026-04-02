"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Tab = { id: string; label: string };

type CodePreviewClientProps = {
  tabs: Tab[];
  defaultTab: string;
  highlightedSamples: Record<string, string>;
  rawCodes: Record<string, string>;
};

export function CodePreviewClient({
  tabs,
  defaultTab,
  highlightedSamples,
  rawCodes,
}: CodePreviewClientProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(rawCodes[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col rounded-2xl md:rounded-3xl border border-[#2d2d33] bg-[#111116] shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
      {/* Header / Chrome */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#2d2d33] px-4 md:px-6">
        
        <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar pt-2 md:pt-0">
          {/* Traffic Lights */}
          <div className="hidden md:flex items-center gap-2 mr-4 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 md:gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-3 whitespace-nowrap border-b-2 font-medium transition-colors outline-none focus-visible:bg-white/5 ${
                  activeTab === tab.id
                    ? "border-[var(--color-primary)] text-white"
                    : "border-transparent text-[#9b9ba7] hover:text-[#c3c3c6]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md text-[#9b9ba7] hover:text-white hover:bg-[#2d2d33] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-[#27c93f]" /> : <Copy className="w-4 h-4" />}
          <span className="text-xs">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Code Area */}
      <div className="relative p-6 md:p-8 min-h-[360px] md:min-h-[420px] overflow-auto bg-[#111116] text-[#c3c3c6]">
        
        {/* Mobile Copy Button Float */}
        <button
          onClick={handleCopy}
          className="md:hidden absolute top-4 right-4 p-2 rounded-md bg-[#2d2d33] text-white shadow-lg"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-[#27c93f]" /> : <Copy className="w-4 h-4" />}
        </button>

        {/* Shiki rendered HTML injection */}
        <div
          className="shiki-wrapper"
          dangerouslySetInnerHTML={{ __html: highlightedSamples[activeTab] }}
        />

        {/* 
          Shiki styles overrides 
          Since we use dark-plus, background is typically dark, we force it transparent so it uses our container color
        */}
        <style jsx global>{`
          .shiki-wrapper pre {
            background-color: transparent !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .shiki-wrapper code {
            font-family: var(--font-jetbrains-mono), monospace;
            font-size: 14px;
            line-height: 1.6;
          }
        `}</style>
      </div>
    </div>
  );
}
