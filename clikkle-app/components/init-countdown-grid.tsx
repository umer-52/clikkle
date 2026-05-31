"use client";

import { Window } from "./init-window";
import { CountdownCard } from "./init-countdown-card";

interface DayProps {
  title: string;
  illustration: string;
  illustrationWidth: number;
  illustrationHeight: number;
  release: Date;
}

interface CountdownGridProps {
  days: DayProps[];
}

export function CountdownGrid({ days }: CountdownGridProps) {
  return (
    <section className="init-schedule my-10">
      <div className="container mx-auto px-4">
        <Window title="Init_Schedule">
          <div className="init-schedule-grid grid grid-cols-1 md:grid-cols-5 gap-4 border border-white/5 rounded-xl bg-white/5 p-4">
            {days.map((day, i) => (
              <CountdownCard
                key={day.title}
                index={i + 1}
                title={day.title}
                illustration={day.illustration}
                illustrationWidth={day.illustrationWidth}
                illustrationHeight={day.illustrationHeight}
                release={day.release}
              />
            ))}
          </div>
        </Window>
      </div>
    </section>
  );
}
