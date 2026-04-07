"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

type ModelCategory = "Auth" | "Databases" | "Functions" | "Storage" | "Sites" | "Messaging";

type ArenaModel = {
  name: string;
  logo: string;
  colorLogo: string;
  cost: string;
  overall: number;
  categories: Record<ModelCategory, number>;
};

const categoryKeys: ModelCategory[] = [
  "Auth",
  "Databases",
  "Functions",
  "Storage",
  "Sites",
  "Messaging",
];

const models: ArenaModel[] = [
  {
    name: "GPT-4.1",
    logo: "/clikkle/images/docs/mcp/logos/dark/openai.svg",
    colorLogo: "/clikkle/images/docs/mcp/logos/color/openai.svg",
    cost: "$2.00",
    overall: 97.4,
    categories: { Auth: 99, Databases: 98, Functions: 97, Storage: 96, Sites: 97, Messaging: 95 },
  },
  {
    name: "Claude 4 Sonnet",
    logo: "/clikkle/images/docs/mcp/logos/dark/claude.svg",
    colorLogo: "/clikkle/images/docs/mcp/logos/color/claude.svg",
    cost: "$3.00",
    overall: 96.7,
    categories: { Auth: 98, Databases: 97, Functions: 96, Storage: 95, Sites: 97, Messaging: 96 },
  },
  {
    name: "Kimi K2",
    logo: "/clikkle/images/docs/mcp/logos/dark/kimi.svg",
    colorLogo: "/clikkle/images/docs/mcp/logos/color/kimi.svg",
    cost: "$0.14",
    overall: 94.3,
    categories: { Auth: 96, Databases: 95, Functions: 93, Storage: 94, Sites: 92, Messaging: 91 },
  },
  {
    name: "Gemini 2.5 Pro",
    logo: "/clikkle/images/docs/mcp/logos/dark/gemini.svg",
    colorLogo: "/clikkle/images/docs/mcp/logos/color/gemini.svg",
    cost: "$1.25",
    overall: 95.1,
    categories: { Auth: 97, Databases: 96, Functions: 94, Storage: 95, Sites: 94, Messaging: 93 },
  },
];

const START_VALUE = 90;
const SCORE_THRESHOLD_HIGH = 85;
const SCORE_THRESHOLD_LOW = 50;

function getScoreColor(score: number): string {
  if (score >= SCORE_THRESHOLD_HIGH) return "#85DBD8";
  if (score >= SCORE_THRESHOLD_LOW) return "#FE9567";
  return "#FF453A";
}

function getOverallColor(score: number): string {
  if (score >= SCORE_THRESHOLD_HIGH) return "#85DBD8";
  if (score >= SCORE_THRESHOLD_LOW) return "#FE9567";
  return "#FF453A";
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function AiTable() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animatedScores, setAnimatedScores] = useState<number[]>(
    models.map(() => START_VALUE)
  );
  const hasAnimatedRef = useRef(false);

  const animateScores = useCallback(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const targets = models.map((m) => m.overall);
    const duration = 1000;
    const stagger = 100;

    models.forEach((_, i) => {
      const delay = i * stagger;
      const start = performance.now() + delay;

      function tick(now: number) {
        const elapsed = now - start;
        if (elapsed < 0) {
          requestAnimationFrame(tick);
          return;
        }
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const value = START_VALUE + (targets[i] - START_VALUE) * eased;

        setAnimatedScores((prev) => {
          const next = [...prev];
          next[i] = value;
          return next;
        });

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      }

      requestAnimationFrame(tick);
    });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateScores();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animateScores]);

  return (
    <div className="container pt-14 md:pt-20">
      {/* Pitch */}
      <div className="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-aeonik-pro text-label text-primary mb-0 max-w-[480px]">
          Works with every major LLM.{" "}
          <span className="text-secondary">
            Find out how well your model integrates with Clikkle.
          </span>
        </h3>
        <div className="not-prose flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/docs/tooling/skills"
            target="_blank"
            rel="noopener noreferrer"
            className="web-btn web-btn--appwrite-primary w-full justify-center sm:w-auto"
          >
            Install skill
          </Link>
          <a
            href="https://arena.clikkle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="web-btn web-btn--appwrite-secondary w-full justify-center sm:w-auto"
          >
            View full benchmark
          </a>
        </div>
      </div>

      {/* Benchmark table */}
      <div
        className="border-smooth overflow-x-auto border border-dashed"
        ref={sectionRef}
      >
        <table className="w-full">
          <thead>
            <tr className="border-smooth border-b border-dashed bg-[#232325]">
              <td className="min-w-[140px] shrink-0 px-4 py-3 text-left text-xs text-white/50 sm:px-5">
                Model
              </td>
              <td className="hidden px-5 py-3 text-left text-xs text-white/50 sm:table-cell">
                Cost/1M
              </td>
              <td className="px-4 py-3 text-right text-xs text-white/50 sm:px-5 sm:text-left">
                Overall
              </td>
              {categoryKeys.map((cat) => (
                <td
                  key={cat}
                  className="hidden px-5 py-3 text-center text-xs text-white/50 md:table-cell"
                >
                  {cat}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {models.map((model, i) => {
              const isLast = i === models.length - 1;
              return (
                <tr
                  key={model.name}
                  className={`group border-smooth ${
                    !isLast ? "border-b border-dashed" : ""
                  }`}
                >
                  <td className="min-w-[140px] shrink-0 px-4 py-3 sm:px-5">
                    <div className="flex min-w-0 items-center gap-3">
                      <img src={model.colorLogo}
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" loading="lazy" />
                      <span className="text-primary text-sm font-medium whitespace-nowrap sm:text-base">
                        {model.name}
                      </span>
                    </div>
                  </td>
                  <td className="hidden px-5 py-3 text-base text-white/40 sm:table-cell">
                    {model.cost}
                  </td>
                  <td className="px-4 py-3 text-right sm:px-5 sm:text-left">
                    <span
                      className="font-aeonik-pro text-lg font-medium"
                      style={{ color: getOverallColor(animatedScores[i]) }}
                    >
                      {animatedScores[i].toFixed(1)}
                      <span className="text-sm">%</span>
                    </span>
                  </td>
                  {categoryKeys.map((cat) => (
                    <td
                      key={cat}
                      className="hidden px-5 py-3 text-center md:table-cell"
                    >
                      <span
                        className="text-sm text-white/60 transition-colors duration-300 group-hover:text-[color:var(--hover-color)]"
                        style={
                          {
                            "--hover-color": getScoreColor(
                              model.categories[cat]
                            ),
                          } as React.CSSProperties
                        }
                      >
                        {model.categories[cat]}%
                      </span>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
