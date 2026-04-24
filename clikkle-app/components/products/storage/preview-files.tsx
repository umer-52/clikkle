import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function PreviewFiles() {
    return (
        <div className="relative bg-right-top bg-no-repeat pt-20 pb-12 md:py-40">
            <section className="relative container grid grid-cols-1 items-center justify-between gap-x-16 gap-y-12 md:grid-cols-2">
                <div className="max-w-md">
                    <h2 className="text-title font-aeonik-pro text-primary text-[#19191C] dark:text-[#E8E8EB]">
                        Preview media files however you want
                    </h2>
                    <p className="text-main-body mt-4 font-medium text-[#434347] dark:text-[#A0A0A5]">
                        Clikkle Storage's preview endpoint lets you manipulate image previews while also
                        managing different formats and compression algorithms.
                    </p>
                    <div className="mt-8 flex gap-2">
                        <Button
                            asChild
                            variant="secondary"
                            className="w-full md:w-auto web-btn web-btn-secondary-dark ring-0!"
                        >
                            <Link href="/docs/products/storage/upload-download#get-file-preview">
                                Learn more
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <img src="/clikkle/images/products/storage/product-preview.png" alt="Preview Files" loading="lazy" />
                </div>
            </section>
        </div>
    );
}
