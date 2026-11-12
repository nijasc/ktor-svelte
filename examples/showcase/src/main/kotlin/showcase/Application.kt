package showcase

import io.github.nijasc.ktor.svelte.Svelte
import io.github.nijasc.ktor.svelte.SvelteRouting
import io.github.nijasc.ktor.svelte.svelte
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationStopped
import io.ktor.server.application.install
import io.ktor.server.application.log
import io.ktor.server.auth.authenticate
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.routing.routing
import kotlinx.coroutines.runBlocking
import java.nio.file.Path
import kotlin.time.Duration.Companion.minutes

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

fun main() {
    val port = System.getenv("PORT")?.toInt() ?: 8080
    embeddedServer(Netty, port = port, module = Application::module).start(wait = true)
}

fun Application.module() {
    val dataDirectory = Path.of(System.getenv("SHOWCASE_DATA") ?: "build/showcase-data")
    val database = AppDatabase(dataDirectory)
    monitor.subscribe(ApplicationStopped) { database.close() }
    val users = UserStore()
    val tasks = TaskStore(users, dataDirectory.resolve("files"))
    val registrationOpen = System.getenv("SHOWCASE_REGISTRATION") != "closed"
    val loginAttempts = System.getenv("SHOWCASE_LOGIN_ATTEMPTS")?.toIntOrNull() ?: LOGIN_ATTEMPTS_PER_MINUTE
    runBlocking { seedDemoData(users, tasks, log) }

    configureAuth(users, secureCookies = !developmentMode && System.getenv("SHOWCASE_INSECURE_COOKIES") != "true")

    install(Svelte) {
        routing = SvelteRouting.Manual
        generateTs = true
        apiDocs = true
        healthEndpoint = true
        healthCheck { database.isReachable() }
        siteUrl = System.getenv("SHOWCASE_SITE_URL")
        maxApiBodySize = MAX_UPLOAD_BYTES + MULTIPART_OVERHEAD_BYTES
        paramRoutes("/tasks/[id]")
        publicConfig(
            AppConfig(
                appName = System.getenv("APP_NAME") ?: "ktor-svelte showcase",
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
