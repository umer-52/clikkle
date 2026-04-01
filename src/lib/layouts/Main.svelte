<script lang="ts" context="module">
    import { writable } from 'svelte/store';

    export const isHeaderHidden = writable(false);
    export const isMobileNavOpen = writable(false);
</script>

<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import { page } from '$app/state';
    import { Icon } from '$lib/components/ui';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import AnnouncementBar from '$routes/(marketing)/(components)/announcement-bar.svelte';
    import { tick } from 'svelte';

    type NavLink = {
        label: string;
        href: string;
        match: (pathname: string) => boolean;
    };

    export let omitMainId = false;
    export let hideNavigation = false;
    const GITHUB_STARS = '55.2K';
    const GITHUB_LINK = 'https://github.com/appwrite/appwrite';
    const CTA_LINK = getAppwriteDashboardUrl('/register');

    const navLinks: NavLink[] = [
        {
            label: 'Products',
            href: '/products',
            match: (pathname) => pathname.startsWith('/products')
        },
        {
            label: 'Docs',
            href: '/docs',
            match: (pathname) => pathname.startsWith('/docs')
        },
        {
            label: 'Pricing',
            href: '/pricing',
            match: (pathname) => pathname.startsWith('/pricing')
        },
        {
            label: 'Customers',
            href: '/blog/category/customer-stories',
            match: (pathname) => pathname.includes('customer-stories')
        },
        {
            label: 'Enterprise',
            href: '/contact-us/enterprise',
            match: (pathname) => pathname.startsWith('/contact-us/enterprise')
        }
    ];

    let isScrolled = false;
    let currentPath = '/';
    let hasTopBanner = false;
    let mobileNavPanel: HTMLElement | null = null;

    $: currentPath = page.url.pathname;
    $: hasTopBanner = !page.url.pathname.includes('/init');
    $: $isHeaderHidden = false;

    function isLinkActive(link: NavLink) {
        return link.match(currentPath);
    }

    function updateScrollState() {
        if (typeof window === 'undefined') return;
        isScrolled = window.scrollY > 10;
    }

    async function setMobileNav(open: boolean) {
        $isMobileNavOpen = open;

        if (typeof document !== 'undefined') {
            document.body.style.overflow = open ? 'hidden' : '';
        }

        if (open) {
            await tick();
            mobileNavPanel?.focus();
        }
    }

    function closeMobileNav() {
        void setMobileNav(false);
    }

    function toggleMobileNav() {
        void setMobileNav(!$isMobileNavOpen);
    }

    function handleWindowKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' && $isMobileNavOpen) {
            closeMobileNav();
        }
    }

    function handleWindowResize() {
        if (typeof window !== 'undefined' && window.innerWidth >= 1024 && $isMobileNavOpen) {
            closeMobileNav();
        }
    }

    afterNavigate(() => {
        closeMobileNav();
        updateScrollState();
    });
</script>

<svelte:window
    on:scroll={updateScrollState}
    on:keydown={handleWindowKeydown}
    on:resize={handleWindowResize}
/>

<div class="relative contents h-full">
    {#if hasTopBanner}
        <AnnouncementBar />
    {/if}

    <header class="aw-header" class:aw-header-scrolled={isScrolled}>
        <div class="aw-header-shell">
            <a class="aw-logo-link aw-focus-ring" href="/" aria-label="Appwrite home">
                <img src="/images/logos/appwrite.svg" alt="Appwrite" height="24" width="130" />
            </a>

            {#if !hideNavigation}
                <nav class="aw-header-nav" aria-label="Primary navigation">
                    {#each navLinks as link}
                        <a
                            class="aw-header-link aw-focus-ring"
                            href={link.href}
                            data-active={isLinkActive(link) ? 'true' : undefined}
                            aria-current={isLinkActive(link) ? 'page' : undefined}
                        >
                            {link.label}
                        </a>
                    {/each}
                </nav>
            {/if}

            <div class="aw-header-actions">
                <a
                    class="aw-github-button aw-focus-ring"
                    href={GITHUB_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Star Appwrite on GitHub"
                >
                    <Icon name="star" class="aw-button-icon" aria-hidden="true" />
                    <span>Star on GitHub</span>
                    <span class="aw-github-count">{GITHUB_STARS}</span>
                </a>

                <a class="aw-cta-button aw-focus-ring" href={CTA_LINK}>Start building for free</a>

                {#if !hideNavigation}
                    <button
                        class="aw-menu-button aw-focus-ring"
                        type="button"
                        aria-label={$isMobileNavOpen
                            ? 'Close navigation menu'
                            : 'Open navigation menu'}
                        aria-expanded={$isMobileNavOpen}
                        aria-controls="mobile-navigation"
                        onclick={toggleMobileNav}
                    >
                        <span class="aw-menu-icon" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                {/if}
            </div>
        </div>
    </header>

    {#if !hideNavigation}
        <div
            class="aw-mobile-overlay"
            data-open={$isMobileNavOpen ? 'true' : 'false'}
            aria-hidden={!$isMobileNavOpen}
            inert={!$isMobileNavOpen ? true : undefined}
        >
            <button
                class="aw-mobile-backdrop"
                type="button"
                tabindex={$isMobileNavOpen ? 0 : -1}
                aria-label="Close navigation menu"
                onclick={closeMobileNav}
            ></button>

            <aside
                id="mobile-navigation"
                class="aw-mobile-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-navigation-title"
                tabindex="-1"
                bind:this={mobileNavPanel}
            >
                <div class="aw-mobile-panel-header">
                    <a class="aw-logo-link aw-focus-ring" href="/" aria-label="Appwrite home">
                        <img src="/images/logos/appwrite.svg" alt="Appwrite" height="24" width="130" />
                    </a>

                    <button
                        class="aw-close-button aw-focus-ring"
                        type="button"
                        aria-label="Close navigation menu"
                        onclick={closeMobileNav}
                    >
                        <Icon name="close" class="aw-button-icon" aria-hidden="true" />
                    </button>
                </div>

                <h2 id="mobile-navigation-title" class="aw-mobile-title">Navigation</h2>

                <nav class="aw-mobile-nav" aria-label="Mobile navigation">
                    {#each navLinks as link}
                        <a
                            class="aw-mobile-link aw-focus-ring"
                            href={link.href}
                            data-active={isLinkActive(link) ? 'true' : undefined}
                            aria-current={isLinkActive(link) ? 'page' : undefined}
                            onclick={closeMobileNav}
                        >
                            {link.label}
                        </a>
                    {/each}
                </nav>

                <div class="aw-mobile-actions">
                    <a
                        class="aw-github-button aw-focus-ring"
                        href={GITHUB_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Star Appwrite on GitHub"
                    >
                        <Icon name="star" class="aw-button-icon" aria-hidden="true" />
                        <span>Star on GitHub</span>
                        <span class="aw-github-count">{GITHUB_STARS}</span>
                    </a>

                    <a class="aw-cta-button aw-focus-ring" href={CTA_LINK}>Start building for free</a>
                </div>
            </aside>
        </div>
    {/if}

    <main class="relative" class:invisible={$isMobileNavOpen} id={omitMainId ? undefined : 'main'}>
        <slot />
    </main>
</div>

<style lang="scss">
    .aw-header {
        position: sticky;
        inset-block-start: 0;
        inset-inline: 0;
        z-index: 1000;
        block-size: 72px;
        border-block-end: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(25, 25, 28, 0.78);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        transition:
            box-shadow 300ms ease,
            border-color 300ms ease,
            background-color 300ms ease;
    }

    .aw-header-scrolled {
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
    }

    .aw-header-shell {
        display: flex;
        align-items: center;
        gap: 2rem;
        inline-size: min(100%, 1280px);
        block-size: 100%;
        margin-inline: auto;
        padding-inline: 24px;
    }

    .aw-header-spacer {
        block-size: 72px;
    }

    .aw-logo-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .aw-header-nav {
        display: none;
        align-items: center;
        gap: 32px;
    }

    .aw-header-link,
    .aw-mobile-link {
        position: relative;
        color: rgba(250, 250, 251, 0.92);
        font-family: var(--font-family-primary, 'Inter', sans-serif);
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        text-decoration: none;
        transition: color 200ms ease;
    }

    .aw-header-link::after {
        content: '';
        position: absolute;
        inset-inline: 0;
        inset-block-end: -0.5rem;
        block-size: 2px;
        border-radius: 9999px;
        background: #f02e65;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 200ms ease;
    }

    .aw-header-link:hover,
    .aw-mobile-link:hover,
    .aw-header-link[data-active='true'],
    .aw-mobile-link[data-active='true'] {
        color: #f02e65;
    }

    .aw-header-link:hover::after,
    .aw-header-link[data-active='true']::after {
        transform: scaleX(1);
    }

    .aw-header-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-inline-start: auto;
        gap: 12px;
        flex-shrink: 0;
    }

    .aw-github-button,
    .aw-cta-button,
    .aw-menu-button,
    .aw-close-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 0;
        text-decoration: none;
        cursor: pointer;
    }

    .aw-github-button {
        display: none;
        gap: 10px;
        min-block-size: 44px;
        padding: 10px 16px;
        border-radius: var(--radius-sm);
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.06);
        color: rgba(250, 250, 251, 0.92);
        font-family: var(--font-family-primary, 'Inter', sans-serif);
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        box-shadow: none;
        transition:
            color 200ms ease,
            border-color 200ms ease,
            box-shadow 200ms ease,
            background-color 200ms ease,
            transform 200ms ease;
    }

    .aw-github-button:hover {
        color: #f02e65;
        border-color: rgba(240, 46, 101, 0.35);
        background: rgba(255, 255, 255, 0.1);
    }

    .aw-github-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-inline-size: 3.75rem;
        padding: 4px 8px;
        border-radius: var(--radius-full);
        background: rgba(255, 255, 255, 0.1);
        color: rgba(250, 250, 251, 0.65);
        font-size: 14px;
        font-weight: 600;
        line-height: 1.4;
    }

    .aw-cta-button {
        display: none;
        min-block-size: 48px;
        padding: 12px 24px;
        border-radius: 12px;
        background: linear-gradient(135deg, #f02e65 0%, #ff4d8d 55%, #f02e65 100%);
        color: #fff;
        font-family: var(--font-family-primary, 'Inter', sans-serif);
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        transition:
            filter 200ms ease,
            box-shadow 200ms ease,
            transform 200ms ease;
    }

    .aw-cta-button:hover {
        filter: brightness(1.06);
        box-shadow: 0 8px 24px rgba(240, 46, 101, 0.35);
    }

    .aw-menu-button,
    .aw-close-button {
        inline-size: 44px;
        block-size: 44px;
        border-radius: var(--radius-sm);
        background: rgba(255, 255, 255, 0.08);
        color: rgba(250, 250, 251, 0.92);
        transition:
            background-color 200ms ease,
            box-shadow 200ms ease,
            color 200ms ease;
    }

    .aw-menu-button:hover,
    .aw-close-button:hover {
        background: rgba(255, 255, 255, 0.14);
        color: #f02e65;
    }

    .aw-menu-icon {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        gap: 4px;
    }

    .aw-menu-icon span {
        display: block;
        inline-size: 18px;
        block-size: 2px;
        border-radius: 9999px;
        background: currentColor;
        transition: transform 200ms ease;
    }

    .aw-button-icon {
        inline-size: 16px;
        block-size: 16px;
    }

    .aw-mobile-overlay {
        position: fixed;
        inset: 0;
        z-index: 1001;
        pointer-events: none;
    }

    .aw-mobile-backdrop {
        position: absolute;
        inset: 0;
        border: 0;
        background: rgba(0, 0, 0, 0.55);
        opacity: 0;
        transition: opacity 300ms ease;
    }

    .aw-mobile-panel {
        position: absolute;
        inset-block: 0;
        inset-inline-end: 0;
        display: flex;
        flex-direction: column;
        gap: 32px;
        inline-size: min(100%, 24rem);
        block-size: 100vh;
        padding: 24px;
        background: #19191c;
        box-shadow: -12px 0 48px rgba(0, 0, 0, 0.45);
        transform: translateX(100%);
        transition: transform 300ms ease;
    }

    .aw-mobile-overlay[data-open='true'] {
        pointer-events: auto;
    }

    .aw-mobile-overlay[data-open='true'] .aw-mobile-backdrop {
        opacity: 1;
    }

    .aw-mobile-overlay[data-open='true'] .aw-mobile-panel {
        transform: translateX(0);
    }

    .aw-mobile-panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    .aw-mobile-title {
        margin: 0;
        color: rgba(250, 250, 251, 0.92);
        font-family: var(--font-family-primary, 'Inter', sans-serif);
        font-size: 20px;
        font-weight: 600;
        line-height: 1.5;
    }

    .aw-mobile-nav {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .aw-mobile-link {
        padding-block-end: 12px;
        border-block-end: 1px solid rgba(255, 255, 255, 0.1);
    }

    .aw-mobile-actions {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: auto;
    }

    .aw-mobile-actions .aw-github-button,
    .aw-mobile-actions .aw-cta-button {
        display: inline-flex;
        width: 100%;
    }

    .aw-focus-ring:focus-visible {
        outline: 2px solid #f02e65;
        outline-offset: 3px;
        box-shadow: 0 0 0 4px rgba(240, 46, 101, 0.16);
    }

    @media (min-width: 768px) {
        .aw-header-shell {
            padding-inline: 48px;
        }

        .aw-mobile-panel {
            padding: 32px;
        }
    }

    @media (min-width: 1024px) {
        .aw-header-shell {
            padding-inline: 64px;
        }

        .aw-header-nav {
            display: flex;
        }

        .aw-github-button,
        .aw-cta-button {
            display: inline-flex;
        }

        .aw-menu-button,
        .aw-mobile-overlay {
            display: none;
        }
    }
</style>



