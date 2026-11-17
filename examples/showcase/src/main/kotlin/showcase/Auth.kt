package showcase

import io.github.nijasc.ktor.svelte.currentUserChanged
import io.github.nijasc.ktor.svelte.fieldCheck
import io.github.nijasc.ktor.svelte.requireUser
import io.github.nijasc.ktor.svelte.respondError
import io.github.nijasc.ktor.svelte.respondLoginRedirect
import io.github.nijasc.ktor.svelte.svelteLocale
import io.github.nijasc.ktorsvelte.Emails
import io.github.nijasc.ktorsvelte.FrontendRoutes
import io.github.nijasc.ktorsvelte.RenderedEmail
import io.github.nijasc.ktorsvelte.emails
import io.github.nijasc.ktorsvelte.messages
import io.ktor.http.HttpStatusCode
import io.ktor.http.encodedPath
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.install
import io.ktor.server.application.log
import io.ktor.server.auth.Authentication
import io.ktor.server.auth.authenticate
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
import io.ktor.server.util.url
import io.ktor.util.hex
import java.security.SecureRandom
import java.time.Instant
import kotlinx.serialization.Serializable

const val SESSION_AUTH = "session"
const val LOGIN_LIMIT = "login"
private const val SESSION_COOKIE = "showcase_session"
private const val SIGN_KEY_BYTES = 32

@Serializable
data class UserSession(
    val userId: Int,
    val endsAt: Long = 0,
) {
    val ends: Instant get() = Instant.ofEpochSecond(endsAt)
    val current: Boolean get() = Instant.now().isBefore(ends)
}

class SessionLength(
    val seconds: Long,
) {
    fun start(userId: Int): UserSession = UserSession(userId, Instant.now().epochSecond + seconds)
}

fun Application.configureAuth(
    users: UserStore,
    secureCookies: Boolean,
    signKey: String?,
    length: SessionLength,
) {
    val signKey = signKey?.let(::hex) ?: temporarySignKey()
    install(Sessions) {
        cookie<UserSession>(SESSION_COOKIE) {
            cookie.path = "/"
            cookie.httpOnly = true
            cookie.secure = secureCookies
            cookie.maxAgeInSeconds = length.seconds
            cookie.extensions["SameSite"] = "Lax"
            transform(SessionTransportTransformerMessageAuthentication(signKey))
        }
    }
    install(Authentication) {
        session<UserSession>(SESSION_AUTH) {
            validate { session -> session.takeIf { it.current && users.findActive(it.userId) != null } }
            challenge {
                if (call.request.path().startsWith("/api/")) {
                    call.respond(HttpStatusCode.Unauthorized, Problem(call.messages.problemSignIn()))
                } else {
                    call.respondLoginRedirect()
                }
            }
        }
    }
}

private fun Application.temporarySignKey(): ByteArray {
    log.warn("SESSION_SIGN_KEY is not set. Sessions are signed with a temporary key and end when the app restarts.")
    return ByteArray(SIGN_KEY_BYTES).also(SecureRandom()::nextBytes)
}

fun Route.sessionRoutes(
    users: UserStore,
    registrationOpen: Boolean,
    length: SessionLength,
) {
    rateLimit(RateLimitName(LOGIN_LIMIT)) {
        fieldCheck("/api/checks/email") { email -> call.messages.problemEmailTaken().takeIf { users.isTaken(email) } }
        post("/api/session") {
            val login = call.receive<Login>()
            val user: User? = users.check(login.email, login.password)
            if (user == null) return@post call.respond(HttpStatusCode.Unauthorized, Problem(call.messages.problemWrongLogin()))
            call.sessions.set(length.start(user.id))
            call.currentUserChanged()
            call.respond(user)
        }

        post("/api/users") {
            if (!registrationOpen) return@post call.respond(HttpStatusCode.Forbidden, Problem(call.messages.problemRegistrationClosed()))
            val registration = call.receive<Registration>()
            val user: User? = users.create(registration.email, registration.name, registration.password, Role.MEMBER)
            if (user == null) return@post call.respondError(AccountError.EmailTaken, HttpStatusCode.Conflict)
            val welcome = call.welcomeEmail(Emails.forLocale(call.svelteLocale), user.name)
            call.application.log.info("Welcome email for {}: {}", user.email, welcome.subject)
            call.sessions.set(length.start(user.id))
            call.currentUserChanged()
            call.respond(HttpStatusCode.Created, user)
        }
    }

    delete("/api/session") {
        call.sessions.clear<UserSession>()
        call.currentUserChanged()
        call.respond(HttpStatusCode.NoContent)
    }

    authenticate(SESSION_AUTH) {
        route("/api/me") {
            get {
                val user: User = call.requireUser<User>()
                call.respond(user)
            }

            put {
                val input = call.receive<ProfileInput>()
                val user: User? = users.rename(call.requireUser<User>().id, input.name)
                if (user == null) return@put call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingUser()))
                call.currentUserChanged()
                call.respond(user)
            }

            put("/password") {
                val change = call.receive<PasswordChange>()
                if (users.changePassword(call.requireUser<User>().id, change.current, change.next)) {
                    call.respond(HttpStatusCode.NoContent)
                } else {
                    call.respondError(AccountError.WrongPassword, HttpStatusCode.Forbidden)
                }
            }
        }
    }
}

fun Route.adminRoutes(users: UserStore) {
    authenticate(SESSION_AUTH) {
        route("/api/admin") {
            get("/emails/welcome") {
                val welcome =
                    call.welcomeEmail(
                        call.emails,
                        call.request.queryParameters["name"] ?: call.requireUser<User>().name,
                    )
                val preview: EmailPreview = EmailPreview(welcome.subject, welcome.html, welcome.text)
                call.respond(preview)
            }

            get("/users") {
                val all: List<User> = users.all()
                call.respond(all)
            }

            put("/users/{id}/role") {
                val change = call.receive<RoleChange>()
                val target = users.find(call.userId())
                if (target == null) return@put call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingUser()))
                if (target.role == Role.ADMIN && change.role != Role.ADMIN && target.active && users.admins() <= 1) {
                    return@put call.respondError(AccountError.LastAdmin, HttpStatusCode.Conflict)
                }
                val user: User? = users.setRole(target.id, change.role)
                if (user == null) call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingUser())) else call.respond(user)
            }

            put("/users/{id}/active") {
                val change = call.receive<ActiveChange>()
                val target = users.find(call.userId())
                if (target == null) return@put call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingUser()))
                if (target.role == Role.ADMIN && target.active && !change.active && users.admins() <= 1) {
                    return@put call.respondError(AccountError.LastAdmin, HttpStatusCode.Conflict)
                }
                val user: User? = users.setActive(target.id, change.active)
                if (user == null) call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingUser())) else call.respond(user)
            }
        }
    }
}

private fun ApplicationCall.welcomeEmail(
    emails: Emails,
    name: String,
): RenderedEmail = emails.welcome(name = name, boardLink = url { encodedPath = FrontendRoutes.board })

private fun ApplicationCall.userId(): Int = parameters["id"]?.toIntOrNull() ?: -1
