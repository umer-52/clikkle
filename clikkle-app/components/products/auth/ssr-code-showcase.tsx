import { codeToHtml } from 'shiki';
import { CodePreviewClient } from '@/components/code-preview-client';
import Link from 'next/link';
import Image from 'next/image';

const snippets = {
    nextjs: {
        language: 'Next.js',
        code: `import { Client, Account } from "clikkle";
import { cookies } from "next/headers";

export async function createSessionClient() {
    const client = new Client()
        .setEndpoint('https://cloud.clikkle.com/v1')
        .setProject('<YOUR_PROJECT_ID>');

    const session = cookies().get('my-custom-session');
    if (!session || !session.value) {
        throw new Error('No session');
    }

    client.setSession(session.value);

    return {
        get account() {
            return new Account(client);
        }
    };
}`
    },
    sveltekit: {
        language: 'SvelteKit',
        code: `import { Client, Account } from 'node-clikkle';

export const createSessionClient = (event) => {
    const client = new Client()
        .setEndpoint('https://cloud.clikkle.com/v1')
        .setProject('<YOUR_PROJECT_ID>');

    const session = event.cookies.get('my-custom-session');
    if (!session) {
        throw new Error('No session');
    }

    client.setSession(session);

    return {
        get account() {
            return new Account(client);
        }
    };
};`
    },
    nuxt: {
        language: 'Nuxt',
        code: `import { Client, Account } from 'node-clikkle';

export const createSessionClient = (event) => {
    const client = new Client()
        .setEndpoint('https://cloud.clikkle.com/v1')
        .setProject('<YOUR_PROJECT_ID>');

    const session = getCookie(event, 'my-custom-session');
    if (!session) {
        throw new Error('No session');
    }

    client.setSession(session);

    return {
        get account() {
            return new Account(client);
        }
    };
};`
    },
    astro: {
        language: 'Astro',
        code: `import { Client, Account } from "node-clikkle";

export const createSessionClient = (request) => {
    const client = new Client()
        .setEndpoint('https://cloud.clikkle.com/v1')
        .setProject('<YOUR_PROJECT_ID>');

    const session = request.cookies.get('my-custom-session');
    if (!session || !session.value) {
        throw new Error('No session');
    }

    client.setSession(session.value);

    return {
        get account() {
            return new Account(client);
        }
    };
};`
    },
    remix: {
        language: 'Remix',
        code: `import { Client, Account } from "node-clikkle";
import { parse } from "cookie";

export const createSessionClient = (request) => {
    const client = new Client()
        .setEndpoint('https://cloud.clikkle.com/v1')
        .setProject('<YOUR_PROJECT_ID>');

    const cookies = parse(request.headers.get("Cookie") ?? "");
    const session = cookies['my-custom-session'];

    if (!session) {
        throw new Error('No session');
    }

    client.setSession(session);

    return {
        get account() {
            return new Account(client);
        }
    };
};`
    }
};

const platforms = [
    {
        name: 'Next',
        href: '/docs/quick-starts/nextjs',
        image: '/clikkle/images/products/auth/platforms/next.svg'
    },
    {
        name: 'Svelte',
        href: '/docs/quick-starts/sveltekit',
        image: '/clikkle/images/products/auth/platforms/svelte.svg'
    },
    {
        name: 'Nuxt',
        href: '/docs/quick-starts/nuxt',
        image: '/clikkle/images/products/auth/platforms/nuxt.svg'
    }
];

export async function SSRCodeShowcase() {
    const highlightedSamples: Record<string, string> = {};
    const rawCodes: Record<string, string> = {};

    for (const [key, sample] of Object.entries(snippets)) {
        try {
            const html = await codeToHtml(sample.code, {
                lang: 'typescript',
                theme: 'dark-plus'
            });
            highlightedSamples[key] = html;
        } catch (e) {
            highlightedSamples[key] = `<pre><code>${sample.code}</code></pre>`;
        }
        rawCodes[key] = sample.code;
    }

    const tabs = Object.entries(snippets).map(([key, sample]) => ({
        id: key,
        label: sample.language
    }));

    return (
        <section className="bg-[#f9fafb] py-4 md:py-20 border-t border-black/10">
            <div className="container grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="mb-10 flex flex-col">
                    <span className="text-micro font-aeonik-fono mr-auto ml-0 text-[#19191C] uppercase bg-black/5 px-3 py-1 rounded-full border border-black/10">
                        SSR_
                    </span>
                    <h2 className="text-title text-primary font-aeonik-pro text-[#19191C] my-4">
                        Server-side rendering <br /> made simple
                    </h2>
                    <p className="text-body text-secondary font-medium text-[#434347]">
                        Optimize your auth with Clikkle's server-side SDK, enhancing your application's
                        performance without sacrificing functionality. Start with our ready-to-ship
                        snippets, or follow our quick starts for your favorite framework.
                    </p>

                    <ul className="mt-8 flex gap-4">
                        {platforms.map((platform) => (
                            <li key={platform.name}>
                                <a
                                    href={platform.href}
                                    className="platform flex size-14 items-center justify-center rounded-lg bg-black/5 border border-black/10 p-2 shadow-sm backdrop-blur-md hover:bg-black/10 transition-colors"
                                    title={platform.name}
                                >
                                    <div className="flex h-8 w-8 items-center justify-center text-[#19191C]">
                                        <span className="font-bold">{platform.name[0]}</span>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/docs"
                        className="web-btn web-btn-outline mt-8 w-fit"
                    >
                        Learn more
                    </Link>
                </div>

                <div className="w-full xl:max-w-xl">
                    <CodePreviewClient
                        tabs={tabs}
                        defaultTab="nextjs"
                        highlightedSamples={highlightedSamples}
                        rawCodes={rawCodes}
                    />
                </div>
            </div>
        </section>
    );
}
