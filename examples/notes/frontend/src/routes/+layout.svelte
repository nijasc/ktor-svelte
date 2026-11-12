<script lang="ts">
    import { onMount } from 'svelte';
    import { loadPublicConfig } from '#api';
    import Icon from '#icon';
    import '#lib/ktor-svelte/app.css';
    import { getLocale, localizeHref, locales, m, setLocale, type Locale } from '#i18n';
    import { defaultTheme, getTheme, setTheme, themes, type ThemeName } from '#theme';

    let { children } = $props();

    let appName = $state(m.appTitle());
    let theme = $state<ThemeName>(defaultTheme);
    let locale = $state<Locale>('en');

    onMount(async () => {
        theme = getTheme();
        locale = getLocale();
        const configured = (await loadPublicConfig()).appName;
        if (configured) appName = configured;
    });
</script>

<header class="navbar bg-base-100 border-b border-base-300 gap-4 px-6">
    <a class="btn btn-ghost text-lg" href={localizeHref('/')}><Icon name="NotebookPen" size={20} /> {appName}</a>
    <nav class="flex flex-1 gap-1">
        <a class="btn btn-ghost btn-sm" href={localizeHref('/notes')}><Icon name="StickyNote" size={16} /> {m.navNotes()}</a>
        <a class="btn btn-ghost btn-sm" href={localizeHref('/about')}><Icon name="Info" size={16} /> {m.navAbout()}</a>
    </nav>
    <select id="theme" class="select select-sm w-32" aria-label="Theme" bind:value={theme} onchange={() => setTheme(theme)}>
        {#each themes as option}<option value={option}>{option}</option>{/each}
    </select>
    <select id="locale" class="select select-sm w-20" aria-label="Language" bind:value={locale} onchange={() => setLocale(locale)}>
        {#each locales as option}<option value={option}>{option}</option>{/each}
    </select>
</header>

<main class="mx-auto my-8 max-w-3xl px-4">
    {@render children()}
</main>
