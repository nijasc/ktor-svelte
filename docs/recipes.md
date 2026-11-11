# Recipes

Short, complete answers to tasks most apps need. Each one uses only Ktor, SvelteKit and what ktor-svelte already does, so you can copy it and adapt the names.

- [Sign in with a session cookie](#sign-in-with-a-session-cookie)
- [Upload files](#upload-files)
- [Stream live updates](#stream-live-updates)
- [Page through long lists](#page-through-long-lists)
- [Add an admin area](#add-an-admin-area)

## Sign in with a session cookie

The frontend and the API share one origin, so a plain cookie is all you need: no tokens in `localStorage`, no CORS. The origin check that ktor-svelte turns on refuses cross-site writes, which protects the cookie from cross-site request forgery.

Add `ktor-server-auth` and `ktor-server-sessions`, then:

```kotlin
@Serializable
data class UserSession(val userId: String)

fun Application.sessionAuth(users: Users) {
    install(Sessions) {
        cookie<UserSession>("session") {
            cookie.path = "/"
            cookie.httpOnly = true
            cookie.secure = !this@sessionAuth.developmentMode
            cookie.extensions["SameSite"] = "Lax"
            transform(SessionTransportTransformerMessageAuthentication(hex(System.getenv("SESSION_SIGN_KEY"))))
        }
    }
    install(Authentication) {
        session<UserSession>("session") {
            validate { session -> session }
            challenge { call.respond(HttpStatusCode.Unauthorized, Problem("Sign in first.")) }
        }
    }
    install(Svelte) {
        rateLimit { limit("login", requests = 5, per = 1.minutes) }
        errorResponse<Problem>(HttpStatusCode.Unauthorized)
    }
    routing {
        rateLimit(RateLimitName("login")) {
            post("/api/session") {
                val login = call.receive<Login>()
                val user = users.check(login.email, login.password)
                if (user == null) return@post call.respond(HttpStatusCode.Unauthorized, Problem("Wrong email or password."))
                call.sessions.set(UserSession(user.id))
                call.respond(user)
            }
        }
        delete("/api/session") {
            call.sessions.clear<UserSession>()
            call.respond(HttpStatusCode.NoContent)
        }
        authenticate("session") {
            get("/api/me") {
                val user: User? = users.find(call.principal<UserSession>()!!.userId)
                if (user == null) call.respond(HttpStatusCode.Unauthorized, Problem("Sign in first.")) else call.respond(user)
            }
        }
    }
}
```

- `SESSION_SIGN_KEY` is a long random hex string. Generate it once per environment and keep it out of the repository.
- The `login` limit allows five attempts per minute and client, on top of the default limit for all API writes.
- `errorResponse` adds the 401 to the typed errors of every endpoint, because `authenticate` answers it outside your route.

In the frontend, send users to the login page whenever the API says they are signed out:

```ts
import { goto } from '$app/navigation';
import { api, apiConfig, isApiError } from '#api';

apiConfig.onUnauthorized = () => goto('/login');

try {
    const user = await api.session.create({ email, password });
} catch (error) {
    if (isApiError(error, 'session.create')) message = error.body.message;
    else throw error;
}
```

Put the `onUnauthorized` line in your root `+layout.ts`, so it runs once in the browser.

## Upload files

Receive the parts in Ktor and describe the body once, so the generated function takes `FormData`:

```kotlin
post("/api/files") {
    val stored = mutableListOf<StoredFile>()
    call.receiveMultipart().forEachPart { part ->
        if (part is PartData.FileItem) {
            stored += files.store(part.originalFileName ?: "upload", part.provider().readRemaining().readByteArray())
        }
        part.dispose()
    }
    call.respond(HttpStatusCode.Created, stored)
}.describe {
    requestBody { ContentType.MultiPart.FormData() }
}
```

```ts
const form = new FormData();
for (const file of input.files ?? []) form.append('file', file);
const stored = await api.files.create(form, {
    onUploadProgress: ({ loaded, total }) => (progress = total ? loaded / total : 0)
});
```

- API bodies are limited to 1 MiB by default. Raise `maxApiBodySize` to the largest upload you accept.
- `readRemaining()` keeps each file in memory. For large files, copy `part.provider()` to a file or object storage instead.
- Never use `originalFileName` as a path on disk. Store files under an ID you choose.

## Stream live updates

Server-sent events need no extra client library, and the generated client turns them into an async generator:

```kotlin
install(SSE)
routing {
    sse("/api/ticks") {
        repeat(10) { count ->
            send(ServerSentEvent(Json.encodeToString(Tick(count))))
            delay(1000)
        }
    }.describe {
        responses {
            HttpStatusCode.OK {
                ContentType.Text.EventStream { schema = jsonSchema<Tick>() }
            }
        }
    }
}
```

```svelte
<script lang="ts">
    import { api, type Tick } from '#api';

    let ticks = $state<Tick[]>([]);

    $effect(() => {
        const controller = new AbortController();
        (async () => {
            for await (const tick of api.ticks.list({ signal: controller.signal })) ticks.push(tick);
        })().catch(() => undefined);
        return () => controller.abort();
    });
</script>
```

- The `describe` block gives the events a type. Without it, each event is a string.
- Aborting the signal when the component goes away closes the connection.
- SSE counts as a GET, so it is never rate limited or blocked by the origin check.

## Page through long lists

Return `Page<T>` with a `cursor` query parameter, and `pages` reads it one page at a time:

```kotlin
get("/api/users") {
    val cursor = call.queryParameters["cursor"]
    val limit = call.queryParameters["limit"]?.toIntOrNull() ?: 50
    val page: Page<User> = users.page(cursor, limit.coerceIn(1, 100))
    call.respond(page)
}
```

```ts
import { api, pages } from '#api';

for await (const users of pages(api.users.list, { limit: '100' })) table.push(...users);
```

- Use the ID or sort key of the last item as the cursor, not an offset, so rows added while someone pages do not shift the results.
- Always cap `limit` on the server.

## Add an admin area

Protect the API on the server and only hide the pages in the frontend. A page guard alone protects nothing, because anyone can call the API directly.

```kotlin
fun Route.admin(
    users: Users,
    build: Route.() -> Unit,
) {
    authenticate("session") {
        route("/api/admin") {
            install(
                createRouteScopedPlugin("AdminOnly") {
                    onCall { call ->
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

In SvelteKit, put the admin pages under `src/routes/admin/` and check the user once in their layout:

```ts
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
