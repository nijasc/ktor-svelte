package notes

import io.github.nijasc.ktor.svelte.Svelte
import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.routing.routing

fun main() {
    val port = System.getenv("PORT")?.toInt() ?: 8080
    embeddedServer(Netty, port = port, module = Application::module).start(wait = true)
}

fun Application.module() {
    install(Svelte) {
        generateTs = true
        apiDocs = true
        publicConfig(AppConfig(appName = System.getenv("APP_NAME") ?: "ktor-svelte notes"))
        transport {
            json()
            xml()
            compression()
        }
    }

    val store = NoteStore()
    routing {
        noteRoutes(store)
    }
}
