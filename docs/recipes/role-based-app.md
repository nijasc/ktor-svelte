# A role-based app

You want users with roles, such as viewers, editors and admins, where each role may do different things. The API must refuse what a role may not do, the pages must not offer it, and both must follow one rule that you write once.

**Time:** about 30 minutes. **Level:** intermediate. **You need:** a sign-in, as in [Sign in with a session cookie](sessions.md).

What you build:

- A `Role` on each user, and a `Permission` enum that says what each role may do.
- Permissions checked on the server, and the same names in the browser through `can`.
- Pages that need a session, and an admin page that needs a permission, declared once with guards.
- An admin page that changes roles, which never removes the last admin.

`examples/showcase` is a complete app built this way. Its `Auth.kt`, `Application.kt` and `(app)/admin` pages are the reference for this recipe.

## Step 1: roles and permissions

Roles describe people. Permissions describe actions. Keep them apart: a role is stored on the user, and the permissions of a role are a function in code, so a new role or a changed rule is one line.

```kotlin no-check [Model.kt]
@Serializable
enum class Role { ADMIN, EDITOR, VIEWER }

enum class Permission { EditTasks, DeleteAnyTask, ManageUsers }

@Serializable
data class User(
    val id: Int,
    val name: String,
    val email: String,
    val role: Role,
    val active: Boolean,
)

fun permissionsOf(user: User): Set<Permission> =
    when (user.role) {
        Role.ADMIN -> Permission.entries.toSet()
        Role.EDITOR -> setOf(Permission.EditTasks)
        Role.VIEWER -> emptySet()
    }
```

`User` is what the browser sees, so it has the role but no password hash.

## Step 2: tell ktor-svelte

```kotlin no-check [Application.kt]
install(Svelte) {
    loginPage = FrontendRoutes.login
    currentUser<User> {
        sessions.get<UserSession>()?.let { users.findActive(it.userId) }
    }
    permissions<Permission, User>(refusedMessage = { "Your role does not allow that." }) { user -> permissionsOf(user) }
    guards {
        signedIn(FrontendRoutes.board, "/tasks")
        permission(Permission.ManageUsers, FrontendRoutes.admin)
    }
    errorResponse<Problem>(HttpStatusCode.Unauthorized, HttpStatusCode.Forbidden)
}
```

| Line | What it does |
| --- | --- |
| `currentUser` | Finds the user. `findActive` returns `null` for a deactivated account, so it is signed out at once |
| `permissions` | One function from a user to what they may do, for the server and the browser |
| `refusedMessage` | The text of every 403 that a permission check sends |
| `guards` | `/api/board`, `/api/tasks` and below need a session, `/api/admin` and below need `ManageUsers`. The pages follow the same rule |
| `errorResponse` | Puts the 401 and 403 into the generated error types |

## Step 3: check the actions on the server

The guards close whole paths. Actions inside a path that all signed-in users share need their own check:

```kotlin no-check [TaskRoutes.kt]
fun Route.taskRoutes(tasks: TaskStore) {
    route("/api/tasks") {
        get { call.respond(tasks.all()) } // every signed-in user, through the guard

        post {
            call.requirePermission(Permission.EditTasks)
            call.respond(HttpStatusCode.Created, tasks.create(call.receive<TaskInput>(), call.requireUser<User>()))
        }

        delete("/{id}") {
            val user = call.requireUser<User>()
            val task = tasks.find(call.parameters["id"]) ?: return@delete call.respond(HttpStatusCode.NotFound)
            if (task.creatorId != user.id && !call.can(Permission.DeleteAnyTask)) {
                return@delete call.respond(HttpStatusCode.Forbidden, Problem("Only the creator or an admin can delete this task."))
            }
            tasks.delete(task.id)
            call.respond(HttpStatusCode.NoContent)
        }
    }
}
```

| Check | Use it for |
| --- | --- |
| A guard | A whole area, such as `/api/admin` |
| `requires(Permission.X) { }` | A group of routes outside a guarded path |
| `call.requirePermission(Permission.X)` | One route |
| `call.can(Permission.X)` | A rule with more to it, such as "the creator, or anyone who may delete any task" |

## Step 4: the same rule in the pages

The browser gets the enum and `can`. Show what the user may do, and nothing else:

```svelte no-check [tasks/[id]/+page.svelte]
<script lang="ts">
    import { goto } from '$app/navigation';
    import { api, can, currentUser, Permission } from '#api';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const mayDelete = $derived(data.task.creator.id === currentUser.user?.id || can(Permission.DeleteAnyTask));

    async function remove() {
        await api.tasks.delete(data.task.id);
        await goto('/tasks');
    }
</script>

<h1>{data.task.title}</h1>

{#if can(Permission.EditTasks)}
    <a href="/tasks/{data.task.id}/edit">Edit</a>
{/if}
{#if mayDelete}
    <button type="button" onclick={remove}>Delete</button>
{/if}
```

- `can` is reactive and comes with the current user, so the buttons change when someone signs in, signs out or gets another role, with no request of its own.
- Rename a permission in Kotlin, and every `can` with the old name fails `svelteCheck`.
- Every button that `can` hides still has its check on the route. The browser decides what is shown, the server what is allowed.

## Step 5: guard the pages

All signed-in pages live in one route group, and its layout guards them:

```ts no-check [(app)/+layout.ts]
import { signedInUser } from '#api';

export const prerender = false;
export const ssr = false;

export const load = async ({ url }) => ({ user: await signedInUser(url) });
```

A visitor goes to the login page and back. A viewer who opens `/admin` gets your error page with a 403, because the guard on `/admin` asks for `ManageUsers`.

The menu only lists what the user may open, from the same guards:

```svelte no-check [+layout.svelte]
<script lang="ts">
    import { can, currentUser, matchGuard, pageGuards } from '#api';
    import { nav } from '#routes';

    const links = $derived(
        nav.filter((item) => {
            const guard = matchGuard(pageGuards, item.to());
            if (!guard) return !currentUser.user;
            return currentUser.user !== null && (!guard.permission || can(guard.permission));
        })
    );
</script>

<nav>
    {#each links as link (link.to.id)}
        <a href={link.to()}>{link.title()}</a>
    {/each}
</nav>
```

## Step 6: change roles in the admin area

The admin page lists users and changes their role. Its routes are under `/api/admin`, so the guard already protects them. One rule is left: never remove the last admin, or nobody can manage users any more. Give that error a name, so the page can tell it apart:

::: code-group

```kotlin no-check [AdminRoutes.kt]
enum class AccountError { LastAdmin }

@Serializable
data class RoleChange(val role: Role)

fun Route.adminRoutes(users: UserStore) {
    route("/api/admin") {
        get("/users") { call.respond(users.all()) }

        put("/users/{id}/role") {
            val change = call.receive<RoleChange>()
            val target = users.find(call.parameters["id"]?.toIntOrNull() ?: -1)
                ?: return@put call.respond(HttpStatusCode.NotFound, Problem("No such user."))
            if (target.role == Role.ADMIN && change.role != Role.ADMIN && users.admins() <= 1) {
                return@put call.respondError(AccountError.LastAdmin, HttpStatusCode.Conflict)
            }
            val user = users.setRole(target.id, change.role)
            if (target.id == call.requireUser<User>().id) call.currentUserChanged()
            call.respond(user)
        }
    }
}

// in install(Svelte):
// errorCodes<AccountError> { _, code -> when (code) { AccountError.LastAdmin -> "Keep at least one admin." } }
```

```svelte no-check [(app)/admin/+page.svelte]
<script lang="ts">
    import { api, ErrorCode, hasErrorCode, Role, type User } from '#api';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    let users = $derived<User[]>(data.users);
    let message = $state('');

    async function setRole(user: User, select: HTMLSelectElement) {
        message = '';
        try {
            const changed = await api.admin.putUsersRole(user.id, { role: select.value as Role }, { silent: true });
            users = users.map((item) => (item.id === changed.id ? changed : item));
        } catch (error) {
            select.value = user.role;
            if (hasErrorCode(error, ErrorCode.LastAdmin)) message = error.body.message;
            else throw error;
        }
    }
</script>

<p role="alert">{message}</p>
<table>
    {#each users as user (user.id)}
        <tr>
            <th scope="row">{user.name}</th>
            <td>
                <select value={user.role} onchange={(event) => setRole(user, event.currentTarget)}>
                    <option value={Role.ADMIN}>Admin</option>
                    <option value={Role.EDITOR}>Editor</option>
                    <option value={Role.VIEWER}>Viewer</option>
                </select>
            </td>
        </tr>
    {/each}
</table>
```

:::

The page load and the error page for a 403 are the same as in [Add an admin area](admin-area.md#step-4-the-admin-pages).

## Check it

1. Sign in as a viewer. The board shows no Edit or Delete buttons, and the menu has no Admin link.
2. Open `/admin` by hand. You see the 403 page.
3. Call the API directly: `curl -X POST /api/tasks` with the viewer's cookie answers 403 with "Your role does not allow that."
4. Sign in as the only admin and try to make yourself a viewer. The page says "Keep at least one admin."

The [Kotlin browser test kit](../guide/browser-tests.md) can run these steps on every build.

## Good to know

- Store the role, not the permissions. Then changing what an editor may do is a code change that applies to every editor at once.
- The permissions of a user are worked out once per call, and they travel with the current user to the browser, so `can` costs no request.
- A role change takes effect on the next request: `currentUser` and `permissions` run per call. Call `currentUserChanged()` when users change their own account, so their page follows at once.
- For a "deactivate" switch, have the `currentUser` block return `null` for inactive accounts, as `findActive` does. Their next request is a visitor's.
