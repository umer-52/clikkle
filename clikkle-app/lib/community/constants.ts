/**
 * Mirrors `SOCIAL_STATS` + page copy from `src/routes/community/+page.svelte` (Svelte source of truth).
 * Values are Clikkle-branded targets and marketing stats.
 */
export const COMMUNITY_SOCIAL_STATS = {
    GITHUB: {
        STAT: '45K+',
        LINK: 'https://github.com/clikkle',
        EXTRA: {
            PULL_REQUESTS: '7K+',
            COMMITS: '18K+',
            ISSUES: '5.8K+',
            OPEN_ISSUES: '315+',
            CLOSED_ISSUES: '5.5K+',
            FORKS: '4.1K+',
            CONTRIBUTORS: '850+',
        },
    },
    DISCORD: {
        STAT: '23K+',
        LINK: 'https://discord.gg/clikkle',
    },
    TWITTER: {
        STAT: '95K+',
        LINK: 'https://twitter.com/intent/follow?screen_name=clikkle',
    },
    YOUTUBE: {
        STAT: '12.5K+',
        LINK: 'https://youtube.com/c/clikkle?sub_confirmation=1',
    },
} as const;

export const COMMUNITY_METRICS = [
    { metric: COMMUNITY_SOCIAL_STATS.GITHUB.STAT, description: 'GitHub Stars' },
    { metric: COMMUNITY_SOCIAL_STATS.GITHUB.EXTRA.PULL_REQUESTS, description: 'Pull Requests' },
    { metric: COMMUNITY_SOCIAL_STATS.GITHUB.EXTRA.COMMITS, description: 'Commits' },
    { metric: COMMUNITY_SOCIAL_STATS.GITHUB.EXTRA.ISSUES, description: 'Issues' },
    { metric: COMMUNITY_SOCIAL_STATS.GITHUB.EXTRA.OPEN_ISSUES, description: 'Open Issues' },
    { metric: COMMUNITY_SOCIAL_STATS.GITHUB.EXTRA.CLOSED_ISSUES, description: 'Closed Issues' },
    { metric: COMMUNITY_SOCIAL_STATS.GITHUB.EXTRA.FORKS, description: 'Forks' },
    { metric: COMMUNITY_SOCIAL_STATS.GITHUB.EXTRA.CONTRIBUTORS, description: 'Contributors' },
] as const;

/**
 * Same order as `FloatingHeads` `images` in `src/routes/community/+page.svelte`.
 * Portrait PNGs live under `public/images/...` (bundled assets, not logos).
 */
export const COMMUNITY_FLOATING_HEAD_PATHS = [
    '/images/community/avatars/1.png',
    '/images/community/avatars/2.png',
    '/images/avatars/torsten.png',
    '/images/community/avatars/3.png',
    '/images/avatars/jade.png',
    '/images/community/avatars/4.png',
    '/images/community/avatars/5.png',
    '/images/avatars/haimantika.png',
    '/images/community/avatars/6.png',
    '/images/avatars/may.png',
] as const;

export type CommunityIssue = {
    number: number;
    url: string;
    title: string;
    repository: string;
    tags: string[];
};

/** Fallback when GitHub API is rate-limited or unreachable — mirrors `+page.server.ts` shape. */
export const COMMUNITY_MOCK_ISSUES: CommunityIssue[] = [
    {
        number: 1234,
        url: 'https://github.com/clikkle/clikkle/issues/1234',
        title: 'Add real-time support for GraphQL',
        repository: 'clikkle/clikkle',
        tags: ['enhancement', 'graphql'],
    },
    {
        number: 1235,
        url: 'https://github.com/clikkle/clikkle/issues/1235',
        title: 'Fix OAuth2 callback routing on mobile',
        repository: 'clikkle/clikkle',
        tags: ['bug', 'auth'],
    },
    {
        number: 1236,
        url: 'https://github.com/clikkle/clikkle/issues/1236',
        title: 'Improve cold start times for Node runtimes',
        repository: 'clikkle/clikkle',
        tags: ['enhancement', 'functions'],
    },
    {
        number: 1237,
        url: 'https://github.com/clikkle/clikkle/issues/1237',
        title: 'Console UI overflowing on small displays',
        repository: 'clikkle/clikkle',
        tags: ['bug', 'ui'],
    },
];

export const COMMUNITY_PROJECTS: {
    title: string;
    description: string;
    image: { src: string; alt: string };
    href: string;
}[] = [
    {
        title: 'Refetch.io',
        description: 'Open-source alternative to Hacker News.',
        image: {
            src: 'https://cloud.appwrite.io/v1/storage/buckets/thumbnails/files/68b984b5000e9ce4e9e6/preview?width=1280&output=webp&project=builtWithAppwrite',
            alt: 'Refetch: Open-source alternative to Hacker News',
        },
        href: 'https://builtwith.clikkle.com',
    },
    {
        title: 'Auth UI',
        description: 'Authentication screens generator for any application.',
        image: {
            src: 'https://cloud.appwrite.io/v1/storage/buckets/thumbnails/files/64803bb4f34eb4b05ee3/preview?width=800&output=webp&project=builtWithAppwrite',
            alt: 'Auth UI: Fully customizable login flow for your applications',
        },
        href: 'https://builtwith.clikkle.com',
    },
    {
        title: 'uCanEarn',
        description: 'Clikkle-powered platform where you can sell your digital products online.',
        image: {
            src: '/images/community/projects/ucanearn.png',
            alt: "A screenshot of uCanEarn's website",
        },
        href: 'https://builtwith.clikkle.com',
    },
];

export const COMMUNITY_OTHER_WAYS = [
    {
        title: 'Create content',
        body: 'Help others discover Clikkle with videos and blogs.',
    },
    {
        title: 'Present at meetups',
        body: 'Share your experience and represent Clikkle in public.',
    },
    {
        title: 'Report bugs',
        body: 'Find bugs and submit PRs to fix them.',
    },
    {
        title: 'Submit new ideas',
        body: 'Suggest features, integrations, or SDKs for our roadmap.',
    },
    {
        title: 'Improve documentation',
        body: 'Find improvements in our docs and improve accessibility.',
    },
    {
        title: 'Helping others',
        body: 'Support developers with their projects and contributions.',
    },
] as const;
