import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection, FeatureGrid, PageHero, SectionHeading } from "@/components/marketing";
import { pageIntro, platformFeatureCards } from "@/lib/site-data";

export default function FeaturesPage() {
  const intro = pageIntro.features;

  return (
    <>
      <PageHero
        eyebrow={intro.eyebrow}
        title={intro.title}
        description={intro.description}
        actions={
          <>
            <Link href="/products" className="web-btn web-btn-primary">
              Explore products
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/contact" className="web-btn web-btn-secondary">
              Book a demo
            </Link>
          </>
        }
      />
      <section className="section pt-4">
        <div className="shell">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="The design system repeats with intention across product storytelling."
            description="Cards, glass panels, stat blocks, and call-to-action sections are all reusable so new pages can stay consistent with the original visual direction."
          />
          <FeatureGrid cards={platformFeatureCards} />
        </div>
      </section>
      <CTASection />
    </>
  );
}

