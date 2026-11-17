<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/state';
    import { can, cookieConsent, currentUser, loadPublicConfig, matchGuard, pageGuards } from '#api';
    import LocaleSwitch from '#components/LocaleSwitch.svelte';
    import FocusHeading from '#components/FocusHeading.svelte';
    import NavigationProgress from '#components/NavigationProgress.svelte';
    import ThemeToggle from '#components/ThemeToggle.svelte';
    import Icon from '#icon';
    import '#lib/ktor-svelte/app.css';
    import { m } from '#i18n';
    import { nav, routes } from '#routes';
    import { signOut } from '#lib/session.svelte.ts';
    import { pendingWrites, warnBeforeLeaving } from '#lib/api/pending-writes.svelte.ts';

    let { children } = $props();

    let appName = $state(m.appTitle());

    const links = $derived(
        nav.filter((item) => {
            const guard = matchGuard(pageGuards, item.to());
            if (!guard) return !currentUser.user;
            return currentUser.user !== null && (!guard.permission || can(guard.permission));
        })
    );

    $effect(() => warnBeforeLeaving());

    onMount(async () => {
        cookieConsent.banner({ text: m.consentText(), accept: m.consentAccept(), refuse: m.consentRefuse() });
        void currentUser.load();
        const configured = (await loadPublicConfig()).appName;
        if (configured) appName = configured;
    });
</script>

<NavigationProgress label={m.navLoading()} />
<FocusHeading />
<a class="btn btn-sm sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50" href="#content">{m.skipToContent()}</a>

<header class="navbar bg-base-100 border-b border-base-300 flex-wrap gap-2 px-4">
    <a class="btn btn-ghost text-lg" href={routes.home()}><Icon name="Rocket" size={20} /> {appName}</a>
    <nav class="flex flex-1 flex-wrap gap-1" aria-label={m.navMain()}>
        {#each links as link (link.to.id)}
            <a class="btn btn-ghost btn-sm" href={link.to()} aria-current={link.to.ariaCurrent(page)}>
                <Icon name={link.icon} size={16} />
                {link.title()}
            </a>
        {/each}
    </nav>
    {#if pendingWrites.active}
        <span id="saving" class="flex items-center gap-1 text-sm opacity-70" role="status">
            <span class="loading loading-spinner loading-xs" aria-hidden="true"></span>{m.saving()}
        </span>
    {/if}
    <ThemeToggle id="theme" class="w-36" label={m.settingsTheme()} />
    <LocaleSwitch id="locale" class="w-28" label={m.settingsLanguage()} />
    {#if currentUser.user}
        <span id="signed-in-as" class="hidden text-sm sm:inline">{currentUser.user.name}</span>
        <button class="btn btn-outline btn-sm" type="button" onclick={signOut}><Icon name="LogOut" size={16} /> {m.navSignOut()}</button>
    {:else if currentUser.ready}
        <a class="btn btn-primary btn-sm" href={routes.login()}><Icon name="LogIn" size={16} /> {m.navSignIn()}</a>
    {/if}
</header>

{#if currentUser.sessionEnding}
    <div id="session-ending" class="alert alert-warning mx-auto mt-4 max-w-4xl" role="status">
        <Icon name="Clock" size={18} />
        <span>{m.sessionEnding()}</span>
        <button class="btn btn-sm" type="button" onclick={() => currentUser.extend()}>{m.sessionExtend()}</button>
    </div>
{/if}

<main id="content" class="mx-auto my-8 max-w-4xl px-4" tabindex="-1">
    {@render children()}
</main>

<footer class="border-t border-base-300 py-6 text-center text-sm">
    <p>{m.footerNote()}</p>
</footer>
