import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection, PageHero, PricingCards, SectionHeading } from "@/components/marketing";
import { pageIntro, pricingTiers } from "@/lib/site-data";

export default function PricingPage() {
  const intro = pageIntro.pricing;

  return (
    <>
      <PageHero
        eyebrow={intro.eyebrow}
        title={intro.title}
        description={intro.description}
        actions={
          <>
            <Link href="/contact" className="button-primary">
              Talk to sales
              <ArrowRight size={18} />
            </Link>
            <Link href="/products" className="button-secondary">
              Compare products
            </Link>
          </>
        }
      />
      <section className="section pt-4">
        <div className="shell">
          <SectionHeading
            eyebrow="Plans"
            title="Choose the operational depth your team needs right now."
            description="The featured pricing card mirrors the same strong visual weight used in Clikkle-style pricing sections, while the supporting tiers remain easy to compare."
            align="center"
          />
          <PricingCards tiers={pricingTiers} />
        </div>
      </section>
      <CTASection />
    </>
  );
}

