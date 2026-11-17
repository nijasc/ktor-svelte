package io.github.nijasc.ktor.svelte

import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.application.serverConfig
import io.ktor.server.engine.applicationEnvironment
import io.ktor.server.engine.connector
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.request.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import kotlinx.coroutines.runBlocking
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse

class InlinePageDataTest {
    private fun withServer(
        inline: Boolean = true,
        block: (get: (String) -> HttpResponse<String>) -> Unit,
    ) {
        val build = fixtureBuild()
        val server =
            embeddedServer(
                Netty,
                rootConfig =
                    serverConfig(applicationEnvironment {}) {
                        developmentMode = false
                        watchPaths = emptyList()
                        module {
                            install(Svelte) {
                                source = SvelteSource.Directory(build)
                                dev { mode = DevMode.Never }
                                pageLoads {
                                    this.inline = inline
                                    page("/tasks/[id]") {
                                        data("task", "tasks.get")
                                        data("members", "members.list")
                                    }
                                    page("/broken/[id]") { data("thing", "broken.get") }
                                }
                            }
                            routing {
                                get("/api/tasks/{id}") {
                                    val who =
                                        call.request
                                            .header("Cookie")
                                            ?.substringAfter("who=")
                                            .orEmpty()
                                    call.respondText(
                                        """{"id":"${call.parameters["id"]}","who":"$who","title":"</script><b>"}""",
                                        ContentType.Application.Json,
                                    )
                                }
                                get("/api/members") { call.respondText("""["Ada"]""", ContentType.Application.Json) }
                                get("/api/broken/{id}") {
                                    call.respondText(
                                        """{"message":"no"}""",
                                        ContentType.Application.Json,
                                        HttpStatusCode.InternalServerError,
                                    )
                                }
                            }
                        }
                    },
                configure = {
                    connector {
                        host = "127.0.0.1"
                        port = 0
                    }
                },
            )
        server.start(wait = false)
        try {
            val port =
                runBlocking {
                    server.engine
                        .resolvedConnectors()
                        .first()
                        .port
                }
            val http = HttpClient.newHttpClient()
            block { path ->
                http.send(
                    HttpRequest.newBuilder(URI("http://127.0.0.1:$port$path")).header("Cookie", "who=ada").build(),
                    HttpResponse.BodyHandlers.ofString(),
                )
            }
        } finally {
            server.stop(0, 0)
        }
    }

    @Test
    fun `the page arrives with the answers of its loads, as the visitor sees them`() =
        withServer { get ->
            val page = get("/tasks/5")
            assertEquals(200, page.statusCode())
            assertContains(
                page.body(),
                "<script type=\"application/json\" id=\"ktor-svelte-data\">" +
                    "{\"path\":\"/tasks/5\",\"data\":{\"task\":{\"id\":\"5\",\"who\":\"ada\",\"" +
                    "title\":\"\\u003c/script>\\u003cb>\"},\"members\":[\"Ada\"]}}" +
                    "</script>",
            )
            assertContains(page.body(), "<h1>fallback</h1>")
            assertEquals("private, no-store", page.headers().firstValue("Cache-Control").orElse(""))
        }

    @Test
    fun `other pages, failed loads and inline off send the page as it is`() {
        withServer { get ->
            assertFalse(get("/about").body().contains("ktor-svelte-data"))
            val broken = get("/broken/1")
            assertEquals(200, broken.statusCode())
            assertFalse(broken.body().contains("ktor-svelte-data"), "a failed call leaves the load to the browser")
            assertFalse(get("/tasks/5/more").body().contains("ktor-svelte-data"))
        }
        withServer(inline = false) { get -> assertFalse(get("/tasks/5").body().contains("ktor-svelte-data")) }
    }
}
