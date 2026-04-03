'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import './startups.css';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

const Benefits = ({ theme = 'light', description = "You don't need to have a team of engineers to develop, host, and scale applications. Clikkle gives you everything you need, including built-in security, AI, and open source.", className }: { theme?: 'light' | 'dark', description?: string, className?: string }) => {
    const benefits = [
        { label: 'All-in-one platform', description: 'Use one platform for backend development and web hosting and reduce vendors.', icon: '/clikkle/images/icons/gradients/globe.svg' },
        { label: 'AI-powered development', description: "Connect your favorite AI productivity tools with Clikkle's MCP.", icon: '/clikkle/images/icons/gradients/stars.svg' },
        { label: 'Scale effortlessly', description: 'From MVP to enterprise, our app scales automatically, letting you focus on your business goals.', icon: '/clikkle/images/icons/gradients/rocket.svg' },
        { label: 'Zero configuration development', description: 'Spin up your backend in minutes, deploy in seconds. Fast and simple.', icon: '/clikkle/images/icons/gradients/backend.svg' },
        { label: 'Built-in security', description: "Your users' data is safe from day one with Clikkle's built in security.", icon: '/clikkle/images/icons/gradients/shield.svg' },
        { label: 'Compliance', description: 'We adhere to all needed compliance: GDPR, HIPAA, CCPA, SOC-2.', icon: '/clikkle/images/icons/gradients/eu.svg' },
        { label: 'Open-source', description: 'Your data is always yours. Want to migrate away? You can do so at any time.', icon: '/clikkle/images/icons/gradients/database.svg' }
    ];

    return (
        <div className={cn('pt-20 pb-12 md:pt-30 md:pb-20', className, {
            'bg-[#EDEDF0]': theme === 'light',
            'bg-[var(--bg-primary)]': theme === 'dark' // Approximate greyscale-900
        })}>
            <div className="container mx-auto">
                <section className="flex flex-col items-start gap-x-30 md:flex-row">
                    <h2 className={cn("text-display font-aeonik-pro max-w-[700px] leading-12 text-pretty", theme === 'light' ? "text-[#19191C]" : "text-white")}>
                        Benefits of Clikkle<br />for
                        <span className="relative ml-2">startups<span className="absolute bottom-0 left-0 h-1 w-full bg-[#2D63FF]"></span></span>
                        <span className="text-[#2D63FF]">_</span>
                    </h2>
                    <p className={cn("mt-4 max-w-xl font-medium text-lg", theme === 'light' ? "text-[#434347]" : "text-white/60")}>
                        {description}
                    </p>
                </section>
            </div>
            <div className="mt-12 border-y border-dashed border-black/8 md:mt-20">
                <div className="mx-auto grid grid-cols-2 overflow-hidden lg:grid-cols-4" style={{ maxWidth: '1200px', marginInline: 'auto' }}>
                    {benefits.map((box, i) => (
                        <div key={i} className="group relative border-dashed border-black/8 px-4 py-6 font-medium last-of-type:border-0 sm:px-2.5 sm:py-8 sm:pr-8 sm:max-lg:even:border-r-0 md:border-r md:border-b md:p-8 md:pr-8 lg:nth-child(5):border-b-0 lg:nth-child(6):border-b-0 lg:nth-child(8):border-b-0">
                            <img loading="lazy" src={box.icon} width="40" height="40" alt="" />
                            <h3 className={cn("mt-4 flex flex-wrap items-center gap-0.5 font-aeonik-pro text-xl", theme === 'light' ? "text-[#19191C]" : "text-white")}>
                                {box.label}
                            </h3>
                            <p className={cn("mt-1", theme === 'light' ? "text-[#434347]" : "text-white/60")}>
                                {box.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const DevelopersToolkit = () => {
    const build = [
        { label: 'Auth', icon: '/clikkle/images/icons/illustrated/light/auth.png', href: '/products/auth' },
        { label: 'Databases', icon: '/clikkle/images/icons/illustrated/light/databases.png', href: '/docs/products/databases' },
        { label: 'Storage', icon: '/clikkle/images/icons/illustrated/light/storage.png', href: '/products/storage' },
        { label: 'Functions', icon: '/clikkle/images/icons/illustrated/light/functions.png', href: '/products/functions' },
        { label: 'Messaging', icon: '/clikkle/images/icons/illustrated/light/messaging.png', href: '/products/messaging' },
        { label: 'Realtime', icon: '/clikkle/images/icons/illustrated/light/realtime.png', href: '/docs/apis/realtime' }
    ];
    const deploy = [
        { label: 'Sites', icon: '/clikkle/images/icons/illustrated/light/sites.png', href: '/products/sites' }
    ];
    return (
        <section className="container mx-auto">
            <div className="mx-auto max-w-[720px] text-center mt-20">
                <h3 className="text-display font-aeonik-pro text-[#19191C]">
                    Your startups<br />developer toolkit
                </h3>
                <p className="text-xl mt-4 font-medium text-[#434347]">
                    Clikkle offers an all-in-one hosting platform for you to build <br className="hidden md:block"/>
                    and deploy your product from a single place.
                </p>
            </div>
            <div className="mt-8 mb-20 flex flex-col items-center justify-center gap-2 lg:flex-row lg:flex-wrap lg:gap-0">
                {/* Build group */}
                <div className="flex h-12 w-full items-center gap-4 rounded-lg border border-dashed border-black/8 bg-white p-1 text-sm lg:w-auto overflow-x-auto hide-scrollbar">
                    <span className="text-xs font-mono ml-4 uppercase text-[#434347]">Build</span>
                    <div className="flex h-full w-full justify-between gap-1 pr-1">
                        {build.map(p => (
                            <Link key={p.label} href={p.href} className="bg-[#EDEDF0]/50 hover:bg-[#EDEDF0] flex h-full w-fit items-center justify-center gap-2 rounded-full px-2 lg:px-4 backdrop-blur-lg transition-opacity">
                                <span className="flex items-center justify-center gap-2 font-medium text-[#19191C]">
                                    <img loading="lazy" src={p.icon} alt={p.label} className="w-6 h-6 object-contain" />
                                    <span className="hidden lg:inline">{p.label}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div aria-hidden="true" className="mx-0 hidden h-px w-6 self-center border-t border-dashed border-black/8 lg:block"></div>
                {/* Deploy group */}
                <div className="flex h-12 items-center gap-4 rounded-lg border border-dashed border-black/8 bg-white p-1 text-sm overflow-x-auto hide-scrollbar">
                    <span className="text-xs font-mono ml-4 uppercase text-[#434347]">Deploy</span>
                    <div className="flex h-full w-full justify-between gap-1 pr-1">
                        {deploy.map(p => (
                            <Link key={p.label} href={p.href} className="bg-[#EDEDF0]/50 hover:bg-[#EDEDF0] flex h-full w-fit items-center justify-center gap-2 rounded-full px-2 lg:px-4 backdrop-blur-lg transition-opacity">
                                <span className="flex items-center justify-center gap-2 font-medium text-[#19191C]">
                                    <img loading="lazy" src={p.icon} alt={p.label} className="w-6 h-6 object-contain" />
                                    <span className="hidden lg:inline">{p.label}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CaseStudiesLight = () => {
    const studies = [
        {
            logo: '/clikkle/images/logos/devkind-light.svg',
            headline: 'DevKind reduced development time by 60% and lowered server costs by 40%',
            blurb: 'A special thanks to Clikkle for providing robust features and seamless functionality.',
            name: 'Hassan Ahmed', title: 'Engineer at DevKind',
            avatar: '/clikkle/images/testimonials/hassan.png', url: '/blog/post/customer-story-storealert'
        },
        {
            logo: '/clikkle/images/logos/langx-light.svg',
            headline: 'LangX handled millions of requests using Clikkle',
            blurb: 'With its comprehensive suite of services, Clikkle emerged as an ideal choice for my needs.',
            name: 'Xue', title: 'Founder at LangX',
            avatar: '/clikkle/images/testimonials/xue.webp', url: '/blog/post/customer-stories-langx'
        },
        {
            logo: '/clikkle/images/logos/k-collect-light.svg',
            headline: 'K-Collect reduced infrastructure costs by 700%',
            blurb: 'A major impact that Clikkle made was the amount of time and stress saved.',
            name: "Ryan O'Connor", title: 'Founder at K-Collect',
            avatar: '/clikkle/images/testimonials/ryan.png', url: '/blog/post/customer-stories-kcollect'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative mb-0 flex items-center justify-center overflow-hidden border-t border-dashed border-black/8 px-4 py-12 sm:px-6 sm:py-16 md:py-20 md:pt-30 md:pb-40"
             style={{ background: 'radial-gradient(circle at 0% 100%, rgba(239, 68, 68, 0.12) 0%, transparent 40%), radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.12) 0%, transparent 40%), var(--background, #EDEDF0)' }}>
            <div className="container flex h-full w-full flex-col items-stretch gap-3 sm:gap-4 lg:flex-row max-w-6xl mx-auto">
                {studies.map((study, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                        <div key={idx} 
                             onClick={() => setActiveIndex(idx)}
                             className={cn("relative grid w-full cursor-pointer overflow-hidden rounded-2xl border transition-all ease-in-out md:max-h-[467px] group/card",
                                isActive ? "basis-[70%] border-black/12 bg-white p-4 shadow-[0px_0px_0px_4px_rgba(0,0,0,0.08)] sm:p-6 md:p-8 lg:p-12" 
                                         : "basis-[15%] border-black/8 bg-white/60 p-4 sm:p-6 md:p-8 hover:bg-white/80 hover:shadow-[0px_0px_0px_4px_rgba(0,0,0,0.08)]")}
                             style={{ gridTemplateAreas: '"stack"' }}>
                            
                            {!isActive && (
                                <img loading="lazy" src={study.logo} alt={study.headline} className="h-4 sm:h-5 lg:h-12 w-auto shrink-0 opacity-100 transition-all self-center justify-self-center pointer-events-none" style={{ gridArea: 'stack' }} />
                            )}

                            {isActive && (
                                <div className="relative w-full space-y-4 overflow-hidden text-left sm:space-y-5 md:space-y-6 animate-fade-in" style={{ gridArea: 'stack' }}>
                                    <img loading="lazy" src={study.logo} alt={study.headline} className="h-6 w-auto sm:h-7 md:h-8" />
                                    <span className="font-aeonik-pro block text-left text-xl leading-tight text-[#19191C] sm:text-2xl md:text-3xl lg:text-4xl">
                                        {study.headline}
                                    </span>
                                    <div className="text-left text-sm leading-relaxed font-bold text-[#19191C] sm:text-base md:text-lg">
                                        "{study.blurb}"
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <img loading="lazy" src={study.avatar} alt={study.headline} className="size-10 flex-shrink-0 rounded-full sm:size-12" />
                                        <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 pr-2 text-left">
                                            <span className="text-sm font-medium text-[#19191C] sm:text-base">{study.name},</span>
                                            <span className="text-sm font-normal text-[#434347]">{study.title}</span>
                                        </div>
                                        <Link href={study.url} className="group flex flex-shrink-0 items-center justify-center self-center gap-1 text-left text-sm whitespace-nowrap text-[#19191C] hover:underline hover:text-[#2D63FF]">
                                            Read customer story <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const StartupPartnerCTA = () => (
    <div className="border-black/5 relative -mb-24 flex min-h-[50vh] items-center justify-center border-y md:min-h-[504px] py-12 md:py-16 bg-[var(--bg-primary)] overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at -15% -10%, hsla(343, 98%, 60%, 0.2) 0px, transparent 40%)' }} />
        <div className="absolute inset-0 pointer-events-none mt-auto" style={{ backgroundImage: 'radial-gradient(circle at 120% 125%, hsla(177, 53%, 69%, 0.2) 0px, transparent 40%)' }} />
        
        <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="font-aeonik-pro text-display md:text-5xl lg:text-6xl mb-4 px-2 text-white">
                    Become a startup partner<span className="text-[#2D63FF]">_</span>
                </h2>
                <p className="text-lg md:text-xl text-white/60 mb-8 max-w-[572px] leading-relaxed">
                    Clikkle partners with venture capital firms and startup accelerators to provide
                    exclusive discounts and other benefits to their portfolio companies.
                </p>
                <Button variant="outline" className="w-full md:w-fit !border-transparent !bg-white !text-black hover:!bg-white/90">
                    Apply now
                </Button>
            </div>
        </div>
    </div>
);

export default function StartupsPage() {
    const [personName, setPersonName] = useState('');
    const [personEmail, setPersonEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyUrl, setCompanyUrl] = useState('');
    const [error, setError] = useState<string>();
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate fake API call
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 800);
    };

    const resetForm = () => {
        setPersonName(''); setPersonEmail(''); setCompanyName(''); setCompanyUrl('');
        setError(undefined); setSubmitted(false);
    };

    return (
        <main className="flex flex-col flex-1 bg-[var(--bg-primary)] overflow-hidden pt-20">
            
            {/* Background elements */}
            <div className="absolute w-full top-0 left-0 right-0 z-0 h-[800px] overflow-hidden pointer-events-none">
                <img className="absolute inset-0 mx-auto block max-w-full" src="/clikkle/images/bgs/startups/bg-hero.svg" alt="" />
                <img className="e-bg-left-mobile absolute top-0 lg:left-0 opacity-40 mix-blend-screen max-w-full" src="/clikkle/images/bgs/startups/bg-left.png" alt="" />
                <img className="e-bg-right-mobile absolute right-0 lg:right-0 opacity-40 mix-blend-screen max-w-full" src="/clikkle/images/bgs/startups/bg-right.png" alt="" />
            </div>

            <div className="web-big-padding-section relative overflow-hidden z-10 w-full pt-20">
                <div className="relative py-10 w-full">
                    <div className="web-big-padding-section-level-2 e-u-margin-block-128-desktop w-full">
                        <section className="container mx-auto pb-0 px-4 md:px-6">
                            <div className="web-hero mx-auto" style={{ '--hero-max-inline-size': '49.375rem', '--hero-gap': '1.125rem' } as any}>
                                <h1 className="text-display md:text-6xl lg:text-[72px] font-aeonik-pro text-white leading-tight">
                                    Build your startup with Clikkle
                                </h1>
                                <p className="text-lg md:text-xl text-white/60 font-medium max-w-[640px] e-u-padding-inline-32-desktop mx-auto mt-4 leading-relaxed">
                                    The Clikkle Startups Program supports your startup with an all-in-one
                                    development platform for you to build your products. You will receive
                                    Cloud credits and a discount for Clikkle's paid plans.
                                </p>
                                <Button 
                                    variant="outline"
                                    className="mx-auto mt-8 !border-transparent !bg-white !text-black hover:!bg-white/90"
                                    onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Apply now
                                </Button>
                            </div>
                        </section>
                    </div>

                    <div className="web-big-padding-section-level-2 e-u-padding-block-start-48-mobile e-u-padding-block-start-80-desktop e-u-margin-block-end-80-mobile">
                        <section className="container mx-auto px-4 md:px-6 mt-20">
                            <ul className="web-u-flex-vertical-mobile e-u-gap-64-mobile grid grid-cols-1 gap-12 sm:gap-20 md:grid-cols-2 lg:grid-cols-4">
                                <li className="mx-auto flex flex-col items-center gap-4 group">
                                    <img src="/clikkle/images/icons/gradients/backend.svg" width="48" height="48" alt="" className="group-hover:scale-110 transition-transform duration-300" />
                                    <div className="flex flex-col gap-2 text-center">
                                        <h2 className="text-xl font-aeonik-pro text-white">Up to 80% discounts</h2>
                                        <p className="text-base text-white/60 font-medium leading-relaxed">
                                            Get discounts on Clikkle’s paid plans. We offer up to 80% on both Pro and Scale.
                                        </p>
                                    </div>
                                </li>
                                <li className="mx-auto flex flex-col items-center gap-4 group">
                                    <img src="/clikkle/images/icons/gradients/cloud-credit.svg" width="48" height="48" alt="" className="group-hover:scale-110 transition-transform duration-300" />
                                    <div className="flex flex-col gap-2 text-center">
                                        <h2 className="text-xl font-aeonik-pro text-white">Cloud credits</h2>
                                        <p className="text-base text-white/60 font-medium leading-relaxed">
                                            Save on development and cloud costs and reduce risk at an early stage.
                                        </p>
                                    </div>
                                </li>
                                <li className="mx-auto flex flex-col items-center gap-4 group">
                                    <img src="/clikkle/images/icons/gradients/support.svg" width="48" height="48" alt="" className="group-hover:scale-110 transition-transform duration-300" />
                                    <div className="flex flex-col gap-2 text-center">
                                        <h2 className="text-xl font-aeonik-pro text-white">Priority support</h2>
                                        <p className="text-base text-white/60 font-medium leading-relaxed">
                                            Get community support and priority support from the Clikkle team.
                                        </p>
                                    </div>
                                </li>
                                <li className="mx-auto flex flex-col items-center gap-4 group">
                                    <img src="/clikkle/images/icons/gradients/swag.svg" width="48" height="48" alt="" className="group-hover:scale-110 transition-transform duration-300" />
                                    <div className="flex flex-col gap-2 text-center">
                                        <h2 className="text-xl font-aeonik-pro text-white">Founder swag</h2>
                                        <p className="text-base text-white/60 font-medium leading-relaxed">
                                            Get community support and dedicated email support from the Clikkle team.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>

                <div className="web-white-section relative border-b border-dashed border-black/8 pt-10 bg-[#EDEDF0] z-20">
                    <DevelopersToolkit />
                </div>

                <Benefits theme="light" className="z-20 border-b border-dashed border-black/8" />

                <CaseStudiesLight />

                <div id="form" className="web-white-section overflow-hidden bg-[#EDEDF0] mb-20 z-20">
                    <div className="relative pt-20 pb-8 md:pt-40 md:pb-30">
                        <div className="container mx-auto px-4 md:px-6 relative">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 max-w-6xl mx-auto items-start">
                                <div>
                                    <section className="flex flex-col gap-5 max-w-[400px]">
                                        <h4 className="text-display md:text-4xl lg:text-[40px] font-aeonik-pro text-[#19191C] leading-tight">
                                            Join the Clikkle Startups program
                                        </h4>
                                        <p className="text-lg text-[#434347] font-medium leading-relaxed">
                                            We support VC backed tech startups that have been
                                            established within the last decade with:
                                        </p>
                                        <div className="flex flex-col gap-4 mt-2">
                                            <div className="flex gap-4">
                                                <img className="mt-1 self-start" src="/clikkle/images/icons/gradients/v-icon.svg" alt="yes" width="20" height="20" />
                                                <p className="text-lg font-medium text-[#19191C]">Clikkle Cloud Pro for 12 months</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <img className="mt-1 self-start" src="/clikkle/images/icons/gradients/v-icon.svg" alt="yes" width="20" height="20" />
                                                <p className="text-lg font-medium text-[#19191C]">Premium email support as part of Pro</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-black/5 relative overflow-hidden">
                                     <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#85DBD8]/20 blur-3xl rounded-full pointer-events-none" />
                                     
                                    {submitted ? (
                                        <div className="max-w-[380px] mx-auto flex flex-col gap-4 text-center items-center py-12 relative z-10">
                                            <div className="flex items-center justify-center gap-3">
                                                <img className="shrink-0 w-8 h-8" src="/clikkle/images/icons/colored/check.svg" alt="" />
                                                <h6 className="text-2xl font-aeonik-pro text-[#19191C]">Thank you for your submission</h6>
                                            </div>
                                            <p className="text-lg text-[#434347] font-medium">Our team will review your application and get back to you soon.</p>
                                            <Button onClick={resetForm} variant="outline" className="mx-auto mt-6 w-full md:w-fit">Back to form</Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-[#19191C]">Full name</label>
                                                <input required className="web-input-text bg-white" type="text" placeholder="Walter O'Brien"
                                                       value={personName} onChange={e => setPersonName(e.target.value)} />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-[#19191C]">Email address</label>
                                                <input required className="web-input-text bg-white" type="email" placeholder="walter@company.com"
                                                       value={personEmail} onChange={e => setPersonEmail(e.target.value)} />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-[#19191C]">Company name</label>
                                                <input required className="web-input-text bg-white" type="text" placeholder="Company Inc."
                                                       value={companyName} onChange={e => setCompanyName(e.target.value)} />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-[#19191C]">Company website</label>
                                                <input required className="web-input-text bg-white" type="url" placeholder="https://company.com"
                                                       value={companyUrl} onChange={e => setCompanyUrl(e.target.value)} />
                                            </div>

                                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 mt-2">
                                                <div className="flex flex-col gap-2 max-w-[240px]">
                                                    <p className="text-xs text-[#434347] font-medium leading-relaxed">
                                                        This form is protected by reCAPTCHA, and the Google{' '}
                                                        <a href="https://policies.google.com/privacy" className="text-[#2D63FF] hover:underline">Privacy Policy</a> and{' '}
                                                        <a href="https://policies.google.com/terms" className="text-[#2D63FF] hover:underline">Terms of Service</a> apply.
                                                    </p>
                                                    {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
                                                </div>
                                                <Button type="submit" disabled={submitting} variant="outline" className="w-full sm:w-auto !border-transparent !bg-[var(--bg-primary)] !text-white !shadow-none hover:!border-transparent hover:!bg-black hover:!text-white">
                                                    {submitting ? 'Submitting...' : 'Get Started'}
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
            </div>
        </main>
    );
}
