import { Metadata } from 'next';
import { AuthHero } from '@/components/products/auth/auth-hero';
import { CustomerIdentity } from '@/components/products/auth/customer-identity';
import { SecurityBento } from '@/components/products/auth/security-bento';
import { AccessPermissions } from '@/components/products/auth/access-permissions';
import { SSRCodeShowcase } from '@/components/products/auth/ssr-code-showcase';
import { UseCasesOpenSource } from '@/components/products/auth/use-cases-open-source';
import { CTASection } from '@/old_marketing_utf8'; // Re-use the existing marketing component

export const metadata: Metadata = {
    title: 'Auth | Clikkle',
    description: 'Secure login for all users with multiple authentication methods.'
};

export default function AuthPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#19191C]">
            <AuthHero />
            <CustomerIdentity />
            <SecurityBento />
            <AccessPermissions />
            <SSRCodeShowcase />
            <UseCasesOpenSource />
            <CTASection />
        </main>
    );
}
