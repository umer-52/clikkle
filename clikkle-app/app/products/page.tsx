import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection, FeatureGrid, PageHero, ProductSpotlight } from "@/components/marketing";
import { pageIntro, productCards } from "@/lib/site-data";

export default function ProductsPage() {
  const intro = pageIntro.products;

  return (
    <>
      <PageHero
        eyebrow={intro.eyebrow}
        title={intro.title}
        description={intro.description}
        actions={
          <>
            <Link href="/pricing" className="web-btn web-btn-primary">
              See pricing
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/docs" className="web-btn web-btn-secondary">
              Read docs
            </Link>
          </>
        }
      />
      <section className="section pt-4">
        <div className="shell">
          <FeatureGrid cards={productCards} />
        </div>
      </section>
      <ProductSpotlight />
      <CTASection />
    </>
  );
}

