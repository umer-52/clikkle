"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const securityFeatures = [
  {
    name: "DDoS Protection",
    description: "Automatically detect and mitigate Distributed Denial-of-Service (DDoS) attacks.",
    icon: "🛡️",
    href: "https://clikkle.com/docs/advanced/security/abuse-protection"
  },
  {
    name: "Encryption",
    description: "End-to-end encryption for data at rest and in transit with industry-standard protocols.",
    icon: "🔐",
    href: "https://clikkle.com/docs/advanced/security/encryption"
  },
  {
    name: "Abuse Protection",
    description: "Built-in abuse detection and prevention to keep your applications secure.",
    icon: "🚫",
    href: "https://clikkle.com/docs/advanced/security/abuse-protection"
  },
  {
    name: "Data Migrations",
    description: "Secure and reliable data migration tools with zero-downtime transfers.",
    icon: "📊",
    href: "https://clikkle.com/docs/advanced/migrations"
  },
  {
    name: "GDPR Compliant",
    description: "Full compliance with General Data Protection Regulation requirements.",
    icon: "🇪🇺",
    href: "https://clikkle.com/docs/advanced/security/gdpr"
  },
  {
    name: "SOC-2 Certified",
    description: "SOC-2 Type II certified for enterprise-grade security and compliance.",
    icon: "✅",
    href: "https://clikkle.com/docs/advanced/security/soc2"
  },
  {
    name: "HIPAA Ready",
    description: "HIPAA-compliant infrastructure for healthcare applications.",
    icon: "🏥",
    href: "https://clikkle.com/docs/advanced/security/hipaa"
  },
  {
    name: "CCPA Compliant",
    description: "California Consumer Privacy Act compliance for user data protection.",
    icon: "🇺🇸",
    href: "https://clikkle.com/docs/advanced/security/ccpa"
  }
];

export function SecurityCompliance() {
  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Safely scale with built-in security and compliance
            <span className="text-blue-600 animate-pulse">_</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            With a security-first approach, we ensure your products and users are safe by default, 
            making it easy for you to adhere to strict safety policies.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link 
                href={feature.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <div className="h-full bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10">
                  {/* Icon */}
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {feature.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg 
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link 
            href="https://clikkle.com/docs/advanced/security"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold transition-colors"
          >
            Explore security features
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
