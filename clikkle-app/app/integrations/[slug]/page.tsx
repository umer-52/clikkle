import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { integrations } from '@/lib/integrations-data';
import ReactMarkdown from 'react-markdown';
import { ArrowLeftIcon } from 'lucide-react';
import { IntegrationsPartnerCta } from '@/components/integrations/integrations-partner-cta';
import { SiteFooter } from '@/components/site-footer';

export async function generateStaticParams() {
    return integrations.map((integration) => ({
        slug: integration.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const integration = integrations.find(i => i.slug === slug);
    if (!integration) return { title: 'Integration Not Found' };
    
    return {
        title: `${integration.title} | Clikkle Integrations`,
        description: integration.description,
    };
}

export default async function IntegrationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const integration = integrations.find(i => i.slug === slug);
    
    if (!integration) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col overflow-hidden bg-[var(--bg-primary)]">
        <main className="flex flex-1 flex-col">
            {/* Header / Hero */}
            <div className="bg-[#17171A] pt-40 pb-16 relative">
                <div className="container mx-auto">
                    <Button asChild variant="ghost" className="mb-12 -ml-4 !text-white/50 hover:!text-white hover:!bg-white/5">
                        <Link href="/integrations" className="flex items-center gap-2">
                            <ArrowLeftIcon className="web-btn-icon" aria-hidden />
                            Back to catalog
                        </Link>
                    </Button>

                    <div className="max-w-[700px] mx-auto">
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#242427] aspect-video">
                            {integration.images?.[0] || integration.cover ? (
                                <img src={integration.images?.[0] || integration.cover} alt={integration.title} className="w-full h-full object-cover opacity-80" loading="lazy" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white/20">No Cover Available</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="py-20 bg-[var(--bg-primary)]">
                <div className="container mx-auto">
                    <article className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-24">
                        
                        {/* Main Content */}
                        <div className="flex flex-col gap-10">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-white rounded-2xl p-3 border border-white/10 shadow-sm shrink-0">
                                    {integration.product?.avatar ? (
                                        <img src={integration.product.avatar} alt={integration.product.vendor} className="w-full h-full object-contain" loading="lazy" />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 rounded-lg" />
                                    )}
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-aeonik-pro text-white leading-tight">
                                    {integration.title}
                                </h1>
                            </div>

                            <div className="prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-a:text-[#2D63FF] prose-code:text-[#2D63FF] max-w-none">
                                <ReactMarkdown>
                                    {integration.content.replace(/{%[^{}]*%}/g, '') /* simplistic strip of markdoc tags for raw markdown rendering */}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <aside className="lg:sticky lg:top-32 flex flex-col gap-6 self-start">
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-white/50 text-sm font-medium">Vendor</span>
                                <span className="text-white font-medium text-right">{integration.product?.vendor || 'Unknown'}</span>
                            </div>
                            <div className="w-full h-px bg-white/10" />
                            {integration.isPartner && (
                                <>
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-white/50 text-sm font-medium">Partner</span>
                                        <span className="bg-[#2D63FF]/10 text-[#2D63FF] px-3 py-1 rounded-full text-xs font-semibold">Verified</span>
                                    </div>
                                    <div className="w-full h-px bg-white/10" />
                                </>
                            )}
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-white/50 text-sm font-medium">Category</span>
                                <span className="text-white font-medium text-right capitalize">{integration.category.replace('-', ' ')}</span>
                            </div>
                        </aside>

                    </article>
                </div>
            </div>

            <IntegrationsPartnerCta />
        </main>

        <SiteFooter />
        </div>
    );
}
