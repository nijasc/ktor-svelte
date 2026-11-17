<script lang="ts">
    import { api, type Status } from '#api';
    import Breadcrumbs from '#components/Breadcrumbs.svelte';
    import DataTable from '#components/DataTable.svelte';
    import { m } from '#i18n';
    import { formatDateTime } from '#lib/format.ts';

    const statusLabels: Record<Status, () => string> = { TODO: m.statusTodo, DOING: m.statusDoing, DONE: m.statusDone };
</script>

<svelte:head>
    <title>{m.adminAllTasks()} - {m.appTitle()}</title>
</svelte:head>

<Breadcrumbs class="mb-2" current={m.adminAllTasks()} label={m.navBreadcrumb()} />
<h1 class="mb-6 text-3xl font-bold">{m.adminAllTasks()}</h1>
<div id="every-task" class="max-w-3xl">
    <DataTable
        load={api.tasks.list}
        query={{ limit: 50, fields: ['id', 'title', 'status', 'createdAt', 'creator'] }}
        key={(task) => task.id}
        virtual={{ rowHeight: 40, height: '28rem' }}
        columns={[
            { key: 'title', label: m.fieldTitle() },
            { key: 'status', label: m.fieldStatus(), text: (task) => statusLabels[task.status]() },
            { key: 'createdAt', label: m.taskCreatedBy(), text: (task) => `${task.creator.name}, ${formatDateTime(task.createdAt)}` }
        ]}
        empty={m.tableEmpty()}
        loading={m.tableLoading()}
        retry={m.tableRetry()}
    />
</div>
