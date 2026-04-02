"use client";

import { homeFeatureCards } from "@/lib/site-data";
import { Reveal } from "./reveal";

export function FeatureShowcase() {
  return (
    <section className="py-20 bg-[var(--bg-primary)]">
      <div className="shell mx-auto px-4 md:px-0">
        
        <Reveal className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
            Backend that scales without the ceremony_
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)]">
            Forget about managing servers, APIs, and complex configurations. Clikkle is your unified platform to build fast and scale infinitely.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeFeatureCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={0.1 * (i + 1)}>
                <div className="card-hover h-full flex flex-col items-start gap-4 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] transition-all">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-2">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed flex-1">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
