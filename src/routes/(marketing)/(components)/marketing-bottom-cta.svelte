<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import { Button } from '$lib/components/ui';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
</script>

<section
    class="border-smooth border-t border-dashed border-white/10 bg-[#121215] py-20 md:py-28"
    aria-labelledby="marketing-bottom-cta-heading"
>
    <div class="container mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 text-center">
        <h2
            id="marketing-bottom-cta-heading"
            class="font-aeonik-pro text-subtitle text-primary md:text-title text-pretty"
        >
            Start building with the open-source backend that ships everything you need<span
                class="text-accent">_</span
            >
        </h2>
        <Button
            href={getAppwriteDashboardUrl('/register')}
            class="w-full! md:w-fit!"
            onclick={() => trackEvent('marketing-bottom-cta-start-building-click')}
        >
            Start building for free
        </Button>
    </div>
</section>
