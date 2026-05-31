"use client";

import { Window } from "./init-window";
import { useCountdown } from "@/lib/use-countdown";
import { InitCounter } from "./init-counter";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface PreReleaseCardProps {
  release: Date;
  index: number;
}

export function PreReleaseCard({ release, index }: PreReleaseCardProps) {
  const { days, hours, minutes, seconds } = useCountdown(release);

  return (
    <div className="relative h-fit pb-8">
      <Window
        title={
          <div className="text-eyebrow flex items-center gap-1 text-white">
            Day {index} <span className="text-white/40">/</span>{" "}
            {format(release, "MMM-dd-yyyy")}
          </div>
        }
        className="aspect-[4/1]"
      >
        <div className="relative flex flex-1 items-center justify-center rounded-xl bg-[#19191C] min-h-[150px]">
          <div
            className={cn(
              "font-aeonik-fono text-primary relative flex items-center rounded-full bg-black px-4 py-1.5 text-center text-xl uppercase",
              "outline-2 outline-[var(--color-offset)] outline-dashed"
            )}
          >
            {hours > 24 ? (
              <p>
                {days} {days > 1 ? "days" : "day"}
              </p>
            ) : (
              <div className="flex items-center gap-1">
                <InitCounter value={hours} />
                <span>:</span>
                <InitCounter value={minutes} />
                <span>:</span>
                <InitCounter value={seconds} />
              </div>
            )}
          </div>
        </div>
      </Window>
    </div>
  );
}
