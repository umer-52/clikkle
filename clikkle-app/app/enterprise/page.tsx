"use client";

import Link from "next/link";
import { ArrowRight, Shield, ShieldAlert, Lock, ArrowLeftRight, FileCheck, Award, HeartPulse } from "lucide-react";

const securityFeatures = [
  {
    title: "DDoS",
    description: "Automatically detect and mitigate Distributed Denial-of-Service (DDoS) attacks.",
    icon: ShieldAlert,
  },
  {
    title: "Encryption",
    description: "Built-in data encryption both in rest and in transit.",
    icon: Lock,
  },
  {
    title: "Abuse protection",
    description: "Protect your APIs from abuse with built-in rate limiting.",
    icon: Shield,
  },
  {
    title: "Data migrations",
    description: "Easily transfer data from 3rd parties or between Cloud and self-hosted.",
    icon: ArrowLeftRight,
  },
  {
    title: "GDPR",
    description: "Safeguard user data and privacy with provided GDPR regulations.",
    icon: FileCheck,
  },
  {
    title: "SOC-2",
    description: "Ensure the highest level of security and privacy protection.",
    icon: Award,
  },
  {
    title: "HIPAA",
    description: "Protect sensitive user health data.",
    icon: HeartPulse,
  },
];

export default function EnterpriseContactPage() {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 md:px-0 lg:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form Section */}
          <div className="animate-fade-in flex flex-col justify-start">
            <h1 className="font-aeonik-pro text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-rp from-white to-white/70 mb-6">
              Contact sales
            </h1>
            <p className="text-body text-secondary mb-10 max-w-lg">
              Enterprise businesses partner with Clikkle to empower their developers with an all-in-one development platform, so they can focus on innovation, not reinventing the wheel. Reduce complexity, accelerate development, and launch faster. Ready to talk? Fill out the form, and one of our experts will be in touch.
            </p>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-caption font-medium text-primary">First name</label>
                  <input type="text" id="firstName" className="w-full bg-[rgba(25,25,28,0.5)] border border-smooth rounded-lg px-4 py-3 text-primary focus:border-accent focus:outline-none transition-colors" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-caption font-medium text-primary">Last name</label>
                  <input type="text" id="lastName" className="w-full bg-[rgba(25,25,28,0.5)] border border-smooth rounded-lg px-4 py-3 text-primary focus:border-accent focus:outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-caption font-medium text-primary">Work email address</label>
                <input type="email" id="email" className="w-full bg-[rgba(25,25,28,0.5)] border border-smooth rounded-lg px-4 py-3 text-primary focus:border-accent focus:outline-none transition-colors" placeholder="john@company.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="companyName" className="text-caption font-medium text-primary">Company name</label>
                  <input type="text" id="companyName" className="w-full bg-[rgba(25,25,28,0.5)] border border-smooth rounded-lg px-4 py-3 text-primary focus:border-accent focus:outline-none transition-colors" placeholder="Acme Inc." />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="companySize" className="text-caption font-medium text-primary">Company size</label>
                  <select id="companySize" className="w-full bg-[rgba(25,25,28,0.5)] border border-smooth rounded-lg px-4 py-3 text-primary focus:border-accent focus:outline-none transition-colors appearance-none" defaultValue="">
                    <option value="" disabled>Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1001-5000">1001-5000 employees</option>
                    <option value="5000+">5000+ employees</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="website" className="text-caption font-medium text-primary">Company website</label>
                <input type="url" id="website" className="w-full bg-[rgba(25,25,28,0.5)] border border-smooth rounded-lg px-4 py-3 text-primary focus:border-accent focus:outline-none transition-colors" placeholder="https://example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="usecase" className="text-caption font-medium text-primary">Please share more information about your use case</label>
                <textarea id="usecase" rows={4} className="w-full bg-[rgba(25,25,28,0.5)] border border-smooth rounded-lg px-4 py-3 text-primary focus:border-accent focus:outline-none transition-colors resize-y" placeholder="Tell us how you are planning to use Clikkle..."></textarea>
              </div>

              <button type="button" className="web-btn web-btn-primary w-full justify-center mt-4">
                <span className="text">Contact Sales</span>
              </button>
            </form>
          </div>

          {/* Right Column: Information & Security */}
          <div className="animate-fade-in flex flex-col gap-12 [animation-delay:150ms]">
            
            <div className="rounded-2xl border border-smooth bg-[rgba(25,25,28,0.5)] p-8">
              <h2 className="text-eyebrow font-medium uppercase tracking-widest text-primary mb-6">Thousands of developers scale with Clikkle<span className="text-accent">_</span></h2>
              <blockquote className="text-title text-primary font-medium italic mb-6">
                “The switch to using Clikkle brought infinite value that I'm still discovering today.”
              </blockquote>
            </div>

            <div>
              <h2 className="text-title font-medium text-primary mb-2">Safely scale with built-in security and compliance<span className="text-accent">_</span></h2>
              <p className="text-sub-body text-secondary mb-8">
                With a security-first approach, we ensure your products and users are safe by default, making it easy for you to adhere to strict safety policies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {securityFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-accent" />
                        <h3 className="font-aeonik-pro text-primary text-body">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-secondary">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}
