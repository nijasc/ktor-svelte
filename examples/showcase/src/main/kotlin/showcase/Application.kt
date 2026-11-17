package showcase

import io.github.nijasc.ktor.svelte.EnvironmentScope
import io.github.nijasc.ktor.svelte.Svelte
import io.github.nijasc.ktor.svelte.SvelteRouting
import io.github.nijasc.ktor.svelte.environment
import io.github.nijasc.ktor.svelte.startupStep
import io.github.nijasc.ktor.svelte.svelte
import io.github.nijasc.ktorsvelte.messages
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationStopped
import io.ktor.server.application.install
import io.ktor.server.application.log
import io.ktor.server.auth.authenticate
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.routing.routing
import io.ktor.server.sessions.get
import io.ktor.server.sessions.sessions
import java.nio.file.Path
import kotlin.time.Duration.Companion.minutes
import kotlinx.coroutines.runBlocking

private const val LOGIN_ATTEMPTS_PER_MINUTE = 10
private const val MULTIPART_OVERHEAD_BYTES = 64L * 1024L

private val PUBLIC_PATHS =
    listOf(
        "/",
        "/login",
        "/register",
        "/about",
        "/_app/*",
        "/favicon.ico",
        "/favicon.svg",
        "/favicon.png",
        "/apple-touch-icon.png",
        "/robots.txt",
        "/sitemap.xml",
    )

enum class SignUps { Open, Closed }

class ShowcaseEnvironment(
    env: EnvironmentScope,
) {
    val port = env.int("PORT", "Port the server listens on", default = 8080)
    val dataDirectory = env.string("SHOWCASE_DATA", "Folder for the database and the uploaded files", default = "build/showcase-data")
    val registration = env.oneOf<SignUps>("SHOWCASE_REGISTRATION", "Whether new people can create an account", default = SignUps.Open)
    val loginAttempts = env.int("SHOWCASE_LOGIN_ATTEMPTS", "Sign-in attempts allowed per minute", default = LOGIN_ATTEMPTS_PER_MINUTE)
    val insecureCookies = env.boolean("SHOWCASE_INSECURE_COOKIES", "Sends the session cookie over plain HTTP too", default = false)
    val siteUrl = env.optional("SHOWCASE_SITE_URL", "Public address of the site, for the sitemap", example = "https://showcase.example.com")
    val appName = env.string("APP_NAME", "Name shown in the header", default = "ktor-svelte showcase")
    val sessionSignKey = env.optionalSecret("SESSION_SIGN_KEY", "Hex key that signs the session cookie. Without it, sessions end with each restart")
}

val showcaseEnvironment: ShowcaseEnvironment by lazy { environment(declare = ::ShowcaseEnvironment) }

fun main() {
    embeddedServer(Netty, port = showcaseEnvironment.port, module = Application::module).start(wait = true)
}

fun Application.module() {
    val env = showcaseEnvironment
    val dataDirectory = Path.of(env.dataDirectory)
    val database = startupStep("Database") { AppDatabase(dataDirectory) }
    monitor.subscribe(ApplicationStopped) { database.close() }
    val users = UserStore()
    val tasks = TaskStore(users, dataDirectory.resolve("files"))
    val registrationOpen = env.registration == SignUps.Open
    val loginAttempts = env.loginAttempts
    startupStep("Demo data") { runBlocking { seedDemoData(users, tasks, log) } }

    configureAuth(users, secureCookies = !developmentMode && !env.insecureCookies, signKey = env.sessionSignKey)

    install(Svelte) {
        routing = SvelteRouting.Manual
        generateTs = true
        apiDocs = true
        healthEndpoint = true
        healthCheck { database.isReachable() }
        constants(BoardLimits)
        idempotency()
        cookies(OnlyMineCookie)
        currentUser<User>(signInMessage = { it.messages.problemSignIn() }) {
            sessions.get<UserSession>()?.let { users.findActive(it.userId) }
        }
        errorCodes<AccountError> { call, code ->
            when (code) {
                AccountError.EmailTaken -> call.messages.problemEmailTaken()
                AccountError.WrongPassword -> call.messages.problemWrongPassword()
                AccountError.LastAdmin -> call.messages.problemLastAdmin()
            }
        }
        siteUrl = env.siteUrl
        maxApiBodySize = MAX_UPLOAD_BYTES + MULTIPART_OVERHEAD_BYTES
        paramRoutes("/tasks/[id]")
        publicConfig(
            AppConfig(
                appName = env.appName,
                maxUploadBytes = MAX_UPLOAD_BYTES,
                registrationOpen = registrationOpen,
            ),
        )
        errorResponse<Problem>(HttpStatusCode.Unauthorized, HttpStatusCode.Forbidden)
        rateLimit {
            limit(LOGIN_LIMIT, requests = loginAttempts, per = 1.minutes)
        }
        transport {
            json()
            compression()
        }
    }

    routing {
        publicRoutes()
        sessionRoutes(users, registrationOpen)
        adminRoutes(users)
        authenticate(SESSION_AUTH) {
            taskRoutes(tasks, users)
        }
        svelte(public = PUBLIC_PATHS)
        authenticate(SESSION_AUTH) {
            svelte()
        }
    }
}
