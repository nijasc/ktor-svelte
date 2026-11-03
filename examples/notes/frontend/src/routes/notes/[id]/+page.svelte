<script lang="ts">
    import { goto } from '$app/navigation';
    import { api } from '#lib/api/index.js';
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
        await api.notes.update(data.note.id, { title, body, tags: data.note.tags });
        saved = true;
    }

    async function remove() {
        await api.notes.delete(data.note.id);
        await goto('/notes');
    }
</script>

<a href="/notes">Back</a>
<h1>{title}</h1>

<form onsubmit={save}>
    <input aria-label="Title" bind:value={title} />
    <textarea aria-label="Body" rows="6" bind:value={body}></textarea>
    <button type="submit">Save</button>
    <button type="button" onclick={remove}>Delete</button>
    {#if saved}<p role="status">Saved.</p>{/if}
</form>

<style>
    form {
        display: grid;
        gap: 0.5rem;
    }
</style>
