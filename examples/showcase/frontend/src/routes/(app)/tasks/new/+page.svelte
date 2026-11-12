<script lang="ts">
    import { goto } from '$app/navigation';
    import { api, isValidationError, TaskInput } from '#api';
    import { m } from '#i18n';
    import TaskForm from '#lib/components/TaskForm.svelte';
    import { toast } from '#lib/ktor-svelte/toasts.ts';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let draft = $state<TaskInput>({ ...TaskInput.empty(), priority: 'NORMAL', icon: 'SquareCheck' });
    let errors = $state<Record<string, string[]>>({});
    let busy = $state(false);

    async function create() {
        errors = TaskInput.validate(draft);
        if (Object.keys(errors).length > 0) return;
        busy = true;
        try {
            const task = await api.tasks.create(draft);
            toast(m.taskCreated(), { kind: 'success' });
            await goto(`/tasks/${task.id}`);
        } catch (error) {
            if (!isValidationError(error)) throw error;
            errors = error.body.fields;
        } finally {
            busy = false;
        }
    }
</script>

<svelte:head>
    <title>{m.navNewTask()} - {m.appTitle()}</title>
</svelte:head>

<h1 class="mb-6 text-3xl font-bold">{m.navNewTask()}</h1>
<TaskForm bind:draft {errors} members={data.members} submitLabel={m.taskCreate()} {busy} onsubmit={create} />
