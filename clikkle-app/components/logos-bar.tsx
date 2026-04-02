"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function LogosBar({ className, title = 'Loved by startups and world leaders' }: { className?: string, title?: string }) {
  const logos = [
    { src: '/clikkle/images/logos/trusted-by/apple.svg', alt: 'Apple', width: 42, height: 48 },
    { src: '/clikkle/images/logos/trusted-by/oracle.svg', alt: 'ORACLE', width: 136, height: 17 },
    { src: '/clikkle/images/logos/trusted-by/tiktok.svg', alt: 'TikTok', width: 133, height: 32 },
    { src: '/clikkle/images/logos/trusted-by/intel.svg', alt: 'intel', width: 76, height: 30 },
    { src: '/clikkle/images/logos/trusted-by/ibm.svg', alt: 'IBM', width: 74, height: 30 },
    { src: '/clikkle/images/logos/trusted-by/american-airlines.svg', alt: 'American Airlines', width: 147, height: 24 },
    { src: '/clikkle/images/logos/trusted-by/deloitte.svg', alt: 'Deloitte.', width: 103, height: 20 },
    { src: '/clikkle/images/logos/trusted-by/gm.svg', alt: 'GM', width: 48, height: 48 },
    { src: '/clikkle/images/logos/trusted-by/ey.svg', alt: 'EY', width: 46, height: 48 },
    { src: '/clikkle/images/logos/trusted-by/nestle.svg', alt: 'Nestle', width: 150, height: 34 },
    { src: '/clikkle/images/logos/trusted-by/bosch.svg', alt: 'BOSCH', width: 110, height: 37 },
    { src: '/clikkle/images/logos/trusted-by/decathlon.svg', alt: 'DECATHLON', width: 127, height: 32 },
  ];

  return (
    <div className={cn('py-12', className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="font-aeonik-pro text-greyscale-100 text-description mx-auto max-w-[312px] text-center text-pretty">
          {title}
        </h2>
        <div className="relative grid grid-cols-3 gap-6 py-10 md:grid-cols-6 md:gap-8">
          {logos.map(({ src, alt, width, height }) => (
            <div key={src} className="flex items-center justify-center">
              <img loading="lazy"
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="max-w-[80px] md:max-w-none" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/customers"
            className="text-primary text-sm font-medium hover:underline"
          >
            Read our case studies →
          </Link>
        </div>
      </div>
    </div>
  );
}
