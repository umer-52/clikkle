import { Metadata } from "next";
import { integrations } from "@/lib/integrations-data";
import { IntegrationsCatalog } from "@/components/integrations/integrations-catalog";
import { IntegrationsPartnerCta } from "@/components/integrations/integrations-partner-cta";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Integrations | Clikkle",
  description:
    "Connect your favorite apps to Clikkle for a unified tech stack. Explore the Clikkle catalog: a marketplace to find integrations for your projects.",
};

export default function IntegrationsPage() {
  const categories = Array.from(new Set(integrations.map((i) => i.category))).filter(Boolean);
  const platforms = Array.from(
    new Set(integrations.flatMap((i) => i.platform || [])),
  ).filter(Boolean);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[var(--bg-primary)]">
      <main className="flex flex-1 flex-col">
        {/* Hero Section */}
        <header className="relative overflow-hidden pt-40 pb-20">
          <div className="pointer-events-none absolute top-0 right-[-10%] h-[800px] w-[800px] rounded-full bg-[#2D63FF]/10 blur-[120px]" />

          <div className="container relative z-10 mx-auto">
            {/* Appwrite `src/routes/integrations/+page.svelte` — text-eyebrow / text-headline / text-description */}
            <div className="flex max-w-[42.5rem] flex-col items-start gap-5">
              <div className="text-eyebrow text-primary uppercase">
                Integrations<span className="text-[var(--color-brand-primary)]">_</span>
              </div>
              <h1 className="text-headline font-aeonik-pro text-primary">
                Discover infinite possibilities
              </h1>
              <p className="text-description">
                Find your favourite apps to integrate with your projects in Clikkle&apos;s marketplace.
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute top-1/2 right-0 hidden w-[500px] -translate-y-1/2 opacity-20 lg:block">
            <div className="aspect-square w-full rotate-[15deg] rounded-[3rem] border-[40px] border-white/10" />
            <div className="absolute top-1/2 left-1/2 aspect-square w-3/4 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] rounded-[2rem] border-[40px] border-white/5" />
          </div>
        </header>

        <IntegrationsCatalog
          integrations={integrations}
          categories={categories}
          platforms={platforms}
        />

        <IntegrationsPartnerCta />
      </main>

      <SiteFooter />
    </div>
  );
}
