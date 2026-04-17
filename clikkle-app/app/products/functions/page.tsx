import { Metadata } from 'next';
import { ProductHero } from '@/components/products/product-hero';
import { ProductCards } from '@/components/products/product-cards';
import { Languages } from '@/components/products/functions/languages';
import { Platforms } from '@/components/products/functions/platforms';
import { DevelopLocally } from '@/components/products/functions/develop-locally';
import { DeploySeamlessly } from '@/components/products/functions/deploy-seamlessly';
import { Bento } from '@/components/products/functions/bento';
import { Templates } from '@/components/products/functions/templates';
import { OpenSource } from '@/components/products/storage/open-source';
import { PricingSection } from '@/components/pricing-section';
import { PreFooter } from '@/components/pre-footer';
import { SiteFooter } from '@/components/site-footer';

import { withBasePath } from '@/lib/basepath';

export const metadata: Metadata = {
    title: 'Functions | Clikkle',
    description: 'Clikkle Functions offer everything you need to deploy and scale serverless functions easily, without any server management overhead.'
};

export default function FunctionsPage() {
    return (
        <main className="flex flex-col bg-[var(--bg-primary)] overflow-x-hidden">
            <ProductHero
                eyebrow={{
                    label: 'Functions',
                    icon: withBasePath('/icons-black/Functions.png')
                }}
                title="Serverless functions done your way"
                description="Deploy and scale serverless functions with seamless integration, multi-language support, and zero server management."
                image={{
                    url: '/clikkle/images/products/functions/phone.png',
                    alt: 'Phone screen with example function running on an e-commerce site.'
                }}
                cta={{
                    label: 'Get started',
                    url: 'https://cloud.clikkle.com'
                }}
                secondaryCta={{
                    label: 'Documentation',
                    url: '/docs/products/functions'
                }}
            />

            <Languages />
            <Platforms />
            
            <div className="bg-[var(--bg-primary)] overflow-hidden">
                <DevelopLocally />
                <DeploySeamlessly />
                <Bento />
            </div>

            <div className="bg-[#EDEDF0]">
                <Templates />
                <OpenSource />
            </div>

            <ProductCards currentProduct="functions" />

            <div className="border-smooth relative border-t border-black/10 bg-[var(--bg-primary)]">
                <div className="container pb-16">
                    <PreFooter headingId="functions-pre-footer-heading" />
                    <SiteFooter noOuterContainer />
                </div>
            </div>
        </main>
    );
}
