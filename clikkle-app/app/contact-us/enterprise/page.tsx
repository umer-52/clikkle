'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EnterpriseContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        companySize: '',
        website: '',
        useCase: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requiredFields = ['firstName', 'lastName', 'email', 'company', 'companySize', 'useCase'];
        const missingFields = requiredFields.filter((field) => !formData[field as keyof typeof formData]);

        if (missingFields.length > 0) {
            setSubmitStatus('error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                companySize: '',
                website: '',
                useCase: '',
            });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A]">
            <section className="px-6 pb-20 pt-32">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-16 text-center">
                        <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">Clikkle for Enterprise</h1>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400">
                            Enterprise businesses partner with Clikkle to empower their developers with an all-in-one development
                            platform, so they can focus on innovation, not reinventing the wheel. Reduce complexity, accelerate
                            development, and launch faster. Ready to talk? Fill out the form, and one of our experts will be in
                            touch.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t border-white/10 px-6 py-20">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-4xl font-bold text-white">Thousands of developers scale with Clikkle</h2>
                        <blockquote className="mx-auto mb-16 max-w-3xl text-xl italic text-gray-300">
                            &quot;The switch to using Clikkle brought infinite value that I&apos;m still discovering today.&quot;
                        </blockquote>
                    </div>

                    <div className="mb-16 text-center">
                        <h3 className="mb-8 text-2xl font-bold text-white">Safely scale with built-in security and compliance</h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-400">
                            With a security-first approach, we ensure your products and users are safe by default, making it easy for
                            you to adhere to strict safety policies.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: 'DDoS',
                                body: 'Automatically detect and mitigate Distributed Denial-of-Service (DDoS) attacks.',
                                href: 'https://clikkle.com/docs/advanced/security/abuse-protection',
                            },
                            {
                                title: 'Encryption',
                                body: 'Built-in data encryption both in rest and in transit.',
                                href: 'https://clikkle.com/docs/advanced/security/encryption',
                            },
                            {
                                title: 'Abuse protection',
                                body: 'Protect your APIs from abuse with built-in protection.',
                                href: 'https://clikkle.com/docs/advanced/security/abuse-protection',
                            },
                            {
                                title: 'Data migrations',
                                body: 'Easily transfer data from 3rd parties or between Cloud and self-hosted.',
                                href: 'https://clikkle.com/docs/advanced/migrations',
                            },
                            {
                                title: 'GDPR',
                                body: 'Safeguard user data and privacy with provided GDPR regulations.',
                                href: 'https://clikkle.com/docs/advanced/security/gdpr',
                            },
                            {
                                title: 'SOC-2',
                                body: 'Ensure the highest level of security and privacy protection.',
                                href: 'https://clikkle.com/docs/advanced/security/soc2',
                            },
                            {
                                title: 'HIPAA',
                                body: 'Protect sensitive user health data.',
                                href: 'https://clikkle.com/docs/advanced/security/hipaa',
                            },
                            {
                                title: 'CCPA',
                                body: 'Protect sensitive user health data.',
                                href: 'https://clikkle.com/docs/advanced/security/ccpa',
                            },
                        ].map((card) => (
                            <div
                                key={card.title}
                                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8"
                            >
                                <h4 className="mb-4 text-lg font-bold text-white">{card.title}</h4>
                                <p className="leading-relaxed text-gray-400">{card.body}</p>
                                <Link
                                    href={card.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-blue-500 transition-colors hover:text-blue-400"
                                >
                                    Learn more
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-white/10 px-6 py-20">
                <div className="container mx-auto max-w-2xl">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-white">Ready to get started?</h2>
                        <p className="text-lg text-gray-400">
                            Fill out the form below and our enterprise team will get in touch with you
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div>
                                <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-300">
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
                                    className="clikkle-input w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="John"
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-300">
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
                                    className="clikkle-input w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
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
                                    className="clikkle-input w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-300">
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
                                    className="clikkle-input w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Acme Corp"
                                />
                            </div>

                            <div>
                                <label htmlFor="companySize" className="mb-2 block text-sm font-medium text-gray-300">
                                    Company size <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <select
                                    id="companySize"
                                    name="companySize"
                                    value={formData.companySize}
                                    onChange={handleInputChange}
                                    required
                                    aria-required="true"
                                    className="clikkle-input w-full rounded-lg px-4 py-3 text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="" className="bg-[#1a1a1a]">
                                        Select size
                                    </option>
                                    <option value="1-10" className="bg-[#1a1a1a]">
                                        1-10 employees
                                    </option>
                                    <option value="11-50" className="bg-[#1a1a1a]">
                                        11-50 employees
                                    </option>
                                    <option value="51-200" className="bg-[#1a1a1a]">
                                        51-200 employees
                                    </option>
                                    <option value="201-500" className="bg-[#1a1a1a]">
                                        201-500 employees
                                    </option>
                                    <option value="501-1000" className="bg-[#1a1a1a]">
                                        501-1000 employees
                                    </option>
                                    <option value="1001-5000" className="bg-[#1a1a1a]">
                                        1001-5000 employees
                                    </option>
                                    <option value="5000+" className="bg-[#1a1a1a]">
                                        5000+ employees
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="website" className="mb-2 block text-sm font-medium text-gray-300">
                                    Company website
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    className="clikkle-input w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="https://company.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="useCase" className="mb-2 block text-sm font-medium text-gray-300">
                                Please share more information about your use case{' '}
                                <span className="text-red-500" aria-label="required">
                                    *
                                </span>
                            </label>
                            <textarea
                                id="useCase"
                                name="useCase"
                                value={formData.useCase}
                                onChange={handleInputChange}
                                required
                                aria-required="true"
                                rows={6}
                                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tell us about your project, requirements, and timeline..."
                            />
                        </div>

                        <div className="text-center">
                            {submitStatus === 'success' && (
                                <div className="mb-4 rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                                    <p className="font-medium text-green-400">Thank you for your submission! We&apos;ll be in touch soon.</p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                                    <p className="font-medium text-red-400">Please fill in all required fields correctly.</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="web-btn web-btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="web-btn-icon animate-spin text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
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
