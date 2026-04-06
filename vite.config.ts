import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import dynamicImport from 'vite-plugin-dynamic-import';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import manifestSRI from 'vite-plugin-manifest-sri';
import { defineConfig } from 'vitest/config';
// import { sentrySvelteKit } from '@sentry/sveltekit';

export default defineConfig({
    plugins: [
        // sentrySvelteKit({
        //     sourceMapsUploadOptions: {
        //         org: 'appwrite',
        //         project: 'website'
        //     }
        // }),
        enhancedImages(),
        sveltekit(),
        dynamicImport({
            filter(id) {
                if (id.includes('/node_modules/@appwrite.io/specs/examples')) {
                    return true;
                }
            }
        }),
        ViteImageOptimizer({
            include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
            exclude: ['**/*.avif', '**/*.webp'],
            cache: true,
            cacheLocation: '.cache'
        }),
        manifestSRI({
            algorithms: ['sha384']
        })
    ],
    css: {
        devSourcemap: process.env.NODE_ENV !== 'production'
    },
    build: {
        sourcemap: process.env.NODE_ENV !== 'production',
        reportCompressedSize: false,
        // Docker / GitHub Actions (~7GiB runners): cap Rollup parallelism to lower peak RSS (exit 134).
        ...(process.env.CI
            ? { rollupOptions: { maxParallelFileOps: 2 } as import('vite').RollupOptions }
            : {})
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    },
    experimental: {
        enableNativePlugin: true
    }
});
