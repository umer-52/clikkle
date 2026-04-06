"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

/**
 * Mirrors `use:infiniteScroll` in `src/routes/heroes/+page.svelte`:
 * duplicate slide markup only when `prefers-reduced-motion` is off; then CSS `[data-animated]` runs the marquee.
 */
export function HeroesCarousel() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const slides = [1, 2, 3, 4, 5] as const;

  const row = (keyPrefix: string) =>
    slides.map((i) => (
      <li key={`${keyPrefix}-${i}`}>
        <div
          className="web-card is-white carousel-img heroes-pg-carousel-card"
          style={
            {
              "--p-card-padding": "0.5rem",
              "--p-card-border-radius": "1.25rem",
            } as CSSProperties
          }
        >
          <img
            className="rounded-xl heroes-pg-carousel-photo"
            src={`/clikkle/images/heroes/photos/${i}.png`}
            loading="lazy"
            alt=""
          />
        </div>
      </li>
    ));

  return (
    <div
      className="heroes-pg-scroll-carousel"
      data-animated={reduceMotion ? undefined : "true"}
    >
      <ul className="inner">
        {row("a")}
        {!reduceMotion ? row("b") : null}
      </ul>
    </div>
  );
}
