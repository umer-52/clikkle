import type { CSSProperties } from 'react';
import Link from 'next/link';
import { PreFooter } from '@/components/pre-footer';
import { SiteFooter } from '@/components/site-footer';
import { CommunityEventsCarousel } from '@/components/community/community-events-carousel';
import { CommunityFloatingHeads } from '@/components/community/community-floating-heads';
import { CommunityProjectCard } from '@/components/community/community-project-card';
import { CommunitySocialBrandIcon } from '@/components/community/community-social-brand-icon';
import {
    COMMUNITY_FLOATING_HEAD_PATHS,
    COMMUNITY_METRICS,
    COMMUNITY_OTHER_WAYS,
    COMMUNITY_PROJECTS,
    COMMUNITY_SOCIAL_STATS,
} from '@/lib/community/constants';
import { getCommunityIssues } from '@/lib/community/get-issues';
import { withBasePath } from '@/lib/basepath';

const FLOATING_HEAD_URLS = COMMUNITY_FLOATING_HEAD_PATHS.map((p) => withBasePath(p));

export default async function CommunityPage() {
    const issues = await getCommunityIssues();

    return (
        <main className="community-page relative bg-[var(--bg-primary)] text-primary">
            <div className="relative z-[1] web-big-padding-section">
                <div className="relative isolate py-10">
                    <div className="web-big-padding-section-level-2">
                        <section className="web-u-padding-block-end-0 relative container">
                            <div className="web-hero is-align-start web-u-max-width-580">
                                <h1 className="text-display font-aeonik-pro text-primary">
                                    Built by a community of 800+ contributors
                                </h1>
                                <div>
                                    <p className="text-description">
                                        Inspire and get inspired. Join Clikkle&apos;s community of maintainers and contributors
                                        and help us make Clikkle better for developers worldwide.
                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <Link
                                            href={COMMUNITY_SOCIAL_STATS.DISCORD.LINK}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="web-button is-primary is-full-width-mobile"
                                        >
                                            <span>Join our Discord</span>
                                        </Link>
                                        <Link
                                            href={COMMUNITY_SOCIAL_STATS.GITHUB.LINK}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="web-button is-secondary is-full-width-mobile"
                                        >
                                            <span className="web-icon-star" aria-hidden />
                                            <span>Star on GitHub</span>
                                            <span className="web-inline-tag">{COMMUNITY_SOCIAL_STATS.GITHUB.STAT}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </div>
                        <div className="web-big-padding-section-level-2">
                        <section className="container">
                            <ul className="web-grid-row-4 web-grid-row-4-mobile-2" style={{ '--gap-mobile': '1.5rem' } as CSSProperties}>
                                {COMMUNITY_METRICS.map((props) => (
                                    <li key={props.description}>
                                        <div
                                            className="community-metric-card web-card is-normal relative border-gradient"
                                            style={{ '--border-radius': '1rem' } as CSSProperties}
                                        >
                                            <div className="text-title font-aeonik-pro text-primary">{props.metric}</div>
                                            <div className="text-description">{props.description}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        </div>
                </div>

                <div className="relative overflow-x-clip py-10">
                    <div className="community-absolute-container">
                        <div className="community-teal-gradient" />
                        <div className="community-brand-gradient" />
                        <CommunityFloatingHeads imageUrls={FLOATING_HEAD_URLS} />
                    </div>

                    <div className="web-big-padding-section-level-2">
                        <div className="relative z-[1] container">
                            {/*
                             * Appwrite `web-hero` defaults to centered copy; `is-mobile-center` only tweaks small screens.
                             * Clikkle globals omit default centering — use `is-center` so headline + CTA align like Appwrite.
                             */}
                            <div className="web-hero is-center is-mobile-center web-u-max-width-900 gap-5">
                                <h2 className="text-headline font-aeonik-pro text-primary">
                                    The power of open source benefits us all
                                </h2>
                                <div className="flex w-full flex-col items-center gap-5">
                                    <p className="text-description max-w-lg">
                                        See contributors of Clikkle since 2019 and discover how you can start contributing.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        <Link
                                            href={`${COMMUNITY_SOCIAL_STATS.GITHUB.LINK}/graphs/contributors`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="web-button is-secondary is-full-width-mobile"
                                        >
                                            <span>View all contributors</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-10">
                    <div className="web-big-padding-section-level-2">
                        <div className="container">
                            <div className="web-hero is-align-start">
                                <h2 className="text-display font-aeonik-pro text-primary">Get involved</h2>
                                <div>
                                    <p className="text-description">
                                        With every contribution, Clikkle gets better for all of us. Start contributing today.
                                    </p>
                                </div>
                            </div>

                            <div className="community-issues-card web-card is-normal mt-8">
                                <div className="web-u-flex-direction-column-mobile web-u-row-gap-48 flex gap-28">
                                    <div>
                                        <h3 className="text-label text-primary">Check our Open Issues</h3>
                                        <p className="text-main-body mt-1 font-medium">Anyone can join and help Clikkle become better.</p>
                                        <Link
                                            href={`${COMMUNITY_SOCIAL_STATS.GITHUB.LINK}/issues`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="web-button is-secondary mt-8 inline-flex"
                                        >
                                            <span className="icon-github" aria-hidden />
                                            <span>View all Open Issues</span>
                                        </Link>
                                    </div>
                                    <div className="min-w-0 flex-1 overflow-x-auto">
                                        <table className="web-table-line">
                                            <thead className="web-table-line-head">
                                                <tr className="web-table-line-row">
                                                    <th className="web-table-line-cell whitespace-nowrap text-start text-primary">
                                                        Issue #
                                                    </th>
                                                    <th className="web-table-line-cell text-start text-primary">Title</th>
                                                </tr>
                                            </thead>
                                            <tbody className="web-table-line-body">
                                                {issues.map((issue) => (
                                                    <tr key={issue.url} className="web-table-line-row">
                                                        <td className="web-table-line-cell whitespace-nowrap">
                                                            <span className="text-caption">#{issue.number}</span>
                                                        </td>
                                                        <td className="web-table-line-cell">
                                                            <div>
                                                                <a
                                                                    href={issue.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="web-link text-sub-body font-medium"
                                                                >
                                                                    {issue.title}
                                                                </a>
                                                                <span className="text-sub-body"> ({issue.repository})</span>
                                                            </div>
                                                            {issue.tags.length > 0 ? (
                                                                <ul className="mt-2 flex flex-wrap gap-2">
                                                                    {issue.tags.map((tag) => (
                                                                        <li key={tag}>
                                                                            <div className="web-tag">{tag}</div>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            ) : null}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="web-big-padding-section-level-2">
                        <section className="container">
                            <h4 className="text-label text-primary">Other ways to help</h4>
                            <ul
                                className="mt-5 grid gap-5 md:grid-cols-4 md:gap-8"
                                style={{ '--grid-item-size': '15rem' } as CSSProperties}
                            >
                                {COMMUNITY_OTHER_WAYS.map((item) => (
                                    <li key={item.title}>
                                        <div
                                            className="web-card is-normal flex h-full flex-col gap-6 border-gradient relative"
                                            style={{ '--border-radius': '1rem' } as CSSProperties}
                                        >
                                            <div className="text-sub-body font-medium text-primary">{item.title}</div>
                                            <div className="text-sub-body">{item.body}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="web-big-padding-section-level-2">
                        <section className="web-u-sep-block-start web-u-padding-block-start-64 container">
                            <CommunityEventsCarousel
                                size="big"
                                staticNav
                                header={<h4 className="text-label text-primary">Upcoming Events</h4>}
                            >
                                <li className="min-w-[min(100%,20rem)] text-main-body text-primary">
                                    There are no upcoming events scheduled.
                                </li>
                            </CommunityEventsCarousel>
                        </section>
                    </div>
                </div>

                <div className="web-white-section light relative py-10">
                    <div className="web-big-padding-section-level-2">
                        <div className="container">
                            <div className="community-inspire-intro web-hero is-center">
                                <h2 className="text-display font-aeonik-pro text-primary">Inspire and get inspired</h2>
                                <p className="text-description web-u-margin-block-start-0">
                                    Visit our showcase website built with Clikkle to find inspiration for your projects or to
                                    showcase what you have built.
                                </p>
                                <Link
                                    href="https://builtwith.clikkle.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="community-inspire-cta web-button is-secondary mt-6 self-center"
                                >
                                    <span>View all projects</span>
                                </Link>
                            </div>
                            <ul className="community-inspire-project-grid web-grid-3-desktop-1-mobile">
                                {COMMUNITY_PROJECTS.map((project) => (
                                    <li key={project.title}>
                                        <CommunityProjectCard {...project} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="web-white-section light py-10">
                    <div className="web-big-padding-section-level-2">
                        <div className="container">
                            <div className="web-grid-15-25-desktop web-u-row-gap-48 web-u-column-gap-96">
                                <div className="web-hero is-align-start web-u-max-width-380 flex flex-col gap-5">
                                    <div className="text-display font-aeonik-pro text-primary">Visit the community</div>
                                    <p className="text-description web-u-margin-block-start-0">
                                        Discover Clikkle&apos;s community across platforms and join the fun.
                                    </p>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2" style={{ '--p-col-gap': '-1rem' } as CSSProperties}>
                                    <li>
                                        <a
                                            href={COMMUNITY_SOCIAL_STATS.DISCORD.LINK}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="web-card is-white web-u-min-block-size-320 flex flex-col transition-transform hover:-translate-y-2"
                                            style={
                                                {
                                                    '--card-padding': '2rem',
                                                    rotate: '6deg',
                                                } as CSSProperties
                                            }
                                        >
                                            <div className="flex flex-col justify-between gap-8">
                                                <CommunitySocialBrandIcon brand="discord" aria-hidden />
                                            </div>
                                            <div className="text-title font-aeonik-pro mt-auto">
                                                {COMMUNITY_SOCIAL_STATS.DISCORD.STAT} members
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={COMMUNITY_SOCIAL_STATS.TWITTER.LINK}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="web-card is-white web-u-min-block-size-320 flex flex-col transition-transform hover:-translate-y-2"
                                            style={
                                                {
                                                    '--card-padding': '2rem',
                                                    rotate: '2deg',
                                                } as CSSProperties
                                            }
                                        >
                                            <div className="flex flex-col justify-between gap-8">
                                                <CommunitySocialBrandIcon brand="x" aria-hidden />
                                            </div>
                                            <div className="text-title font-aeonik-pro mt-auto">
                                                {COMMUNITY_SOCIAL_STATS.TWITTER.STAT} followers
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={COMMUNITY_SOCIAL_STATS.GITHUB.LINK}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="web-card is-white web-u-min-block-size-320 flex flex-col transition-transform hover:-translate-y-2"
                                            style={
                                                {
                                                    '--card-padding': '2rem',
                                                    rotate: '-10deg',
                                                } as CSSProperties
                                            }
                                        >
                                            <div className="flex flex-col justify-between gap-8">
                                                <CommunitySocialBrandIcon brand="github" aria-hidden />
                                            </div>
                                            <div className="text-title font-aeonik-pro mt-auto">
                                                {COMMUNITY_SOCIAL_STATS.GITHUB.STAT} stargazers
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={COMMUNITY_SOCIAL_STATS.YOUTUBE.LINK}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="web-card is-white web-u-min-block-size-320 flex flex-col transition-transform hover:-translate-y-2"
                                            style={
                                                {
                                                    '--card-padding': '2rem',
                                                    rotate: '-6deg',
                                                } as CSSProperties
                                            }
                                        >
                                            <div className="flex flex-col justify-between gap-8">
                                                <CommunitySocialBrandIcon brand="youtube" aria-hidden />
                                            </div>
                                            <div className="text-title font-aeonik-pro mt-auto">
                                                {COMMUNITY_SOCIAL_STATS.YOUTUBE.STAT} subscribers
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10">
                    <div className="relative pt-[7.5rem]">
                        <div className="container">
                            <PreFooter headingId="community-pre-footer-heading" />
                            <SiteFooter />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
