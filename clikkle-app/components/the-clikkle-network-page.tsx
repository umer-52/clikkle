"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Map } from "@/components/appwrite-network/map";

const HEADING = "The Clikkle Network";

/** Cloned from `src/routes/the-appwrite-network/+page.svelte` — Clikkle blue lighting + gradient title */
export function TheClikkleNetworkPage() {
  const words = HEADING.split(" ");

  return (
    <div className="dark relative max-w-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mt-20 flex flex-col items-center px-4">
        <Link
          href="/blog"
          className="bg-accent/5 animate-enter group border-[color-mix(in_srgb,var(--color-brand-primary)_36%,transparent)] text-primary relative -mb-8 flex items-center gap-2 rounded-full border px-4 py-1 text-sm [animation-delay:250ms]"
        >
          Read the announcement
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <h1 className="text-display-1 font-aeonik-pro mx-auto inline-block py-12 text-center">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="animate-enter mr-2 inline-block bg-[linear-gradient(6deg,_#6fa3ff,_#f8f8fb_42%)] bg-clip-text text-transparent"
              style={{ animationDelay: `${i * 75}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>
      </div>

      <div
        className={cn(
          "animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full",
          "bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(45,_99,_255,_0.22)_0%,_rgba(45,_99,_255,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(45,_99,_255,_0.1)_0%,_rgba(45,_99,_255,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(30,_58,_138,_0.12)_0%,_rgba(30,_58,_138,_0)_70%)]",
          "bg-position-[0%_0%]"
        )}
        aria-hidden
      />

      <div className="mb-20 px-4">
        <Map theme="dark" navigable defaultSet="pop-locations" />
      </div>
    </div>
  );
}
