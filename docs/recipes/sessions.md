# Sign in with a session cookie

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

```ts no-check
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

- A cookie holds a `String`, `Int`, `Long`, `Double`, `Boolean` or an enum.
- A missing cookie, or one whose text does not fit the type, reads as the default, and as null (`undefined` in TypeScript) when there is none. Somebody editing a cookie by hand cannot break a page.
- The options are `maxAge` (a year unless set, null to end with the browser session), `path`, `sameSite`, `secure` and `httpOnly`. Both sides write the cookie with them.
- A cookie with `httpOnly = true` is left out of the generated client, because a script cannot read it.
- The name in TypeScript is the cookie's name in camel case: `board-mine` is `cookies.boardMine`.
- `get` takes an optional `Cookie` header text, for code that runs where there is no `document`.

Names and values are plain text in the visitor's browser. Do not keep anything in a typed cookie that the visitor must not read or change. For that, use a session.

