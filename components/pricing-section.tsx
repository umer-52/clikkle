"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

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
  return (
    <div
      className={cn(
        'relative -mt-6 -mb-12 flex min-h-[650px] max-w-screen items-center justify-center overflow-hidden pt-40 md:mb-0 md:pb-10',
        className
      )}
    >
      <div className="container flex w-full flex-col items-center justify-center gap-10">
        <div
          className={cn(
            'animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full',
            'bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(254,_149,_103,_0.2)_0%,_rgba(254,_149,_103,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%)]',
            'bg-position-[0%_0%]'
          )}
        ></div>

        <div className="animate-fade-in relative flex w-full flex-col justify-between gap-8 [animation-delay:150ms] [animation-duration:1000ms] md:flex-row md:items-center">
          <h2 className="text-title text-primary font-aeonik-pro max-w-xl text-pretty">
            Start building like a team of hundreds today<span className="text-accent">_</span>
          </h2>

          <div className="mt-4 flex flex-col gap-2 lg:flex-row">
            <Link href="https://cloud.clikkle.com/register" className="web-button w-full! lg:w-fit!">
              <span className="text">Start building for free</span>
            </Link>
            <Link href="/pricing" className="web-button is-secondary w-full! lg:w-fit!">
              <span className="text">View pricing plans</span>
            </Link>
          </div>
        </div>

        <div className={cn(
          'border-smooth divide-smooth grid min-h-75 w-full grid-cols-1 divide-y divide-dashed rounded-3xl border bg-white/2 backdrop-blur-lg',
          'md:grid-cols-2 md:gap-y-12 md:divide-y-0 md:px-4 md:py-8',
          `lg:grid-cols-${plans.length} lg:divide-x`
        )}>
          {plans.map(({ name, price, tag, subtitle, description }) => {
            const isEnterprise = name === 'Enterprise';
            return (
              <div key={name} className="flex h-full w-full grow flex-col gap-1 px-5 py-5 md:py-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-description text-secondary font-medium">{name}</span>
                  {tag && (
                    <span className="bg-accent-200 text-caption rounded-lg px-1.5 py-0.5 font-medium text-white">
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
                    "web-button mt-8 mb-0 w-full!",
                    name === 'Pro' ? '' : 'is-secondary'
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
