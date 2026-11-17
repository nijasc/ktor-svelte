# Auth

Use Ktor authentication with the generated client.

To put the frontend behind Ktor's authentication, take over its routing. List what stays public. Those paths must include your login page and `/_app/*`, or the login page cannot load. Anyone can still download the JS bundles under `/_app`, so keep secrets on the server.

```kotlin
install(Svelte) {
    routing = SvelteRouting.Manual
}

routing {
    svelte(public = listOf("/login", "/_app/*"))
    authenticate("session") {
        svelte()
    }
}
```

Pages served by a plain `svelte()` get `private` caching, so shared proxies do not keep them. Paths in the `public` list keep normal caching.

## The current user

Every app with a login needs to know who is signed in, on both sides. Say once how the server finds that person:

```kotlin no-check
install(Svelte) {
    currentUser<User> { sessions.get<UserSession>()?.let { users.find(it.userId) } }
}
```

The block gets the call and returns the user, or `null` when nobody is signed in. `User` is any `@Serializable` class. Whatever it holds is sent to the browser, so leave the password hash out of it.

From that one line the frontend gets `currentUser`, typed as your class:

```svelte no-check
<script lang="ts">
    import { currentUser } from '#api';
</script>

{#if currentUser.user}
    <span>{currentUser.user.name}</span>
{:else if currentUser.ready}
    <a href="/login">Sign in</a>
{/if}
```

| | |
| --- | --- |
| `currentUser.user` | The signed-in user, or `null`. Reactive |
| `currentUser.ready` | `false` until the first answer is there, so you can tell "nobody" from "not known yet" |
| `currentUser.signedIn` | `true` when there is a user |
| `currentUser.load()` | Asks the server once and resolves to the user. Every later call resolves to what is known, without a request |
| `currentUser.reload()` | Asks again |
| `currentUser.set(user)`, `currentUser.clear()` | Set or forget the user by hand |

`load()` is what a layout uses to protect its pages:

```ts no-check
import { redirect } from '@sveltejs/kit';
import { currentUser } from '#api';

export const load = async () => {
    const user = await currentUser.load();
    if (!user) redirect(307, '/login');
    return { user };
};
```

The store has to learn when the user changes. Tell it from the routes that change it, with one line each:

```kotlin no-check
post("/api/session") {
    val user = users.check(call.receive<Login>()) ?: return@post call.respond(HttpStatusCode.Unauthorized)
    call.sessions.set(UserSession(user.id))
    call.currentUserChanged()
    call.respond(user)
}

delete("/api/session") {
    call.sessions.clear<UserSession>()
    call.currentUserChanged()
    call.respond(HttpStatusCode.NoContent)
}
```

`currentUserChanged()` adds a header to the response. The generated client sees it and loads the user again, before your own code continues after the call, so a `goto` right after signing in lands on a page that already knows the user. Call it after a profile change too, and the name in the header of the page follows. A 401 from any API call clears the store.

How it works: the plugin serves `GET /api/current-user`, under your first API prefix, which answers `{"user": ...}` and is never cached. Pass `path = "/api/whoami"` to `currentUser` to move it. The endpoint is open to everyone and answers `{"user": null}` to a visitor. It runs outside any `authenticate` block, so the block that finds the user reads the session or checks the token itself, and `call.principal()` is empty there.

### In routes

The same declaration gives every route the user, typed:

```kotlin no-check
get("/api/tasks") {
    val user: User = call.requireUser()
    call.respond(tasks.visibleTo(user))
}

get("/api/greeting") {
    val user = call.user<User>()
    call.respond(Greeting(if (user == null) "Hello" else "Hello, ${user.name}"))
}
```

| | |
| --- | --- |
| `call.user<User>()` | The signed-in user, or `null` |
| `call.requireUser<User>()` | The signed-in user. For a visitor the route ends there with a 401 and `{"message": "Sign in first."}` |

Both work in any route, inside or outside `authenticate`, and need no user store passed along. The user is looked up once per call, however often a route and its helpers ask. `currentUserChanged()` forgets that answer, so a route that signs someone in can ask again and gets the new user.

The 401 message is yours to set, for example to translate it:

```kotlin no-check
currentUser<User>(signInMessage = { call -> call.messages.signInFirst() }) {
    sessions.get<UserSession>()?.let { users.find(it.userId) }
}
```

To have the 401 in the generated types of your routes, declare it once with `errorResponse<YourError>(HttpStatusCode.Unauthorized)`.

### When the session ends

A session that ends while someone fills in a long form costs them the form. The server knows when that will be, so say it, next to how the user is found:

```kotlin no-check
currentUser<User>(
    sessionEnds = { sessions.get<UserSession>()?.ends },
    extendSession = { sessions.get<UserSession>()?.let { sessions.set(it.copy(ends = Instant.now().plusSeconds(1800))) } },
) {
    sessions.get<UserSession>()?.let { users.find(it.userId) }
}
```

`sessionEnds` returns the `Instant` the session ends at, or `null` when it has no end. ktor-svelte does not own your session, so the end is whatever your session says: a field in the session cookie as here, a row in a table, or the expiry of a token. `extendSession` is optional and does whatever makes your session last longer.

The store then knows three more things:

| | |
| --- | --- |
| `currentUser.sessionEnds` | The `Date` the session ends at, or `null` |
| `currentUser.sessionEnding` | `true` in the last two minutes. Reactive, so a warning is an `{#if}` |
| `currentUser.extend()` | Runs `extendSession` on the server and takes the new end |

```svelte no-check
{#if currentUser.sessionEnding}
    <div class="alert alert-warning" role="status">
        You will be signed out soon.
        <button type="button" onclick={() => currentUser.extend()}>Stay signed in</button>
    </div>
{/if}
```

Set `apiConfig.sessionWarning` to another number of milliseconds to warn earlier or later.

The end stays right without extra requests. The answer of the current user endpoint carries it, and so does every API response, in a header, so a session that grows with each request is known to last longer after each one. The server sends the time that is left and not a clock time, so a wrong clock on the visitor's computer does not matter.

When the time is up, the store asks the server once. If the session is really over, `currentUser.user` becomes `null` and the page shows it at that moment, not at the next click.

## Permissions

A "Delete" button that the API then refuses is a bug, and so is a hidden button for something the API would allow. Both come from writing the rule twice. Write it once, as an enum and one function from the user to what they may do:

```kotlin no-check
enum class Permission { NotesRead, NotesDelete, UsersManage }

install(Svelte) {
    currentUser<User> { sessions.get<UserSession>()?.let { users.find(it.userId) } }
    permissions<Permission, User> { user ->
        if (user.role == Role.Admin) Permission.entries.toSet() else setOf(Permission.NotesRead)
    }
}
```

On the server, check it where it matters:

```kotlin no-check
requires(Permission.UsersManage) {
    route("/api/admin") {
        get("/users") { call.respond(users.all()) }
    }
}

delete("/api/notes/{id}") {
    call.requirePermission(Permission.NotesDelete)
    notes.delete(call.parameters["id"])
    call.respond(HttpStatusCode.NoContent)
}
```

| | |
| --- | --- |
| `requires(...) { }` | Every route inside needs the permissions |
| `call.requirePermission(...)` | The same check inside one route |
| `call.can(permission)` | `true` or `false`, for a rule with more to it, such as "admins, or the author" |

A visitor gets a 401 and a signed-in user without the permission a 403 with `{"message": "You are not allowed to do that."}`. Pass `refusedMessage = { call -> ... }` to `permissions` for your own words. The permissions of a user are worked out once per call.

The frontend gets the same enum and a `can` function:

```svelte no-check
<script lang="ts">
    import { can, Permission } from '#api';
</script>

{#if can(Permission.NotesDelete)}
    <button onclick={remove}>Delete</button>
{/if}
```

`can('NotesDelete')` works too, and a name that is not in the enum does not compile. The answer is reactive and comes with the current user, so it changes when someone signs in or out, with no request of its own. Rename a permission in Kotlin and every `can` that used the old name fails `svelteCheck`.

`can` in the browser decides what is shown. What is allowed is decided by the check on the route, so every hidden button needs one.

## Page guards

Which pages need a signed-in user, and which a permission, is one more rule that both sides have to agree on. Declare it once, by page:

```kotlin no-check
install(Svelte) {
    guards {
        signedIn(FrontendRoutes.board, FrontendRoutes.settings, "/tasks")
        permission(Permission.UsersManage, FrontendRoutes.admin)
    }
}
```

A guard covers the page and everything below it: `/tasks` also covers `/tasks/4`. When two guards cover a page, the deeper one decides.

**The API below the same name is closed by the server.** With the guards above, every route under `/api/tasks` answers a visitor with a 401, and every route under `/api/admin` answers a user without `UsersManage` with a 403. This is the part that protects your data, and it needs no `authenticate` or `requires` around those routes. A route with another name, such as `/api/stats` for the board page, is not covered and keeps its own check.

**The pages are guarded in the browser by one generated function.** Use it in the layout of the route group that holds the pages:

```ts no-check
// src/routes/(app)/+layout.ts
import { signedInUser } from '#api';

export const ssr = false;

export const load = async ({ url }) => ({ user: await signedInUser(url) });
```

`signedInUser(url)` resolves to the user, typed and never `null`. A visitor is sent to [the login page](#the-login-page) with the way back, and a user without the permission that the page's guard asks for gets your error page with a 403. `guardPages` does the same for a layout that has no use for the user: `export const load = guardPages;`. It only acts on pages that a guard covers.

Do not put either in the root `+layout.ts`. SvelteKit cannot show your error page for an error from the root layout, and the visitor would see a bare "Forbidden".

The guard in the browser is a convenience: it spares the visitor a page that would only fail. Anyone can skip it, so what must stay private is kept private by the API.

## User preferences

A theme, a language, a compact list: small choices that people expect to find again on their phone after making them on their laptop. Declare them as a class, and say how you keep them:

```kotlin no-check
@Serializable
data class Preferences(
    val theme: String? = null,
    val locale: String? = null,
    val compactBoard: Boolean = false,
)

install(Svelte) {
    currentUser<User> { sessions.get<UserSession>()?.let { users.find(it.userId) } }
    preferences<Preferences, User>(
        defaults = Preferences(),
        load = { user -> store.preferences(user.id) },
        save = { user, preferences -> store.save(user.id, preferences) },
    )
}
```

You store them: a table, a JSON column, a document. `load` returns `null` for someone who has saved nothing yet, and they get the defaults. ktor-svelte adds the endpoint, the type and the store:

```svelte no-check
<script lang="ts">
    import { preferences } from '#api';
</script>

<input
    type="checkbox"
    checked={preferences.value.compactBoard}
    onchange={(event) => preferences.set({ compactBoard: event.currentTarget.checked })}
/>
<ul class:compact={preferences.value.compactBoard}>...</ul>
```

| | |
| --- | --- |
| `preferences.value` | The preferences, typed as your class and reactive. The defaults until the server has answered, and for a visitor |
| `preferences.ready` | `false` until the first answer |
| `preferences.set({ ... })` | Changes some of them. The page shows the change at once, and it is saved in the background |
| `preferences.load()` | Resolves when they are loaded. Reading `value` starts loading on its own |

The store loads once, loads again when someone signs in, and goes back to the defaults when they sign out. A visitor's changes stay in the page and are not saved. What is saved is checked like every request body, so `@JsonSchema` bounds on the class apply.

### Theme and language

A field called `theme` or `locale` is tied to the cookie that [DaisyUI themes](frontend-libraries.md#daisyui) and [i18n](frontend-libraries.md#i18n) use, so the generated switches keep working unchanged and their choice now belongs to the person:

- Someone picks a theme or a language, with the generated switch or your own code. It is saved for them.
- They sign in on another device. The saved theme is applied at once, and for a saved language the page loads again in that language.
- They pick another theme on that device. That one is saved, and the first device shows it the next time a page loads there.

The rule behind it: each browser remembers the value it last had in common with the server. If its cookie differs from that, the change was made here and is saved. If not, the saved value is newer and is shown.

Keep preferences to plain values: text, numbers, booleans, enums and lists of them.

The endpoint is `GET` and `PUT /api/preferences`, under your first API prefix. Pass `path = "/api/settings"` to move it.

## The login page

Someone opens a link to a page that needs a session, or their session ends while they fill in a form. Both should end the same way: at the login page, and after signing in, back where they were. Say where the login page is:

```kotlin no-check
install(Svelte) {
    loginPage = "/login"
}
```

With [typed routes](routes.md) that is `loginPage = FrontendRoutes.login`. Three things follow from it.

**A 401 from the API opens the login page.** The generated client sends the browser to `/login?next=...`, with the page the visitor was on. There is no `apiConfig.onUnauthorized` to write. It does not happen on the login page itself, where a 401 means a wrong password, and not for calls made with `silent: true`. If you do set `apiConfig.onUnauthorized`, yours runs instead.

**The server's redirect carries the page too.** Use it where Ktor's authentication turns a visitor away:

```kotlin no-check
install(Authentication) {
    session<UserSession>("session") {
        validate { session -> users.find(session.userId)?.let { session } }
        challenge {
            if (call.request.path().startsWith("/api/")) call.respond(HttpStatusCode.Unauthorized) else call.respondLoginRedirect()
        }
    }
}
```

`respondLoginRedirect()` answers with a redirect to `/login?next=%2Fboard` for a visitor who asked for `/board`.

**After signing in, go back.** `afterLogin` reads the page from the address, and takes your fallback when there is none:

```ts no-check
import { goto } from '$app/navigation';
import { afterLogin, api } from '#api';

await api.session.create(draft);
await goto(afterLogin('/board'));
```

A layout that protects its pages in the browser builds the same address with `loginPath`:

```ts no-check
import { redirect } from '@sveltejs/kit';
import { currentUser, loginPath } from '#api';

export const load = async ({ url }) => {
    const user = await currentUser.load();
    if (!user) redirect(307, loginPath(url));
    return { user };
};
```

Only a path inside your app is accepted as the page to go back to. An address of another site in `next` is ignored on both sides, so a crafted link to your login page cannot send someone elsewhere after they sign in.

In development mode, `svelte(public = ...)` also opens the paths Vite needs, so hot reload works on your login page.
