package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.server.application.install
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull

class InstallableAppTest {
    @Test
    fun `the manifest, the service worker and the icons are served with their types and are always revalidated`() =
        testApplication {
            val build =
                fixtureBuild(
                    mapOf(
                        "index.html" to "<h1>home</h1>",
                        "200.html" to "<h1>fallback</h1>",
                        "service-worker.js" to "self.addEventListener('fetch', () => {});",
                        "ktor-svelte/manifest.webmanifest" to "{\"name\":\"Notes\"}",
                        "ktor-svelte/icon-192.png" to "png",
                    ),
                )
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
            }
            val manifest = client.get("/ktor-svelte/manifest.webmanifest")
            assertEquals(HttpStatusCode.OK, manifest.status)
            assertEquals(ContentType("application", "manifest+json"), manifest.contentType()?.withoutParameters())
            assertEquals("no-cache", manifest.headers[HttpHeaders.CacheControl])

            val worker = client.get("/service-worker.js")
            assertEquals("self.addEventListener('fetch', () => {});", worker.bodyAsText())
            assertEquals("javascript", assertNotNull(worker.contentType()).contentSubtype)
            assertEquals("no-cache", worker.headers[HttpHeaders.CacheControl])

            val icon = client.get("/ktor-svelte/icon-192.png")
            assertEquals(ContentType.Image.PNG, icon.contentType())
            assertEquals("no-cache", icon.headers[HttpHeaders.CacheControl])
        }
}
