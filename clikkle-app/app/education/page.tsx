'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { SiteFooter } from '@/components/site-footer';
import { withBasePath } from '@/lib/basepath';
import './education.css';

const asset = (path: string) => withBasePath(path);

/** Mirrors `getAppwriteDashboardUrl('/console/education')` — Clikkle Cloud education signup. */
const EDUCATION_CONSOLE_HREF = 'https://cloud.clikkle.com/console/education';
const DISCORD_HREF = 'https://discord.gg/clikkle';

const FAQ_ITEMS: { question: string; answer: string }[] = [
    {
        question: 'What is the Clikkle Education Program?',
        answer: "If you're a student with the GitHub Student Developer Pack, you can access the Clikkle Education plan for free while in school to help you build your next project.",
    },
    {
        question: 'What does the Education plan offer?',
        answer: 'The Education plan has equal usage limits as the Clikkle Pro plan (minus email support). We also have a special channel for Education program members in the Clikkle Discord server for support, which will feature exclusive events, hackathons, etc.',
    },
    {
        question: 'Who is eligible to apply?',
        answer: "Any student enrolled in the GitHub Student Developer Pack can apply for free and receive Clikkle's Education plan until graduation.",
    },
    {
        question: 'How do I apply?',
        answer: "If you're already enrolled in the GitHub Student Developer Pack, click the 'Sign up' button on this page and fill in your details. If you're not enrolled with GitHub Education yet, first apply for the GitHub Student Developer Pack, then come back and sign up to Clikkle Cloud here.",
    },
    {
        question: 'What happens after I sign up?',
        answer: 'Clikkle Cloud will automatically verify your GitHub Student Developer Pack membership and apply the Education plan to your account. You can then start using Clikkle right away.',
    },
    {
        question: "I'm already a Clikkle user. Can I still apply?",
        answer: 'This program is open to all Clikkle users who are verified members of the GitHub Student Developer Pack.',
    },
    {
        question: 'How long do the Clikkle Education program benefits last?',
        answer: 'Your access to the Clikkle Education plan is valid until you finish your studies and graduate from the GitHub Student Developer Pack.',
    },
    {
        question: 'Does the Education plan include any add-ons?',
        answer: 'No, the Education plan does not cover any add-ons.',
    },
    {
        question: 'Can I use the Education plan for commercial purposes?',
        answer: 'No, you may not use the Education plan for any non-educational or commercial purposes.',
    },
];

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const Logos = () => (
    <div className="flex items-center justify-center gap-4 divide-x-2 divide-white/5">
        <div className="flex items-center gap-2 pr-4">
            <img src={asset('/2-version/Clikkle core (V1 White Text).png')} alt="Clikkle" className="h-8 w-auto mix-blend-screen" />
            <span className="text-xl font-bold tracking-tight text-white font-display">Clikkle</span>
        </div>
        <div className="pl-4">
            <svg width="75" height="20" viewBox="0 0 100 24" fill="none" className="h-8 w-auto text-white" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path
                    fill="currentColor"
                    d="M13.0712 0C6.22769 0 0.699219 5.49518 0.699219 12.2975C0.699219 17.7393 4.24173 22.3542 9.15295 23.9814C9.7702 24.0881 10.0117 23.7146 10.0117 23.3945C10.0117 23.1011 9.9849 22.1408 9.9849 21.1004C6.87178 21.6606 6.06667 20.3535 5.82513 19.66C5.69094 19.3132 5.07369 18.2195 4.56378 17.926C4.13438 17.686 3.51713 17.1258 4.53694 17.0991C5.50308 17.0724 6.20085 17.9794 6.44239 18.3528C7.56955 20.2201 9.34081 19.6866 10.0386 19.3665C10.1459 18.5662 10.468 18.0327 10.8169 17.7126C8.05262 17.3925 5.18104 16.3522 5.18104 11.6306C5.18104 10.2968 5.66411 9.17642 6.44239 8.3228C6.3082 8.00269 5.87881 6.74894 6.57657 5.06837C6.57657 5.06837 7.62323 4.74827 9.9849 6.32213C10.9779 6.05537 12.0245 5.89532 13.0712 5.89532C14.1178 5.89532 15.1645 6.0287 16.1575 6.32213C18.5191 4.72159 19.5658 5.06837 19.5658 5.06837C20.2367 6.74894 19.8073 8.02937 19.7 8.3228C20.4783 9.17642 20.9613 10.2701 20.9613 11.6306C20.9613 16.3522 18.0629 17.3925 15.2987 17.7126C15.7549 18.0861 16.1306 18.833 16.1306 19.9801C16.1306 21.634 16.1038 22.9411 16.1038 23.3679C16.1038 23.688 16.3453 24.0881 16.9626 23.9547C21.847 22.3275 25.3895 17.7126 25.3895 12.2708C25.47 5.49518 19.9147 0 13.0712 0Z"
                />
            </svg>
        </div>
    </div>
);

const Hero = () => {
    const items = [
        {
            label: 'Develop your skills',
            description: 'Get access to Clikkle Cloud and build your entire backend with Clikkle.',
            icon: asset('/images/education/checkmark.svg'),
        },
        {
            label: 'Build with any framework',
            description: "Get free access to build with Clikkle's Education plan, valid throughout your student career.",
            icon: asset('/images/education/beaker.svg'),
        },
        {
            label: 'Join a vibrant community',
            description: 'Get community support in the Clikkle Discord server.',
            icon: asset('/images/education/chat-icon.svg'),
        },
    ];

    return (
        <>
            <section className="gridLine horizontal relative mt-8 grid h-full min-h-[50vh] w-full place-items-center md:mt-32 md:grid-cols-[10%_1fr_10%] lg:grid-cols-[20%_1fr_20%] xl:grid-cols-3">
                <div className="pattern relative hidden h-full w-full md:block" />
                <div className="gridLine vertical from-accent/5 relative flex h-full w-full flex-1 basis-[calc(100vw_/_3)] flex-col items-center justify-center gap-8 to-transparent px-8 py-10 text-center md:bg-gradient-to-t">
                    <Logos />
                    <h1 className="font-aeonik-pro text-title text-white">Build your next project with Clikkle</h1>
                    <p className="text-secondary font-medium">
                        Join the Clikkle Education program in collaboration with the GitHub Student Developer Pack. Students access
                        Clikkle Cloud for free throughout their studies.
                    </p>
                    <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                        <Button className="!w-full md:!w-fit" asChild>
                            <Link href={EDUCATION_CONSOLE_HREF} target="_blank" rel="noopener noreferrer">
                                Sign up now
                            </Link>
                        </Button>
                        <Button variant="secondary" className="!w-full !whitespace-normal md:!w-fit" asChild>
                            <Link href="https://github.com/education" target="_blank" rel="noopener noreferrer">
                                <span className="web-icon-github !text-white web-btn-icon" aria-hidden />
                                GitHub Education
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="pattern relative hidden h-full w-full md:block" />
            </section>
            <div className="container grid min-h-40 place-content-center items-start gap-16 py-24 text-center md:grid-cols-3">
                {items.map(({ label, description, icon }) => (
                    <div key={label} className="flex flex-col justify-center">
                        <img src={icon} alt="" className="mx-auto mb-3 size-12" />
                        <h3 className="text-primary font-aeonik-pro text-lg">{label}</h3>
                        <p className="text-secondary">{description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

const Kickstart = () => (
    <div className="container grid min-h-80 place-content-center items-center gap-8 py-20 md:grid-cols-2 md:py-40">
        <div className="text-secondary space-y-8 md:max-w-[75%]">
            <h2 className="text-primary font-aeonik-pro text-subtitle">Kickstart your developer journey with Clikkle</h2>
            <p className="font-medium">
                Earn free access through GitHub Education to build your next project on Clikkle Cloud. Sign up for the GitHub Student
                Developer Pack to receive Clikkle Cloud for the duration of your studies.
            </p>
            <p className="font-medium">
                This credit is available only for users who are verified through the GitHub program as students. The plan is valid
                until you graduate from GitHub Education.
            </p>
        </div>
        <img src={asset('/images/education/kickstart.svg')} alt="Kickstart" className="mx-auto" />
    </div>
);

const GetStarted = () => {
    const items = [
        {
            label: 'Enroll to the GitHub Student Developer Pack',
            description: 'Sign up for the Student Developer pack and explore the benefits.',
            cta: { url: 'https://github.com/education', label: 'Enroll on GitHub Education', icon: 'github' as const },
        },
        {
            label: 'Access the Education plan',
            description:
                'Create your Clikkle account through the Education program sign up page. Once verified, the Education plan will be applied to your account.',
            cta: { url: EDUCATION_CONSOLE_HREF, label: 'Sign up' },
        },
        {
            label: 'Start from our docs',
            description: 'Once your Clikkle account is created, go to our Docs and get started with Clikkle Cloud.',
            cta: { url: '/docs', label: 'Go to Clikkle Docs' },
        },
    ];

    return (
        <div
            className={cn(
                'light border-smooth relative mt-10 min-h-80 border-t',
                'before:absolute before:top-0 before:left-0 before:z-0 before:block before:h-80 before:w-full before:bg-[radial-gradient(at_25%_0%,_hsla(221,_83%,_56%,_0.35)_0px,_transparent_73%,_transparent_100%)] md:before:w-1/2',
                'after:absolute after:top-0 after:right-0 after:z-0 after:hidden after:h-80 after:w-1/2 after:bg-[radial-gradient(at_100%_0%,_hsla(177,_53%,_69%,_0.6)_0px,_transparent_73%,_transparent_100%)] md:after:block',
            )}
        >
            <div className="relative z-10 container flex flex-col justify-center py-24">
                <h2 className="text-primary font-aeonik-pro text-subtitle">Get started today</h2>
                <div className="mt-12 grid gap-8 divide-y divide-black/8 rounded-2xl bg-white px-5 py-10 shadow-[-6px_8px_24px_rgba(0,_0,_0,_0.06),_0px_0px_0px_rgba(0,_0,_0,_0.06)] lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:divide-black/8">
                    {items.map((item, i) => (
                        <div key={item.label} className="group relative flex h-full flex-col gap-6 px-4 pb-8 last-of-type:pb-0 lg:pb-0">
                            <span className="education-step-badge text-eyebrow font-aeonik-fono text-white uppercase">Step {i + 1}</span>
                            <div className="flex flex-1 flex-col gap-2 font-medium">
                                <h3 className="text-primary text-pretty">{item.label}</h3>
                                <p className="text-secondary text-pretty">{item.description}</p>
                            </div>
                            <Button variant="secondary" className="text-accent mt-auto mb-0 !w-full md:!w-fit" asChild>
                                <Link href={item.cta.url} target="_blank" rel="noopener noreferrer">
                                    {item.cta.icon === 'github' ? <span className="web-icon-github web-btn-icon" aria-hidden /> : null}
                                    {item.cta.label}
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CommunitySupportChat = () => (
    <ul className="education-web-chat-list">
        <li className="education-web-chat-item is-user-a">
            <div className="education-web-chat-message">
                <div className="education-web-user-box">
                    <img
                        className="education-web-user-box-image"
                        src={asset('/images/community/avatars/walter.avif')}
                        height={40}
                        width={40}
                        alt="Avatar of Walter"
                    />
                    <div className="web-user-box-name flex gap-2">
                        <span className="text-sub-body font-medium text-primary">Walter O&apos;Brien</span>
                        <time className="text-caption text-secondary">8:32 AM</time>
                    </div>
                    <div className="web-user-box-content text-caption text-primary">
                        Hello devs! I am getting a CORS error when sending a request to the backend. Can you help me?
                    </div>
                </div>
            </div>
        </li>
        <li className="education-web-chat-item is-user-b">
            <div className="education-web-chat-message reply">
                <div className="education-web-user-box">
                    <img
                        className="education-web-user-box-image"
                        src={asset('/images/avatars/steven.avif')}
                        width={40}
                        height={40}
                        alt="Avatar of Steven"
                    />
                    <div className="web-user-box-name flex gap-2">
                        <span className="text-sub-body font-medium text-primary">Steven</span>
                        <time className="text-caption text-secondary">8:38 AM</time>
                    </div>
                    <div className="web-user-box-content text-caption text-primary">
                        Hey Walter! Is this the message you get{' '}
                        <Link className="web-link text-accent underline-offset-2 hover:underline" href="/blog/post/cors-error" target="_blank" rel="noopener noreferrer">
                            &quot;Access blocked by CORS policy&quot;
                        </Link>
                        ?
                    </div>
                </div>
            </div>
        </li>
        <li className="education-web-chat-item is-user-a">
            <div className="education-web-chat-message">
                <div className="education-web-user-box">
                    <img
                        className="education-web-user-box-image"
                        src={asset('/images/community/avatars/walter.avif')}
                        height={40}
                        width={40}
                        alt="Avatar of Walter"
                    />
                    <div className="web-user-box-name flex gap-2">
                        <span className="text-sub-body font-medium text-primary">Walter O&apos;Brien</span>
                        <time className="text-caption text-secondary">9:05 AM</time>
                    </div>
                    <div className="web-user-box-content text-caption text-primary">Yes!</div>
                </div>
            </div>
        </li>
        <li className="education-web-chat-item is-user-b">
            <div className="education-web-chat-message reply">
                <div className="education-web-user-box">
                    <img
                        className="education-web-user-box-image"
                        src={asset('/images/avatars/steven.avif')}
                        width={40}
                        height={40}
                        alt="Avatar of Steven"
                    />
                    <div className="web-user-box-name flex gap-2">
                        <span className="text-sub-body font-medium text-primary">Steven</span>
                        <time className="text-caption text-secondary">9:08 AM</time>
                    </div>
                    <div className="web-user-box-content text-caption text-primary">
                        You should be able to debug this with a few steps. Just follow this blog:{' '}
                        <Link className="web-link text-accent underline-offset-2 hover:underline" href="/blog/post/cors-error" target="_blank" rel="noopener noreferrer">
                            https://clikkle.com/blog/post/cors-error
                        </Link>
                        . Let me know if this helps 🙂
                    </div>
                </div>
            </div>
        </li>
    </ul>
);

const Community = () => (
    <div className="container grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4 md:pr-48">
            <h2 className="text-primary text-title font-aeonik-pro text-pretty">Get help from the open source community</h2>
            <p className="text-secondary text-pretty">
                Join a growing community of developers and students who use Clikkle to build their products. Gain access to a wealth
                of knowledge, support, and shared experiences needed to grow and advance your tech career.
            </p>
            {/* `discord-link.svelte`: `<Button variant="secondary" href>` → `.web-button.is-secondary` + Icon + `span.text`; `Community.svelte` utility classes. */}
            <Link
                href={DISCORD_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    'web-button is-secondary education-discord-link',
                    'text-accent mt-10 !w-full py-1 !whitespace-normal md:!w-fit',
                )}
            >
                <span className="web-icon-discord" aria-hidden />
                <span className="text">Join Discord</span>
            </Link>
        </div>
        <div className="px-4">
            <CommunitySupportChat />
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="container grid justify-between pt-20 md:grid-cols-2">
            <h2 className="text-primary text-title font-aeonik-pro mt-10">FAQ</h2>
            <ul className="collapsible w-full divide-y divide-white/5" id="faq">
                {FAQ_ITEMS.map((faqItem, index) => (
                    <li key={faqItem.question} className="collapsible-item">
                        <div className="collapsible-wrapper py-2">
                            <h3>
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between gap-2.5 py-6 text-left"
                                    aria-expanded={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className="text-label font-aeonik-pro text-primary">{faqItem.question}</span>
                                    <div
                                        className={cn(
                                            'icon text-primary self-start transition-transform',
                                            openIndex === index && 'rotate-180',
                                        )}
                                    >
                                        <span className="icon-cheveron-down" aria-hidden />
                                    </div>
                                </button>
                            </h3>
                            {openIndex === index ? (
                                <div className="collapsible-content pb-6">
                                    <p className="education-faq-answer">{faqItem.answer}</p>
                                </div>
                            ) : null}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CallToAction = () => (
    <div
        className={cn(
            'border-greyscale-200/4 relative -mb-24 flex min-h-[600px] items-center justify-center border-y',
            'before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:block before:h-full before:bg-[radial-gradient(circle_at_-15%_-10%,_hsla(221,_83%,_56%,_0.22)_0px,_transparent_40%)]',
            'after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:mt-auto after:block after:h-full after:bg-[radial-gradient(circle_at_120%_125%,_hsla(177,_53%,_69%,_0.2)_0px,_transparent_40%)]',
        )}
    >
        <div className="container">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-primary font-aeonik-pro text-title">Start building like a team of hundreds with Clikkle</h2>
                <p className="text-xl text-primary">
                    Develop your developer skills with Clikkle Pro, join a vibrant community of open-source contributors, and start
                    building with a vast array of frameworks.
                </p>
                <Button className="mt-4 !w-full md:!w-fit" asChild>
                    <Link href={EDUCATION_CONSOLE_HREF} target="_blank" rel="noopener noreferrer">
                        Sign up
                    </Link>
                </Button>
            </div>
        </div>
    </div>
);

export default function EducationPage() {
    return (
        <main className="education-page flex min-h-screen flex-col bg-[var(--bg-primary)]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Hero />
            <div className="light space-y-10 bg-[#EDEDF0] pb-32">
                <Kickstart />
                <GetStarted />
                <Community />
            </div>
            <FAQ />
            <CallToAction />
            <div className="container">
                <SiteFooter footerNavNoTopBorder />
            </div>
        </main>
    );
}
