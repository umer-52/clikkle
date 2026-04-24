"use client";

import { useEffect, useRef, useState } from "react";
import { Step } from "./step";

export function Draft() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const wrapperRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    typeWrite("Clikkle Messaging is out 🚀", setTitle, 500).then(() =>
                        new Promise((r) => setTimeout(r, 500))
                    ).then(() =>
                        typeWrite(
                            "Discover enhanced features to elevate your apps to the next level!",
                            setMessage,
                            500
                        )
                    );
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Step title="Step 1: Draft">
            <div ref={wrapperRef} className="relative" style={{ aspectRatio: "16 / 11" }}>
                {/* Console (desktop) */}
                <div className="flex flex-col rounded-[18px] border-[8px] border-[#2D2D2F] overflow-hidden h-full">
                    {/* Console Header */}
                    <div className="flex justify-between items-center px-10 py-5 bg-[hsl(240,6%,10%)] border-b border-white/8">
                        <h3 className="text-sm font-medium text-white">Push notification</h3>
                        <div className="w-4 h-4 text-white/50 cursor-pointer">✕</div>
                    </div>
                    {/* Console Grid */}
                    <div className="grid grid-cols-[260px_1fr] flex-1">
                        {/* Sidebar */}
                        <div className="bg-[#1C1C20] p-10">
                            <ul className="flex flex-col gap-12">
                                {["Message", "Target", "Schedule"].map((item, i) => (
                                    <li
                                        key={item}
                                        className={`relative flex items-center gap-3 text-sm ${
                                            i === 0 ? "text-white" : "text-white/40"
                                        }`}
                                    >
                                        <div
                                            className={`w-4 h-4 rounded-full border-2 ${
                                                i === 0
                                                    ? "border-[#FE9567] bg-[#FE9567]/20"
                                                    : "border-white/20"
                                            }`}
                                        />
                                        {item}
                                        {i < 2 && (
                                            <div className="absolute left-[7px] -bottom-10 h-8 w-px border-r border-white/8" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Content Area */}
                        <div className="bg-[#242427] p-10">
                            <h4 className="text-base font-semibold text-white">Message</h4>
                            <hr className="border-white/8 my-8" />
                            <label className="block text-sm text-white mt-6 mb-1">Title</label>
                            <input
                                className="w-full max-w-[80%] bg-black/16 border border-white/8 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                maxLength={48}
                            />
                            <label className="block text-sm text-white mt-6 mb-1">Message</label>
                            <textarea
                                className="w-full max-w-[80%] bg-black/16 border border-white/8 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 min-h-[80px]"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Phone Preview (overlays on desktop, centered on mobile) */}
                <div className="lg:absolute lg:right-[6%] lg:bottom-0 rounded-t-[60px] bg-white/[0.02] backdrop-blur-[42px] w-[280px] lg:w-[364px] lg:h-[700px] h-[400px] mx-auto lg:mx-0 border border-white/[0.12] border-b-0 overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[7.5rem] h-6 bg-black/25 rounded-full" />
                    {/* Date */}
                    <span className="absolute top-20 left-1/2 -translate-x-1/2 text-white/24 text-xs">
                        Sunday, October 1
                    </span>
                    {/* Time */}
                    <span className="absolute top-20 left-1/2 -translate-x-1/2 text-white/24 text-[5.25rem] font-semibold leading-none mt-4">
                        9:41
                    </span>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(240,6%,10%)] pointer-events-none rounded-[18px] min-h-[700px] hidden lg:block" />

                {/* Notification Card */}
                <div className="absolute right-4 lg:right-10 top-[12rem] lg:top-[20rem] w-[300px] lg:w-[380px] min-h-[140px] rounded-[20px] bg-white/[0.06] backdrop-blur-[42px] border border-white/[0.12] p-[1.125rem]">
                    {/* Notification Header */}
                    <div className="flex items-center gap-1.5">
                        <div className="text-[#FE9567] text-xs">🔔</div>
                        <span className="text-white/60 text-xs">CLIKKLE</span>
                        <span className="text-white/40 text-xs ml-auto">now</span>
                    </div>
                    <span className="block mt-2 text-white text-sm font-medium break-words">
                        {title}
                    </span>
                    <span className="block mt-1 text-white/50 text-sm break-words">
                        {message}
                    </span>
                </div>
            </div>

            {/* Text below */}
            <div className="lg:absolute lg:bottom-[7.5rem] lg:left-20 max-w-lg mt-8 lg:mt-0">
                <h3 className="text-2xl lg:text-5xl font-aeonik-pro text-white">
                    Draft and preview your message before delivering it
                </h3>
                <p className="text-white/50 mt-6 text-lg font-medium">
                    See a preview of your crafted messages on the Console before sending them to
                    your audience.
                </p>
            </div>
        </Step>
    );
}

async function typeWrite(
    text: string,
    setter: (v: string) => void,
    duration: number
) {
    const interval = duration / text.length;
    for (let i = 0; i <= text.length; i++) {
        setter(text.slice(0, i));
        await new Promise((r) => setTimeout(r, interval));
    }
}
