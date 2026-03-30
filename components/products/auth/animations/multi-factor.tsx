import { cn } from '@/lib/utils';

export function MultiFactor() {
    return (
        <div className="flex flex-col gap-4 rounded-2xl bg-[#19191c]/90 p-2 lg:row-span-5 border border-white/10 shadow-lg shadow-black/50">
            <div className="p-3 font-medium text-sm">
                <span className="text-white block font-semibold mb-1">Multi-factor authentication</span>
                <p className="text-[#656569] leading-relaxed">
                    Requiring users to verify their identity using a second authentication factor.
                </p>
            </div>
            
            <div className="flex flex-1 flex-col items-center justify-center rounded-lg bg-white/[0.02] p-6 border border-white/5">
                <div className="flex gap-2">
                    {[5, 1, 8].map((number, idx) => (
                        <div key={idx} className="pointer-events-none relative flex size-12 items-center justify-center rounded-lg border border-white/10 bg-[#1c1c21] text-center text-xl shadow-lg shadow-black/5 transition-all duration-500 text-white font-aeonik-pro font-medium">
                            {number}
                        </div>
                    ))}
                    
                    <div className="pointer-events-none relative flex size-12 items-center justify-center rounded-lg border border-[#FD366E] bg-[#1c1c21] shadow-lg shadow-[#FD366E]/20 transition-all duration-500">
                        <span className="h-[20px] w-px bg-[#FD366E] animate-pulse"></span>
                    </div>
                    
                    {[1, 2].map((_, idx) => (
                        <div key={idx} className="pointer-events-none flex size-12 items-center justify-center rounded-lg border border-white/10 bg-[#1c1c21] shadow-lg shadow-black/5"></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
