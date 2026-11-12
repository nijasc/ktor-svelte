package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.server.application.createApplicationPlugin
import io.ktor.server.application.hooks.CallFailed
import io.ktor.server.application.install
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse

class ErrorDetailsTest {
    private fun errorTest(
        development: Boolean = false,
        statusPages: Boolean = false,
        configure: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild()
        serverConfig { developmentMode = development }
        application {
            if (statusPages) {
                install(
                    createApplicationPlugin("StatusPages") {
                        on(CallFailed) { call, _ -> call.respondText("custom", status = HttpStatusCode.InternalServerError) }
                    },
                )
            }
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                transport { json() }
                configure()
            }
            routing {
                get("/api/boom") { error("db password is hunter2") }
                get("/boom") { error("db password is hunter2") }
                post("/api/greeting") { call.respond(call.receive<Greeting>()) }
            }
        }
        block()
    }

    @Test
    fun `unhandled api errors answer a generic json message in production`() =
        errorTest {
            val response = client.get("/api/boom")
            assertEquals(HttpStatusCode.InternalServerError, response.status)
            assertEquals("""{"message":"Internal Server Error."}""", response.bodyAsText())
        }

    @Test
    fun `unhandled page errors answer plain text without details`() =
        errorTest {
            val response = client.get("/boom")
            assertEquals(HttpStatusCode.InternalServerError, response.status)
            assertEquals("Internal Server Error.", response.bodyAsText())
        }

    @Test
    fun `malformed and unconvertible bodies keep their status but not the class name`() =
        errorTest {
            val malformed =
                client.post("/api/greeting") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"message":""")
                }
            val plain = client.post("/api/greeting") { setBody("""{"message":"hi"}""") }
            assertEquals(HttpStatusCode.BadRequest, malformed.status)
            assertEquals("""{"message":"Bad Request."}""", malformed.bodyAsText())
            assertEquals(HttpStatusCode.UnsupportedMediaType, plain.status)
            assertFalse("Greeting" in plain.bodyAsText())
        }

    @Test
    fun `an installed StatusPages keeps full control`() =
        errorTest(statusPages = true) {
            assertEquals("custom", client.get("/api/boom").bodyAsText())
        }

    @Test
    fun `details can be shown again`() =
        errorTest(configure = { hideErrorDetails = false }) {
            val response = client.get("/api/boom")
            assertEquals(HttpStatusCode.InternalServerError, response.status)
            assertEquals("db password is hunter2", response.bodyAsText())
        }

    @Test
    fun `development mode keeps the details for debugging`() =
        errorTest(development = true) {
            assertContains(client.get("/api/boom").bodyAsText(), "db password is hunter2")
        }
}
