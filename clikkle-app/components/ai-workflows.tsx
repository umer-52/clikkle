"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { McpAnimation } from "./ai-animations/mcp";
import { SkillsAnimation } from "./ai-animations/skills";
import { AiTable } from "./ai-table";

const tools = [
  { name: 'VS Code', src: '/clikkle/images/docs/mcp/logos/dark/vscode.svg', primary: '#0078D7' },
  { name: 'Cursor', src: '/clikkle/images/docs/mcp/logos/dark/cursor-ai.svg', primary: '#fff' },
  { name: 'Windsurf', src: '/clikkle/images/docs/mcp/logos/dark/windsurf.svg', primary: '#0EA5E9' },
  { name: 'Claude', src: '/clikkle/images/docs/mcp/logos/dark/claude.svg', primary: '#D97659' },
  { name: 'OpenCode', src: '/clikkle/images/docs/mcp/logos/dark/opencode.svg', primary: '#fff' },
  { name: 'Google Antigravity', src: '/clikkle/images/docs/mcp/logos/dark/google-antigravity.svg', primary: '#4285F4' },
];

export function AIWorkflows() {
  const [activeMobileIndex, setActiveMobileIndex] = React.useState<number>(-1);
  const mobileStripRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onDocumentClick = (e: MouseEvent) => {
      if (!mobileStripRef.current?.contains(e.target as Node)) {
        setActiveMobileIndex(-1);
      }
    };
    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, []);

  return (
    <div className="border-smooth border-t pb-16">
      <div className="container pt-20 pb-0">
        <h2 className="font-aeonik-pro text-title text-primary sm:text-subtitle mb-12">
          Streamline your AI workflows<span className="text-accent">_</span>
        </h2>

        <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2">
          {/* MCP */}
          <div className="border-smooth flex flex-col border border-dashed">
            <McpAnimation />
            <div className="px-5 pt-6 pb-10 sm:px-8">
              <h3 className="font-aeonik-pro text-label text-primary">
                MCP — Connect AI agents to your Clikkle backend.{" "}
                <span className="text-secondary">No custom integrations required.</span>
              </h3>
            </div>
          </div>

          {/* Clikkle Skills */}
          <div className="border-smooth flex flex-col border border-t-0 border-dashed sm:border-t sm:border-l-0">
            <SkillsAnimation />
            <div className="px-5 pt-6 pb-10 sm:px-8">
              <h3 className="font-aeonik-pro text-label text-primary">
                Skills — Teach AI agents your backend,{" "}
                <span className="text-secondary">so they always make the right call.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem strip */}
      <div className="border-smooth border-y border-dashed">
        <div className="container">
          <div className="hidden sm:block">
            <div className="flex overflow-clip">
              {tools.map((tool, i) => (
                <div
                  key={tool.name}
                  className={cn(
                    "border-smooth group relative flex h-16 w-full items-center justify-center border-r border-dashed",
                    { "border-l": i === 0 }
                  )}
                  style={{ "--primary-color": tool.primary } as React.CSSProperties}
                >
                  <div
                    className="z-10 h-9 w-9 bg-white/40 transition-colors duration-500 group-hover:bg-[var(--primary-color)]"
                    style={{
                      maskImage: `url('${tool.src}')`,
                      WebkitMaskImage: `url('${tool.src}')`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-[var(--primary-color)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span
                    className="text-primary pointer-events-none absolute top-full z-10 mt-2 hidden whitespace-nowrap rounded-md bg-[#EDEDF0] px-2.5 py-1 text-sm md:block dark:bg-[var(--color-greyscale-900)]"
                    role="tooltip"
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div ref={mobileStripRef} className="sm:hidden">
            <div className="flex">
              {tools.map((tool, i) => {
                const isActive = activeMobileIndex === i;
                return (
                  <button
                    key={tool.name}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMobileIndex((current) => (current === i ? -1 : i));
                    }}
                    className={cn(
                      "border-smooth relative flex h-16 w-full items-center justify-center border-r border-dashed",
                      { "border-l": i === 0 }
                    )}
                    style={{ "--primary-color": tool.primary } as React.CSSProperties}
                  >
                    <div
                      className={cn("h-9 w-9 transition-colors duration-500", isActive ? "bg-[var(--primary-color)]" : "bg-white/40")}
                      style={{
                        maskImage: `url('${tool.src}')`,
                        WebkitMaskImage: `url('${tool.src}')`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                      }}
                    />
                    {isActive ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-tl from-[var(--primary-color)]/5 to-transparent" />
                        <span
                          className={cn(
                            "text-primary absolute top-full z-10 mt-2 whitespace-nowrap rounded-md bg-[#EDEDF0] px-2.5 py-1 text-sm dark:bg-[var(--color-greyscale-900)]",
                            i === tools.length - 1 ? "right-0" : "left-1/2 -translate-x-1/2"
                          )}
                        >
                          {tool.name}
                        </span>
                      </>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <AiTable />
    </div>
  );
}
