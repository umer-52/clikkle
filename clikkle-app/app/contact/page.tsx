import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { CTASection, PageHero } from "@/components/marketing";
import { contactOptions, pageIntro } from "@/lib/site-data";

export default function ContactPage() {
  const intro = pageIntro.contact;

  return (
    <>
      <PageHero
        eyebrow={intro.eyebrow}
        title={intro.title}
        description={intro.description}
        actions={
          <>
            <Link href="/pricing" className="web-btn web-btn-primary">
              View pricing
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/docs" className="web-btn web-btn-secondary">
              Browse docs
            </Link>
          </>
        }
      />
      <section className="section pt-4">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            {contactOptions.map((option) => (
              <div key={option.title} className="glass-panel rounded-[1.6rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <option.icon size={22} />
                </div>
                <div className="mt-5 text-xl font-semibold">{option.title}</div>
                <p className="mt-3 text-sm leading-7 text-muted">{option.description}</p>
              </div>
            ))}
          </div>
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Send a message
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="text-muted">First name</span>
                <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Ava" />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-muted">Last name</span>
                <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Morgan" />
              </label>
              <label className="grid gap-2 text-sm md:col-span-2">
                <span className="text-muted">Work email</span>
                <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="team@clikkle.io" />
              </label>
              <label className="grid gap-2 text-sm md:col-span-2">
                <span className="text-muted">How can we help?</span>
                <textarea
                  className="min-h-40 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
                  placeholder="We want to migrate our current stack and recreate a polished Clikkle-like launch experience."
                />
              </label>
            </div>
            <button type="button" className="web-btn web-btn-primary mt-6">
              Send inquiry
              <Send size={16} aria-hidden />
            </button>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

