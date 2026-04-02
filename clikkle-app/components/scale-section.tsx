"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

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
  image: "/clikkle/images/testimonials/ryan-oconner.png",
};

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function ScaleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateNumbers();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animateNumbers]);

  return (
    <div
      ref={sectionRef}
      className="relative -mb-8 flex min-h-[700px] flex-col gap-4 bg-[#EDEDF0] pt-12 pb-20 md:pt-30 md:pb-0"
    >
      {/* Text content */}
      <div className="relative z-50 container w-fit md:w-full">
        <div className="relative z-50 md:max-w-xl">
          <h2 className="font-aeonik-pro text-title tracking-tighter text-pretty text-[#19191c]">
            Thousands of developers{" "}
            <span className="text-[#56565c]">scale with Clikkle</span>
            <span className="text-[#2D63FF]">_</span>
          </h2>
          <p className="mt-5 border-l-2 border-[#2D63FF] pl-4 font-medium text-[#56565c] md:pr-28">
            <span className="text-[#2D63FF]">&ldquo;</span>
            The switch to using Clikkle brought{" "}
            <strong className="text-[#19191c]">infinite value</strong> that
            I&apos;m still discovering today.
            <span className="text-[#2D63FF]">&rdquo;</span>
          </p>

          <div className="mt-4 ml-4 flex items-center gap-3">
            <img loading="lazy"
              src={testimonial.image}
              className="size-6 rounded-full"
              alt={`${testimonial.company} Logo`}
              width={24}
              height={24} />
            <div className="flex gap-1">
              <span className="text-sub-body block font-medium text-[#19191c]">
                {testimonial.name},
              </span>
              <span className="text-sub-body block font-medium text-[#56565c]">
                {testimonial.title} at {testimonial.company}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stats (stacked) */}
      <div className="z-0 mt-12 block space-y-8 md:hidden">
        {defaultStats.map((stat, i) => (
          <div key={stat.description} className="h-full pl-6">
            <div className="relative">
              <span className="text-description relative -left-px z-10 border-l-2 border-[#2D63FF] pl-4 font-medium text-[#19191c]">
                {animatedValues[i]}
                {stat.suffix}
              </span>
              <span className="text-body block pl-4 text-[#56565c]">
                {stat.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop stats (4 columns with gradient) */}
      <div
        className={cn("absolute inset-0 mt-32 hidden md:block", {
          "animate-wipe-in": isVisible,
        })}
      >
        <div className="relative container mx-auto h-full">
          <div className="absolute inset-0 z-10 grid grid-cols-4">
            {defaultStats.map((stat, i) => (
              <div
                key={stat.description}
                className="relative h-full border-l border-dashed border-[#CDCDCF]"
              >
                <div
                  className="absolute"
                  style={{
                    bottom: `calc(50px + ${25 + (75 / 3) * (i / 2)}%)`,
                  }}
                >
                  <span className="text-description relative -left-px z-50 border-l-2 border-[#2D63FF] pl-4 font-medium text-[#19191c]">
                    {animatedValues[i]}
                    {stat.suffix}
                  </span>
                  <span className="text-body block pl-4 text-[#56565c]">
                    {stat.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient triangle fill */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#2D63FF]/15 to-transparent"
          style={{
            clipPath: "polygon(0 100%, 100% 25%, 100% 100%, 0 100%)",
          }}
        />
        {/* Gradient line */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#2D63FF] to-transparent"
          style={{
            clipPath: "polygon(0 100%, 100% 25%, 100% 25.1%, 0 100.1%)",
          }}
        />
      </div>
    </div>
  );
}
