<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/state';
    import { loadPublicConfig, Role } from '#api';
    import Icon from '#icon';
    import '#lib/ktor-svelte/app.css';
    import { getLocale, locales, m, setLocale, type Locale } from '#i18n';
    import { loadSession, session, signOut } from '#lib/session.svelte.ts';
    import { defaultTheme, getTheme, setTheme, themes, type ThemeName } from '#theme';

    let { children } = $props();

    let appName = $state(m.appTitle());
    let theme = $state<ThemeName>(defaultTheme);
    let locale = $state<Locale>('en');

    const links = $derived(
        session.user
            ? [
                  { href: '/board', label: m.navBoard(), icon: 'LayoutDashboard' as const },
                  { href: '/tasks/new', label: m.navNewTask(), icon: 'Plus' as const },
                  ...(session.user.role === Role.ADMIN ? [{ href: '/admin', label: m.navAdmin(), icon: 'ShieldCheck' as const }] : []),
                  { href: '/settings', label: m.navSettings(), icon: 'Settings' as const }
              ]
            : [{ href: '/about', label: m.navAbout(), icon: 'Info' as const }]
    );

    onMount(async () => {
        theme = getTheme();
        locale = getLocale();
        if (!session.ready) void loadSession();
        const configured = (await loadPublicConfig()).appName;
        if (configured) appName = configured;
    });
</script>

<a class="btn btn-sm sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50" href="#content">{m.skipToContent()}</a>

<header class="navbar bg-base-100 border-b border-base-300 flex-wrap gap-2 px-4">
    <a class="btn btn-ghost text-lg" href="/"><Icon name="Rocket" size={20} /> {appName}</a>
    <nav class="flex flex-1 flex-wrap gap-1" aria-label={m.navMain()}>
        {#each links as link (link.href)}
            <a class="btn btn-ghost btn-sm" href={link.href} aria-current={page.url.pathname === link.href ? 'page' : undefined}>
                <Icon name={link.icon} size={16} />
                {link.label}
            </a>
        {/each}
    </nav>
    <label class="sr-only" for="theme">{m.settingsTheme()}</label>
    <select id="theme" class="select select-sm w-36" bind:value={theme} onchange={() => setTheme(theme)}>
        {#each themes as option (option)}<option value={option}>{option}</option>{/each}
    </select>
    <label class="sr-only" for="locale">{m.settingsLanguage()}</label>
    <select id="locale" class="select select-sm w-20" bind:value={locale} onchange={() => setLocale(locale)}>
        {#each locales as option (option)}<option value={option}>{option}</option>{/each}
    </select>
    {#if session.user}
        <span id="signed-in-as" class="hidden text-sm sm:inline">{session.user.name}</span>
        <button class="btn btn-outline btn-sm" type="button" onclick={signOut}><Icon name="LogOut" size={16} /> {m.navSignOut()}</button>
    {:else if session.ready}
        <a class="btn btn-primary btn-sm" href="/login"><Icon name="LogIn" size={16} /> {m.navSignIn()}</a>
    {/if}
</header>

<main id="content" class="mx-auto my-8 max-w-4xl px-4" tabindex="-1">
    {@render children()}
</main>

<footer class="border-t border-base-300 py-6 text-center text-sm">
    <p>{m.footerNote()}</p>
</footer>
