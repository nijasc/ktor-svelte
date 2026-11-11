package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

class RouteTableTest {
    private fun app(
        development: Boolean,
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        serverConfig { developmentMode = development }
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.NEVER }
                paramRoutes("/notes/[id]")
            }
            routing {
                get("/api/notes") { call.respondText("list") }
                post("/api/notes") { call.respondText("create") }
                get("/about") { call.respondText("hides the page") }
            }
        }
        block()
    }

    @Test
    fun `development shows routes, sources and pages`() =
        app(development = true) {
            val html = client.get("/_ktor-svelte/routes").bodyAsText()
            assertContains(html, "<code>/api/notes</code>")
            assertContains(html, "RouteTableTest.kt:")
            assertContains(html, "hides about.html")
            assertContains(html, "<code>/docs/</code>")
            assertContains(html, "<code>/notes/[id]</code>")
        }

    @Test
    fun `the table is also available as JSON`() =
        app(development = true) {
            val json =
                Json
                    .parseToJsonElement(client.get("/_ktor-svelte/routes") { header(HttpHeaders.Accept, "application/json") }.bodyAsText())
                    .jsonObject
            val routes = json.getValue("routes").jsonArray.map { it.jsonObject }
            val create = routes.single { it.getValue("method").jsonPrimitive.content == "POST" }
            assertEquals("/api/notes", create.getValue("path").jsonPrimitive.content)
            assertEquals("true", create.getValue("api").jsonPrimitive.content)
            assertContains(json.getValue("pages").toString(), "\"/about\"")
        }

    @Test
    fun `production has no route table`() =
        app(development = false) {
            assertEquals(HttpStatusCode.NotFound, client.get("/_ktor-svelte/routes").status)
        }
}
