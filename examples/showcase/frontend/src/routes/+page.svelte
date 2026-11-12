<script lang="ts">
    import { onMount } from 'svelte';
    import { api, type Greeting } from '#api';
    import Icon from '#icon';
    import { m } from '#i18n';
    import { session } from '#lib/session.svelte.ts';

    let greeting = $state<Greeting | undefined>(undefined);

    const features = $derived([
        { icon: 'KeyRound' as const, title: m.featureAuthTitle(), text: m.featureAuthText() },
        { icon: 'Database' as const, title: m.featureDatabaseTitle(), text: m.featureDatabaseText() },
        { icon: 'Paperclip' as const, title: m.featureUploadsTitle(), text: m.featureUploadsText() },
        { icon: 'Search' as const, title: m.featureSearchTitle(), text: m.featureSearchText() },
        { icon: 'Languages' as const, title: m.featureI18nTitle(), text: m.featureI18nText() },
        { icon: 'ShieldCheck' as const, title: m.featureSecurityTitle(), text: m.featureSecurityText() }
    ]);

    onMount(async () => {
        greeting = await api.greeting.list({ name: 'SvelteKit' }, { silent: true }).catch(() => undefined);
    });
</script>

<svelte:head>
    <title>{m.appTitle()}</title>
    <meta name="description" content={m.homeLead()} />
</svelte:head>

<section class="grid items-center gap-8 md:grid-cols-2">
    <div>
        <h1 class="text-4xl font-bold">{m.homeTitle()}</h1>
        <p class="my-4 text-lg">{m.homeLead()}</p>
        <div class="flex flex-wrap gap-2">
            {#if session.user}
                <a class="btn btn-primary" href="/board"><Icon name="LayoutDashboard" size={18} /> {m.homeOpenBoard()}</a>
            {:else}
                <a class="btn btn-primary" href="/login"><Icon name="LogIn" size={18} /> {m.navSignIn()}</a>
                <a class="btn btn-outline" href="/register"><Icon name="UserPlus" size={18} /> {m.navRegister()}</a>
            {/if}
            <a class="btn btn-ghost" href="/about"><Icon name="Info" size={18} /> {m.navAbout()}</a>
        </div>
        <p id="greeting" class="mt-6 min-h-6 text-sm" aria-live="polite">
            {#if greeting}{greeting.message} ({greeting.locale}, {greeting.theme}){/if}
        </p>
    </div>
    <enhanced:img class="rounded-box h-auto w-full" src="#lib/assets/hero.png" alt={m.homeHeroAlt()} sizes="(min-width: 768px) 28rem, 100vw" />
</section>

<h2 class="mb-4 mt-12 text-2xl font-semibold">{m.homeFeatures()}</h2>
<ul class="grid gap-4 sm:grid-cols-2">
    {#each features as feature (feature.title)}
        <li class="card bg-base-200 p-4">
            <h3 class="flex items-center gap-2 font-semibold"><Icon name={feature.icon} size={18} /> {feature.title}</h3>
            <p class="mt-1 text-sm">{feature.text}</p>
        </li>
    {/each}
</ul>
