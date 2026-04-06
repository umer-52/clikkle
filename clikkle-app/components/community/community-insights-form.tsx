'use client';

import { useState } from 'react';

/** Mirrors `+page.svelte` “Appwrite insights” / `newsletter()` from `Newsletter.svelte`. */
export function CommunityInsightsForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | undefined>();
    const [submitting, setSubmitting] = useState(false);

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitting(true);
        setError(undefined);
        const endpoint = process.env.NEXT_PUBLIC_GROWTH_ENDPOINT;
        if (endpoint) {
            try {
                const response = await fetch(`${endpoint}/newsletter/subscribe`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email }),
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
        <div className="web-grid-1-1-opt-2 gap-8">
            <div>
                <div className={`web-u-max-inline-size-none-mobile ${!submitted ? 'web-u-max-width-380' : ''}`}>
                    <section className="flex flex-col gap-5">
                        <h2 className="text-title font-aeonik-pro text-primary">Clikkle insights</h2>
                        <p className="text-description web-u-padding-block-end-40">
                            Sign up to our company blog and get the latest insights from Clikkle. Learn more about
                            engineering, product design, building community, and tips & tricks for using Clikkle.
                        </p>
                    </section>
                </div>
            </div>
            {submitted ? (
                <div className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <circle
                            cx="9"
                            cy="9"
                            r="8"
                            fill="color-mix(in srgb, var(--color-brand-primary, #2d63ff) 12%, transparent)"
                            stroke="color-mix(in srgb, var(--color-brand-primary, #2d63ff) 32%, transparent)"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5.25 10.5L7.75 12.5L12.75 6"
                            stroke="var(--color-text-primary)"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="text-main-body text-primary">Thank you for subscribing! An email has been sent to your inbox.</span>
                </div>
            ) : (
                <form onSubmit={submit} className="community-insights-form flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="community-insights-name" className="text-main-body text-primary">
                            Your name
                        </label>
                        <input
                            className="web-input-text w-full"
                            type="text"
                            placeholder="Enter your name"
                            id="community-insights-name"
                            name="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="community-insights-email" className="text-main-body text-primary">
                            Your email
                        </label>
                        <input
                            className="web-input-text w-full"
                            type="email"
                            placeholder="Enter your email"
                            required
                            id="community-insights-email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="web-button is-primary w-fit" disabled={submitting}>
                        Sign up
                    </button>
                    {error ? <span className="text-main-body text-primary">Something went wrong. Please try again later.</span> : null}
                </form>
            )}
        </div>
    );
}
