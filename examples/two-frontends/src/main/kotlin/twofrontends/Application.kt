package twofrontends

import io.github.nijasc.ktor.svelte.Svelte
import io.ktor.http.HttpStatusCode
import io.ktor.openapi.jsonSchema
import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.response.respond
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.describe
import io.ktor.server.routing.routing
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.Serializable

@Serializable
data class Greeting(
    val message: String,
)

fun main() {
    val port = System.getenv("PORT")?.toInt() ?: 8080
    embeddedServer(Netty, port = port, module = Application::module).start(wait = true)
}

@OptIn(ExperimentalKtorApi::class)
fun Application.module() {
    install(Svelte) {
        generateTs = true
        transport { json() }
        frontend("/admin")
    }

    routing {
        get("/api/greeting") {
            call.respond(Greeting("Hello from Ktor"))
        }.describe {
            responses { HttpStatusCode.OK { schema = jsonSchema<Greeting>() } }
        }
    }
}
