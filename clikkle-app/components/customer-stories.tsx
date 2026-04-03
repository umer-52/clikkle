"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const studies = [
    {
        id: "0",
        logo: '/clikkle/images/logos/devkind.svg',
        headline: 'DevKind reduced development time by 60% and lowered server costs by 40%',
        blurb: 'A special thanks to Clikkle for providing robust features and seamless functionality.',
        name: 'Hassan Ahmed',
        title: 'Engineer at DevKind',
        avatar: '/clikkle/images/testimonials/hassan.png',
        url: '/customers/customer-story-storealert'
    },
    {
        id: "1",
        logo: '/clikkle/images/logos/langx.svg',
        headline: 'LangX handled millions of requests using Clikkle',
        blurb: 'With its comprehensive suite of services, Clikkle emerged as an ideal choice for my needs.',
        name: 'Xue',
        title: 'Founder at LangX',
        avatar: '/clikkle/images/testimonials/xue.webp',
        url: '/customers/customer-stories-langx'
    },
    {
        id: "2",
        logo: '/clikkle/images/logos/k-collect.svg',
        headline: 'K-Collect reduced infrastructure costs by 700%',
        blurb: 'A major impact that Clikkle made was the amount of time and stress saved.',
        name: "Ryan O'Connor",
        title: 'Founder at K-Collect',
        avatar: '/clikkle/images/testimonials/ryan.png',
        url: '/customers/customer-stories-kcollect'
    }
];

export function CustomerStories() {
    const [activeId, setActiveId] = useState<string>("0");

    return (
        <div
            className={cn(
                'border-smooth relative mb-0 flex items-center justify-center overflow-hidden border-t py-20 md:pt-30 md:pb-40',
                'from-0% before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-[radial-gradient(circle_at_120%_-50%,rgba(168,85,247,0.3),transparent_40%)] before:blur-2xl',
                'after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_-15%_125%,rgba(45,99,255,0.2),transparent_40%)] after:blur-2xl'
            )}
        >
            <div className="container flex h-[800px] lg:h-auto lg:min-h-[467px] flex-col items-stretch gap-4 lg:flex-row">
                {studies.map((study) => {
                    const isActive = activeId === study.id;
                    return (
                        <div
                            key={study.id}
                            onClick={() => setActiveId(study.id)}
                            data-state={isActive ? "on" : "off"}
                            className={cn(
                                'relative grid w-full cursor-pointer overflow-hidden rounded-2xl border border-transparent backdrop-blur-3xl transition-all ease-in-out duration-300',
                                '[grid-template-areas:"stack"] md:max-h-[467px]',
                                'group/card hover:bg-white/5',
                                'outline-0 hover:shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] focus:shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)]',
                                'data-[state="off"]:basis-[15%] data-[state="off"]:bg-[var(--bg-primary)]/50 data-[state="off"]:p-8',
                                'data-[state="on"]:basis-[70%] data-[state="on"]:bg-[var(--bg-primary)]/80 data-[state="on"]:p-8 data-[state="on"]:shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] md:data-[state="on"]:p-12',
                                'min-h-[100px]'
                            )}
                        >
                            {/* Inactive State Logo (Centered) */}
                            <img loading="lazy"
                                src={study.logo}
                                alt={study.headline}
                                className={cn(
                                    'h-6 md:h-8 shrink-0 opacity-100 transition-all duration-300 [grid-area:stack] lg:h-10 object-contain',
                                    'self-center justify-self-center brightness-50',
                                    isActive ? 'invisible opacity-0' : ''
                                )} />

                            {/* Active State Content */}
                            <div
                                className={cn(
                                    'relative flex w-full flex-col space-y-4 overflow-hidden transition-opacity delay-200 [grid-area:stack]',
                                    isActive ? 'block opacity-100 blur-none' : 'hidden opacity-0'
                                )}
                            >
                                <img loading="lazy"
                                    src={study.logo}
                                    alt={study.headline}
                                    className={cn('-mt-4 h-8 md:h-10 w-fit object-contain object-left mb-4', {
                                        'animate-in fade-in duration-500': isActive
                                    })} />

                                <span
                                    className={cn(
                                        'font-aeonik-pro text-2xl md:text-4xl lg:text-[40px] leading-[1.1] font-medium tracking-tight text-white flex h-fit flex-wrap gap-2 overflow-hidden text-left text-pretty max-w-[600px]',
                                        {
                                            'animate-in fade-in duration-500': isActive
                                        }
                                    )}
                                >
                                    {study.headline}
                                </span>

                                <div
                                    className={cn('border-smooth mt-8 border-t border-white/10 border-dashed pt-8', {
                                        'animate-in fade-in duration-500 delay-300': isActive
                                    })}
                                >
                                    <div className="text-white/80 text-base md:text-lg text-left font-medium md:max-w-[60%]">
                                        "{study.blurb}"
                                    </div>

                                    <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row">
                                        <div className="flex items-center gap-3">
                                            <img loading="lazy"
                                                src={study.avatar}
                                                alt={study.name}
                                                className="size-8 rounded-full md:size-6 object-cover" />
                                            <span className="text-sm text-white text-left font-medium text-pretty">
                                                {study.name}<span className="hidden md:inline">,</span>{" "}
                                                <span className="text-white/50 block md:inline">{study.title}</span>
                                            </span>
                                        </div>

                                        <Link
                                            href={study.url}
                                            className="text-white text-sm font-medium group mt-4 flex items-center gap-2 text-right md:mt-0 hover:text-[#2D63FF] transition-colors"
                                        >
                                            Read customer story{" "}
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
