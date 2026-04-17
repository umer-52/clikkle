import { Metadata } from 'next';
import { ProductCards } from '@/components/products/product-cards';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Draft } from '@/components/products/messaging/draft';
import { Target } from '@/components/products/messaging/target';
import { Schedule } from '@/components/products/messaging/schedule';
import { Send } from '@/components/products/messaging/send';
import { PricingSection } from '@/components/pricing-section';
import { PreFooter } from '@/components/pre-footer';
import { SiteFooter } from '@/components/site-footer';

import { withBasePath } from '@/lib/basepath';

export const metadata: Metadata = {
    title: 'Messaging | Clikkle',
    description: 'Clikkle Messaging allows you to communicate with your audience across various mediums. Push notifications, SMS and emails - set up within minutes!'
};

export default function MessagingPage() {
    return (
        <main className="flex flex-col bg-[var(--bg-primary)] overflow-x-hidden">
            {/* Custom Hero for Messaging */}
            <div className="relative overflow-hidden pt-32 pb-40 border-b border-white/8">
                {/* Background Blurs */}
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#FE9567] opacity-20 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E580FE] opacity-20 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
                
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-[5.625rem] min-h-[500px] lg:min-h-[700px]">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <img src={withBasePath("/icons-black/Messaging.png")} alt="Messaging" className="w-8 h-8" loading="lazy" />
                                <span className="text-xs font-aeonik-fono text-white tracking-widest uppercase">
                                    Messaging<span className="text-[#FE9567]">_</span>
                                </span>
                                <span className="text-[10px] font-bold tracking-widest text-[#19191C] bg-white px-2 py-0.5 rounded-sm uppercase">
                                    BETA
                                </span>
                            </div>
                            <h1 className="text-display font-aeonik-pro text-white leading-tight">
                                Open source messaging service for developers
                            </h1>
                            <p className="text-main-body text-white/60 mt-5 max-w-lg font-medium">
                                Set up messaging within minutes and send push notifications, emails, and SMS
                                directly to your users.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-2">
                                <Link
                                    href="https://cloud.clikkle.com"
                                    className="web-btn web-btn-primary w-full sm:w-auto ![background-image:none] !border-transparent !bg-white !text-black shadow hover:!bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    Get started
                                </Link>
                                <Link
                                    href="/docs/products/messaging"
                                    className="web-btn web-btn-secondary w-full sm:w-auto shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    Documentation
                                </Link>
                            </div>
                        </div>

                        <div className="relative h-full w-full flex justify-center lg:justify-end">
                            <img className="h-full max-h-[700px] w-auto object-contain lg:translate-y-[150px]"
                                src="/clikkle/images/products/messaging/phone.png"
                                alt="Phone mockup" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Steps Flow */}
            <div className="container relative pt-20" style={{ ['--padding-block-end' as string]: '7.5rem' }}>
                <Draft />
                <Target />
                <Schedule />
                <Send />
            </div>

            {/* Capabilities Section (white section) */}
            <div className="bg-[#EDEDF0] relative py-10">
                <div className="container" style={{ marginBlockEnd: '160px' }}>
                    <section className="flex flex-col items-start">
                        <span className="text-xs font-aeonik-fono px-3 py-1 bg-black text-white uppercase rounded-full w-fit mb-4 tracking-widest">
                            capabilities_
                        </span>
                        <h2 className="text-display font-aeonik-pro text-[#19191C] max-w-[700px]">
                            All of your messages in one place
                        </h2>
                    </section>
                    <div className="mt-20 overflow-hidden">
                        <ul className="grid grid-cols-1 md:grid-cols-3 text-sm font-medium">
                            {/* Push Notifications */}
                            <li className="flex flex-col gap-3 p-8 border-b md:border-b-0 md:border-r border-black/10">
                                <img src="/clikkle/images/icons/gradients/mobile.svg" alt="" className="w-10 h-10" loading="lazy" />
                                <h3 className="text-[#19191C] font-semibold text-base">Push notifications</h3>
                                <p className="text-[#434347] leading-relaxed">
                                    Effortlessly send push notifications for seamless instant communication.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <Link href="/docs/products/messaging/fcm" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/5 text-[#434347] text-xs hover:bg-black/10 transition-colors">
                                        🔥 <span>FCM</span>
                                    </Link>
                                    <Link href="/docs/products/messaging/apns" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/5 text-[#434347] text-xs hover:bg-black/10 transition-colors">
                                         <span>APNS</span>
                                    </Link>
                                </div>
                            </li>
                            {/* Emails */}
                            <li className="flex flex-col gap-3 p-8 border-b md:border-b-0 md:border-r border-black/10">
                                <img src="/clikkle/images/icons/gradients/email.svg" alt="" className="w-10 h-10" loading="lazy" />
                                <h3 className="text-[#19191C] font-semibold text-base">Emails</h3>
                                <p className="text-[#434347] leading-relaxed">
                                    Easily send emails for smooth communication and information sharing.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <Link href="/docs/products/messaging/mailgun" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/5 text-[#434347] text-xs hover:bg-black/10 transition-colors">
                                        ✉️ <span>Mailgun</span>
                                    </Link>
                                    <Link href="/docs/products/messaging/sendgrid" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/5 text-[#434347] text-xs hover:bg-black/10 transition-colors">
                                        📧 <span>SendGrid</span>
                                    </Link>
                                </div>
                            </li>
                            {/* SMS */}
                            <li className="flex flex-col gap-3 p-8">
                                <img src="/clikkle/images/icons/gradients/message.svg" alt="" className="w-10 h-10" loading="lazy" />
                                <h3 className="text-[#19191C] font-semibold text-base">SMS</h3>
                                <p className="text-[#434347] leading-relaxed">
                                    Send SMS for quick updates beyond your app&apos;s environment.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <Link href="/docs/products/messaging/twilio" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/5 text-[#434347] text-xs hover:bg-black/10 transition-colors">
                                        📱 <span>Twilio</span>
                                    </Link>
                                    <Link href="/docs/products/messaging/vonage" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/5 text-[#434347] text-xs hover:bg-black/10 transition-colors">
                                        📲 <span>Vonage</span>
                                    </Link>
                                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-black/5 text-[#434347] text-xs">
                                        +3
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Coming Soon items */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-3 p-8 border border-black/5 rounded-2xl">
                            <img src="/clikkle/images/icons/gradients/bell.svg" alt="" className="w-10 h-10" loading="lazy" />
                            <h3 className="text-[#19191C] font-semibold text-base flex items-center gap-2">
                                In app notifications
                                <span className="text-[10px] font-bold tracking-wider bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full uppercase">Coming Soon</span>
                            </h3>
                            <p className="text-[#434347] text-sm leading-relaxed">
                                Send realtime alerts to your users within your application.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 p-8 border border-black/5 rounded-2xl">
                            <img src="/clikkle/images/icons/gradients/chat.svg" alt="" className="w-10 h-10" loading="lazy" />
                            <h3 className="text-[#19191C] font-semibold text-base flex items-center gap-2">
                                Chat
                                <span className="text-[10px] font-bold tracking-wider bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full uppercase">Coming Soon</span>
                            </h3>
                            <p className="text-[#434347] text-sm leading-relaxed">
                                Connect chat apps such as Slack, Discord, and WhatsApp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SDKs Section */}
            <div className="relative z-[1] bg-[var(--bg-primary)] pt-10">
                <div className="container py-20">
                    <div className="flex flex-col items-start">
                        <span className="text-xs font-aeonik-fono px-3 py-1 bg-white/10 text-white uppercase rounded-full w-fit mb-4 tracking-widest">
                            SDKs_
                        </span>
                        <h2 className="text-display font-aeonik-pro text-white max-w-[700px]">
                            Start today with your preferred technologies
                        </h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Subscribe to a topic */}
                        <div className="flex flex-col gap-2 min-w-0">
                            <h3 className="text-base font-semibold text-white">Subscribe to a topic</h3>
                            <p className="text-white/50 font-medium">
                                Subscribe to receive all messages related to a topic.
                            </p>
                            <div className="mt-4 bg-[#1C1C20] rounded-2xl border border-white/8 p-6 overflow-auto">
                                <pre className="text-sm text-white/80 font-mono whitespace-pre-wrap">
{`import { Account, Messaging, ID } from "clikkle"

// Fetch target ID
const account = new Account(client)
const user = await account.get()
const targetId = user.targets[0].$id

// Subscribe to a topic
const messaging = new Messaging(client)
await messaging.createSubscriber(
    ['news', 'sport'],   // Topic ID
    ID.unique(),         // Subscription ID
    targetId,            // Target ID
)`}
                                </pre>
                            </div>
                        </div>
                        {/* Send a message */}
                        <div className="flex flex-col gap-2 min-w-0">
                            <h3 className="text-base font-semibold text-white">Send a message</h3>
                            <p className="text-white/50 font-medium">
                                Send a message to all targets on a topic.
                            </p>
                            <div className="mt-4 bg-[#1C1C20] rounded-2xl border border-white/8 p-6 overflow-auto">
                                <pre className="text-sm text-white/80 font-mono whitespace-pre-wrap">
{`import { Messaging, ID } from "node-clikkle"

const messaging = Messaging(client);
await messaging.createPush(
    ID.unique(),           // Message ID
    'Breaking update',     // Push title
    'Hello, world!',       // Push body
    ['news', 'sport'],     // Topic IDs
);`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProductCards currentProduct="messaging" />

            <div className="border-smooth relative border-t border-black/10 bg-[var(--bg-primary)]">
                <div className="container pb-16">
                    <PreFooter headingId="messaging-pre-footer-heading" />
                    <SiteFooter noOuterContainer />
                </div>
            </div>
        </main>
    );
}
