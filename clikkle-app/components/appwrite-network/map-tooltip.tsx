import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export type TooltipData = {
    city: string | null;
    code: string | null;
    available?: boolean | null;
    date?: string | null;
};

interface MapTooltipProps {
    x: number;
    y: number;
    theme?: 'light' | 'dark';
    tooltipData: TooltipData;
}

/** Classes from `src/lib/components/appwrite-network/map-tooltip.svelte` */
export function MapTooltip({ x, y, theme = 'light', tooltipData }: MapTooltipProps) {
    if (!tooltipData.city) return null;

    return (
        <div
            className={cn('pointer-events-none fixed z-[100] hidden md:block', theme)}
            style={{ left: `${x}px`, top: `${y}px` }}
        >
            <div
                className={cn(
                    'border-gradient relative z-[100] flex w-[190px] flex-col gap-2 rounded-[10px] p-2 backdrop-blur-lg before:rounded-[10px] after:rounded-[10px]',
                    theme === 'dark' ? 'bg-transparent' : 'bg-white'
                )}
            >
                <AnimatePresence mode="wait">
                    <motion.span
                        key={tooltipData.city}
                        initial={{ y: -5, filter: 'blur(4px)', opacity: 0 }}
                        animate={{ y: 0, filter: 'blur(0px)', opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-primary text-caption w-fit"
                    >
                        {tooltipData.city} ({tooltipData.code})
                    </motion.span>
                </AnimatePresence>

                {tooltipData.available ? (
                    <div
                        className={cn(
                            'text-caption flex h-5 items-center justify-center place-self-start rounded-md p-1 text-center',
                            theme === 'light'
                                ? 'bg-[#10B981]/16 text-[#0A714F]'
                                : 'bg-[#10B981]/24 text-[#B4F8E2]'
                        )}
                    >
                        <span className="text-eyebrow -tracking-tight">Available now</span>
                    </div>
                ) : (
                    <div
                        className={cn(
                            'text-caption text-primary flex h-5 items-center justify-center place-self-start rounded-md p-1 text-center',
                            theme === 'light' ? 'bg-black/6 text-primary' : 'bg-white/6 text-primary'
                        )}
                    >
                        <span className="text-eyebrow -tracking-tight">{tooltipData.date}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
