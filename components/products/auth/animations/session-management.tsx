import { cn } from '@/lib/utils';

export function SessionManagement() {
    const sessionData = [
        { icon: '/images/products/auth/chrome.svg', location: 'New York, NY', device: 'Macbook Pro' },
        { icon: '/images/products/auth/safari.svg', location: 'London, UK', device: 'iPhone 12' },
        { icon: '/images/products/auth/firefox.svg', location: 'Sydney, Australia', device: 'iPad Air' }
    ];

    return (
        <div className="flex flex-col gap-4 rounded-2xl bg-[#19191c]/90 p-2 lg:row-span-7 border border-white/10 shadow-lg shadow-black/50">
            <div className="p-3 font-medium text-sm">
                <span className="text-white block font-semibold mb-1">Session management</span>
                <p className="text-[#656569] leading-relaxed">
                    Manage user sessions with timeouts and auto-renewal to prevent logouts.
                </p>
            </div>
            
            <div className="flex flex-1 flex-col justify-center rounded-lg bg-white/[0.02] pt-6 pl-6">
                <div className="mt-auto mb-0 ml-auto flex h-[90%] w-[95%] flex-1 flex-col overflow-hidden rounded-tl-2xl border-t border-l border-white/[0.16] bg-gradient-to-br from-white/[0.1] via-white/[0.04] via-[61%] to-transparent to-white/[0.1]">
                    
                    <div className="mt-2 ml-2 flex flex-1 flex-col">
                        <header className="flex flex-col gap-2 rounded-tl-xl border-b border-white/20 bg-white/5 p-4">
                            <div className="flex items-center gap-3">
                                <span className="font-aeonik-pro text-[18px] font-light text-white">Walter O'Brien</span>
                                <span className="rounded-full bg-white/10 px-2 py-1 font-mono text-xs text-white">637a40ba7</span>
                            </div>
                            <nav className="relative z-10 mt-4 -mb-[17px] flex items-center gap-4 pl-1 text-xs text-[#656569] font-medium">
                                {['Overview', 'Memberships', 'Sessions', 'Activity'].map((heading, i) => (
                                    <button key={heading} className={cn('border-b border-transparent pb-2 transition-colors', {
                                        'border-white/40 text-white': i === 2,
                                        'hover:text-white': i !== 2
                                    })}>
                                        {heading}
                                    </button>
                                ))}
                            </nav>
                        </header>
                        
                        <div className="flex flex-1 flex-col bg-[#19191C]/50 pt-4 pl-4">
                            <div className="flex flex-1 flex-col rounded-tl-2xl bg-white/[0.02] backdrop-blur-sm">
                                <div className="flex justify-between gap-8 border-b border-white/10 px-6 py-4">
                                    {['Client', 'Location'].map((heading) => (
                                        <span key={heading} className="basis-1/2 font-mono text-xs uppercase text-[#656569]">{heading}</span>
                                    ))}
                                </div>
                                <div className="flex flex-1 flex-col divide-y divide-white/10">
                                    {sessionData.map((data, i) => (
                                        <div key={i} className="flex flex-1 items-center justify-between px-6 py-3 text-xs text-[#656569]">
                                            <div className="flex h-8 basis-2/3 items-center gap-2 text-left">
                                                <img src={data.icon} alt={data.device} className="size-6 opacity-70 grayscale" />
                                                <span className="font-medium text-white/80">{data.device}</span>
                                            </div>
                                            <div className="basis-1/2">
                                                {data.location}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
