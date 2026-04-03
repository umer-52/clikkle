"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { GridPaper } from "../bento-animations/grid-paper";

const TYPED_MESSAGE = "Add a password attribute";

const codeLines = [
  { w: "60%", indent: false },
  { w: "45%", indent: true },
  { w: "0", indent: false },
  { w: "70%", indent: false },
  { w: "55%", indent: true },
  { w: "50%", indent: true },
  { w: "0", indent: false },
  { w: "65%", indent: false },
  { w: "0", indent: false },
  { w: "40%", indent: false },
  { w: "55%", indent: true },
];

export function McpAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [active, setActive] = useState(false);
  const isInView = useInView(containerRef, { amount: "all" });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (active) {
      interval = setInterval(() => {
        setTypedText((prev) => {
          if (prev.length < TYPED_MESSAGE.length) {
            return TYPED_MESSAGE.slice(0, prev.length + 1);
          }
          clearInterval(interval);
          return prev;
        });
      }, 30);
    } else {
      interval = setInterval(() => {
        setTypedText((prev) => {
          if (prev.length > 0) {
            return TYPED_MESSAGE.slice(0, prev.length - 1);
          }
          clearInterval(interval);
          return prev;
        });
      }, 15);
    }
    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    if (isMobile) {
      setActive(isInView);
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-56 flex-col overflow-hidden sm:h-72"
      onMouseEnter={() => {
        if (!window.matchMedia("(max-width: 640px)").matches) setActive(true);
      }}
      onMouseLeave={() => {
        if (!window.matchMedia("(max-width: 640px)").matches) setActive(false);
      }}
    >
      {/* IDE Window */}
      <div className="mx-5 mt-4 flex flex-1 flex-col overflow-hidden rounded-[1.25rem] bg-[#232325]/90 mask-b-from-70% mask-b-to-100% px-1 pb-1 backdrop-blur-md sm:mx-10 sm:mt-6">
        {/* Title bar */}
        <div className="flex h-7 w-full items-center gap-1 pl-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="size-2 rounded-full bg-[#D9D9D9]"></div>
          ))}
        </div>

        {/* Content: File tree + Code + Chat */}
        <div className="flex flex-1 overflow-hidden rounded-2xl bg-[var(--bg-primary)]">
          {/* File tree hint */}
          <div className="flex w-14 shrink-0 flex-col gap-2 border-r border-white/[0.04] px-2 pt-3">
            <div className="flex items-center gap-1">
              <div className="size-1.5 shrink-0 rounded-sm bg-white/10"></div>
              <div className="h-1 w-full rounded-full bg-white/[0.08]"></div>
            </div>
            <div className="flex items-center gap-1 pl-2">
              <div className="size-1 shrink-0 rounded-full bg-white/[0.06]"></div>
              <div className="h-1 w-3/4 rounded-full bg-white/[0.06]"></div>
            </div>
            <div className="flex items-center gap-1 pl-2">
              <div className="size-1 shrink-0 rounded-full bg-white/10"></div>
              <div className="h-1 w-full rounded-full bg-white/10"></div>
            </div>
            <div className="flex items-center gap-1 pl-2">
              <div className="size-1 shrink-0 rounded-full bg-white/[0.06]"></div>
              <div className="h-1 w-2/3 rounded-full bg-white/[0.06]"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="size-1.5 shrink-0 rounded-sm bg-white/10"></div>
              <div className="h-1 w-4/5 rounded-full bg-white/[0.08]"></div>
            </div>
            <div className="flex items-center gap-1 pl-2">
              <div className="size-1 shrink-0 rounded-full bg-white/[0.06]"></div>
              <div className="h-1 w-3/5 rounded-full bg-white/[0.06]"></div>
            </div>
          </div>

          {/* Code pane */}
          <div className="flex flex-1 flex-col gap-[7px] px-3 pt-3 pb-2">
            {codeLines.map((line, i) => (
              <div key={i} className="flex">
                {line.w !== "0" ? (
                  <div
                    className={`h-1 rounded-full bg-white/[0.08] ${
                      line.indent ? "ml-3" : ""
                    }`}
                    style={{ width: line.w }}
                  ></div>
                ) : (
                  <div className="h-1"></div>
                )}
              </div>
            ))}
          </div>

          {/* Chat pane */}
          <div
            className="flex w-[42%] flex-col gap-2 border-l border-white/[0.04] px-3 py-3 tracking-normal"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}
          >
            <span className="text-primary mt-1 w-fit rounded-md bg-white/[0.05] px-2.5 py-1">
              Create a collection for user profiles
            </span>
            <div className="text-secondary flex gap-2 leading-relaxed">
              <div className="mt-[6px] size-1.5 shrink-0 rounded-full bg-white/12"></div>
              <span>Setting up collection with email and name attributes.</span>
            </div>

            <div className="mt-auto flex items-start gap-1 rounded-lg border border-white/[0.06] px-2 py-1.5">
              <span className="min-h-[2lh] flex-1">
                {typedText ? (
                  <span className="text-primary">{typedText}</span>
                ) : (
                  <span className="text-white/20">Ask anything...</span>
                )}
              </span>
              <div
                className="ml-auto flex size-4 shrink-0 items-center justify-center rounded transition-colors duration-500"
                style={{
                  background: active ? "#2D63FF" : "rgba(255,255,255,0.1)",
                }}
              >
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7V1M4 1L1.5 3.5M4 1L6.5 3.5"
                    style={{
                      stroke: active ? "#ffffff" : "#ADADB0",
                      transition: "stroke 0.5s ease",
                    }}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GridPaper className="absolute inset-0 -z-10 bg-[length:calc(100%/11)] opacity-90" />
    </div>
  );
}
