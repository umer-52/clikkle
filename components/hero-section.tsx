"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, PlayCircle } from "lucide-react";
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
    <div className="relative flex max-w-screen items-center overflow-hidden py-12 md:py-0 lg:min-h-[700px]">
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
              className="web-hero-banner-button relative mb-4 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-transparent py-1.5 px-3 backdrop-blur-md transition-colors hover:bg-white/5"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-white/70" aria-hidden="true" />
              <span className="text-[13px] shrink-0 font-medium text-white">New</span>
              <span className="text-[13px] text-white/20 shrink-0">|</span>
              <span className="text-[13px] web-u-trim-1 text-white">Introducing <span className="text-[#5D87FF]">Velocity</span></span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white/50" aria-hidden="true" />
            </Link>
          ) : null}

          <span className="-mb-1 block text-white animate-fade-in">
            <h1 className="font-aeonik-pro text-[4.5rem] text-pretty leading-[1.1] tracking-tight">
              Built for the first <br className="hidden md:block" />
              <span className="bg-gradient-to-b from-[#6b9aff] to-[#2d58d8] bg-clip-text text-transparent">soloClikk_</span>
            </h1>
          </span>

          <p className="max-w-xl text-[1.125rem] leading-relaxed text-[#B4B4B5] font-normal">
            All-in-one, cloud infrastructure. Deploy in minutes, scale with any framework, Auth, Database, Storage, Functions, Realtime & Hosting incuded.
          </p>

          <div className="mt-6 flex flex-col gap-3 lg:flex-row">
            <Link
              href="https://cloud.clikkle.com/register"
              className="group flex w-full! lg:w-fit! items-center justify-center rounded-[8px] border border-white/5 bg-[#2d58d8] px-5 py-2.5 text-[0.9375rem] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-all hover:bg-[#2D63FF]"
            >
              <span className="text">Start building for free</span>
            </Link>
            
            {showSecondaryActions ? (
              <button className="group flex w-full items-center justify-center gap-2 sm:w-fit lg:w-fit! rounded-[8px] bg-transparent px-5 py-2.5 text-[0.9375rem] font-medium border border-white/10 text-[#E4E4E5] transition-all hover:bg-white/5">
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
