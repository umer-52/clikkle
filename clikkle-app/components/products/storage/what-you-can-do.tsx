import { codeToHtml } from 'shiki';
import { CodePreviewClient } from '@/components/code-preview-client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const snippets = {
    list: {
        label: 'List files',
        code: `// List files inside a specific bucket
const files = await storage.listFiles({
    bucketId: '<BUCKET_ID>'
});`
    },
    create: {
        label: 'Create file',
        code: `// Create files inside a specific bucket
const files = await storage.createFile({
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    file: inputFile
});`
    },
    get: {
        label: 'Get file',
        code: `// Get file inside a specific bucket
const files = await storage.getFile({
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>'
});`
    },
    delete: {
        label: 'Delete file',
        code: `// Delete files inside a specific bucket
const files = await storage.deleteFiles({
    bucketId: '<BUCKET_ID>'
});`
    }
};

export async function WhatYouCanDo() {
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
        label: sample.label
    }));

    return (
        <div className="bg-[var(--bg-primary)] px-6 py-12 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
            <div className="absolute top-0 right-10 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
            </div>
            
            <CodePreviewClient
                tabs={tabs}
                defaultTab="list"
                highlightedSamples={highlightedSamples}
                rawCodes={rawCodes}
            />
        </div>
    );
}
