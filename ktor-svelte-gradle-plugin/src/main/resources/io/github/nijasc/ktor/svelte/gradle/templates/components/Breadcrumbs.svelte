<script lang="ts">
    import { page } from '$app/state';
    import { breadcrumbs, type Crumb } from '#routes';

    interface Props {
        labels?: Record<string, string>;
        current?: string;
        label?: string;
        class?: string;
    }

    let { labels = {}, current, label = 'Breadcrumb', class: className = '' }: Props = $props();

    const crumbs = $derived.by(() => {
        const trail: Crumb[] = breadcrumbs(page).map((crumb) => ({ ...crumb, title: labels[crumb.href] ?? crumb.title }));
        if (current !== undefined) {
            if (trail.at(-1)?.current) trail[trail.length - 1] = { ...trail[trail.length - 1], title: current };
            else trail.push({ title: current, href: page.url.pathname, current: true });
        }
        return trail;
    });
</script>

{#if crumbs.length > 1}
    <nav class="{{wrapper}} {className}" aria-label={label}>
        <ol class="{{list}}">
            {#each crumbs as crumb (crumb.href)}
                <li>
                    {#if crumb.current}
                        <span aria-current="page">{crumb.title}</span>
                    {:else}
                        <a class="{{link}}" href={crumb.href}>{crumb.title}</a>
                    {/if}
                </li>
            {/each}
        </ol>
    </nav>
{/if}{{style}}
