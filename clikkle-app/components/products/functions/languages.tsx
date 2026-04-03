import { codeToHtml } from 'shiki';
import { CodePreviewClient } from '@/components/code-preview-client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const snippets = {
    nodejs: {
        label: 'Node.js',
        code: `import { Client, Account } from "node-clikkle";

// Sample Node.js function snippet
export default async ({ req, res, log, error }) => {
    log('Hello, World!');
    return res.json({
        message: 'Hello from Node.js!'
    });
};`
    },
    python: {
        label: 'Python',
        code: `def main(context):
    context.log("Hello, World!")
    return context.res.json({
        "message": "Hello from Python!"
    })`
    },
    dart: {
        label: 'Dart',
        code: `import 'dart:convert';

Future<dynamic> main(final context) async {
  context.log('Hello, World!');
  return context.res.json({
    'message': 'Hello from Dart!'
  });
}`
    }
};

export async function Languages() {
    const highlightedSamples: Record<string, string> = {};
    const rawCodes: Record<string, string> = {};

    for (const [key, sample] of Object.entries(snippets)) {
        try {
            const html = await codeToHtml(sample.code, {
                lang: key === 'nodejs' ? 'typescript' : key,
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
        label: sample.label
    }));

    return (
        <section className="pt-12 pb-20 md:pt-32 md:pb-40 bg-[var(--bg-primary)]">
            <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="mb-10 flex w-full flex-col lg:max-w-md">
                    <h2 className="text-title text-primary font-aeonik-pro text-white my-4 text-pretty">
                        Run in your preferred languages
                    </h2>
                    <p className="text-main-body text-white/50 font-medium">
                        Clikkle Functions support a variety of languages, ensuring flexibility and
                        compatibility in your projects.
                    </p>

                    <Button
                        asChild
                        variant="secondary"
                        className="mt-8 w-full md:w-auto text-black bg-white hover:bg-white/90"
                    >
                        <Link href="/docs/products/functions/runtimes">
                            Learn more
                        </Link>
                    </Button>
                </div>

                <div className="w-full xl:max-w-xl mx-auto border border-white/10 rounded-2xl shadow-xl overflow-hidden bg-black/40">
                    <CodePreviewClient
                        tabs={tabs}
                        defaultTab="nodejs"
                        highlightedSamples={highlightedSamples}
                        rawCodes={rawCodes}
                    />
                </div>
            </div>
        </section>
    );
}
