import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function DeploySeamlessly() {
    return (
        <section className="pt-12 pb-20">
            <div className="container grid grid-cols-1 items-center justify-between gap-12 md:grid-cols-12">
                <div className="mb-10 flex flex-col md:col-span-5 relative z-10">
                    <h2 className="text-display font-aeonik-pro my-4 text-pretty text-white">
                        Deploy seamlessly<br /> with no effort
                    </h2>
                    <p className="text-main-body text-white/50 font-medium text-pretty">
                        Clikkle offers to deploy functions directly from Git repositories to track changes
                        within your development workflow seamlessly.
                    </p>

                    <Link
                        href="/docs/products/functions/deployments"
                        className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 w-full md:w-auto bg-white text-black hover:bg-white/90 shadow"
                    >
                        Learn more
                    </Link>
                </div>

                <img src="/clikkle/images/products/functions/deploy-window.png"
                    alt="Deploy window"
                    className="block md:col-span-7 md:col-start-6 md:hidden w-full max-w-[500px] mx-auto drop-shadow-2xl rounded-xl" loading="lazy" />
                
                {/* Desktop static fallback */}
                <div className="hidden aspect-[6.87/4.2] flex-col pb-4 md:col-span-7 md:col-start-6 md:flex relative justify-center drop-shadow-2xl">
                    <img src="/clikkle/images/products/functions/deploy-window.png"
                        alt="Deploy window"
                        className="w-full rounded-2xl" loading="lazy" />
                </div>
            </div>
        </section>
    );
}
