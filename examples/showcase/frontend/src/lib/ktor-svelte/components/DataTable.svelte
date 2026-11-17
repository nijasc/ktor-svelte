<script lang="ts" generics="T, Q extends { cursor?: string } = { cursor?: string }">
    import { tick, untrack, type Snippet } from 'svelte';
    import { errorMessage, type PageOf } from '#api';

    type Column =
        | { key: keyof T & string; label: string; text?: (item: T) => string; class?: string; sort?: boolean | string }
        | { id: string; label: string; text: (item: T) => string; class?: string; sort?: boolean | string };

    interface TableAction<Item> {
        label: string;
        run: (item: Item) => Promise<unknown>;
        confirm?: string;
    }

    interface Props {
        load: (query: Q) => Promise<PageOf<T>>;
        columns: Column[];
        query?: Omit<Q, 'cursor'>;
        first?: PageOf<T>;
        key?: (item: T) => string | number;
        paging?: 'more' | 'pages';
        caption?: string;
        row?: Snippet<[T, Column[]]>;
        chooser?: boolean;
        remember?: string;
        columnsLabel?: string;
        moveUp?: string;
        moveDown?: string;
        actions?: TableAction<T>[];
        sortParam?: string;
        sortedBy?: string;
        selectRow?: (item: T) => string;
        selectPage?: string;
        selectEverything?: string;
        clearSelection?: string;
        selectedText?: (count: number) => string;
        workingText?: (done: number, total: number) => string;
        doneText?: (worked: number, total: number) => string;
        empty?: string;
        onopen?: (item: T) => void;
        virtual?: { rowHeight: number; height?: string; overscan?: number };
        skeletonRows?: number;
        noResults?: string;
        filtered?: boolean;
        emptyAction?: Snippet;
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
        chooser = false,
        remember,
        columnsLabel = 'Columns',
        moveUp = 'Up',
        moveDown = 'Down',
        actions = [],
        sortParam,
        sortedBy = 'Sorted by',
        selectRow,
        selectPage = 'Select all on this page',
        selectEverything = 'Select every page',
        clearSelection = 'Clear',
        selectedText = (count: number) => `${count} selected`,
        workingText = (done: number, total: number) => `Working: ${done} of ${total}`,
        doneText = (worked: number, total: number) => `Done: ${worked} of ${total} worked.`,
        empty = 'Nothing here yet.',
        onopen,
        virtual,
        skeletonRows = 3,
        noResults = 'Nothing matches this filter.',
        filtered,
        emptyAction,
        loading = 'Loading',
        more = 'Load more',
        previous = 'Previous',
        next = 'Next',
        retry = 'Try again',
        class: className = ''
    }: Props = $props();

    type ColumnChoice = { order: string[]; hidden: string[] };

    function storedChoice(): ColumnChoice | undefined {
        if (!remember || typeof localStorage === 'undefined') return undefined;
        try {
            const raw = localStorage.getItem(`ktor-svelte-table:${remember}`);
            return raw ? (JSON.parse(raw) as ColumnChoice) : undefined;
        } catch {
            return undefined;
        }
    }

    const initialChoice = untrack(() => storedChoice());
    let order = $state<string[]>(initialChoice?.order ?? []);
    let hidden = $state<string[]>(initialChoice?.hidden ?? []);
    const arranged = $derived.by(() => {
        const byId = new Map(columns.map((column) => [columnId(column), column]));
        const known = order.filter((id) => byId.has(id));
        const added = columns.map(columnId).filter((id) => !known.includes(id));
        return [...known, ...added].map((id) => byId.get(id) as Column);
    });
    const shown = $derived(arranged.filter((column) => !hidden.includes(columnId(column))));

    function saveChoice() {
        if (!remember || typeof localStorage === 'undefined') return;
        try {
            localStorage.setItem(`ktor-svelte-table:${remember}`, JSON.stringify({ order, hidden }));
        } catch {
            return;
        }
    }

    function toggleColumn(id: string) {
        hidden = hidden.includes(id) ? hidden.filter((other) => other !== id) : [...hidden, id];
        saveChoice();
    }

    function moveColumn(index: number, by: number) {
        const ids = arranged.map(columnId);
        const target = index + by;
        if (target < 0 || target >= ids.length) return;
        [ids[index], ids[target]] = [ids[target], ids[index]];
        order = ids;
        saveChoice();
    }

    let items = $state.raw<T[]>(untrack(() => first?.items ?? []));
    let active = $state(0);
    let body = $state<HTMLTableSectionElement>();
    let scrollTop = $state(0);
    let viewport = $state(0);
    const PAGING_KEYS = ['cursor', 'limit'];
    const isFiltered = $derived(
        filtered ??
            Object.entries((query ?? {}) as Record<string, unknown>).some(
                ([name, value]) =>
                    !PAGING_KEYS.includes(name) &&
                    value !== undefined &&
                    value !== null &&
                    value !== '' &&
                    !(Array.isArray(value) && value.length === 0)
            )
    );
    let sorting = $state<{ id: string; descending: boolean } | null>(null);

    function sortName(column: Column): string {
        return typeof column.sort === 'string' ? column.sort : columnId(column);
    }

    function compare(left: string, right: string): number {
        const a = Number(left);
        const b = Number(right);
        if (left !== '' && right !== '' && !Number.isNaN(a) && !Number.isNaN(b)) return a - b;
        return left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' });
    }

    const rows = $derived.by(() => {
        if (!sorting || sortParam) return items;
        const column = columns.find((candidate) => columnId(candidate) === sorting?.id);
        if (!column) return items;
        const direction = sorting.descending ? -1 : 1;
        return [...items].sort((left, right) => direction * compare(cellText(left, column), cellText(right, column)));
    });

    const windowed = $derived.by(() => {
        if (!virtual) return { start: 0, end: rows.length };
        const extra = virtual.overscan ?? 5;
        const seen = viewport || virtual.rowHeight * 20;
        const start = Math.max(0, Math.floor(scrollTop / virtual.rowHeight) - extra);
        const end = Math.min(rows.length, Math.ceil((scrollTop + seen) / virtual.rowHeight) + extra);
        return { start, end };
    });
    const visible = $derived(rows.slice(windowed.start, windowed.end));

    function scrolled(event: Event & { currentTarget: HTMLElement }) {
        const box = event.currentTarget;
        scrollTop = box.scrollTop;
        viewport = box.clientHeight;
        if (cursor && !busy && !problem && box.scrollTop + box.clientHeight * 2 >= box.scrollHeight) void fetchPage(cursor, true);
    }

    function focusRow(index: number) {
        if (rows.length === 0) return;
        active = Math.max(0, Math.min(rows.length - 1, index));
        const box = body?.closest<HTMLElement>('[data-virtual]');
        if (virtual && box) {
            const top = active * virtual.rowHeight;
            if (top < box.scrollTop || top + virtual.rowHeight > box.scrollTop + box.clientHeight) {
                box.scrollTop = Math.max(0, top - box.clientHeight / 2);
                scrollTop = box.scrollTop;
                viewport = box.clientHeight;
            }
        }
        void tick().then(() => body?.querySelector<HTMLElement>(`tr[data-row="${active}"]`)?.focus());
    }

    function clicked(event: MouseEvent, item: T) {
        if ((event.target as Element | null)?.closest('input, button, a, label, select, textarea')) return;
        onopen?.(item);
    }

    function keyed(event: KeyboardEvent) {
        if (!onopen || event.target instanceof HTMLInputElement || event.target instanceof HTMLButtonElement) return;
        const step = virtual ? Math.max(1, Math.floor((viewport || virtual.rowHeight * 10) / virtual.rowHeight)) : 10;
        const moves: Record<string, number> = {
            ArrowDown: active + 1,
            ArrowUp: active - 1,
            Home: 0,
            End: rows.length - 1,
            PageDown: active + step,
            PageUp: active - step
        };
        if (event.key in moves) {
            event.preventDefault();
            focusRow(moves[event.key]);
        } else if (event.key === 'Enter' && rows[active] !== undefined) {
            event.preventDefault();
            onopen(rows[active]);
        }
    }

    function ariaSort(column: Column): 'ascending' | 'descending' | undefined {
        if (!column.sort || sorting?.id !== columnId(column)) return undefined;
        return sorting.descending ? 'descending' : 'ascending';
    }

    function sortBy(column: Column) {
        const id = columnId(column);
        if (sorting?.id !== id) sorting = { id, descending: false };
        else if (!sorting.descending) sorting = { id, descending: true };
        else sorting = null;
        if (sortParam) void reload();
    }

    function withSort(base: Record<string, unknown>): Record<string, unknown> {
        if (!sortParam) return base;
        const column = sorting ? columns.find((candidate) => columnId(candidate) === sorting?.id) : undefined;
        if (!column || !sorting) return base;
        return { ...base, [sortParam]: (sorting.descending ? '-' : '') + sortName(column) };
    }
    const selectable = $derived(actions.length > 0);
    let chosen = $state.raw<Map<string | number, T>>(new Map());
    let working = $state<{ done: number; total: number } | null>(null);
    let outcome = $state('');

    function keyOf(item: T, index: number): string | number {
        return key ? key(item) : index;
    }

    const pageKeys = $derived(rows.map((item, index) => keyOf(item, index)));
    const pageChosen = $derived(pageKeys.filter((id) => chosen.has(id)).length);

    function toggleRow(item: T, index: number) {
        const next = new Map(chosen);
        const id = keyOf(item, index);
        if (next.has(id)) next.delete(id);
        else next.set(id, item);
        chosen = next;
        outcome = '';
    }

    function togglePage() {
        const next = new Map(chosen);
        const all = pageChosen === rows.length;
        rows.forEach((item, index) => {
            if (all) next.delete(keyOf(item, index));
            else next.set(keyOf(item, index), item);
        });
        chosen = next;
        outcome = '';
    }

    async function chooseEverything() {
        const next = new Map(chosen);
        items.forEach((item, index) => next.set(keyOf(item, index), item));
        let from = cursor;
        busy = true;
        try {
            while (from) {
                const page = await load({ ...query, cursor: from } as Q);
                page.items.forEach((item) => next.set(key ? key(item) : next.size, item));
                from = page.next ?? null;
            }
            chosen = next;
        } catch (error) {
            problem = errorMessage(error);
        } finally {
            busy = false;
        }
    }

    async function runAction(action: TableAction<T>) {
        if (action.confirm && typeof window !== 'undefined' && !window.confirm(action.confirm)) return;
        const targets = [...chosen.values()];
        let worked = 0;
        working = { done: 0, total: targets.length };
        for (const item of targets) {
            const ok = await action.run(item).then(
                () => true,
                () => false
            );
            if (ok) worked += 1;
            working = { done: (working?.done ?? 0) + 1, total: targets.length };
        }
        working = null;
        chosen = new Map();
        outcome = doneText(worked, targets.length);
        await reload();
    }
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
            const page = await load(withSort({ ...query, ...(from === undefined ? {} : { cursor: from }) }) as Q);
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
    {#if chooser}
        <details class="mb-2">
            <summary class="btn btn-sm">{columnsLabel}</summary>
            <ul class="menu bg-base-200 rounded-box mt-1 w-fit gap-1">
                {#each arranged as column, index (columnId(column))}
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                checked={!hidden.includes(columnId(column))}
                                disabled={shown.length === 1 && !hidden.includes(columnId(column))}
                                onchange={() => toggleColumn(columnId(column))}
                            />
                            {column.label}
                        </label>
                        <button type="button" class="btn btn-sm" aria-label="{moveUp}: {column.label}" disabled={index === 0} onclick={() => moveColumn(index, -1)}
                            >{moveUp}</button
                        >
                        <button
                            type="button"
                            class="btn btn-sm"
                            aria-label="{moveDown}: {column.label}"
                            disabled={index === arranged.length - 1}
                            onclick={() => moveColumn(index, 1)}>{moveDown}</button
                        >
                    </li>
                {/each}
            </ul>
        </details>
    {/if}
    {#if selectable && (chosen.size > 0 || working || outcome)}
        <div class="bg-base-200 rounded-box mb-2 flex flex-wrap items-center gap-2 p-2" role="status">
            {#if working}
                <span>{workingText(working.done, working.total)}</span>
            {:else if chosen.size > 0}
                <span>{selectedText(chosen.size)}</span>
                {#each actions as action (action.label)}
                    <button type="button" class="btn btn-sm" onclick={() => void runAction(action)}>{action.label}</button>
                {/each}
                {#if cursor && key}
                    <button type="button" class="btn btn-sm" disabled={busy} onclick={() => void chooseEverything()}>{selectEverything}</button>
                {/if}
                <button type="button" class="btn btn-sm" onclick={() => (chosen = new Map())}>{clearSelection}</button>
            {:else}
                <span>{outcome}</span>
            {/if}
        </div>
    {/if}
    <div
        class={virtual ? 'rounded-box border border-base-300' : undefined}
        style={virtual ? `max-height: ${virtual.height ?? '24rem'}; overflow-y: auto;` : undefined}
        onscroll={virtual ? scrolled : undefined}
        data-virtual={virtual ? true : undefined}
    >
    <table class="table" aria-busy={busy} aria-rowcount={virtual ? rows.length + 1 : undefined}>
        {#if caption}<caption class="text-left font-semibold">{caption}</caption>{/if}
        <thead>
            <tr>
                {#if selectable}
                    <th scope="col" class="w-8">
                        <input
                            type="checkbox"
                            aria-label={selectPage}
                            checked={items.length > 0 && pageChosen === items.length}
                            indeterminate={pageChosen > 0 && pageChosen < items.length}
                            disabled={items.length === 0 || working !== null}
                            onchange={togglePage}
                        />
                    </th>
                {/if}
                {#each shown as column (columnId(column))}
                    <th scope="col" class={column.class} aria-sort={ariaSort(column)}>
                        {#if column.sort}
                            <button type="button" class="link link-hover font-semibold" onclick={() => sortBy(column)}>
                                {column.label}<span aria-hidden="true">{ariaSort(column) === 'ascending' ? ' ^' : ariaSort(column) === 'descending' ? ' v' : ''}</span>
                            </button>
                        {:else}
                            {column.label}
                        {/if}
                    </th>
                {/each}
            </tr>
        </thead>
        <tbody bind:this={body}>
            {#if busy && items.length === 0}
                {#each Array.from({ length: skeletonRows }, (_, index) => index) as placeholder (placeholder)}
                    <tr aria-hidden="true" data-skeleton>
                        {#if selectable}<td class="w-8"></td>{/if}
                        {#each shown as column (columnId(column))}
                            <td class={column.class}><span class="skeleton block h-4 w-full"></span></td>
                        {/each}
                    </tr>
                {/each}
            {/if}
            {#if virtual && windowed.start > 0}
                <tr aria-hidden="true" data-spacer><td colspan={shown.length + (selectable ? 1 : 0)} style="height: {windowed.start * virtual.rowHeight}px; padding: 0;"></td></tr>
            {/if}
            {#each visible as item, offset (key ? key(item) : windowed.start + offset)}
                {@const index = windowed.start + offset}
                <tr
                    aria-rowindex={virtual ? index + 2 : undefined}
                    style={virtual ? `height: ${virtual.rowHeight}px;` : undefined}
                    data-row={index}
                    tabindex={onopen ? (index === active ? 0 : -1) : undefined}
                    class={onopen ? 'hover cursor-pointer focus:outline-primary' : undefined}
                    onclick={onopen ? (event) => clicked(event, item) : undefined}
                    onfocus={onopen ? () => (active = index) : undefined}
                    onkeydown={onopen ? keyed : undefined}
                >
                    {#if selectable}
                        <td class="w-8">
                            <input
                                type="checkbox"
                                aria-label={selectRow ? selectRow(item) : `${selectPage}: ${shown[0] ? cellText(item, shown[0]) : index + 1}`}
                                checked={chosen.has(keyOf(item, index))}
                                disabled={working !== null}
                                onchange={() => toggleRow(item, index)}
                            />
                        </td>
                    {/if}
                    {#if row}
                        {@render row(item, shown)}
                    {:else}
                        {#each shown as column (columnId(column))}
                            <td class={column.class}>{cellText(item, column)}</td>
                        {/each}
                    {/if}
                </tr>
            {/each}
            {#if virtual && windowed.end < rows.length}
                <tr aria-hidden="true" data-spacer>
                    <td colspan={shown.length + (selectable ? 1 : 0)} style="height: {(rows.length - windowed.end) * virtual.rowHeight}px; padding: 0;"></td>
                </tr>
            {/if}
        </tbody>
    </table>
    </div>
    {#if problem}
        <p class="text-error py-2 text-sm" role="alert">
            {problem}
            <button type="button" class="btn btn-sm" onclick={() => void fetchPage(last.from, last.append)}>{retry}</button>
        </p>
    {:else if busy}
        <p class="py-2 text-sm opacity-70" role="status">{loading}</p>
    {:else if items.length === 0}
        <div class="grid justify-items-center gap-2 py-6 text-center" data-empty={isFiltered ? 'filtered' : 'none'}>
            <p class="py-2 text-sm opacity-70">{isFiltered ? noResults : empty}</p>
            {#if emptyAction && !isFiltered}{@render emptyAction()}{/if}
        </div>
    {/if}
    {#if !virtual && paging === 'more'}
        {#if cursor && !problem}
            <button type="button" class="btn btn-sm" disabled={busy} onclick={loadMore}>{more}</button>
        {/if}
    {:else if !virtual && (trail.length > 0 || cursor)}
        <div class="flex gap-2 py-2">
            <button type="button" class="btn btn-sm" disabled={busy || trail.length === 0} onclick={back}>{previous}</button>
            <button type="button" class="btn btn-sm" disabled={busy || !cursor} onclick={forward}>{next}</button>
        </div>
    {/if}
</div>
