<script lang="ts">
    import { api, TaskInput } from '#api';
    import { m } from '#i18n';
    import { formState } from '#lib/api/form-state.svelte.ts';
    import TaskForm from '#lib/components/TaskForm.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const form = formState<TaskInput>(
        { ...TaskInput.empty(), priority: 'NORMAL', icon: 'SquareCheck' },
        { validate: TaskInput.validate }
    );

    async function create() {
        await form.submit((draft) => api.tasks.create(draft));
    }
</script>

<svelte:head>
    <title>{m.navNewTask()} - {m.appTitle()}</title>
</svelte:head>

<h1 class="mb-6 text-3xl font-bold">{m.navNewTask()}</h1>
<TaskForm
    bind:draft={form.draft}
    errors={form.errors}
    members={data.members}
    submitLabel={m.taskCreate()}
    busy={form.submitting}
    onsubmit={create}
/>
<button class="btn btn-ghost mt-3" type="button" disabled={!form.dirty} onclick={() => form.reset()}>{m.taskDiscard()}</button>
