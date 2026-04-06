"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { withBasePath } from "@/lib/basepath";

const asset = (p: string) => withBasePath(p);

const studies = [
  {
    id: "0",
    logo: asset("/images/logos/devkind-light.svg"),
    headline:
      "DevKind reduced development time by 60% and lowered server costs by 40%",
    blurb:
      "A special thanks to Clikkle for providing robust features and seamless functionality.",
    name: "Hassan Ahmed",
    title: "Engineer at DevKind",
    avatar: asset("/images/testimonials/hassan.svg"),
    url: "/customers/customer-story-storealert",
  },
  {
    id: "1",
    logo: asset("/images/logos/langx-light.svg"),
    headline: "LangX handled millions of requests using Clikkle",
    blurb:
      "With its comprehensive suite of services, Clikkle emerged as an ideal choice for my needs.",
    name: "Xue",
    title: "Founder at LangX",
    avatar: asset("/images/testimonials/xue.svg"),
    url: "/customers/customer-stories-langx",
  },
  {
    id: "2",
    logo: asset("/images/logos/k-collect-light.svg"),
    headline: "K-Collect reduced infrastructure costs by 700%",
    blurb:
      "A major impact that Clikkle made was the amount of time and stress saved.",
    name: "Ryan O'Connor",
    title: "Founder at K-Collect",
    avatar: asset("/images/testimonials/ryan.svg"),
    url: "/customers/customer-stories-kcollect",
  },
];

/** Mirrors Appwrite `$routes/(marketing)/(components)/case-studies.svelte` + `case-study-card.svelte`. */
export function CustomerStories() {
  const [activeId, setActiveId] = useState<string>("0");

  return (
    <div
      className={cn(
        "border-smooth relative mb-0 flex items-center justify-center overflow-hidden border-t py-20 md:pt-30 md:pb-40",
        "from-0% before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-[radial-gradient(circle_at_120%_-50%,rgba(168,85,247,0.3),transparent_40%)] before:blur-2xl",
        "after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_-15%_125%,color-mix(in_srgb,var(--color-brand-primary)_20%,transparent),transparent_40%)] after:blur-2xl",
      )}
    >
      <div
        className="container flex min-h-0 min-w-0 flex-col items-stretch gap-4 lg:flex-row lg:items-stretch"
        role="radiogroup"
        aria-label="Customer stories"
      >
        {studies.map((study) => {
          const isActive = activeId === study.id;
          return (
            <div
              key={study.id}
              role="radio"
              aria-checked={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(study.id)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                e.preventDefault();
                const idx = studies.findIndex((s) => s.id === study.id);
                const next =
                  e.key === "ArrowRight"
                    ? studies[Math.min(idx + 1, studies.length - 1)]
                    : studies[Math.max(idx - 1, 0)];
                setActiveId(next.id);
              }}
              data-state={isActive ? "on" : "off"}
              className={cn(
                "group/card relative grid min-h-0 w-full min-w-0 cursor-pointer overflow-hidden rounded-2xl border border-transparent backdrop-blur-3xl transition-all ease-in-out duration-[250ms] lg:w-auto",
                /* `lg:h-full` broke equal heights (parent `h-full` was indefinite). Lock row height to Appwrite max. */
                '[grid-template-areas:"stack"] md:max-h-[467px] lg:h-[467px] lg:min-h-[467px] lg:max-h-[467px] lg:grid-rows-[minmax(0,1fr)]',
                "hover:bg-black/24",
                "outline-0 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus-visible:shadow-[0px_0px_0px_4px_var(--color-offset)]",
                'data-[state="off"]:bg-black/16 data-[state="off"]:p-8',
                'data-[state="on"]:bg-black/2 data-[state="on"]:p-8 data-[state="on"]:shadow-[0px_0px_0px_4px_var(--color-offset)] md:data-[state="on"]:p-12',
                /* Row layout only: basis + w-full fight on flex children; match Appwrite 15% / 70% split */
                'lg:data-[state="off"]:min-w-[9rem] lg:data-[state="off"]:shrink lg:data-[state="off"]:grow-0 lg:data-[state="off"]:basis-[15%]',
                'lg:data-[state="on"]:min-w-0 lg:data-[state="on"]:shrink lg:data-[state="on"]:grow lg:data-[state="on"]:basis-[70%]',
              )}
            >
              <img
                loading="lazy"
                src={study.logo}
                alt=""
                width={100}
                height={100}
                className={cn(
                  "h-5 shrink-0 opacity-100 transition-all duration-[250ms] [grid-area:stack] object-contain lg:h-12",
                  "justify-self-center self-center brightness-50",
                  isActive ? "invisible opacity-0" : "",
                )}
              />

              <div
                className={cn(
                  "relative w-full flex-col space-y-4 overflow-hidden transition-opacity delay-400 [grid-area:stack]",
                  isActive ? "flex opacity-100 blur-none" : "hidden opacity-0",
                )}
              >
                <img
                  loading="lazy"
                  width={80}
                  height={80}
                  src={study.logo}
                  alt=""
                  className={cn("-mt-8 mb-0 h-20 w-20 object-contain object-left", {
                    "animate-fade-in": isActive,
                  })}
                />

                <span
                  className={cn(
                    "font-aeonik-pro text-title text-primary flex h-fit flex-wrap gap-2 overflow-hidden text-left text-pretty md:h-[3lh] lg:w-[20ch]",
                    { "animate-fade-in": isActive },
                  )}
                >
                  {study.headline}
                </span>

                <div
                  className={cn("border-smooth mt-8 border-t border-dashed pt-8", {
                    "animate-fade-in [animation-delay:500ms]": isActive,
                  })}
                >
                  <div className="text-primary text-sub-body text-left font-medium md:max-w-[60%]">
                    &ldquo;{study.blurb}&rdquo;
                  </div>

                  <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-2">
                      <img
                        loading="lazy"
                        src={study.avatar}
                        alt={study.name}
                        className="size-8 rounded-full object-cover md:size-6"
                      />
                      <span className="text-caption text-primary text-left font-medium text-pretty">
                        {study.name}
                        <span className="hidden md:inline">,</span>{" "}
                        <span className="text-secondary block md:inline">
                          {study.title}
                        </span>
                      </span>
                    </div>

                    <Link
                      href={study.url}
                      className="text-primary text-sub-body group mt-4 flex items-center gap-2 text-right md:mt-0"
                    >
                      Read customer story{" "}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
