"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import "./scale-section.css";

/**
 * Parity with `src/routes/(marketing)/(components)/scale.svelte`:
 * - Copy + KPI grid share `.scale-section__band` (explicit gutters from `appwrite-spacing.css`).
 * - Padded outer + unpadded inner so `absolute inset-0` grid fills the content strip only
 *   (same pattern as `Main.svelte` `.aw-header-shell` + inner content).
 * - Parent page wraps this in `light bg-[#EDEDF0]` like `[variation]/+page.svelte`.
 */
const ANIMATION_DURATION = 3;

type StatItem = {
  number: number;
  suffix: string;
  description: string;
};

const defaultStats: StatItem[] = [
  { number: 50, suffix: "K+", description: "GitHub stars" },
  { number: 300, suffix: "+", description: "PoP locations" },
  { number: 300, suffix: "K+", description: "developers" },
  { number: 20, suffix: "B+", description: "monthly database operations" },
];

const testimonial = {
  name: "Ryan O'Connor",
  title: "Founder",
  company: "K-Collect",
  image: "/clikkle/images/testimonials/ryan.svg",
} as const;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function ScaleSection() {
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    defaultStats.map(() => 0)
  );
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimatedRef = useRef(false);

  const animateNumbers = useCallback(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;
    setIsVisible(true);

    const duration = ANIMATION_DURATION * 1000;

    defaultStats.forEach((stat, index) => {
      const delay =
        ((index * ANIMATION_DURATION) / defaultStats.length) * 600;

      setTimeout(() => {
        const startTime = performance.now();

        function tick(now: number) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / (duration * 0.6), 1);
          const eased = easeOutCubic(progress);

          setAnimatedValues((prev) => {
            const next = [...prev];
            next[index] = Math.round(stat.number * eased);
            return next;
          });

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }

        requestAnimationFrame(tick);
      }, delay);
    });
  }, []);

  /* scale.svelte `inView` — run when mounted; IO alone often misses / shows 0K+ after Fast Refresh */
  useEffect(() => {
    animateNumbers();
  }, [animateNumbers]);

  return (
    <div
      id="scale-section"
      className="relative -mb-8 flex min-h-[700px] scroll-mt-[calc(4.5rem+1rem)] flex-col gap-4 pt-12 pb-20 md:scroll-mt-24 md:pt-[7.5rem] md:pb-0"
    >
      {/* Same horizontal band as stats (`scale-section.css` = appwrite-spacing breakpoints) */}
      <div className="scale-section__band relative z-[100]">
        <div className="relative z-[100] w-fit max-w-full md:w-full md:max-w-xl">
          <h2 className="font-aeonik-pro text-title text-primary tracking-tighter text-pretty">
            Thousands of developers{" "}
            <span className="text-secondary">scale with Clikkle</span>
            <span className="text-accent">_</span>
          </h2>
          <p className="text-secondary border-accent mt-5 border-l-2 pl-4 font-medium md:pr-28">
            <span className="text-accent">&ldquo;</span>
            The switch to using Clikkle brought{" "}
            <span className="text-accent font-semibold">infinite</span>{" "}
            value that I&apos;m still discovering today.
            <span className="text-accent">&rdquo;</span>
          </p>

          <div className="mt-4 ml-4 flex items-center gap-3">
            <img
              loading="lazy"
              src={testimonial.image}
              className="size-6 rounded-full"
              alt={`${testimonial.company} logo`}
              width={24}
              height={24}
            />
            <div className="flex flex-wrap gap-x-1">
              <span className="text-sub-body text-primary font-medium">
                {testimonial.name},
              </span>
              <span className="text-sub-body text-secondary font-medium">
                {testimonial.title} at {testimonial.company}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="z-0 mt-12 block space-y-8 md:hidden">
        <div className="scale-section__band">
          {defaultStats.map((stat, i) => (
            <div key={stat.description} className="h-full py-1">
              <div className="relative pl-2">
                <span className="text-description text-primary border-accent relative -left-px z-10 border-l pl-4 font-medium">
                  {animatedValues[i]}
                  {stat.suffix}
                </span>
                <span className="text-body text-secondary block pl-4">
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-0 mt-32 hidden md:block">
        <div className="scale-section__band relative h-full min-h-0">
          <div className="relative h-full min-h-0">
            <div className="absolute inset-0 z-10 grid min-w-0 grid-cols-4">
              {defaultStats.map((stat, i) => (
                <div
                  key={stat.description}
                  className="relative h-full border-l border-dashed border-greyscale-200"
                >
                  <div
                    className="absolute"
                    style={{
                      bottom: `calc(50px + ${25 + (75 / 3) * (i / 2)}%)`,
                    }}
                  >
                    <span className="text-description text-primary border-accent relative -left-px z-[100] block border-l pl-4 font-medium">
                      {animatedValues[i]}
                      {stat.suffix}
                    </span>
                    <span className="text-body text-secondary block pl-4">
                      {stat.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            isVisible && "animate-wipe-in"
          )}
          aria-hidden
        >
          <div className="from-accent/15 absolute inset-0 bg-gradient-to-tr to-transparent [clip-path:polygon(0_100%,_100%_25%,_100%_100%,_0_100%)]" />
          <div className="from-accent absolute inset-0 bg-gradient-to-r to-transparent [clip-path:polygon(0_100%,_100%_25%,_100%_25.1%,_0_100.1%)]" />
        </div>
      </div>
    </div>
  );
}
