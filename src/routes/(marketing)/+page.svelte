<script lang="ts">
    import Ai from './(components)/ai.svelte';
    import Bento from './(components)/bento/bento.svelte';
    import Hero from './(components)/hero.svelte';
    import LogoList from './(components)/logo-list.svelte';
    import MarketingBottomCta from './(components)/marketing-bottom-cta.svelte';
    import Platforms from './(components)/platforms.svelte';
    import Pricing from './(components)/pricing.svelte';
    import { Main } from '$lib/layouts';
    import Head from '$lib/components/meta/head.svelte';
    import Pullquote from '$lib/components/marketing/pullquote.svelte';
    import { FooterNav, MainFooter } from '$lib/components';
</script>

<Head title="Appwrite - Built for the first solocorn" />

<Main>
    <Hero
        title="Built for the first solocorn"
        subtitle="All-in-one, open-source infrastructure. Build in minutes, bring any framework, and scale affordably. Auth, Database, Storage, Functions, Realtime, Messaging & Hosting included."
    />
    <Platforms headline="Designed for the tools you work with" />
    <LogoList class="border-smooth border-b border-white/10" title="Loved by startups and world leaders" />
    <Bento />
    <Pullquote
        name="Phil McCluskey"
        title="App Manager, Majik Kids"
        avatar="/images/testimonials/phil.jpg"
    >
        <span class="text-secondary">Just like a Swiss Army Knife</span> you can choose and use the tools
        that you need with Appwrite.</Pullquote
    >
    <Ai />
    <Pricing />
    <MarketingBottomCta />
</Main>

<div class="container">
    <FooterNav />
    <MainFooter />
</div>
