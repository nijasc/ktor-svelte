<script lang="ts">
    import { ApiError, api, type Note, type NoteStats, type Problem } from '#lib/api/index.js';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let notes = $state<Note[]>([]);
    let stats = $state<NoteStats>({ total: 0, archived: 0, tags: {} });
    let search = $state('');
    let tag = $state<string | undefined>(undefined);
    let title = $state('');
    let body = $state('');
    let tags = $state('');
    let problem = $state('');

    $effect(() => {
        notes = data.notes;
        stats = data.stats;
    });

    async function refresh() {
        [notes, stats] = await Promise.all([
            api.notes.list({ search: search || undefined, tag }),
            api.stats.list()
        ]);
    }

    function filterByTag(selected: string | undefined) {
        tag = selected;
        return refresh();
    }

    async function create(event: SubmitEvent) {
        event.preventDefault();
        problem = '';
        try {
            await api.notes.create({
                title,
                body,
                tags: tags
                    .split(',')
                    .map((value) => value.trim())
                    .filter(Boolean)
            });
            title = body = tags = '';
            await refresh();
        } catch (error) {
            if (!(error instanceof ApiError)) throw error;
            problem = (error.body as Problem).message;
        }
    }

    async function archive(id: number) {
        await api.notes.archive(id);
        await refresh();
    }

    async function remove(id: number) {
        await api.notes.delete(id);
        await refresh();
    }
</script>

<h1>Notes</h1>
<p id="stats">{stats.total} notes, {stats.archived} archived</p>

<form onsubmit={create}>
    <input placeholder="Title" aria-label="Title" bind:value={title} />
    <textarea placeholder="Body" aria-label="Body" bind:value={body}></textarea>
    <input placeholder="Tags, separated by commas" aria-label="Tags" bind:value={tags} />
    <button type="submit">Add note</button>
    {#if problem}<p class="problem" role="alert">{problem}</p>{/if}
</form>

<div class="filters">
    <input placeholder="Search" aria-label="Search" bind:value={search} oninput={refresh} />
    <button class:active={tag === undefined} onclick={() => filterByTag(undefined)}>All</button>
    {#each Object.entries(stats.tags) as [name, count]}
        <button class:active={tag === name} onclick={() => filterByTag(name)}>{name} ({count})</button>
    {/each}
</div>

<ul>
    {#each notes as note (note.id)}
        <li class:archived={note.status === 'ARCHIVED'}>
            <a href="/notes/{note.id}">{note.title}</a>
            <p>{note.body}</p>
            <button onclick={() => archive(note.id)} disabled={note.status === 'ARCHIVED'}>Archive</button>
            <button onclick={() => remove(note.id)}>Delete</button>
        </li>
    {:else}
        <li>No notes match.</li>
    {/each}
</ul>

<style>
    form {
        display: grid;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .filters {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    .active {
        background: #cbe7f8;
    }

    .problem {
        color: #ab091e;
        margin: 0;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        background: #fff;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 0.5rem;
    }

    .archived {
        opacity: 0.6;
    }
</style>
