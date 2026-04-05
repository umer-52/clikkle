'use client';

import Image from 'next/image';
import Link from 'next/link';

export function AuthHero() {
    return (
        <div className="border-smooth relative isolate box-content flex items-center overflow-hidden border-b px-5 pt-20 pb-20 lg:px-8 xl:px-16 md:pt-32 md:pb-40">
            <div
                className="pointer-events-none absolute inset-0 -z-20 bg-[url('/clikkle/images/bgs/mobile-auth-hero.png')] bg-cover bg-bottom md:bg-[url('/clikkle/images/bgs/auth-hero.png')] md:bg-center"
                aria-hidden
            />
            <div className="marketing-hero-lighting-layer" aria-hidden />
            <div className="relative z-10 mx-auto grid w-full max-w-[75rem] items-center gap-16 md:grid-cols-2">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <img src="/clikkle/images/icons/illustrated/dark/auth.png" className="size-8" alt="" />
                        <span className="text-eyebrow text-primary uppercase">
                            Auth<span className="text-accent">_</span>
                        </span>
                    </div>
                    <h1 className="text-display font-aeonik-pro text-primary max-sm:max-w-[300px] md:max-w-md">
                        Secure login for all users
                    </h1>
                    <p className="text-description text-secondary font-medium">
                        Authenticate users securely with multiple login methods like Email/Password, SMS,
                        OAuth, Anonymous, Magic URLs, and more.
                    </p>

                    <div className="flex flex-col items-center gap-2 md:flex-row">
                        <Link
                            href="https://cloud.clikkle.com/register"
                            className="web-btn web-btn-primary aw-focus-ring !w-full md:!w-fit justify-center"
                        >
                            Get started
                        </Link>
                        <Link
                            href="/docs/products/auth"
                            className="web-btn web-btn-secondary !w-full md:!w-fit justify-center"
                        >
                            Documentation
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Image
                        src="/clikkle/images/products/auth/phone.png"
                        width={600}
                        height={600}
                        alt="Phone screen alongside of a users table and a code snippet that controls Clikkle's messaging."
                    />
                </div>
                <div className="block md:hidden">
                    <Image
                        src="/clikkle/images/products/auth/phone-mobile.png"
                        width={300}
                        height={300}
                        alt="Phone screen alongside of a users table and a code snippet that controls Clikkle's messaging."
                    />
                </div>
            </div>
        </div>
    );
}
