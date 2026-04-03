"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardIllustration } from "./dashboard-illustration";

interface HeroSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  showPromoBanner?: boolean;
  showSecondaryActions?: boolean;
}

export function HeroSection({
  title = "Built for the first soloClikk",
  subtitle = "All-in-one, cloud infrastructure. Deploy in minutes, scale with any framework, Auth, Database, Storage, Functions, Realtime & Hosting included.",
  showPromoBanner = true,
  showSecondaryActions = true,
}: HeroSectionProps) {
  return (
    <div className="relative flex max-w-screen items-center overflow-hidden py-12 md:py-0 lg:min-h-[700px]">
      <div
        className={cn(
          "animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full",
          "bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(254,_149,_103,_0.2)_0%,_rgba(254,_149,_103,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%)]",
          "bg-position-[0%_0%]"
        )}
      ></div>

      <div className="relative appwrite-container grid h-full grid-cols-1 items-center gap-24 md:grid-cols-2">
        <div className="animate-blur-in flex flex-col gap-4 [animation-delay:150ms] [animation-duration:1000ms]">
          {showPromoBanner ? (
            <Link
              href="https://clikkle.com/blog/post/velocity"
              className="web-hero-banner-button relative mb-4"
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

          <h1 className="animate-fade-in font-aeonik-pro text-headline text-pretty text-primary">
            {title}
            <span className="text-accent">_</span>
          </h1>

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
                className="web-btn web-btn-secondary w-full! cursor-pointer shadow-[0_2px_40px_rgba(0,0,0,0.5)] transition-opacity hover:opacity-90 active:scale-95 lg:w-fit!"
              >
                <span className="text">Clikkle Platform in 100 seconds</span>
                <Play className="size-4 shrink-0" aria-hidden />
              </button>
            ) : null}
          </div>
        </div>

        {/* Dashboard Component Graphic matches Official Clikkle output exactly */}
        <DashboardIllustration />
      </div>
    </div>
  );
}
