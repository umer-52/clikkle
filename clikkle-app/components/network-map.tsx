"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Map } from "@/components/appwrite-network/map";

/**
 * Light marketing band — uses shared `Map` + `MapNav` (Appwrite `map.svelte` parity: dotted map,
 * segment control, tooltips). Header copy stays above the map.
 */
export function NetworkMap() {
  return (
    <div className="light border-smooth -mt-6 border-b bg-[#EDEDF0] pt-12 pb-12 md:py-32">
      <div className="mb-12 flex flex-col items-center gap-6 text-center">
        <h2 className="text-primary font-aeonik-pro text-title">
          The Clikkle Network<span className="text-accent">_</span>
        </h2>
        <p className="text-description text-light-secondary max-w-[90%] font-medium md:max-w-[75%] lg:max-w-[40%]">
          Pick one of our many cloud regions or edges to meet your project&apos;s
          needs and reduce latency.
        </p>
        <Link
          href="/the-clikkle-network"
          className="web-btn web-btn-secondary-light group w-full! md:w-fit!"
        >
          <span className="text">More about the Clikkle Network</span>
          <ArrowRight
            className="transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>

      <Map theme="light" navigable defaultSet="pop-locations" />
    </div>
  );
}
