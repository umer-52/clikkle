'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SiteFooter } from '@/components/site-footer';

/** Mirrors `getReferrerAndUtmSource` from Svelte `$lib/utils/utm` (minimal). */
function getReferrerAndUtmSource(): Record<string, string | undefined> {
    if (typeof window === 'undefined') return {};
    const p = new URLSearchParams(window.location.search);
    return {
        referrer: document.referrer || undefined,
        utm_source: p.get('utm_source') || undefined,
        utm_medium: p.get('utm_medium') || undefined,
        utm_campaign: p.get('utm_campaign') || undefined,
    };
}

/** Same order + `icon` classes as `socials` in Svelte `src/lib/constants.ts`; Clikkle URLs. */
const CONTACT_SOCIALS = [
    { icon: 'web-icon-discord', label: 'Discord', link: 'https://discord.gg/clikkle' },
    { icon: 'web-icon-github', label: 'Github', link: 'https://github.com/clikkle' },
    {
        icon: 'web-icon-x',
        label: 'Twitter',
        link: 'https://twitter.com/intent/follow?screen_name=clikkle',
    },
    { icon: 'web-icon-linkedin', label: 'LinkedIn', link: 'https://linkedin.com/company/clikkle' },
    {
        icon: 'web-icon-youtube',
        label: 'YouTube',
        link: 'https://youtube.com/c/clikkle?sub_confirmation=1',
    },
    { icon: 'web-icon-daily-dev', label: 'Daily.dev', link: 'https://app.daily.dev/squads/clikkle' },
    { icon: 'web-icon-bluesky', label: 'Bluesky', link: 'https://bsky.app/profile/clikkle.com' },
    { icon: 'web-icon-tiktok', label: 'Tiktok', link: 'https://tiktok.com/@clikkle' },
    { icon: 'web-icon-instagram', label: 'Instagram', link: 'https://instagram.com/clikkle' },
] as const;

export default function ContactUsPage() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | undefined>();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(undefined);
        setSubmitting(true);
        const endpoint = process.env.NEXT_PUBLIC_GROWTH_ENDPOINT;
        if (endpoint) {
            try {
                const response = await fetch(`${endpoint}/feedback`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email,
                        firstName,
                        subject,
                        message,
                        ...getReferrerAndUtmSource(),
                    }),
                });
                setSubmitting(false);
                if (response.status >= 400) {
                    setError(response.status >= 500 ? 'Server Error.' : 'Error submitting form.');
                    return;
                }
                setSubmitted(true);
            } catch {
                setSubmitting(false);
                setError('Error submitting form.');
            }
        } else {
            setSubmitting(false);
            setSubmitted(true);
        }
    }

    return (
        <main className="contact-us-page relative min-h-screen min-w-0 overflow-x-clip bg-[var(--bg-primary)] text-primary">
            <div className="contact-us-backdrop" aria-hidden />

            <div className="web-big-padding-section relative z-10 w-full min-w-0 max-w-full">
                <div className="relative py-10">
                    <div className="web-big-padding-section-level-2">
                        <div className="container mx-auto">
                            <div className="web-grid-1-1-opt-2 gap-8">
                                <div>
                                    <div
                                        className={`web-u-max-inline-size-none-mobile ${!submitted ? 'web-u-max-width-380' : ''}`}
                                    >
                                        {submitted ? (
                                            <section className="flex flex-col gap-5">
                                                <h1 className="text-display font-aeonik-pro text-primary">
                                                    Thank you for your message
                                                </h1>
                                                <p className="text-description web-u-padding-block-end-32">
                                                    Your message has been sent successfully. We appreciate your feedback, our team
                                                    will try to get back to you as soon as possible.
                                                </p>
                                                <Link href="/" className="web-button is-secondary mb-8 w-fit">
                                                    <span>Back to homepage</span>
                                                </Link>
                                            </section>
                                        ) : (
                                            <section className="flex flex-col gap-5">
                                                <h1 className="text-display font-aeonik-pro text-primary">Contact Us</h1>
                                                <p className="text-description web-u-padding-block-end-40">
                                                    We&apos;d love your input: questions, feature requests, bugs or compliments.
                                                </p>
                                            </section>
                                        )}
                                        <section className="web-u-padding-block-start-40 web-u-sep-block-start flex flex-col gap-3">
                                            <h2 className="text-label text-primary">Follow us</h2>
                                            <ul className="flex gap-2">
                                                {CONTACT_SOCIALS.map((social) => (
                                                    <li key={social.label}>
                                                        <a
                                                            href={social.link}
                                                            className="web-icon-button"
                                                            aria-label={social.label}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <span className={social.icon} aria-hidden />
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                        <div className="web-is-only-mobile web-u-margin-block-start-40 web-u-padding-block-start-40 web-u-sep-block-start" />
                                    </div>
                                </div>
                                {!submitted ? (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="contact-us-feedback-form mx-auto flex w-full max-w-xl flex-col gap-4"
                                    >
                                        <div className="flex justify-end">
                                            <ul className="web-form-list web-u-max-width-580 web-u-max-inline-size-none-mobile grid w-full gap-4 md:grid-cols-2">
                                                <li className="web-form-item">
                                                    <input
                                                        required
                                                        className="web-input-text w-full"
                                                        type="text"
                                                        placeholder="Name"
                                                        aria-label="Name"
                                                        value={firstName}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                    />
                                                </li>
                                                <li className="web-form-item">
                                                    <input
                                                        required
                                                        className="web-input-text w-full"
                                                        type="email"
                                                        placeholder="Email address"
                                                        aria-label="Email address"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </li>
                                                <li className="web-form-item col-span-2">
                                                    <input
                                                        required
                                                        className="web-input-text w-full"
                                                        type="text"
                                                        name="subject"
                                                        placeholder="Subject"
                                                        aria-label="Subject"
                                                        value={subject}
                                                        onChange={(e) => setSubject(e.target.value)}
                                                    />
                                                </li>
                                                <li className="web-form-item col-span-2">
                                                    <textarea
                                                        required
                                                        name="message"
                                                        className="web-input-text w-full"
                                                        placeholder="Your message"
                                                        aria-label="Message"
                                                        value={message}
                                                        onChange={(e) => setMessage(e.target.value)}
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="web-u-flex-vertical-reverse-mobile mx-auto flex w-full max-w-xl justify-between gap-4">
                                            <p className="text-caption web-u-max-width-380">{error ?? '\u00a0'}</p>
                                            <button
                                                type="submit"
                                                disabled={submitting}
                                                className="web-button is-primary w-full self-center lg:w-auto"
                                            >
                                                <span>Submit</span>
                                            </button>
                                        </div>
                                    </form>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative z-10 mx-auto">
                <SiteFooter />
            </div>
        </main>
    );
}
