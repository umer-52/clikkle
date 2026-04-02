"use client";

import { clikkleStats } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { useEffect, useState, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrentValue(value);
      return;
    }

    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          // Add some decimal points if the target includes decimals (e.g. 55.2)
          if (value % 1 !== 0) {
            setCurrentValue(Number(v.toFixed(1)));
          } else {
            setCurrentValue(Math.floor(v));
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, value, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {currentValue}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--bg-primary)] overflow-hidden">
      {/* Decorative Dark Background element matching Clikkle's stats look */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#111116] to-[var(--bg-secondary)]" />
      {/* Top angled divider if needed, or straight edge. For simplicity we assume straight dark block */}

      <div className="shell relative z-10 mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {clikkleStats.map((stat, i) => {
            // Parse numerical value and suffix for animation
            const numMatch = stat.value.match(/([\d\.]+)/);
            const num = numMatch ? parseFloat(numMatch[1]) : 0;
            const suffix = stat.value.replace(/[\d\.]+/, '');

            return (
              <Reveal key={stat.label} delay={0.1 * i} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2 font-display">
                  <Counter value={num} suffix={suffix} />
                </div>
                <div className="text-sm md:text-base font-medium text-[var(--color-gray-400)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
