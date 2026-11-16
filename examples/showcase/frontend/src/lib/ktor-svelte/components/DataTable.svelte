<script lang="ts" generics="T, Q extends { cursor?: string } = { cursor?: string }">
    import { untrack, type Snippet } from 'svelte';
    import { errorMessage, type PageOf } from '#api';

    type Column =
        | { key: keyof T & string; label: string; text?: (item: T) => string; class?: string }
        | { id: string; label: string; text: (item: T) => string; class?: string };

    interface Props {
        load: (query: Q) => Promise<PageOf<T>>;
        columns: Column[];
        query?: Omit<Q, 'cursor'>;
        first?: PageOf<T>;
        key?: (item: T) => string | number;
        paging?: 'more' | 'pages';
        caption?: string;
        row?: Snippet<[T]>;
        empty?: string;
        loading?: string;
        more?: string;
        previous?: string;
        next?: string;
        retry?: string;
        class?: string;
    }

    let {
        load,
        columns,
        query,
        first,
        key,
        paging = 'more',
        caption,
        row,
        empty = 'Nothing here yet.',
        loading = 'Loading',
        more = 'Load more',
        previous = 'Previous',
        next = 'Next',
        retry = 'Try again',
        class: className = ''
    }: Props = $props();

    let items = $state.raw<T[]>(untrack(() => first?.items ?? []));
    let cursor = $state<string | null>(untrack(() => first?.next ?? null));
    let trail = $state.raw<(string | undefined)[]>([]);
    let busy = $state(false);
    let problem = $state('');
    let current: string | undefined;
    let last: { from: string | undefined; append: boolean } = { from: undefined, append: false };
    let run = 0;
    let loaded = untrack(() => (first === undefined ? undefined : JSON.stringify(query ?? {})));

    async function fetchPage(from: string | undefined, append: boolean): Promise<void> {
        const mine = ++run;
        last = { from, append };
        busy = true;
        problem = '';
        try {
            const page = await load({ ...query, ...(from === undefined ? {} : { cursor: from }) } as Q);
            if (mine !== run) return;
            items = append ? [...items, ...page.items] : page.items;
            cursor = page.next ?? null;
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

    function columnId(column: Column): string {
        return 'key' in column ? column.key : column.id;
    }

    function cellText(item: T, column: Column): string {
        if (column.text) return column.text(item);
        return 'key' in column ? String(item[column.key] ?? '') : '';
    }

    $effect(() => {
        const wanted = JSON.stringify(query ?? {});
        if (wanted === loaded) return;
        loaded = wanted;
        untrack(() => void reload());
    });
</script>

<div class={['overflow-x-auto', className]}>
    <table class="table" aria-busy={busy}>
        {#if caption}<caption class="text-left font-semibold">{caption}</caption>{/if}
        <thead>
            <tr>
                {#each columns as column (columnId(column))}
                    <th scope="col" class={column.class}>{column.label}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each items as item, index (key ? key(item) : index)}
                <tr>
                    {#if row}
                        {@render row(item)}
                    {:else}
                        {#each columns as column (columnId(column))}
                            <td class={column.class}>{cellText(item, column)}</td>
                        {/each}
                    {/if}
                </tr>
            {/each}
        </tbody>
    </table>
    {#if problem}
        <p class="text-error py-2 text-sm" role="alert">
            {problem}
            <button type="button" class="btn btn-sm" onclick={() => void fetchPage(last.from, last.append)}>{retry}</button>
        </p>
    {:else if busy}
        <p class="py-2 text-sm opacity-70" role="status">{loading}</p>
    {:else if items.length === 0}
        <p class="py-2 text-sm opacity-70">{empty}</p>
    {/if}
    {#if paging === 'more'}
        {#if cursor && !problem}
            <button type="button" class="btn btn-sm" disabled={busy} onclick={loadMore}>{more}</button>
        {/if}
    {:else if trail.length > 0 || cursor}
        <div class="flex gap-2 py-2">
            <button type="button" class="btn btn-sm" disabled={busy || trail.length === 0} onclick={back}>{previous}</button>
            <button type="button" class="btn btn-sm" disabled={busy || !cursor} onclick={forward}>{next}</button>
        </div>
    {/if}
</div>
