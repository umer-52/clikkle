'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import { withBasePath } from '@/lib/basepath';
import { SiteFooter } from '@/components/site-footer';
import { DOCS_SOCIALS } from '@/lib/docs-socials';
import { Github, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import './partners.css';

const asset = (path: string) => withBasePath(path);

/** Mirrors `getReferrerAndUtmSource` from Svelte `$lib/utils/utm` (minimal). */
function getReferrerAndUtmSource(): Record<string, string | undefined> {
    if (typeof window === 'undefined') return {};
    const p = new URLSearchParams(window.location.search);
    return {
        referrer: document.referrer || undefined,
        utm_source: p.get('utm_source') || undefined,
        utm_medium: p.get('utm_medium') || undefined,
        utm_campaign: p.get('utm_campaign') || undefined,
    };
}

const BENEFIT_ITEMS = [
    {
        title: 'Co-marketing',
        description:
            'We will have a dedicated partner catalog, an official partner badge, and other visibility opportunities.',
        icon: asset('/images/partners/icons/co-marketing.svg'),
    },
    {
        title: 'Training',
        description: 'We provide in-depth training and workshops to help you master Clikkle for your clients.',
        icon: asset('/images/partners/icons/training.svg'),
    },
    {
        title: 'Support',
        description: 'You will get access to the Clikkle engineering team to get the support you need.',
        icon: asset('/images/partners/icons/support.svg'),
    },
    {
        title: 'Early access',
        description:
            'You will get early access to new features and products and the ability to influence our roadmap.',
        icon: asset('/images/partners/icons/early-access.svg'),
    },
    {
        title: 'Innovation',
        description: "Empower your team and elevate your customers' experiences with the newest technology.",
        icon: asset('/images/partners/icons/revenue.svg'),
    },
    {
        title: 'Discounts',
        description: 'Volume discounts are available in case you handle the bill for your clients.',
        icon: asset('/images/partners/icons/discounts.svg'),
    },
] as const;

const WHY_PLATFORM_ITEMS = [
    {
        title: 'Developer experience',
        description:
            'Clikkle is built for and by developers, with a strong focus on your experience. Never worry about scaling or security again.',
        icon: asset('/images/partners/icons/experience.svg'),
    },
    {
        title: 'Ship faster',
        description: 'Clikkle reduces the time and resources spent building a backend infrastructure from scratch.',
        icon: asset('/images/partners/icons/ship.svg'),
    },
    {
        title: 'All in one platform',
        description: 'Everything you need to develop, deploy, and scale your applications.',
        icon: asset('/images/partners/icons/expert.svg'),
    },
] as const;

const WAYS_ITEMS = [
    {
        title: 'Experts',
        description:
            'For agencies, consultancies, freelancers, and integrators who want to provide a scalable backend solution for their clients. Partner with Clikkle to provide a highly custom solution with the newest technology.',
        href: '/partners/catalog',
        label: 'Find a Partner',
    },
    {
        title: 'Integrations',
        description:
            'For innovative software companies striving to create solutions that integrate seamlessly with our platform. Partner with Clikkle to create a better developer experience.',
        href: '/integrations',
        label: 'Find an Integration',
    },
] as const;

const TIER_BADGES = [
    { title: 'Platinum', badge: asset('/images/partners/badges/platinum.svg') },
    { title: 'Gold', badge: asset('/images/partners/badges/gold.svg') },
    { title: 'Silver', badge: asset('/images/partners/badges/silver.svg') },
] as const;

function clamp(min: number, v: number, max: number) {
    return Math.max(min, Math.min(max, v));
}

function BenefitCell({ title, description, icon }: { title: string; description: string; icon: string }) {
    return (
        <div className="partners-benefits-cell relative flex flex-col gap-4 p-8">
            <img src={icon} alt="" className="size-12" />
            <span className="text-primary -mb-3">{title}</span>
            <p className="text-secondary">{description}</p>
        </div>
    );
}

const Puzzle = () => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="h-full w-full overflow-hidden">
            <svg fill="none" className="h-full w-full" viewBox="0 0 460 525" xmlns="http://www.w3.org/2000/svg">
                <g className={cn('gridLines', animate && 'active')}>
                    <path
                        d="m286.44 85.681-160.21 92.5"
                        stroke="#fff"
                        strokeDasharray="4 4"
                        strokeOpacity=".06"
                        style={{ '--offset-to': 500 } as CSSProperties}
                    />
                    <path
                        d="m299.19 107.76-160.21 92.5"
                        stroke="#fff"
                        strokeDasharray="4 4"
                        strokeOpacity=".06"
                        style={{ '--offset-to': -500 } as CSSProperties}
                    />
                    <path
                        d="m285.62 374.25-98.727 57"
                        stroke="#fff"
                        strokeDasharray="4 4"
                        strokeOpacity=".06"
                        style={{ '--offset-to': 500 } as CSSProperties}
                    />
                    <path
                        d="m260.12 360.1-85.736 49.5"
                        stroke="#fff"
                        strokeDasharray="4 4"
                        strokeOpacity=".06"
                        style={{ '--offset-to': -500 } as CSSProperties}
                    />
                    <path
                        d="m185.27 374.45-10.392 6"
                        stroke="#fff"
                        strokeDasharray="4 4"
                        strokeOpacity=".06"
                        style={{ '--offset-to': 500 } as CSSProperties}
                    />
                    <path
                        d="m186.74 287-12.125 7"
                        stroke="#fff"
                        strokeDasharray="4 4"
                        strokeOpacity=".06"
                        style={{ '--offset-to': -500 } as CSSProperties}
                    />
                    <path
                        d="m261.91 215.2-12.124 7"
                        stroke="#fff"
                        strokeDasharray="4 4"
                        strokeOpacity=".06"
                        style={{ '--offset-to': 500 } as CSSProperties}
                    />
                    <path
                        d="m286.07 143.05-12.125 7"
                        stroke="#fff"
                        strokeDasharray="4 4"
                        strokeOpacity=".06"
                        style={{ '--offset-to': 500 } as CSSProperties}
                    />
                </g>
                <g className={cn('leftPiece', animate && 'active')}>
                    <g className={cn('logo', animate && 'active')}>
                        <path
                            d="m114.04 273.65-1.42 22.021-47.768 27.579c-13.917 8.035-25.497 6.194-31.149-3.218-0.822-1.368-1.519-2.898-2.079-4.582-1.098-3.297-1.672-7.185-1.637-11.608l0.384-5.953c0.122-1.052 0.276-2.114 0.457-3.18 0.37-2.187 0.858-4.401 1.455-6.623 5.655-21.062 21.038-42.984 38.25-52.922 17.212-9.937 30.846-4.768 34.117 11.142l-20.425 11.792c-2.965-4.09-8.512-4.723-15.112-0.912-6.6 3.81-12.661 11.145-16.403 19.107-1.14 2.422-2.063 4.9-2.722 7.354-0.585 2.176-0.961 4.332-1.095 6.414-0.407 6.312 1.492 10.693 4.867 12.609 3.126 1.782 7.519 1.442 12.512-1.441l47.768-27.579z"
                            fill="var(--color-left-fill)"
                        />
                        <path
                            d="m115.85 245.62-1.42 22.022-34.868 20.131c3.893-6.112 6.526-13.11 6.933-19.422 0.134-2.082 0.018-3.954-0.32-5.597l29.676-17.134z"
                            fill="var(--color-left-fill)"
                        />
                    </g>
                    <path
                        d="m199.59 423.72-24.925-14.388-174.41 100.7 24.914 14.386 174.42-100.7z"
                        fill="var(--color-left-fill)"
                        fillOpacity=".08"
                    />
                    <path
                        d="m25.165 523.94 173.6-100.22-24.098-13.911-173.59 100.22 24.087 13.908z"
                        stroke="var(--color-left-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m199.59 423.72-5e-3 -28.776-24.914-14.385-6e-3 28.773 24.925 14.388z"
                        fill="var(--color-left-fill)"
                        fillOpacity=".08"
                    />
                    <path
                        d="m175.08 409.1 24.099 13.911-5e-3 -27.822-24.088-13.908-6e-3 27.819z"
                        stroke="var(--color-left-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m174.67 179.17 24.916-14.395-24.917-14.374 1e-3 28.769z"
                        fill="var(--color-left-fill)"
                        fillOpacity=".08"
                    />
                    <path
                        d="m175.08 151.12 1e-3 27.337 23.676-13.678-23.677-13.659z"
                        stroke="var(--color-left-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m199.58 279.86 74.747-43.155-24.914-14.385-74.754 43.159 24.921 14.381z"
                        fill="var(--color-left-fill)"
                        fillOpacity=".08"
                    />
                    <path
                        d="m175.49 265.48 24.094 13.904 73.92-42.678-24.087-13.908-73.927 42.682z"
                        stroke="var(--color-left-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m249.42 222.32 24.914 14.385 4e-3 -86.311-24.918-14.392v86.318z"
                        fill="var(--color-left-fill)"
                        fillOpacity=".08"
                    />
                    <path
                        d="m249.83 136.72v85.363l24.088 13.908 4e-3 -85.356-24.092-13.915z"
                        stroke="var(--color-left-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m0.25195 510.03 174.41-100.7 6e-3 -28.773-74.754 43.159v-86.318l74.754-43.159-8e-3 -28.765 74.754-43.159v-86.318l-74.75 43.166-1e-3 -28.769-174.41 100.7-1e-3 258.94z"
                        fill="var(--color-left-fill)"
                        fillOpacity=".08"
                    />
                    <path
                        d="m174.25 409.1 6e-3 -27.818-74.133 42.801-0.6199 0.358v-87.273l0.206-0.119 74.548-43.04-8e-3 -28.526-1e-3 -0.238 0.207-0.12 74.547-43.04 1e-3 -85.363-74.13 42.808-0.62 0.358v-0.716l-1e-3 -28.053-173.59 100.22-0.001999 257.98 173.59-100.22z"
                        stroke="var(--color-left-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m124.83 351.79 74.762-43.145-24.922-14.4-74.754 43.159 24.914 14.386z"
                        fill="var(--color-left-fill)"
                        fillOpacity=".08"
                    />
                    <path
                        d="m100.74 337.4 24.087 13.908 73.936-42.667-24.096-13.923-73.927 42.682z"
                        stroke="var(--color-left-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m99.92 423.72 24.92-14.387-6e-3 -57.545-24.914-14.386v86.318z"
                        fill="var(--color-left-fill)"
                        fillOpacity=".08"
                    />
                    <path
                        d="m124.42 352.03-24.088-13.908v84.886l24.094-13.91-6e-3 -57.068z"
                        stroke="var(--color-left-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m199.59 279.86 9e-3 28.783-24.923-14.399-8e-3 -28.765 24.922 14.381z"
                        fill="var(--color-left-fill)"
                        fillOpacity=".08"
                    />
                    <path
                        d="m175.09 294.01 24.095 13.922-9e-3 -27.828-24.094-13.904 8e-3 27.81z"
                        stroke="var(--color-left-stroke)"
                        strokeWidth=".82664"
                    />
                </g>
                <g className={cn('rightPiece', animate && 'active')}>
                    <path
                        d="m459.62 273.41 2e-3 -258.94-24.918-14.392 2e-3 258.94 24.914 14.385z"
                        fill="var(--color-right-fill)"
                    />
                    <path
                        d="m435.12 258.78 24.088 13.908 2e-3 -257.98-24.092-13.915 2e-3 257.99z"
                        stroke="var(--color-right-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m260.29 359.72 7e-3 -28.773-74.754 43.159v-86.318l74.747-43.155 6e-3 -28.773 74.746-43.155 1e-3 -86.318-74.754 43.159-1e-3 -28.769 174.42-100.7 2e-3 258.94-174.42 100.7z"
                        fill="var(--color-right-fill)"
                    />
                    <path
                        d="m185.96 373.39 74.134-42.801 0.62-0.358v0.716l-6e-3 28.057 173.59-100.22-3e-3 -257.99-173.59 100.22 1e-3 27.814 74.134-42.801 0.62-0.3579v87.273l-0.207 0.119-74.54 43.036-6e-3 28.534v0.239l-0.207 0.119-74.54 43.036v85.363z"
                        stroke="var(--color-right-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m185.54 374.11 24.914 14.385 49.834-28.771 6e-3 -28.774-74.754 43.16z"
                        fill="var(--color-right-fill)"
                    />
                    <path
                        d="m259.87 359.48 6e-3 -27.819-73.513 42.444 24.087 13.908 49.42-28.533z"
                        stroke="var(--color-right-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m260.29 359.72 24.925 14.388 174.41-100.7-24.914-14.385-174.42 100.7z"
                        fill="var(--color-right-fill)"
                    />
                    <path
                        d="m434.71 259.5-173.59 100.22 24.098 13.911 173.58-100.23-24.087-13.908z"
                        stroke="var(--color-right-stroke)"
                        strokeWidth=".82664"
                    />
                    <path
                        d="m260.29 129.55 24.926 14.388 49.826-28.767 2e-3 -28.78-74.754 43.159z"
                        fill="var(--color-right-fill)"
                    />
                    <path
                        d="m334.62 114.93 2e-3 -27.825-73.514 42.443 24.098 13.911 49.414-28.529z"
                        stroke="var(--color-right-stroke)"
                        strokeWidth=".82664"
                    />
                    <g id="circles" className={cn('circles', animate && 'active')}>
                        <path
                            d="m338.9 291.95c24.536-14.166 45.904-48.569 47.728-76.842 1.823-28.273-16.589-39.709-41.125-25.543-24.536 14.165-45.904 48.569-47.727 76.842-1.824 28.272 16.588 39.708 41.124 25.543z"
                            fill="#fff"
                            fillOpacity=".04"
                            opacity=".2"
                            stroke="#fff"
                            strokeDasharray="4 4"
                            style={{ '--offset-to': 500 } as CSSProperties}
                        />
                        <path
                            d="m339.17 274.87c16.454-9.499 30.783-32.57 32.006-51.529 1.223-18.96-11.124-26.629-27.578-17.129-16.453 9.499-30.783 32.57-32.005 51.529-1.223 18.959 11.124 26.628 27.577 17.129z"
                            fill="#fff"
                            fillOpacity=".04"
                            opacity=".4"
                            stroke="#fff"
                            strokeDasharray="4 4"
                            style={{ '--offset-to': -500 } as CSSProperties}
                        />
                        <path
                            d="m338.64 256.96c8.082-4.667 15.121-16 15.722-25.313 0.6-9.313-5.465-13.08-13.547-8.414s-15.121 15.999-15.722 25.312c-0.601 9.314 5.464 13.081 13.547 8.415z"
                            fill="#fff"
                            fillOpacity=".02"
                            stroke="#fff"
                            strokeDasharray="4 4"
                            style={{ '--offset-to': 250 } as CSSProperties}
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

/** `partners/(components)/hero.svelte` */
function PartnersHero() {
    return (
        <div
            className={cn(
                'grid-bg border-smooth relative box-content flex items-center border-b px-5 py-12 lg:px-8 xl:px-16',
                'before:absolute before:inset-0 before:-z-[1] before:bg-gradient-to-r before:from-black/32 before:to-transparent',
            )}
        >
            <div className="container mx-auto grid grid-cols-1 place-items-center gap-16 md:grid-cols-2">
                <div className="flex max-w-lg flex-col gap-8">
                    <div className="flex items-center gap-2">
                        <span className="font-aeonik-fono text-eyebrow tracking-loose text-primary uppercase">
                            Partners Program<span className="text-accent">_</span>
                        </span>
                    </div>
                    <h1 className="text-display font-aeonik-pro text-pretty text-primary">
                        Boost businesses with Clikkle<span className="text-accent">_</span>
                    </h1>
                    <p className="text-description text-secondary text-pretty font-medium">
                        Join the Clikkle Partners program and grow your business. Deliver powerful solutions to clients, increase
                        revenue, and expand your reach.
                    </p>
                    <div className="flex flex-col items-center gap-2 md:flex-row">
                        <Link
                            href="#become-a-partner"
                            className="web-button is-secondary !w-full cursor-pointer md:!w-fit"
                        >
                            Become a Partner
                        </Link>
                        <Link href="/partners/catalog" className="web-button is-secondary !w-full cursor-pointer md:!w-fit">
                            Find a Partner
                        </Link>
                    </div>
                </div>
                <Puzzle />
            </div>
        </div>
    );
}

/** `partners/(components)/benefits.svelte` — Growing together + Why Clikkle (first block) */
function PartnersBenefits() {
    const items = BENEFIT_ITEMS;
    return (
        <>
            <div className="border-smooth flex flex-col items-center border-b py-12 md:py-[7.5rem]">
                <div className="mb-20 flex flex-col gap-2 text-center">
                    <span className="font-aeonik-fono text-eyebrow tracking-loose text-primary uppercase">
                        Benefits<span className="text-accent">_</span>
                    </span>
                    <h2 className="text-title font-aeonik-pro text-primary">Growing together</h2>
                </div>

                <div className="hidden w-full lg:block">
                    <div className="border-smooth relative w-full border-t border-dashed">
                        <div className="container hidden grid-cols-3 gap-px divide-x divide-dashed divide-[color:var(--color-smooth)] lg:grid">
                            {items.slice(0, 3).map((item) => (
                                <BenefitCell key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                    <div className="border-smooth relative w-full border-y border-dashed">
                        <div className="container hidden grid-cols-3 gap-px divide-x divide-dashed divide-[color:var(--color-smooth)] lg:grid">
                            {items.slice(3).map((item) => (
                                <BenefitCell key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hidden w-full md:block lg:hidden">
                    <div className="border-smooth relative w-full border-t border-dashed">
                        <div className="container hidden grid-cols-2 gap-px divide-x divide-dashed divide-[color:var(--color-smooth)] md:grid">
                            {items.slice(0, 2).map((item) => (
                                <BenefitCell key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                    <div className="border-smooth relative w-full border-y border-dashed">
                        <div className="container hidden grid-cols-2 gap-px divide-x divide-dashed divide-[color:var(--color-smooth)] md:grid">
                            {items.slice(2, 4).map((item) => (
                                <BenefitCell key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                    <div className="border-smooth relative w-full border-b border-dashed">
                        <div className="container hidden grid-cols-2 gap-px divide-x divide-dashed divide-[color:var(--color-smooth)] md:grid">
                            {items.slice(4).map((item) => (
                                <BenefitCell key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="block w-full md:hidden">
                    <div className="border-smooth relative w-full border-y border-dashed">
                        <div className="container grid grid-cols-1 gap-px divide-y divide-dashed divide-[color:var(--color-smooth)]">
                            {items.map((item) => (
                                <BenefitCell key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </div>

                <Link href="#become-a-partner" className="web-button is-secondary mx-auto mt-20 w-fit cursor-pointer">
                    Become a partner
                </Link>
            </div>

            <div className="border-smooth flex flex-col items-center py-12 md:py-[7.5rem]">
                <div className="mb-20 flex flex-col gap-2 text-center">
                    <h2 className="text-title font-aeonik-pro text-primary">Why Clikkle?</h2>
                </div>
                <div className="border-smooth relative w-full border-y border-dashed">
                    <div className="container grid grid-cols-1 gap-px divide-dashed divide-[color:var(--color-smooth)] max-md:divide-y md:grid-cols-3 md:divide-x">
                        {WHY_PLATFORM_ITEMS.map((why) => (
                            <div
                                key={why.title}
                                className="partners-benefits-cell relative flex flex-col items-center gap-4 p-8 text-center"
                            >
                                <img src={why.icon} alt="" className="size-12" />
                                <span className="text-primary -mb-3">{why.title}</span>
                                <p className="text-secondary">{why.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Link href="#become-a-partner" className="web-button is-secondary mx-auto mt-20 w-fit cursor-pointer">
                    Become a partner
                </Link>
            </div>
        </>
    );
}

/** `partners/(components)/partners.svelte` */
function PartnersTiers() {
    const [animate, setAnimate] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([e]) => {
                if (e?.isIntersecting) {
                    setAnimate(true);
                    io.disconnect();
                }
            },
            /* Svelte uses `amount: 'all'`; threshold `1` fails on short viewports — use strong visibility */
            { threshold: 0.35 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={cn(
                'partners-tiers-band border-smooth relative flex items-center justify-center border border-t border-dashed border-b bg-[#17171A] py-12 md:py-[7.5rem]',
                '[border-top-style:solid]',
            )}
        >
            <div className="relative z-10 container mx-auto flex w-full flex-col items-center justify-between gap-16 lg:flex-row">
                <div className="flex w-full flex-col gap-8 px-8 lg:max-w-lg">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-title font-aeonik-pro text-pretty text-primary">Partner Tiers</h2>
                        <p className="text-body text-secondary text-pretty font-medium">
                            As your business grows, so do the opportunities with Clikkle. Our Partner Program is designed to evolve with
                            you, offering flexible tiers that adapt to your unique needs and goals. Together, we&apos;ll build a
                            scalable partnership that ensures long-term success in a competitive market.
                        </p>
                    </div>
                    <div className="mt-3 flex flex-col items-center gap-2 md:flex-row md:items-start">
                        <Link href="#become-a-partner" className="web-button is-secondary !w-full cursor-pointer md:!w-fit">
                            Become a Partner
                        </Link>
                    </div>
                </div>
                {/* Svelte: scale on `<img>` only — `animate-card-in` uses transform on the wrapper */}
                <div className="mask partners-tier-badge-stack relative w-full max-w-[460px] shrink-0 px-8 [--mask-height:150px] lg:ml-auto lg:max-w-[min(460px,42vw)]">
                    {TIER_BADGES.map(({ title, badge }, i) => (
                        <div
                            key={title}
                            className={cn(
                                'relative flex h-fit w-full justify-center',
                                animate ? 'animate-card-in opacity-100' : 'opacity-0',
                            )}
                            style={{
                                zIndex: TIER_BADGES.length - i,
                                animationDelay: `${i * 0.1}s`,
                                marginBottom: i === TIER_BADGES.length - 1 ? 0 : `-${clamp(32, i * 40, 80)}px`,
                            }}
                        >
                            <img
                                src={badge}
                                alt={`${title} Badge`}
                                className="h-auto w-full max-w-[420px] select-none"
                                style={{ transform: `scale(${1 - i * 0.15})` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/** `partners/(components)/ways.svelte` */
function PartnersWays() {
    return (
        <div className="container space-y-12 py-12 md:py-[7.5rem]">
            <h2 className="text-title text-center font-aeonik-pro text-primary">Ways to partner</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {WAYS_ITEMS.map((item) => (
                    <div key={item.title} className="partners-gradient-card border-gradient flex flex-col gap-5 p-8">
                        <h2 className="text-label font-aeonik-pro font-medium text-primary">{item.title}</h2>
                        <p className="text-main-body text-secondary font-medium">{item.description}</p>
                        <Link href={item.href} className="web-button is-secondary mt-3 w-fit cursor-pointer">
                            {item.label}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

function useAnimatedStat(target: number, enabled: boolean) {
    const [v, setV] = useState(0);
    useEffect(() => {
        if (!enabled) return;
        const start = performance.now();
        const dur = 1200;
        let id: number;
        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            setV(Math.round(target * t));
            if (t < 1) id = requestAnimationFrame(tick);
        };
        id = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(id);
    }, [enabled, target]);
    return v;
}

/** `partners/(components)/why.svelte` */
function PartnersWhyStats() {
    const ref = useRef<HTMLDivElement>(null);
    const [on, setOn] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([e]) => {
                if (e?.isIntersecting) {
                    setOn(true);
                    io.disconnect();
                }
            },
            { threshold: 0.35 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const n0 = useAnimatedStat(650, on);
    const n1 = useAnimatedStat(50, on);
    const n2 = useAnimatedStat(900, on);
    const n3 = useAnimatedStat(300, on);
    const values = [n0, n1, n2, n3];

    const rows: { label: string; suffix?: string; prefix?: string; i: number }[] = [
        { label: 'Community members', suffix: 'k+', i: 0 },
        { label: 'GitHub stars', suffix: 'k+', i: 1 },
        { label: 'OSS Contributors', suffix: '+', i: 2 },
        { label: 'Top GitHub projects', i: 3 },
    ];

    return (
        <div className="border-smooth mb-0 border-y py-12 md:py-[7.5rem]">
            <div className="container space-y-16">
                <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
                    <span className="font-aeonik-fono text-eyebrow tracking-loose text-primary uppercase">
                        Why Clikkle?<span className="text-accent">_</span>
                    </span>
                    <h2 className="text-title font-aeonik-pro text-primary">
                        Partner with one of the fastest growing dev tool companies
                    </h2>
                    <p className="text-main-body text-secondary mx-auto max-w-md font-medium">
                        Everyday thousands of companies are built on top of Clikkle. Benefit from our network as a Clikkle Partner.
                    </p>
                </div>
                <div ref={ref} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {rows.map(({ label, suffix, prefix, i }) => (
                        <div key={label} className="partners-gradient-card border-gradient rounded-lg bg-card p-6">
                            <h3 className="text-title font-aeonik-pro text-primary -mt-4 -mb-2">
                                <span className="inline-block tabular-nums">
                                    {prefix}
                                    {values[i]}
                                    {suffix ?? ''}
                                </span>
                            </h3>
                            <p className="text-description text-secondary font-medium">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const SOCIAL_ICON: Record<string, React.ReactNode> = {
    Discord: <MessageCircle className="size-5" />,
    Github: <Github className="size-5" />,
    Twitter: <Twitter className="size-5" />,
    LinkedIn: <Linkedin className="size-5" />,
    YouTube: <Youtube className="size-5" />,
};

/** `partners/(components)/submission-form.svelte` */
function PartnersSubmissionForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyUrl, setCompanyUrl] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | undefined>();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(undefined);
        setSubmitting(true);
        const endpoint = process.env.NEXT_PUBLIC_GROWTH_ENDPOINT;
        if (endpoint) {
            try {
                const res = await fetch(`${endpoint}/conversations/partner`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name,
                        email,
                        companyName,
                        companyUrl,
                        message,
                        ...getReferrerAndUtmSource(),
                    }),
                });
                setSubmitting(false);
                if (res.status >= 400) {
                    setError(res.status >= 500 ? 'Server Error.' : 'Error submitting form.');
                    return;
                }
                setSubmitted(true);
            } catch {
                setSubmitting(false);
                setError('Error submitting form.');
            }
        } else {
            setTimeout(() => {
                setSubmitting(false);
                setSubmitted(true);
            }, 800);
        }
    }

    const list = [
        'Grow your business',
        'Work with the latest technology',
        'Deliver your clients a great experience',
    ];

    return (
        <div
            id="become-a-partner"
            className="partners-submission-shell relative -mb-[6rem] flex min-h-[75vh] flex-col items-center justify-center overflow-hidden"
        >
            {!submitted ? (
                <div className="relative z-10 container mx-auto box-border flex w-full flex-col justify-between gap-8 py-20 md:flex-row">
                    <div className="flex max-w-sm flex-col gap-6">
                        <h2 className="text-display font-aeonik-pro text-primary">Become a Partner</h2>
                        <p className="text-main-body text-secondary font-medium">
                            Our team will review your application and follow up to ensure we&apos;re a perfect fit.
                        </p>
                        <ul className="space-y-4">
                            {list.map((item) => (
                                <li key={item} className="text-main-body flex items-center gap-2 font-medium">
                                    <img src={asset('/images/icons/colored/check.svg')} alt="checkmark icon" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="partners-submission-form flex flex-col gap-4 md:min-w-[28rem] lg:min-w-[580px]"
                    >
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="flex flex-col gap-1">
                                <div className="block">Full name</div>
                                <input
                                    required
                                    className="web-input-text"
                                    type="text"
                                    placeholder="Walter O'Brien"
                                    aria-label="Full name"
                                    value={name}
                                    onChange={(ev) => setName(ev.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="block">Email address</div>
                                <input
                                    required
                                    className="web-input-text"
                                    type="email"
                                    placeholder="walter@company.com"
                                    aria-label="Email address"
                                    value={email}
                                    onChange={(ev) => setEmail(ev.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="block">Company name</div>
                                <input
                                    required
                                    className="web-input-text"
                                    type="text"
                                    placeholder="Acme Inc."
                                    aria-label="Company name"
                                    value={companyName}
                                    onChange={(ev) => setCompanyName(ev.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="block">Company URL</div>
                                <input
                                    className="web-input-text"
                                    type="url"
                                    placeholder="https://"
                                    aria-label="Company URL"
                                    value={companyUrl}
                                    onChange={(ev) => setCompanyUrl(ev.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1 sm:col-span-2">
                                <div className="block">Any other details you&apos;d like to share?</div>
                                <textarea
                                    required
                                    name="message"
                                    className="web-input-text"
                                    placeholder="Your message..."
                                    aria-label="Message"
                                    value={message}
                                    onChange={(ev) => setMessage(ev.target.value)}
                                />
                            </div>
                        </div>
                        <div className="web-u-flex-vertical-reverse-mobile flex justify-between gap-4">
                            <p className="text-caption web-u-max-width-380">{error ? error : null}</p>
                            <Button
                                type="submit"
                                disabled={submitting}
                                variant="default"
                                className="web-u-inline-width-100-percent-mobile-break1 cursor-pointer self-center"
                            >
                                <span>Submit application</span>
                            </Button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="animate-fade-in relative z-10 container mx-auto flex max-w-sm flex-col gap-4 text-center">
                    <div className="border-smooth mb-6 flex flex-col gap-4 border-b pb-8">
                        <h2 className="text-display font-aeonik-pro text-primary">Thank you for applying</h2>
                        <p className="text-main-body text-secondary font-medium">
                            Our team will review your application and follow up to ensure we&apos;re a perfect fit.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h3 className="text-label text-primary">Follow us</h3>
                        <ul className="mx-auto flex flex-wrap justify-center gap-2">
                            {DOCS_SOCIALS.slice(0, 5).map((social) => (
                                <li key={social.label}>
                                    <a
                                        href={social.href}
                                        className="web-icon-button inline-flex items-center justify-center"
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {SOCIAL_ICON[social.label] ?? <span className="text-xs">{social.label[0]}</span>}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function PartnersPage() {
    return (
        <main className="partners-page flex min-h-screen flex-1 flex-col bg-[var(--bg-primary)]">
            <PartnersHero />
            <PartnersBenefits />
            <PartnersTiers />
            <PartnersWays />
            <PartnersWhyStats />
            <PartnersSubmissionForm />
            <div className="relative overflow-hidden">
                <div className="container">
                    <SiteFooter footerNavNoTopBorder />
                </div>
            </div>
        </main>
    );
}
