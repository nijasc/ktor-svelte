<script lang="ts">
    import { goto } from '$app/navigation';
    import {
        Activity,
        api,
        CommentInput,
        field,
        isValidationError,
        readPublicConfig,
        Role,
        Status,
        TaskInput,
        type Attachment,
        type Comment,
        type Task
    } from '#api';
    import Icon from '#icon';
    import { m } from '#i18n';
    import TaskForm from '#lib/components/TaskForm.svelte';
    import { formatBytes, formatDate, formatDateTime } from '#lib/format.ts';
    import { toast } from '#lib/ktor-svelte/toasts.ts';
    import type { PageProps } from './$types';

    const IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];

    let { data }: PageProps = $props();

    let task = $derived<Task>(data.task);
    let comments = $derived<Comment[]>(data.comments);
    let attachments = $derived<Attachment[]>(data.attachments);
    let activity = $derived<Activity[]>(data.activity);
    let editing = $state(false);
    let draft = $state<TaskInput>(TaskInput.empty());
    let errors = $state<Record<string, string[]>>({});
    let comment = $state(CommentInput.empty());
    let commentErrors = $state<Record<string, string[]>>({});
    let progress = $state<number | undefined>(undefined);
    let busy = $state(false);
    let confirmDelete = $state<HTMLDialogElement | undefined>(undefined);

    const statusLabels: Record<Status, () => string> = { TODO: m.statusTodo, DOING: m.statusDoing, DONE: m.statusDone };
    const maxUploadBytes = readPublicConfig()?.maxUploadBytes ?? 5 * 1024 * 1024;
    const canDelete = $derived(data.user.role === Role.ADMIN || data.user.id === task.creator.id);

    function describe(entry: Activity): string {
        return Activity.match(entry, {
            created: (created) => m.activityCreated({ name: created.by.name }),
            commented: (commented) => m.activityCommented({ name: commented.by.name, excerpt: commented.excerpt }),
            attached: (attached) => m.activityAttached({ name: attached.by.name, file: attached.fileName })
        });
    }

    async function refreshActivity() {
        activity = await api.tasks.getActivity(task.id);
    }

    function startEditing() {
        draft = {
            title: task.title,
            description: task.description,
            priority: task.priority,
            labels: [...task.labels],
            icon: task.icon,
            assigneeId: task.assignee?.id ?? null,
            dueOn: task.dueOn ?? null
        };
        errors = {};
        editing = true;
    }

    async function save() {
        errors = TaskInput.validate(draft);
        if (Object.keys(errors).length > 0) return;
        busy = true;
        try {
            task = await api.tasks.update(task.id, draft);
            editing = false;
            toast(m.taskSaved(), { kind: 'success' });
        } catch (error) {
            if (!isValidationError(error)) throw error;
            errors = error.body.fields;
        } finally {
            busy = false;
        }
    }

    async function move(to: Status) {
        task = await api.tasks.status(task.id, { status: to });
    }

    async function remove() {
        await api.tasks.delete(task.id);
        toast(m.taskDeleted(), { kind: 'success' });
        await goto('/board');
    }

    async function addComment(event: SubmitEvent) {
        event.preventDefault();
        commentErrors = CommentInput.validate(comment);
        if (Object.keys(commentErrors).length > 0) return;
        try {
            comments = [...comments, await api.tasks.comments(task.id, comment)];
            comment = CommentInput.empty();
            await refreshActivity();
        } catch (error) {
            if (!isValidationError(error)) throw error;
            commentErrors = error.body.fields;
        }
    }

    async function upload(event: Event) {
        const input = event.currentTarget as HTMLInputElement;
        const files = [...(input.files ?? [])];
        input.value = '';
        for (const file of files) {
            if (file.size > maxUploadBytes) {
                toast(m.problemFileTooLarge(), { kind: 'error' });
                continue;
            }
            const form = new FormData();
            form.append('file', file);
            progress = 0;
            try {
                const stored = await api.tasks.attachments(task.id, form, {
                    onUploadProgress: ({ loaded, total }) => (progress = total ? loaded / total : 0)
                });
                attachments = [...attachments, ...stored];
            } catch {
                continue;
            } finally {
                progress = undefined;
            }
        }
        await refreshActivity();
    }

    async function detach(attachment: Attachment) {
        await api.attachments.delete(attachment.id);
        attachments = attachments.filter((item) => item.id !== attachment.id);
        await refreshActivity();
    }
</script>

<svelte:head>
    <title>{task.title} - {m.appTitle()}</title>
</svelte:head>

<p class="mb-2 text-sm"><a class="link" href="/board">{m.navBoard()}</a></p>

{#if editing}
    <h1 class="mb-6 text-3xl font-bold">{m.taskEdit()}</h1>
    <TaskForm bind:draft {errors} members={data.members} submitLabel={m.taskSave()} {busy} onsubmit={save} />
    <button class="btn btn-ghost mt-2" type="button" onclick={() => (editing = false)}>{m.actionCancel()}</button>
{:else}
    <div class="flex flex-wrap items-start justify-between gap-2">
        <h1 id="task-title" class="flex items-center gap-2 text-3xl font-bold"><Icon name={task.icon} size={28} /> {task.title}</h1>
        <div class="flex gap-2">
            <button class="btn btn-sm" type="button" onclick={startEditing}><Icon name="Pencil" size={14} /> {m.taskEdit()}</button>
            {#if canDelete}
                <button class="btn btn-sm btn-error" type="button" onclick={() => confirmDelete?.showModal()}>
                    <Icon name="Trash" size={14} />
                    {m.actionDelete()}
                </button>
            {/if}
        </div>
    </div>

    <dl class="my-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-4">
        <div>
            <dt class="font-semibold"><label for="task-status">{m.fieldStatus()}</label></dt>
            <dd>
                <select id="task-status" class="select select-sm" value={task.status} onchange={(event) => move(event.currentTarget.value as Status)}>
                    {#each Object.values(Status) as option (option)}<option value={option}>{statusLabels[option]()}</option>{/each}
                </select>
            </dd>
        </div>
        <div><dt class="font-semibold">{m.fieldAssignee()}</dt><dd>{task.assignee?.name ?? m.assigneeNobody()}</dd></div>
        <div><dt class="font-semibold">{m.fieldDueOn()}</dt><dd>{task.dueOn ? formatDate(task.dueOn) : '-'}</dd></div>
        <div><dt class="font-semibold">{m.taskCreatedBy()}</dt><dd>{task.creator.name}, {formatDateTime(task.createdAt)}</dd></div>
    </dl>

    {#if task.labels.length > 0}
        <p class="mb-4 flex flex-wrap gap-2">{#each task.labels as name (name)}<span class="badge badge-outline">{name}</span>{/each}</p>
    {/if}
    <p id="task-description" class="whitespace-pre-wrap">{task.description || m.taskNoDescription()}</p>
{/if}

<section class="mt-10" aria-labelledby="attachments-title">
    <h2 id="attachments-title" class="mb-3 text-xl font-semibold">{m.attachmentsTitle()}</h2>
    <ul id="attachments" class="grid gap-2">
        {#each attachments as attachment (attachment.id)}
            <li class="bg-base-200 rounded-box flex flex-wrap items-center gap-3 p-3">
                {#if IMAGE_TYPES.includes(attachment.contentType)}
                    <img class="h-12 w-12 rounded object-cover" src="/api/attachments/{attachment.id}" alt="" loading="lazy" />
                {:else}
                    <Icon name="FileText" size={24} />
                {/if}
                <a class="link flex-1" href="/api/attachments/{attachment.id}" download={attachment.name}>{attachment.name}</a>
                <span class="text-sm">{formatBytes(attachment.size)}, {attachment.uploader.name}</span>
                {#if data.user.role === Role.ADMIN || data.user.id === attachment.uploader.id}
                    <button class="btn btn-xs" type="button" aria-label={m.attachmentsRemove({ file: attachment.name })} onclick={() => detach(attachment)}>
                        <Icon name="Trash" size={12} />
                    </button>
                {/if}
            </li>
        {:else}
            <li>{m.attachmentsEmpty()}</li>
        {/each}
    </ul>
    <label class="mt-3 grid gap-1" for="upload">
        <span>{m.attachmentsAdd()}</span>
        <input id="upload" class="file-input w-full" type="file" multiple accept="image/png,image/jpeg,image/gif,image/webp,application/pdf,text/plain,text/csv,application/zip" onchange={upload} />
    </label>
    {#if progress !== undefined}
        <progress class="progress mt-2 w-full" value={progress} max="1" aria-label={m.attachmentsUploading()}></progress>
    {/if}
</section>

<section class="mt-10" aria-labelledby="comments-title">
    <h2 id="comments-title" class="mb-3 text-xl font-semibold">{m.commentsTitle()}</h2>
    <ul id="comments" class="grid gap-2">
        {#each comments as entry (entry.id)}
            <li class="bg-base-200 rounded-box p-3">
                <p class="text-sm font-semibold">{entry.author.name} <time class="font-normal" datetime={entry.createdAt}>{formatDateTime(entry.createdAt)}</time></p>
                <p class="whitespace-pre-wrap">{entry.body}</p>
            </li>
        {:else}
            <li>{m.commentsEmpty()}</li>
        {/each}
    </ul>
    <form class="mt-3 grid gap-2" novalidate onsubmit={addComment}>
        <label class="grid gap-1" for="comment">
            <span>{m.commentsAdd()}</span>
            <textarea
                id="comment"
                class="textarea w-full"
                rows="3"
                bind:value={comment.body}
                use:field={{ bounds: CommentInput.bounds.body, errors: commentErrors.body, errorClass: 'text-error text-sm' }}
            ></textarea>
        </label>
        <button class="btn btn-primary justify-self-start" type="submit"><Icon name="MessageSquare" size={16} /> {m.commentsSend()}</button>
    </form>
</section>

<section class="mt-10" aria-labelledby="activity-title">
    <h2 id="activity-title" class="mb-3 text-xl font-semibold">{m.activityTitle()}</h2>
    <ol id="activity" class="grid gap-1 text-sm">
        {#each activity as entry, index (index)}
            <li><time datetime={entry.at}>{formatDateTime(entry.at)}</time>: {describe(entry)}</li>
        {/each}
    </ol>
</section>

<dialog class="modal" bind:this={confirmDelete} aria-labelledby="delete-title">
    <div class="modal-box">
        <h2 id="delete-title" class="text-lg font-semibold">{m.taskDeleteQuestion()}</h2>
        <p class="py-2">{m.taskDeleteWarning()}</p>
        <div class="modal-action">
            <button class="btn" type="button" onclick={() => confirmDelete?.close()}>{m.actionCancel()}</button>
            <button id="confirm-delete" class="btn btn-error" type="button" onclick={remove}>{m.actionDelete()}</button>
        </div>
    </div>
</dialog>
