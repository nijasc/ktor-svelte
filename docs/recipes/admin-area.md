# Add an admin area

You want pages under `/admin` that only admins can open, backed by API routes under `/api/admin` that only admins can call, and an "Admin" link that only admins see.

**Time:** about 20 minutes. **Level:** intermediate. **You need:** a sign-in, as in [Sign in with a session cookie](sessions.md).

The rule to remember: protect the API on the server, and only hide the pages in the frontend. A page guard alone protects nothing, because anyone can call the API directly. With ktor-svelte's [page guards](../features/auth.md#page-guards), one declaration does both.

## Step 1: say who is an admin

Declare a permission, and the function from a user to their permissions:

```kotlin no-check [Application.kt]
enum class Permission { ManageUsers }

install(Svelte) {
    loginPage = "/login"
    currentUser<User> { sessions.get<UserSession>()?.let { users.find(it.userId) } }
    permissions<Permission, User> { user -> if (user.admin) setOf(Permission.ManageUsers) else emptySet() }
}
```

## Step 2: guard the admin pages and their API

```kotlin no-check [Application.kt]
install(Svelte) {
    guards {
        permission(Permission.ManageUsers, "/admin")
    }
    errorResponse<Problem>(HttpStatusCode.Unauthorized, HttpStatusCode.Forbidden)
}
```

From now on every route under `/api/admin` answers a visitor with 401 and a signed-in user without `ManageUsers` with 403, before your route runs. `errorResponse` puts both in the generated error types.

## Step 3: the admin routes

They need no check of their own, because the guard covers them:

```kotlin no-check [AdminRoutes.kt]
fun Route.adminRoutes() {
    route("/api/admin") {
        get("/users") { call.respond(users.all()) }

        put("/users/{id}/active") {
            val change = call.receive<ActiveChange>()
            val user = users.setActive(call.parameters["id"].orEmpty(), change.active)
                ?: return@put call.respond(HttpStatusCode.NotFound, Problem("No such user."))
            call.respond(user)
        }
    }
}
```

A route outside `/api/admin` that only admins may call, such as deleting any comment, checks for itself with `call.requirePermission(Permission.ManageUsers)` or `requires(Permission.ManageUsers) { }`.

## Step 4: the admin pages

Put them in the route group that the signed-in pages share, so its layout guards them:

::: code-group

```ts no-check [(app)/+layout.ts]
import { signedInUser } from '#api';

export const ssr = false;

export const load = async ({ url }) => ({ user: await signedInUser(url) });
```

```ts no-check [(app)/admin/+page.ts]
import { error } from '@sveltejs/kit';
import { apiWith, isApiError } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    try {
        return { users: await apiWith(event).admin.getUsers({ silent: true }) };
    } catch (cause) {
        if (isApiError(cause, 'admin.getUsers') && cause.status === 403) error(403, cause.body.message);
        throw cause;
    }
};
```

```svelte no-check [(app)/admin/+page.svelte]
<script lang="ts">
    import { api, type User } from '#api';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    let users = $derived<User[]>(data.users);

    async function setActive(user: User, toggle: HTMLInputElement) {
        try {
            const changed = await api.admin.putUsersActive(user.id, { active: toggle.checked });
            users = users.map((item) => (item.id === changed.id ? changed : item));
        } catch {
            toggle.checked = user.active;
        }
    }
</script>

<h1>Users</h1>
<table>
    {#each users as user (user.id)}
        <tr>
            <th scope="row">{user.name}</th>
            <td>
                <input type="checkbox" checked={user.active} onchange={(event) => setActive(user, event.currentTarget)} />
            </td>
        </tr>
    {/each}
</table>
```

:::

- A visitor who opens `/admin` is sent to the login page and comes back after signing in.
- A member who opens `/admin` gets your error page with a 403. `signedInUser` already checks the guard's permission, and the `+page.ts` turns a 403 from the API into the same page.
- The load uses `apiWith(event)` so SvelteKit's `fetch` is used, and `silent: true` so the error page is shown instead of a toast.

## Step 5: show the link to admins only

```svelte no-check [+layout.svelte]
<script lang="ts">
    import { can, Permission } from '#api';
</script>

{#if can(Permission.ManageUsers)}
    <a href="/admin">Admin</a>
{/if}
```

`can` follows the current user, so the link appears when an admin signs in and goes when they sign out. To filter a whole menu by the guards, see [Show only the links a user may open](../features/auth.md#show-only-the-links-a-user-may-open).

## Without the permissions helper

If you would rather not declare permissions, the same protection can be written as a route-scoped plugin. The API is still protected on the server, and the pages are still only hidden:

```kotlin
fun Route.admin(
    users: Users,
    build: Route.() -> Unit,
) {
    authenticate("session") {
        route("/api/admin") {
            install(
                createRouteScopedPlugin("AdminOnly") {
                    on(AuthenticationChecked) { call ->
                        val user = call.principal<UserSession>()?.let { users.find(it.userId) }
                        if (user?.admin != true) call.respond(HttpStatusCode.Forbidden, Problem("Admins only."))
                    }
                },
            )
            build()
        }
    }
}

routing {
    admin(users) {
        get("/users") { call.respond(users.all()) }
    }
}
```

The check has to run in `on(AuthenticationChecked)`. A plain `onCall` runs before Ktor has read the session, so `call.principal` is still empty there and the check would refuse everyone, admins included.

In SvelteKit, put the admin pages under `src/routes/admin/` and check the user once in their layout:

```ts no-check
import { redirect } from '@sveltejs/kit';
import { apiWith } from '#api';
import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad = async (event) => {
    const me = await apiWith(event).me.list().catch(() => undefined);
    if (!me?.admin) redirect(307, '/login');
    return { me };
};
```

Pages inside it call `api.admin.getUsers()` and the other admin endpoints. Every one of them answers 403 for anyone who is not an admin, whatever the frontend shows.

## Good to know

- Keep at least one admin. The showcase refuses to demote or deactivate the last active admin, with a typed error code, so nobody locks everyone out.
- An admin page that edits users should call `call.currentUserChanged()` when an admin changes their own account, so their header follows.
- For several roles with different rights, see [A role-based app](role-based-app.md).
- To open the API docs or the status endpoint to admins, use `allow { call -> call.can(Permission.ManageUsers) }` in [`internalAccess`](../features/endpoints.md#who-may-see-internal-endpoints).
