"use client";

import { useEffect, useRef, useState } from "react";

interface SiteStepProps {
    eyebrowText: string;
    children: React.ReactNode;
}

export function SiteStep({ eyebrowText, children }: SiteStepProps) {
    const [eyebrow, setEyebrow] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    typeWrite(eyebrowText, setEyebrow, 500);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [eyebrowText]);

    return (
        <div className="flex h-fit flex-1 gap-3" ref={containerRef}>
            {/* Timeline dot */}
            <div className="sticky inset-y-0 top-0 left-0 flex h-full justify-center bg-transparent">
                <div className="absolute z-10 flex w-4 h-4 items-center justify-center rounded-full bg-gradient-to-tl from-transparent to-white/30 border border-white/10">
                    <div className="w-1 h-1 rounded-full bg-white" />
                </div>
            </div>
            <div className="flex w-full flex-col gap-8 md:pl-8">
                <span className="text-white text-xs font-aeonik-fono uppercase tracking-widest max-sm:ml-2">
                    {eyebrow}<span className="text-[#FE9567]">_</span>
                </span>
                {children}
            </div>
        </div>
    );
}

async function typeWrite(text: string, setter: (v: string) => void, duration: number) {
    const interval = duration / text.length;
    for (let i = 0; i <= text.length; i++) {
        setter(text.slice(0, i));
        await new Promise((r) => setTimeout(r, interval));
    }
}
