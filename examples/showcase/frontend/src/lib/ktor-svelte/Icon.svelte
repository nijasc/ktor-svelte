<script lang="ts">
    import type { Component } from 'svelte';
    import { icons, type LucideIconName } from './icons.js';

    type Loaded = Promise<{ default: Component<any> }>;

    let { name, ...rest }: { name: LucideIconName; size?: number | string; color?: string; class?: string; strokeWidth?: number | string } =
        $props();

    const devIcons: Record<string, () => Loaded> = import.meta.env.DEV
        ? import.meta.glob<{ default: Component<any> }>('/node_modules/@lucide/svelte/dist/icons/*.svelte')
        : {};

    function constant(path: string): string {
        const pascal = (path.split('/').pop() ?? '')
            .replace(/\.svelte$/, '')
            .split('-')
            .filter((part) => part !== '')
            .map((part) => part[0].toUpperCase() + part.slice(1))
            .join('');
        return /^\d/.test(pascal) ? `Icon${pascal}` : pascal;
    }

    function load(icon: LucideIconName): Loaded {
        const known = icons[icon];
        if (known) return known();
        const path = Object.keys(devIcons).find((candidate) => constant(candidate) === icon);
        if (path) {
            console.warn(`ktor-svelte: the icon ${icon} is not in the production build yet. Run svelteSync to add it.`);
            return devIcons[path]();
        }
        return Promise.reject(new Error(`ktor-svelte: unknown icon ${icon}. Run svelteSync.`));
    }

    let loaded: Loaded = $derived(load(name));
</script>

{#await loaded then icon}
    <icon.default {...rest} />
{/await}
