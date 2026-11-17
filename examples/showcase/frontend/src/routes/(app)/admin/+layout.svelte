<script lang="ts">
    import Sidebar from '#components/Sidebar.svelte';
    import { m } from '#i18n';
    import { routes } from '#routes';

    let { children } = $props();
</script>

<Sidebar
    items={[
        { href: routes.admin(), label: m.navAdmin(), icon: 'Users' },
        { href: routes.adminTasks(), label: m.adminAllTasks(), icon: 'ListChecks' }
    ]}
    label={m.sidebarLabel()}
    collapseText={m.sidebarCollapse()}
    expandText={m.sidebarExpand()}
    menuText={m.sidebarMenu()}
    remember="showcase-admin-sidebar"
>
    {@render children()}
</Sidebar>
