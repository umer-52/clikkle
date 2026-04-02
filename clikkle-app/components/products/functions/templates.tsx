import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const icons = {
    node: '/clikkle/images/platforms/nodejs.svg',
    php: '/clikkle/images/platforms/php.svg',
    ruby: '/clikkle/images/platforms/ruby.svg',
    python: '/clikkle/images/platforms/python.svg',
    dart: '/clikkle/images/platforms/dart.svg',
    bun: '/clikkle/images/platforms/bun.svg',
    go: '/clikkle/images/platforms/go.svg'
} as const;

const templates = [
    {
        title: 'Prompt ChatGPT',
        description: 'Ask questions and let OpenAI GPT-3.5-turbo answer.',
        runtimes: ['node', 'python', 'php'] as const
    },
    {
        title: 'Subscriptions with Stripe',
        description: 'Receive recurring card payments and grant subscribers extra permissions.',
        runtimes: ['node'] as const
    },
    {
        title: 'Sync with Algolia',
        description: 'Intuitive search bar for any data in Clikkle Databases.',
        runtimes: ['node', 'python'] as const
    },
    {
        title: 'Query upstash vector',
        description: 'Vector database that stores text embeddings and context.',
        runtimes: ['node'] as const
    },
    {
        title: 'Query MongoDB Atlas',
        description: 'Realtime NoSQL document database with geospecial, graph, search, and vector suport.',
        runtimes: ['node'] as const
    },
    {
        title: 'WhatsApp with Vonage',
        description: 'Simple bot to answer WhatsApp messages.',
        runtimes: ['node', 'python', 'php', 'dart', 'bun'] as const
    }
];

export function Templates() {
    return (
        <section className="bg-[#EDEDF0] pt-20 md:pt-40 pb-20 md:pb-40 relative">
            <div className="container flex flex-col justify-between gap-12 lg:flex-row">
                <div className="mb-10 flex max-w-sm flex-col">
                    <span className="text-xs font-aeonik-fono px-3 py-1 bg-black/10 text-white uppercase rounded-full w-fit">
                        Getting Started_
                    </span>
                    <h2 className="text-display text-[#19191C] font-aeonik-pro mt-8 mb-4 text-pretty tracking-tight">
                        Add functionality within seconds
                    </h2>
                    <p className="text-main-body text-[#434347] font-medium text-pretty mb-8">
                        Clikkle offers a wide variety of ready-to-use templates to speed up development.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 -mr-[50%] lg:-mr-[20%] rounded-l-3xl border-l border-t border-b border-black/10 bg-gradient-to-br from-black/5 to-transparent p-4 md:p-8">
                    <img className="rounded-2xl shadow-2xl shrink-0" src="/clikkle/images/products/functions/templates.png" alt="Templates console" loading="lazy" />
                </div>
            </div>

            <div className="container mt-32 space-y-8 relative z-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-title text-[#19191C] font-aeonik-pro tracking-tight">Explore templates</h2>
                    <Button
                        asChild
                        variant="secondary"
                        className="hidden md:flex"
                    >
                        <Link href="/docs/products/functions/templates">
                            View all templates
                        </Link>
                    </Button>
                </div>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {templates.map((template, i) => {
                        const baseRuntimes = template.runtimes.slice(0, 2);
                        const hiddenRuntimes = template.runtimes.slice(2);
                        
                        return (
                            <div
                                key={i}
                                className="flex flex-col gap-4 rounded-3xl border border-black/5 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mb-2 flex w-full items-start justify-between">
                                    <h3 className="text-main-body font-semibold text-[#19191C] leading-snug">{template.title}</h3>
                                    <ul className="flex items-center">
                                        {baseRuntimes.map(runtime => (
                                            <li key={runtime} className="-ml-2 flex w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full border border-black/10 bg-white drop-shadow-sm">
                                                <img src={icons[runtime as keyof typeof icons]} alt={runtime} className="w-4 h-4 md:w-5 md:h-5" loading="lazy" />
                                            </li>
                                        ))}
                                        {hiddenRuntimes.length > 0 && (
                                            <li className="-ml-2 flex w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full border border-black/10 bg-white drop-shadow-sm group cursor-pointer relative z-10">
                                                <span className="text-xs font-semibold text-[#19191C]">+{hiddenRuntimes.length}</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <p className="text-sub-body text-[#434347] font-medium leading-relaxed">{template.description}</p>
                            </div>
                        );
                    })}
                </div>
                
                <Button
                    asChild
                    variant="secondary"
                    className="flex md:hidden w-full"
                >
                    <Link href="/docs/products/functions/templates">
                        View all templates
                    </Link>
                </Button>
            </div>
        </section>
    );
}
