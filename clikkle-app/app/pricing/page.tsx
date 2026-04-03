'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { PreFooter } from '@/components/pre-footer';
import { withBasePath } from '@/lib/basepath';
import './pricing.css';
import { comparisonTables, faqItems, type CellValue, type LinkRow } from './pricing-data';

/* ─── Feature list check — geometry parity with Appwrite `checked-badge` (20×20, r=8 circle) ─── */
function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle
        cx="10"
        cy="10"
        r="8"
        fill="rgba(45, 99, 255, 0.08)"
        stroke="#2D63FF"
        strokeOpacity={0.32}
        strokeWidth={1.2}
      />
      <path
        d="M6.25 11.5L8.75 13.5L13.75 7"
        stroke="#E4E4E7"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── SVG helper: gradient checkmark for comparison table ─── */
function GradientCheck() {
  return (
    <svg className="pricing-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 13l4 4L19 7"
        stroke="#2D63FF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Info icon for tooltips ─── */
function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm1 12H7V7h2v5zm0-6H7V4h2v2z" />
    </svg>
  );
}

/* ─── Chevron icon ─── */
function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 7.5L10 12.5L15 7.5" />
    </svg>
  );
}

const CLOUD_REGISTER = 'https://cloud.clikkle.com/register';
const CLOUD_PRO_CREATE = 'https://cloud.clikkle.com/console?type=create&plan=tier-1';

/* ═══════════════════════════════════════════════
   Pricing cards + bottom CTA row — matches src/routes/pricing/+page.svelte
   ═══════════════════════════════════════════════ */
const PRICING_COLUMNS = 'repeat(3, 1fr)';

function PricingCardsGrid() {
  return (
    <>
      {/* Svelte +page.svelte: --columns-template on .web-pricing-cards; list gap 1rem in page <style> */}
      <div
        className="web-pricing-cards pricing-web-pricing-cards"
        style={{ ['--columns-template' as string]: PRICING_COLUMNS }}
      >
        <ul className="web-pricing-cards-list pricing-cards-grid">
            {/* ── Free — article > .web-pricing-cards-item > header + content ── */}
            <li>
              <article className="pricing-card web-card-pricing">
                <div className="pricing-card__item">
                  <header className="web-pricing-cards-header pricing-card__header">
                    <h2 id="starter" className="pricing-card__name">
                      Free
                    </h2>
                    <div className="pricing-card__price-stack pricing-card__price-stack--simple">
                      <div className="pricing-card__price pricing-price">$0</div>
                      <div className="pricing-card__price-spacer" aria-hidden>
                        &nbsp;
                      </div>
                    </div>
                    <p className="pricing-card__desc pricing-description">
                      A great fit for passion projects and small applications.
                    </p>
                    <a
                      href={CLOUD_REGISTER}
                      className="web-btn web-btn-secondary pricing-card__cta is-full-width"
                    >
                      <span className="pricing-card__btn-label">Start building</span>
                    </a>
                  </header>
                  <div className="web-pricing-cards-content pricing-card__content">
                    <ul className="pricing-checked-list web-checked-list-circle">
                      <li>
                        <CheckCircle />
                        <span>5GB bandwidth</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>2GB storage</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>750K executions</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>75K monthly active users</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Community support</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>1 Database, 1 Bucket, 2 Functions per project</span>
                      </li>
                    </ul>
                    <p className="pricing-card__note">
                      Free projects are paused after 1 week of inactivity. Limit of 2 projects.
                    </p>
                  </div>
                </div>
              </article>
            </li>

            {/* ── Pro — outer gradient border; article has header + content only (no inner item) ── */}
            <li>
              <div className="pricing-card-pro-wrapper web-card-pro-outer pricing-card-pro-wrapper--svelte">
                <article className="pricing-card pricing-card--pro web-card-pricing-inner">
                  <header className="web-pricing-cards-header pricing-card__header">
                    {/* Svelte: nested <header class="flex gap-3"> — title + tag inline, not space-between */}
                    <div className="pricing-card-pro-heading-row flex flex-wrap items-center gap-3">
                      <h2 id="pro" className="pricing-card__name">
                        Pro
                      </h2>
                      <span className="pricing-inline-tag web-inline-tag is-pink">Most popular</span>
                    </div>
                    <div className="pricing-card__price-stack">
                      <span className="pricing-card__price-from pricing-card__price-from--tight">
                        From
                      </span>
                      <div className="pricing-card__price-row pricing-card__price-row--pro">
                        <span className="pricing-card__price pricing-price">$25</span>
                        <span className="pricing-card__price-suffix">/month</span>
                      </div>
                    </div>
                    <p className="pricing-card__desc pricing-description">
                      For production applications that need powerful functionality and resources to scale.
                    </p>
                    <a
                      href={CLOUD_PRO_CREATE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="web-btn web-btn-primary pricing-card__cta is-full-width pricing-card__cta--pro"
                    >
                      <span className="pricing-card__btn-label">Start building</span>
                    </a>
                  </header>
                  <div className="web-pricing-cards-content pricing-card__content">
                    <p className="pricing-card__content-lead">Dedicated resources per project:</p>
                    <ul className="pricing-checked-list web-checked-list-circle">
                      <li>
                        <CheckCircle />
                        <span>2TB bandwidth</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>150GB storage</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>3.5M executions</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>200K monthly active users</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Organization roles</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Email support</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Daily backups stored for 7 days</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Add-ons</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Unlimited Databases, Buckets, and Functions</span>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </li>

            {/* ── Enterprise ── */}
            <li>
              <article className="pricing-card web-card-pricing">
                <div className="pricing-card__item">
                  <header className="web-pricing-cards-header pricing-card__header">
                    <h2 id="enterprise" className="pricing-card__name">
                      Enterprise
                    </h2>
                    <div className="pricing-card__price-stack pricing-card__price-stack--simple">
                      <div className="pricing-card__price pricing-price">Custom</div>
                      <div className="pricing-card__price-spacer" aria-hidden>
                        &nbsp;
                      </div>
                    </div>
                    <p className="pricing-card__desc pricing-description">
                      For enterprises that need more power, premium support, and advanced security features.
                    </p>
                    <Link
                      href="/contact-us/enterprise"
                      className="web-btn web-btn-secondary pricing-card__cta is-full-width pricing-card__cta--enterprise"
                    >
                      <span className="pricing-card__btn-label">Contact us</span>
                    </Link>
                  </header>
                  <div className="web-pricing-cards-content pricing-card__content">
                    <p className="pricing-card__content-lead">Everything in Pro, plus:</p>
                    <ul className="pricing-checked-list web-checked-list-circle">
                      <li>
                        <CheckCircle />
                        <span>Uptime SLAs</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Designated Success Manager</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Up to 24/7 support</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Option for private Slack channel</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Volume discounts</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Log drains</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>90-day log retention</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Advanced observability</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Bring your own Cloud</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>SOC-2, HIPAA, and BAA</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Custom organization roles</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Single Sign-On (SSO)</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Activity logs</span>
                      </li>
                      <li>
                        <CheckCircle />
                        <span>Custom backup policies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </li>
          </ul>
      </div>
    </>
  );
}

/** “One platform. One subscription.” — matches https://appwrite.io/pricing (between tiers and compare). */
function PricingStackSection() {
  return (
    <div className="pricing-stack-section">
      <article className="pricing-stack-card">
        <div className="pricing-stack-intro">
          <h3 className="pricing-stack-title">One platform. One subscription.</h3>
          <div className="pricing-stack-badge">1 vendor • 1 subscription • 1 bill</div>
        </div>
        <p className="pricing-stack-desc">
          Replace fragmented backend, hosting, storage, and delivery tooling with a single platform
          built for the full application lifecycle. Reduce integration surface area, simplify
          procurement, and give your team one system to operate and scale.
        </p>
        <div className="pricing-stack-compare">
          <div className="pricing-state-card">
            <p className="pricing-state-card__label">Before</p>
            <ul className="pricing-state-card__list">
              <li>Multiple tools with overlapping responsibilities</li>
              <li>Separate subscriptions, invoices, and renewal cycles</li>
              <li>More integration, maintenance, and ownership overhead</li>
            </ul>
          </div>
          <div className="pricing-state-card pricing-state-card--after">
            <p className="pricing-state-card__label">After</p>
            <ul className="pricing-state-card__list">
              <li>One platform across the app lifecycle</li>
              <li>One subscription with simpler billing and procurement</li>
              <li>Fewer systems to integrate, secure, and maintain</li>
            </ul>
          </div>
        </div>
        <div className="pricing-stack-footer">
          <a href="#compare-plans" className="pricing-stack-cta">
            See what&apos;s included
          </a>
          <span className="pricing-stack-helper">
            Compare plan limits, included capabilities, and scaling options.
          </span>
        </div>
      </article>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   Compare Plans Table
   ═══════════════════════════════════════════════ */
function CellContent({ value }: { value: CellValue }) {
  if (typeof value === 'boolean' && value) {
    return <GradientCheck />;
  }
  if (typeof value === 'object' && value !== null && 'text' in value) {
    const link = value as LinkRow;
    return <a href={link.url}>{link.text}</a>;
  }
  return <>{String(value)}</>;
}

function ComparePlans() {
  return (
      <div className="web-white-section light py-10 pricing-compare-shell">
      <div className="web-big-padding-section-level-2 pricing-compare-level-2">
        <div className="relative">
          <article className="pricing-compare-article">
          <section className="container pricing-compare-section" id="compare-plans">
        <header className="pricing-compare-header">
          <h3 className="pricing-compare-title">Compare plans</h3>
          <p className="pricing-compare-lead">
            Discover our plans and find the one that fits your project&apos;s needs.
          </p>
        </header>

        {/* Sticky column headers — compare-plans.svelte: Free/Ent secondary, Pro primary */}
        <div className="pricing-compare-sticky">
          <div className="pricing-compare-sticky__label" />
          <div className="pricing-compare-mini-card">
            <h4>Free</h4>
            <a href={CLOUD_REGISTER} className="web-btn web-btn-secondary pricing-compare-mini-btn">
              Start building
            </a>
          </div>
          <div className="pricing-compare-mini-card">
            <h4>Pro</h4>
            <a
              href={CLOUD_PRO_CREATE}
              target="_blank"
              rel="noopener noreferrer"
              className="web-btn web-btn-primary pricing-compare-mini-btn"
            >
              Start building
            </a>
          </div>
          <div className="pricing-compare-mini-card">
            <h4>Enterprise</h4>
            <Link href="/contact-us/enterprise" className="web-btn web-btn-secondary pricing-compare-mini-btn">
              Contact
            </Link>
          </div>
        </div>

        {/* Tables */}
        {comparisonTables.map((table) => (
          <table className="pricing-compare-table" key={table.title}>
            <caption>{table.title}</caption>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.title}>
                  <th>
                    <div className="info-wrapper">
                      {row.title}
                      {row.info && (
                        <span className="pricing-tooltip-wrapper">
                          <span className="info-icon"><InfoIcon /></span>
                          <span className="pricing-tooltip">{row.info}</span>
                        </span>
                      )}
                    </div>
                  </th>
                  <td><CellContent value={row.free} /></td>
                  <td className="is-pro"><CellContent value={row.pro} /></td>
                  <td><CellContent value={row.enterprise} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
          </section>
          </article>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   FAQ — Svelte: section.web-grid-4-6 inside .container
   ═══════════════════════════════════════════════ */
/** Svelte faq.svelte — list only; parent +page.svelte wraps web-grid-4-6 + FAQ title */
function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <ul className="pricing-faq-list w-full">
      {faqItems.map((item, index) => (
        <li className="pricing-faq-item" key={index}>
          <button
            className="pricing-faq-trigger"
            type="button"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <span className={`pricing-faq-chevron ${openIndex === index ? 'pricing-faq-chevron--open' : ''}`}>
              <ChevronDown />
            </span>
          </button>
          <div className={`pricing-faq-answer ${openIndex === index ? 'pricing-faq-answer--open' : ''}`}>
            <div
              className="pricing-faq-answer__inner"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE — mirrors src/routes/pricing/+page.svelte layout
   ═══════════════════════════════════════════════ */
export default function PricingPage() {
  return (
    <div className="web-big-padding-section pricing-page-root relative mt-2">
      <div
        className="pricing-bg-decor web-location-for-mobile pointer-events-none absolute w-full overflow-hidden"
        aria-hidden
      >
        <img
          src={withBasePath('/pricing-bg.png')}
          alt=""
          width={1369}
          className="pricing-bg-decor__img"
        />
      </div>

      <div className="dark relative z-[1] pt-8">
        <div className="web-big-padding-section-level-2">
          <section className="container">
            {/*
              src/routes/pricing/+page.svelte:
              text-display font-aeonik-pro web-u-max-width-900 …
              text-description max-w-sm …
            */}
            <div className="web-hero pricing-web-hero">
              <h1 className="pricing-svelte-h1 text-display font-aeonik-pro">
                Pricing
              </h1>
              <p className="pricing-svelte-subtitle text-description max-w-sm">
                Clikkle offers simple and transparent pricing plans with no surprises.
              </p>
            </div>
          </section>
        </div>

        <div className="web-big-padding-section-level-2">
          <section className="container">
            <PricingCardsGrid />
            <PricingStackSection />
          </section>
        </div>
      </div>

      <ComparePlans />

      <div className="dark relative z-[1] overflow-hidden pt-10">
        <div className="web-big-padding-section-level-2 relative">
          <div className="container relative z-10">
            <section className="web-grid-4-6 pricing-faq-grid">
              <header>
                <div className="pricing-faq-title text-display font-aeonik-pro text-primary">FAQ</div>
              </header>
              <FaqSection />
            </section>
          </div>
        </div>
        <div className="web-big-padding-section-level-2 pricing-level-2-footer relative !mb-0">
          <div className="container">
            <PreFooter headingId="pricing-pre-footer-heading" />
            <SiteFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
