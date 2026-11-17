<script lang="ts">
    import { onMount, type Snippet } from 'svelte';
    import { afterNavigate } from '$app/navigation';
    import { page } from '$app/state';
{{iconImport}}
    interface Item {
        href: string;
        label: string;
        icon?: {{iconType}};
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

<div class="{{layout}} {className}" data-collapsed={collapsed} data-open={open}>
    <button type="button" class="{{menuButton}}" aria-expanded={open} aria-controls="ktor-svelte-sidebar" onclick={() => (open = !open)}>{menuText}</button>
    {#if open}<button type="button" class="{{backdrop}}" aria-label={menuText} onclick={() => (open = false)}></button>{/if}
    <nav id="ktor-svelte-sidebar" class="{{sidebar}}" aria-label={label}>
        <ul class="{{list}}">
            {#each items as item (item.href)}
                <li>
                    <a class="{{link}}" href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined} title={collapsed ? item.label : undefined}>
{{iconMarkup}}
                        <span class={collapsed ? '{{hiddenLabel}}' : undefined}>{item.label}</span>
                    </a>
                </li>
            {/each}
        </ul>
        <button type="button" class="{{collapseButton}}" aria-pressed={collapsed} onclick={toggleCollapsed}>{collapsed ? expandText : collapseText}</button>
    </nav>
    <div class="{{content}}">
        {@render children()}
    </div>
</div>{{style}}
