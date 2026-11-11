<script lang="ts">
    import { api, field, isValidationError, IsoDateTime, NoteInput, Status, type Note, type NoteStats } from '#api';
    import Icon from '#icon';
    import { localizeHref, m } from '#i18n';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let notes = $state<Note[]>([]);
    let stats = $state<NoteStats>({ total: 0, archived: 0, tags: {} });
    let search = $state('');
    let tag = $state<string | undefined>(undefined);
    let title = $state('');
    let body = $state('');
    let tags = $state('');
    let errors = $state<Record<string, string[]>>({});

    const draft = $derived<NoteInput>({
        title,
        body,
        tags: tags
            .split(',')
            .map((value) => value.trim())
            .filter(Boolean)
    });

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
        errors = NoteInput.validate(draft);
        if (Object.keys(errors).length > 0) return;
        try {
            await api.notes.create(draft);
            title = body = tags = '';
            await refresh();
        } catch (error) {
            if (!isValidationError(error)) throw error;
            errors = error.body.fields;
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

<h1 class="text-3xl font-bold">{m.notesTitle()}</h1>
<p id="stats" class="mb-6 opacity-70">{m.notesStats({ total: stats.total, archived: stats.archived })}</p>

<form class="mb-6 grid gap-2" onsubmit={create}>
    <input
        class="input w-full"
        placeholder={m.fieldTitle()}
        aria-label="Title"
        bind:value={title}
        oninput={() => (errors = NoteInput.validate(draft))}
        use:field={{ bounds: NoteInput.bounds.title, errors: errors.title, errorClass: 'text-error' }}
    />
    <textarea class="textarea w-full" placeholder={m.fieldBody()} aria-label="Body" bind:value={body}></textarea>
    <input class="input w-full" placeholder={m.fieldTags()} aria-label="Tags" bind:value={tags} />
    <button class="btn btn-primary" type="submit"><Icon name="Plus" size={16} /> {m.notesAdd()}</button>
</form>

<div class="mb-4 flex flex-wrap items-center gap-2">
    <input class="input input-sm w-40" placeholder={m.notesSearch()} aria-label="Search" bind:value={search} oninput={refresh} />
    <button class="btn btn-sm" class:btn-active={tag === undefined} onclick={() => filterByTag(undefined)}>{m.notesAll()}</button>
    {#each Object.entries(stats.tags) as [name, count]}
        <button class="btn btn-sm" class:btn-active={tag === name} onclick={() => filterByTag(name)}>{name} ({count})</button>
    {/each}
</div>

<ul class="grid gap-2">
    {#each notes as note (note.id)}
        <li class="card bg-base-200 p-4" class:opacity-60={note.status === Status.ARCHIVED}>
            <a class="link flex items-center gap-2 font-semibold" href={localizeHref(`/notes/${note.id}`)}><Icon name={note.icon} size={18} /> {note.title}</a>
            <time class="text-xs opacity-60" datetime={note.createdAt}>{IsoDateTime.parse(note.createdAt).toLocaleString()}</time>
            <p class="my-2">{note.body}</p>
            <div class="flex gap-2">
                <button class="btn btn-xs" onclick={() => archive(note.id)} disabled={note.status === Status.ARCHIVED}>{m.actionArchive()}</button>
                <button class="btn btn-xs btn-error" onclick={() => remove(note.id)}>{m.actionDelete()}</button>
            </div>
        </li>
    {:else}
        <li>{m.notesEmpty()}</li>
    {/each}
</ul>
