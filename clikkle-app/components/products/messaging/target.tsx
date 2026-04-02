"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Step } from "./step";

type Device = {
    checked: boolean;
    type: string;
    value: string;
};

type User = {
    name: string;
    devices: Device[];
};

const initialUsers: User[] = [
    {
        name: "Eleanor Pena",
        devices: [
            { checked: false, type: "Email", value: "eleanor.pena@clikkle.io" },
            { checked: false, type: "Push", value: "Eleanor's iPhone" },
            { checked: false, type: "SMS", value: "+1 123 456 2890" },
        ],
    },
    {
        name: "Walter O'Brien",
        devices: [
            { checked: false, type: "Email", value: "walter@clikkle.io" },
            { checked: false, type: "SMS", value: "+55 98142-4332" },
        ],
    },
    {
        name: "Toby Curtis",
        devices: [
            { checked: false, type: "Push", value: "Toby's Pixel" },
            { checked: false, type: "Push", value: "Toby's Laptop" },
        ],
    },
    {
        name: "Paige Dineen",
        devices: [
            { checked: false, type: "Email", value: "paige@clikkle.io" },
            { checked: false, type: "SMS", value: "+351 999 888 124" },
        ],
    },
];

export function Target() {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [openAccordions, setOpenAccordions] = useState<number[]>([0]);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    // Auto-check Eleanor's devices with delays
                    setTimeout(() => {
                        setUsers((prev) => {
                            const copy = structuredClone(prev);
                            copy[0].devices[0].checked = true;
                            return copy;
                        });
                    }, 500);
                    setTimeout(() => {
                        setUsers((prev) => {
                            const copy = structuredClone(prev);
                            copy[0].devices[2].checked = true;
                            return copy;
                        });
                    }, 1500);
                    setTimeout(() => {
                        setUsers((prev) => {
                            const copy = structuredClone(prev);
                            copy[0].devices[1].checked = true;
                            return copy;
                        });
                    }, 2000);
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const toggleAccordion = useCallback((index: number) => {
        setOpenAccordions((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    }, []);

    const toggleAllDevices = useCallback((userIndex: number, checked: boolean) => {
        setUsers((prev) => {
            const copy = structuredClone(prev);
            copy[userIndex].devices.forEach((d) => (d.checked = checked));
            return copy;
        });
    }, []);

    const toggleDevice = useCallback(
        (userIndex: number, deviceIndex: number) => {
            setUsers((prev) => {
                const copy = structuredClone(prev);
                copy[userIndex].devices[deviceIndex].checked =
                    !copy[userIndex].devices[deviceIndex].checked;
                return copy;
            });
        },
        []
    );

    const totalDevices = users.flatMap((u) => u.devices).length;
    const selectedUsers = users.filter((u) => u.devices.some((d) => d.checked)).length;

    return (
        <Step title="Step 2: Target">
            <div ref={wrapperRef} className="relative overflow-hidden mt-8">
                {/* Fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(240,5.7%,10.4%)] pointer-events-none z-10 hidden md:block" />

                {/* Background decorative dots (simplified SVG network) */}
                <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[1240px] opacity-60 z-0"
                    viewBox="0 0 2000 1050"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Decorative network lines */}
                    {[
                        [100, 500, 500, 100],
                        [100, 500, 1520, 700],
                        [100, 500, 500, 900],
                        [500, 100, 500, 900],
                        [500, 100, 1500, 100],
                        [1500, 100, 1300, 450],
                        [1300, 450, 1900, 500],
                        [1900, 500, 1500, 900],
                        [500, 900, 450, 450],
                        [450, 450, 1520, 700],
                    ].map(([x1, y1, x2, y2], i) => (
                        <line
                            key={i}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="2"
                        />
                    ))}
                    {/* Decorative circles */}
                    {[
                        [100, 500],
                        [500, 100],
                        [1520, 700],
                        [1500, 900],
                        [500, 900],
                        [1900, 500],
                        [450, 450],
                        [1500, 100],
                        [1300, 450],
                    ].map(([cx, cy], i) => (
                        <circle
                            key={i}
                            cx={cx}
                            cy={cy}
                            r="3"
                            fill="rgba(255,255,255,0.5)"
                        />
                    ))}
                </svg>

                {/* Users Modal (centered overlay) */}
                <div className="relative z-10 w-full max-w-[30rem] mx-auto p-8 bg-black/60 backdrop-blur-[20px] rounded-3xl border border-white/[0.07]">
                    <h3 className="text-base font-semibold text-white">Select subscribers</h3>
                    <ul className="flex flex-col mt-8">
                        {users.map((user, i) => {
                            const selectedDevices = user.devices.filter((d) => d.checked).length;
                            const allSelected = selectedDevices === user.devices.length;
                            const isOpen = openAccordions.includes(i);

                            return (
                                <li key={i} className="border-t border-white/8 last:border-b">
                                    {/* Trigger */}
                                    <button
                                        className="flex items-center w-full py-4 cursor-pointer"
                                        onClick={() => toggleAccordion(i)}
                                    >
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 rounded accent-[#FE9567] cursor-pointer"
                                            checked={allSelected}
                                            ref={(el) => {
                                                if (el) el.indeterminate = selectedDevices > 0 && !allSelected;
                                            }}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                toggleAllDevices(i, !allSelected);
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                        <span className="text-sm text-white font-medium pl-4">
                                            {user.name}
                                        </span>
                                        <span className="text-xs text-white/40 ml-1">
                                            ({selectedDevices}/{user.devices.length} targets)
                                        </span>
                                        <svg
                                            className={`ml-auto w-4 h-4 text-white/40 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>
                                    {/* Content */}
                                    {isOpen && (
                                        <ul className="flex flex-col gap-4 pl-9 pb-4">
                                            {user.devices.map((device, j) => (
                                                <li key={j} className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded accent-[#FE9567] cursor-pointer"
                                                        checked={device.checked}
                                                        onChange={() => toggleDevice(i, j)}
                                                    />
                                                    <span className="text-xs bg-white/8 rounded px-1.5 py-0.5 text-white/60">
                                                        {device.type}
                                                    </span>
                                                    <span className="text-xs text-white/40">
                                                        {device.value}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="mt-5">
                        <span className="text-xs text-white/30">
                            Total results: {totalDevices}
                        </span>
                    </div>
                    <hr className="border-white/8 -mx-8 my-8" />
                    <div className="flex items-center justify-end gap-4">
                        <span className="text-sm text-white/40">
                            {selectedUsers} Users selected
                        </span>
                        <button className="bg-white text-black text-sm font-medium px-6 py-2 rounded-lg hover:bg-white/90 transition-colors">
                            Add
                        </button>
                    </div>
                </div>
            </div>

            {/* Text below */}
            <div className="mt-4 flex flex-col items-center gap-6 text-center lg:text-center">
                <h3 className="text-2xl lg:text-3xl font-aeonik-pro text-white">
                    Target and group your subscribers
                </h3>
                <p className="text-white/50 text-base font-medium max-w-[580px]">
                    Segment your users based on topics using list subscriptions to send focused
                    messages.
                </p>
            </div>
        </Step>
    );
}
