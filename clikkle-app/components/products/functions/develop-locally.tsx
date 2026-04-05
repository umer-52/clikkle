import Link from 'next/link';

export function DevelopLocally() {
    return (
        <section className="pt-12 pb-20">
            <div className="container grid grid-cols-1 items-center justify-between gap-12 md:grid-cols-12">
                <img src="/clikkle/images/products/functions/checkout-window.png"
                    alt="Checkout window"
                    className="order-2 block md:col-span-7 md:col-start-6 md:hidden w-full max-w-[500px] mx-auto drop-shadow-2xl rounded-xl" loading="lazy" />
                
                {/* Desktop Illustration (Simplified static fallback for the complex Svelte animation/DOM structure) */}
                <div className="hidden order-2 md:col-span-7 md:col-start-6 md:flex relative justify-center">
                    <img src="/clikkle/images/products/functions/checkout-window.png"
                        alt="Checkout window"
                        className="w-full drop-shadow-2xl rounded-2xl" loading="lazy" />
                </div>
                
                <div className="order-1 mb-10 flex flex-col md:order-1 md:col-span-4 md:col-start-1">
                    <h2 className="text-display font-aeonik-pro my-4 text-pretty text-[#19191C] dark:text-white">
                        Develop your functions locally
                    </h2>
                    <p className="text-main-body text-secondary font-medium text-pretty dark:text-white/60">
                        Code and test your functions locally with Clikkle Functions, ensuring full control
                        over your development.
                    </p>

                    <Link
                        href="/docs/products/functions/develop-locally"
                        className="web-btn web-btn-outline mt-8 w-full md:w-auto focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        </section>
    );
}
