import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const features = [
    {
        title: 'Scheduled functions',
        description: 'Run your functions periodically using standard CRON syntax.',
        icon: '/clikkle/images/icons/gradients/clock.svg'
    },
    {
        title: 'Events',
        description: 'Trigger functions automatically when specific events occur in your project.',
        icon: '/clikkle/images/icons/gradients/rocket.svg'
    },
    {
        title: 'Custom domains',
        description: 'Map your own domains directly to your functions.',
        icon: '/clikkle/images/icons/gradients/globe.svg'
    },
    {
        title: 'HTTP requests',
        description: 'Execute functions synchronously or asynchronously via HTTP API.',
        icon: '/clikkle/images/icons/gradients/globe.svg'
    },
    {
        title: 'Delayed executions',
        description: 'Schedule your functions to run once at a specific date and time.',
        icon: '/clikkle/images/icons/gradients/message.svg'
    },
    {
        title: 'Logging',
        description: 'Detailed execution logs to monitor and debug your functions.',
        icon: '/clikkle/images/icons/gradients/database.svg'
    }
];

export function Bento() {
    return (
        <section className="relative pt-24 pb-20 md:pb-40">
            <div className="container">
                <div className="mx-auto flex max-w-[350px] flex-col justify-center gap-4 md:items-center md:text-center">
                    <h2 className="font-aeonik-pro text-primary text-[#19191C] dark:text-white text-display text-pretty tracking-tight">
                        Execute functions<br /> with ease
                    </h2>
                    <p className="text-main-body text-secondary font-medium">
                        Execute your functions effortlessly through the Clikkle console, SDKs, or API.
                    </p>

                    <Button
                        asChild
                        variant="secondary"
                        className="mt-4 w-full md:w-auto"
                    >
                        <Link href="/docs/products/functions/executions">
                            Learn more
                        </Link>
                    </Button>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm flex flex-col gap-4 hover:border-white/20 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center border border-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                                <Image src={feature.icon} alt={feature.title} width={24} height={24} className="relative z-10 w-6 h-6 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-[#19191C] dark:text-white font-semibold text-lg mb-2">{feature.title}</h3>
                                <p className="text-secondary dark:text-white/60 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
