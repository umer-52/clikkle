import type { CommunityIssue } from './constants';
import { COMMUNITY_MOCK_ISSUES } from './constants';

/** Mirrors `src/routes/community/+page.server.ts` — open issues from GitHub. */
export async function getCommunityIssues(): Promise<CommunityIssue[]> {
    try {
        const res = await fetch('https://api.github.com/repos/clikkle/clikkle/issues?state=open', {
            headers: {
                Accept: 'application/vnd.github+json',
                'User-Agent': 'clikkle-marketing-community',
            },
            next: { revalidate: 300 },
        });
        const issues = await res.json();
        if (!Array.isArray(issues)) {
            if (issues?.message?.includes?.('API rate limit exceeded')) {
                return COMMUNITY_MOCK_ISSUES;
            }
            return COMMUNITY_MOCK_ISSUES;
        }
        return issues
            .slice(0, 6)
            .map(
                (issue: {
                    number: number;
                    html_url: string;
                    title: string;
                    repository_url?: string;
                    labels?: { name: string }[];
                }) => ({
                    number: issue.number,
                    url: issue.html_url,
                    title: issue.title,
                    repository: (issue.repository_url || 'https://api.github.com/repos/clikkle/clikkle').replace(
                        'https://api.github.com/repos/',
                        '',
                    ),
                    tags: (issue.labels || []).map((l) => l.name),
                }),
            );
    } catch {
        return COMMUNITY_MOCK_ISSUES;
    }
}
