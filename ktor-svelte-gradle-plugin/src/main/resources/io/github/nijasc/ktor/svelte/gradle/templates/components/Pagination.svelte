<script lang="ts" generics="T, Q extends { cursor?: string } = { cursor?: string }">
    import { tick, untrack, type Snippet } from 'svelte';
    import { errorMessage, type PageOf } from '#api';

    interface Props {
        load: (query: Q) => Promise<PageOf<T>>;
        item: Snippet<[T, number]>;
        query?: Omit<Q, 'cursor'>;
        first?: PageOf<T>;
        key?: (item: T) => string | number;
        paging?: 'more' | 'pages';
        label?: string;
        empty?: string;
        emptyAction?: Snippet;
        loading?: string;
        more?: string;
        previous?: string;
        next?: string;
        pageText?: (page: number) => string;
        retry?: string;
        class?: string;
        listClass?: string;
    }

    let {
        load,
        item,
        query,
        first,
        key,
        paging = 'more',
        label,
        empty = 'Nothing here yet.',
        emptyAction,
        loading = 'Loading',
        more = 'Load more',
        previous = 'Previous',
        next = 'Next',
        pageText = (page: number) => `Page ${page}`,
        retry = 'Try again',
        class: className = '',
        listClass = ''
    }: Props = $props();

    let items = $state.raw<T[]>(untrack(() => first?.items ?? []));
    let cursor = $state<string | null>(untrack(() => first?.next ?? null));
    let trail = $state.raw<(string | undefined)[]>([]);
    let busy = $state(false);
    let problem = $state('');
    let list = $state<HTMLElement>();
    let current: string | undefined;
    let last: { from: string | undefined; append: boolean } = { from: undefined, append: false };
    let run = 0;
    let loaded = untrack(() => (first === undefined ? undefined : JSON.stringify(query ?? {})));

    async function fetchPage(from: string | undefined, append: boolean): Promise<void> {
        const mine = ++run;
        last = { from, append };
        busy = true;
        problem = '';
        const before = items.length;
        try {
            const page = await load({ ...query, ...(from === undefined ? {} : { cursor: from }) } as Q);
            if (mine !== run) return;
            items = append ? [...items, ...page.items] : page.items;
            cursor = page.next ?? null;
            if (append && page.items.length > 0) {
                await tick();
                const added = list?.children.item(before);
                if (added instanceof HTMLElement) {
                    added.tabIndex = -1;
                    added.focus({ preventScroll: false });
                }
            }
        } catch (error) {
            if (mine === run) problem = errorMessage(error);
        } finally {
            if (mine === run) busy = false;
        }
    }

    export function reload(): Promise<void> {
        trail = [];
        current = undefined;
        return fetchPage(undefined, false);
    }

    function loadMore() {
        if (cursor) void fetchPage(cursor, true);
    }

    function forward() {
        if (!cursor) return;
        trail = [...trail, current];
        current = cursor;
        void fetchPage(current, false);
    }

    function back() {
        if (trail.length === 0) return;
        current = trail[trail.length - 1];
        trail = trail.slice(0, -1);
        void fetchPage(current, false);
    }

    $effect(() => {
        const wanted = JSON.stringify(query ?? {});
        if (wanted === loaded) return;
        loaded = wanted;
        untrack(() => void reload());
    });
</script>

<section class={['{{wrapper}}', className]} aria-label={label} aria-busy={busy}>
    {#if items.length > 0}
        <ul bind:this={list} class={['{{list}}', listClass]}>
            {#each items as entry, index (key ? key(entry) : index)}
                <li>{@render item(entry, index)}</li>
            {/each}
        </ul>
    {/if}
    {#if problem}
        <p class="{{error}}" role="alert">
            {problem}
            <button type="button" class="{{button}}" onclick={() => void fetchPage(last.from, last.append)}>{retry}</button>
        </p>
    {:else if busy}
        <p class="{{note}}" role="status">{loading}</p>
    {:else if items.length === 0}
        <div class="{{emptyState}}">
            <p class="{{note}}">{empty}</p>
            {#if emptyAction}{@render emptyAction()}{/if}
        </div>
    {/if}
    {#if paging === 'more'}
        {#if cursor && !problem}
            <button type="button" class="{{button}}" disabled={busy} onclick={loadMore}>{more}</button>
        {/if}
    {:else if trail.length > 0 || cursor}
        <nav class="{{pager}}" aria-label={label}>
            <button type="button" class="{{button}}" disabled={busy || trail.length === 0} onclick={back}>{previous}</button>
            <span class="{{page}}" aria-live="polite">{pageText(trail.length + 1)}</span>
            <button type="button" class="{{button}}" disabled={busy || !cursor} onclick={forward}>{next}</button>
        </nav>
    {/if}
</section>
{{style}}