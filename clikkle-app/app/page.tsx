import { HeroSection } from "@/components/hero-section";
import { CustomerStories } from "@/components/customer-stories";
import { PlatformsGrid } from "@/components/platforms-grid";
import { LogosBar } from "@/components/logos-bar";
import { ProductShowcase } from "@/components/product-showcase";
import { Pullquote } from "@/components/pullquote";
import { AIWorkflows } from "@/components/ai-workflows";
import { SecurityFeatures } from "@/components/security-features";
import { NetworkMap } from "@/components/network-map";
import { ScaleSection } from "@/components/scale-section";
import { PricingSection } from "@/components/pricing-section";
import { MarketingBottomCta } from "@/components/marketing-bottom-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main>
      {/* 1. Hero — matches hero.svelte */}
      <HeroSection
        title="Built for the first soloClikk"
        subtitle="All-in-one, open-source infrastructure. Build in minutes, bring any framework, and scale affordably. Auth, Database, Storage, Functions, Realtime, Messaging & Hosting included."
      />

      {/* 2. Platforms — matches platforms.svelte */}
      <PlatformsGrid headline="Designed for the tools you work with" />

      {/* 3. Logo List — matches logo-list.svelte */}
      <LogosBar
        className="border-smooth border-b border-white/10"
        title="Loved by startups and world leaders"
      />

      {/* 4. Bento Grid — matches bento/bento.svelte */}
      <ProductShowcase />

      {/* 5. Pullquote — matches Pullquote component */}
      <Pullquote
        name="Phil McCluskey"
        title="App Manager, Majik Kids"
        avatar="/clikkle/images/testimonials/phil.jpg"
      >
        <span className="text-secondary">Just like a Swiss Army Knife</span> you can choose and use the tools
        that you need with Clikkle.
      </Pullquote>

      {/* 6. AI — matches ai.svelte */}
      <AIWorkflows />

      {/* Customer stories — below AI dashboard, above SecurityFeatures (“Safely scale…”) */}
      <CustomerStories />

      {/* 7–8. Light band — features.svelte + network-map.svelte (live marketing parity) */}
      <SecurityFeatures />
      <NetworkMap />

      {/* 9. Scale / stats — `src/routes/[variation]/+page.svelte`: `light bg-[#EDEDF0]` wraps Map+Scale */}
      <div className="light bg-[#EDEDF0]">
        <ScaleSection />
      </div>

      {/* 10. Pricing — matches pricing.svelte */}
      <PricingSection />

      {/* 11. Bottom CTA — matches marketing-bottom-cta.svelte */}
      <MarketingBottomCta />

      {/* 12. Footer — matches FooterNav + MainFooter */}
      <SiteFooter />
    </main>
  );
}
