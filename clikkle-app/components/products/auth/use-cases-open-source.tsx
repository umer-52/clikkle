'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { withBasePath } from "@/lib/basepath";
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

/** `UseCases.svelte` — SDK + migration columns */
export function AuthSdkMigration() {
    return (
        <section className="border-smooth border-t border-black/8 py-20">
            <div className="container grid items-stretch gap-y-8 divide-[#19191C]/14 [grid-gap:initial] md:divide-x lg:grid-cols-2">
                <div className="relative mx-auto mb-20 flex flex-col items-center justify-center gap-y-6 text-center md:px-20">
                    <div className="flex items-center gap-2">
                        {platforms.map((platform) => {
                            const boxSize = (platform.size / 6) * 10;
                            return (
                                <div
                                    key={platform.name}
                                    className="flex items-center justify-center rounded-lg bg-white shadow-[0px_5.35px_10.7px_rgba(0,0,0,0.02)] backdrop-blur-[16.7px]"
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
                    <h2 className="text-title font-aeonik-pro text-primary">
                        Integrate with easy-to-use APIs and SDKs
                    </h2>
                    <p className="text-main-body font-medium text-secondary">
                        Integrate Auth seamlessly into your projects with your favorite technology.
                    </p>
                    <Link href="/docs/sdks" className="web-btn web-btn-secondary-light mt-2 !w-full md:!w-fit">
                        Learn more
                    </Link>
                </div>

                <div className="mx-auto mb-20 flex flex-col items-center justify-center gap-y-6 text-center md:px-20">
                    <div className="relative flex items-center gap-2">
                        {migrations.map((migration) => (
                            <div
                                key={migration.name}
                                className="z-10 flex size-10 items-center justify-center rounded-lg bg-white shadow-[0px_5.35px_10.7px_rgba(0,0,0,0.02)]"
                            >
                                <Image
                                    src={`/clikkle/images/products/auth/platforms/${migration.file}`}
                                    alt={migration.name}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        ))}

                        <div className="-mr-2 z-0 h-px w-24 flex-1 bg-gradient-to-r from-black/10 to-[#2D63FF]" />

                        <div className="z-10 flex size-14 items-center justify-center rounded-lg border border-[#2D63FF] bg-white shadow-[0px_0px_8px_rgba(45,99,255,0.24),0px_5.35px_10.7px_rgba(0,0,0,0.02)]">
                            <Image
                                src={withBasePath("/2-version/Clikkle core (V1 White Text).png")}
                                alt="Clikkle"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                    <h2 className="text-title font-aeonik-pro text-primary">
                        Migrate your users to Clikkle effortlessly
                    </h2>
                    <p className="text-main-body font-medium text-secondary">
                        Use Clikkle&apos;s migration process to transfer your existing users with a few clicks.
                    </p>
                    <Link href="/docs" className="web-btn web-btn-secondary-light mt-2 !w-full md:!w-fit">
                        Learn more
                    </Link>
                </div>
            </div>
        </section>
    );
}

/** `OpenSource.svelte` — typewriter headline + three pillars */
export function AuthOpenSourceSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % alternativePlatforms.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="border-smooth border-t border-black/8 pt-32 pb-40">
            <div className="container overflow-x-hidden">
                <div className="mx-auto mb-20 flex max-w-2xl flex-col items-center gap-y-4 text-center">
                    <h2 className="text-title font-aeonik-pro leading-tight text-primary md:text-display">
                        Open source <br className="hidden md:block" />
                        alternative to{' '}
                        <span className="relative inline-flex text-[#2D63FF]">
                            {alternativePlatforms[activeIndex]}
                            <span
                                className="animate-caret-blink absolute top-1/2 -right-2 block h-[75%] w-px -translate-y-1/2 bg-[#2D63FF]"
                                aria-hidden
                            />
                        </span>
                    </h2>
                    <p className="text-main-body mt-4 font-medium text-secondary md:text-description">
                        Clikkle is a 100% open source project, giving you the flexibility and support you need to
                        get your project started.
                    </p>
                    <div className="mx-auto mt-2 flex w-full flex-col items-center justify-center gap-2 md:flex-row">
                        <a
                            href="https://github.com/clikkle"
                            className="web-btn web-btn-secondary-light h-10 !w-full md:!w-fit"
                        >
                            <Github className="web-btn-icon" aria-hidden /> Star on GitHub
                        </a>
                        <a
                            href="https://discord.gg/clikkle"
                            className="web-btn web-btn-secondary-light h-10 !w-full md:!w-fit"
                            style={{ borderColor: '#5865F2' }}
                        >
                            <MessageSquare className="web-btn-icon" aria-hidden /> Join Discord
                        </a>
                    </div>
                </div>

                <div className="mx-auto grid place-items-center gap-8 md:grid-cols-3">
                    {openSourceItems.map((item) => (
                        <div key={item.title} className="max-w-[275px] text-center">
                            <Image
                                src={item.icon}
                                alt=""
                                width={64}
                                height={64}
                                className="mx-auto"
                            />
                            <h3 className="text-sub-body mt-4 font-medium text-primary">{item.title}</h3>
                            <p className="text-sub-body mt-2 font-normal text-secondary">{item.copy}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/** @deprecated Prefer `AuthSdkMigration` + `AuthOpenSourceSection` + `Testimonials` on the page */
export function UseCasesOpenSource() {
    return (
        <>
            <AuthSdkMigration />
            <AuthOpenSourceSection />
        </>
    );
}
