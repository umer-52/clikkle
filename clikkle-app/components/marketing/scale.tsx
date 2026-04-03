'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import NumberFlow from '@number-flow/react';
import { useInView, motion } from 'framer-motion';

type Stat = {
    number: number;
    suffix: string;
    description: string;
};

interface ScaleProps {
    theme?: 'light' | 'dark';
    testimonial?: {
        name: string;
        title: string;
        image: string;
        company: string;
    };
    children: React.ReactNode;
    stats?: Array<Stat>;
}

export function Scale({
    theme = 'light',
    testimonial,
    children,
    stats = [
        { number: 50, suffix: 'K+', description: 'GitHub stars' },
        { number: 300, suffix: '+', description: 'PoP locations' },
        { number: 300, suffix: 'K+', description: 'developers' },
        { number: 20, suffix: 'B+', description: 'monthly database operations' }
    ]
}: ScaleProps) {
    const defaultStats = stats.map((stat) => ({ ...stat, value: 0 }));
    const [localStats, setLocalStats] = useState(defaultStats);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const isVisible = useInView(containerRef, { once: true, amount: 0.5 });
    const animationDuration = 3; 

    useEffect(() => {
        if (!isVisible) return;

        const timeoutIds: NodeJS.Timeout[] = [];

        stats.forEach((stat, index) => {
            const timeoutId = setTimeout(
                () => {
                    setLocalStats((prev) => {
                        const newStats = [...prev];
                        newStats[index].value = stat.number;
                        return newStats;
                    });
                },
                ((index * animationDuration) / stats.length) * 600
            );
            timeoutIds.push(timeoutId);
        });

        return () => {
            timeoutIds.forEach(clearTimeout);
        };
    }, [isVisible, stats]);

    return (
        <div
            ref={containerRef}
            className={cn(
                'relative -mb-8 flex min-h-[700px] flex-col gap-4 pt-12 pb-20 md:pt-30 md:pb-0 overflow-hidden',
                theme === 'light' ? 'bg-[#EDEDF0]' : 'bg-[var(--bg-primary)]'
            )}
        >
            <div className="relative z-[100] container w-fit md:w-full mx-auto px-4">
                <div className="relative z-[100] md:max-w-xl">
                    <h2 className={cn("font-aeonik-pro text-[48px] leading-[1.1] tracking-[-0.02em] text-pretty", theme === 'light' ? "text-[#19191C]" : "text-white")}>
                        Thousands of developers <span className="text-[#56565C]">scale with Clikkle</span>
                        <span className="text-[#FE9567]">_</span>
                    </h2>
                    
                    <p className="text-[#56565C] border-[#FE9567] mt-8 border-l-2 pl-4 md:text-[20px] font-medium md:pr-28">
                        <span className="text-[#FE9567]">“</span>
                        {children}
                        <span className="text-[#FE9567]">”</span>
                    </p>

                    {testimonial && (
                        <div className="mt-6 ml-4 flex items-center gap-3">
                            <img loading="lazy"
                                src={testimonial.image}
                                className="w-10 h-10 rounded-full shadow-sm bg-gray-100 object-cover"
                                alt={`${testimonial.company} Logo`} />
                            <div className="flex flex-col">
                                <span className={cn("text-base font-semibold", theme === 'light' ? "text-[#19191C]" : "text-white")}>
                                    {testimonial.name}
                                </span>
                                <span className="text-sm text-[#56565C] font-semibold font-aeonik-fono tracking-widest uppercase">
                                    {testimonial.title} at {testimonial.company}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Stats */}
            <div className="z-0 mt-12 block space-y-8 md:hidden px-4">
                {localStats.map((stat, i) => (
                    <div key={i} className="h-full pl-6">
                        <div className="relative">
                            <div className={cn("text-3xl border-[#FE9567] relative -left-px z-10 border-l pl-4 font-semibold flex items-center", theme === 'light' ? "text-[#19191C]" : "text-white")}>
                                <NumberFlow value={stat.value} />
                                <span>{stat.suffix}</span>
                            </div>
                            <span className="text-base text-[#56565C] font-medium block pl-4 mt-2">
                                {stat.description}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Stats */}
            <div
                className={cn(
                    'absolute inset-0 mt-32 hidden md:block transition-opacity duration-1000',
                    isVisible ? 'opacity-100' : 'opacity-0'
                )}
            >
                <div className="relative container mx-auto h-full px-4">
                    <div className="absolute inset-0 z-10 grid grid-cols-4 pt-20">
                        {localStats.map((stat, i) => (
                            <div
                                key={i}
                                className={cn(
                                    'relative h-full border-l border-dashed',
                                    theme === 'dark' ? 'border-[#27272A]' : 'border-black/10'
                                )}
                            >
                                <div
                                    className="absolute"
                                    style={{ bottom: `calc(50px + ${25 + (75 / 3) * (i / 2)}%)` }}
                                >
                                    <div className={cn("text-[60px] leading-none border-[#FE9567] relative -left-px z-[100] border-l-[3px] pl-6 font-aeonik-pro", theme === 'light' ? "text-[#19191C]" : "text-white")}>
                                        <div className="flex items-center">
                                            <NumberFlow value={stat.value} />
                                            <span>{stat.suffix}</span>
                                        </div>
                                    </div>
                                    <span className="text-xl text-[#56565C] font-semibold block pl-6 mt-4 max-w-[200px] leading-tight">
                                        {stat.description}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="from-[#FE9567]/10 absolute inset-0 bg-gradient-to-tr to-transparent [clip-path:polygon(0_100%,_100%_25%,_100%_100%,_0_100%)] pointer-events-none"></div>
                
                {/* Visual angular line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                     <line x1="100" y1="25" x2="0" y2="100" stroke="#FE9567" strokeWidth="0.2" vectorEffect="non-scaling-stroke" className="opacity-80"/>
                </svg>
            </div>
        </div>
    );
}
