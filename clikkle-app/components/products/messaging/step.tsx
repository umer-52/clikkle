"use client";

import { ReactNode } from "react";

interface StepProps {
    title: string;
    hideLine?: boolean;
    children: ReactNode;
}

export function Step({ title, hideLine = false, children }: StepProps) {
    return (
        <div
            className="relative pl-0 lg:pl-8 pb-[7.5rem]"
            style={{
                borderLeft: hideLine
                    ? "1px solid transparent"
                    : undefined,
            }}
        >
            {/* Vertical timeline line - desktop only */}
            <div
                className="hidden lg:block absolute top-0 bottom-0 left-0"
                style={{
                    width: "1px",
                    background: hideLine ? "transparent" : "rgba(255,255,255,0.08)",
                }}
            />
            {/* Dot marker - desktop only */}
            <div className="hidden lg:flex absolute left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-white/50 border border-white/20" />
            <h2 className="text-xs font-aeonik-fono text-white tracking-widest uppercase mb-8">
                {title}
            </h2>
            <div className="lg:w-auto">{children}</div>
        </div>
    );
}
