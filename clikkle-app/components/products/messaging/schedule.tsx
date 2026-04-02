"use client";

import { useState } from "react";
import { Step } from "./step";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
}

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export function Schedule() {
    const now = new Date();
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth());
    const [selectedDay, setSelectedDay] = useState(now.getDate());

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const prevMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    const nextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    };

    const goToToday = () => {
        setYear(now.getFullYear());
        setMonth(now.getMonth());
        setSelectedDay(now.getDate());
    };

    // Generate calendar grid
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);

    // Time picker values
    const timeRows = Array.from({ length: 11 }, (_, i) => ({
        hours: (3 + i).toString().padStart(2, "0"),
        minutes: (25 + i).toString(),
    }));

    return (
        <Step title="Step 3: Schedule">
            {/* Decorative blur */}
            <div className="absolute w-[505px] h-[505px] top-40 left-1/2 -translate-x-1/2 bg-[radial-gradient(circle,hsla(178,54%,69%,0.6)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-[auto_auto] gap-20 items-center justify-center mt-[4.5rem] relative z-10">
                {/* Calendar */}
                <div className="w-full max-w-[30rem] mx-auto rounded-3xl border border-white/[0.07] bg-[hsl(240,6%,12%,0.64)] backdrop-blur-[30px] overflow-hidden">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between p-[1.125rem]">
                        <button
                            onClick={prevMonth}
                            className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/60 hover:bg-white/5 transition-colors"
                        >
                            ‹
                        </button>
                        <div className="flex items-center gap-4">
                            <span className="text-base font-semibold text-white">
                                {monthNames[month]} {year}
                            </span>
                            <button
                                onClick={goToToday}
                                className="text-xs px-3 py-1 rounded-lg border border-white/10 text-white/60 hover:bg-white/5 transition-colors"
                            >
                                Today
                            </button>
                        </div>
                        <button
                            onClick={nextMonth}
                            className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/60 hover:bg-white/5 transition-colors"
                        >
                            ›
                        </button>
                    </div>

                    {/* Weekday headers */}
                    <div className="grid grid-cols-7 mt-7 text-center">
                        {weekdays.map((day) => (
                            <span
                                key={day}
                                className="text-[10px] tracking-widest uppercase text-white/40 font-medium"
                            >
                                {day}
                            </span>
                        ))}
                    </div>

                    {/* Day cells */}
                    <div className="grid grid-cols-7 text-center pb-4">
                        {cells.map((day, i) => (
                            <div key={i} className="aspect-square flex items-center justify-center">
                                {day !== null && (
                                    <button
                                        onClick={() => setSelectedDay(day)}
                                        className={`relative w-full h-full flex items-center justify-center text-lg transition-all ${
                                            day === selectedDay
                                                ? "text-black font-semibold"
                                                : "text-white hover:opacity-75"
                                        }`}
                                    >
                                        {day === selectedDay && (
                                            <div className="absolute inset-[0.725rem] rounded-2xl bg-gradient-to-br from-white via-[hsl(178,54%,69%)] to-[hsl(178,54%,69%,0.62)]" />
                                        )}
                                        <span className="relative z-10">{day}</span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Time Picker (desktop only) */}
                <div className="hidden md:block relative select-none">
                    {timeRows.map((row, i) => {
                        const isCenter = i === 5;
                        const dist = Math.abs(i - 5);
                        const fontSize =
                            dist === 0 ? 38 : dist === 1 ? 32 : dist === 2 ? 24 : dist === 3 ? 16 : dist === 4 ? 14 : 12;

                        return (
                            <div
                                key={i}
                                className="grid text-center"
                                style={{
                                    gridTemplateColumns: "77px 16px 77px",
                                    fontSize: `${fontSize}px`,
                                    color: isCenter ? "white" : "rgba(255,255,255,0.5)",
                                }}
                            >
                                <span>{row.hours}</span>
                                <span>:</span>
                                <span>{row.minutes}</span>
                            </div>
                        );
                    })}
                    {/* Fade overlays */}
                    <div className="absolute inset-0 bottom-1/2 bg-gradient-to-b from-[hsl(270,4%,10%)] to-transparent pointer-events-none" />
                    <div className="absolute inset-0 top-1/2 bg-gradient-to-b from-transparent to-[hsl(270,4%,10%)] pointer-events-none" />
                </div>
            </div>

            {/* Text below */}
            <h3 className="text-2xl lg:text-3xl font-aeonik-pro text-white text-center lg:text-center mt-[4.5rem]">
                Schedule your messages
            </h3>
            <p className="text-white/50 text-base font-medium text-center lg:text-center mt-6 max-w-[20rem] mx-auto">
                Send messages immediately or schedule them for future delivery.
            </p>
        </Step>
    );
}
