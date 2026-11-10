<script lang="ts">
    import { goto } from '$app/navigation';
    import { api, NoteInput } from '#api';
    import Icon from '#icon';
    import { localizeHref, m } from '#i18n';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let title = $state('');
    let body = $state('');
    let saved = $state(false);

    $effect(() => {
        title = data.note.title;
        body = data.note.body;
    });

    async function save(event: SubmitEvent) {
        event.preventDefault();
        await api.notes.update(data.note.id, { title, body, tags: data.note.tags, icon: data.note.icon });
        saved = true;
    }

    async function remove() {
        await api.notes.delete(data.note.id);
        await goto(localizeHref('/notes'));
    }
</script>

<a class="btn btn-ghost btn-sm" href={localizeHref('/notes')}><Icon name="ArrowLeft" size={16} /> {m.actionBack()}</a>
<h1 class="my-4 flex items-center gap-2 text-3xl font-bold"><Icon name={data.note.icon} /> {title}</h1>

<form class="grid gap-2" onsubmit={save}>
    <input class="input w-full" aria-label="Title" bind:value={title} {...NoteInput.bounds.title} />
    <textarea class="textarea w-full" aria-label="Body" rows="6" bind:value={body}></textarea>
    <div class="flex gap-2">
        <button class="btn btn-primary" type="submit">{m.actionSave()}</button>
        <button class="btn btn-error" type="button" onclick={remove}>{m.actionDelete()}</button>
    </div>
    {#if saved}<p class="text-success" role="status">{m.saved()}</p>{/if}
</form>
