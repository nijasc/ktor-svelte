package showcase

import io.github.nijasc.ktorsvelte.messages
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.createRouteScopedPlugin
import io.ktor.server.application.install
import io.ktor.server.application.log
import io.ktor.server.auth.Authentication
import io.ktor.server.auth.AuthenticationChecked
import io.ktor.server.auth.authenticate
import io.ktor.server.auth.principal
import io.ktor.server.auth.session
import io.ktor.server.plugins.ratelimit.RateLimitName
import io.ktor.server.plugins.ratelimit.rateLimit
import io.ktor.server.request.path
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.response.respondRedirect
import io.ktor.server.routing.Route
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.put
import io.ktor.server.routing.route
import io.ktor.server.sessions.SessionTransportTransformerMessageAuthentication
import io.ktor.server.sessions.Sessions
import io.ktor.server.sessions.clear
import io.ktor.server.sessions.cookie
import io.ktor.server.sessions.sessions
import io.ktor.server.sessions.set
import io.ktor.util.hex
import kotlinx.serialization.Serializable
import java.security.SecureRandom

const val SESSION_AUTH = "session"
const val LOGIN_LIMIT = "login"
private const val SESSION_COOKIE = "showcase_session"
private const val SESSION_SECONDS = 7L * 24L * 60L * 60L
private const val SIGN_KEY_BYTES = 32

@Serializable
data class UserSession(
    val userId: Int,
)

fun Application.configureAuth(
    users: UserStore,
    secureCookies: Boolean,
) {
    val signKey = System.getenv("SESSION_SIGN_KEY")?.let(::hex) ?: temporarySignKey()
    install(Sessions) {
        cookie<UserSession>(SESSION_COOKIE) {
            cookie.path = "/"
            cookie.httpOnly = true
            cookie.secure = secureCookies
            cookie.maxAgeInSeconds = SESSION_SECONDS
            cookie.extensions["SameSite"] = "Lax"
            transform(SessionTransportTransformerMessageAuthentication(signKey))
        }
    }
    install(Authentication) {
        session<UserSession>(SESSION_AUTH) {
            validate { session -> users.findActive(session.userId)?.let { session } }
            challenge {
                if (call.request.path().startsWith("/api/")) {
                    call.respond(HttpStatusCode.Unauthorized, Problem(call.messages.problemSignIn()))
                } else {
                    call.respondRedirect("/login")
                }
            }
        }
    }
}

private fun Application.temporarySignKey(): ByteArray {
    log.warn("SESSION_SIGN_KEY is not set. Sessions are signed with a temporary key and end when the app restarts.")
    return ByteArray(SIGN_KEY_BYTES).also(SecureRandom()::nextBytes)
}

suspend fun ApplicationCall.currentUser(users: UserStore): User =
    principal<UserSession>()?.let { users.findActive(it.userId) } ?: error("This route needs authenticate(\"$SESSION_AUTH\").")

fun Route.sessionRoutes(
    users: UserStore,
    registrationOpen: Boolean,
) {
    rateLimit(RateLimitName(LOGIN_LIMIT)) {
        post("/api/session") {
            val login = call.receive<Login>()
            val user: User? = users.check(login.email, login.password)
            if (user == null) return@post call.respond(HttpStatusCode.Unauthorized, Problem(call.messages.problemWrongLogin()))
            call.sessions.set(UserSession(user.id))
            call.respond(user)
        }

        post("/api/users") {
            if (!registrationOpen) return@post call.respond(HttpStatusCode.Forbidden, Problem(call.messages.problemRegistrationClosed()))
            val registration = call.receive<Registration>()
            val user: User? = users.create(registration.email, registration.name, registration.password, Role.MEMBER)
            if (user == null) return@post call.respond(HttpStatusCode.Conflict, Problem(call.messages.problemEmailTaken()))
            call.sessions.set(UserSession(user.id))
            call.respond(HttpStatusCode.Created, user)
        }
    }

    delete("/api/session") {
        call.sessions.clear<UserSession>()
        call.respond(HttpStatusCode.NoContent)
    }

    authenticate(SESSION_AUTH) {
        route("/api/me") {
            get {
                val user: User = call.currentUser(users)
                call.respond(user)
            }

            put {
                val input = call.receive<ProfileInput>()
                val user: User? = users.rename(call.currentUser(users).id, input.name)
                if (user == null) call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingUser())) else call.respond(user)
            }

            put("/password") {
                val change = call.receive<PasswordChange>()
                if (users.changePassword(call.currentUser(users).id, change.current, change.next)) {
                    call.respond(HttpStatusCode.NoContent)
                } else {
                    call.respond(HttpStatusCode.Forbidden, Problem(call.messages.problemWrongPassword()))
                }
            }
        }
    }
}

fun Route.adminRoutes(users: UserStore) {
    authenticate(SESSION_AUTH) {
        route("/api/admin") {
            install(
                createRouteScopedPlugin("AdminOnly") {
                    on(AuthenticationChecked) { call ->
                        val user = call.principal<UserSession>()?.let { users.findActive(it.userId) }
                        if (user?.role != Role.ADMIN) call.respond(HttpStatusCode.Forbidden, Problem(call.messages.problemAdminsOnly()))
                    }
                },
            )

            get("/users") {
                val all: List<User> = users.all()
                call.respond(all)
            }

            put("/users/{id}/role") {
                val change = call.receive<RoleChange>()
                val target = users.find(call.userId())
                if (target == null) return@put call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingUser()))
                if (target.role == Role.ADMIN && change.role != Role.ADMIN && target.active && users.admins() <= 1) {
                    return@put call.respond(HttpStatusCode.Conflict, Problem(call.messages.problemLastAdmin()))
                }
                val user: User? = users.setRole(target.id, change.role)
                if (user == null) call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingUser())) else call.respond(user)
            }

            put("/users/{id}/active") {
                val change = call.receive<ActiveChange>()
                val target = users.find(call.userId())
                if (target == null) return@put call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingUser()))
                if (target.role == Role.ADMIN && target.active && !change.active && users.admins() <= 1) {
                    return@put call.respond(HttpStatusCode.Conflict, Problem(call.messages.problemLastAdmin()))
                }
                val user: User? = users.setActive(target.id, change.active)
                if (user == null) call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingUser())) else call.respond(user)
            }
        }
    }
}

private fun ApplicationCall.userId(): Int = parameters["id"]?.toIntOrNull() ?: -1
