package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsBytes
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import java.util.zip.GZIPInputStream
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull

@Serializable
data class SiteConfig(
    val name: String,
)

class InlinePublicConfigTest {
    private val element = """<script type="application/json" id="ktor-svelte-config">"""

    private fun site(
        config: SvelteConfig.() -> Unit = { publicConfig(SiteConfig("Shop </script><script>alert(1)")) },
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build =
            fixtureBuild(
                files =
                    mapOf(
                        "index.html" to "<html><head><title>x</title></head><body>home</body></html>",
                        "about.html" to "about",
                        "app.js" to "go()",
                    ),
            )
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.NEVER }
                config()
            }
        }
        block()
    }

    @Test
    fun `pages carry the config right after head, escaped`() =
        site {
            val html = client.get("/").bodyAsText()
            assertContains(html, "<head>$element{\"name\":\"Shop \\u003c/script>\\u003cscript>alert(1)\"}</script><title>")
            assertFalse(html.contains("</script><script>alert"))
        }

    @Test
    fun `pages without a head tag get the config first`() =
        site {
            assertEquals(true, client.get("/about").bodyAsText().startsWith(element))
        }

    @Test
    fun `gzip, ETags and 304 work for pages with the config`() =
        site {
            val zipped = client.get("/") { header(HttpHeaders.AcceptEncoding, "gzip") }
            assertEquals("gzip", zipped.headers[HttpHeaders.ContentEncoding])
            assertContains(GZIPInputStream(zipped.bodyAsBytes().inputStream()).readBytes().decodeToString(), element)
            val eTag = assertNotNull(client.get("/").headers[HttpHeaders.ETag])
            assertContains(eTag, "-c")
            assertEquals(HttpStatusCode.NotModified, client.get("/") { header(HttpHeaders.IfNoneMatch, eTag) }.status)
            assertNotNull(client.get("/").headers["Content-Security-Policy"])
        }

    @Test
    fun `files and apps without public config are untouched`() {
        site {
            assertEquals("go()", client.get("/app.js").bodyAsText())
        }
        site({}) {
            assertFalse(client.get("/").bodyAsText().contains(element))
        }
        site({
            publicConfig(SiteConfig("x"))
            inlinePublicConfig = false
        }) {
            assertFalse(client.get("/").bodyAsText().contains(element))
        }
    }
}
