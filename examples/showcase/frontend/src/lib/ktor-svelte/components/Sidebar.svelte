<script lang="ts">
    import { onMount, type Snippet } from 'svelte';
    import { afterNavigate } from '$app/navigation';
    import { page } from '$app/state';
    import Icon from '../Icon.svelte';
    import type { LucideIconName } from '../icons.js';

    interface Item {
        href: string;
        label: string;
        icon?: LucideIconName;
    }

    interface Props {
        items: Item[];
        children: Snippet;
        label?: string;
        collapseText?: string;
        expandText?: string;
        menuText?: string;
        remember?: string;
        class?: string;
    }

    let {
        items,
        children,
        label = 'Sections',
        collapseText = 'Collapse',
        expandText = 'Expand',
        menuText = 'Menu',
        remember = 'ktor-svelte-sidebar',
        class: className = ''
    }: Props = $props();

    let collapsed = $state(false);
    let open = $state(false);

    onMount(() => {
        try {
            collapsed = localStorage.getItem(remember) === 'collapsed';
        } catch {
            collapsed = false;
        }
    });

    afterNavigate(() => {
        open = false;
    });

    function toggleCollapsed() {
        collapsed = !collapsed;
        try {
            localStorage.setItem(remember, collapsed ? 'collapsed' : 'expanded');
        } catch {
            return;
        }
    }

    function isCurrent(href: string): boolean {
        return page.url.pathname === href;
    }

    function initial(text: string): string {
        return text.trim().charAt(0).toUpperCase();
    }
</script>

<svelte:window onkeydown={(event) => event.key === 'Escape' && (open = false)} />

<div class="ktor-svelte-sidebar-layout {className}" data-collapsed={collapsed} data-open={open}>
    <button type="button" class="ktor-svelte-sidebar-menu btn btn-sm" aria-expanded={open} aria-controls="ktor-svelte-sidebar" onclick={() => (open = !open)}>{menuText}</button>
    {#if open}<button type="button" class="ktor-svelte-sidebar-backdrop" aria-label={menuText} onclick={() => (open = false)}></button>{/if}
    <nav id="ktor-svelte-sidebar" class="ktor-svelte-sidebar-nav bg-base-200 rounded-box p-2" aria-label={label}>
        <ul class="menu w-full p-0">
            {#each items as item (item.href)}
                <li>
                    <a class="" href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined} title={collapsed ? item.label : undefined}>
                        {#if item.icon}<Icon name={item.icon} size={18} />{:else if collapsed}<span aria-hidden="true">{initial(item.label)}</span>{/if}
                        <span class={collapsed ? 'ktor-svelte-sidebar-hidden' : undefined}>{item.label}</span>
                    </a>
                </li>
            {/each}
        </ul>
        <button type="button" class="ktor-svelte-sidebar-collapse btn btn-ghost btn-xs mt-2" aria-pressed={collapsed} onclick={toggleCollapsed}>{collapsed ? expandText : collapseText}</button>
    </nav>
    <div class="ktor-svelte-sidebar-content">
        {@render children()}
    </div>
</div>
<style>
    .ktor-svelte-sidebar-layout {
        display: grid;
        grid-template-columns: 14rem 1fr;
        gap: 1rem;
    }

    .ktor-svelte-sidebar-layout[data-collapsed='true'] {
        grid-template-columns: 3.5rem 1fr;
    }

    .ktor-svelte-sidebar-list {
        display: grid;
        gap: 0.25rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .ktor-svelte-sidebar-link {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .ktor-svelte-sidebar-menu,
    .ktor-svelte-sidebar-backdrop {
        display: none;
    }

    .ktor-svelte-sidebar-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
    }

    @media (max-width: 768px) {
        .ktor-svelte-sidebar-layout,
        .ktor-svelte-sidebar-layout[data-collapsed='true'] {
            grid-template-columns: 1fr;
        }

        .ktor-svelte-sidebar-menu {
            display: inline-block;
            justify-self: start;
        }

        .ktor-svelte-sidebar-nav,
        .ktor-svelte-sidebar-collapse {
            display: none;
        }

        .ktor-svelte-sidebar-layout[data-open='true'] .ktor-svelte-sidebar-nav {
            display: block;
            position: fixed;
            inset: 0 auto 0 0;
            z-index: 50;
            width: 16rem;
            padding: 1rem;
            overflow-y: auto;
            background: Canvas;
        }

        .ktor-svelte-sidebar-layout[data-open='true'] .ktor-svelte-sidebar-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 40;
            border: 0;
            background: rgb(0 0 0 / 0.4);
        }

        .ktor-svelte-sidebar-layout[data-open='true'] .ktor-svelte-sidebar-hidden {
            position: static;
            width: auto;
            height: auto;
            clip: auto;
        }
    }
</style>

