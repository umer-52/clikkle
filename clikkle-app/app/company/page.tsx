import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { withBasePath } from '@/lib/basepath';
import './company.css';

const asset = (path: string) => withBasePath(path);

export const metadata: Metadata = {
    title: 'Company | Clikkle',
    description:
        'At Clikkle, we aim to remove technical barriers with our backend solutions. Click here to learn more about our organization, its mission and goals.',
};

/** `src/routes/company/+page.svelte` — investor logos + hrefs */
const TOP_INVESTORS = [
    { href: 'https://www.bvp.com/', src: '/images/investors/light/bessemer.svg' },
    { href: 'https://www.tigerglobal.com/', src: '/images/investors/light/tiger-global.svg' },
    { href: 'https://www.ibexinvestors.com/', src: '/images/investors/light/ibex.svg' },
    { href: 'https://www.flybridge.com/', src: '/images/investors/light/flybridge.svg' },
    { href: 'https://seedcamp.com/', src: '/images/investors/light/seedcamp.svg' },
] as const;

/** `src/routes/company/+page.svelte` — angel list */
const ANGEL_INVESTORS: {
    name: string;
    line2: string;
    line3?: string;
    github?: string;
    twitter?: string;
}[] = [
    {
        name: 'Aaron Applebaum',
        line2: 'Partner',
        line3: 'MizMaa',
        github: 'https://github.com/aapplbaum',
        twitter: 'https://twitter.com/aapplbaum',
    },
    {
        name: 'Ariel Maislos',
        line2: 'Angel Investor',
        line3: 'Former Apple IL CEO',
        github: 'https://github.com/arielmaislos',
        twitter: 'https://twitter.com/arielmaislos',
    },
    { name: 'Gilad Engel', line2: 'Angel Investor' },
    {
        name: 'Krishna Visvanathan',
        line2: 'Co-founder & Partner',
        line3: 'Crane Venture Partners',
        github: 'https://github.com/KVCVP',
    },
    { name: 'Ameet Patel', line2: 'Angel Investor', github: 'https://github.com/ameet-patel' },
    {
        name: 'Benno Jering',
        line2: 'Partner',
        line3: 'Redline Capital',
        github: 'https://github.com/bennojering/',
    },
    { name: 'James Lindenbaum', line2: 'Co-founder', line3: 'Heroku', github: 'https://github.com/jnl' },
    {
        name: 'Uri Boness',
        line2: 'Co-Founder',
        line3: 'Elastic',
        twitter: 'https://twitter.com/uboness',
    },
];

const CAREERS_HREF = 'https://clikkle.com/careers';

export default function CompanyPage() {
    return (
        <main className="company-page relative bg-[var(--bg-primary)] text-primary">
            {/* Appwrite `bg-left/right.png` + `pre-footer.png` are pink-tinted — use theme-blue CSS glares instead (`company.css`). */}
            <div className="company-page-backdrop" aria-hidden />

            <div className="web-big-padding-section relative z-10">
                {/* Hero — `margin-block: 8rem` on level-2, `py-10` wrapper */}
                <div className="relative py-10">
                    <div className="company-page-hero-band">
                        <div className="web-big-padding-section-level-2">
                            <section className="web-u-padding-block-end-0 container">
                                <div className="company-page-hero web-hero">
                                    <h1 className="text-headline font-aeonik-pro text-primary">
                                        Unleashing creativity and innovation in every creator
                                    </h1>
                                    <div>
                                        <p className="text-description text-secondary font-medium">
                                            Software development transforms our everyday lives, relying heavily on the creativity and
                                            innovation of developers. At Clikkle, we enable them to develop products the world loves
                                            by removing technical barriers with our backend products.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Mission grid — `web-grid-1-1` gap 2rem / 6.25rem desktop @ 1280px */}
                <div className="relative py-10">
                    <div className="web-big-padding-section-level-2">
                        <section className="container">
                            <section className="web-grid-1-1">
                                <div className="flex flex-col gap-8">
                                    <h2 className="text-display font-aeonik-pro text-primary">Designed for and by developers</h2>
                                    <Link
                                        href={CAREERS_HREF}
                                        className="web-button is-primary web-u-inline-width-100-percent-mobile-break1 self-start"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Join the team</span>
                                    </Link>
                                </div>
                                <div className="text-description flex flex-col gap-4 text-secondary font-medium">
                                    <p>
                                        At Clikkle it is our mission to eliminate friction and abstract complexity for every creator.
                                        Giving developers all the tools they need with the best experience possible to have all the
                                        capabilities to create and innovate without limits and with minimum concerns.
                                    </p>
                                    <p>
                                        We do this by building the most complete development platform created for developers, backed by
                                        the open source community. A platform that has all the solutions you need in one place, with
                                        maximum flexibility and minimum friction. A platform that moves with you on your journey, from
                                        ideation to scale. A platform that allows you to succeed in the challenges of today, and those
                                        of tomorrow.
                                    </p>
                                    <p>Build like a team of hundreds.</p>
                                </div>
                            </section>
                        </section>
                    </div>
                </div>

                {/* Light band — `web-white-section light` */}
                <div className="web-white-section light py-10 text-primary">
                    <div className="web-big-padding-section-level-2">
                        <div className="container">
                            <div className="web-hero web-u-max-width-800 mx-auto">
                                <h4 className="text-display font-aeonik-pro text-primary">Backed by top investors</h4>
                                <p className="text-description text-secondary font-medium web-u-max-width-480 mx-auto">
                                    Clikkle is proudly backed by some of the top investors in the industry.
                                </p>
                            </div>
                            <ul className="web-investor-cards web-u-margin-block-start-64">
                                {TOP_INVESTORS.map(({ href, src }) => (
                                    <li key={href}>
                                        <a href={href} className="web-card" target="_blank" rel="noopener noreferrer">
                                            <div className="web-card is-full-color" style={{ ['--card-padding' as string]: '1rem' }}>
                                                <img src={asset(src)} alt="" height={63} />
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="web-big-padding-section-level-2">
                        <div className="container">
                            <h5 className="text-title font-aeonik-pro text-primary text-center">Angel Investors</h5>
                            <ul className="web-grid-2c-4c mt-12">
                                {ANGEL_INVESTORS.map((a) => (
                                    <li key={a.name} className="company-angel flex flex-col">
                                        <h6 className="text-main-body text-primary font-medium">{a.name}</h6>
                                        <p className="text-main-body font-medium">{a.line2}</p>
                                        {a.line3 ? <p className="text-main-body font-medium">{a.line3}</p> : null}
                                        <ul className="mt-auto flex gap-2 pt-4">
                                            {a.github ? (
                                                <li>
                                                    <a
                                                        href={a.github}
                                                        className="web-icon-button"
                                                        aria-label={`${a.name} on GitHub`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span className="web-icon-github" aria-hidden />
                                                    </a>
                                                </li>
                                            ) : null}
                                            {a.twitter ? (
                                                <li>
                                                    <a
                                                        href={a.twitter}
                                                        className="web-icon-button"
                                                        aria-label={`${a.name} on X`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span className="web-icon-twitter" aria-hidden />
                                                    </a>
                                                </li>
                                            ) : null}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pre-footer + footer — `overflow-hidden p-0 pt-10` */}
                <div className="overflow-hidden p-0 pt-10">
                    <div className="company-pre-footer-band web-big-padding-section-level-2 is-margin-replace-padding relative">
                        <div className="company-pre-footer-glare" aria-hidden />
                        <div className="container relative z-10">
                            <div className="company-prefooter web-hero web-u-max-width-380 mx-auto text-center">
                                <h3 className="text-display font-aeonik-pro text-primary">Join the team</h3>
                                <p className="text-primary web-u-opacity-64 font-medium">
                                    Find your next career at Clikkle and join a team of remote workers.
                                </p>
                                <Link
                                    href={CAREERS_HREF}
                                    className="web-button is-transparent mt-4 self-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Careers</span>
                                </Link>
                            </div>
                            <SiteFooter footerNavNoTopBorder />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
