import { cn } from '@/lib/utils';

export function PasswordDictionary() {
    const options = [
        '123456', 'password', '12345678', 'qwerty', '123456789', '12345', '1234', '111111',
        '1234567', 'dragon', '123123', 'baseball', 'abc123', 'football', 'monkey', 'letmein',
        '696969', 'shadow', 'master', '666666', 'qwertyuiop', '123321', 'mustang', '1234567890',
        'michael', '654321', 'superman', '1qaz2wsx', '7777777', '121212', '000000', 'qazwsx',
        '1111', 'zxcvbn', '555555', '11111111', '131313', 'freedom', '777777', 'pass', 'maggie',
        '159753', 'aaaaaa', 'ginger', 'princess', 'joshua', 'cheese', 'amanda', 'summer', 'love',
        'ashley', '6969', 'nicole', 'chelsea', 'biteme', 'matthew', 'access', 'yankees', '987654321',
        'dallas', 'austin', 'thunder', 'taylor', 'matrix'
    ];

    return (
        <div className="flex flex-col gap-4 rounded-2xl bg-[var(--bg-primary)]/90 p-2 lg:row-span-5 border border-white/10 shadow-lg shadow-black/50 overflow-hidden relative">
            <div className="p-3 font-medium text-sm z-20">
                <span className="text-white block font-semibold mb-1">Password dictionary</span>
                <p className="text-[#656569] leading-relaxed">
                    Check if the user's password matches any of the top 10K commonly used passwords.
                </p>
            </div>
            
            <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-lg bg-white/[0.02] border border-white/5 py-12">
                
                {/* Dictionary Words Background */}
                <div className="pointer-events-none absolute inset-0 flex flex-wrap content-start gap-x-2 gap-y-1 text-sm pt-4 px-2 select-none" style={{
                    WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)',
                    maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)'
                }}>
                    {options.map((option, idx) => (
                        option === '654321' ? (
                            <div key={idx} className="font-mono text-white bg-white/10 flex items-center shadow-[0_0_15px_rgba(45,99,255,0.45)] z-50 px-1 py-0.5 rounded-sm outline outline-1 outline-[#2D63FF]/50">
                                <span>6543</span>
                                <span className="w-px h-full bg-[#2D63FF] mx-px animate-pulse"></span>
                                <span className="text-white/40">21</span>
                            </div>
                        ) : (
                            <span key={idx} className="font-mono text-white/10 whitespace-nowrap">{option}</span>
                        )
                    ))}
                </div>

                {/* Password Input Overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--bg-primary)_20%,_transparent_100%)]">
                    <div className="w-3/4 max-w-[240px]">
                        <label className="text-xs text-white/50 mb-1 block">Password</label>
                        <div className="h-10 w-full rounded-md border border-[#2D63FF]/50 bg-[var(--bg-secondary)] flex items-center px-3 shadow-[0_0_20px_rgba(45,99,255,0.12)]">
                            <span className="text-white text-lg tracking-[0.2em] font-mono">•••••••••</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
