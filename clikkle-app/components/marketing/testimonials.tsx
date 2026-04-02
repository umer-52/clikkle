'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Ryan O’Conner',
        copy: `The switch to using Clikkle brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
        image: '/clikkle/images/testimonials/ryan-oconner.png',
        title: 'Founder',
        company: 'K-Collect'
    },
    {
        name: 'David Forster',
        copy: `We really loved working with Clikkle for launching our bootstrapped "Open Mind" App. I am still surprised how easy the implementation into React Native was.`,
        image: '/clikkle/images/testimonials/david-forster.png',
        title: 'Founder',
        company: 'Open Mind'
    },
    {
        name: 'Marius Bolik',
        copy: `The integrated user authentication and the ease of creating data structures have undoubtedly saved us several weeks' worth of time.`,
        image: '/clikkle/images/testimonials/marius-bolik2.png',
        title: 'CTO',
        company: 'mySHOEFITTER'
    },
    {
        name: 'Sergio Ponguta',
        copy: `Just go for it, don’t think twice. Try Clikkle, and you will love it!`,
        image: '/clikkle/images/testimonials/smartbee.png',
        title: 'Founder',
        company: 'Smart Bee'
    },
    {
        name: 'Phil McClusky',
        copy: 'Just like a Swiss Army Knife, you can choose and use the tools that you need with Clikkle.',
        image: '/clikkle/images/testimonials/majik.png',
        title: 'Developer',
        company: 'Majik Kids'
    },
    {
        name: 'Zach Handley',
        copy: `We have somewhere between 200,000 to 600,000 function executions per day. It's especially nice that you guys have to deal with the scaling now and not me.`,
        image: '/clikkle/images/testimonials/zach-handley.jpg',
        title: 'CTO',
        company: 'Socialaize'
    }
];

interface Props {
    className?: string;
}

export function Testimonials({ className }: Props) {
    return (
        <div className={cn('relative w-full max-w-[100vw] overflow-hidden bg-[#EDEDF0] py-20', className)}>
            <div className="group flex w-fit flex-nowrap gap-8 overflow-hidden md:overflow-visible">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-8 animate-scroll hover:[animation-play-state:paused]"
                    >
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={`${i}-${idx}`}
                                className="flex h-fit w-[90vw] flex-col justify-center rounded-[2rem] bg-white p-8 transition-all md:w-[500px] border border-black/5 shadow-sm"
                                aria-hidden={i > 0}
                            >
                                <p className="text-base text-[#56565C] flex-1 font-medium leading-relaxed mb-6">
                                    "{testimonial.copy}"
                                </p>

                                <div className="mt-auto flex items-center gap-4">
                                    <img src={testimonial.image}
                                        className="w-14 h-14 rounded-full object-cover shadow-sm bg-gray-100"
                                        alt={`${testimonial.company} Logo`} loading="lazy" />
                                    <div className="flex flex-col">
                                        <span className="text-[#19191C] text-sm font-semibold">
                                            {testimonial.name}
                                        </span>
                                        {testimonial.title && (
                                            <span className="text-sm text-[#56565C] uppercase font-semibold font-aeonik-fono tracking-widest mt-1">
                                                {testimonial.title} // {testimonial.company}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
            `}</style>
        </div>
    );
}
