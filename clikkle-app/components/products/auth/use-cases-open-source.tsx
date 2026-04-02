'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Github, MessageSquare } from 'lucide-react';

const platforms = [
    { name: 'Android', file: 'android.svg', size: 24 },
    { name: 'Apple', file: 'apple.svg', size: 28 },
    { name: 'JavaScript', file: 'javascript.svg', size: 32 },
    { name: 'Flutter', file: 'flutter.svg', size: 28 },
    { name: 'React', file: 'react.svg', size: 24 }
];

const migrations = [
    { name: 'NHost', file: 'nhost.svg' },
    { name: 'Supabase', file: 'supabase.svg' },
    { name: 'Firebase', file: 'firebase.svg' }
];

const openSourceItems = [
    {
        title: 'Community collaboration',
        copy: "Share knowledge and learn from others' experiences.",
        icon: '/clikkle/images/products/auth/collaboration.svg'
    },
    {
        title: 'Transparency and security',
        copy: 'The source code is openly accessible for anyone to inspect.',
        icon: '/clikkle/images/products/auth/transparency.svg'
    },
    {
        title: 'Customization and flexibility',
        copy: 'The freedom to personalize and adapt products to your needs.',
        icon: '/clikkle/images/products/auth/customization.svg'
    }
];

const alternativePlatforms = ['Auth0', 'Firebase', 'Supabase', 'NHost'];

export function UseCasesOpenSource() {
    const [activeIndex, setActiveIndex] = useState(0);

    /* Very simplified rotate strings for typewriter effect without complex libs */
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % alternativePlatforms.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="bg-[#f9fafb] py-20 border-t border-black/10 text-[#19191C]">
                <div className="container grid items-stretch gap-y-8 divide-white/10 [grid-gap:initial] md:divide-x lg:grid-cols-2">
                    
                    {/* Left: Integrations */}
                    <div className="relative mx-auto mb-20 flex flex-col items-center justify-center gap-y-6 text-center md:px-20">
                        <div className="flex items-center gap-2">
                            {platforms.map((platform) => {
                                const boxSize = (platform.size / 6) * 10;
                                return (
                                    <div
                                        key={platform.name}
                                        className="flex items-center justify-center rounded-lg bg-black/5 border border-black/10"
                                        style={{ height: `${boxSize}px`, width: `${boxSize}px` }}
                                    >
                                        <Image
                                            src={`/clikkle/images/products/auth/platforms/${platform.file}`}
                                            height={platform.size}
                                            width={platform.size}
                                            alt={platform.name}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <h2 className="text-title text-primary font-aeonik-pro text-[#19191C]">
                            Integrate with easy-to-use APIs and SDKs
                        </h2>
                        <p className="text-main-body text-secondary font-medium text-[#434347]">
                            Integrate Auth seamlessly into your projects with your favorite technology.
                        </p>
                        <Link
                            href="/docs"
                            className="web-btn web-btn-outline mt-2 !w-full md:!w-fit"
                        >
                            Learn more
                        </Link>
                    </div>

                    {/* Right: Migrations */}
                    <div className="mx-auto mb-20 flex flex-col items-center justify-center gap-y-6 text-center md:px-20">
                        <div className="flex items-center gap-2 relative">
                            {migrations.map((migration) => (
                                <div key={migration.name} className="flex size-10 items-center justify-center rounded-lg bg-black/5 border border-black/10 z-10">
                                    <Image
                                        src={`/clikkle/images/products/auth/platforms/${migration.file}`}
                                        alt={migration.name}
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            ))}

                            <div className="-mr-2 h-px w-24 flex-1 bg-gradient-to-r from-black/10 to-[#2D63FF] z-0"></div>

                            <div className="flex size-14 items-center justify-center rounded-lg border border-[#2D63FF] bg-white shadow-[0px_0px_8px_rgba(253,_54,_110,_0.24)] z-10 backdrop-blur-md">
                                <Image
                                    src="/clikkle/images/logos/logo.svg"
                                    alt="Clikkle Logo"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                        <h2 className="text-title text-primary font-aeonik-pro text-[#19191C]">
                            Migrate your users to Clikkle effortlessly
                        </h2>
                        <p className="text-main-body text-secondary font-medium text-[#434347]">
                            Use Clikkle's migration process to transfer your existing users with a few clicks.
                        </p>
                        <Link
                            href="/docs"
                            className="web-btn web-btn-outline mt-2 !w-full md:!w-fit"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </section>

            {/* Open Source portion */}
            <section className="bg-[#f9fafb] pt-32 pb-40 border-t border-black/10 text-[#19191C]">
                <div className="container overflow-x-hidden">
                    <div className="mx-auto mb-20 flex max-w-2xl flex-col items-center gap-y-4 text-center">
                        <h2 className="md:text-display text-title text-primary font-aeonik-pro text-[#19191C] leading-tight">
                            Open source <br className="hidden md:block" />alternative to{' '}
                            <div className="relative inline-flex bg-[linear-gradient(-146deg,_#FD376F,_#19191D_47%,_#19191D)] bg-clip-text text-transparent border-b border-dashed border-[#2D63FF]">
                                <span className="text-[#2D63FF] relative">
                                    {alternativePlatforms[activeIndex]}
                                    <div className="animate-caret-blink absolute top-1/2 -right-3 bottom-0 block h-[75%] w-px -translate-y-1/2 bg-[#2D63FF]"></div>
                                </span>
                            </div>
                        </h2>
                        <p className="md:text-description text-main-body text-secondary font-medium text-[#434347] mt-4">
                            Clikkle is a 100% open source project, giving you the flexibility and support you
                            need to get your project started.
                        </p>
                        <div className="mx-auto mt-4 flex w-full flex-col items-center justify-center gap-2 md:flex-row">
                            <a href="https://github.com/clikkle" className="web-btn web-btn-outline !w-full md:!w-fit">
                                <Github className="web-btn-icon" aria-hidden /> Star on GitHub
                            </a>
                            <a href="https://discord.gg/clikkle" className="web-btn web-btn-primary !w-full md:!w-fit border-[#5865F2] !bg-[#5865F2] hover:!brightness-110" style={{ borderColor: '#5865F2' }}>
                                <MessageSquare className="web-btn-icon" aria-hidden /> Join Discord
                            </a>
                        </div>
                    </div>

                    <div className="mx-auto grid place-items-center gap-8 md:grid-cols-3">
                        {openSourceItems.map((item, idx) => (
                            <div key={idx} className="max-w-[275px] text-center border-t border-black/10 pt-8" style={{ borderTop: `1px solid rgba(0, 0, 0, ${1 - idx * 0.3})` }}>
                                <Image src={item.icon} alt={item.title} width={64} height={64} className="mx-auto opacity-80" style={{ filter: 'invert(1)' }} />
                                <h3 className="text-sub-body text-primary mt-6 font-medium text-[#19191C]">{item.title}</h3>
                                <p className="text-sub-body text-secondary mt-2 font-normal text-[#434347]">{item.copy}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
