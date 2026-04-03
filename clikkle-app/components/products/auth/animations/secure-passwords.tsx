import { cn } from '@/lib/utils';

export function SecurePasswords() {
    const conditions = [
        'Minimum 8 characters',
        'Numbers',
        'Special characters',
        'Uppercase & lowercase letters',
        'No common words',
        'No personal data'
    ];

    return (
        <div className="flex flex-col gap-4 rounded-2xl bg-[var(--bg-primary)]/90 p-2 lg:row-span-7 border border-white/10 shadow-lg shadow-black/50">
            <div className="p-3 font-medium text-sm">
                <span className="text-white block font-semibold mb-1">Secure passwords</span>
                <p className="text-[#656569] leading-relaxed">
                    Secure passwords by avoiding common words, hashing, and checking personal data.
                </p>
            </div>
            
            <div className="flex flex-1 flex-col justify-center rounded-lg bg-white/[0.02] p-6 border border-white/5">
                
                <div className="mb-4">
                    <label className="text-xs text-secondary text-white/50 mb-1 block">Password</label>
                    <div className="h-12 w-full rounded-md border border-white/10 bg-black/20 flex items-center px-4">
                        <span className="text-white text-xl tracking-[0.2em] font-mono">•••••••••</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 py-2">
                    {conditions.map((condition, i) => (
                        <span key={i} className="flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-2.5 py-1 text-xs text-[#656569] hover:bg-white/10 transition-colors">
                            <svg className="size-3 text-[#2D63FF] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {condition}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    );
}
