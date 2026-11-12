<script lang="ts">
    import { api, isAbortError, latest, prefetchOnHover, Status, type BoardStats, type Task } from '#api';
    import Icon from '#icon';
    import { m } from '#i18n';
    import { formatDate } from '#lib/format.ts';
    import { toast } from '#lib/ktor-svelte/toasts.ts';
    import type { PageProps } from './$types';

    const PAGE_SIZE = '5';

    let { data }: PageProps = $props();

    let tasks = $derived<Task[]>(data.first.items);
    let next = $derived<string | null | undefined>(data.first.next);
    let stats = $derived<BoardStats>(data.stats);
    let search = $state('');
    let status = $state<Status | undefined>(undefined);
    let label = $state<string | undefined>(undefined);
    let mine = $state(false);
    let loading = $state(false);

    const searchTasks = latest(api.tasks.list);
    const statusLabels: Record<Status, () => string> = { TODO: m.statusTodo, DOING: m.statusDoing, DONE: m.statusDone };
    const filters = $derived({
        search: search.trim() || undefined,
        status,
        label,
        mine: mine ? 'true' : undefined
    });

    async function refresh() {
        try {
            const [page, fresh] = await Promise.all([searchTasks({ ...filters, limit: PAGE_SIZE }), api.stats.list()]);
            tasks = page.items;
            next = page.next;
            stats = fresh;
        } catch (error) {
            if (!isAbortError(error)) throw error;
        }
    }

    async function loadMore() {
        if (!next) return;
        loading = true;
        try {
            const page = await api.tasks.list({ ...filters, limit: PAGE_SIZE, cursor: next });
            tasks = [...tasks, ...page.items];
            next = page.next;
        } finally {
            loading = false;
        }
    }

    async function move(task: Task, to: Status) {
        const moved = await api.tasks.status(task.id, { status: to });
        tasks = tasks.map((item) => (item.id === moved.id ? moved : item));
        stats = await api.stats.list();
        toast(m.boardMoved({ title: moved.title, status: statusLabels[to]() }), { kind: 'success' });
    }

    function pickStatus(selected: Status | undefined) {
        status = selected;
        return refresh();
    }

    function pickLabel(selected: string | undefined) {
        label = selected;
        return refresh();
    }
</script>

<svelte:head>
    <title>{m.navBoard()} - {m.appTitle()}</title>
</svelte:head>

<div class="mb-4 flex flex-wrap items-center justify-between gap-2">
    <h1 class="text-3xl font-bold">{m.navBoard()}</h1>
    <a class="btn btn-primary btn-sm" href="/tasks/new"><Icon name="Plus" size={16} /> {m.navNewTask()}</a>
</div>

<dl id="stats" class="stats bg-base-200 mb-6 w-full">
    <div class="stat"><dt class="stat-title">{m.statusTodo()}</dt><dd class="stat-value text-2xl">{stats.todo}</dd></div>
    <div class="stat"><dt class="stat-title">{m.statusDoing()}</dt><dd class="stat-value text-2xl">{stats.doing}</dd></div>
    <div class="stat"><dt class="stat-title">{m.statusDone()}</dt><dd class="stat-value text-2xl">{stats.done}</dd></div>
    <div class="stat"><dt class="stat-title">{m.boardMine()}</dt><dd class="stat-value text-2xl">{stats.mine}</dd></div>
</dl>

<div class="mb-4 grid gap-3">
    <div class="flex flex-wrap items-center gap-3">
        <label class="sr-only" for="search">{m.boardSearch()}</label>
        <input id="search" class="input input-sm w-56" type="search" placeholder={m.boardSearch()} bind:value={search} oninput={refresh} />
        <label class="flex items-center gap-2 text-sm" for="mine">
            <input id="mine" class="checkbox checkbox-sm" type="checkbox" bind:checked={mine} onchange={refresh} />
            {m.boardOnlyMine()}
        </label>
    </div>
    <div class="flex flex-wrap gap-2" role="group" aria-label={m.fieldStatus()}>
        <button class="btn btn-sm" type="button" aria-pressed={status === undefined} class:btn-active={status === undefined} onclick={() => pickStatus(undefined)}>
            {m.boardAll()}
        </button>
        {#each Object.values(Status) as option (option)}
            <button class="btn btn-sm" type="button" aria-pressed={status === option} class:btn-active={status === option} onclick={() => pickStatus(option)}>
                {statusLabels[option]()}
            </button>
        {/each}
    </div>
    {#if Object.keys(stats.labels).length > 0}
        <div class="flex flex-wrap gap-2" role="group" aria-label={m.fieldLabels()}>
            {#each Object.entries(stats.labels) as [name, count] (name)}
                <button
                    class="btn btn-xs"
                    type="button"
                    aria-pressed={label === name}
                    class:btn-active={label === name}
                    onclick={() => pickLabel(label === name ? undefined : name)}
                >
                    {name} ({count})
                </button>
            {/each}
        </div>
    {/if}
</div>

<ul id="tasks" class="grid gap-3">
    {#each tasks as task (task.id)}
        <li class="card bg-base-200 p-4" class:opacity-70={task.status === Status.DONE}>
            <div class="flex flex-wrap items-center gap-2">
                <a class="link flex items-center gap-2 font-semibold" href="/tasks/{task.id}" use:prefetchOnHover={() => api.tasks.get(task.id)}>
                    <Icon name={task.icon} size={18} />
                    {task.title}
                </a>
                <span class="badge badge-sm">{statusLabels[task.status]()}</span>
                {#if task.priority === 'HIGH'}<span class="badge badge-sm badge-error">{m.priorityHigh()}</span>{/if}
                {#each task.labels as name (name)}<span class="badge badge-sm badge-outline">{name}</span>{/each}
            </div>
            <p class="mt-1 flex flex-wrap gap-x-4 text-sm">
                <span><Icon name="CircleUser" size={14} class="inline" /> {task.assignee?.name ?? m.assigneeNobody()}</span>
                {#if task.dueOn}<span><Icon name="CalendarDays" size={14} class="inline" /> {formatDate(task.dueOn)}</span>{/if}
                <span><Icon name="MessageSquare" size={14} class="inline" /> {task.comments}</span>
                <span><Icon name="Paperclip" size={14} class="inline" /> {task.attachments}</span>
            </p>
            <div class="mt-2 flex gap-2">
                {#if task.status === Status.TODO}
                    <button class="btn btn-xs" type="button" onclick={() => move(task, Status.DOING)}><Icon name="Play" size={12} /> {m.boardStart()}</button>
                {/if}
                {#if task.status !== Status.DONE}
                    <button class="btn btn-xs" type="button" onclick={() => move(task, Status.DONE)}><Icon name="Check" size={12} /> {m.boardFinish()}</button>
                {:else}
                    <button class="btn btn-xs" type="button" onclick={() => move(task, Status.TODO)}>{m.boardReopen()}</button>
                {/if}
            </div>
        </li>
    {:else}
        <li id="no-tasks">{m.boardEmpty()}</li>
    {/each}
</ul>

{#if next}
    <button id="load-more" class="btn btn-outline mt-4 w-full" type="button" disabled={loading} onclick={loadMore}>{m.boardLoadMore()}</button>
{/if}
