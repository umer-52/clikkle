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
        <div className="flex flex-col gap-4 text-center mt-9 mb-10 w-full">
            <div className="flex flex-col items-center justify-center gap-12 max-w-xl mx-auto w-full">
                <div
                    className={cn(
                        'relative grid w-[90%] md:w-full grid-cols-1 md:grid-cols-3 gap-3 md:gap-1 p-1 px-8 md:px-1 shadow-sm md:rounded-lg border md:border-black/5',
                        theme === 'light' ? 'bg-white' : 'bg-[var(--bg-primary)] border-white/5'
                    )}
                >
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSegment === item.value;
                        return (
                            <button
                                key={item.value}
                                onClick={() => onValueChange(item.value)}
                                className={cn(
                                    'flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent px-4 font-medium transition-colors text-sm',
                                    isActive
                                        ? (theme === 'light' ? 'bg-[#FE9567]/10 text-[#FE9567] border-[#FE9567]/30' : 'bg-[#FE9567]/20 text-[#FE9567] border-[#FE9567]/40')
                                        : (theme === 'light' ? 'text-[#19191C] hover:bg-black/5' : 'text-white/70 hover:bg-white/5')
                                )}
                            >
                                <Icon className="w-4 h-4" />
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <p className={cn("px-4 text-sm font-medium mt-6 mb-2", theme === 'light' ? "text-[#434347]" : "text-white/60")}>
                {activeItem.description}

                <Link
                    className={cn("group mt-4 md:mt-2 mx-auto inline-flex items-center justify-center gap-1 font-semibold", theme === 'light' ? "text-[#19191C]" : "text-white")}
                    href={activeItem.href}
                >
                    Learn more about {activeItem.label}
                    <ArrowRight className="-rotate-45 w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </p>
        </div>
    );
}
