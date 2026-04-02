'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import './education.css';
import { cn } from '@/lib/utils';
import { ChevronDown, ExternalLink, Github, MessageSquare } from 'lucide-react';

const Logos = () => (
    <div className="flex items-center justify-center gap-4 divide-x-2 divide-white/5">
        <div className="flex items-center gap-2 pr-4">
            <img src="/clikkle/images/logos/logo.svg" alt="Clikkle" className="h-8 w-auto mix-blend-screen" />
            <span className="text-xl font-bold tracking-tight text-white font-display">Clikkle</span>
        </div>
        <div className="pl-4">
            <Github className="w-8 h-8 text-white" />
        </div>
    </div>
);

const Hero = () => {
    const items = [
        { label: 'Develop your skills', description: 'Get access to Clikkle Cloud and build your entire backend with Clikkle.', icon: '/clikkle/images/education/checkmark.svg' },
        { label: 'Build with any framework', description: 'Get free access to build with Clikkle\'s Education plan, valid throughout your student career.', icon: '/clikkle/images/education/beaker.svg' },
        { label: 'Join a vibrant community', description: 'Get community support in the Clikkle Discord server.', icon: '/clikkle/images/education/chat-icon.svg' }
    ];

    return (
        <div className="flex flex-col">
            <section className="gridLine horizontal relative mt-8 grid h-full min-h-[50vh] w-full place-items-center md:mt-32 md:grid-cols-[10%_1fr_10%] lg:grid-cols-[20%_1fr_20%] xl:grid-cols-3">
                <div className="pattern relative hidden h-full w-full md:block opacity-20"></div>
                <div className="gridLine vertical from-accent/5 relative flex h-full w-full flex-1 basis-[calc(100vw_/_3)] flex-col items-center justify-center gap-8 to-transparent px-4 md:px-8 py-10 text-center md:bg-gradient-to-t bg-[#19191C]">
                    <Logos />
                    <h1 className="font-aeonik-pro text-display md:text-5xl lg:text-6xl text-white leading-tight">
                        Build your next project with Clikkle
                    </h1>
                    <p className="text-white/60 font-medium text-lg md:text-xl">
                        Join the Clikkle Education program in collaboration with the GitHub Student Developer
                        Pack. Students access Clikkle Cloud for free throughout their studies.
                    </p>

                    <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row mt-4">
                        <Button variant="outline" className="w-full md:w-fit !border-transparent !bg-white !text-black hover:!bg-white/90">
                            Sign up now
                        </Button>
                        <Button variant="secondary" className="w-full md:w-fit">
                            <Github className="web-btn-icon" aria-hidden />
                            GitHub Education
                        </Button>
                    </div>
                </div>
                <div className="pattern relative hidden h-full w-full md:block opacity-20"></div>
            </section>

            <div className="container mx-auto grid min-h-40 place-content-center items-start gap-12 md:gap-16 py-24 text-center md:grid-cols-3 px-4 md:px-6 relative z-10">
                {items.map(({ label, description, icon }, idx) => (
                    <div key={idx} className="flex flex-col justify-center">
                        <img src={icon} alt={label} className="mx-auto mb-4 size-16 object-contain" />
                        <h3 className="text-[#19191C] font-aeonik-pro text-2xl mb-2">{label}</h3>
                        <p className="text-[#434347] font-medium leading-relaxed">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Kickstart = () => (
    <div className="container mx-auto grid min-h-80 place-content-center items-center gap-12 py-20 md:grid-cols-2 md:py-40 px-4 md:px-6">
        <div className="text-[#434347] space-y-8 md:max-w-[85%]">
            <h2 className="text-[#19191C] font-aeonik-pro text-display md:text-4xl lg:text-[40px] leading-tight text-pretty">
                Kickstart your developer journey with Clikkle
            </h2>
            <p className="font-medium text-lg leading-relaxed">
                Earn free access through GitHub Education to build your next project on Clikkle Cloud.
                Sign up for the GitHub Student Developer Pack to receive Clikkle Cloud for the duration
                of your studies.
            </p>
            <p className="font-medium text-lg leading-relaxed">
                This credit is available only for users who are verified through the GitHub program as
                students. The plan is valid until you graduate from GitHub Education.
            </p>
        </div>
        <img src="/clikkle/images/education/kickstart.svg" alt="Kickstart" className="mx-auto w-full max-w-lg object-contain" />
    </div>
);

const GetStarted = () => {
    const items = [
        {
            label: 'Enroll to the GitHub Student Developer Pack',
            description: 'Sign up for the Student Developer pack and explore the benefits.',
            cta: { url: 'https://github.com/education', label: 'Enroll on GitHub Education', icon: 'github' }
        },
        {
            label: 'Access the Education plan',
            description: 'Create your Clikkle account through the Education program sign up page. Once verified, the Education plan will be applied to your account.',
            cta: { url: '#', label: 'Sign up' }
        },
        {
            label: 'Start from our docs',
            description: 'Once your Clikkle account is created, go to our Docs and get started with Clikkle Cloud.',
            cta: { url: '/docs', label: 'Go to Clikkle Docs' }
        }
    ];

    return (
        <div className="relative mt-10 min-h-80 border-t border-dashed border-black/8 overflow-hidden bg-[#EDEDF0]">
            <div className="absolute top-0 left-0 z-0 hidden md:block h-80 w-1/2" style={{ background: 'radial-gradient(at 25% 0%, hsla(343, 98%, 60%, 0.1) 0px, transparent 73%, transparent 100%)' }} />
            <div className="absolute top-0 right-0 z-0 hidden md:block h-80 w-1/2" style={{ background: 'radial-gradient(at 100% 0%, hsla(177, 53%, 69%, 0.15) 0px, transparent 73%, transparent 100%)' }} />
            
            <div className="relative z-10 container mx-auto flex flex-col justify-center py-24 px-4 md:px-6">
                <h2 className="text-[#19191C] font-aeonik-pro text-display md:text-5xl text-center md:text-left">Get started today</h2>

                <div className="mt-12 grid gap-8 rounded-2xl bg-white px-5 py-10 shadow-sm border border-black/5 lg:grid-cols-3 lg:divide-x divide-black/5">
                    {items.map((item, i) => (
                        <div key={i} className="group relative flex h-full flex-col gap-6 px-4 pb-8 last-of-type:pb-0 lg:pb-0 border-b border-black/5 lg:border-b-0">
                            <span className="inline-flex w-fit bg-[#EDEDF0] text-[#19191C] font-medium text-sm px-3 py-1 rounded-full uppercase tracking-wider">
                                Step {i + 1}
                            </span>
                            <div className="flex flex-1 flex-col gap-3 font-medium">
                                <h3 className="text-[#19191C] text-xl font-aeonik-pro text-pretty">{item.label}</h3>
                                <p className="text-[#434347] text-base leading-relaxed text-pretty">{item.description}</p>
                            </div>
                            <Button variant="outline" className="mt-auto w-full md:w-fit" asChild>
                                <Link href={item.cta.url} target="_blank">
                                    {item.cta.icon === 'github' && <Github className="web-btn-icon" aria-hidden />}
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

const Community = () => (
    <div className="container mx-auto grid items-center gap-16 md:gap-8 md:grid-cols-2 py-20 px-4 md:px-6">
        <div className="space-y-6 md:pr-12 lg:pr-32">
            <h2 className="text-[#19191C] text-display md:text-5xl font-aeonik-pro text-pretty leading-tight">
                Get help from the open source community
            </h2>
            <p className="text-[#434347] text-lg font-medium leading-relaxed text-pretty">
                Join a growing community of developers and students who use Clikkle to build their
                products. Gain access to a wealth of knowledge, support, and shared experiences needed
                to grow and advance your tech career.
            </p>
            <Button variant="outline" className="mt-10 w-full md:w-fit" asChild>
                <Link href="#">
                    Join Community
                </Link>
            </Button>
        </div>

        <div className="px-4 relative flex items-center justify-center">
             {/* Discord mock widget since we don't have CommunitySupportChat.svelte */}
             <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl border border-black/5 relative overflow-hidden flex flex-col items-center text-center gap-6">
                 <div className="w-20 h-20 bg-[#5865F2]/10 rounded-2xl flex items-center justify-center">
                    <MessageSquare className="w-10 h-10 text-[#5865F2]" />
                 </div>
                 <div className="space-y-2">
                     <h3 className="font-aeonik-pro text-2xl text-[#19191C]">Clikkle Discord</h3>
                     <div className="flex items-center justify-center gap-2 text-sm font-medium">
                         <span className="w-2 h-2 rounded-full bg-green-500"></span>
                         <span className="text-[#434347]">2,143 Online</span>
                         <span className="w-1 h-1 rounded-full bg-black/20 mx-1"></span>
                         <span className="text-[#434347]">18,495 Members</span>
                     </div>
                 </div>
                 <Button variant="outline" className="mt-2 w-full !border-[#5865F2] !bg-[#5865F2] !text-white hover:!border-[#5865F2] hover:!bg-[#4752C4] hover:!text-white">
                     Accept Invite
                 </Button>
             </div>
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const items = [
        { question: 'What is the Clikkle Education Program?', answer: "If you're a student with the GitHub Student Developer Pack, you can access the Clikkle Education plan for free while in school to help you build your next project." },
        { question: 'What does the Education plan offer?', answer: 'The Education plan has equal usage limits as the Clikkle Pro plan (minus email support). We also have a special channel for Education program members in the Clikkle Discord server for support, which will feature exclusive events, hackathons, etc.' },
        { question: 'Who is eligible to apply?', answer: "Any student enrolled in the GitHub Student Developer Pack can apply for free and receive Clikkle's Education plan until graduation." },
        { question: 'How do I apply?', answer: "If you're already enrolled in the GitHub Student Developer Pack, click the 'Sign up' button on this page and fill in your details. If you're not enrolled with GitHub Education yet, first apply for the GitHub Student Developer Pack, then come back and sign up to Clikkle Cloud here." },
        { question: 'What happens after I sign up?', answer: 'Clikkle Cloud will automatically verify your GitHub Student Developer Pack membership and apply the Education plan to your account. You can then start using Clikkle right away.' },
        { question: "I'm already an Clikkle user. Can I still apply?", answer: 'This program is open to all Clikkle users who are verified members of the GitHub Student Developer Pack.' },
        { question: 'How long do the Clikkle Education program benefits last?', answer: 'Your access to the Clikkle Education plan is valid until you finish your studies and graduate from the GitHub Student Developer Pack.' },
        { question: 'Does the Education plan include any add-ons?', answer: 'No, the Education plan does not cover any add-ons.' },
        { question: 'Can I use the Education plan for commercial purposes?', answer: 'No, you may not use the Education plan for any non-educational or commercial purposes.' }
    ];

    return (
        <div className="container mx-auto grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 pt-20 pb-32 px-4 md:px-6">
            <h2 className="text-[#19191C] font-aeonik-pro text-display md:text-5xl lg:mt-10 text-center lg:text-left">FAQ</h2>
            <div className="w-full">
                <ul className="flex flex-col w-full divide-y divide-black/5">
                    {items.map((item, i) => (
                        <li key={i} className="w-full">
                            <button className="flex w-full items-center justify-between gap-4 py-6 md:py-8 text-left group" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                                <span className="text-lg md:text-xl font-aeonik-pro text-[#19191C] transition-colors group-hover:text-[#2D63FF]">
                                    {item.question}
                                </span>
                                <div className={cn("text-[#19191C] transform transition-transform duration-300", openIndex === i ? 'rotate-180' : '')}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>
                            <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0')}>
                                <p className="text-base md:text-lg text-[#434347] font-medium leading-relaxed pr-8">
                                    {item.answer}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const CallToAction = () => (
    <div className="border-black/5 relative -mb-24 flex min-h-[600px] items-center justify-center border-y bg-[#19191C] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at -15% -10%, hsla(343, 98%, 60%, 0.2) 0px, transparent 40%)' }} />
        <div className="absolute inset-0 pointer-events-none mt-auto" style={{ backgroundImage: 'radial-gradient(circle at 120% 125%, hsla(177, 53%, 69%, 0.2) 0px, transparent 40%)' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center">
                <h2 className="text-white font-aeonik-pro text-display md:text-5xl lg:text-6xl leading-tight">
                    Start building like a team of hundreds with Clikkle
                </h2>
                <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-2xl">
                    Develop your developer skills with Clikkle Pro, join a vibrant community of
                    open-source contributors, and start building with a vast array of frameworks.
                </p>
                <Button variant="outline" className="mt-8 w-full md:w-fit !border-transparent !bg-white !text-black hover:!bg-white/90">
                    Sign up
                </Button>
            </div>
        </div>
    </div>
);

export default function EducationPage() {
    return (
        <main className="flex flex-col bg-[#19191C] min-h-screen">
            <Hero />
            <div className="light bg-[#EDEDF0] pb-32 -mx-4 md:mx-0 px-4 md:px-0">
                <Kickstart />
                <GetStarted />
                <Community />
            </div>
            <div className="bg-white">
                <FAQ />
            </div>
            <CallToAction />
        </main>
    );
}
