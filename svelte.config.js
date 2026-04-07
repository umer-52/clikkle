import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { dirname, join } from 'path';
import { markdoc } from 'svelte-markdoc-preprocess';
import { fileURLToPath } from 'url';

/** @type {import('@sveltejs/kit').Config}*/
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: sequence([
        vitePreprocess(),
        markdoc({
            generateSchema: true,
            nodes: absolute('./src/markdoc/nodes/_Module.svelte'),
            tags: absolute('./src/markdoc/tags/_Module.svelte'),
            partials: absolute('./src/partials'),
            layouts: {
                default: absolute('./src/markdoc/layouts/Article.svelte'),
                article: absolute('./src/markdoc/layouts/Article.svelte'),
                tutorial: absolute('./src/markdoc/layouts/Tutorial.svelte'),
                post: absolute('./src/markdoc/layouts/Post.svelte'),
                partner: absolute('./src/markdoc/layouts/Partner.svelte'),
                author: absolute('./src/markdoc/layouts/Author.svelte'),
                category: absolute('./src/markdoc/layouts/Category.svelte'),
                policy: absolute('./src/markdoc/layouts/Policy.svelte'),
                changelog: absolute('./src/markdoc/layouts/Changelog.svelte'),
                integration: absolute('./src/markdoc/layouts/Integration.svelte')
            }
        }),
        preprocessMeltUI()
    ]),
    extensions: ['.markdoc', '.svelte', '.md'],
    kit: {
        adapter: staticAdapter({
            fallback: '404.html',
            strict: false
        }),

        version: {
            pollInterval: 60 * 1000
        },
        paths: {
            // GitHub project Pages: https://<user>.github.io/<repo>/  → base is /<repo>
            base: process.env.BASE_PATH || ''
        },
        alias: {
            $routes: './src/routes',
            $scss: './src/scss',
            $icons: './src/icons',
            $markdoc: './src/markdoc'
        },
        prerender: {
            // High concurrency can hit OS file-descriptor limits on some runners (notably Windows).
            concurrency: 4,
            handleMissingId: 'warn',
            handleHttpError: 'warn',
            handleUnseenRoutes: 'warn'
        },
        experimental: {
            // Required for `$lib/remote/*.remote` (e.g. markdown.remote) — vite-plugin-sveltekit-guard errors if off
            remoteFunctions: true
        }
    }
};

export default config;

/**
 * @param {string} path
 * @returns {string}
 */
function absolute(path) {
    return join(dirname(fileURLToPath(import.meta.url)), path);
}
