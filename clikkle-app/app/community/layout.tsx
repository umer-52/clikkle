import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../docs/docs-fonts.css';
import '../docs/docs-article-sections.css';
import '../docs/docs-markdoc-parity.css';
import './community.css';

export const metadata: Metadata = {
    title: 'Community | Clikkle',
    description:
        'Join our vibrant community of developers. Ask questions, contribute solutions, and inspire others to improve the backend development experience.',
};

export default function CommunityLayout({ children }: { children: ReactNode }) {
    return children;
}
