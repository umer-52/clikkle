'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { PreFooter } from '@/components/pre-footer';
import './pricing.css';
import { comparisonTables, faqItems, type CellValue, type LinkRow } from './pricing-data';

/* ─── Feature list check (blue / slate, no pink) ─── */
function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="rgba(45, 99, 255, 0.18)" />
      <path
        d="M6 10.5L8.5 13L14 7.5"
        stroke="#2D63FF"
        strokeWidth="1.6"
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

/* ═══════════════════════════════════════════════
   SECTION 1 — Hero
   ═══════════════════════════════════════════════ */
function PricingHero() {
  return (
    <section className="pricing-hero">
      <div className="pricing-hero__glow" aria-hidden="true" />
      <div className="pricing-hero__inner">
        <h1 className="pricing-hero__title">
          Everything your app needs,<br />one subscription
        </h1>
        <p className="pricing-hero__subtitle">
          Build, deploy, and observe your app from one platform, all
          under one subscription.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 2 — Pricing Cards
   ═══════════════════════════════════════════════ */
function PricingCardsSection() {
  return (
    <section className="pricing-cards-section">
      <div className="pricing-cards-container">
        <ul className="pricing-cards-grid">
          {/* ── Free ── */}
          <li>
            <article className="pricing-card">
              <div className="pricing-card__inner">
                <header className="pricing-card__header pricing-section">
                  <h2 className="pricing-card__name">Free</h2>
                  <div className="pricing-card__price pricing-price">$0</div>
                  <p className="pricing-card__desc pricing-description">
                    A great fit for passion projects and small applications.
                  </p>
                  <Link href="/contact" className="web-btn web-btn-secondary">
                    Start building
                  </Link>
                </header>
                <div className="pricing-card__content pricing-section-content">
                  <ul className="pricing-checked-list">
                    <li><CheckCircle /><span>5GB bandwidth</span></li>
                    <li><CheckCircle /><span>2GB storage</span></li>
                    <li><CheckCircle /><span>750K executions</span></li>
                    <li><CheckCircle /><span>75K monthly active users</span></li>
                    <li><CheckCircle /><span>Community support</span></li>
                    <li><CheckCircle /><span>1 Database, 1 Bucket, 2 Functions per project</span></li>
                  </ul>
                  <p className="pricing-card__note">
                    Free projects are paused after 1 week of inactivity. Limit of 2 projects.
                  </p>
                </div>
              </div>
            </article>
          </li>

          {/* ── Pro (highlighted) ── */}
          <li>
            <div className="pricing-card-pro-wrapper">
              <article className="pricing-card pricing-card--pro">
                <header className="pricing-card__header pricing-section">
                  <div className="pricing-card__name-row">
                    <h2 className="pricing-card__name">Pro</h2>
                    <span className="pricing-inline-tag">Most popular</span>
                  </div>
                  <span className="pricing-card__price-from">From</span>
                  <div className="pricing-card__price-row">
                    <span className="pricing-card__price pricing-price">$25</span>
                    <span className="pricing-card__price-suffix">/month</span>
                  </div>
                  <p className="pricing-card__desc pricing-description">
                    For production applications that need powerful functionality and resources to scale.
                  </p>
                  <Link href="/contact" className="web-btn web-btn-primary">
                    Start building
                  </Link>
                </header>
                <div className="pricing-card__content pricing-section-content">
                  <p className="pricing-card__content-label">Dedicated resources per project:</p>
                  <ul className="pricing-checked-list">
                    <li><CheckCircle /><span>2TB bandwidth</span></li>
                    <li><CheckCircle /><span>150GB storage</span></li>
                    <li><CheckCircle /><span>3.5M executions</span></li>
                    <li><CheckCircle /><span>200K monthly active users</span></li>
                    <li><CheckCircle /><span>Organization roles</span></li>
                    <li><CheckCircle /><span>Email support</span></li>
                    <li><CheckCircle /><span>Daily backups stored for 7 days</span></li>
                    <li><CheckCircle /><span>Add-ons</span></li>
                    <li><CheckCircle /><span>Unlimited Databases, Buckets, and Functions</span></li>
                  </ul>
                </div>
              </article>
            </div>
          </li>

          {/* ── Enterprise ── */}
          <li>
            <article className="pricing-card">
              <div className="pricing-card__inner">
                <header className="pricing-card__header pricing-section">
                  <h2 className="pricing-card__name">Enterprise</h2>
                  <div className="pricing-card__price pricing-price">Custom</div>
                  <p className="pricing-card__desc pricing-description">
                    For enterprises that need more power, premium support, and advanced security features.
                  </p>
                  <Link href="/contact-us" className="web-btn web-btn-secondary">
                    Contact us
                  </Link>
                </header>
                <div className="pricing-card__content pricing-section-content">
                  <p className="pricing-card__content-label">Everything in Pro, plus:</p>
                  <ul className="pricing-checked-list">
                    <li><CheckCircle /><span>Uptime SLAs</span></li>
                    <li><CheckCircle /><span>Designated Success Manager</span></li>
                    <li><CheckCircle /><span>Up to 24/7 support</span></li>
                    <li><CheckCircle /><span>Option for private Slack channel</span></li>
                    <li><CheckCircle /><span>Volume discounts</span></li>
                    <li><CheckCircle /><span>Log drains</span></li>
                    <li><CheckCircle /><span>90-day log retention</span></li>
                    <li><CheckCircle /><span>Advanced observability</span></li>
                    <li><CheckCircle /><span>Bring your own Cloud</span></li>
                    <li><CheckCircle /><span>SOC-2, HIPAA, and BAA</span></li>
                    <li><CheckCircle /><span>Custom organization roles</span></li>
                    <li><CheckCircle /><span>Single Sign-On (SSO)</span></li>
                    <li><CheckCircle /><span>Activity logs</span></li>
                    <li><CheckCircle /><span>Custom backup policies</span></li>
                  </ul>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 3 — One Platform Card
   ═══════════════════════════════════════════════ */
function ConsolidationCard() {
  return (
    <section className="pricing-consolidation">
      <div className="pricing-consolidation-container">
        <article className="pricing-stack-card">
          <div className="pricing-stack-header">
            <h3 className="pricing-stack-title">One platform. One subscription.</h3>
            <div className="pricing-stack-badge">1 vendor • 1 subscription • 1 bill</div>
          </div>
          <p className="pricing-stack-desc">
            Replace fragmented backend, hosting, storage, and delivery tooling with a single
            platform built for the full application lifecycle. Reduce integration surface area,
            simplify procurement, and give your team one system to operate and scale.
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
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 4 — Compare Plans Table
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
    <section className="pricing-compare-section" id="compare-plans">
      <div className="pricing-compare-container">
        <header className="pricing-compare-header">
          <h3>Compare plans</h3>
          <p>Discover our plans and find the one that fits your project&apos;s needs.</p>
        </header>

        {/* Sticky column headers */}
        <div className="pricing-compare-sticky">
          <div className="pricing-compare-sticky__label" />
          <div className="pricing-compare-mini-card">
            <h4>Free</h4>
            <Link href="/contact" className="web-btn web-btn-outline">
              Start building
            </Link>
          </div>
          <div className="pricing-compare-mini-card">
            <h4>Pro</h4>
            <Link href="/contact" className="web-btn web-btn-primary">
              Start building
            </Link>
          </div>
          <div className="pricing-compare-mini-card">
            <h4>Enterprise</h4>
            <Link href="/contact-us" className="web-btn web-btn-outline">
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
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 5 — FAQ Accordion
   ═══════════════════════════════════════════════ */
function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="pricing-faq-section">
      <div className="pricing-faq-container">
        <div className="pricing-faq-grid">
          <header>
            <div className="pricing-faq-title">FAQ</div>
          </header>
          <ul className="pricing-faq-list">
            {faqItems.map((item, index) => (
              <li className="pricing-faq-item" key={index}>
                <button
                  className="pricing-faq-trigger"
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
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */
export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCardsSection />
      <ConsolidationCard />
      <ComparePlans />
      <FaqSection />
      <PreFooter headingId="pricing-pre-footer-heading" />
      <SiteFooter />
    </>
  );
}
