<script lang="ts">
    import { onMount } from 'svelte';
    import { defaultTheme, getTheme, setTheme, themes, type ThemeName } from '../theme.js';

    interface Props {
        label?: string;
        labels?: Partial<Record<ThemeName, string>>;
        id?: string;
        class?: string;
    }

    let { label = 'Theme', labels = {}, id, class: className = '' }: Props = $props();

    const all: readonly ThemeName[] = themes;
    let theme = $state<ThemeName>(defaultTheme);

    onMount(() => {
        theme = getTheme();
    });

    function pick(next: ThemeName) {
        theme = next;
        setTheme(next);
    }

    function other(): ThemeName {
        return all[(all.indexOf(theme) + 1) % all.length];
    }
</script>

{#if all.length === 2}
    <button {id} type="button" class={['btn btn-sm', className]} aria-label={label} onclick={() => pick(other())}>
        {labels[theme] ?? theme}
    </button>
{:else}
    <select
        {id}
        class={['select select-sm', className]}
        aria-label={label}
        value={theme}
        onchange={(event) => pick(event.currentTarget.value as ThemeName)}
    >
        {#each all as name (name)}
            <option value={name}>{labels[name] ?? name}</option>
        {/each}
    </select>
{/if}
