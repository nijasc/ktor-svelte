package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.testing.testApplication
import java.nio.file.Files
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class StartupTest {
    private val emptyClassLoader = java.net.URLClassLoader(emptyArray(), null)

    @Test
    fun `missing build fails at startup in production`() {
        val failure =
            assertFailsWith<IllegalStateException> {
                testApplication {
                    serverConfig { developmentMode = false }
                    environment {
                        classLoader = emptyClassLoader
                    }
                    application {
                        install(Svelte) { dev { mode = DevMode.Never } }
                    }
                    client.get("/")
                }
            }
        assertTrue(failure.message.orEmpty().contains("found no frontend build"))
    }

    @Test
    fun `missing build returns 503 on frontend routes in development mode`() =
        testApplication {
            serverConfig { developmentMode = true }
            environment { classLoader = emptyClassLoader }
            application {
                install(Svelte) { dev { mode = DevMode.Never } }
            }
            val response = client.get("/")
            assertEquals(HttpStatusCode.ServiceUnavailable, response.status)
            assertTrue(response.bodyAsText().contains("found no frontend build"))
            assertEquals(HttpStatusCode.NotFound, client.get("/api/x").status)
        }

    @Test
    fun `unknown manifest format version fails at startup`() {
        val failure =
            assertFailsWith<IllegalStateException> {
                testApplication {
                    serverConfig { developmentMode = true }
                    environment {
                        classLoader = classLoaderWithManifest("""{"formatVersion":99,"files":{}}""")
                    }
                    application {
                        install(Svelte) { dev { mode = DevMode.Never } }
                    }
                    client.get("/")
                }
            }
        assertTrue(failure.message.orEmpty().contains("format version 99"))
    }

    @Test
    fun `directory without html counts as a missing build`() =
        testApplication {
            serverConfig { developmentMode = true }
            val empty = Files.createTempDirectory("ktor-svelte-empty")
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(empty)
                    dev { mode = DevMode.Never }
                }
            }
            assertEquals(HttpStatusCode.ServiceUnavailable, client.get("/").status)
        }
}
