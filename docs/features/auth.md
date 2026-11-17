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

## Expired sessions

In the browser, react to expired sessions in one place:

```ts
apiConfig.onUnauthorized = () => goto('/login');
```

In development mode, `svelte(public = ...)` also opens the paths Vite needs, so hot reload works on your login page.
