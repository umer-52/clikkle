import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../docs/docs-fonts.css';
import '../docs/docs-header.css';
import '../docs/docs-article-sections.css';
import './contact-us.css';

export const metadata: Metadata = {
    title: 'Contact us | Clikkle',
    description:
        'Fill in this short form to get in touch with the Clikkle team. Questions, feature requests or bug reports — all input is welcome!',
};

export default function ContactUsLayout({ children }: { children: ReactNode }) {
    return children;
}
