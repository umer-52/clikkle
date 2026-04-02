"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardIllustration } from "./dashboard-illustration";

interface HeroSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  showPromoBanner?: boolean;
  showSecondaryActions?: boolean;
}

export function HeroSection({
  title = (
    <>
      Built for the first <br className="hidden md:block" />
      <span className="text-primary">soloClikk_</span>
    </>
  ),
  subtitle = "All-in-one, cloud infrastructure. Deploy in minutes, scale with any framework, Auth, Database, Storage, Functions, Realtime & Hosting included.",
  showPromoBanner = true,
  showSecondaryActions = true,
}: HeroSectionProps) {
  return (
    <div className="relative flex w-full items-center overflow-hidden py-12 md:py-0 lg:min-h-[700px]">
      <div
        className={cn(
          "animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-12 overflow-hidden blur-3xl md:w-full",
          "bg-[image:radial-gradient(ellipse_900px_900px_at_20%_20%,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0)_70%),_radial-gradient(ellipse_1000px_700px_at_30%_50%,_rgba(92,140,255,0.04)_0%,_rgba(45,99,255,0)_70%)]",
          "bg-position-[0%_0%]"
        )}
      ></div>

      <div className="relative container mx-auto grid h-full grid-cols-1 place-items-center gap-24 md:grid-cols-2">
        <div className="animate-blur-in flex flex-col gap-4 [animation-delay:150ms] [animation-duration:1000ms] md:ml-12 lg:ml-0">
          {showPromoBanner ? (
            <Link
              href="https://clikkle.com/blog/post/velocity"
              className="web-btn web-btn-ghost relative mb-4 w-fit border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="shrink-0 text-white/70" aria-hidden="true" />
              <span className="shrink-0 text-white">New</span>
              <span className="text-white/20 shrink-0">|</span>
              <span className="web-u-trim-1 max-w-[14rem] text-white">Introducing <span className="text-[#5D87FF]">Velocity</span></span>
              <ArrowRight className="shrink-0 text-white/50" aria-hidden="true" />
            </Link>
          ) : null}

          <h1 className="-mb-1 block animate-fade-in font-aeonik-pro text-[4.5rem] text-pretty leading-[1.1] tracking-tight text-white">
            Built for the first <br className="hidden md:block" />
            <span className="bg-gradient-to-b from-[#6b9aff] to-[#2d58d8] bg-clip-text text-transparent">soloClikk_</span>
          </h1>

          <p className="max-w-xl text-[1.125rem] leading-relaxed text-[#B4B4B5] font-normal">
            All-in-one, cloud infrastructure. Deploy in minutes, scale with any framework, Auth, Database, Storage, Functions, Realtime & Hosting included.
          </p>

          <div className="mt-6 flex flex-col gap-3 lg:flex-row">
            <Link
              href="https://cloud.clikkle.com/register"
              className="web-btn web-btn-primary w-full! lg:w-fit!"
            >
              <span className="text">Start building for free</span>
            </Link>

            {showSecondaryActions ? (
              <button
                type="button"
                className="web-btn web-btn-secondary w-full sm:w-fit lg:w-fit!"
              >
                <span className="text flex items-center gap-2">Clikkle Platform in 100 seconds <span className="font-mono text-white/50">&gt;</span></span>
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
