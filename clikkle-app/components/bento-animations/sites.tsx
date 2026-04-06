"use client";

import { cn } from "@/lib/utils";
import { GridPaper } from "./grid-paper";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const logLines = [
  { timestamp: "18:31:21.320", content: "Clikkle Build" },
  { timestamp: "18:31:21.344", content: "Running build in Washington, D.C., USA (East) – iad1" },
  {
    timestamp: "18:31:21.450",
    content: "Cloning github.com/chenparnasa/isr-blog-nextjs-wordpress (Branch: main, Commit: de72693)",
  },
  { timestamp: "18:31:21.836", content: "Previous build cache not available" },
  { timestamp: "18:31:21.860", content: "Cloning completed: 409.772ms" },
  { timestamp: "18:31:22.123", content: 'Running "clikkle build"' },
  { timestamp: "18:31:22.938", content: "Clikkle CLI 37.6.1" },
];

const INSTALL_LINE = "Installing dependencies...";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

/** `bento/(animations)/sites.svelte` — build timer + typing line on hover / mobile inView. */
export function BentoSites() {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const inView = useInView(containerRef, { amount: "all", once: false });
  const isMobileLayout = useMediaQuery("(max-width: 767px)");
  const [hovered, setHovered] = useState(false);
  const shouldAnimate = isMobileLayout ? inView : hovered;

  const [seconds, setSeconds] = useState(32);
  const [lastLine, setLastLine] = useState("");
  const secondsRaf = useRef<number | null>(null);
  const typeInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimers = useCallback(() => {
    if (secondsRaf.current != null) {
      cancelAnimationFrame(secondsRaf.current);
      secondsRaf.current = null;
    }
    if (typeInterval.current != null) {
      clearInterval(typeInterval.current);
      typeInterval.current = null;
    }
  }, []);

  useEffect(() => {
    if (!shouldAnimate) {
      clearTimers();
      setSeconds(32);
      setLastLine("");
      return;
    }

    clearTimers();
    const start = performance.now();
    const durationMs = 44000;
    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      setSeconds(Math.round(32 + (60 - 32) * t));
      if (t < 1) {
        secondsRaf.current = requestAnimationFrame(tick);
      }
    };
    secondsRaf.current = requestAnimationFrame(tick);

    let i = 0;
    const stepMs = Math.max(40, Math.floor(500 / INSTALL_LINE.length));
    typeInterval.current = setInterval(() => {
      i += 1;
      setLastLine(INSTALL_LINE.slice(0, i));
      if (i >= INSTALL_LINE.length && typeInterval.current) {
        clearInterval(typeInterval.current);
        typeInterval.current = null;
      }
    }, stepMs);

    return clearTimers;
  }, [shouldAnimate, clearTimers]);

  return (
    <Link
      ref={containerRef}
      href="/products/sites"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      className="border-smooth group col-span-12 flex min-w-0 w-full flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] lg:col-span-7"
    >
      <div className="space-y-3 px-3 pt-2 pb-4">
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src="/clikkle/images/icons/illustrated/dark/sites.png"
            alt="Sites icon"
            width={28}
            height={28}
            className="size-7"
          />
          <h3 className="font-aeonik-pro text-label text-primary">Sites</h3>
        </div>
        <p className="text-sub-body text-primary max-w-lg font-medium">
          <span className="text-secondary">Host and maintain</span> your website domains and frontend code.
          Integrated with all Clikkle products.
        </p>
      </div>
      <div className="relative mt-auto mb-0 flex h-[21.25rem] flex-col items-center justify-center overflow-hidden rounded-xl bg-black/24 px-3 md:flex-1 md:px-8">
        <div
          className="mx-auto mt-6 hidden w-full flex-col overflow-hidden rounded-[1.25rem] bg-[#232325]/90 px-1 pb-1 backdrop-blur-md md:mt-12 md:flex"
          style={{
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        >
          <div className="flex h-8 w-full items-center gap-1 pl-2">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="size-2 rounded-full bg-[#D9D9D9]" />
            ))}
          </div>
          <img
            loading="lazy"
            src="/clikkle/assets/images/site.png"
            alt="Site screen"
            className="max-h-64 rounded-2xl object-cover object-top"
          />
        </div>

        <div className="border-smooth right-0 bottom-8 z-1 mx-auto flex w-full max-w-[450px] flex-col overflow-hidden rounded-[1.25rem] border bg-[#1D1D21] px-2 pb-2 md:absolute md:-right-24">
          <div className="flex h-10 w-full items-center gap-6 px-2 md:justify-between">
            <div className="flex items-center gap-2">
              <span className="text-caption text-primary">Deployment logs</span>
              <span className="text-[10px] text-secondary rounded-md bg-white/20 px-1.5 py-0.5 font-light leading-none">
                Building
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Loader2
                className={cn("h-3 w-3 text-secondary", shouldAnimate && "animate-spin")}
                aria-hidden
              />
              <span className="font-mono text-sm text-secondary">{seconds}s</span>
            </div>
          </div>

          <div className="text-[10px] font-mono leading-relaxed flex flex-col flex-nowrap overflow-hidden rounded-[12px] bg-[#19191C] px-4 py-3">
            <div className="w-[900px]">
              {logLines.map(({ timestamp, content }, i) => (
                <div key={i} className="flex flex-nowrap gap-3">
                  <span className="text-secondary/60 block">{timestamp}</span>
                  <span
                    className={cn("text-primary block flex-nowrap", {
                      "text-[#5382CB]": i === 0,
                    })}
                  >
                    {content}
                  </span>
                </div>
              ))}
              <div className="flex flex-nowrap gap-3">
                <span className="text-secondary/60 block">18:31:23.305</span>
                <div className="relative">
                  <span
                    className={cn(
                      "text-primary block flex-nowrap max-w-[26ch] overflow-hidden whitespace-nowrap border-r-2 border-primary",
                      shouldAnimate && "animate-pulse"
                    )}
                  >
                    {lastLine}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <GridPaper className="absolute inset-0 -z-10 bg-size-[calc(100%/23)]" />
      </div>
    </Link>
  );
}
