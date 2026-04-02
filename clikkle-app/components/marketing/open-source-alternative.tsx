'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Github, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const items = [
    {
        title: 'Community collaboration',
        copy: "Share knowledge and learn from others' experiences.",
        icon: '/clikkle/images/icons/gradients/collaboration.svg'
    },
    {
        title: 'Transparency and security',
        copy: 'The source code is openly accessible for anyone to inspect.',
        icon: '/clikkle/images/icons/gradients/transparency.svg'
    },
    {
        title: 'Customization and flexibility',
        copy: 'The freedom to customize and adapt products to your needs.',
        icon: '/clikkle/images/icons/gradients/customization.svg'
    }
];

interface Props {
    platforms?: string[];
    className?: string;
}

export function OpenSourceAlternative({ platforms = ['Auth0', 'Firebase', 'Supabase', 'NHost'], className }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activePlatformText, setActivePlatformText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const currentTarget = platforms[activeIndex];

        if (isTyping) {
            if (activePlatformText.length < currentTarget.length) {
                // Typing effect
                timeout = setTimeout(() => {
                    setActivePlatformText(currentTarget.slice(0, activePlatformText.length + 1));
                }, 100);
            } else {
                // Wait at the end of typing
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 3000);
            }
        } else {
            if (activePlatformText.length > 0) {
                // Deleting effect
                timeout = setTimeout(() => {
                    setActivePlatformText(activePlatformText.slice(0, -1));
                }, 50);
            } else {
                // Moving to next word
                setActiveIndex((prev) => (prev + 1) % platforms.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [activePlatformText, isTyping, activeIndex, platforms]);

    return (
        <div className={cn('bg-[#EDEDF0] pt-40 pb-40', className)}>
            <div className="container overflow-x-hidden max-md:px-5 relative">
                <div className="mx-auto mb-20 flex max-w-2xl flex-col items-center gap-4 text-center">
                    <h2 className="text-display text-[#19191C] font-aeonik-pro">
                        Open source <br className="hidden md:block" />
                        alternative to
                        <br className="block md:hidden" />
                        <div className="relative inline-flex bg-[linear-gradient(-146deg,_#FD376F,_#19191D_47%,_#19191D)] bg-clip-text pb-2 text-transparent ml-2">
                            {activePlatformText}
                            <div className="animate-blink -right-2 bottom-0 mt-1 ml-2 block h-[60px] md:h-[70px] w-[3px] bg-[#FD376F] absolute" />
                        </div>
                    </h2>
                    <p className="md:text-[20px] text-base leading-relaxed text-[#56565C] font-medium max-w-xl mx-auto">
                        Clikkle is a 100% open source project, giving you the flexibility and support you
                        need to get your project started.
                    </p>
                    
                    <div className="mx-auto mt-6 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                        <Link
                            href="https://github.com/clikkle"
                            className="inline-flex w-full md:w-fit items-center justify-center gap-2 rounded-lg border border-[#19191C]/10 bg-white px-6 py-3 font-semibold text-[#19191C] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.06)] transition-colors hover:bg-black/5"
                        >
                            <Github className="w-5 h-5" />
                            Star on GitHub
                        </Link>
                        <Link
                            href="https://discord.gg/clikkle"
                            className="inline-flex w-full md:w-fit items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-6 py-3 font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_12px_rgba(88,101,242,0.35)] transition-colors hover:bg-[#5865F2]/90"
                        >
                            <MessageSquare className="w-5 h-5 fill-white" />
                            Join Discord
                        </Link>
                    </div>
                </div>

                <div className="grid w-full grid-cols-1 divide-y divide-black/10 divide-dashed md:grid-cols-3 md:place-items-center md:divide-y-0">
                    {items.map((item, i) => (
                        <div key={i} className="py-10 text-center font-medium last-of-type:border-0 md:border-r border-black/10 md:px-10 md:py-0 w-full flex-1">
                            {/* Will fallback if image doesn't exist, we will copy it in a moment */}
                            <img src={item.icon} alt={item.title} className="mx-auto w-12 h-12 mb-4" loading="lazy" />
                            <h3 className="text-base text-[#19191C] mt-4 font-semibold">{item.title}</h3>
                            <p className="text-sm text-[#56565C] mt-2 font-normal max-w-[250px] mx-auto">{item.copy}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* simple blink animation for the cursor */}
            <style jsx>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s step-end infinite;
                }
            `}</style>
        </div>
    );
}
