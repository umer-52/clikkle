'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteFooter } from '@/components/site-footer';
import { withBasePath } from '@/lib/basepath';
import './startups.css';

/** Static files live under `public/images/...`; Next `basePath` serves them at `/clikkle/images/...`. */
const asset = (path: string) => withBasePath(path);

/** Mirrors `getReferrerAndUtmSource` from `$lib/utils/utm` (minimal). */
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

const Benefits = ({
    theme = 'light',
    description = "You don't need to have a team of engineers to develop, host, and scale applications. Clikkle gives you everything you need, including built-in security, AI, and open source.",
    className,
}: {
    theme?: 'light' | 'dark';
    description?: string;
    className?: string;
}) => {
    const benefits = [
        { label: 'All-in-one platform', description: 'Use one platform for backend development and web hosting and reduce vendors.', icon: asset('/images/icons/gradients/globe.svg') },
        { label: 'AI-powered development', description: "Connect your favorite AI productivity tools with Clikkle's MCP.", icon: asset('/images/icons/gradients/stars.svg') },
        { label: 'Scale effortlessly', description: 'From MVP to enterprise, our app scales automatically, letting you focus on your business goals.', icon: asset('/images/icons/gradients/rocket.svg') },
        { label: 'Zero configuration development', description: 'Spin up your backend in minutes, deploy in seconds. Fast and simple.', icon: asset('/images/icons/gradients/backend.svg') },
        { label: 'Built-in security', description: "Your users' data is safe from day one with Clikkle's built in security.", icon: asset('/images/icons/gradients/shield.svg') },
        { label: 'Compliance', description: 'We adhere to all needed compliance: GDPR, HIPAA, CCPA, SOC-2.', icon: asset('/images/icons/gradients/eu.svg') },
        { label: 'Open-source', description: 'Your data is always yours. Want to migrate away? You can do so at any time.', icon: asset('/images/icons/gradients/database.svg') },
    ];

    return (
        <div
            className={cn('pt-20 pb-12 md:pt-30 md:pb-20', className, {
                /* `.light` resets `--color-text-*` for grey bands under `html.dark` (`benefits.svelte`). */
                light: theme === 'light',
                'bg-[#EDEDF0]': theme === 'light',
                'bg-[var(--color-greyscale-900)]': theme === 'dark',
            })}
        >
            <div className="container mx-auto">
                <section className="flex flex-col items-start gap-x-30 md:flex-row">
                    <h2 className="text-title font-aeonik-pro max-w-[700px] leading-12 text-pretty text-primary">
                        Benefits of Clikkle<br />
                        for{' '}
                        <span className="relative">
                            startups<span className="absolute bottom-0 left-0 h-1 w-full bg-[var(--color-accent)]" />
                        </span>
                        <span className="text-[var(--color-accent)]">_</span>
                    </h2>
                    <p className={cn('text-description mt-4 max-w-xl font-medium', theme === 'light' ? 'text-secondary' : 'text-white/60')}>
                        {description}
                    </p>
                </section>
            </div>
            <div className="mt-12 border-y border-dashed border-black/8 md:mt-20">
                <div className="mx-auto grid grid-cols-2 overflow-hidden lg:grid-cols-4" style={{ maxWidth: '1200px', marginInline: 'auto' }}>
                    {benefits.map((box) => (
                        <div
                            key={box.label}
                            className="text-sub-body group relative border-dashed border-black/8 px-4 py-6 font-medium last-of-type:border-0 sm:px-2.5 sm:py-8 sm:pr-8 sm:max-lg:even:border-r-0 md:border-r md:border-b md:p-8 md:pr-8 lg:[&:nth-of-type(5)]:border-b-0 lg:[&:nth-of-type(6)]:border-b-0 lg:[&:nth-of-type(8)]:border-b-0"
                        >
                            <img loading="lazy" src={box.icon} width={40} height={40} alt="" />
                            <h3 className="mt-4 flex flex-wrap items-center gap-0.5 text-primary">{box.label}</h3>
                            <p className="text-secondary mt-1">{box.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const DevelopersToolkit = () => {
    const build = [
        { label: 'Auth', icon: asset('/icons-black/Auth.png'), href: '/products/auth' },
        { label: 'Databases', icon: asset('/icons-black/Morph DB.png'), href: '/docs/products/databases' },
        { label: 'Storage', icon: asset('/icons-black/Storage.png'), href: '/products/storage' },
        { label: 'Functions', icon: asset('/icons-black/Functions.png'), href: '/products/functions' },
        { label: 'Messaging', icon: asset('/icons-black/Messaging.png'), href: '/products/messaging' },
        { label: 'Realtime', icon: asset('/icons-black/Streams.png'), href: '/docs/apis/realtime' },
    ];
    const deploy = [{ label: 'Sites', icon: asset('/icons-black/Deploy.png'), href: '/products/sites' }];

    return (
        <section className="container mx-auto">
            <div className="mx-auto max-w-[720px] text-center">
                <h3 className="text-title font-aeonik-pro text-primary">
                    Your startups<br />
                    developer toolkit
                </h3>
                <p className="text-body mt-2 font-medium">
                    Clikkle offers an all-in-one hosting platform for you to build <br />
                    and deploy your product from a single place.
                </p>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center gap-2 lg:flex-row lg:flex-wrap lg:gap-0">
                <div className="text-primary flex h-10 w-full items-center gap-4 rounded-full border border-dashed border-black/8 bg-white p-1 text-sm lg:w-auto">
                    <span className="text-eyebrow text-secondary ml-3 font-mono uppercase">Build</span>
                    <div className="flex h-full w-full justify-between gap-2">
                        {build.map((product) => (
                            <Link
                                key={product.label}
                                href={product.href}
                                className="flex h-full w-fit items-center justify-center gap-2 rounded-full bg-[var(--color-smooth)] px-0.5 backdrop-blur-lg transition-opacity hover:opacity-80 sm:px-1 md:px-2 lg:px-3"
                            >
                                <span className="text-caption text-primary flex items-center justify-center gap-1 font-medium">
                                    <img loading="lazy" src={product.icon} alt={product.label} className="size-6" />
                                    <span className="hidden lg:inline">{product.label}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div aria-hidden="true" className="mx-0 hidden h-px w-6 self-center border-t border-dashed border-black/8 lg:block" />
                <div className="text-primary flex h-10 items-center gap-4 rounded-full border border-dashed border-black/8 bg-white p-1 text-sm">
                    <span className="text-eyebrow text-secondary ml-3 font-mono uppercase">Deploy</span>
                    <div className="flex h-full w-full justify-between gap-2">
                        {deploy.map((product) => (
                            <Link
                                key={product.label}
                                href={product.href}
                                className="flex h-full w-fit items-center justify-center gap-2 rounded-full bg-[var(--color-smooth)] px-0.5 backdrop-blur-lg transition-opacity hover:opacity-80 sm:px-1 md:px-2 lg:px-3"
                            >
                                <span className="text-caption text-primary flex items-center justify-center gap-1 font-medium">
                                    <img loading="lazy" src={product.icon} alt={product.label} className="size-6" />
                                    <span className="hidden lg:inline">{product.label}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

type Study = {
    logo: string;
    headline: string;
    blurb: string;
    name: string;
    title: string;
    avatar: string;
    url: string;
};

const studies: Study[] = [
    {
        logo: asset('/images/logos/devkind-light.svg'),
        headline: 'DevKind reduced development time by 60% and lowered server costs by 40%',
        blurb: 'A special thanks to Clikkle for providing robust features and seamless functionality.',
        name: 'Hassan Ahmed',
        title: 'Engineer at DevKind',
        avatar: asset('/images/testimonials/hassan.svg'),
        url: '/blog/post/customer-story-storealert',
    },
    {
        logo: asset('/images/logos/langx-light.svg'),
        headline: 'LangX handled millions of requests using Clikkle',
        blurb: 'With its comprehensive suite of services, Clikkle emerged as an ideal choice for my needs.',
        name: 'Xue',
        title: 'Founder at LangX',
        avatar: asset('/images/testimonials/xue.svg'),
        url: '/blog/post/customer-stories-langx',
    },
    {
        logo: asset('/images/logos/k-collect-light.svg'),
        headline: 'K-Collect reduced infrastructure costs by 700%',
        blurb: 'A major impact that Clikkle made was the amount of time and stress saved.',
        name: "Ryan O'Connor",
        title: 'Founder at K-Collect',
        avatar: asset('/images/testimonials/ryan.svg'),
        url: '/blog/post/customer-stories-kcollect',
    },
];

function CaseStudyCardLight({ study, isActive, onActivate }: { study: Study; isActive: boolean; onActivate: () => void }) {
    return (
        <button
            type="button"
            data-state={isActive ? 'on' : 'off'}
            onClick={onActivate}
            className={cn(
                'group/card relative grid min-w-0 w-full cursor-pointer overflow-hidden rounded-2xl border transition-all ease-in-out outline-0 duration-250 [grid-template-areas:"stack"] md:max-h-[467px]',
                'hover:bg-white/80 hover:shadow-[0px_0px_0px_4px_rgba(0,0,0,0.08)] focus:shadow-[0px_0px_0px_4px_rgba(0,0,0,0.08)]',
                'data-[state=off]:border-black/8 data-[state=off]:bg-white data-[state=off]:p-4 sm:data-[state=off]:p-6 md:data-[state=off]:p-8',
                'lg:data-[state=off]:min-w-0 lg:data-[state=off]:flex-[0_0_15%]',
                'data-[state=on]:border-black/12 data-[state=on]:bg-white data-[state=on]:p-4 data-[state=on]:shadow-[0px_0px_0px_4px_rgba(0,0,0,0.08)] sm:data-[state=on]:p-6 md:data-[state=on]:p-8 lg:data-[state=on]:p-12',
                'lg:data-[state=on]:min-w-0 lg:data-[state=on]:flex-[1_1_70%]',
            )}
        >
            <img
                loading="lazy"
                src={study.logo}
                alt={study.headline}
                width={100}
                height={100}
                className={cn(
                    'h-4 shrink-0 opacity-100 transition-all [grid-area:stack] sm:h-5 lg:h-12',
                    'self-center justify-self-center',
                    isActive && 'invisible opacity-0',
                )}
            />
            <div
                className={cn(
                    'relative hidden w-full space-y-4 overflow-hidden p-4 text-left transition-opacity delay-400 [grid-area:stack] sm:space-y-5 sm:p-5 md:space-y-6 md:p-6',
                    isActive && 'block opacity-100',
                )}
            >
                <img
                    loading="lazy"
                    width={80}
                    height={80}
                    src={study.logo}
                    alt={study.headline}
                    className={cn('h-6 w-auto sm:h-7 md:h-8', isActive && 'animate-fade-in')}
                />
                <span className={cn('font-aeonik-pro block text-left text-lg leading-tight text-black sm:text-xl md:text-2xl', isActive && 'animate-fade-in')}>
                    {study.headline}
                </span>
                <div className="text-left text-sm leading-relaxed font-bold text-black sm:text-base">&quot;{study.blurb}&quot;</div>
                <div className="flex items-start gap-2">
                    <img loading="lazy" src={study.avatar} alt={study.headline} className="size-6 shrink-0 rounded-full sm:size-7 md:size-8" />
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5 pr-2 text-left">
                        <span className="text-xs font-medium text-black sm:text-sm">{study.name},</span>
                        <span className="text-xs font-normal break-words text-neutral-700 sm:text-sm">{study.title}</span>
                    </div>
                    <Link
                        href={study.url}
                        className="group/link flex shrink-0 items-center gap-1 text-left text-xs whitespace-nowrap text-black hover:underline sm:text-sm"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Read customer story{' '}
                        <ArrowRight className="size-3 shrink-0 transition-transform group-hover/link:translate-x-0.5 sm:size-4" aria-hidden />
                    </Link>
                </div>
            </div>
        </button>
    );
}

function CaseStudiesLight() {
    const [value, setValue] = useState(0);
    return (
        <div
            className="light relative mb-0 flex w-full min-w-0 max-w-full items-center justify-center overflow-x-clip overflow-y-hidden border-t border-dashed border-black/8 px-4 py-12 sm:px-6 sm:py-16 md:py-20 md:pt-30 md:pb-40"
            style={{
                background:
                    'radial-gradient(circle at 0% 100%, rgba(45, 99, 255, 0.14) 0%, transparent 42%), radial-gradient(circle at 100% 0%, rgba(37, 88, 232, 0.12) 0%, transparent 40%), var(--background, #EDEDF0)',
            }}
        >
            <div className="container mx-auto flex h-full w-full min-w-0 max-w-6xl flex-col items-stretch gap-3 sm:gap-4 lg:flex-row">
                {studies.map((study, index) => (
                    <CaseStudyCardLight key={study.headline} study={study} isActive={value === index} onActivate={() => setValue(index)} />
                ))}
            </div>
        </div>
    );
}

/** `StartupPartnerCTA.svelte` — radial glares; Clikkle uses brand blue + mint (not Appwrite pink). */
function StartupPartnerCTA() {
    return (
        <div
            className={cn(
                'border-greyscale-200/4 relative -mb-24 flex min-h-[50vh] items-center justify-center border-y md:min-h-[504px]',
                'py-12 md:py-16',
                'before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full',
                'before:bg-[radial-gradient(circle_at_-25%_-15%,_hsla(221,_83%,_56%,_0.22)_0px,_transparent_50%)]',
                'md:before:bg-[radial-gradient(circle_at_-15%_-10%,_hsla(221,_83%,_56%,_0.28)_0px,_transparent_40%)]',
                'after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full',
                'after:bg-[radial-gradient(circle_at_125%_130%,_hsla(177,_53%,_69%,_0.15)_0px,_transparent_50%)]',
                'md:after:bg-[radial-gradient(circle_at_120%_125%,_hsla(177,_53%,_69%,_0.2)_0px,_transparent_40%)]',
            )}
        >
            <div className="container px-4 md:px-6">
                <div className="mx-auto flex flex-col items-center justify-center text-center">
                    <h2 className="font-aeonik-pro text-title mb-4 px-2 text-white">
                        Become a startup partner<span className="text-[var(--color-accent)]">_</span>
                    </h2>
                    <p className="text-description text-secondary mb-8 max-w-[572px] leading-relaxed">
                        Clikkle partners with venture capital firms and startup accelerators to provide exclusive discounts and other benefits to
                        their portfolio companies.
                    </p>
                    <Button asChild className="min-h-[48px] !w-full md:min-h-[44px] md:!w-fit">
                        <a href="mailto:sales@clikkle.io">Apply now</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

const WEBSITE_PATTERN =
    "^(https:\\/\\/www\\.|https:\\/\\/)?([a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+)[a-zA-Z0-9\\-\\._~:\\/\\?#\\[\\]@!\\$&'\\(\\)\\*\\+,;=.]*$";

export default function StartupsPage() {
    const [personName, setPersonName] = useState('');
    const [personEmail, setPersonEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyUrl, setCompanyUrl] = useState('');
    const [error, setError] = useState<string>();
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const scrollToForm = () => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(undefined);
        setSubmitting(true);
        const endpoint = process.env.NEXT_PUBLIC_GROWTH_ENDPOINT;
        if (endpoint) {
            try {
                const response = await fetch(`${endpoint}/conversations/startups`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        personName,
                        personEmail,
                        companyName,
                        companyUrl: companyUrl.startsWith('http') ? companyUrl : `https://${companyUrl}`,
                        ...getReferrerAndUtmSource(),
                    }),
                });
                setSubmitting(false);
                if (response.status >= 400) {
                    setError(response.status >= 500 ? 'Internal server Error.' : 'Error submitting form. Please contact support.');
                    return;
                }
                setSubmitted(true);
            } catch {
                setSubmitting(false);
                setError('Error submitting form. Please contact support.');
            }
        } else {
            setTimeout(() => {
                setSubmitting(false);
                setSubmitted(true);
            }, 800);
        }
    };

    const resetForm = () => {
        setPersonName('');
        setPersonEmail('');
        setCompanyName('');
        setCompanyUrl('');
        setError(undefined);
        setSubmitted(false);
    };

    return (
        <main className="relative min-w-0 overflow-x-clip bg-[var(--bg-primary)]">
            <img className="absolute inset-0 mx-auto block max-w-full" src={asset('/images/bgs/startups/bg-hero.svg')} alt="" />
            {/* Svelte `(assets)/bg-left.png` / `bg-right.png` — blob SVGs from `public/images/bgs/startups/`. */}
            <img
                className="e-bg-left-mobile pointer-events-none absolute top-0 select-none"
                src={asset('/images/bgs/startups/startup-blob-left.svg')}
                alt=""
            />
            <img
                className="e-bg-right-mobile pointer-events-none absolute right-0 select-none"
                src={asset('/images/bgs/startups/bg-right.svg')}
                alt=""
            />

            <div className="web-big-padding-section relative z-10 w-full min-w-0 max-w-full overflow-hidden pt-20">
                <div className="relative py-10">
                    <div className="web-big-padding-section-level-2 e-u-margin-block-128-desktop w-full">
                        <section className="container web-u-padding-block-end-0 mx-auto">
                            <div className="web-hero mx-auto" style={{ '--hero-max-inline-size': '49.375rem', '--hero-gap': '1.125rem' } as React.CSSProperties}>
                                <h1 className="text-headline font-aeonik-pro text-primary">Build your startup with Clikkle</h1>
                                <p className="text-description web-u-max-width-640 e-u-padding-inline-32-desktop mx-auto">
                                    The Clikkle Startups Program supports your startup with an all-in-one development platform for you to build your
                                    products. You will receive Cloud credits and a discount for Clikkle&apos;s paid plans.
                                </p>
                                <Button type="button" onClick={scrollToForm} className="mx-auto mt-3">
                                    Apply now
                                </Button>
                            </div>
                        </section>
                    </div>

                    <div className="web-big-padding-section-level-2 e-u-padding-block-start-48-mobile e-u-padding-block-start-80-desktop e-u-margin-block-end-80-mobile">
                        <section className="container mx-auto">
                            <ul className="web-u-flex-vertical-mobile e-u-gap-64-mobile grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
                                {[
                                    {
                                        icon: asset('/images/icons/gradients/backend.svg'),
                                        title: 'Up to 80% discounts',
                                        body: 'Get discounts on Clikkle’s paid plans. We offer up to 80% on both Pro and Scale.',
                                    },
                                    {
                                        icon: asset('/images/icons/gradients/cloud-credit.svg'),
                                        title: 'Cloud credits',
                                        body: 'Save on development and cloud costs and reduce risk at an early stage.',
                                    },
                                    {
                                        icon: asset('/images/icons/gradients/support.svg'),
                                        title: 'Priority support',
                                        body: 'Get community support and priority support from the Clikkle team.',
                                    },
                                    {
                                        icon: asset('/images/icons/gradients/swag.svg'),
                                        title: 'Founder swag',
                                        body: 'Get community support and dedicated email support from the Clikkle team.',
                                    },
                                ].map((item) => (
                                    <li key={item.title} className="mx-auto flex flex-col items-center gap-4">
                                        <img src={item.icon} width={48} height={48} alt="" />
                                        <div className="flex flex-col gap-2 text-center">
                                            <h2 className="text-label text-primary">{item.title}</h2>
                                            <p className="text-body font-medium">{item.body}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

                <div className="web-white-section light relative z-20 border-b border-dashed border-black/8 pt-10">
                    <div className="web-big-padding-section-level-2 h-64">
                        <DevelopersToolkit />
                    </div>
                </div>

                <Benefits theme="light" className="z-20" />

                <CaseStudiesLight />

                <div id="form" className="web-white-section light z-20 overflow-hidden">
                    <div className="relative pt-20 pb-8 md:pt-40 md:pb-30">
                        <div className="relative">
                            <div className="relative container mx-auto">
                                <div className="web-grid-1-1-opt-2 e-u-row-gap-0 relative z-[1] gap-8">
                                    <div>
                                        <div className={cn('web-u-max-inline-size-none-mobile', !submitted && 'web-u-max-width-380')}>
                                            <section className="flex flex-col gap-5">
                                                <h4 className="text-title font-aeonik-pro text-primary">Join the Clikkle Startups program</h4>
                                                <p className="text-description" style={{ fontSize: '18px' }}>
                                                    We support VC backed tech startups that have been established within the last decade with:
                                                </p>
                                                <div className="flex flex-col gap-3">
                                                    <div className="flex gap-4">
                                                        <img className="mt-1 self-start" src={asset('/images/icons/gradients/v-icon.svg')} alt="yes" width={18} height={18} />
                                                        <p className="text-description" style={{ fontSize: '18px' }}>
                                                            Clikkle Cloud Pro for 12 months
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <img className="mt-1 self-start" src={asset('/images/icons/gradients/v-icon.svg')} alt="yes" width={18} height={18} />
                                                        <p className="text-description" style={{ fontSize: '18px' }}>
                                                            Premium email support as part of Pro
                                                        </p>
                                                    </div>
                                                </div>
                                            </section>
                                            <div className="web-is-only-mobile web-u-margin-block-start-40 web-u-padding-block-start-40 web-u-sep-block-start" />
                                        </div>
                                    </div>
                                    {submitted ? (
                                        <div className="web-u-max-width-380 web-u-max-inline-size-none-mobile relative z-[1] mx-auto flex flex-col gap-2 text-center">
                                            <h6 className="text-label flex items-center justify-center gap-2">
                                                <img className="shrink-0" src={asset('/images/icons/colored/check.svg')} alt="" />
                                                <span className="text-primary">Thank you for your submission</span>
                                            </h6>
                                            <p className="text-body">Our team will review your application and get back to you soon.</p>
                                            <Button variant="secondary" type="button" onClick={resetForm} className="mx-auto mt-4 block !w-full md:!w-fit">
                                                Back to form
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-xl flex-col gap-4">
                                            <div className="flex justify-end">
                                                <ul className="web-form-list web-u-max-width-580 web-u-max-inline-size-none-mobile w-full gap-4">
                                                    <li className="web-form-item flex flex-col gap-1">
                                                        <div className="block">Full name</div>
                                                        <input
                                                            required
                                                            className="web-input-text"
                                                            type="text"
                                                            placeholder="Walter O'Brien"
                                                            aria-label="Full name"
                                                            value={personName}
                                                            onChange={(e) => setPersonName(e.target.value)}
                                                        />
                                                    </li>
                                                    <li className="web-form-item flex flex-col gap-1">
                                                        <div className="block">Email address</div>
                                                        <input
                                                            required
                                                            className="web-input-text"
                                                            type="email"
                                                            placeholder="walter@company.com"
                                                            aria-label="Email address"
                                                            value={personEmail}
                                                            onChange={(e) => setPersonEmail(e.target.value)}
                                                        />
                                                    </li>
                                                    <li className="web-form-item flex flex-col gap-1">
                                                        <div className="block">Company name</div>
                                                        <input
                                                            required
                                                            className="web-input-text"
                                                            type="text"
                                                            name="company"
                                                            placeholder="Company Inc."
                                                            aria-label="Company name"
                                                            value={companyName}
                                                            onChange={(e) => setCompanyName(e.target.value)}
                                                        />
                                                    </li>
                                                    <li className="web-form-item flex flex-col gap-1">
                                                        <div className="block">Company website</div>
                                                        <input
                                                            required
                                                            className="web-input-text"
                                                            type="text"
                                                            pattern={WEBSITE_PATTERN}
                                                            name="company-website"
                                                            placeholder="https://company.com"
                                                            aria-label="Company website"
                                                            value={companyUrl}
                                                            onChange={(e) => setCompanyUrl(e.target.value)}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="web-u-flex-vertical-reverse-mobile mx-auto flex w-full max-w-xl justify-between gap-4">
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-caption text-secondary">
                                                        This form is protected by reCAPTCHA, and the Google <br className="hidden sm:block" />
                                                        <a href="https://policies.google.com/privacy" className="text-[var(--color-accent)]">
                                                            Privacy Policy
                                                        </a>{' '}
                                                        and{' '}
                                                        <a href="https://policies.google.com/terms" className="text-[var(--color-accent)]">
                                                            Terms of Service
                                                        </a>{' '}
                                                        apply.
                                                    </p>
                                                    {error ? <p className="text-caption web-u-max-width-380">{error}</p> : null}
                                                </div>
                                                <Button type="submit" disabled={submitting} className="!w-full self-center lg:!w-auto">
                                                    Get Started
                                                </Button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <StartupPartnerCTA />

                <SiteFooter />
            </div>
        </main>
    );
}
