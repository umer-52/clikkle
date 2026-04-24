import { Metadata } from 'next';
import { ProductCards } from '@/components/products/product-cards';
import { Platforms } from '@/components/products/functions/platforms';
import Link from 'next/link';
import { CreateStep } from '@/components/products/sites/create-step';
import { DeployStep } from '@/components/products/sites/deploy-step';
import { IntegrateStep } from '@/components/products/sites/integrate-step';
import { SitesFaq } from '@/components/products/sites/faq';
import { Network } from '@/components/marketing/network';
import { OpenSourceAlternative } from '@/components/marketing/open-source-alternative';
import { Testimonials } from '@/components/marketing/testimonials';
import { Scale } from '@/components/marketing/scale';
import { PricingSection } from '@/components/pricing-section';
import { PreFooter } from '@/components/pre-footer';
import { SiteFooter } from '@/components/site-footer';
import { withBasePath } from '@/lib/basepath';

export const metadata: Metadata = {
    title: 'Sites | Clikkle',
    description: 'Clikkle Sites, the open-source Vercel alternative. Develop, deploy, and scale your web applications directly from Clikkle, alongside your backend.'
};

const features = [
    {
        icon: '/clikkle/images/products/sites/icons/ddos.png',
        label: 'DDOS Protection',
        description: 'Automatically detect and mitigate Distributed Denial-of-Service (DDoS) attacks to ensure your app stays online and responsive, even under attacks.'
    },
    {
        icon: '/clikkle/images/products/sites/icons/ssr.png',
        label: 'Server-side rendering',
        description: 'Deliver dynamic content faster and improve SEO with built-in support for server-side rendering (SSR) in your apps.'
    },
    {
        icon: '/clikkle/images/products/sites/icons/domains.png',
        label: 'Custom domains',
        description: 'Easily connect your own domain name to your Clikkle project, site, or function for a fully branded experience.'
    }
];

export default function SitesPage() {
    return (
        <main className="flex flex-col bg-[var(--bg-primary)] overflow-x-hidden">
            {/* Sites Hero */}
            <div
                className="relative flex flex-col items-center"
                style={{
                    background: `
                        radial-gradient(circle at -15% -10%, hsla(343, 98%, 60%, 0.2) 0px, transparent 40%),
                        radial-gradient(circle at 120% 125%, hsla(248, 99%, 70%, 0.2) 0px, transparent 40%)
                    `
                }}
            >
                <div className="container mx-auto grid w-full grid-cols-1 place-items-center gap-x-16 gap-y-8 py-12 max-lg:px-5 lg:grid-cols-12 lg:py-20">
                    <div className="col-span-full flex flex-col gap-6 lg:col-span-5">
                        <div className="flex items-center gap-2">
                            <img src={withBasePath("/icons-black/Deploy.png")} className="w-8 h-8" alt="Sites icon" loading="lazy" />
                            <span className="font-aeonik-fono tracking-widest text-white uppercase text-xs">
                                Sites<span className="text-[#FE9567]">_</span>
                            </span>
                        </div>
                        <h1 className="font-aeonik-pro text-display text-white text-pretty leading-tight">
                            The open-source Vercel alternative
                        </h1>
                        <p className="text-main-body text-white/60 font-medium text-pretty">
                            Develop, deploy, and scale your web applications directly from Clikkle, alongside
                            your backend.
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-2">
                            <Link
                                href="https://cloud.clikkle.com"
                                className="web-btn web-btn-primary w-full md:w-auto shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Start for free
                            </Link>
                            <Link
                                href="/docs/products/sites"
                                className="web-btn web-btn-secondary-dark w-full md:w-auto shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Read the docs
                            </Link>
                        </div>
                    </div>

                    <img src="/clikkle/images/products/sites/illustration.png"
                        alt="Sites Illustration"
                        className="col-span-full lg:col-span-7 w-full drop-shadow-2xl" loading="lazy" />
                </div>

                {/* Frameworks bar */}
                <div className="mt-auto mb-0 w-full">
                    <p className="text-center text-xs font-medium text-white/40 mb-6 font-aeonik-fono uppercase tracking-widest">
                        Host your favorite web frameworks
                    </p>
                    <Platforms />
                </div>
            </div>

            {/* Steps Section */}
            <div className="px-4 md:px-16">
                {/* Steps timeline wrapper */}
                <div className="container relative py-20">
                    {/* Vertical timeline line */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-[calc(2rem+8px)] w-px bg-white/8" />
                    
                    <div className="flex flex-col gap-20">
                        <CreateStep />
                        <DeployStep />
                        <IntegrateStep />
                    </div>
                </div>

                {/* Features */}
                <div className="container mb-20 border-y border-white/8 border-dashed py-12">
                    <div className="grid w-full grid-cols-1 divide-y divide-white/8 divide-dashed md:divide-y-0 md:divide-x md:grid-cols-3">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col text-center font-medium py-10 md:px-8 md:text-left last:border-0">
                                <img className="mx-auto mb-4 w-10 h-10 md:mx-0 object-contain" src={feature.icon} alt={feature.label} loading="lazy" />
                                <h3 className="text-white mb-2 text-base">{feature.label}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Light section: Marketing Marketing Network + Scale + Testimonials */}
            <div className="light -mb-4 bg-[#EDEDF0] pb-8 pt-20">
                <Network />
                <OpenSourceAlternative platforms={['Vercel', 'Netlify', 'Sevalla']} />
                <Testimonials className="mb-20" />
                <Scale
                    theme="light"
                    testimonial={{
                        name: 'Ryan O’Connor',
                        title: 'Founder',
                        company: 'K-Collect',
                        image: '/clikkle/images/testimonials/ryan-oconner-testimonial.png'
                    }}
                >
                    The switch to using Clikkle brought{' '}
                    <span className="text-[#19191C]">infinite value that I&apos;m still discovering today.</span>
                </Scale>
            </div>

            {/* FAQ */}
            <div className="py-20">
                <SitesFaq />
            </div>

            <ProductCards currentProduct="sites" />

            <div className="border-smooth relative border-t border-black/10 bg-[var(--bg-primary)]">
                <div className="container pb-16">
                    <PreFooter headingId="sites-pre-footer-heading" />
                    <SiteFooter noOuterContainer />
                </div>
            </div>
        </main>
    );
}
