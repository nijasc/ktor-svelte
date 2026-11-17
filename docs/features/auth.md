# Auth and users

Say once in Kotlin who is signed in, what they may do and which pages need a session. The server enforces it, and the generated client gets the same user, the same permissions and the same page rules, typed.

<Badge type="tip" text="Ktor plugin" /> <Badge type="warning" text="Generated client" />

ktor-svelte does not replace Ktor's authentication. You keep your sessions, tokens and `authenticate` blocks. What it adds is the part every app writes twice: the user in the browser, permissions on both sides, page guards, user preferences and the trip to the login page and back.

## Quick start

Tell the plugin how to find the signed-in user:

```kotlin
install(Svelte) {
    currentUser<User> { sessions.get<UserSession>()?.let { users.find(it.userId) } }
}
```

Use it on any page:

```svelte no-check
<script lang="ts">
    import { currentUser } from '#api';
</script>

{#if currentUser.user}
    Hello, {currentUser.user.name}
{:else if currentUser.ready}
    <a href="/login">Sign in</a>
{/if}
```

That is all it takes for a typed user in the browser and `call.user<User>()` in every route. The sections below add permissions, page guards, preferences and the login page, a few lines each.

## At a glance

| You want to | Use | Section |
| --- | --- | --- |
| Know who is signed in, in the browser | `currentUser<User> { }` and `currentUser` from `#api` | [The current user](#the-current-user) |
| Get the user in a route | `call.user<User>()`, `call.requireUser<User>()` | [In routes](#in-routes) |
| Warn before the session ends | `sessionEnds`, `extendSession`, `currentUser.sessionEnding` | [When the session ends](#when-the-session-ends) |
| Write a rule once for both sides | `permissions<Permission, User> { }`, `requires`, `can` | [Permissions](#permissions) |
| Say which pages need a session or a permission | `guards { }`, `signedInUser`, `guardPages` | [Page guards](#page-guards) |
| Keep small choices per person | `preferences<Preferences, User>(...)`, `preferences` from `#api` | [User preferences](#user-preferences) |
| Send visitors to the login page and back | `loginPage`, `respondLoginRedirect`, `afterLogin` | [The login page](#the-login-page) |
| Keep the HTML of every page behind a login | `SvelteRouting.Manual` and `svelte(public = ...)` | [Put the frontend behind a login](#put-the-frontend-behind-a-login) |

## Put the frontend behind a login

To put the frontend behind Ktor's authentication, take over its routing. List what stays public. Those paths must include your login page and `/_app/*`, or the login page cannot load. Anyone can still download the JS bundles under `/_app`, so keep secrets on the server.

```kotlin no-check
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

- Pages served by a plain `svelte()` get `private` caching, so shared proxies do not keep them. Paths in the `public` list keep normal caching.
- In development mode, `svelte(public = ...)` also opens the paths Vite needs, so hot reload works on your login page.
- Files that browsers and crawlers ask for without a session, such as `/favicon.ico`, `/robots.txt` and `/sitemap.xml`, go in the `public` list too if visitors should get them. The showcase example lists them.

::: tip Not every app needs this
Most apps only need the API to be private, which [page guards](#page-guards) do without manual routing. Use manual routing when the HTML of a page must not reach a visitor at all.
:::

## The current user

Every app with a login needs to know who is signed in, on both sides. Say once how the server finds that person:

```kotlin no-check
install(Svelte) {
    currentUser<User> { sessions.get<UserSession>()?.let { users.find(it.userId) } }
}
```

The block gets the call and returns the user, or `null` when nobody is signed in. `User` is any `@Serializable` class. Whatever it holds is sent to the browser, so leave the password hash out of it. An app has one kind of signed-in user: a second `currentUser` fails at startup.

| Option | Default | What it does |
| --- | --- | --- |
| `path` | `/api/current-user`, under your first API prefix | Where the endpoint answers. Must start with `/`, such as `path = "/api/whoami"` |
| `signInMessage` | `Sign in first.` | The message of the 401 from `call.requireUser()`. See [In routes](#in-routes) |
| `sessionEnds` | none | When the session ends. See [When the session ends](#when-the-session-ends) |
| `extendSession` | none | Makes the session last longer. See [When the session ends](#when-the-session-ends) |

### In the browser

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
| `currentUser.can(permission)` | Whether the user has a [permission](#permissions). `can` from `#api` does the same |
| `currentUser.sessionEnds`, `currentUser.sessionEnding`, `currentUser.extend()` | See [When the session ends](#when-the-session-ends) |

### Protect a layout

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

With [page guards](#page-guards) and a [login page](#the-login-page), the generated `signedInUser(url)` does this in one line and adds the way back.

### Tell the browser when the user changes

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

### How it works

- The plugin serves `GET /api/current-user`, under your first API prefix, which answers `{"user": ...}` and is never cached. Pass `path = "/api/whoami"` to `currentUser` to move it.
- The endpoint is open to everyone and answers `{"user": null}` to a visitor.
- It runs outside any `authenticate` block, so the block that finds the user reads the session or checks the token itself, and `call.principal()` is empty there.
- With [permissions](#permissions) declared, the answer also carries the user's permissions, and with `sessionEnds` the time that is left.

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

Both work in any route, inside or outside `authenticate`, and need no user store passed along. The user is looked up once per call, however often a route and its helpers ask. `currentUserChanged()` forgets that answer, so a route that signs someone in can ask again and gets the new user. Asking for another class than the one `currentUser` declares fails with a message that names both.

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

`sessionEnds` returns the `java.time.Instant` the session ends at, or `null` when it has no end. ktor-svelte does not own your session, so the end is whatever your session says: a field in the session cookie as here, a row in a table, or the expiry of a token. `extendSession` is optional and does whatever makes your session last longer.

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

Set `apiConfig.sessionWarning` to another number of milliseconds to warn earlier or later:

```ts no-check
import { apiConfig } from '#api';

apiConfig.sessionWarning = 5 * 60_000; // five minutes before the end
```

- The end stays right without extra requests. The answer of the current user endpoint carries it, and so does every API response, in a header, so a session that grows with each request is known to last longer after each one.
- The server sends the time that is left and not a clock time, so a wrong clock on the visitor's computer does not matter.
- When the time is up, the store asks the server once. If the session is really over, `currentUser.user` becomes `null` and the page shows it at that moment, not at the next click.
- `extend()` posts to the current user endpoint with `/extend` added. For a visitor it changes nothing and answers like the current user endpoint.

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

The function runs with the call as its receiver, so it can read more than the user when it has to. An app has one enum of permissions, with at least one entry.

### On the server

Check it where it matters:

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

A rule with more to it, "the author, or anyone who may delete every note", reads like this:

```kotlin no-check
delete("/api/notes/{id}") {
    val user = call.requireUser<User>()
    val note = notes.find(call.parameters["id"]) ?: return@delete call.respond(HttpStatusCode.NotFound)
    if (note.authorId != user.id && !call.can(Permission.NotesDelete)) return@delete call.respond(HttpStatusCode.Forbidden)
    notes.delete(note.id)
    call.respond(HttpStatusCode.NoContent)
}
```

### In the browser

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

::: warning The browser only decides what is shown
`can` in the browser decides what is shown. What is allowed is decided by the check on the route, so every hidden button needs one.
:::

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

| | |
| --- | --- |
| `signedIn(pages...)` | The pages need a signed-in user |
| `permission(permission, pages...)` | The pages need a user with that permission |

- A guard covers the page and everything below it: `/tasks` also covers `/tasks/4`. When two guards cover a page, the deeper one decides.
- A guard takes the path of a page, such as `"/admin"` or `FrontendRoutes.admin`. A path with `[`, `]`, `?`, `#` or `*` is refused at startup, and so is a page that is guarded twice.

### The API is closed by the server

With the guards above, every route under `/api/tasks` answers a visitor with a 401, and every route under `/api/admin` answers a user without `UsersManage` with a 403. This is the part that protects your data, and it needs no `authenticate` or `requires` around those routes. A route with another name, such as `/api/stats` for the board page, is not covered and keeps its own check.

### The pages are guarded in the browser

One generated function does it. Use it in the layout of the route group that holds the pages:

```ts no-check
// src/routes/(app)/+layout.ts
import { signedInUser } from '#api';

export const ssr = false;

export const load = async ({ url }) => ({ user: await signedInUser(url) });
```

`signedInUser(url)` resolves to the user, typed and never `null`. A visitor is sent to [the login page](#the-login-page) with the way back, and a user without the permission that the page's guard asks for gets your error page with a 403. Without a `loginPage`, a visitor gets your error page with a 401 instead.

`guardPages` does the same for a layout that has no use for the user:

```ts no-check
import { guardPages } from '#api';

export const load = guardPages;
```

It only acts on pages that a guard covers, and only in the browser.

::: warning Not in the root layout
Do not put either in the root `+layout.ts`. SvelteKit cannot show your error page for an error from the root layout, and the visitor would see a bare "Forbidden".
:::

The guard in the browser is a convenience: it spares the visitor a page that would only fail. Anyone can skip it, so what must stay private is kept private by the API.

### Show only the links a user may open

The guards are in the client too, as `pageGuards`, and `matchGuard` finds the one that covers a path. A menu filters with them, so it never offers a page that would refuse:

```svelte no-check
<script lang="ts">
    import { can, currentUser, matchGuard, pageGuards } from '#api';
    import { nav } from '#routes';

    const links = $derived(
        nav.filter((item) => {
            const guard = matchGuard(pageGuards, item.to());
            if (!guard) return true;
            return currentUser.signedIn && (!guard.permission || can(guard.permission));
        })
    );
</script>

{#each links as link (link.to.id)}
    <a href={link.to()}>{link.title()}</a>
{/each}
```

`nav` comes from [typed routes](routes.md).

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

| Option | What it does |
| --- | --- |
| `defaults` | What a visitor, and someone who has saved nothing yet, gets |
| `load` | Reads the saved preferences of a user. Returns `null` for someone who has saved nothing yet, who then gets the defaults |
| `save` | Stores them |
| `path` | Moves the endpoint, such as `path = "/api/settings"`. Must start with `/` |

You store them: a table, a JSON column, a document. ktor-svelte adds the endpoint, the type and the store:

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

- The store loads once, loads again when someone signs in, and goes back to the defaults when they sign out.
- A visitor's changes stay in the page and are not saved.
- What is saved is checked like every request body, so `@JsonSchema` bounds on the class apply.
- The endpoint is `GET` and `PUT /api/preferences`, under your first API prefix. Pass `path = "/api/settings"` to move it.
- Keep preferences to plain values: text, numbers, booleans, enums and lists of them.

### Theme and language

A field called `theme` or `locale` is tied to the cookie that [DaisyUI themes](frontend-libraries.md#daisyui) and [i18n](frontend-libraries.md#i18n) use, so the generated switches keep working unchanged and their choice now belongs to the person:

- Someone picks a theme or a language, with the generated switch or your own code. It is saved for them.
- They sign in on another device. The saved theme is applied at once, and for a saved language the page loads again in that language.
- They pick another theme on that device. That one is saved, and the first device shows it the next time a page loads there.

The rule behind it: each browser remembers the value it last had in common with the server. If its cookie differs from that, the change was made here and is saved. If not, the saved value is newer and is shown.

## The login page

Someone opens a link to a page that needs a session, or their session ends while they fill in a form. Both should end the same way: at the login page, and after signing in, back where they were. Say where the login page is:

```kotlin no-check
install(Svelte) {
    loginPage = "/login"
}
```

With [typed routes](routes.md) that is `loginPage = FrontendRoutes.login`. Three things follow from it.

### A 401 from the API opens the login page

The generated client sends the browser to `/login?next=...`, with the page the visitor was on. There is no `apiConfig.onUnauthorized` to write.

- It does not happen on the login page itself, where a 401 means a wrong password.
- It does not happen for calls made with `silent: true`.
- If you do set `apiConfig.onUnauthorized`, yours runs instead.

### The server's redirect carries the page too

Use it where Ktor's authentication turns a visitor away:

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

`respondLoginRedirect()` answers with a redirect to `/login?next=%2Fboard` for a visitor who asked for `/board`. Only a `GET` carries its page along. Other methods, and a request for the login page itself, are sent to the plain login page. Without `loginPage` set, it fails with a message that says how to set it.

### After signing in, go back

`afterLogin` reads the page from the address, and takes your fallback when there is none:

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

| | |
| --- | --- |
| `loginPath(from?)` | The login page with `?next=` for `from`, a path or a `URL`. Without an argument, the page that is open. On the login page itself, the plain login page |
| `afterLogin(fallback = '/', from?)` | The page in `next`, or `fallback` when there is none |

Only a path inside your app is accepted as the page to go back to. An address of another site in `next` is ignored on both sides, so a crafted link to your login page cannot send someone elsewhere after they sign in.

## Full example

A team app where members sign in with a session cookie, admins manage users, a guard closes the members' pages, and a warning appears before the session ends. It is a shortened version of `examples/showcase`.

::: code-group

```kotlin no-check [Auth.kt]
@Serializable
data class UserSession(val userId: Int, val endsAt: Long = 0) {
    val ends: Instant get() = Instant.ofEpochSecond(endsAt)
    val current: Boolean get() = Instant.now().isBefore(ends)
}

fun Application.configureAuth(users: UserStore) {
    install(Sessions) {
        cookie<UserSession>("session") {
            cookie.path = "/"
            cookie.httpOnly = true
            cookie.secure = !developmentMode
            cookie.extensions["SameSite"] = "Lax"
            transform(SessionTransportTransformerMessageAuthentication(hex(System.getenv("SESSION_SIGN_KEY"))))
        }
    }
    install(Authentication) {
        session<UserSession>("session") {
            validate { session -> session.takeIf { it.current && users.findActive(it.userId) != null } }
            challenge {
                if (call.request.path().startsWith("/api/")) {
                    call.respond(HttpStatusCode.Unauthorized, Problem("Sign in first."))
                } else {
                    call.respondLoginRedirect()
                }
            }
        }
    }
}

fun Route.sessionRoutes(users: UserStore) {
    rateLimit(RateLimitName("login")) {
        post("/api/session") {
            val login = call.receive<Login>()
            val user = users.check(login.email, login.password)
                ?: return@post call.respond(HttpStatusCode.Unauthorized, Problem("Wrong email or password."))
            call.sessions.set(UserSession(user.id, Instant.now().epochSecond + 3600))
            call.currentUserChanged()
            call.respond(user)
        }
    }
    delete("/api/session") {
        call.sessions.clear<UserSession>()
        call.currentUserChanged()
        call.respond(HttpStatusCode.NoContent)
    }
}
```

```kotlin no-check [Application.kt]
enum class Role { ADMIN, MEMBER }

enum class Permission { ManageUsers, DeleteAnyTask }

fun Application.module() {
    val users = UserStore()
    configureAuth(users)

    install(Svelte) {
        loginPage = FrontendRoutes.login
        currentUser<User>(
            sessionEnds = { sessions.get<UserSession>()?.ends },
            extendSession = {
                sessions.get<UserSession>()?.let { sessions.set(it.copy(endsAt = Instant.now().epochSecond + 3600)) }
            },
        ) {
            sessions.get<UserSession>()?.takeIf { it.current }?.let { users.findActive(it.userId) }
        }
        permissions<Permission, User> { user ->
            if (user.role == Role.ADMIN) Permission.entries.toSet() else emptySet()
        }
        preferences<Preferences, User>(
            defaults = Preferences(),
            load = { user -> users.preferences(user.id) },
            save = { user, preferences -> users.savePreferences(user.id, preferences) },
        )
        guards {
            signedIn(FrontendRoutes.board, "/tasks", FrontendRoutes.settings)
            permission(Permission.ManageUsers, FrontendRoutes.admin)
        }
        errorResponse<Problem>(HttpStatusCode.Unauthorized, HttpStatusCode.Forbidden)
        rateLimit { limit("login", requests = 10, per = 1.minutes) }
    }

    routing {
        sessionRoutes(users)
        get("/api/admin/users") { call.respond(users.all()) } // closed by the admin guard
        get("/api/tasks") { call.respond(tasks.visibleTo(call.requireUser<User>())) } // closed by the /tasks guard
    }
}
```

```ts no-check [(app)/+layout.ts]
import { signedInUser } from '#api';
import type { LayoutLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: LayoutLoad = async ({ url }) => ({ user: await signedInUser(url) });
```

```svelte no-check [login/+page.svelte]
<script lang="ts">
    import { goto } from '$app/navigation';
    import { afterLogin, api, isApiError, Login } from '#api';
    import { routes } from '#routes';

    let draft = $state(Login.empty());
    let message = $state('');

    async function signIn(event: SubmitEvent) {
        event.preventDefault();
        message = '';
        try {
            await api.session.create(draft);
            await goto(afterLogin(routes.board()));
        } catch (error) {
            if (isApiError(error, 'session.create')) message = error.body.message;
            else throw error;
        }
    }
</script>

<form onsubmit={signIn}>
    <input type="email" autocomplete="username" required bind:value={draft.email} />
    <input type="password" autocomplete="current-password" required bind:value={draft.password} />
    <p role="alert">{message}</p>
    <button type="submit">Sign in</button>
</form>
```

```svelte no-check [+layout.svelte]
<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { api, can, currentUser, Permission } from '#api';
    import { routes } from '#routes';

    let { children } = $props();

    onMount(() => void currentUser.load());

    async function signOut() {
        await api.session.delete();
        await goto(routes.login());
    }
</script>

<header>
    {#if can(Permission.ManageUsers)}
        <a href={routes.admin()}>Admin</a>
    {/if}
    {#if currentUser.user}
        <span>{currentUser.user.name}</span>
        <button type="button" onclick={signOut}>Sign out</button>
    {:else if currentUser.ready}
        <a href={routes.login()}>Sign in</a>
    {/if}
</header>

{#if currentUser.sessionEnding}
    <div role="status">
        You will be signed out soon.
        <button type="button" onclick={() => currentUser.extend()}>Stay signed in</button>
    </div>
{/if}

{@render children()}
```

:::

## Use cases

- **An app behind a login:** `currentUser`, `loginPage` and one `signedIn` guard for the route group. Step by step in [Sign in with a session cookie](../recipes/sessions.md).
- **Members and admins:** add `permissions` and a `permission` guard. See [A role-based app](../recipes/role-based-app.md) and [Add an admin area](../recipes/admin-area.md).
- **Long forms:** `sessionEnds` and `extendSession`, so nobody loses their work to an expired session.
- **Settings that follow the person:** `preferences` with `theme` and `locale` fields, so the [theme and language switches](frontend-libraries.md#themetoggle-and-localeswitch) remember per account.
- **A public site with a members area:** guards for the members' pages only, and the rest stays open.

## Good to know

- `currentUser`, `permissions` and `preferences` can each be declared once. A second one fails at startup and names the first.
- Permissions, guards, preferences and `call.user` all need `currentUser`. Without it, the first call that needs the user fails with a message that says how to declare it.
- The current user and preferences endpoints are under your first API prefix, so the [API request guards](../security.md#api-request-guards) apply to them, such as the origin check on writes.
- `call.principal()` is only set inside `authenticate`. The `currentUser` block also runs for the current user endpoint and for guards, outside `authenticate`, so it reads the session itself.
- A 401 from any API call clears the store and, with a `loginPage`, opens the login page.

::: details Which part protects what
| Part | Protects | A visitor can skip it |
| --- | --- | --- |
| A guard on the API (`guards { }`) | The routes under the guarded path | No |
| `requires`, `requirePermission`, `requireUser` | The routes they are in | No |
| `authenticate` around `svelte()` | The HTML of the pages | No |
| `signedInUser`, `guardPages` | Which page the browser shows | Yes |
| `can` in the browser | Which buttons are shown | Yes |
:::
