'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

const platforms = [
    { label: 'Email and Password', docs: '/docs/products/auth/email-password' },
    { label: 'Phone (SMS)', docs: '/docs/products/auth/phone-sms' },
    { label: 'Magic URL', docs: '/docs/products/auth/magic-url' },
    { label: 'Email OTP', docs: '/docs/products/auth/email-otp' },
    { label: 'OAuth2', docs: '/docs/products/auth/oauth2' },
    { label: 'JWT', docs: '/docs/products/auth/jwt' },
    { label: 'SSR', docs: '/docs/products/auth/server-side-rendering' },
    { label: 'Custom token', docs: '/docs/products/auth/tokens' },
    { label: 'Anonymous login', docs: '/docs/products/auth/anonymous' },
    { label: 'Multi-factor authentication', docs: '/docs/products/auth/mfa' }
];

function EmailCard() {
    const emails = [
        {
            title: 'Thank you for registering.',
            copy: 'Before we get started, confirm your identity by clicking the link below...',
            open: false
        },
        {
            title: 'You have been invited',
            copy: 'Create a user in Acme corp. You can accept or decline this invitation...',
            open: true
        }
    ];

    return (
        <div className="z-10 flex max-w-sm scale-95 flex-col gap-4 rounded-lg md:rounded-2xl border border-white/10 bg-white/5 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[32px] p-px">
            <div className="flex flex-col gap-1 rounded-lg md:rounded-2xl bg-[var(--bg-primary)]/80 divide-y divide-white/5">
                {emails.map((email, i) => (
                    <div key={i} className="flex items-center gap-3 p-3">
                        {email.open ? (
                            <div className="border-[#656569] bg-white/5 flex size-6 shrink-0 items-center justify-center rounded-[6px] border">
                                <Image src="/clikkle/images/products/auth/envelope-open.svg" width={16} height={16} alt="Open envelope" />
                            </div>
                        ) : (
                            <div className="border-[#2D63FF] bg-[#2D63FF]/10 flex size-6 shrink-0 items-center justify-center rounded-[6px] border">
                                <Image src="/clikkle/images/products/auth/envelope-closed.svg" width={16} height={16} alt="Closed envelope" />
                            </div>
                        )}
                        <div className="text-eyebrow tracking-tight">
                            <span className="text-primary font-medium">{email.title} </span>
                            <span className="text-secondary font-normal">{email.copy}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PhoneCard() {
    return (
        <div className="relative mx-auto h-[600px] w-[320px] shrink-0 rounded-[2.75rem] bg-white/10 p-2 border border-white/20">
            <div className="relative h-full w-full rounded-[2.25rem] bg-white p-5 shadow-2xl">
                <div className="py-12 text-[#434347] text-left">
                    <div className="mx-auto max-w-[16rem] space-y-2 text-center">
                        <p className="text-label font-aeonik-pro text-[#19191C]">Sign up</p>
                        <p className="text-sub-body text-[#656569]">
                            Please enter your details to create an account
                        </p>
                    </div>

                    <div className="mt-8 mb-5 flex items-center gap-2">
                        <button className="text-eyebrow flex flex-1 items-center justify-center gap-1 rounded-md border border-[#E2E8F0] py-1 font-medium tracking-tight text-[#0F172A]">
                            Google
                        </button>
                        <button className="text-eyebrow flex flex-1 items-center justify-center gap-1 rounded-md border border-[#E2E8F0] py-1 font-medium tracking-tight text-[#0F172A]">
                            GitHub
                        </button>
                    </div>

                    <div className="flex items-center justify-between gap-4 text-[0.75rem] text-[#656569] my-3 before:h-px before:flex-grow before:bg-[#E2E8F0] after:h-px after:flex-grow after:bg-[#E2E8F0]">
                        or
                    </div>

                    <div className="mt-2 flex flex-col gap-3">
                        <input
                            disabled
                            type="email"
                            placeholder="Email address"
                            className="text-eyebrow flex h-7 rounded-lg border border-[#d8d8db] px-3 py-2 -tracking-tight bg-transparent"
                        />
                        <input
                            disabled
                            type="password"
                            placeholder="Password"
                            className="text-eyebrow flex h-7 rounded-lg border border-[#d8d8db] px-3 py-2 -tracking-tight bg-transparent"
                        />
                    </div>
                    <button className="text-eyebrow mt-3 flex h-7 w-full items-center justify-center rounded-lg bg-[#0F172A] font-medium -tracking-tight text-white">
                        Sign up
                    </button>
                </div>
                
                {/* Home bar indicator */}
                <div className="absolute bottom-2 left-1/2 w-[6.25rem] h-1 -translate-x-1/2 rounded-full bg-black"></div>
            </div>
        </div>
    );
}

function VerificationCodeCard() {
    return (
        <div className="max-w-xs text-secondary">
            <span className="text-[0.6875rem]">Wed, May 1</span>
            <div className="flex items-end justify-center gap-2 p-4 text-center backdrop-blur-[32px] rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border border-white/10 bg-white/5 bg-gradient-to-br from-white/10 to-transparent">
                <span className="text-caption leading-normal -tracking-tight text-white">
                    Verification code for login is 003485
                </span>
                <span className="text-[0.6875rem] leading-normal">10:32</span>
            </div>
        </div>
    );
}

function MultiFactorCard() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl px-4 py-6 text-center backdrop-blur-[32px] md:max-w-xs md:rounded-2xl md:p-8 border border-white/10 bg-white/5 bg-gradient-to-br from-white/10 to-transparent">
            <div className="space-y-1">
                <h3 className="text-description text-primary">Verify your identity</h3>
                <p className="text-eyebrow text-secondary -tracking-tight">
                    Enter the verification code<br /> sent to your inbox.
                </p>
            </div>
            <div className="flex gap-1">
                {[1, 4, 8, 2, 9, 3].map((number, i) => (
                    <div
                        key={i}
                        className={cn(
                            'text-primary bg-[var(--bg-primary)] pointer-events-none relative flex size-10 items-center justify-center space-x-4 rounded-lg border border-white/10 text-center text-lg shadow-lg shadow-black/5 transition-all duration-500 outline-none',
                            {
                                'border-[#2D63FF] shadow-[#2D63FF]/10 shadow-md': i === 3
                            }
                        )}
                    >
                        <span>{number}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function IdentityCard() {
    return (
        <div className="right-0 flex w-[120px] flex-col gap-4">
            <div className="relative z-20 flex size-20 items-center justify-center overflow-hidden rounded-2xl backdrop-blur-2xl border border-white/10 bg-white/5">
                <Image src="/clikkle/images/products/auth/identity-bg.png" fill className="absolute inset-0 object-cover opacity-50" alt="" />
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="shadow-4xl absolute opacity-80 shadow-black z-10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 42.8418C16.5 40.1751 10.5 32.3418 16.4996 23.8424C18.4988 21.3418 24.9988 18.5424 30.9988 23.3424C32 24.1433 34 26.7418 34 30.3418" stroke="#E4E4E7" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 8.84189C16.1667 6.67523 26.9 3.64189 36.5 8.84189" stroke="#E4E4E7" strokeWidth="2" strokeLinecap="round" />
                    <path d="M6.5 20.3418C8 17.1751 12.5 10.3409 24 10.3418C35.2071 10.3427 40.6667 16.8418 41.5 20.3418" stroke="#E4E4E7" strokeWidth="2" strokeLinecap="round" />
                    <path d="M29.9964 43.3418C26.663 42.5085 20.9964 39.3418 19.4967 34.8424C17.5734 29.0717 20.4967 25.3424 24.4967 25.3424C27.6967 25.3424 29.1628 29.3424 29.4958 31.3424C30.1625 33.3424 32.4958 36.7424 36.4958 34.3424C40.4958 31.9424 38.4964 24.8418 36.4958 21.8424C33.9958 18.6757 26.8958 13.2424 18.4958 16.8424C7.99582 21.3424 9 34.8418 10.5 37.3418" stroke="#E4E4E7" strokeWidth="2" strokeLinecap="round" />
                    <path d="M24 29.3418C24.1667 33.3418 26.9 40.4418 36.5 38.8418" stroke="#E4E4E7" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            <div className="z-0 flex size-12 items-center justify-center self-end overflow-hidden rounded-2xl backdrop-blur-[32px] border border-white/10 bg-white/5">
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.2102 5.4937L25.6836 14.6599C25.7443 14.885 25.8819 15.0818 26.0724 15.2163L28.7408 17.0999C29.4619 17.609 29.21 18.6777 28.3313 18.7618C24.4318 19.1353 18.2509 19.322 15.9998 19.322C13.7488 19.322 7.56778 19.1353 3.66832 18.7618C2.78965 18.6777 2.53769 17.609 3.25883 17.0999L5.92726 15.2163C6.11777 15.0818 6.25529 14.885 6.31604 14.6599L8.78945 5.4937C8.91923 5.01278 9.38316 4.70069 9.87752 4.76176L15.8772 5.5029C15.9586 5.51296 16.041 5.51296 16.1224 5.5029L22.1221 4.76176C22.6165 4.70069 23.0804 5.01278 23.2102 5.4937ZM9.99956 28.6553C12.2087 28.6553 13.9996 26.8644 13.9996 24.6553H17.9996C17.9996 26.8644 19.7904 28.6553 21.9996 28.6553C24.2087 28.6553 25.9996 26.8644 25.9996 24.6553C25.9996 22.4462 24.2087 20.6553 21.9996 20.6553C20.2447 20.6553 18.7538 21.7854 18.2148 23.3575C18.1473 23.3345 18.0749 23.322 17.9996 23.322H13.9996C13.9242 23.322 13.8518 23.3345 13.7843 23.3575C13.2453 21.7854 11.7544 20.6553 9.99956 20.6553C7.79042 20.6553 5.99956 22.4462 5.99956 24.6553C5.99956 26.8644 7.79042 28.6553 9.99956 28.6553Z" fill="#E4E4E7" />
                </svg>
            </div>
        </div>
    );
}

export function CustomerIdentity() {
    return (
        <div className="relative pt-40 pb-32 md:container">
            <div
                className={cn(
                    'relative mx-auto max-h-[50vh] lg:max-w-[85vw] xl:max-w-[75vw]',
                    'before:to-[var(--bg-primary)] before:absolute before:right-0 before:bottom-0 before:left-0 before:z-0 before:h-[350px] before:bg-gradient-to-b before:from-transparent',
                    'after:to-[var(--bg-primary)] after:absolute after:right-0 after:bottom-0 after:left-0 after:z-0 after:h-[350px] after:bg-gradient-to-b after:from-transparent'
                )}
            >
                <div className="max-h-[40vh] scale-90 md:max-h-[50vh] md:scale-100 relative w-full flex justify-center overflow-hidden">
                    <PhoneCard />
                </div>
                <div className="absolute -top-14 -left-4 scale-75 md:left-10 md:scale-100 lg:left-44 hidden lg:block">
                    <VerificationCodeCard />
                </div>
                <div className="absolute -right-52 bottom-12 md:top-10 md:-right-36 lg:-right-10 hidden lg:block">
                    <EmailCard />
                </div>
                <div className="absolute -bottom-20 -left-16 z-10 scale-90 md:-bottom-6 lg:left-4 md:scale-100 hidden lg:block">
                    <MultiFactorCard />
                </div>
                <div className="absolute -right-8 bottom-48 scale-75 md:right-36 md:bottom-14 md:scale-100 lg:right-[15rem] hidden lg:block">
                    <IdentityCard />
                </div>
            </div>

            <div className="mt-32 flex flex-col gap-y-4 p-4 md:mt-16 md:p-0 md:text-center">
                <div className="mx-auto max-w-xl space-y-4">
                    <h2 className="md:text-display text-title text-primary font-aeonik-pro">
                        Customer identity
                    </h2>
                    <p className="text-main-body md:text-description font-medium md:font-normal text-secondary">
                        Create a seamless experience for your users by providing various authentication
                        methods for them to identify and login.
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-md md:max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 md:justify-center">
                        {platforms.map(({ label, docs }) => (
                            <a
                                key={label}
                                target="_blank"
                                href={docs}
                                className="text-caption text-primary flex h-[28px] items-center justify-center rounded-full bg-white/5 border border-white/5 px-3 transition-colors hover:bg-white/10 hover:border-white/10"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
