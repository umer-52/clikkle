import { cn } from '@/lib/utils';
import Link from 'next/link';

const items = [
    {
        title: 'Join the community',
        content: 'Get on the go support from a very active and welcoming community.',
        icon: '/clikkle/images/icons/gradients/community.svg'
    },
    {
        title: 'Self-host or go Cloud',
        content: 'Build the way you want. Pick between self hosting or cloud.',
        icon: '/clikkle/images/icons/gradients/self-hosted.svg'
    },
    {
        title: 'No vendor lock-in',
        content: 'You own your data and can easily move to and from Clikkle.',
        icon: '/clikkle/images/icons/gradients/lock.svg'
    }
];

/** `src/routes/products/storage/(components)/OpenSource.svelte` */
export function OpenSource() {
    return (
        <>
            <div className="light py-12 md:py-20">
                <div className="container">
                    <div className="web-hero is-center mx-auto">
                        <h2 className="text-display font-aeonik-pro text-primary">Powered by open source</h2>
                        <p className="text-main-body mx-auto mb-0 mt-0 max-w-[580px] font-medium text-secondary">
                            Clikkle is a 100% open source project, giving you the flexibility and support you
                            need to get your project started.
                        </p>
                        <Link
                            href="/"
                            className="web-btn web-btn-secondary-light mx-auto mt-4 !w-full md:!w-fit"
                        >
                            Join the community
                        </Link>
                    </div>
                </div>
            </div>
            <div className="light !pt-0 pb-20 md:pb-40">
                <div className="container max-w-[993px]">
                    <div className="overflow-hidden">
                        <div className="text-sub-body grid place-items-center gap-8 divide-black/4 font-medium md:grid-cols-3 md:divide-x md:divide-y-0">
                            {items.map(({ title, content, icon }) => (
                                <div
                                    key={title}
                                    className={cn(
                                        'relative flex flex-col items-center justify-center px-11 text-center md:-mr-8 md:max-w-[290px] md:px-0 md:pr-8'
                                    )}
                                >
                                    <img src={icon} width={40} height={40} alt="" loading="lazy" />
                                    <h3 className="text-sub-body mb-1 mt-4 font-medium text-primary">{title}</h3>
                                    <p className="text-sub-body text-secondary">{content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
