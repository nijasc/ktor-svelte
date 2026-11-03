<script lang="ts">
    import { onMount } from 'svelte';
    import { loadPublicConfig } from '#lib/api/index.js';

    let { children } = $props();

    let appName = $state('ktor-svelte notes');

    onMount(async () => {
        appName = (await loadPublicConfig()).appName;
    });
</script>

<header>
    <a class="brand" href="/">{appName}</a>
    <nav>
        <a href="/notes">Notes</a>
        <a href="/about">About</a>
    </nav>
</header>

<main>
    {@render children()}
</main>

<style>
    :global(body) {
        margin: 0;
        font-family: system-ui, sans-serif;
        color: #1f2933;
        background: #f5f7fa;
    }

    :global(a) {
        color: #0b69a3;
    }

    :global(button) {
        font: inherit;
        padding: 0.4rem 0.8rem;
        border: 1px solid #9aa5b1;
        border-radius: 6px;
        background: #fff;
        cursor: pointer;
    }

    :global(input),
    :global(textarea) {
        font: inherit;
        padding: 0.4rem 0.6rem;
        border: 1px solid #9aa5b1;
        border-radius: 6px;
        box-sizing: border-box;
        width: 100%;
    }

    header {
        display: flex;
        gap: 2rem;
        align-items: center;
        padding: 1rem 2rem;
        background: #fff;
        border-bottom: 1px solid #e4e7eb;
    }

    .brand {
        font-weight: 700;
        text-decoration: none;
    }

    nav {
        display: flex;
        gap: 1rem;
    }

    main {
        max-width: 48rem;
        margin: 2rem auto;
        padding: 0 1rem;
    }
</style>
