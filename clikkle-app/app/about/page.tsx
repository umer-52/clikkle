import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection, FeatureGrid, PageHero } from "@/components/marketing";
import { pageIntro, teamValues } from "@/lib/site-data";

export default function AboutPage() {
  const intro = pageIntro.about;

  return (
    <>
      <PageHero
        eyebrow={intro.eyebrow}
        title={intro.title}
        description={intro.description}
        actions={
          <>
            <Link href="/contact" className="web-btn web-btn-primary">
              Work with us
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/features" className="web-btn web-btn-secondary">
              See capabilities
            </Link>
          </>
        }
      />
      <section className="section pt-4">
        <div className="shell">
          <FeatureGrid cards={teamValues} />
        </div>
      </section>
      <CTASection />
    </>
  );
}

