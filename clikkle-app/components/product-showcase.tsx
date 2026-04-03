"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { BentoAuth } from "./bento-animations/auth";
import { BentoDatabases } from "./bento-animations/databases";
import { BentoStorage } from "./bento-animations/storage";
import { BentoFunctions } from "./bento-animations/functions";
import { BentoMessaging } from "./bento-animations/messaging";
import { BentoRealtime } from "./bento-animations/realtime";
import { BentoSites } from "./bento-animations/sites";

export function ProductShowcase() {
  const build = [
      { label: 'Auth', icon: '/clikkle/images/icons/illustrated/dark/auth.png', href: '/products/auth' },
      { label: 'Databases', icon: '/clikkle/images/icons/illustrated/dark/databases.png', href: '/docs/products/databases' },
      { label: 'Storage', icon: '/clikkle/images/icons/illustrated/dark/storage.png', href: '/products/storage' },
      { label: 'Functions', icon: '/clikkle/images/icons/illustrated/dark/functions.png', href: '/products/functions' },
      { label: 'Realtime', icon: '/clikkle/images/icons/illustrated/dark/realtime.png', href: '/docs/apis/realtime' },
      { label: 'Messaging', icon: '/clikkle/images/icons/illustrated/dark/messaging.png', href: '/products/messaging' }
  ];

  const deploy = [
      { label: 'Sites', icon: '/clikkle/images/icons/illustrated/dark/sites.png', href: '/products/sites' }
  ];

  return (
    <div className="container py-20">
      <div className="mx-auto mb-16 flex max-w-5xl flex-col gap-8">
        <h2 className="text-primary font-aeonik-pro text-title mx-auto max-w-lg text-center scroll-mt-20">
          Build like a team of hundreds
        </h2>

        <div className="hidden justify-between gap-8 lg:flex">
          <div
            className={cn(
                'bg-card border-smooth text-primary relative flex h-10 items-center gap-4 rounded-lg border border-dashed p-1 text-sm',
                'after:border-smooth after:absolute after:top-1/2 after:-right-22 after:h-px after:w-22 after:-translate-y-1/2 after:border-b after:border-dashed'
            )}
          >
            <span className="text-eyebrow text-secondary font-aeonik-fono ml-3 uppercase">Build</span>
            <div className="flex h-full w-full justify-between gap-2">
                {build.map((product) => (
                  <Link
                      key={product.label}
                      href={product.href}
                      className="bg-greyscale-800 hover:bg-greyscale-750/50 flex h-full w-fit items-center justify-center gap-2 rounded-lg px-3 backdrop-blur-lg transition-opacity"
                  >
                      <span className="text-primary text-caption flex items-center justify-center gap-1 font-medium">
                          <img loading="lazy"
                              src={product.icon}
                              alt={product.label}
                              className="size-6" />
                          {product.label}
                      </span>
                  </Link>
                ))}
            </div>
          </div>

          <div
            className="bg-card border-smooth text-primary flex h-10 items-center gap-4 rounded-lg border border-dashed p-1 text-sm"
          >
            <span className="text-eyebrow text-secondary font-aeonik-fono ml-3 uppercase">Deploy</span>
            <div className="flex h-full w-full justify-between gap-2">
                {deploy.map((product) => (
                  <Link
                      key={product.label}
                      href={product.href}
                      className="bg-greyscale-800 hover:bg-greyscale-750/50 flex h-full w-fit items-center justify-center gap-2 rounded-lg px-3 backdrop-blur-lg transition-opacity"
                  >
                      <span className="text-primary text-caption flex items-center justify-center gap-1 font-medium">
                          <img loading="lazy"
                              src={product.icon}
                              alt={product.label}
                              className="size-6" />
                          {product.label}
                      </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:grid md:grid-cols-12">
          <BentoAuth />
          <BentoDatabases />
          <BentoStorage />
          <BentoFunctions />
          <BentoMessaging />
          <BentoRealtime />
          <BentoSites />
      </div>
    </div>
  );
}
