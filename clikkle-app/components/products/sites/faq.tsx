"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
    {
        question: "How do I get started with Sites?",
        answer: 'Head to the <a href="https://cloud.clikkle.com/" class="underline">Clikkle Console</a> and find Clikkle Sites in your project overview. The documentation provides <a href="/docs/products/sites/quick-start" class="underline">quick starts</a> to easily get started with your preferred framework.'
    },
    {
        question: "What does Clikkle Sites cost?",
        answer: 'You can use Clikkle Sites for free on the Free plan, which includes unlimited sites per project. If you need more resources, you can upgrade to a Pro plan. This pricing starts at $25 a month and includes unlimited sites. Learn more about Clikkle\'s pricing plans on the <a href="/pricing" class="underline">pricing page</a>.'
    },
    {
        question: "Does Clikkle have an Enterprise plan for Clikkle Sites?",
        answer: 'Yes, we offer a custom plan for Enterprises. Head over to <a href="/contact-us" class="underline">contact us</a> and fill out the form to get in touch about a custom plan.'
    },
    {
        question: "Can I use Clikkle Sites on the self-hosted version?",
        answer: 'Yes, you can! Clikkle Sites is fully open-source, and you can self-host by following the <a href="/docs/advanced/self-hosting" class="underline">documentation</a>.'
    },
    {
        question: "Does Clikkle have hosting for Startups?",
        answer: 'Yes, we support funded startups with Clikkle\'s hosting capabilities. Take a look at the <a href="/startups" class="underline">Clikkle Startups program</a> to learn more.'
    }
];

export function SitesFaq() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <div className="container grid grid-cols-1 justify-between pt-20 md:grid-cols-12">
            <h2 className="text-white text-2xl lg:text-3xl font-aeonik-pro mt-10 md:col-span-4">FAQ</h2>
            <ul className="w-full divide-y divide-white/5 md:col-span-8">
                {faqItems.map((item, index) => (
                    <li key={index}>
                        <button
                            className="flex w-full items-center justify-between gap-2.5 py-6 text-left cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        >
                            <span className="text-base font-semibold text-white">
                                {item.question}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 text-white/60 shrink-0 transition-transform duration-200 ${
                                    openIndex === index ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="pb-6">
                                <p
                                    className="text-white/50 text-sm leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: item.answer }}
                                />
                            </div>
                        )}
                    </li>
                ))}
                <li>
                    <p className="flex w-full items-center justify-between gap-2.5 py-6 text-left text-base text-white/50">
                        <span>
                            Still have questions?{" "}
                            <a href="https://discord.gg/clikkle" target="_blank" rel="noopener noreferrer" className="underline text-white">
                                Join our Discord
                            </a>
                        </span>
                    </p>
                </li>
            </ul>
        </div>
    );
}
