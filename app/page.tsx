import { HeroSection } from "@/components/hero-section";
import { PlatformsGrid } from "@/components/platforms-grid";
import { LogosBar } from "@/components/logos-bar";
import { ProductShowcase } from "@/components/product-showcase";
import { Pullquote } from "@/components/pullquote";
import { AIWorkflows } from "@/components/ai-workflows";
import { CustomerStories } from "@/components/customer-stories";
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
        title="Built for the first soloClikk_"
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
        avatar="/images/testimonials/phil.jpg"
      >
        <span className="text-secondary">Just like a Swiss Army Knife</span> you can choose and use the tools
        that you need with Clikkle.
      </Pullquote>

      {/* 6. AI — matches ai.svelte */}
      <AIWorkflows />

      {/* Customer Stories */}
      <CustomerStories />

      {/* 7. Security Features — matches features.svelte */}
      <SecurityFeatures />

      {/* 8. Network Map — matches network-map.svelte */}
      <NetworkMap />

      {/* 9. Scale Metrics — matches scale.svelte */}
      <ScaleSection />

      {/* 10. Pricing — matches pricing.svelte */}
      <PricingSection />

      {/* 8. Bottom CTA — matches marketing-bottom-cta.svelte */}
      <MarketingBottomCta />

      {/* 9. Footer — matches FooterNav + MainFooter */}
      <SiteFooter />
    </main>
  );
}
