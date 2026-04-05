import Link from 'next/link';

interface ProductCardsProps {
    currentProduct?: string;
}

const allProducts = {
    auth: {
        title: 'Auth',
        description: 'Build secure authentication and manage your users.',
        icon: '/clikkle/images/icons/illustrated/dark/auth.png',
        url: '/products/auth'
    },
    databases: {
        title: 'Databases',
        description: 'Store and query structured data, ensuring scalable storage.',
        icon: '/clikkle/images/icons/illustrated/dark/databases.png',
        url: '/docs/products/databases'
    },
    storage: {
        title: 'Storage',
        description: 'Manage your files project, using convenient APIs and utilities.',
        icon: '/clikkle/images/icons/illustrated/dark/storage.png',
        url: '/products/storage'
    },
    functions: {
        title: 'Functions',
        description: 'Scale big and unlock limitless potential with Clikkle functions.',
        icon: '/clikkle/images/icons/illustrated/dark/functions.png',
        url: '/products/functions'
    },
    messaging: {
        title: 'Messaging',
        description: 'Use Clikkle messaging to send email, SMS, and push notifications.',
        icon: '/clikkle/images/icons/illustrated/dark/messaging.png',
        url: '/products/messaging'
    },
    realtime: {
        title: 'Realtime',
        description: 'Subscribe and react to any event using the Realtime API.',
        icon: '/clikkle/images/icons/illustrated/dark/realtime.png',
        url: '/docs/apis/realtime'
    },
    sites: {
        title: 'Sites',
        description: 'The open-source Vercel alternative.',
        icon: '/clikkle/images/icons/illustrated/dark/sites.png',
        url: '/products/sites'
    }
} as const;

export function ProductCards({ currentProduct }: ProductCardsProps) {
    const products = Object.entries(allProducts)
        .filter(([key]) => key !== currentProduct)
        .map(([_, value]) => value);

    return (
        <section className="border-smooth border-t py-20 md:py-40">
            <div className="container max-md:px-5!">
                <h4 className="text-label text-primary text-center">Keep exploring our products</h4>
                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <Link
                            key={product.url}
                            className="web-card is-normal web-card-explore"
                            href={product.url}
                        >
                            <div className="web-u-padding-inline-8 web-u-padding-block-end-8 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <img src={product.icon} alt="" width={32} height={32} loading="lazy" />
                                    <h4 className="text-main-body text-primary">{product.title}</h4>
                                    <span className="web-icon-arrow-right ml-auto shrink-0" aria-hidden="true" />
                                </div>
                                <p className="text-sub-body text-secondary">{product.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
