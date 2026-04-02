"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    companySize: "",
    website: "",
    useCase: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Basic validation for email field
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        // You could set an error state here
        return;
      }
    }
    
    setFormData(prev => ({ ...prev, [name]: value.trim() }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'company', 'companySize', 'useCase'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      setSubmitStatus('error');
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        companySize: "",
        website: "",
        useCase: ""
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Clikkle for Enterprise
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Enterprise businesses partner with Clikkle to empower their developers with an all-in-one development platform, so they can focus on innovation, not reinventing the wheel. Reduce complexity, accelerate development, and launch faster. Ready to talk? Fill out the form, and one of our experts will be in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Thousands of developers scale with Clikkle
            </h2>
            <blockquote className="text-xl text-gray-300 italic mb-16 max-w-3xl mx-auto">
              "The switch to using Clikkle brought infinite value that I'm still discovering today."
            </blockquote>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Safely scale with built-in security and compliance
            </h3>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              With a security-first approach, we ensure your products and users are safe by default, making it easy for you to adhere to strict safety policies.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8">
              <h4 className="text-lg font-bold text-white mb-4">DDoS</h4>
              <p className="text-gray-400 leading-relaxed">
                Automatically detect and mitigate Distributed Denial-of-Service (DDoS) attacks.
              </p>
              <Link 
                href="https://clikkle.com/docs/advanced/security/abuse-protection"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mt-4"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8">
              <h4 className="text-lg font-bold text-white mb-4">Encryption</h4>
              <p className="text-gray-400 leading-relaxed">
                Built-in data encryption both in rest and in transit.
              </p>
              <Link 
                href="https://clikkle.com/docs/advanced/security/encryption"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mt-4"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8">
              <h4 className="text-lg font-bold text-white mb-4">Abuse protection</h4>
              <p className="text-gray-400 leading-relaxed">
                Protect your APIs from abuse with built-in protection.
              </p>
              <Link 
                href="https://clikkle.com/docs/advanced/security/abuse-protection"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mt-4"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8">
              <h4 className="text-lg font-bold text-white mb-4">Data migrations</h4>
              <p className="text-gray-400 leading-relaxed">
                Easily transfer data from 3rd parties or between Cloud and self-hosted.
              </p>
              <Link 
                href="https://clikkle.com/docs/advanced/migrations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mt-4"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8">
              <h4 className="text-lg font-bold text-white mb-4">GDPR</h4>
              <p className="text-gray-400 leading-relaxed">
                Safeguard user data and privacy with provided GDPR regulations.
              </p>
              <Link 
                href="https://clikkle.com/docs/advanced/security/gdpr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mt-4"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8">
              <h4 className="text-lg font-bold text-white mb-4">SOC-2</h4>
              <p className="text-gray-400 leading-relaxed">
                Ensure the highest level of security and privacy protection.
              </p>
              <Link 
                href="https://clikkle.com/docs/advanced/security/soc2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mt-4"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8">
              <h4 className="text-lg font-bold text-white mb-4">HIPAA</h4>
              <p className="text-gray-400 leading-relaxed">
                Protect sensitive user health data.
              </p>
              <Link 
                href="https://clikkle.com/docs/advanced/security/hipaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mt-4"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8">
              <h4 className="text-lg font-bold text-white mb-4">CCPA</h4>
              <p className="text-gray-400 leading-relaxed">
                Protect sensitive user health data.
              </p>
              <Link 
                href="https://clikkle.com/docs/advanced/security/ccpa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mt-4"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-400">
              Fill out the form below and our enterprise team will get in touch with you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  aria-describedby="firstName-error"
                  className="clikkle-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  aria-describedby="lastName-error"
                  className="clikkle-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Work email address <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  aria-describedby="email-error"
                  className="clikkle-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  aria-describedby="company-error"
                  className="clikkle-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-2">
                  Company size <span className="text-red-500" aria-label="required">*</span>
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  aria-describedby="companySize-error"
                  className="clikkle-input w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="" className="bg-[#1a1a1a]">Select size</option>
                  <option value="1-10" className="bg-[#1a1a1a]">1-10 employees</option>
                  <option value="11-50" className="bg-[#1a1a1a]">11-50 employees</option>
                  <option value="51-200" className="bg-[#1a1a1a]">51-200 employees</option>
                  <option value="201-500" className="bg-[#1a1a1a]">201-500 employees</option>
                  <option value="501-1000" className="bg-[#1a1a1a]">501-1000 employees</option>
                  <option value="1001-5000" className="bg-[#1a1a1a]">1001-5000 employees</option>
                  <option value="5000+" className="bg-[#1a1a1a]">5000+ employees</option>
                </select>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                  Company website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  aria-describedby="website-error"
                  className="clikkle-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="useCase" className="block text-sm font-medium text-gray-300 mb-2">
                Please share more information about your use case <span className="text-red-500" aria-label="required">*</span>
              </label>
              <textarea
                id="useCase"
                name="useCase"
                value={formData.useCase}
                onChange={handleInputChange}
                required
                aria-required="true"
                aria-describedby="useCase-error"
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell us about your project, requirements, and timeline..."
              />
            </div>

            <div className="text-center">
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 font-medium">Thank you for your submission! We'll be in touch soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 font-medium">Please fill in all required fields correctly.</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="web-btn web-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="web-btn-icon animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
