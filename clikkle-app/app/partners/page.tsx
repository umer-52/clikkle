'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import './partners.css';
import { cn } from '@/lib/utils';
import { Github, Twitter, Linkedin, Youtube, Check } from 'lucide-react';

const Puzzle = () => {
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="w-full overflow-hidden max-w-[460px] mx-auto md:max-w-none">
            <svg fill="none" className="h-full w-full" viewBox="0 0 460 525" xmlns="http://www.w3.org/2000/svg">
                <g className={cn('gridLines', animate && 'active')}>
                    <path d="m286.44 85.681-160.21 92.5" stroke="#fff" strokeDasharray="4 4" strokeOpacity=".06" style={{ '--offset-to': 500 } as any} />
                    <path d="m299.19 107.76-160.21 92.5" stroke="#fff" strokeDasharray="4 4" strokeOpacity=".06" style={{ '--offset-to': -500 } as any} />
                    <path d="m285.62 374.25-98.727 57" stroke="#fff" strokeDasharray="4 4" strokeOpacity=".06" style={{ '--offset-to': 500 } as any} />
                    <path d="m260.12 360.1-85.736 49.5" stroke="#fff" strokeDasharray="4 4" strokeOpacity=".06" style={{ '--offset-to': -500 } as any} />
                    <path d="m185.27 374.45-10.392 6" stroke="#fff" strokeDasharray="4 4" strokeOpacity=".06" style={{ '--offset-to': 500 } as any} />
                    <path d="m186.74 287-12.125 7" stroke="#fff" strokeDasharray="4 4" strokeOpacity=".06" style={{ '--offset-to': -500 } as any} />
                    <path d="m261.91 215.2-12.124 7" stroke="#fff" strokeDasharray="4 4" strokeOpacity=".06" style={{ '--offset-to': 500 } as any} />
                    <path d="m286.07 143.05-12.125 7" stroke="#fff" strokeDasharray="4 4" strokeOpacity=".06" style={{ '--offset-to': 500 } as any} />
                </g>
                <g className={cn('leftPiece', animate && 'active')}>
                    <g className={cn('logo', animate && 'active')}>
                        <path d="m114.04 273.65-1.42 22.021-47.768 27.579c-13.917 8.035-25.497 6.194-31.149-3.218-0.822-1.368-1.519-2.898-2.079-4.582-1.098-3.297-1.672-7.185-1.637-11.608l0.384-5.953c0.122-1.052 0.276-2.114 0.457-3.18 0.37-2.187 0.858-4.401 1.455-6.623 5.655-21.062 21.038-42.984 38.25-52.922 17.212-9.937 30.846-4.768 34.117 11.142l-20.425 11.792c-2.965-4.09-8.512-4.723-15.112-0.912-6.6 3.81-12.661 11.145-16.403 19.107-1.14 2.422-2.063 4.9-2.722 7.354-0.585 2.176-0.961 4.332-1.095 6.414-0.407 6.312 1.492 10.693 4.867 12.609 3.126 1.782 7.519 1.442 12.512-1.441l47.768-27.579z" fill="var(--color-left-fill)" />
                        <path d="m115.85 245.62-1.42 22.022-34.868 20.131c3.893-6.112 6.526-13.11 6.933-19.422 0.134-2.082 0.018-3.954-0.32-5.597l29.676-17.134z" fill="var(--color-left-fill)" />
                    </g>
                    <path d="m199.59 423.72-24.925-14.388-174.41 100.7 24.914 14.386 174.42-100.7z" fill="var(--color-left-fill)" fillOpacity=".08" />
                    <path d="m25.165 523.94 173.6-100.22-24.098-13.911-173.59 100.22 24.087 13.908z" stroke="var(--color-left-stroke)" strokeWidth=".82664" />
                    <path d="m199.59 423.72-5e-3 -28.776-24.914-14.385-6e-3 28.773 24.925 14.388z" fill="var(--color-left-fill)" fillOpacity=".08" />
                    <path d="m175.08 409.1 24.099 13.911-5e-3 -27.822-24.088-13.908-6e-3 27.819z" stroke="var(--color-left-stroke)" strokeWidth=".82664" />
                    <path d="m174.67 179.17 24.916-14.395-24.917-14.374 1e-3 28.769z" fill="var(--color-left-fill)" fillOpacity=".08" />
                    <path d="m175.08 151.12 1e-3 27.337 23.676-13.678-23.677-13.659z" stroke="var(--color-left-stroke)" strokeWidth=".82664" />
                    <path d="m199.58 279.86 74.747-43.155-24.914-14.385-74.754 43.159 24.921 14.381z" fill="var(--color-left-fill)" fillOpacity=".08" />
                    <path d="m175.49 265.48 24.094 13.904 73.92-42.678-24.087-13.908-73.927 42.682z" stroke="var(--color-left-stroke)" strokeWidth=".82664" />
                    <path d="m249.42 222.32 24.914 14.385 4e-3 -86.311-24.918-14.392v86.318z" fill="var(--color-left-fill)" fillOpacity=".08" />
                    <path d="m249.83 136.72v85.363l24.088 13.908 4e-3 -85.356-24.092-13.915z" stroke="var(--color-left-stroke)" strokeWidth=".82664" />
                    <path d="m0.25195 510.03 174.41-100.7 6e-3 -28.773-74.754 43.159v-86.318l74.754-43.159-8e-3 -28.765 74.754-43.159v-86.318l-74.75 43.166-1e-3 -28.769-174.41 100.7-1e-3 258.94z" fill="var(--color-left-fill)" fillOpacity=".08" />
                    <path d="m174.25 409.1 6e-3 -27.818-74.133 42.801-0.6199 0.358v-87.273l0.206-0.119 74.548-43.04-8e-3 -28.526-1e-3 -0.238 0.207-0.12 74.547-43.04 1e-3 -85.363-74.13 42.808-0.62 0.358v-0.716l-1e-3 -28.053-173.59 100.22-0.001999 257.98 173.59-100.22z" stroke="var(--color-left-stroke)" strokeWidth=".82664" />
                    <path d="m124.83 351.79 74.762-43.145-24.922-14.4-74.754 43.159 24.914 14.386z" fill="var(--color-left-fill)" fillOpacity=".08" />
                    <path d="m100.74 337.4 24.087 13.908 73.936-42.667-24.096-13.923-73.927 42.682z" stroke="var(--color-left-stroke)" strokeWidth=".82664" />
                    <path d="m99.92 423.72 24.92-14.387-6e-3 -57.545-24.914-14.386v86.318z" fill="var(--color-left-fill)" fillOpacity=".08" />
                    <path d="m124.42 352.03-24.088-13.908v84.886l24.094-13.91-6e-3 -57.068z" stroke="var(--color-left-stroke)" strokeWidth=".82664" />
                    <path d="m199.59 279.86 9e-3 28.783-24.923-14.399-8e-3 -28.765 24.922 14.381z" fill="var(--color-left-fill)" fillOpacity=".08" />
                    <path d="m175.09 294.01 24.095 13.922-9e-3 -27.828-24.094-13.904 8e-3 27.81z" stroke="var(--color-left-stroke)" strokeWidth=".82664" />
                </g>
                <g className={cn('rightPiece', animate && 'active')}>
                    <path d="m459.62 273.41 2e-3 -258.94-24.918-14.392 2e-3 258.94 24.914 14.385z" fill="var(--color-right-fill)" />
                    <path d="m435.12 258.78 24.088 13.908 2e-3 -257.98-24.092-13.915 2e-3 257.99z" stroke="var(--color-right-stroke)" strokeWidth=".82664" />
                    <path d="m260.29 359.72 7e-3 -28.773-74.754 43.159v-86.318l74.747-43.155 6e-3 -28.773 74.746-43.155 1e-3 -86.318-74.754 43.159-1e-3 -28.769 174.42-100.7 2e-3 258.94-174.42 100.7z" fill="var(--color-right-fill)" />
                    <path d="m185.96 373.39 74.134-42.801 0.62-0.358v0.716l-6e-3 28.057 173.59-100.22-3e-3 -257.99-173.59 100.22 1e-3 27.814 74.134-42.801 0.62-0.3579v87.273l-0.207 0.119-74.54 43.036-6e-3 28.534v0.239l-0.207 0.119-74.54 43.036v85.363z" stroke="var(--color-right-stroke)" strokeWidth=".82664" />
                    <path d="m185.54 374.11 24.914 14.385 49.834-28.771 6e-3 -28.774-74.754 43.16z" fill="var(--color-right-fill)" />
                    <path d="m259.87 359.48 6e-3 -27.819-73.513 42.444 24.087 13.908 49.42-28.533z" stroke="var(--color-right-stroke)" strokeWidth=".82664" />
                    <path d="m260.29 359.72 24.925 14.388 174.41-100.7-24.914-14.385-174.42 100.7z" fill="var(--color-right-fill)" />
                    <path d="m434.71 259.5-173.59 100.22 24.098 13.911 173.58-100.23-24.087-13.908z" stroke="var(--color-right-stroke)" strokeWidth=".82664" />
                    <path d="m260.29 129.55 24.926 14.388 49.826-28.767 2e-3 -28.78-74.754 43.159z" fill="var(--color-right-fill)" />
                    <path d="m334.62 114.93 2e-3 -27.825-73.514 42.443 24.098 13.911 49.414-28.529z" stroke="var(--color-right-stroke)" strokeWidth=".82664" />
                    <g id="circles" className={cn('circles', animate && 'active')}>
                        <path d="m338.9 291.95c24.536-14.166 45.904-48.569 47.728-76.842 1.823-28.273-16.589-39.709-41.125-25.543-24.536 14.165-45.904 48.569-47.727 76.842-1.824 28.272 16.588 39.708 41.124 25.543z" fill="#fff" fillOpacity=".04" opacity=".2" stroke="#fff" strokeDasharray="4 4" style={{ '--offset-to': 500 } as any} />
                        <path d="m339.17 274.87c16.454-9.499 30.783-32.57 32.006-51.529 1.223-18.96-11.124-26.629-27.578-17.129-16.453 9.499-30.783 32.57-32.005 51.529-1.223 18.959 11.124 26.628 27.577 17.129z" fill="#fff" fillOpacity=".04" opacity=".4" stroke="#fff" strokeDasharray="4 4" style={{ '--offset-to': -500 } as any} />
                        <path d="m338.64 256.96c8.082-4.667 15.121-16 15.722-25.313 0.6-9.313-5.465-13.08-13.547-8.414s-15.121 15.999-15.722 25.312c-0.601 9.314 5.464 13.081 13.547 8.415z" fill="#fff" fillOpacity=".02" stroke="#fff" strokeDasharray="4 4" style={{ '--offset-to': 250 } as any} />
                    </g>
                </g>
            </svg>
        </div>
    );
};

const Hero = () => (
    <div className="grid-bg border-dashed border-black/8 relative box-content flex items-center border-b px-4 py-12 md:py-20 lg:px-8 xl:px-16 bg-[#19191C]">
        <div className="container mx-auto grid grid-cols-1 place-items-center gap-16 md:grid-cols-2 relative z-10">
            <div className="flex max-w-lg flex-col gap-8 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-aeonik-fono tracking-loose text-sm font-bold uppercase text-white">
                        Partners Program<span className="text-[#FD366E]">_</span>
                    </span>
                </div>
                <h1 className="font-aeonik-pro text-display md:text-5xl lg:text-6xl text-white text-pretty leading-tight">
                    Boost businesses with Clikkle<span className="text-[#FD366E]">_</span>
                </h1>
                <p className="text-white/60 text-lg md:text-xl font-medium text-pretty leading-relaxed">
                    Join the Clikkle Partners program and grow your business. Deliver powerful
                    solutions to clients, increase revenue, and expand your reach.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row mt-4 justify-center md:justify-start">
                    <Button
                        variant="outline"
                        className="w-full sm:w-fit !border-transparent !bg-white !text-black hover:!bg-white/90"
                        onClick={() => document.getElementById('become-a-partner')?.scrollIntoView({ behavior: 'smooth' })}>
                        Become a Partner
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-full sm:w-fit">
                        Find a Partner
                    </Button>
                </div>
            </div>
            <Puzzle />
        </div>
    </div>
);

const Ways = () => {
    const items = [
        {
            title: 'Experts',
            description: 'For agencies, consultancies, freelancers, and integrators who want to provide a scalable backend solution for their clients. Partner with Clikkle to provide a highly custom solution with the newest technology.',
            label: 'Find a Partner'
        },
        {
            title: 'Integrations',
            description: 'For innovative software companies striving to create solutions that integrate seamlessly with our platform. Partner with Clikkle to create a better developer experience.',
            label: 'Find an Integration'
        }
    ];

    return (
        <div className="container mx-auto px-4 md:px-6 space-y-12 py-16 md:py-24">
            <h2 className="text-[#19191C] font-aeonik-pro text-display md:text-4xl lg:text-[40px] text-center">Ways to partner</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                {items.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-5 p-8 md:p-10 rounded-3xl bg-white shadow-sm border border-black/5 relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FD366E]/5 rounded-full blur-3xl group-hover:bg-[#FD366E]/10 transition-colors pointer-events-none" />
                        <h2 className="text-[#19191C] font-aeonik-pro text-2xl font-medium relative z-10">{item.title}</h2>
                        <p className="text-[#434347] text-lg font-medium leading-relaxed mb-4 relative z-10">{item.description}</p>
                        <Button variant="outline" className="mt-auto w-fit relative z-10">
                            {item.label}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Benefits = () => {
    const items = [
        { title: 'Co-marketing', description: 'We will have a dedicated partner catalog, an official partner badge, and other visibility opportunities.', icon: '/clikkle/images/partners/icons/co-marketing.svg' },
        { title: 'Training', description: 'We provide in-depth training and workshops to help you master Clikkle for your clients.', icon: '/clikkle/images/partners/icons/training.svg' },
        { title: 'Support', description: 'You will get access to the Clikkle engineering team to get the support you need.', icon: '/clikkle/images/partners/icons/support.svg' },
        { title: 'Early access', description: 'You will get early access to new features and products and the ability to influence our roadmap.', icon: '/clikkle/images/partners/icons/early-access.svg' },
        { title: 'Innovation', description: "Empower your team and elevate your customers' experiences with the newest technology.", icon: '/clikkle/images/partners/icons/revenue.svg' },
        { title: 'Discounts', description: 'Volume discounts are available in case you handle the bill for your clients.', icon: '/clikkle/images/partners/icons/discounts.svg' }
    ];

    const whys = [
        { title: 'Developer experience', description: 'Clikkle is built for and by developers, with a strong focus on your experience. Never worry about scaling or security again.', icon: '/clikkle/images/partners/icons/experience.svg' },
        { title: 'Ship faster', description: 'Clikkle reduces the time and resources spent building a backend infrastructure from scratch.', icon: '/clikkle/images/partners/icons/ship.svg' },
        { title: 'All in one platform', description: 'Everything you need to develop, deploy, and scale your applications.', icon: '/clikkle/images/partners/icons/expert.svg' }
    ];

    return (
        <div className="bg-[#19191C] text-white">
            <div className="flex flex-col items-center border-b border-dashed border-white/10 py-16 md:py-24">
                <div className="mb-16 flex flex-col gap-3 text-center px-4">
                    <span className="font-aeonik-fono text-sm font-bold uppercase tracking-widest text-[#FD366E]">
                        Benefits<span className="text-white">_</span>
                    </span>
                    <h2 className="font-aeonik-pro text-display md:text-5xl lg:text-[40px]">Growing together</h2>
                </div>

                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-dashed border-white/10 [&>div]:border-b [&>div]:border-dashed [&>div]:border-white/10 md:[&>div:nth-child(2n)]:border-l lg:[&>div:nth-child(2n)]:border-l-0 lg:[&>div:nth-child(n)]:border-l [&>div:nth-child(2n)]:border-l-0 lg:[&>div:nth-child(1)]:border-l-0 lg:[&>div:nth-child(4)]:border-l-0 lg:[&>div:nth-child(n+4)]:border-b-0 md:[&>div:nth-child(n+5)]:border-b-0">
                        {items.map((item, i) => (
                            <div key={i} className="bg-[#19191C] flex flex-col gap-4 p-8 relative group hover:bg-white/5 transition-colors">
                                <img src={item.icon} alt={item.title} className="w-12 h-12" />
                                <h3 className="font-aeonik-pro text-2xl font-medium mt-2">{item.title}</h3>
                                <p className="text-white/60 text-lg leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Button variant="outline" className="mx-auto mt-16 !border-transparent !bg-white !text-black hover:!bg-white/90"
                    onClick={() => document.getElementById('become-a-partner')?.scrollIntoView({ behavior: 'smooth' })}>
                    Become a partner
                </Button>
            </div>

            <div className="flex flex-col items-center py-16 md:py-24">
                <div className="mb-16 flex flex-col gap-2 text-center px-4">
                    <h2 className="font-aeonik-pro text-display md:text-5xl lg:text-[40px]">Why Clikkle?</h2>
                </div>

                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-dashed border-white/10 [&>div]:border-b [&>div]:border-dashed [&>div]:border-white/10 md:[&>div]:border-b-0 md:[&>div:nth-child(n+2)]:border-l">
                        {whys.map((why, i) => (
                            <div key={i} className="bg-[#19191C] flex flex-col items-center text-center gap-4 p-8 relative group hover:bg-white/5 transition-colors">
                                <img src={why.icon} alt={why.title} className="w-12 h-12" />
                                <h3 className="font-aeonik-pro text-2xl font-medium mt-2">{why.title}</h3>
                                <p className="text-white/60 text-base leading-relaxed">{why.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Button variant="outline" className="mx-auto mt-16 !border-transparent !bg-white !text-black hover:!bg-white/90"
                    onClick={() => document.getElementById('become-a-partner')?.scrollIntoView({ behavior: 'smooth' })}>
                    Become a partner
                </Button>
            </div>
        </div>
    );
};

const Partners = () => {
    const [animate, setAnimate] = useState(false);
    const observerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const tiers = [
        { title: 'Platinum', badge: '/clikkle/images/partners/badges/platinum.svg' },
        { title: 'Gold', badge: '/clikkle/images/partners/badges/gold.svg' },
        { title: 'Silver', badge: '/clikkle/images/partners/badges/silver.svg' }
    ];

    return (
        <div ref={observerRef} className="relative flex items-center justify-center border-y border-dashed border-black/8 bg-[#EDEDF0] py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 top-0 right-0 z-0 block h-full pointer-events-none" style={{ background: 'radial-gradient(circle at 120% -40%, hsla(343, 98%, 60%, 0.1) 0px, transparent 40%)' }} />

            <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl flex w-full flex-col items-center justify-between gap-16 lg:flex-row">
                <div className="flex flex-col gap-6 lg:max-w-xl text-center lg:text-left">
                    <h2 className="font-aeonik-pro text-display md:text-5xl lg:text-[40px] text-[#19191C]">Partner Tiers</h2>
                    <p className="text-[#434347] font-medium text-lg leading-relaxed">
                        As your business grows, so do the opportunities with Clikkle. Our Partner
                        Program is designed to evolve with you, offering flexible tiers that adapt to
                        your unique needs and goals. Together, we'll build a scalable partnership that
                        ensures long-term success in a competitive market.
                    </p>

                    <Button 
                        variant="outline"
                        className="mt-4 w-full sm:w-auto mx-auto lg:mx-0 !border-transparent !bg-[#19191C] !text-white hover:!border-transparent hover:!bg-black hover:!text-white"
                        onClick={() => document.getElementById('become-a-partner')?.scrollIntoView({ behavior: 'smooth' })}>
                        Become a Partner
                    </Button>
                </div>

                <div className="mask relative w-full lg:w-auto flex flex-col items-center px-4" style={{ '--mask-height': '150px' } as any}>
                    {tiers.map(({ title, badge }, i) => (
                        <div
                            key={i}
                            className={cn('relative flex h-fit w-full justify-center max-w-[280px]', animate ? 'animate-card-in opacity-100' : 'opacity-0')}
                            style={{ 
                                zIndex: tiers.length - i, 
                                animationDelay: `${i * 0.1}s`,
                                marginBottom: i === tiers.length - 1 ? 0 : `-${Math.max(32, Math.min(80, i * 40))}px`,
                                transform: `scale(${1 - i * 0.15})`
                            }}
                        >
                            <img src={badge} alt={`${title} Badge`} className="max-w-full drop-shadow-xl" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SubmissionForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyUrl, setCompanyUrl] = useState('');
    const [message, setMessage] = useState('');
    
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 800);
    };

    const list = [
        'Grow your business',
        'Work with the latest technology',
        'Deliver your clients a great experience'
    ];

    return (
        <div id="become-a-partner" className="relative -mb-[6rem] flex min-h-[75vh] flex-col items-center justify-center overflow-hidden bg-[#19191C] py-24 px-4 md:px-6">
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at -15% -30%, hsla(343, 98%, 60%, 0.15) 0px, transparent 50%), radial-gradient(circle at 120% 125%, hsla(177, 53%, 69%, 0.15) 0px, transparent 50%)' }} />

            {!submitted ? (
                <div className="relative z-10 container mx-auto max-w-6xl box-border flex w-full flex-col justify-between gap-12 lg:gap-24 md:flex-row items-center">
                    <div className="flex max-w-md flex-col gap-6 text-center md:text-left">
                        <h2 className="text-display md:text-5xl lg:text-[56px] font-aeonik-pro text-white leading-tight">Become a Partner</h2>
                        <p className="text-lg text-white/60 font-medium leading-relaxed">
                            Our team will review your application and follow up to ensure we're a perfect fit.
                        </p>

                        <ul className="space-y-4 mt-4 mx-auto md:mx-0 text-left">
                            {list.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-white text-lg font-medium">
                                    <span className="mt-1 flex items-center justify-center size-6 rounded-full bg-[#FD366E]/20 text-[#FD366E]">
                                        <Check className="w-4 h-4" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-xl bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-black/5">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-[#19191C]">Full name</label>
                                <input required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FD366E] focus:ring-1 focus:ring-[#FD366E] outline-none transition-all" 
                                    type="text" placeholder="Walter O'Brien" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-[#19191C]">Email address</label>
                                <input required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FD366E] focus:ring-1 focus:ring-[#FD366E] outline-none transition-all" 
                                    type="email" placeholder="walter@company.com" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-[#19191C]">Company name</label>
                                <input required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FD366E] focus:ring-1 focus:ring-[#FD366E] outline-none transition-all" 
                                    type="text" placeholder="Acme Inc." value={companyName} onChange={e => setCompanyName(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-[#19191C]">Company URL</label>
                                <input className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FD366E] focus:ring-1 focus:ring-[#FD366E] outline-none transition-all" 
                                    type="url" placeholder="https://" value={companyUrl} onChange={e => setCompanyUrl(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-2 sm:col-span-2">
                                <label className="text-sm font-medium text-[#19191C]">Any other details you'd like to share?</label>
                                <textarea required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FD366E] focus:ring-1 focus:ring-[#FD366E] outline-none transition-all min-h-[120px] resize-none" 
                                    placeholder="Your message..." value={message} onChange={e => setMessage(e.target.value)} />
                            </div>
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 mt-2 pt-2 border-t border-black/5">
                            <p className="text-xs text-[#434347] font-medium leading-relaxed max-w-[280px] text-center sm:text-left">
                                This form is protected by reCAPTCHA, and the Google Privacy Policy and Terms of Service apply.
                            </p>
                            <Button type="submit" disabled={submitting} variant="outline" className="w-full sm:w-auto !border-transparent !bg-[#19191C] !text-white hover:!border-transparent hover:!bg-black hover:!text-white">
                                {submitting ? 'Submitting...' : 'Submit application'}
                            </Button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="relative z-10 container mx-auto flex max-w-sm flex-col gap-6 text-center bg-white p-12 rounded-[2rem] shadow-xl">
                    <div className="flex flex-col items-center gap-4">
                        <div className="size-16 bg-[#19191C] text-white rounded-full flex items-center justify-center mb-2">
                            <Check className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl text-[#19191C] font-aeonik-pro">Thank you for applying</h2>
                        <p className="text-[#434347] font-medium leading-relaxed">
                            Our team will review your application and follow up to ensure we're a perfect fit.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default function PartnersPage() {
    return (
        <main className="flex flex-col flex-1 bg-white min-h-screen pt-20">
            <Hero />
            <Ways />
            <Benefits />
            <Partners />
            <SubmissionForm />
        </main>
    );
}
