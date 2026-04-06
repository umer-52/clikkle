import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Enterprise | Clikkle',
    description:
        'Enterprise businesses partner with Clikkle to empower their developers with an all-in-one development platform. Get in touch with our team.',
};

export default function EnterpriseContactLayout({ children }: { children: ReactNode }) {
    return children;
}
