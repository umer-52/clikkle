import Link from 'next/link';
import { withBasePath } from '@/lib/basepath';

/* `src/routes/products/auth/+page.svelte` — “Keep exploring our products” (lines 54–194) */
const cards = [
    {
        href: '/products/messaging',
        icon: withBasePath('/icons-black/Messaging.png'),
        title: 'Messaging',
        copy: 'Use Clikkle messaging to send email, SMS, and push notifications.',
        width: 32,
        height: 32,
        alt: 'messaging'
    },
    {
        href: '/products/functions',
        icon: withBasePath('/icons-black/Functions.png'),
        title: 'Functions',
        copy: 'Scale big and unlock limitless potential with Clikkle functions.',
        width: 32,
        height: 32,
        alt: 'functions'
    },
    {
        href: '/docs/products/databases',
        icon: withBasePath('/icons-black/Morph DB.png'),
        title: 'Databases',
        copy: 'Store and query structured data, ensuring scalable storage.',
        width: 37,
        height: 32,
        alt: ''
    },
    {
        href: '/products/storage',
        icon: withBasePath('/icons-black/Storage.png'),
        title: 'Storage',
        copy: "Manage your files' project, using convenient APIs and utilities.",
        width: 32,
        height: 32,
        alt: 'storage'
    },
    {
        href: '/docs/apis/realtime',
        icon: withBasePath('/icons-black/Streams.png'),
        title: 'Realtime',
        copy: 'Utilize realtime information from all Clikkle services.',
        width: 32,
        height: 32,
        alt: 'realtime'
    }
];

export function AuthExploreProducts() {
    return (
        <section className="border-smooth -mt-8 border-t border-black/8 py-40">
            <div className="container">
                <h4 className="text-label text-primary text-center">Keep exploring our products</h4>
                <ul
                    className="mt-8 grid gap-8"
                    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))' }}
                >
                    {cards.map((c) => (
                        <li key={c.href} className="web-u-flex-basis-378 min-w-0">
                            <Link href={c.href} className="web-card is-normal web-card-explore">
                                <div className="web-u-padding-inline-8 web-u-padding-block-end-8 flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={c.icon}
                                            alt={c.alt}
                                            width={c.width}
                                            height={c.height}
                                            loading="lazy"
                                        />
                                        <h4 className="text-main-body text-primary">{c.title}</h4>
                                        <span
                                            className="web-icon-arrow-right ml-auto shrink-0"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="text-sub-body text-secondary">{c.copy}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
