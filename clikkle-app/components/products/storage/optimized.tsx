import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Optimized() {
    return (
        <section className="container grid grid-cols-1 place-items-center gap-16 pt-12 md:grid-cols-2 md:pt-20">
            <div className="hidden md:block">
                <img src="/clikkle/images/pages/storage/product-shot-3.png" width="687" alt="Optimized uploads" loading="lazy" />
            </div>
            <div className="mx-auto max-w-md">
                <h2 className="text-title font-aeonik-pro text-primary text-[#19191C] dark:text-[#E8E8EB]">
                    Optimized for small and large files
                </h2>
                <p className="text-main-body mt-4 font-medium text-[#434347] dark:text-[#A0A0A5]">
                    Clikkle offers chunked uploads for large files and several compression options for
                    optimized upload times.
                </p>
                <div className="mt-8 flex gap-2">
                    <Button
                        asChild
                        variant="secondary"
                        className="w-full md:w-auto web-btn web-btn-secondary-dark ring-0!"
                    >
                        <Link href="/docs/products/storage/images">
                            Learn more
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="block md:hidden">
                <img src="/clikkle/images/pages/storage/product-shot-3.png"
                    width="100%"
                    alt="Optimized uploads"
                    className="mx-auto block max-w-[580px]" loading="lazy" />
            </div>
        </section>
    );
}
