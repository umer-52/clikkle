import { SiteFooter } from "@/components/site-footer";
import { AssetsTocNav } from "@/components/assets-toc-nav";
import { CopyButton } from "@/components/copy-button";
import "./assets.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Assets - Clikkle",
  description:
    "This page features Clikkle's key brand assets including the logotype, colors, product visuals, and practical guidelines for their usage.",
};

const ASSETS_BASE = "/clikkle/assets/brand";
const CDN_LOGO_BASE = `${ASSETS_BASE}/cdn`;
const CORE_BASE = `${ASSETS_BASE}/core`;

const downloadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    width="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z" />
  </svg>
);

const productVisuals = [
  { name: "Dashboard", file: "clikkle-dashboard.avif" },
  { name: "Auth", file: "clikkle-auth.avif" },
  { name: "Databases", file: "clikkle-databases.avif" },
  { name: "Storage", file: "clikkle-storage.avif" },
  { name: "Functions", file: "clikkle-functions.avif" },
  { name: "Messaging", file: "clikkle-messaging.avif" },
];

const tocItems = [
  { id: "naming", label: "Naming" },
  { id: "logotype", label: "Logotype" },
  { id: "logomark", label: "Logomark" },
  { id: "brand-colors", label: "Brand colors" },
  { id: "product-visuals", label: "Product visuals" },
  { id: "contact-us", label: "Contact us" },
];

export default function AssetsPage() {
  return (
    <>
      <main className="assets-page relative">
        <div className="container">
          <div className="assets-page-grid web-grid-120-1fr-auto">
            <header className="assets-page-header web-grid-120-1fr-auto-header">
              <h1 className="text-display font-aeonik-pro text-primary">
                Brand assets
              </h1>
            </header>

            <AssetsTocNav items={tocItems} />

            <main className="assets-page-main web-grid-120-1fr-auto-main min-w-0" id="main">
              <div className="web-content">
              {/* Intro */}
              <section className="mb-12">
                <p className="text-body text-secondary max-w-3xl mb-6">
                  Resources for presenting the Clikkle brand to maintain
                  consistency while using our logos, colors, and other brand
                  elements across various platforms and materials.
                </p>
                <Link
                  href={`${ASSETS_BASE}/clikkle-assets.zip`}
                  className="aw-cta-button"
                  target="_blank"
                  download
                  style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center', width: 'fit-content' }}
                >
                  {downloadIcon}
                  <span>Download assets</span>
                </Link>
              </section>

              {/* ── Naming ── */}
              <section id="naming" className="scroll-mt-28 mb-12">
                <div className="flex flex-col gap-2">
                  <h2 className="text-title font-aeonik-pro text-primary mb-4">
                    Naming
                  </h2>
                  <p className="text-body text-secondary">
                    Write &lsquo;Clikkle,&rsquo; with a capital &lsquo;C&rsquo;
                    and two k&rsquo;s. Please refrain from using variations like
                    &lsquo;CliKKle&rsquo; or &lsquo;Clik kle&rsquo;.
                  </p>
                </div>
              </section>

              {/* ── Logotype ── */}
              <section id="logotype" className="scroll-mt-28 mb-12">
                <div className="flex flex-col gap-2">
                  <h2 className="text-title font-aeonik-pro text-primary mb-4">
                    Logotype
                  </h2>
                  <p className="text-body text-secondary">
                    The Clikkle logo stands as a prominent symbol of our
                    brand&rsquo;s identity. Refrain from altering our logo and
                    preferably use our logo on a neutral background.
                  </p>

                  <div className="mt-5 flex flex-col md:flex-row flex-wrap gap-8">
                    {/* Light bg */}
                    <div className="media-wrapper light flex-1 min-w-[300px]">
                      <img
                        src={`${CORE_BASE}/logotype-black/Clikkle-core.png`}
                        alt="Clikkle logo with dark text"
                      />
                      <div className="buttons">
                        <Link
                          href={`${CORE_BASE}/logotype-black/Clikkle-core.png`}
                          className="web-button is-secondary"
                          target="_blank"
                          download
                        >
                          {downloadIcon}
                          <span>PNG</span>
                        </Link>
                        <Link
                          href={`${CDN_LOGO_BASE}/clikkle-text.svg`}
                          className="web-button is-secondary"
                          target="_blank"
                          download
                        >
                          {downloadIcon}
                          <span>SVG</span>
                        </Link>
                      </div>
                    </div>

                    {/* Dark bg */}
                    <div className="media-wrapper dark flex-1 min-w-[300px]">
                      <img
                        src={`${CORE_BASE}/logotype-white/Clikkle-core.png`}
                        alt="Clikkle logo with light text"
                      />
                      <div className="buttons">
                        <Link
                          href={`${CORE_BASE}/logotype-white/Clikkle-core.png`}
                          className="web-button is-secondary"
                          target="_blank"
                          download
                        >
                          {downloadIcon}
                          <span>PNG</span>
                        </Link>
                        <Link
                          href={`${CDN_LOGO_BASE}/clikkle-text.svg`}
                          className="web-button is-secondary"
                          target="_blank"
                          download
                        >
                          {downloadIcon}
                          <span>SVG</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Co-branding logotypes */}
                <section className="mt-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-label text-primary mt-3 mb-4">
                      Co-branding logotypes
                    </h3>
                    <p className="text-body text-secondary">
                      Spacing is determined by the Clikkle mark. Unless otherwise
                      noted by partner brands, each logo is optically equal as a
                      collection of shapes.
                    </p>
                    <div className="cobrand-display mt-5">
                      <div className="cobrand-lockup">
                        <img
                          src={`${CDN_LOGO_BASE}/clikkle-text.svg`}
                          alt="Clikkle"
                        />
                        <span aria-hidden="true">+</span>
                        <strong>Partner</strong>
                      </div>
                    </div>
                  </div>
                </section>
              </section>

              {/* ── Logomark ── */}
              <section id="logomark" className="scroll-mt-28 mb-12">
                <div className="flex flex-col gap-2">
                  <h2 className="text-title font-aeonik-pro text-primary mb-4">
                    Logomark
                  </h2>
                  <p className="text-body text-secondary">
                    While prioritizing recognizability, the logotype is the
                    recommended choice. Using the Clikkle logomark is suitable
                    for situations where space constraints make it challenging to
                    showcase the complete logotype.
                  </p>

                  <div className="mt-5 flex flex-col md:flex-row flex-wrap gap-8">
                    <div className="media-wrapper light flex-1 min-w-[300px]">
                      <img
                        src={`${CORE_BASE}/icons-white/Clikkle-core.png`}
                        alt="Clikkle logomark"
                        className="max-h-24"
                      />
                      <div className="buttons">
                        <Link href={`${CORE_BASE}/icons-white/Clikkle-core.png`} className="web-button is-secondary" target="_blank" download>
                          {downloadIcon}
                          <span>PNG</span>
                        </Link>
                        <Link href={`${CDN_LOGO_BASE}/clikkle.svg`} className="web-button is-secondary" target="_blank" download>
                          {downloadIcon}
                          <span>SVG</span>
                        </Link>
                      </div>
                    </div>

                    <div className="media-wrapper dark flex-1 min-w-[300px]">
                      <img
                        src={`${CORE_BASE}/icons-black/Clikkle-core.png`}
                        alt="Clikkle logomark on dark"
                        className="max-h-24"
                      />
                      <div className="buttons">
                        <Link href={`${CORE_BASE}/icons-black/Clikkle-core.png`} className="web-button is-secondary" target="_blank" download>
                          {downloadIcon}
                          <span>PNG</span>
                        </Link>
                        <Link href={`${CDN_LOGO_BASE}/clikkle.svg`} className="web-button is-secondary" target="_blank" download>
                          {downloadIcon}
                          <span>SVG</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Co-branding lockups */}
                <section className="mt-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-label text-primary mt-3 mb-4">
                      Co-branding lockups
                    </h3>
                    <p className="text-body text-secondary">
                      Spacing is determined by the Clikkle mark. Unless otherwise
                      noted by partner brands, each logo is optically equal as a
                      collection of shapes.
                    </p>
                    <div className="cobrand-display mt-4">
                      <div className="cobrand-lockup cobrand-lockup--mark">
                        <img
                          src={`${CDN_LOGO_BASE}/clikkle.svg`}
                          alt="Clikkle mark"
                        />
                        <span aria-hidden="true">+</span>
                        <strong>Partner</strong>
                      </div>
                    </div>
                  </div>
                </section>
              </section>

              {/* ── Brand Colors ── */}
              <section id="brand-colors" className="scroll-mt-28 mb-12">
                <h2 className="text-title font-aeonik-pro text-primary mb-6">
                  Brand colors
                </h2>

                <div className="flex flex-wrap gap-8">
                  <div className="color-card color-card--light flex-1 min-w-[200px]">
                    <h3 className="text-label">Light Grey</h3>
                    <p className="text-caption">#EDEDF0</p>
                    <div className="buttons light">
                      <CopyButton content="#EDEDF0" variant="light" />
                    </div>
                  </div>

                  <div className="color-card color-card--dark flex-1 min-w-[200px]">
                    <h3 className="text-label">Dark Grey</h3>
                    <p className="text-caption">#19191D</p>
                    <div className="buttons">
                      <CopyButton content="#19191D" variant="dark" />
                    </div>
                  </div>

                  <div className="color-card color-card--blue flex-1 min-w-[200px]">
                    <h3 className="text-label">Clikkle Blue</h3>
                    <p className="text-caption">#2D63FF</p>
                    <div className="buttons">
                      <CopyButton content="#2D63FF" variant="blue" />
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Product Visuals ── */}
              <section id="product-visuals" className="scroll-mt-28 mb-12">
                <div className="flex flex-col gap-2">
                  <h2 className="text-title font-aeonik-pro text-primary mb-4">
                    Product visuals
                  </h2>
                  <p className="text-body text-secondary">
                    Use these product visuals to enhance your articles,
                    presentations, and content related to Clikkle.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {productVisuals.map((visual) => (
                      <div key={visual.name} className="visual-wrapper">
                        <img
                          src={`${ASSETS_BASE}/visuals/${visual.file}`}
                          alt={`Clikkle ${visual.name}`}
                        />
                        <div className="buttons">
                          <Link
                            href={`${ASSETS_BASE}/visuals/${visual.file}`}
                            className="web-button is-secondary"
                            target="_blank"
                            download
                          >
                            {downloadIcon}
                            <span>AVIF</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Contact Us ── */}
              <section id="contact-us" className="scroll-mt-28 mb-12">
                <div className="flex flex-col gap-2">
                  <h2 className="text-title font-aeonik-pro text-primary mb-4">
                    Contact us
                  </h2>
                  <p className="text-body text-secondary">
                    Should you require further assistance or have specific needs
                    beyond what&rsquo;s presented on this page, please don&rsquo;t
                    hesitate to{" "}
                    <Link
                      href="/contact-us"
                      className="web-link text-accent hover:underline"
                    >
                      contact us
                    </Link>
                    .
                  </p>
                </div>
              </section>
              </div>
            </main>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
