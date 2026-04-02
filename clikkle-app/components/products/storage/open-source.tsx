import { Button } from '@/components/ui/button';
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

export function OpenSource() {
    return (
        <div className="bg-[#EDEDF0] pt-12 md:pt-20">
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center mx-auto max-w-[580px]">
                    <h2 className="text-display font-aeonik-pro text-[#19191C]">Powered by open source</h2>
                    <p className="text-main-body mt-4 font-medium text-[#434347]">
                        Clikkle is a 100% open source project, giving you the flexibility and support you
                        need to get your project started.
                    </p>
                    <Button
                        asChild
                        variant="secondary"
                        className="mx-auto mt-8 w-full md:w-auto"
                    >
                        <Link href="/">
                            Join the community
                        </Link>
                    </Button>
                </div>
            </div>
            
            <div className="container mt-20 pb-20 md:pb-40">
                <div className="overflow-hidden">
                    <div className="grid place-items-center gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
                        {items.map(({ title, content, icon }, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    'relative flex flex-col items-center justify-center px-11 text-center md:-mr-8 md:max-w-[290px] md:px-0 md:pr-8',
                                    idx > 0 && "pt-8 md:pt-0"
                                )}
                            >
                                <img src={icon} width="40" height="40" alt="" loading="lazy" />
                                <h3 className="text-sub-body text-[#19191C] mt-4 mb-1 font-medium">
                                    {title}
                                </h3>
                                <p className="text-sub-body text-[#434347] font-medium">{content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
