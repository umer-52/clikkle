"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

/* Same structure as `pricing.svelte` lighting layer; Clikkle brand blues. */
const PRICING_LIGHTING =
  "bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(45,_99,_255,_0.2)_0%,_rgba(45,_99,_255,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(45,_99,_255,_0.08)_0%,_rgba(45,_99,_255,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(30,_58,_138,_0.08)_0%,_rgba(30,_58,_138,_0)_70%)]";

/** Parity with `pricing.svelte` + `SHOW_SCALE_PLAN` — public marketing often shows 3 columns. */
const SHOW_SCALE_PLAN = false;

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'A great fit for passion projects and small applications.',
  },
  {
    name: 'Pro',
    price: '$25',
    tag: 'Popular',
    description: 'For production applications that need powerful functionality and resources to scale.',
    subtitle: '/month',
  },
  {
    name: 'Scale',
    price: '$599',
    description: 'For teams that handle more complex and large projects and need more control and support.',
    subtitle: '/month',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For enterprises that need more power and premium support.',
  }
];

export function PricingSection({ className }: { className?: string }) {
  const visiblePlans = SHOW_SCALE_PLAN
    ? plans
    : plans.filter((p) => p.name !== "Scale");
  const lgCols =
    visiblePlans.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";

  return (
    <div
      className={cn(
        "pricing-home-section relative -mt-6 -mb-12 flex min-h-[650px] max-w-screen items-center justify-center overflow-hidden pt-40 md:mb-0 md:pb-10",
        className
      )}
    >
      <div className="container flex w-full flex-col items-center justify-center gap-16 lg:gap-24">
        <div
          className={cn(
            "animate-lighting pointer-events-none absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full",
            PRICING_LIGHTING,
            "bg-position-[0%_0%]"
          )}
          aria-hidden
        />
        <div className="animate-fade-in relative flex w-full flex-col justify-between gap-8 [animation-delay:150ms] [animation-duration:1000ms] md:flex-row md:items-center">
          <h2 className="text-title text-primary font-aeonik-pro max-w-xl text-pretty lg:max-w-[42rem]">
            Start building like a team of hundreds today<span className="text-accent">_</span>
          </h2>

          <div className="mt-4 flex flex-col gap-2 lg:flex-row">
            <Link
              href="https://cloud.clikkle.com/register"
              className="web-button is-primary w-full! lg:w-fit!"
            >
              Start building for free
            </Link>
            <Link href="/pricing" className="web-button is-secondary w-full! lg:w-fit!">
              View pricing plans
            </Link>
          </div>
        </div>

        <div className={cn(
          'border-smooth divide-smooth grid min-h-75 w-full max-w-[90rem] grid-cols-1 divide-y divide-dashed rounded-3xl border border-white/[0.08] bg-[#1c1c1e] backdrop-blur-lg',
          'md:grid-cols-2 md:gap-y-12 md:divide-y-0 md:px-4 md:py-8 lg:px-12 lg:py-14',
          lgCols,
          'lg:divide-x lg:divide-solid'
        )}>
          {visiblePlans.map(({ name, price, tag, subtitle, description }) => {
            const isEnterprise = name === 'Enterprise';
            return (
              <div key={name} className="flex h-full min-h-0 w-full grow flex-col gap-1 px-5 py-5 md:py-0 lg:px-10 lg:py-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-description text-secondary font-medium">{name}</span>
                  {tag && (
                    <span className="text-caption rounded-full bg-[var(--color-brand-primary)] px-2.5 py-0.5 font-medium text-white">
                      {tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="font-aeonik-pro text-primary text-[clamp(2.25rem,2rem+1.5vw,3rem)] leading-[1.1] tracking-tight">
                    {price}
                    {subtitle && (
                      <span className="text-caption text-secondary -ml-1 align-middle font-sans font-medium">{subtitle}</span>
                    )}
                  </span>
                  <p className="text-caption text-secondary mt-4 mb-0 block font-medium">
                    {description}
                  </p>
                </div>
                <Link
                  className={cn(
                    "web-button mt-auto mb-0 w-full! shrink-0 pt-8",
                    name === "Pro" ? "is-primary" : "is-secondary"
                  )}
                  href={isEnterprise ? '/contact-us/enterprise' : 'https://cloud.clikkle.com/register'}
                >
                  {isEnterprise ? "Contact us" : "Start building"}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
