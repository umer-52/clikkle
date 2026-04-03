import { Metadata } from 'next';
import { ProductHero } from '@/components/products/product-hero';
import { ProductCards } from '@/components/products/product-cards';
import { PreviewFiles } from '@/components/products/storage/preview-files';
import { Optimized } from '@/components/products/storage/optimized';
import { Permissions } from '@/components/products/storage/permissions';
import { WhatYouCanDo } from '@/components/products/storage/what-you-can-do';
import { OpenSource } from '@/components/products/storage/open-source';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Storage | Clikkle',
    description: 'Get to know Clikkle Storage - our robust infrastructure allows you to store, optimize and encrypt all of your project files in one place.'
};

export default function StoragePage() {
    return (
        <main className="flex flex-col bg-[var(--bg-primary)]">
            <ProductHero
                eyebrow={{
                    label: 'Storage',
                    icon: '/clikkle/images/icons/illustrated/dark/storage.png'
                }}
                title="Robust and secure storage infrastructure"
                description="Securely store files with advanced compression, encryption and image transformations."
                image={{
                    url: '/clikkle/images/pages/storage/hero-image.png'
                }}
                cta={{
                    label: 'Get started',
                    url: 'https://cloud.clikkle.com'
                }}
                secondaryCta={{
                    label: 'Documentation',
                    url: '/docs/products/storage'
                }}
            />

            <div className="bg-right-top bg-no-repeat md:bg-[url(/clikkle/images/bgs/mint-gradient.png)]">
                <PreviewFiles />
                <div className="relative bg-[url('/clikkle/images/pages/storage/pattern-1.png')] bg-no-repeat bg-[center_bottom_-50%] md:bg-[center_bottom] [background-size:1200px] md:[background-size:1350px]">
                    <Optimized />
                    <Permissions />
                </div>
            </div>

            <div className="relative bg-[#EDEDF0] py-30 md:py-40">
                <div className="container max-lg:py-20">
                    <div className="flex flex-col items-center justify-center text-center mx-auto max-w-3xl">
                        <span className="font-aeonik-fono text-micro uppercase text-white bg-black/10 px-3 py-1 rounded-full mb-4">
                            Dashboard_
                        </span>
                        <h2 className="text-display font-aeonik-pro text-[#19191C] text-pretty">
                            Manage your storage infrastructure from the Console
                        </h2>
                        <p className="text-main-body text-[#434347] mt-4 max-w-xl font-medium">
                            Organize your buckets and files with ease in your dashboard, as well as
                            manage security, permissions, compression, and more.
                        </p>
                        <Button
                            asChild
                            variant="secondary"
                            className="mt-8 w-full md:w-auto"
                        >
                            <Link href="/docs/products/storage/buckets">
                                Learn more
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="container mt-20">
                    <div className="flex flex-col gap-12 lg:gap-16 lg:flex-row items-center">
                        <div className="flex flex-1 flex-col gap-8">
                            <div className="max-w-[580px] mx-auto flex flex-col gap-2">
                                <h3 className="text-main-body text-[#19191C] font-semibold">
                                    File management dashboard
                                </h3>
                                <p className="text-main-body text-[#434347] font-medium">
                                    Visualize and search for files with different view options and
                                    manipulate multiple at the same time.
                                </p>
                            </div>
                            <img className="w-full max-w-[580px] h-auto mx-auto drop-shadow-2xl rounded-xl"
                                src="/clikkle/images/pages/storage/console-illustration.png"
                                alt="Console Illustration"
                                width="568"
                                height="536"
                                loading="lazy" />
                        </div>
                        
                        <div className="hidden lg:block w-[1px] h-[500px] bg-black/5" />
                        
                        <div className="max-w-[580px] mx-auto flex flex-1 flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-main-body text-[#19191C] font-semibold">
                                    Extensive settings options
                                </h3>
                                <p className="text-main-body text-[#434347] font-medium">
                                    Manage security, permissions, compression, and more with
                                    straightforward Bucket settings.
                                </p>
                            </div>
                            <div>
                                <img className="drop-shadow-2xl rounded-xl h-auto hidden md:block w-full max-w-[568px]"
                                    src="/clikkle/images/pages/storage/settings.png"
                                    alt="Settings"
                                    width="568"
                                    height="536"
                                    loading="lazy" />
                                <img className="drop-shadow-2xl rounded-xl h-auto block md:hidden w-full max-w-[568px]"
                                    src="/clikkle/images/pages/storage/settings-mobile.png"
                                    alt="Settings Mobile"
                                    width="568"
                                    height="536"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[var(--bg-primary)] bg-[url(/clikkle/images/bgs/purple-gradient.png)] bg-left bg-no-repeat pb-20">
                <div className="py-24 md:py-32">
                    <div className="container">
                        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                            <div className="flex flex-col items-start mx-auto lg:max-w-md">
                                <span className="font-aeonik-fono text-micro uppercase text-white bg-white/10 px-3 py-1 rounded-full mb-4">
                                    APIS_
                                </span>
                                <h2 className="text-display font-aeonik-pro text-[#E8E8EB]">
                                    What you can do with Storage APIs
                                </h2>
                                <p className="text-main-body text-[#A0A0A5] font-medium mt-4">
                                    Clikkle's Storage APIs allow you to create and update your files,
                                    apply image transformations, and more.
                                </p>
                                <Button
                                    asChild
                                    className="mt-8 w-full md:w-auto"
                                >
                                    <Link href="/docs/references/cloud/client-web/storage">
                                        View docs
                                    </Link>
                                </Button>
                            </div>
                            <div>
                                <WhatYouCanDo />
                            </div>
                        </div>
                    </div>
                </div>

                <OpenSource />
            </div>

            <ProductCards currentProduct="storage" />
        </main>
    );
}
