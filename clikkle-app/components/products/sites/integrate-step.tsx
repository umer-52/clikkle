"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { SiteStep } from "./site-step";
import { withBasePath } from "@/lib/basepath";

const products = [
    { label: "Auth", icon: withBasePath("/icons-black/Auth.png"), color: "hsl(343,98%,60%)" },
    { label: "Databases", icon: withBasePath("/icons-black/Morph DB.png"), color: "hsl(248,99%,70%)" },
    { label: "Storage", icon: withBasePath("/icons-black/Storage.png"), color: "hsl(178,54%,69%)" },
    { label: "Functions", icon: withBasePath("/icons-black/Functions.png"), color: "hsl(28,98%,70%)" },
    { label: "Messaging", icon: withBasePath("/icons-black/Messaging.png"), color: "hsl(343,98%,60%)" },
    { label: "Realtime", icon: withBasePath("/icons-black/Streams.png"), color: "hsl(248,99%,70%)" },
];

export function IntegrateStep() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const autoCycle = useCallback(() => {
        if (paused) return;
        setActiveIndex((prev) => (prev + 1) % products.length);
    }, [paused]);

    useEffect(() => {
        intervalRef.current = setInterval(autoCycle, 5000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [autoCycle]);

    const handleSetActive = (index: number) => {
        setPaused(true);
        setActiveIndex(index);
    };

    const handleMouseOut = () => {
        setPaused(false);
    };

    const leftProducts = products.slice(0, 3);
    const rightProducts = products.slice(3);

    return (
        <SiteStep eyebrowText="Integrate">
            <div
                className="relative grid grid-cols-1 md:grid-cols-12 place-items-center"
                style={{
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(45, 99, 255, 0.12) 0%, rgba(45, 99, 255, 0) 100%)",
                }}
            >
                {/* Left side */}
                <div className="col-span-3 mb-8 w-full md:mb-0">
                    <div className="flex items-center gap-2 md:flex-col md:items-end md:gap-8 lg:gap-12 font-medium text-white text-sm max-sm:justify-center">
                        {leftProducts.map((product, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <div key={product.label} className="group relative flex w-fit items-center md:w-full">
                                    <button
                                        className={`flex cursor-pointer items-center gap-2 rounded-xl border py-2 pr-4 pl-3 text-sm backdrop-blur-md transition-all hover:bg-white/8 md:mr-[100px] md:ml-auto ${
                                            isActive
                                                ? "bg-[#FE9567]/12 border-[#FE9567]/36 md:border-white/8 md:bg-white/[0.04]"
                                                : "bg-white/[0.04] border-white/8"
                                        }`}
                                        onMouseOver={() => handleSetActive(index)}
                                        onFocus={() => handleSetActive(index)}
                                        onMouseOut={handleMouseOut}
                                        onBlur={handleMouseOut}
                                    >
                                        <img src={product.icon} alt={product.label} className="w-4 h-4 md:w-6 md:h-6" loading="lazy" />
                                        <span className="hidden md:inline">{product.label}</span>
                                    </button>
                                    {/* Connecting line (desktop) */}
                                    <div className={`absolute right-0 hidden md:block ${index === 0 ? "top-1/2" : index === 2 ? "bottom-1/2" : ""}`}>
                                        <svg width="98" height={index === 1 ? "2" : "75"} viewBox={index === 1 ? "0 0 98 2" : "0 0 98 75"} fill="none">
                                            {index === 1 ? (
                                                <path d="M0 1L98 1" stroke={isActive ? "white" : "rgba(255,255,255,0.08)"} strokeDasharray="4 4" className="transition-all" />
                                            ) : index === 0 ? (
                                                <path d="M0 1H35.36C41.99 1 47.36 6.37 47.36 13V62C47.36 68.63 52.73 74 59.36 74H98" stroke={isActive ? "white" : "rgba(255,255,255,0.08)"} strokeDasharray="4 4" className="transition-all" />
                                            ) : (
                                                <path d="M0 74H35.36C41.99 74 47.36 68.63 47.36 62V13C47.36 6.37 52.73 1 59.36 1H98" stroke={isActive ? "white" : "rgba(255,255,255,0.08)"} strokeDasharray="4 4" className="transition-all" />
                                            )}
                                        </svg>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Center window */}
                <div className="col-span-6 flex w-full items-center justify-center rounded-[48px] md:p-3 aspect-[6.5/4] md:aspect-[6.5/4.5] md:border md:border-dashed md:border-blue-500/30"
                    style={{ animation: "border-pulse 2.5s infinite ease-in-out" }}
                >
                    <div className="flex h-full flex-1 rounded-[40px] md:border md:border-dashed md:border-blue-500/20 md:p-3">
                        <div className="flex h-full flex-1 rounded-[28px] md:border md:border-dashed md:border-blue-500/10 md:p-3">
                            <div className="bg-[#1C1C20] border border-white/8 flex flex-1 flex-col rounded-[20px] px-2 pb-2">
                                {/* Window dots */}
                                <div className="flex h-8 w-fit items-center justify-start gap-1.5 pl-2">
                                    <div className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
                                    <div className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
                                    <div className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
                                </div>
                                {/* Slide content */}
                                <div className="relative flex-1 overflow-hidden rounded-2xl bg-[var(--bg-primary)]">
                                    {products.map((product, i) => {
                                        const isActive = i === activeIndex;
                                        return (
                                            <div
                                                key={product.label}
                                                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
                                                    isActive
                                                        ? "scale-100 opacity-100 blur-0"
                                                        : "scale-[1.02] opacity-0 blur-md invisible"
                                                }`}
                                            >
                                                <div className="flex flex-col items-center gap-4">
                                                    <img src={product.icon} alt={product.label} className="w-16 h-16" loading="lazy" />
                                                    <span className="text-white font-aeonik-pro text-xl">{product.label}</span>
                                                    <div className="w-48 h-24 rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center">
                                                        <div className="text-white/20 text-xs font-mono">
                                                            {`import { ${product.label} } from 'clikkle'`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="col-span-3 mt-8 w-full md:mt-0">
                    <div className="flex gap-2 md:flex-col md:gap-8 lg:gap-12 font-medium text-white text-sm max-sm:justify-center">
                        {rightProducts.map((product, i) => {
                            const index = i + 3;
                            const isActive = index === activeIndex;
                            return (
                                <div key={product.label} className="group relative flex w-fit items-center md:w-full">
                                    {/* Connecting line (desktop) */}
                                    <div className={`absolute left-0 hidden md:block ${i === 0 ? "top-1/2" : i === 2 ? "bottom-1/2" : ""}`}>
                                        <svg width="98" height={i === 1 ? "2" : "75"} viewBox={i === 1 ? "0 0 98 2" : "0 0 98 75"} fill="none">
                                            {i === 1 ? (
                                                <path d="M0 1L98 1" stroke={isActive ? "white" : "rgba(255,255,255,0.08)"} strokeDasharray="4 4" className="transition-all" />
                                            ) : i === 0 ? (
                                                <path d="M98 1H62.64C56.01 1 50.64 6.37 50.64 13V62C50.64 68.63 45.27 74 38.64 74H0" stroke={isActive ? "white" : "rgba(255,255,255,0.08)"} strokeDasharray="4 4" className="transition-all" />
                                            ) : (
                                                <path d="M98 74H62.64C56.01 74 50.64 68.63 50.64 62V13C50.64 6.37 45.27 1 38.64 1H0" stroke={isActive ? "white" : "rgba(255,255,255,0.08)"} strokeDasharray="4 4" className="transition-all" />
                                            )}
                                        </svg>
                                    </div>
                                    <button
                                        className={`flex cursor-pointer items-center gap-2 rounded-xl border py-2 pr-4 pl-3 text-sm backdrop-blur-md transition-all hover:bg-white/8 md:ml-[100px] md:mr-auto ${
                                            isActive
                                                ? "bg-[#FE9567]/12 border-[#FE9567]/36 md:border-white/8 md:bg-white/[0.04]"
                                                : "bg-white/[0.04] border-white/8"
                                        }`}
                                        onMouseOver={() => handleSetActive(index)}
                                        onFocus={() => handleSetActive(index)}
                                        onMouseOut={handleMouseOut}
                                        onBlur={handleMouseOut}
                                    >
                                        <img src={product.icon} alt={product.label} className="w-4 h-4 md:w-6 md:h-6" loading="lazy" />
                                        <span className="hidden md:inline">{product.label}</span>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Text */}
            <div className="mx-auto flex flex-col gap-4 text-center mt-8">
                <h2 className="text-2xl lg:text-5xl text-white font-aeonik-pro">Integrate your backend</h2>
                <p className="text-white/50 text-lg font-medium mx-auto">
                    Easily integrate Clikkle&apos;s backend products with your site.<br />Zero configuration needed.
                </p>
            </div>
        </SiteStep>
    );
}
