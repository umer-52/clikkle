import { cn } from '@/lib/utils';


export function SessionLimit() {
    return (
        <div className="flex flex-col gap-4 rounded-2xl bg-[#19191c]/90 p-2 lg:row-span-5 border border-white/10 shadow-lg shadow-black/50">
            <div className="p-3 font-medium text-sm">
                <span className="text-white block font-semibold mb-1">Session limit</span>
                <p className="text-[#656569] leading-relaxed">
                    Restrict the number of active sessions per user to avoid unused active sessions.
                </p>
            </div>
            
            <div className="relative flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white/[0.02] border border-white/5 py-8">
                
                {/* Visual duplicated input layout spanning leftward */}
                <div className="ml-auto mr-0 -mt-16 flex flex-col rounded-l-2xl border-y border-l border-white/[0.06] bg-gradient-to-l from-white/5 to-transparent px-6 py-4 backdrop-blur-sm w-[90%]">
                    <div className="z-10 flex text-xs">
                        <div className="w-full">
                            <span className="text-white font-medium">Sessions limit</span>
                            <p className="text-[#656569] mt-1 mb-4">Maximum number of active sessions allowed per user.</p>
                            <div className="h-10 w-full rounded-md border border-white/10 bg-black/20 flex items-center px-3 text-white">
                                <span className="text-white/40 mr-2 tabular-nums">10</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ml-auto mr-0 flex flex-col rounded-l-2xl border-y border-l border-white/[0.06] bg-gradient-to-l from-[#19191C] to-transparent px-6 py-4 shadow-xl shadow-black/80 w-[95%]">
                    <div className="z-10 flex text-xs">
                        <div className="w-full">
                            <span className="text-white font-medium">Sessions limit</span>
                            <p className="text-[#656569] mt-1 mb-4">Maximum number of active sessions allowed per user.</p>
                            <div className="h-10 w-full rounded-md border border-white/20 bg-[#19191C] flex items-center px-3 text-white ring-1 ring-white/10 focus-within:ring-[#FD366E]">
                                <span className="tabular-nums">10</span>
                                <div className="ml-auto w-px h-4 bg-white/50 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
