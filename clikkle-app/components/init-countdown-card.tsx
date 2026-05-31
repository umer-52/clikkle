"use client";

import { useCountdown } from "@/lib/use-countdown";
import { InitCounter } from "./init-counter";
import { cn } from "@/lib/utils";

interface CountdownCardProps {
  illustration: string;
  illustrationWidth: number;
  illustrationHeight: number;
  release: Date;
  index: number;
  title: string;
}

export function CountdownCard({
  illustration,
  illustrationWidth,
  illustrationHeight,
  release,
  index,
  title,
}: CountdownCardProps) {
  const { days, hours, minutes, seconds, hasReleased } = useCountdown(release);

  return (
    <a href={`#day-${index}`} className="group block">
      <div className="text-caption text-primary font-fira-code mb-2 flex gap-2 uppercase text-xs">
        Day {index}
        {hasReleased && (
          <>
            <span className="text-white/40">/</span>
            <span>{title}</span>
          </>
        )}
      </div>
      <div
        className={cn(
          "group relative aspect-square gap-4 overflow-hidden rounded-[4px] border border-dashed border-white/32 p-1"
        )}
      >
        <div
          className={cn(
            "relative z-20 h-full w-full rounded-[4px] bg-[#19191C] transition",
            "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
          )}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center p-4">
            {hasReleased ? (
              <img
                src={illustration}
                width={illustrationWidth}
                height={illustrationHeight}
                alt={title}
                className="w-32 h-32 object-contain"
                decoding="async"
              />
            ) : (
              <span className="init-badge text-[1.125rem] px-3 py-1 font-mono">
                {hours > 24 ? (
                  <span>
                    {days} {days > 1 ? "days" : "day"}
                  </span>
                ) : (
                  <span className="flex items-center gap-0.5">
                    <InitCounter value={hours} />
                    <span>:</span>
                    <InitCounter value={minutes} />
                    <span>:</span>
                    <InitCounter value={seconds} />
                  </span>
                )}
              </span>
            )}
          </div>
        </div>
        <div
          className={cn(
            "absolute inset-0 transform bg-black transition-transform duration-300 ease-in-out"
          )}
        />
      </div>
    </a>
  );
}
