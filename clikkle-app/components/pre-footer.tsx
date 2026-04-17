"use client";

import Link from "next/link";
import "./pre-footer.css";

const plans = [
  {
    name: "Free",
    price: "$0",
    variable: false,
    tag: false,
    description: "A great fit for passion projects and small applications.",
    buttonText: "Get started",
    href: "/contact",
    variant: "secondary" as const,
  },
  {
    name: "Pro",
    price: "$25",
    variable: true,
    tag: true,
    description:
      "For production applications that need powerful functionality and resources to scale.",
    buttonText: "Start building",
    href: "/contact",
    variant: "primary" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    variable: false,
    tag: false,
    description: "For enterprises that need more power and premium support.",
    buttonText: "Contact us",
    href: "/contact-us",
    variant: "secondary" as const,
  },
];

type PreFooterProps = {
  /** Defaults so multiple instances on one document don’t duplicate ids */
  headingId?: string;
};

/** Matches src/lib/components/PreFooter.svelte */
export function PreFooter({ headingId = "pre-footer-heading" }: PreFooterProps) {
  return (
    <section className="overflow-hidden" aria-labelledby={headingId}>
      <div className="pre-footer-bg" aria-hidden="true" />
      <div className="pre-footer-wrap">
        <div className="pre-footer-grid">
          <section className="pre-footer-hero web-hero flex flex-col items-center justify-center gap-y-8">
            <h2
              id={headingId}
              className="text-display font-aeonik-pro text-primary max-w-[500px] text-center"
            >
              Start building with Clikkle today
            </h2>
            <Link href="/contact" className="web-btn web-btn-secondary self-center">
              <span className="text">Get started</span>
            </Link>
          </section>

          <section className="pre-footer-card web-strip-plans-card">
            <header className="pre-footer-strip-header web-strip-plans-header">
              <div className="pre-footer-strip-header-wrapper web-strip-plans-header-wrapper">
                <h3 className="text-title font-aeonik-pro text-primary text-5xl! font-regular!">Our plans</h3>
              </div>
            </header>

            <ul className="pre-footer-strip-plans web-strip-plans">
              {plans.map((plan) => (
                <li key={plan.name} className="pre-footer-strip-item web-strip-plans-item">
                  <div className="pre-footer-strip-row web-strip-plans-row md:grid! md:grid-cols-3!">
                    <div className="pre-footer-strip-plan flex flex-col">
                      <div className="flex gap-3">
                        <h4 className="pre-footer-strip-name">{plan.name}</h4>
                        {plan.tag ? (
                          <div className="pre-footer-strip-tag">Most popular</div>
                        ) : null}
                      </div>
                      <div className="pre-footer-strip-price-block mt-4 flex flex-col">
                        {plan.variable ? <span className="pre-footer-strip-from">From</span> : null}
                        <div className="flex items-end gap-2">
                          <div className="pre-footer-strip-price text-title font-aeonik-pro text-primary text-5xl!">
                            {plan.price}
                          </div>
                          {plan.variable ? (
                            <div className="pre-footer-strip-month">/month</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <p className="pre-footer-strip-info text-caption self-end font-medium text-sm!">
                      {plan.description}
                    </p>
                    <Link
                      href={plan.href}
                      className={
                        plan.variant === "primary"
                          ? "web-btn web-btn-primary w-full self-end"
                          : "web-btn web-btn-secondary w-full self-end"
                      }
                    >
                      <span className="text px-2">{plan.buttonText}</span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
