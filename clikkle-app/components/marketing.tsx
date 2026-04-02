import { pricingTiers, type FeatureCard, type PricingTier } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { Check, Search, Sparkles } from "lucide-react";
import Link from "next/link";

export function SectionHeading({ title, description, eyebrow, align }: { title: string; description?: string; eyebrow?: string; align?: "left" | "center" }) {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
      {eyebrow ? (
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-primary)] mb-4 block">
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function PricingCards({ tiers }: { tiers?: PricingTier[] } = {}) {
  const displayTiers = tiers || pricingTiers;
  return (
    <section className="py-20 md:py-32 bg-[var(--bg-primary)]">
      <div className="shell mx-auto">
        <SectionHeading 
          title="Start building for free_" 
          description="Flexible pricing for teams of all sizes. No credit card required."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {displayTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={0.1 * i} className="h-full">
              <article 
                className={`flex flex-col h-full rounded-3xl p-8 transition-all duration-300 ${
                  tier.featured 
                    ? "bg-[#19191c] border border-[var(--color-primary)]/50 shadow-[0_0_40px_rgba(240,46,101,0.1)] transform md:-translate-y-4" 
                    : "bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--color-primary)]/30 hover:shadow-[var(--shadow-4)]"
                }`}
              >
                <header className="mb-8">
                  <h3 className={`text-xl font-bold mb-2 ${tier.featured ? "text-white" : "text-[var(--text-primary)]"}`}>
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className={`text-4xl md:text-5xl font-bold tracking-tight ${tier.featured ? "text-white" : "text-[var(--text-primary)]"}`}>
                      {tier.price}
                    </span>
                    {tier.price !== "Custom" ? (
                      <span className={`text-sm ${tier.featured ? "text-[#c3c3c6]" : "text-[var(--text-secondary)]"}`}>
                        /month
                      </span>
                    ) : null}
                  </div>
                  <p className={`text-sm leading-relaxed ${tier.featured ? "text-[#9b9ba7]" : "text-[var(--text-secondary)]"}`}>
                    {tier.description}
                  </p>
                </header>

                <ul className="flex-1 space-y-4 mb-8">
                  {tier.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${tier.featured ? "text-[var(--color-primary)]" : "text-[var(--color-primary)]"}`} />
                      <span className={`text-sm leading-tight ${tier.featured ? "text-white" : "text-[var(--text-primary)]"}`}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.price === "Custom" ? "/contact" : "/register"}
                  className={`w-full py-3 px-6 rounded-lg text-center font-semibold text-sm transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    tier.featured 
                      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-[#19191c]" 
                      : "bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-[var(--bg-secondary)]"
                  }`}
                >
                  {tier.price === "Custom" ? "Contact sales" : "Get started"}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-primary)] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)]/5 blur-[120px] pointer-events-none" />
      
      <div className="shell relative z-10 text-center max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1]">
            Build like a team of hundreds_
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
            Stop wrestling with infrastructure. Start building your next idea with Clikkle's robust backend services.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/register" className="web-btn web-btn-primary w-full sm:w-auto shadow-[var(--shadow-3)]">
            Start building
          </Link>
          <Link href="/contact" className="web-btn web-btn-secondary w-full sm:w-auto">
            Talk to sales
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="section pb-6 pt-14 md:pt-20">
      <div className="shell">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-12 md:px-10 md:py-16">
          <div className="grid-sheen absolute inset-0 opacity-35" />
          <div className="relative max-w-3xl">
            <Reveal>
              <div className="eyebrow">{eyebrow}</div>
              <h1 className="heading-display mt-5 text-4xl font-bold md:text-6xl">{title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{description}</p>
              {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({ cards }: { cards: FeatureCard[] }) {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => (
        <Reveal key={card.title} delay={index * 0.08}>
          <div className="glass-panel card-hover h-full rounded-[1.6rem] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <card.icon size={22} />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ProductSpotlight() {
  const mockRows = [
    ["Runtime", "Edge + serverless + queued jobs"],
    ["Security", "SSO, audit logs, scoped roles"],
    ["Release mode", "Preview, staging, production"],
    ["Observability", "Live traces, deploy analytics, agent logs"],
  ];

  return (
    <section className="section">
      <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow="Control Plane"
          title="One dashboard for product launches, backend services, and AI workflows."
          description="Clikkle mirrors the structure of a premium developer platform: strong hierarchy, sticky navigation, conversion moments, and card-based storytelling."
        />
        <Reveal delay={0.1}>
          <div className="glass-panel overflow-hidden rounded-[2rem] border-white/12">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Workspace
                </div>
                <div className="mt-1 text-xl font-semibold">clikkle-cloud-prod</div>
              </div>
              <span className="rounded-full bg-success/18 px-3 py-1 text-sm font-semibold text-success">
                healthy
              </span>
            </div>
            <div className="grid gap-5 p-5">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["Deployments", "214", "successful this month"],
                  ["Database", "32M", "rows served today"],
                  ["Agents", "18", "active workflows"],
                ].map(([label, value, detail]) => (
                  <div key={label} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-muted">{label}</div>
                    <div className="mt-3 text-2xl font-semibold">{value}</div>
                    <div className="mt-1 text-sm text-slate-300">{detail}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-[#09112a] p-4">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Release summary
                </div>
                <div className="grid gap-3">
                  {mockRows.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm"
                    >
                      <span className="text-muted">{label}</span>
                      <span className="font-medium text-slate-100">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TestimonialStrip({
  testimonials,
}: {
  testimonials: Array<{ quote: string; name: string; role: string }>;
}) {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Social Proof"
          title="Teams switch because Clikkle makes the platform story feel aligned."
          description="The content is original, but the page rhythm follows the same trust-building sequence you'd expect from a premium devtools homepage."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <div className="glass-panel card-hover h-full rounded-[1.6rem] p-6">
                <Sparkles className="text-warning" size={18} />
                <p className="mt-4 text-base leading-7 text-slate-100">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SearchPanel() {
  return (
    <div className="glass-panel rounded-[1.75rem] p-5">
      <div className="flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/5 px-4 py-3">
        <Search size={18} className="text-muted" />
        <span className="text-sm text-muted">Search the Clikkle docs, guides, and APIs</span>
      </div>
      <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-[#09112a] p-5">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
          Recommended paths
        </div>
        <div className="mt-4 grid gap-3">
          {[
            "Launch your first project",
            "Connect Auth to your app",
            "Run an AI workflow",
            "Ship from preview to prod",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
