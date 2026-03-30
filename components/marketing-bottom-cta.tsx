"use client";

import Link from "next/link";

export function MarketingBottomCta() {
  return (
    <section
      className="border-smooth border-t border-dashed border-white/10 bg-[#121215] py-20 md:py-28"
      aria-labelledby="marketing-bottom-cta-heading"
    >
      <div className="container mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 text-center">
        <h2
          id="marketing-bottom-cta-heading"
          className="font-aeonik-pro text-subtitle text-primary md:text-title text-pretty"
        >
          Start building with the open-source backend that ships everything you need
          <span className="text-accent">_</span>
        </h2>
        <Link
          href="https://cloud.clikkle.com/register"
          className="web-button w-full! md:w-fit!"
        >
          <span className="text">Start building for free</span>
        </Link>
      </div>
    </section>
  );
}
