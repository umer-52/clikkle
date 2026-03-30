'use client';

import Image from 'next/image';
import Link from 'next/link';

export function AuthHero() {
    return (
        <div className="border-smooth box-content flex items-center border-b bg-[url('/images/bgs/mobile-auth-hero.png')] bg-cover bg-bottom px-5 pt-20 pb-20 md:bg-[url('/images/bgs/auth-hero.png')] md:bg-center md:pt-32 md:pb-40 lg:px-8 xl:px-16">
            <div className="mx-auto grid max-w-[75rem] items-center gap-16 md:grid-cols-2">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <img src="/images/icons/auth.png" className="size-8" alt="" />
                        <span className="text-eyebrow text-primary uppercase">
                            Auth<span className="text-[#FD366E]">_</span>
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
                            className="aw-cta-button aw-focus-ring !w-full md:!w-fit justify-center"
                        >
                            Get started
                        </Link>
                        <Link
                            href="/docs"
                            className="button-secondary !w-full md:!w-fit justify-center"
                        >
                            Documentation
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Image
                        src="/images/products/auth/phone.png"
                        width={600}
                        height={600}
                        alt="Phone screen alongside of a users table and a code snippet that controls Clikkle's messaging."
                    />
                </div>
                <div className="block md:hidden">
                    <Image
                        src="/images/products/auth/phone-mobile.png"
                        width={300}
                        height={300}
                        alt="Phone screen alongside of a users table and a code snippet that controls Clikkle's messaging."
                    />
                </div>
            </div>
        </div>
    );
}
