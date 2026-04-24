import { Metadata } from 'next';
import Link from 'next/link';
import { ProductHero } from '@/components/products/product-hero';
import { ProductCards } from '@/components/products/product-cards';
import { PreviewFiles } from '@/components/products/storage/preview-files';
import { Optimized } from '@/components/products/storage/optimized';
import { Permissions } from '@/components/products/storage/permissions';
import { WhatYouCanDo } from '@/components/products/storage/what-you-can-do';
import { OpenSource } from '@/components/products/storage/open-source';
import { Testimonials } from '@/components/marketing/testimonials';
import { PreFooter } from '@/components/pre-footer';
import { SiteFooter } from '@/components/site-footer';

import { withBasePath } from '@/lib/basepath';

export const metadata: Metadata = {
    title: 'Storage | Clikkle',
    description:
        'Get to know Clikkle Storage - our robust infrastructure allows you to store, optimize and encrypt all of your project files in one place.'
};

/** `src/routes/products/storage/+page.svelte` — section order, shells, spacing (Clikkle theme). */
export default async function StoragePage() {
    return (
        <main className="flex min-h-screen flex-col bg-[var(--bg-primary)] overflow-x-hidden">
            <div className="overflow-hidden">
                <ProductHero
                    eyebrow={{
                        label: 'Storage',
                        icon: withBasePath('/icons-black/Storage.png')
                    }}
                    title="Robust and secure storage infrastructure"
                    description="Securely store files with advanced compression, encryption and image transformations."
                    image={{
                        url: '/clikkle/images/pages/storage/hero-image.png'
                    }}
                    cta={{
                        label: 'Get started',
                        url: 'https://cloud.clikkle.com/register'
                    }}
                    secondaryCta={{
                        label: 'Documentation',
                        url: '/docs/products/storage'
                    }}
                />

                <div className="!mb-0 bg-right-top bg-no-repeat md:bg-[url(/clikkle/images/bgs/mint-gradient.png)]">
                    <PreviewFiles />
                    <div className="relative bg-[url('/clikkle/images/pages/storage/pattern-1.png')] bg-no-repeat bg-[center_bottom_-50%] md:bg-[center_bottom] [background-size:1200px] md:[background-size:1350px]">
                        <Optimized />
                        <Permissions />
                    </div>
                </div>

                <div className="light relative bg-[#EDEDF0] py-30 md:py-40">
                    <div className="max-lg:py-20">
                        <div className="container">
                            <div className="web-hero is-center !max-w-3xl mx-auto">
                                <span
                                    className="text-eyebrow font-aeonik-fono rounded-sm px-3 py-1.5 font-medium uppercase text-white shadow-[4px_5px_0_0px_rgba(45,99,255,0.3)]"
                                    style={{
                                        background: 'linear-gradient(135deg, #2d63ff 0%, #1d4ed8 100%)'
                                    }}
                                >
                                    Dashboard_
                                </span>
                                <h2 className="text-title font-aeonik-pro text-primary text-pretty">
                                    Manage your storage infrastructure from the Console
                                </h2>
                                <p className="text-main-body text-secondary mx-auto mt-0 max-w-xl font-medium">
                                    Organize your buckets and files with ease in your dashboard, as well as
                                    manage security, permissions, compression, and more.
                                </p>
                                <Link
                                    href="/docs/products/storage/buckets"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="web-btn web-btn-secondary-light mx-auto mt-4 !w-full md:!w-fit"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="web-big-padding-section-level-2 !mt-20 !mb-0">
                        <div className="container">
                            <div className="flex flex-col gap-8 lg:flex-row">
                                <div className="flex flex-1 flex-col gap-8">
                                    <div className="web-u-max-width-580 mx-auto flex max-w-[580px] flex-col gap-2">
                                        <h3 className="text-main-body font-medium text-primary">
                                            File management dashboard
                                        </h3>
                                        <p className="text-main-body font-medium text-secondary">
                                            Visualize and search for files with different view options and
                                            manipulate multiple at the same time.
                                        </p>
                                    </div>
                                    <img
                                        className="u-height-auto mx-auto h-auto w-full max-w-[580px]"
                                        src="/clikkle/images/pages/storage/console-illustration.png"
                                        alt=""
                                        width={568}
                                        height={536}
                                        loading="lazy"
                                    />
                                </div>

                                <div className="web-u-flex-sep hidden lg:block" aria-hidden />

                                <div className="mx-auto flex max-w-[580px] flex-1 flex-col gap-8">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-main-body font-medium text-primary">
                                            Extensive settings options
                                        </h3>
                                        <p className="text-main-body font-medium text-secondary">
                                            Manage security, permissions, compression, and more with
                                            straightforward Bucket settings.
                                        </p>
                                    </div>
                                    <div>
                                        <img
                                            className="storage-l-drop-shadow u-height-auto hidden h-auto w-full max-w-[568px] md:block"
                                            src="/clikkle/images/pages/storage/settings.png"
                                            alt=""
                                            width={568}
                                            height={536}
                                            loading="lazy"
                                        />
                                        <img
                                            className="storage-l-drop-shadow u-height-auto block h-auto w-full max-w-[568px] md:hidden"
                                            src="/clikkle/images/pages/storage/settings-mobile.png"
                                            alt=""
                                            width={568}
                                            height={536}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="light web-big-padding-section-level-1 web-white-section bg-[url(/clikkle/images/bgs/purple-gradient.png)] bg-left bg-no-repeat pb-20">
                    <div className="!my-0 py-24 md:py-20">
                        <div className="container">
                            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                                <div className="web-hero is-align-start mx-auto md:mb-0 lg:!max-w-md">
                                    <span
                                        className="text-eyebrow font-aeonik-fono rounded-sm px-3 py-1.5 font-medium uppercase text-white shadow-[4px_5px_0_0px_rgba(45,99,255,0.3)]"
                                        style={{
                                            background: 'linear-gradient(135deg, #2d63ff 0%, #1d4ed8 100%)'
                                        }}
                                    >
                                        APIs_
                                    </span>
                                    <h2 className="text-title font-aeonik-pro text-primary mt-7 mb-5">
                                        What you can do with Storage APIs
                                    </h2>
                                    <p className="text-main-body mt-0 font-medium text-secondary">
                                        Clikkle&apos;s Storage APIs allow you to create and update your files,
                                        apply image transformations, and more.
                                    </p>
                                    <Link
                                        href="/docs/references/cloud/client-web/storage"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="web-btn web-btn-primary mt-9 mt-4 !w-full md:!w-fit"
                                    >
                                        View docs
                                    </Link>
                                </div>
                                <WhatYouCanDo />
                            </div>
                        </div>
                    </div>

                    <Testimonials />

                    <OpenSource />
                </div>

                <ProductCards currentProduct="storage" />

                <div className="relative pt-20">
                    <div className="container">
                        <PreFooter headingId="storage-pre-footer-heading" />
                        <SiteFooter noOuterContainer />
                    </div>
                </div>
            </div>
        </main>
    );
}
