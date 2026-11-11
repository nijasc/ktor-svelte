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
