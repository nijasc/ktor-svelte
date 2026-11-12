<script lang="ts">
    import { api, Role, type User } from '#api';
    import { m } from '#i18n';
    import { formatDateTime } from '#lib/format.ts';
    import { toast } from '#lib/ktor-svelte/toasts.ts';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let users = $derived<User[]>(data.users);

    function replace(user: User) {
        users = users.map((item) => (item.id === user.id ? user : item));
        toast(m.adminSaved({ name: user.name }), { kind: 'success' });
    }

    async function setRole(user: User, select: HTMLSelectElement) {
        try {
            replace(await api.admin.putUsersRole(user.id, { role: select.value as Role }));
        } catch {
            select.value = user.role;
        }
    }

    async function setActive(user: User, toggle: HTMLInputElement) {
        try {
            replace(await api.admin.putUsersActive(user.id, { active: toggle.checked }));
        } catch {
            toggle.checked = user.active;
        }
    }
</script>

<svelte:head>
    <title>{m.navAdmin()} - {m.appTitle()}</title>
</svelte:head>

<h1 class="mb-6 text-3xl font-bold">{m.adminTitle()}</h1>

<div class="overflow-x-auto">
    <table id="users" class="table">
        <thead>
            <tr>
                <th scope="col">{m.fieldName()}</th>
                <th scope="col">{m.fieldEmail()}</th>
                <th scope="col">{m.adminRole()}</th>
                <th scope="col">{m.adminActive()}</th>
                <th scope="col">{m.adminJoined()}</th>
            </tr>
        </thead>
        <tbody>
            {#each users as user (user.id)}
                <tr>
                    <th scope="row">{user.name}</th>
                    <td>{user.email}</td>
                    <td>
                        <select
                            class="select select-sm"
                            aria-label={m.adminRoleOf({ name: user.name })}
                            value={user.role}
                            onchange={(event) => setRole(user, event.currentTarget)}
                        >
                            <option value={Role.ADMIN}>{m.roleAdmin()}</option>
                            <option value={Role.MEMBER}>{m.roleMember()}</option>
                        </select>
                    </td>
                    <td>
                        <input
                            class="toggle toggle-sm"
                            type="checkbox"
                            aria-label={m.adminActiveOf({ name: user.name })}
                            checked={user.active}
                            onchange={(event) => setActive(user, event.currentTarget)}
                        />
                    </td>
                    <td>{formatDateTime(user.createdAt)}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
