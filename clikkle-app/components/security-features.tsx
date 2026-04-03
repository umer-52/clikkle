"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    label: "DDoS",
    description:
      "Automatically detect and mitigate Distributed Denial-of-Service (DDoS) attacks.",
    icon: "/clikkle/images/icons/gradients/shield.svg",
    href: "/docs/advanced/security/abuse-protection#ddos-protection",
  },
  {
    label: "Encryption",
    description: "Built-in data encryption both in rest and in transit.",
    icon: "/clikkle/images/icons/gradients/lock.svg",
    href: "/docs/advanced/security/encryption",
  },
  {
    label: "Abuse protection",
    description: "Protect your APIs from abuse with built-in protection.",
    icon: "/clikkle/images/icons/gradients/verified.svg",
    href: "/docs/advanced/security/abuse-protection#rate-limiting",
  },
  {
    label: "Data migrations",
    description:
      "Easily transfer data from 3rd parties or between Cloud and self-hosted.",
    icon: "/clikkle/images/icons/gradients/database.svg",
    href: "/docs/advanced/migrations",
  },
  {
    label: "GDPR",
    description:
      "Safeguard user data and privacy with provided GDPR regulations.",
    icon: "/clikkle/images/icons/gradients/star.svg",
    href: "/docs/advanced/security/gdpr",
  },
  {
    label: "SOC-2",
    description:
      "Ensure the highest level of security and privacy protection.",
    icon: "/clikkle/images/icons/gradients/soc-2.svg",
    href: "/docs/advanced/security/soc2",
  },
  {
    label: "HIPAA",
    description: "Protect sensitive user health data.",
    icon: "/clikkle/images/icons/gradients/hipaa.svg",
    href: "/docs/advanced/security/hipaa",
  },
  {
    label: "CCPA",
    description: "Protect sensitive user health data.",
    icon: "/clikkle/images/icons/gradients/ccpa.svg",
    href: "/docs/advanced/security/ccpa",
  },
];

export function SecurityFeatures() {
  return (
    <div className="light bg-[#EDEDF0] pt-20 pb-12 md:pt-40">
      <div className="container mx-auto">
        <section className="flex flex-col gap-4 lg:flex-row lg:items-baseline lg:gap-x-20">
          <h2 className="text-title font-aeonik-pro text-primary max-w-[700px] text-3xl leading-12 text-pretty sm:text-4xl md:text-5xl">
            Safely scale with built-in
            <span className="whitespace-nowrap"> security and compliance</span>
            <span className="text-accent">_</span>
          </h2>
          <p className="text-description text-secondary mt-4 max-w-full font-medium lg:max-w-xl">
            With a security-first approach, we ensure your products and users
            are safe by default, making it easy for you to adhere to strict
            safety policies.
          </p>
        </section>
      </div>
      <div className="mt-20 border-y border-dashed border-black/8">
        <div className="container grid grid-cols-2 overflow-hidden lg:grid-cols-4">
          {features.map((box, i) => (
            <Link
              key={box.label}
              href={box.href}
              className={cn(
                "text-sub-body group relative border-dashed border-black/8 px-2.5 py-8 font-medium md:border-r md:border-b md:p-8",
                // Remove right border on even items in 2-col mobile layout
                i % 2 !== 0 ? "" : "max-lg:border-r",
                // Remove right border on 4th and 8th items in 4-col layout
                (i + 1) % 4 === 0 && "lg:border-r-0",
                // Remove bottom border on last row (items 7, 8)
                i >= 6 && "md:border-b-0",
                // In 4-col layout, remove bottom border for items 5-8
                i >= 4 && "lg:border-b-0",
                // Last item no border
                i === features.length - 1 && "border-r-0"
              )}
            >
              <img loading="lazy"
                src={box.icon}
                width={40}
                height={40}
                alt="" />
              <h3 className="text-primary mt-4 flex flex-wrap items-center gap-0.5">
                {box.label}
                <ArrowRight
                  className="h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 group-focus:translate-x-0.5 group-focus:opacity-100 xl:opacity-0"
                />
              </h3>
              <p className="text-secondary mt-1">{box.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
