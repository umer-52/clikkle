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
            <Link href="/pricing" className="button-primary">
              See pricing
              <ArrowRight size={18} />
            </Link>
            <Link href="/docs" className="button-secondary">
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

