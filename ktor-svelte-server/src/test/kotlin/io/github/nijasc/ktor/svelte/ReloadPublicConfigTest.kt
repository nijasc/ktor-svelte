package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.server.application.install
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import java.util.concurrent.atomic.AtomicInteger
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals

class ReloadPublicConfigTest {
    private fun site(
        developmentMode: Boolean,
        reads: AtomicInteger,
        name: () -> String,
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        serverConfig { this.developmentMode = developmentMode }
        val build = fixtureBuild(files = mapOf("index.html" to "<html><head></head><body>home</body></html>"))
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                publicConfig {
                    reads.incrementAndGet()
                    SiteConfig(name())
                }
            }
        }
        block()
    }

    @Test
    fun `development reads the provider on every request`() {
        var name = "Before"
        val reads = AtomicInteger()
        site(developmentMode = true, reads = reads, name = { name }) {
            assertEquals("""{"name":"Before"}""", client.get("/_ktor-svelte/config.json").bodyAsText())
            val firstPage = client.get("/")
            assertContains(firstPage.bodyAsText(), """{"name":"Before"}""")

            name = "After"
            assertEquals("""{"name":"After"}""", client.get("/_ktor-svelte/config.json").bodyAsText())
            val secondPage = client.get("/")
            assertContains(secondPage.bodyAsText(), """{"name":"After"}""")
            assertNotEquals(firstPage.headers["ETag"], secondPage.headers["ETag"])
        }
    }

    @Test
    fun `production reads the provider once at startup`() {
        var name = "Before"
        val reads = AtomicInteger()
        site(developmentMode = false, reads = reads, name = { name }) {
            client.get("/_ktor-svelte/config.json")
            name = "After"
            assertEquals("""{"name":"Before"}""", client.get("/_ktor-svelte/config.json").bodyAsText())
            assertContains(client.get("/").bodyAsText(), """{"name":"Before"}""")
            assertEquals(1, reads.get())
        }
    }
}
