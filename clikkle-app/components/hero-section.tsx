"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardIllustration } from "./dashboard-illustration";

interface HeroSectionProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  showPromoBanner?: boolean;
  showSecondaryActions?: boolean;
}

export function HeroSection({
  title = "Built for the first solocorn",
  subtitle = "All-in-one, cloud infrastructure. Deploy in minutes, scale with any framework, Auth, Database, Storage, Functions, Realtime & Hosting included.",
  showPromoBanner = true,
  showSecondaryActions = true,
}: HeroSectionProps) {
  return (
    <div className="relative flex max-w-full items-center overflow-x-clip overflow-y-visible py-12 md:py-0 lg:min-h-[700px]">
      {/*
        `overflow-x-clip`: Appwrite-style hero lets the dashboard mock extend past the content box;
        clip at the viewport (no horizontal scroll) while keeping the left edge of the mock visible.
      */}
      <div
        className={cn(
          "animate-lighting pointer-events-none absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full",
          "bg-[radial-gradient(ellipse_420px_56px_at_12%_28%,rgba(45,99,255,0.3)_0%,rgba(45,99,255,0)_72%),radial-gradient(ellipse_1100px_180px_at_18%_42%,rgba(45,99,255,0.15)_0%,rgba(45,99,255,0)_72%),radial-gradient(ellipse_1200px_200px_at_32%_32%,rgba(30,58,138,0.18)_0%,rgba(30,58,138,0)_72%)]",
          "bg-position-[0%_0%]"
        )}
        aria-hidden
      />
      {/* Slightly wider visual column + tighter md gap so the mock sits closer to copy like Appwrite */}
      <div className="relative appwrite-container grid h-full min-w-0 grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] md:items-center md:gap-12 lg:gap-20 xl:gap-24">
        <div className="animate-blur-in flex min-w-0 flex-col gap-4 [animation-delay:150ms] [animation-duration:1000ms]">
          {showPromoBanner ? (
            <Link
              href="https://clikkle.com/blog/post/velocity"
              className="web-hero-banner-button relative mb-4 flex items-center"
            >
              <Sparkles className="text-white/90" aria-hidden="true" />
              <span className="text-caption shrink-0 font-medium">New</span>
              <div className="web-hero-banner-button-sep" aria-hidden />
              <span className="text-caption web-u-trim-1 max-w-[14rem]">
                Introducing <span className="text-[var(--color-brand-primary)]">Velocity</span>
              </span>
              <ArrowRight className="text-white/70" aria-hidden="true" />
            </Link>
          ) : null}

          {/* `gradient-text.svelte` shape: 145deg clip-text; brand blues instead of Appwrite pink */}
          <div className="-mb-1 block animate-fade-in bg-[linear-gradient(145deg,#6d8ffc_0%,#ffffff_50%)] bg-clip-text pb-1 text-transparent">
            <h1 className="font-aeonik-pro text-headline text-pretty">
              {title}
              <span className="text-accent">_</span>
            </h1>
          </div>

          <p className="text-description text-secondary font-medium">{subtitle}</p>

          <div className="mt-4 flex flex-col gap-2 lg:flex-row">
            <Link
              href="https://cloud.clikkle.com/register"
              className="web-btn web-btn-primary w-full! lg:w-fit!"
            >
              <span className="text">Start building for free</span>
            </Link>

            {showSecondaryActions ? (
              <button
                type="button"
                className="web-btn web-btn-secondary-dark w-full! cursor-pointer shadow-[0_2px_40px_rgba(0,0,0,0.5)] transition-opacity hover:opacity-90 active:scale-95 lg:w-fit!"
              >
                <span className="text">Clikkle Platform in 100 seconds</span>
                <Play className="size-4 shrink-0" aria-hidden />
              </button>
            ) : null}
          </div>
        </div>

        <div className="relative flex min-h-0 min-w-0 justify-start md:min-h-[min(640px,70vh)]">
          {/*
            Anchor mock to the column start (full chrome + sidebar visible); width follows intrinsic
            SVG layout on md+ so the right side can bleed past the container like Appwrite.
          */}
          <div className="w-full min-w-0 md:absolute md:top-1/2 md:left-0 md:w-max md:max-w-[min(1185px,calc(100dvw-1.5rem))] md:-translate-y-1/2">
            <DashboardIllustration />
          </div>
        </div>
      </div>
    </div>
  );
}
