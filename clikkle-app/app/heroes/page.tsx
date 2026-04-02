import { Metadata } from 'next';
import Link from 'next/link';
import './heroes.css';

export const metadata: Metadata = {
    title: 'Heroes | Clikkle',
    description: "If you're passionate about helping developers build great products with Clikkle - join our Heroes program and get access to a number of exclusive perks."
};

const heroCards = [
    {
        name: 'Diana Pham',
        role: 'Developer Advocate',
        bio: "Diana discovered Clikkle and its wonderful team while completing her master's in computer science. Now, as a developer advocate at Vonage, she is excited to build projects using both backend servicing and telecommunications APIs.",
        github: 'https://github.com/dianapham',
        twitter: 'https://twitter.com/dianasoyster',
        linkedin: 'https://www.linkedin.com/in/dianasoyster',
        avatar: '/clikkle/images/heroes/avatars/diana.png'
    },
    {
        name: 'Lucas Audart',
        role: 'Web Consultant',
        bio: 'Lucas is a web consultant at Zenika who specializes in front-end technologies and has spoken about Clikkle and other technologies at various development conferences in France.',
        github: 'https://github.com/Slocaly',
        twitter: 'https://twitter.com/Slocalyy',
        linkedin: 'https://www.linkedin.com/in/lucas-audart',
        avatar: '/clikkle/images/heroes/avatars/lucas.png'
    },
    {
        name: 'Bishwajeet Parhi',
        role: 'Flutter Developer',
        bio: "Bishwajeet Parhi is a Flutter developer and active open-source contributor. He's currently a junior pursuing a Computer Science and Engineering degree and also an organizer of the Hack This Fall hackathon.",
        github: 'https://github.com/2002Bishwajeet',
        twitter: 'https://twitter.com/biswa_20p',
        linkedin: 'https://www.linkedin.com/in/2002bishwajeet',
        avatar: '/clikkle/images/heroes/avatars/bishwajeet.png'
    },
    {
        name: 'Mickaël Alves',
        role: 'Front-end Consultant',
        bio: 'Mickaël is a front-end developer working as a web consultant in Lyon at Zenika. He co-organizes meetups with LyonJS and speaks at conferences about Clikkle, Flutter, and Remotion.',
        github: 'https://github.com/CruuzAzul',
        twitter: 'https://twitter.com/CruuzAzul',
        linkedin: 'https://www.linkedin.com/in/mickaelalves',
        avatar: '/clikkle/images/heroes/avatars/mickael.png'
    },
    {
        name: 'Jason Torres',
        role: 'Community Evangelist',
        bio: 'Jason Torres a former film-maker turned developer who is currently exploring Developer Advocacy and Community Management freelance, and hosting The Tech Commute, a series of Twitter Spaces catered towards developers.',
        github: 'https://github.com/jasonetorres',
        twitter: 'https://twitter.com/tasonjorres',
        linkedin: 'https://www.linkedin.com/in/thejasontorres',
        avatar: '/clikkle/images/heroes/avatars/jason.png'
    },
    {
        name: 'Vincent Ge',
        role: 'DevRel Engineer',
        bio: 'Vincent Ge is a DevRel Engineer who has actively been supporting open-source developers and communities for the last few years. He is a former member of the Clikkle DevRel team and a forever beloved part of our community.',
        github: 'https://github.com/gewenyu99/',
        twitter: 'https://x.com/WenYuGe1',
        linkedin: 'https://www.linkedin.com/in/wen-yu-ge/',
        avatar: '/clikkle/images/heroes/avatars/vincent.png'
    },
    {
        name: 'Taylor Desseyn',
        role: 'VP of Global Community',
        bio: 'Taylor Desseyn is a skilled people connector and has helped 600+ individuals find their perfect career fit in tech. His knack for creating community shines through his use of social media and content creation',
        github: 'https://github.com/tdesseyn',
        twitter: 'https://x.com/tdesseyn',
        linkedin: 'https://www.linkedin.com/in/taylordesseyn/',
        avatar: '/clikkle/images/heroes/avatars/taylor.png'
    },
    {
        name: 'Demola Malomo',
        role: 'Software Engineer & Technical Writer',
        bio: 'Demola Malomo is a software engineer and technical writer from Lagos, Nigeria. He primarily codes in JavaScript and TypeScript and has been learning Rust and Go.',
        github: 'https://github.com/Mr-Malomz',
        twitter: 'https://x.com/malomz',
        linkedin: 'https://www.linkedin.com/in/malomoademola/',
        avatar: '/clikkle/images/heroes/avatars/demola.png'
    },
    {
        name: 'Danny Thompson',
        role: 'Director of Technology',
        bio: 'Danny Thompson is the Director of Technology at This Dot Labs, a software development consultancy specializing in digital innovation and modernization. In addition to his leadership role, he co-hosts "The Programming Podcast" alongside Leon Noel, where they discuss technical challenges, industry insights, and career advice. Danny is also active in organizing tech conferences, such as Commit Your Code, and engages with the tech community through various platforms.',
        github: 'https://github.com/TheDThompsonDev',
        twitter: 'https://x.com/DThompsonDev',
        linkedin: 'https://www.linkedin.com/in/dthompsondev',
        avatar: '/clikkle/images/heroes/avatars/danny.png'
    },
    {
        name: 'Christina Petit',
        role: 'Freelance Developer',
        bio: 'Christina Petit is a freelance web developer from France who has been quite active in the Clikkle Discord server and community initiatives like Init and Office Hours. She also actively creates technical content on YouTube with Astro.',
        github: 'http://github.com/petipois',
        twitter: 'http://x.com/petitpois28',
        linkedin: 'https://www.linkedin.com/in/christina-petitpois',
        avatar: '/clikkle/images/heroes/avatars/christina.png'
    },
    {
        name: 'Nick Gatzoulis',
        role: 'Managing Director',
        bio: 'Nick Gatzoulis is a tech lead and SaaS founder from the UK who actively manages a Backend-as-a-Service community on X (Twitter) and creates technical content on YouTube, where he has published numerous Clikkle tutorials.',
        github: 'https://github.com/nickgatzoulis',
        twitter: 'https://x.com/nickgatzoulis',
        linkedin: 'https://www.linkedin.com/in/nickgatzoulis',
        avatar: '/clikkle/images/heroes/avatars/nick.png'
    }
];

const benefits = [
    { title: 'Channel access', description: "Access to internal channel with Clikkle's Engineering and DevRel teams.", icon: '/clikkle/images/icons/gradients/discussion.svg' },
    { title: 'In-person gatherings', description: "Top contributors get invited to an in-person gathering with the Clikkle team.", icon: '/clikkle/images/icons/gradients/community.svg' },
    { title: 'Digital badge', description: 'Exclusive digital badge to share on Discord and LinkedIn.', icon: '/clikkle/images/icons/gradients/verified.svg' },
    { title: 'Travel', description: 'Travel paid for top contributors (case-by-case) to attend dev conferences.', icon: '/clikkle/images/icons/gradients/travel.svg' },
    { title: 'Beta-test', description: 'Opportunity to beta-test Clikkle releases.', icon: '/clikkle/images/icons/gradients/labs.svg' },
    { title: 'Roadmap access', description: 'Special access to a more in-depth roadmap.', icon: '/clikkle/images/icons/gradients/unlock.svg' },
];

/* ── Components mapped from Svelte ── */

function GithubIcon() { return <svg className="w-5 h-5 fill-current mx-auto my-[10px]" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>; }
function XIcon() { return <svg className="w-5 h-5 fill-current mx-auto my-[10px]" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>; }
function LinkedInIcon() { return <svg className="w-5 h-5 fill-current mx-auto my-[10px]" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>; }

function FloatingHead({ src, size, className = '' }: { src: string; size: number; className?: string }) {
    return (
        <div className={`heroes-pg-head-wrapper ${className}`} style={{ width: size, height: size }}>
            <img src={src} alt="" />
        </div>
    );
}

function HeroCard({ hero }: { hero: typeof heroCards[0] }) {
    return (
        <li>
            <div className="web-card is-white light h-full">
                <div className="heroes-pg-social-item flex flex-col h-full">
                    <div className="flex justify-between gap-4">
                        <div className="web-user-box">
                            <img className="web-user-box-image" src={hero.avatar} alt={hero.name} />
                            <div className="web-user-box-name text-sub-body web-clr-primary font-medium">
                                {hero.name}
                            </div>
                            <div className="web-user-box-username text-sub-body">{hero.role}</div>
                        </div>
                    </div>
                    <p className="text-sub-body web-u-text-color-neutral-700 mt-5 font-medium flex-1">
                        {hero.bio}
                    </p>
                    <ul className="mt-8 flex gap-3">
                        {hero.github && (
                            <li>
                                <a
                                    className="heroes-pg-social-icon"
                                    href={hero.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub profile"
                                >
                                    <GithubIcon />
                                </a>
                            </li>
                        )}
                        {hero.twitter && (
                            <li>
                                <a
                                    className="heroes-pg-social-icon"
                                    href={hero.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X profile"
                                >
                                    <XIcon />
                                </a>
                            </li>
                        )}
                        {hero.linkedin && (
                            <li>
                                <a
                                    className="heroes-pg-social-icon"
                                    href={hero.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn profile"
                                >
                                    <LinkedInIcon />
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </li>
    );
}

export default function HeroesPage() {
    return (
        <main>
            <div className="web-big-padding-section max-w-screen overflow-hidden">
                {/* ══════════════════════  HERO  ══════════════════════ */}
                <div className="py-10">
                    <div className="web-big-padding-section-level-2">
                        <section className="heroes-pg-hero web-u-padding-block-end-0 container mx-auto">
                            <div>
                                <h1 className="text-display font-aeonik-pro text-primary">Clikkle Heroes</h1>
                                <p className="text-main-body mt-5 font-medium">
                                    If you love building, writing, speaking, and helping other developers
                                    build with Clikkle, help us support you by joining the Clikkle Heroes
                                    program and becoming a leader in our developer community.
                                </p>
                                <Link
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="web-btn web-btn-secondary mt-8"
                                >
                                    <span className="text">Become a Hero</span>
                                </Link>
                            </div>
                            <div>
                                <img src="/clikkle/images/heroes/bg.png" width="" alt="" />
                            </div>
                        </section>
                    </div>
                </div>

                {/* ══════════════════════  ABOUT  ══════════════════════ */}
                <div className="py-10">
                    <div className="web-big-padding-section-level-2">
                        <section className="container mx-auto">
                            <div className="web-hero web-u-max-width-800 heroes-pg-about">
                                <h2 className="text-title font-aeonik-pro text-primary">
                                    About Clikkle Heroes
                                </h2>
                                <div>
                                    <p className="text-sub-body font-medium">
                                        The Clikkle Heroes program is an exclusive group of developers who
                                        are experts in Clikkle and dedicated to creating valuable content
                                        to assist other developers in achieving success. Clikkle Heroes
                                        excel in creating video tutorials, written guides, blog posts, or
                                        providing support in our fast-growing Discord community.
                                    </p>
                                </div>
                                <div className="avatar-1">
                                    <FloatingHead src="/clikkle/images/heroes/avatars/bishwajeet.png" size={64} />
                                </div>
                                <div className="avatar-2">
                                    <FloatingHead src="/clikkle/images/heroes/avatars/tanmoy.png" size={80} />
                                </div>
                                <div className="avatar-3">
                                    <FloatingHead src="/clikkle/images/heroes/avatars/emilia.png" size={64} />
                                </div>
                                <img className="teal-blur" src="/clikkle/images/heroes/teal-blur.png" alt="" />
                            </div>
                        </section>
                    </div>
                </div>

                {/* ══════════════════════  WHITE SECTION: CARDS / CAROUSEL / BENEFITS  ══════════════════════ */}
                <div className="web-white-section light relative py-10">
                    <div className="web-big-padding-section-level-2">
                        <div className="container mx-auto">
                            <div className="web-hero">
                                <div className="text-display font-aeonik-pro web-u-clr-primary">
                                    Meet our Heroes
                                </div>
                            </div>
                            <ul className="web-multi-columns-1 mt-20">
                                {heroCards.map((hero, i) => (
                                    <HeroCard key={i} hero={hero} />
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="web-big-padding-section-level-2 web-u-overflow-hidden">
                        <div className="heroes-pg-scroll-carousel" data-animated="true">
                            <ul className="inner">
                                {/* First set of images */}
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <li key={i}>
                                        <div
                                            className="web-card is-white carousel-img"
                                            style={{ padding: '0.5rem', borderRadius: '1.25rem' }}
                                        >
                                            <img
                                                className="rounded-xl w-[280px] md:w-[350px] object-cover"
                                                src={`/clikkle/images/heroes/photos/${i}.png`}
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                    </li>
                                ))}
                                {/* Duplicated set for infinite scroll effect */}
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <li key={`dup-${i}`}>
                                        <div
                                            className="web-card is-white carousel-img"
                                            style={{ padding: '0.5rem', borderRadius: '1.25rem' }}
                                        >
                                            <img
                                                className="rounded-xl w-[280px] md:w-[350px] object-cover"
                                                src={`/clikkle/images/heroes/photos/${i}.png`}
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Benefits Area */}
                    <div className="web-big-padding-section-level-2">
                        <div className="container mx-auto">
                            <section className="web-hero is-align-start">
                                <h2 className="text-display font-aeonik-pro text-primary max-w-[700px]">
                                    How Clikkle Heroes can benefit you
                                </h2>
                            </section>
                            <div className="mt-20 overflow-hidden">
                                <ul className="web-info-boxes text-sub-body font-medium">
                                    {benefits.map((b, i) => (
                                        <li key={i} className="web-info-boxes-item">
                                            <img src={b.icon} width="40" height="40" alt="" />
                                            <h3 className="web-info-boxes-title">{b.title}</h3>
                                            <p className="web-info-boxes-content">{b.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════  FOOTER CTA  ══════════════════════ */}
                <div className="heroes-pg-footer-wrapper relative pt-10">
                    <img src="/clikkle/images/heroes/bg-pre.png" alt="" className="absolute top-0 w-full" />
                    <div className="web-big-padding-section-level-2 relative">
                        <div className="container mx-auto">
                            <div className="web-hero web-u-max-width-800">
                                <h5 className="text-display font-aeonik-pro text-primary">Become a Hero</h5>
                                <p className="text-description text-primary" style={{ opacity: 0.64 }}>
                                    Have you been actively providing value for the Clikkle community? Apply
                                    now to join our hero program! Applications open every three months.
                                </p>
                                <Link
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="web-btn web-btn-ghost is-full-width-mobile mt-6 self-center"
                                >
                                    <span className="text">Become a Hero</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
