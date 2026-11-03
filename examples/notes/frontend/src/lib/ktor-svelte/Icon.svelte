<script lang="ts">
    import type { Component } from 'svelte';
    import { icons, type LucideIconName } from './icons.js';

    let { name, ...rest }: { name: LucideIconName; size?: number | string; color?: string; class?: string; strokeWidth?: number | string } =
        $props();

    let loaded: Promise<{ default: Component<any> }> = $derived(icons[name]());
</script>

{#await loaded then icon}
    <icon.default {...rest} />
{/await}
