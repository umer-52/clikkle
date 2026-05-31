"use client";

import { useEffect, useState } from "react";

export function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hasReleased: false,
  });

  useEffect(() => {
    function update() {
      const now = new Date();
      const timeRemaining = targetDate.getTime() - now.getTime();

      if (timeRemaining <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          hasReleased: true,
        });
        return;
      }

      const totalSeconds = Math.floor(timeRemaining / 1000);
      const seconds = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;
      const hours = Math.floor(totalMinutes / 60);
      const days = Math.floor(hours / 24);

      setTimeLeft({
        days,
        hours, // original holds total remaining hours (inc. days) for the ticker logic
        minutes,
        seconds,
        hasReleased: false,
      });
    }

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
