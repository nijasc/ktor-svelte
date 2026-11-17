package io.github.nijasc.ktor.svelte

import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class ClearSiteDataTest {
    @Test
    fun `the dev panel asks the browser to clear cookies, storage and caches, and nobody else can`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.Always
                    }
                }
            }
            val path = "/_ktor-svelte/dev/clear-site-data"
            val cleared = client.post(path) { header("X-Ktor-Svelte-Dev", "1") }
            assertEquals(HttpStatusCode.NoContent, cleared.status)
            assertEquals("\"cache\", \"cookies\", \"storage\"", cleared.headers["Clear-Site-Data"])
            assertEquals("no-store", cleared.headers[HttpHeaders.CacheControl])

            val forged = client.post(path)
            assertEquals(HttpStatusCode.Forbidden, forged.status)
            assertNull(forged.headers["Clear-Site-Data"])
            val remote =
                client.post(path) {
                    header("X-Ktor-Svelte-Dev", "1")
                    header(HttpHeaders.XForwardedFor, "203.0.113.9")
                }
            assertEquals(HttpStatusCode.Forbidden, remote.status)
        }

    @Test
    fun `without the dev panel there is nothing to clear site data with`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.Always
                        panel = false
                    }
                }
            }
            val response = client.post("/_ktor-svelte/dev/clear-site-data") { header("X-Ktor-Svelte-Dev", "1") }
            assertNull(response.headers["Clear-Site-Data"])
        }
}
