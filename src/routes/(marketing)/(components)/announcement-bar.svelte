<script lang="ts">
    import { dev } from '$app/environment';
    import { onMount } from 'svelte';
    import { Icon } from '$lib/components/ui';
    import TeaserBanner from './teaser/teaser-banner.svelte';

    const STORAGE_KEY = 'appwrite-marketing-announcement-dismissed';

    let dismissed = $state(false);

    onMount(() => {
        try {
            dismissed = localStorage.getItem(STORAGE_KEY) === '1';
        } catch {
            dismissed = false;
        }
    });

    function dismiss() {
        dismissed = true;
        try {
            localStorage.setItem(STORAGE_KEY, '1');
        } catch {
            /* ignore */
        }
    }
</script>

{#if !dismissed}
    <div class="announcement-shell border-smooth relative z-10 border-b border-white/10 bg-black">
        <button
            type="button"
            class="announcement-dismiss aw-focus-ring"
            aria-label="Dismiss announcement"
            onclick={dismiss}
        >
            <Icon name="close" class="size-4" aria-hidden="true" />
        </button>
        <div class="is-special-padding mx-auto">
            <TeaserBanner
                showLabel={dev}
                leftText="Introducing"
                logoText="Imagine"
                rightText="AI Builder on Appwrite Cloud"
            />
        </div>
    </div>
{/if}

<style lang="scss">
    .is-special-padding {
        padding-inline: clamp(1.25rem, 4vw, 120rem);
    }

    .announcement-shell {
        padding-inline-end: 3rem;
    }

    .announcement-dismiss {
        position: absolute;
        inset-inline-end: max(0.75rem, env(safe-area-inset-right));
        inset-block-start: 50%;
        z-index: 20;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        inline-size: 40px;
        block-size: 40px;
        margin-block-start: -20px;
        border: 0;
        border-radius: var(--radius-sm);
        background: rgba(255, 255, 255, 0.06);
        color: rgba(255, 255, 255, 0.75);
        cursor: pointer;
        transition:
            background-color 200ms ease,
            color 200ms ease;
    }

    .announcement-dismiss:hover {
        background: rgba(255, 255, 255, 0.12);
        color: #fff;
    }

    .aw-focus-ring:focus-visible {
        outline: 2px solid #f02e65;
        outline-offset: 3px;
        box-shadow: 0 0 0 4px rgba(240, 46, 101, 0.16);
    }
</style>
