"use client";
import { cn } from "@/lib/utils";
import { GridPaper } from "./grid-paper";
import Link from "next/link";

export function BentoStorage() {
  return (
    <Link
      href="/docs/products/storage"
      className="border-smooth group col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6 lg:col-span-4"
    >
      <div className="space-y-3 px-3 pt-2 pb-4">
        <div className="flex items-center gap-2">
          <img loading="lazy" src="/assets/images/icons/illustrated/dark/storage.png" alt="Storage icon" width={28} height={28} className="size-7" />
          <h3 className="font-aeonik-pro text-label text-primary">Storage</h3>
        </div>
        <p className="text-sub-body text-primary max-w-lg font-medium">
          <span className="text-secondary">Securely store files with</span> advanced compression, encryption and image transformations.
        </p>
      </div>
      <div className="relative mt-auto mb-0 flex h-85 items-center justify-center overflow-clip rounded-xl bg-black/24 p-8">
        <div className="relative h-fit border border-white/50 p-1">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                'absolute z-10 flex h-1 w-1 items-center justify-center border border-white/24 bg-white/24 backdrop-blur-sm',
                {
                  '-left-0.5': i === 0 || i === 2,
                  '-top-0.5': i === 0 || i === 1,
                  '-right-0.5': i === 1 || i === 3,
                  '-bottom-0.5': i === 2 || i === 3
                }
              )}
            ></div>
          ))}

          <img
            loading="lazy"
            src="/assets/images/storage.webp"
            alt="Storage"
            className="md:max-w-auto h-full w-full max-w-[350px] overflow-hidden rounded object-cover grayscale transition-all group-hover:rounded-3xl group-hover:grayscale-[25%]"
          />
          <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        <GridPaper className="absolute inset-0 bg-size-[calc(100%/9)]" />
      </div>
    </Link>
  );
}
