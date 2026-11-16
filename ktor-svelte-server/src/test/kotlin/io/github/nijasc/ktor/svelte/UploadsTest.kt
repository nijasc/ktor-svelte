package io.github.nijasc.ktor.svelte

import io.ktor.client.request.forms.MultiPartFormDataContent
import io.ktor.client.request.forms.formData
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.Headers
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import org.junit.jupiter.api.io.TempDir
import java.nio.file.Path
import kotlin.io.path.createDirectories
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class UploadsTest {
    @TempDir
    lateinit var dir: Path

    private class Sent(
        val name: String,
        val type: String,
        val size: Int = 4,
    )

    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            dir.resolve("package.json").writeText("{}")
            dir.resolve("src/lib").createDirectories()
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    generateTs = true
                    generateTsOutput = dir.resolve("src/lib/api").toString()
                }
                routing {
                    post("/api/files") {
                        val files = call.receiveUploads()
                        call.respondText(files.joinToString { "${it.field}=${it.fileName}:${it.contentType}:${it.size}" })
                    }.uploadRules(maxSize = 10, types = listOf("text/*", ".csv"), maxFiles = 2)
                    post("/api/anything") {
                        call.respondText(call.receiveUploads().joinToString { "${it.fileName}:${it.size}" })
                    }
                }
            }
            block()
        }

    private suspend fun ApplicationTestBuilder.send(
        path: String,
        vararg files: Sent,
    ): HttpResponse =
        client.post(path) {
            setBody(
                MultiPartFormDataContent(
                    formData {
                        append("note", "just text")
                        files.forEach { file ->
                            append(
                                "file",
                                ByteArray(file.size) { 'x'.code.toByte() },
                                Headers.build {
                                    append(HttpHeaders.ContentType, file.type)
                                    append(HttpHeaders.ContentDisposition, "filename=\"${file.name}\"")
                                },
                            )
                        }
                    },
                ),
            )
        }

    @Test
    fun `files within the rules arrive with their name, type and bytes`() =
        app {
            val response = send("/api/files", Sent("a.txt", "text/plain; charset=utf-8"), Sent("b.csv", "application/octet-stream", 10))
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("file=a.txt:text/plain:4, file=b.csv:application/octet-stream:10", response.bodyAsText())
        }

    @Test
    fun `a file that breaks a rule is refused with a status, a code and a message that names it`() =
        app {
            val large = send("/api/files", Sent("big.txt", "text/plain", 11))
            assertEquals(HttpStatusCode.PayloadTooLarge, large.status)
            assertEquals("""{"message":"big.txt is larger than 10 bytes.","code":"upload.tooLarge","file":"big.txt"}""", large.bodyAsText())

            val type = send("/api/files", Sent("photo.png", "image/png"))
            assertEquals(HttpStatusCode.UnsupportedMediaType, type.status)
            assertEquals(
                """{"message":"photo.png is not an accepted file type.","code":"upload.type","file":"photo.png"}""",
                type.bodyAsText(),
            )

            val many = send("/api/files", Sent("a.txt", "text/plain"), Sent("b.txt", "text/plain"), Sent("c.txt", "text/plain"))
            assertEquals(HttpStatusCode.BadRequest, many.status)
            assertEquals("""{"message":"At most 2 files can be sent at once.","code":"upload.tooMany"}""", many.bodyAsText())
        }

    @Test
    fun `a route without rules takes whatever is sent`() =
        app {
            assertEquals("photo.png:2000", send("/api/anything", Sent("photo.png", "image/png", 2000)).bodyAsText())
        }

    @Test
    fun `the rules reach the generated client`() =
        app {
            startApplication()
            val services = dir.resolve("src/lib/api/services.ts").readText()
            assertContains(services, "body: FormData, options?: RequestOptions) => request<")
            assertContains(
                services,
                "{ ...options, body, upload: { maxBytes: 10, types: ['text/*', '.csv'], maxFiles: 2 }, operation: 'files.create' }",
            )
            assertContains(
                services,
                "export const uploadRules = {\n    'files.create': { maxBytes: 10, types: ['text/*', '.csv'], maxFiles: 2 },\n} as const;",
            )
            assertFalse("'anything.create': {" in services)
        }

    @Test
    fun `types are media types, families or file endings, and sizes read naturally`() {
        assertTrue(acceptsFile(emptyList(), "", null))
        assertTrue(acceptsFile(listOf("image/*"), "IMAGE/PNG", "a.png"))
        assertFalse(acceptsFile(listOf("image/*"), "imagex/png", "a.png"))
        assertTrue(acceptsFile(listOf("application/pdf"), "application/pdf", null))
        assertTrue(acceptsFile(listOf(".CSV"), "", "Export.csv"))
        assertFalse(acceptsFile(listOf(".csv"), "text/csv", "export.txt"))
        assertEquals(
            listOf("900 bytes", "1 KiB", "1.5 KiB", "5 MiB", "2.3 MiB"),
            listOf(900L, 1024L, 1536L, 5242880L, 2411725L).map(::readableSize),
        )
        assertEquals("Only one file can be sent at once.", tooMany(1).message)
    }

    @Test
    fun `rules that make no sense are refused when the route is declared`() {
        val failure =
            assertFailsWith<IllegalArgumentException> {
                testApplication {
                    application { routing { post("/api/x") {}.uploadRules(types = listOf("images")) } }
                    startApplication()
                }
            }
        assertContains(failure.message.orEmpty(), "types are media types such as")
    }
}
