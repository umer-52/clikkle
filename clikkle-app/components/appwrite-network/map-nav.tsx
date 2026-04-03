import { cn } from '@/lib/utils';
import { ArrowRight, MapPin, Cloudy, Globe } from 'lucide-react';
import Link from 'next/link';

interface MapNavProps {
    activeSegment: string;
    onValueChange: (value: string) => void;
    theme?: 'light' | 'dark';
}

const navItems = [
    {
        label: 'PoP Locations',
        value: 'pop-locations',
        icon: MapPin,
        href: '/docs/products/network/cdn',
        description: 'Points of presence ensure <50ms ping around the globe.'
    },
    {
        label: 'Edges',
        value: 'edges',
        icon: Cloudy,
        href: '/docs/products/network/edges#list',
        description: 'Edges bring compute closer to users for faster response times.'
    },
    {
        label: 'Regions',
        value: 'regions',
        icon: Globe,
        href: '/docs/products/network/regions#list',
        description: 'Regions offer data residency and redundancy across continents.'
    }
];

export function MapNav({ activeSegment, onValueChange, theme = 'dark' }: MapNavProps) {
    const activeItem = navItems.find((item) => item.value === activeSegment) || navItems[0];

    return (
        <div className="flex w-full flex-col gap-4 text-center md:mt-9">
            <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center gap-12">
                <div
                    className={cn(
                        'border-smooth relative grid w-full max-w-xl grid-cols-1 place-content-center gap-3 overflow-hidden p-1 px-8 shadow-[0px_4px_8px_rgba(0,0,0,0.04)] md:grid-cols-3 md:rounded-full md:border md:px-1',
                        theme === 'light' ? 'md:bg-white' : 'md:bg-card'
                    )}
                    role="tablist"
                    aria-label="Network map layers"
                >
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeSegment === item.value;
                        return (
                            <button
                                key={item.value}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => onValueChange(item.value)}
                                className={cn(
                                    'text-caption animate-enter text-primary bg-smooth border-smooth flex h-8 cursor-pointer items-center justify-center gap-2 rounded-full border font-medium outline-0 transition-colors hover:border-white/12',
                                    isActive &&
                                        'border-[color-mix(in_srgb,var(--color-brand-primary)_36%,transparent)] bg-[color-mix(in_srgb,var(--color-brand-primary)_8%,transparent)] text-[var(--color-brand-primary)]',
                                    !isActive &&
                                        theme === 'light' &&
                                        'text-[#19191c] hover:border-black/10'
                                )}
                                style={{ animationDelay: `${index * 75}ms` }}
                            >
                                <Icon
                                    className={cn(
                                        '-ml-2 size-4',
                                        isActive && 'text-[var(--color-brand-primary)]',
                                        theme === 'light' && !isActive && 'text-[#19191c]'
                                    )}
                                />
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <p
                className={cn(
                    'text-caption text-secondary px-4',
                    theme === 'dark' && 'text-white/70'
                )}
            >
                {activeItem.description}

                <Link
                    className={cn(
                        'text-primary group mt-2 flex items-center justify-center gap-0.5 md:hidden',
                        theme === 'dark' && 'text-white'
                    )}
                    href={activeItem.href}
                >
                    Learn more about {activeItem.label}
                    <ArrowRight className="size-4 -rotate-45 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </p>
        </div>
    );
}
