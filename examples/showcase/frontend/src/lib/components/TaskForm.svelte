<script lang="ts">
    import { field, Priority, TaskInput, type LucideIcon, type UserRef } from '#api';
    import Icon from '#icon';
    import { m } from '#i18n';

    interface Props {
        draft: TaskInput;
        errors: Record<string, string[]>;
        members: UserRef[];
        submitLabel: string;
        busy?: boolean;
        onsubmit: () => void;
    }

    let { draft = $bindable(), errors, members, submitLabel, busy = false, onsubmit }: Props = $props();

    const icons: LucideIcon[] = ['SquareCheck', 'Bug', 'Lightbulb', 'Rocket', 'Flame', 'Package', 'Star'];
    const priorityLabels: Record<Priority, () => string> = {
        LOW: m.priorityLow,
        NORMAL: m.priorityNormal,
        HIGH: m.priorityHigh
    };

    let labels = $state((draft.labels ?? []).join(', '));

    function readLabels() {
        draft.labels = labels
            .split(',')
            .map((label) => label.trim().toLowerCase())
            .filter(Boolean);
    }

    function submit(event: SubmitEvent) {
        event.preventDefault();
        readLabels();
        onsubmit();
    }
</script>

<form class="grid gap-3" novalidate onsubmit={submit}>
    <label class="grid gap-1" for="task-title">
        <span>{m.fieldTitle()}</span>
        <input
            id="task-title"
            class="input w-full"
            bind:value={draft.title}
            use:field={{ bounds: TaskInput.bounds.title, errors: errors.title, errorClass: 'text-error text-sm' }}
        />
    </label>
    <label class="grid gap-1" for="task-description">
        <span>{m.fieldDescription()}</span>
        <textarea
            id="task-description"
            class="textarea w-full"
            rows="4"
            bind:value={draft.description}
            use:field={{ bounds: TaskInput.bounds.description, errors: errors.description, errorClass: 'text-error text-sm' }}
        ></textarea>
    </label>
    <div class="grid gap-3 sm:grid-cols-3">
        <label class="grid gap-1" for="task-priority">
            <span>{m.fieldPriority()}</span>
            <select id="task-priority" class="select w-full" bind:value={draft.priority}>
                {#each Object.values(Priority) as priority (priority)}
                    <option value={priority}>{priorityLabels[priority]()}</option>
                {/each}
            </select>
        </label>
        <label class="grid gap-1" for="task-assignee">
            <span>{m.fieldAssignee()}</span>
            <select
                id="task-assignee"
                class="select w-full"
                bind:value={draft.assigneeId}
                use:field={{ errors: errors.assigneeId, errorClass: 'text-error text-sm' }}
            >
                <option value={null}>{m.assigneeNobody()}</option>
                {#each members as member (member.id)}
                    <option value={member.id}>{member.name}</option>
                {/each}
            </select>
        </label>
        <label class="grid gap-1" for="task-due">
            <span>{m.fieldDueOn()}</span>
            <input
                id="task-due"
                class="input w-full"
                type="date"
                value={draft.dueOn ?? ''}
                onchange={(event) => (draft.dueOn = event.currentTarget.value || null)}
                use:field={{ errors: errors.dueOn, errorClass: 'text-error text-sm' }}
            />
        </label>
    </div>
    <label class="grid gap-1" for="task-labels">
        <span>{m.fieldLabels()}</span>
        <input
            id="task-labels"
            class="input w-full"
            placeholder="docs, ops"
            bind:value={labels}
            onchange={readLabels}
            use:field={{ errors: errors.labels, errorClass: 'text-error text-sm' }}
        />
    </label>
    <fieldset>
        <legend class="mb-1">{m.fieldIcon()}</legend>
        <div class="flex flex-wrap gap-2">
            {#each icons as icon (icon)}
                <label class="btn btn-sm" class:btn-primary={draft.icon === icon}>
                    <input class="sr-only" type="radio" name="task-icon" value={icon} bind:group={draft.icon} />
                    <Icon name={icon} size={16} />
                    <span class="sr-only">{icon}</span>
                </label>
            {/each}
        </div>
    </fieldset>
    <button class="btn btn-primary" type="submit" disabled={busy}><Icon name="Check" size={16} /> {submitLabel}</button>
</form>
