import { codeToHtml } from 'shiki';
import { CodePreviewClient } from '@/components/code-preview-client';
import Link from 'next/link';
import Image from 'next/image';

const snippets: Record<
    string,
    {
        language: string;
        code: string;
    }
> = {
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

/** `SSR.svelte` — same order as `MultiFrameworkCode` tabs */
const SNIPPET_KEYS = ['nextjs', 'sveltekit', 'astro', 'nuxt', 'remix'] as const;

const platforms = [
    {
        name: 'Next',
        href: '/docs/quick-starts/nextjs',
        image: '/clikkle/images/platforms/light/nextjs.svg'
    },
    {
        name: 'Svelte',
        href: '/docs/quick-starts/sveltekit',
        image: '/clikkle/images/platforms/light/svelte.svg'
    },
    {
        name: 'Nuxt',
        href: '/docs/quick-starts/nuxt',
        image: '/clikkle/images/platforms/light/nuxt.svg'
    }
] as const;

export async function SSRCodeShowcase() {
    const highlightedSamples: Record<string, string> = {};
    const rawCodes: Record<string, string> = {};

    for (const key of SNIPPET_KEYS) {
        const sample = snippets[key];
        try {
            const html = await codeToHtml(sample.code, {
                lang: 'typescript',
                theme: 'dark-plus'
            });
            highlightedSamples[key] = html;
        } catch {
            highlightedSamples[key] = `<pre><code>${sample.code}</code></pre>`;
        }
        rawCodes[key] = sample.code;
    }

    const tabs = SNIPPET_KEYS.map((key) => ({
        id: key,
        label: snippets[key].language
    }));

    return (
        <section className="border-smooth border-t border-black/8 py-4 md:py-20">
            <div className="container grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="mb-10 flex flex-col">
                    <span
                        className="text-micro font-aeonik-fono mr-auto ml-0 rounded-md px-3 py-1.5 font-medium uppercase text-white"
                        style={{
                            background: 'linear-gradient(135deg, #2d63ff 0%, #1d4ed8 100%)'
                        }}
                    >
                        SSR_
                    </span>
                    <h2 className="text-title font-aeonik-pro text-primary my-4">
                        Server-side rendering <br /> made simple
                    </h2>
                    <p className="text-body font-medium text-secondary">
                        Optimize your auth with Clikkle&apos;s server-side SDK, enhancing your application&apos;s
                        performance without sacrificing functionality. Start with our ready-to-ship snippets, or
                        follow our quick starts for your favorite framework.
                    </p>

                    <ul className="mt-8 flex gap-4">
                        {platforms.map((platform) => (
                            <li key={platform.name}>
                                <a
                                    href={platform.href}
                                    title={`${platform.name} quick start`}
                                    className="platform flex size-14 items-center justify-center rounded-lg bg-white p-2 shadow-[0px_5.35px_10.7px_rgba(0,0,0,0.02)] backdrop-blur-[16.7px] transition-opacity hover:opacity-90"
                                >
                                    <Image
                                        src={platform.image}
                                        alt=""
                                        width={32}
                                        height={32}
                                        className="size-8"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Link href="/docs/sdks#server" className="web-btn web-btn-outline mt-8 w-fit">
                        Learn more
                    </Link>
                </div>

                <div className="w-full min-w-0 lg:max-w-none xl:max-w-xl">
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
