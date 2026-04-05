"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

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
        'relative -mt-6 -mb-12 flex min-h-[650px] max-w-screen items-center justify-center overflow-hidden pt-40 md:mb-0 md:pb-10',
        className
      )}
    >
      <div className="container flex w-full flex-col items-center justify-center gap-10">
        <div className="animate-fade-in relative flex w-full flex-col justify-between gap-8 [animation-delay:150ms] [animation-duration:1000ms] md:flex-row md:items-center">
          <h2 className="text-title text-primary font-aeonik-pro max-w-xl text-pretty">
            Start building like a team of hundreds today<span className="text-accent">_</span>
          </h2>

          <div className="mt-4 flex flex-col gap-2 lg:flex-row">
            <Link href="https://cloud.clikkle.com/register" className="web-btn web-btn-primary w-full! lg:w-fit!">
              <span className="text">Start building for free</span>
            </Link>
            <Link href="/pricing" className="web-btn web-btn-secondary w-full! lg:w-fit!">
              <span className="text">View pricing plans</span>
            </Link>
          </div>
        </div>

        <div className={cn(
          'border-smooth divide-smooth grid min-h-75 w-full grid-cols-1 divide-y divide-dashed rounded-3xl border bg-white/2 backdrop-blur-lg',
          'md:grid-cols-2 md:gap-y-12 md:divide-y-0 md:px-4 md:py-8',
          lgCols,
          'lg:divide-x'
        )}>
          {visiblePlans.map(({ name, price, tag, subtitle, description }) => {
            const isEnterprise = name === 'Enterprise';
            return (
              <div key={name} className="flex h-full w-full grow flex-col gap-1 px-5 py-5 md:py-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-description text-secondary font-medium">{name}</span>
                  {tag && (
                    <span className="text-caption rounded-md bg-[rgba(45,99,255,0.24)] px-2 py-0.5 font-semibold text-[var(--color-gray-50,#fafafa)]">
                      {tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-title font-aeonik-pro text-primary">
                    {price}
                    {subtitle && (
                      <span className="text-caption text-secondary -ml-1 font-sans">{subtitle}</span>
                    )}
                  </span>
                  <p className="text-caption text-secondary mt-4 mb-0 block font-medium">
                    {description}
                  </p>
                </div>
                <Link
                  className={cn(
                    "web-btn mt-8 mb-0 w-full!",
                    name === 'Pro' ? 'web-btn-primary' : 'web-btn-secondary'
                  )}
                  href={isEnterprise ? '/contact-us/enterprise' : 'https://cloud.clikkle.com/register'}
                >
                  <span className="text">{isEnterprise ? 'Contact us' : 'Start building'}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
