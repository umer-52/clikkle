import { Metadata } from 'next';
import { AuthHero } from '@/components/products/auth/auth-hero';
import { CustomerIdentity } from '@/components/products/auth/customer-identity';
import { SecurityBento } from '@/components/products/auth/security-bento';
import { AccessPermissions } from '@/components/products/auth/access-permissions';
import { SSRCodeShowcase } from '@/components/products/auth/ssr-code-showcase';
import { AuthSdkMigration, AuthOpenSourceSection } from '@/components/products/auth/use-cases-open-source';
import { Testimonials } from '@/components/marketing/testimonials';
import { AuthExploreProducts } from '@/components/products/auth/auth-explore-products';
import { PricingSection } from '@/components/pricing-section';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
    title: 'Auth | Clikkle',
    description: 'Secure login for all users with multiple authentication methods.'
};

/* `src/routes/products/auth/+page.svelte` — section order + light band + footer */
export default function AuthPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[var(--bg-primary)]">
            <AuthHero />
            <CustomerIdentity />
            <SecurityBento />

            <div className="light bg-greyscale-50">
                <AccessPermissions />
                <SSRCodeShowcase />
                <AuthSdkMigration />
                <Testimonials />
                <AuthOpenSourceSection />
            </div>

            <AuthExploreProducts />

            <div className="border-smooth relative border-t border-black/10 bg-[var(--bg-primary)]">
                <PricingSection className="mt-0" />
                <div className="container pb-16">
                    <SiteFooter />
                </div>
            </div>
        </main>
    );
}
