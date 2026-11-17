# Sign in with a session cookie

You want people to sign in with an email and a password, stay signed in across page loads, and land back on the page they wanted after signing in.

**Time:** about 20 minutes. **Level:** beginner. **You need:** an app from the [tutorial](../guide/tutorial.md) or `examples/basic`.

The frontend and the API share one origin, so a plain cookie is all you need: no tokens in `localStorage`, no CORS. The origin check that ktor-svelte turns on refuses cross-site writes, which protects the cookie from [cross-site request forgery](../security.md#api-request-guards).

What you build:

- `POST /api/session` signs in, `DELETE /api/session` signs out.
- The browser knows the user through `currentUser`.
- Pages under `(app)` need a session, and a visitor is sent to `/login` and back.
- Five sign-in attempts per minute and client.

## Step 1: add the Ktor modules

Add `io.ktor:ktor-server-auth` and `io.ktor:ktor-server-sessions` to your dependencies, in the same version as your other Ktor modules.

## Step 2: the session and the cookie

The session holds only the user's id. Sign the cookie, so nobody can change the id in it:

```kotlin no-check [Auth.kt]
@Serializable
data class UserSession(val userId: String)

fun Application.sessionAuth() {
    install(Sessions) {
        cookie<UserSession>("session") {
            cookie.path = "/"
            cookie.httpOnly = true
            cookie.secure = !this@sessionAuth.developmentMode
            cookie.extensions["SameSite"] = "Lax"
            transform(SessionTransportTransformerMessageAuthentication(hex(System.getenv("SESSION_SIGN_KEY"))))
        }
    }
}
```

- `SESSION_SIGN_KEY` is a long random hex string. Generate it once per environment and keep it out of the repository. `openssl rand -hex 32` makes one.
- `httpOnly` keeps scripts away from the cookie, `secure` sends it over HTTPS only, and `SameSite=Lax` keeps it off most cross-site requests.

## Step 3: Ktor authentication

`authenticate("session")` blocks need a provider. Its challenge answers the API with a 401 and sends pages to the login page:

```kotlin no-check [Auth.kt]
install(Authentication) {
    session<UserSession>("session") {
        validate { session -> session }
        challenge {
            if (call.request.path().startsWith("/api/")) {
                call.respond(HttpStatusCode.Unauthorized, Problem("Sign in first."))
            } else {
                call.respondLoginRedirect()
            }
        }
    }
}
```

`respondLoginRedirect()` sends a visitor who asked for `/board` to `/login?next=%2Fboard`. See [The login page](../features/auth.md#the-login-page).

## Step 4: tell ktor-svelte who is signed in

```kotlin no-check [Application.kt]
install(Svelte) {
    loginPage = "/login"
    currentUser<User> { sessions.get<UserSession>()?.let { users.find(it.userId) } }
    guards {
        signedIn("/board", "/settings")
    }
    rateLimit { limit("login", requests = 5, per = 1.minutes) }
    errorResponse<Problem>(HttpStatusCode.Unauthorized)
}
```

| Line | What it gives you |
| --- | --- |
| `loginPage` | A 401 from the API opens `/login?next=...` in the browser |
| `currentUser` | `currentUser` in the browser, `call.user` and `call.requireUser` in routes |
| `guards` | `/api/board` and `/api/settings` and everything below answer a visitor with 401, and the pages can be guarded with one line |
| `rateLimit` | A named limit for the sign-in route, five attempts per minute and client, on top of the default limit for all API writes |
| `errorResponse` | Adds the 401 to the typed errors of every endpoint, because `authenticate` answers it outside your route |

## Step 5: the routes

```kotlin no-check [Routes.kt]
fun Route.sessionRoutes() {
    rateLimit(RateLimitName("login")) {
        post("/api/session") {
            val login = call.receive<Login>()
            val user = users.check(login.email, login.password)
                ?: return@post call.respond(HttpStatusCode.Unauthorized, Problem("Wrong email or password."))
            call.sessions.set(UserSession(user.id))
            call.currentUserChanged()
            call.respond(user)
        }
    }
    delete("/api/session") {
        call.sessions.clear<UserSession>()
        call.currentUserChanged()
        call.respond(HttpStatusCode.NoContent)
    }
    get("/api/board") {
        val user = call.requireUser<User>()
        call.respond(boards.of(user))
    }
}
```

- `currentUserChanged()` tells the browser to load the user again, before your code continues after the call.
- Store passwords as a slow hash, such as bcrypt or Argon2, never as text. `users.check` compares against the hash.
- Give the same answer for an unknown email and a wrong password, so the form does not tell anyone who has an account.

Call `sessionAuth()` and `sessionRoutes()` from your module, and run `./gradlew svelteGenerateTs` so the client has `api.session.create` and `api.session.delete`.

## Step 6: the login page

`afterLogin` reads the page to go back to from `?next=`, and only ever accepts a path inside your app:

```svelte no-check [login/+page.svelte]
<script lang="ts">
    import { goto } from '$app/navigation';
    import { afterLogin, api, isApiError } from '#api';

    let email = $state('');
    let password = $state('');
    let message = $state('');

    async function signIn(event: SubmitEvent) {
        event.preventDefault();
        try {
            await api.session.create({ email, password });
            await goto(afterLogin('/'));
        } catch (error) {
            if (isApiError(error, 'session.create')) message = error.body.message;
            else throw error;
        }
    }
</script>

<form onsubmit={signIn}>
    <input type="email" autocomplete="username" required bind:value={email} />
    <input type="password" autocomplete="current-password" required bind:value={password} />
    <p role="alert">{message}</p>
    <button type="submit">Sign in</button>
</form>
```

On the login page a 401 means a wrong password, so the client does not redirect there.

## Step 7: guard the pages

Put the pages that need a session in a route group, and guard it in its layout:

```ts no-check [(app)/+layout.ts]
import { signedInUser } from '#api';

export const ssr = false;

export const load = async ({ url }) => ({ user: await signedInUser(url) });
```

A visitor who opens `/board` is sent to `/login?next=%2Fboard`, and after signing in, back to the board. Pages below get the user as `data.user`, never `null`.

## Step 8: show who is signed in, and sign out

```svelte no-check [+layout.svelte]
<script lang="ts">
    import { goto } from '$app/navigation';
    import { api, currentUser } from '#api';

    let { children } = $props();

    async function signOut() {
        await api.session.delete();
        await goto('/login');
    }
</script>

<header>
    {#if currentUser.user}
        <span>{currentUser.user.name}</span>
        <button type="button" onclick={signOut}>Sign out</button>
    {:else if currentUser.ready}
        <a href="/login">Sign in</a>
    {/if}
</header>

{@render children()}
```

## Going further

- **Warn before the session ends:** keep the end in the session and pass `sessionEnds` and `extendSession` to `currentUser`. See [When the session ends](../features/auth.md#when-the-session-ends).
- **Members and admins:** add [permissions](../features/auth.md#permissions), as in [A role-based app](role-based-app.md).
- **Keep the HTML private too:** [put the frontend behind a login](../features/auth.md#put-the-frontend-behind-a-login).
- **Try it in the browser:** `examples/showcase` has all of this, with registration and a session warning.

## Typed cookies

A cookie that both sides use is three things written twice: its name, what its text means, and its options. Declare it once in Kotlin, name it in `install(Svelte)`, and read and write it with its type:

```kotlin
import io.github.nijasc.ktor.svelte.clearCookie
import io.github.nijasc.ktor.svelte.readCookie
import io.github.nijasc.ktor.svelte.typedCookie
import io.github.nijasc.ktor.svelte.writeCookie
import kotlin.time.Duration.Companion.days

enum class Density { Comfortable, Compact }

val DensityCookie = typedCookie<Density>("density", default = Density.Comfortable, maxAge = 90.days)

install(Svelte) {
    generateTs = true
    cookies(DensityCookie)
}

routing {
    get("/api/density") {
        val density = call.readCookie(DensityCookie)
        call.writeCookie(DensityCookie, Density.Compact)
        call.clearCookie(DensityCookie)
        call.respond(density.toString())
    }
}
```

In the browser, the generated client has the same cookie under `cookies`, with the same name, type and options:

```ts no-check
import { cookies } from '#api';

const density = cookies.density.get(); // 'Comfortable' | 'Compact'
cookies.density.set('Compact');
cookies.density.clear();
```

| Option | Default | What it does |
| --- | --- | --- |
| `default` | `null` | What a missing or unreadable cookie reads as |
| `maxAge` | a year | How long the browser keeps it. `null` ends it with the browser session |
| `path` | `/` | The cookie's path |
| `sameSite` | `CookieSameSite.Lax` | `Lax`, `Strict` or `None` |
| `secure` | `false` | Only sent over HTTPS |
| `httpOnly` | `false` | Hidden from scripts, and left out of the generated client |
| `category` | `null` | A [consent category](#cookie-consent) |

- A cookie holds a `String`, `Int`, `Long`, `Double`, `Boolean` or an enum.
- A missing cookie, or one whose text does not fit the type, reads as the default, and as null (`undefined` in TypeScript) when there is none. Somebody editing a cookie by hand cannot break a page.
- Both sides write the cookie with the same options.
- A cookie with `httpOnly = true` is left out of the generated client, because a script cannot read it.
- The name in TypeScript is the cookie's name in camel case: `board-mine` is `cookies.boardMine`.
- `get` takes an optional `Cookie` header text, for code that runs where there is no `document`.

::: warning Not for secrets
Names and values are plain text in the visitor's browser. Do not keep anything in a typed cookie that the visitor must not read or change. For that, use a session.
:::

## Cookie consent

A cookie the site does not need to work, such as one for statistics, may only be set after the visitor agreed. Give such a cookie a category where it is declared:

```kotlin
import io.github.nijasc.ktor.svelte.consentsTo
import io.github.nijasc.ktor.svelte.typedCookie
import io.github.nijasc.ktor.svelte.writeCookie

val VisitsCookie = typedCookie<Int>("visits", default = 0, category = "analytics")

install(Svelte) {
    generateTs = true
    cookies(VisitsCookie)
}

routing {
    get("/api/visit") {
        call.writeCookie(VisitsCookie, 1)
        if (call.consentsTo("analytics")) call.application.log.info("counted")
        call.respondText("ok")
    }
}
```

From then on, both sides follow the visitor's choice without further code:

- `call.writeCookie` and `cookies.visits.set` do nothing until the visitor has accepted the category.
- `call.readCookie` and `cookies.visits.get` give the default until then, also when an old cookie is still there.
- A cookie without a category is needed for the site to work, and is always read and written.

The generated client has the choice as `cookieConsent`, with the categories of all declared cookies:

```ts no-check
import { cookieConsent } from '#api';

cookieConsent.decided(); // false until the visitor chose
cookieConsent.allows('analytics');
cookieConsent.accept(); // everything
cookieConsent.accept(['analytics']); // only these
cookieConsent.refuse();
cookieConsent.reset(); // ask again
```

Refusing a category, or leaving it out, also removes its cookies from the browser. `cookieConsent` is a Svelte store, so `$cookieConsent.accepted` in a component follows the choice, for a script that should only load after consent.

To ask the visitor, show the banner once, in the root layout:

```svelte no-check
<script lang="ts">
    import { onMount } from 'svelte';
    import { cookieConsent } from '#api';

    onMount(() =>
        cookieConsent.banner({
            text: 'We use cookies to count visits.',
            accept: 'Accept all',
            refuse: 'Only what is needed',
            labels: { analytics: 'Statistics' },
            save: 'Save my choice',
            link: { href: '/privacy', text: 'Privacy' }
        })
    );
</script>
```

- The banner appears only while the visitor has not chosen.
- `labels` and `save` are optional: with them, each labelled category gets a checkbox and there is a third button.
- All text is yours, so it can come from your translations.
- It is a plain bar at the bottom of the page with the class `ktor-svelte-consent`, and its buttons carry daisyUI's `btn` classes. For your own design, build a component on `cookieConsent` and leave `banner` out.
- A settings page can call `cookieConsent.reset()` and show the banner again.

On the server, `call.cookieConsent` is the set of accepted categories, or null while the visitor has not chosen, and `call.consentsTo("analytics")` asks for one.

The choice is kept for 180 days in a cookie named `cookie-consent`, which itself needs no consent. This helper keeps the choice and follows it for typed cookies. It cannot know about cookies that other scripts set, and which cookies need consent where you operate is a legal question it does not answer.
