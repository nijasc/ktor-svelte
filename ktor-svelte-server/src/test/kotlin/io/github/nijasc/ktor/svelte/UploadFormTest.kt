package io.github.nijasc.ktor.svelte

import io.ktor.client.request.forms.FormBuilder
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

class UploadFormTest {
    @TempDir
    lateinit var dir: Path

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
                    post("/api/documents") {
                        val form = call.receiveForm()
                        val cover = form.file("cover")
                        val pages = form.files("pages").joinToString(",") { it.fileName.orEmpty() }
                        call.respondText(
                            "${form.text("title")}|${form.textOrNull("note")}|${cover.fileName}:${cover.size}|$pages|${form.allFiles.size}",
                        )
                    }.uploadForm(maxSize = 10, types = listOf("text/*"), maxFiles = 3) {
                        text("title")
                        text("note", required = false)
                        file("cover")
                        files("pages")
                    }
                    post("/api/loose") {
                        val form = call.receiveForm()
                        call.respondText("${form.textOrNull("anything")}|${form.fileOrNull("whatever")?.fileName}")
                    }
                    post("/api/avatar") {
                        call.respondText(
                            call
                                .receiveForm()
                                .file("avatar")
                                .fileName
                                .orEmpty(),
                        )
                    }.uploadForm { file("avatar") }
                }
            }
            block()
        }

    private fun FormBuilder.file(
        field: String,
        name: String,
        size: Int = 4,
        type: String = "text/plain",
    ) {
        append(
            field,
            ByteArray(size) { 'a'.code.toByte() },
            Headers.build {
                append(HttpHeaders.ContentType, type)
                append(HttpHeaders.ContentDisposition, "filename=\"$name\"")
            },
        )
    }

    private suspend fun ApplicationTestBuilder.send(
        path: String = "/api/documents",
        fields: FormBuilder.() -> Unit,
    ): HttpResponse = client.post(path) { setBody(MultiPartFormDataContent(formData(fields))) }

    @Test
    fun `a form is read by field, with its text and its files`() =
        app {
            val all =
                send {
                    append("title", "Report")
                    append("note", "draft")
                    file("cover", "cover.txt")
                    file("pages", "one.txt", size = 1)
                    file("pages", "two.txt", size = 2)
                }
            assertEquals("Report|draft|cover.txt:4|one.txt,two.txt|3", all.bodyAsText())
            val least =
                send {
                    append("title", "Report")
                    file("cover", "cover.txt")
                }
            assertEquals("Report|null|cover.txt:4||1", least.bodyAsText())
        }

    @Test
    fun `a missing required field, an unknown field and a field of the wrong kind are refused by name`() =
        app {
            val missing = send { append("title", "Report") }
            assertEquals(HttpStatusCode.BadRequest, missing.status)
            assertEquals("""{"message":"'cover' is required.","code":"upload.missing"}""", missing.bodyAsText())

            val unknown =
                send {
                    append("title", "Report")
                    append("titel", "typo")
                    file("cover", "cover.txt")
                }
            assertEquals("""{"message":"'titel' is not a field of this form.","code":"upload.field"}""", unknown.bodyAsText())

            val textAsFile =
                send {
                    file("title", "title.txt")
                    file("cover", "cover.txt")
                }
            assertEquals("""{"message":"'title' takes text.","code":"upload.field"}""", textAsFile.bodyAsText())
            val fileAsText =
                send {
                    append("title", "Report")
                    append("cover", "not a file")
                }
            assertEquals("""{"message":"'cover' takes a file.","code":"upload.field"}""", fileAsText.bodyAsText())
            val twoCovers =
                send {
                    append("title", "Report")
                    file("cover", "a.txt")
                    file("cover", "b.txt")
                }
            assertEquals("""{"message":"'cover' takes one file.","code":"upload.field"}""", twoCovers.bodyAsText())
        }

    @Test
    fun `the rules of the form apply to every file in it`() =
        app {
            val large =
                send {
                    append("title", "Report")
                    file("cover", "cover.txt", size = 11)
                }
            assertEquals(HttpStatusCode.PayloadTooLarge, large.status)
            val wrong =
                send {
                    append("title", "Report")
                    file("cover", "cover.png", type = "image/png")
                }
            assertEquals(HttpStatusCode.UnsupportedMediaType, wrong.status)
            val many =
                send {
                    append("title", "Report")
                    file("cover", "cover.txt")
                    repeat(3) { file("pages", "page$it.txt") }
                }
            assertContains(many.bodyAsText(), """"code":"upload.tooMany"""")
        }

    @Test
    fun `a route without a declared form takes any field`() =
        app {
            val loose =
                send("/api/loose") {
                    append("anything", "goes")
                    file("whatever", "w.bin", type = "application/octet-stream")
                }
            assertEquals("goes|w.bin", loose.bodyAsText())
        }

    @Test
    fun `a form that cannot work is refused where it is declared`() {
        val builder = UploadFormBuilder()
        builder.file("cover")
        assertContains(
            assertFailsWith<IllegalArgumentException> { builder.text("cover") }.message.orEmpty(),
            "the field 'cover' is declared twice",
        )
        assertContains(assertFailsWith<IllegalArgumentException> { builder.text("my field") }.message.orEmpty(), "is not a field name")
    }

    @Test
    fun `the generated function takes the fields by name and type`() =
        app {
            startApplication()
            val services = dir.resolve("src/lib/api/services.ts").readText()
            assertContains(
                services,
                "export const documentsCreate = (body: { title: string; note?: string; cover: File; pages?: File[] }, options?: RequestOptions) =>",
            )
            assertContains(
                services,
                "{ ...options, body, upload: { maxBytes: 10, types: ['text/*'], maxFiles: 3 }, multipart: true, operation: 'documents.create' }",
            )
            assertContains(services, "export const avatarCreate = (body: { avatar: File }, options?: RequestOptions) =>")
            assertContains(services, "{ ...options, body, multipart: true, operation: 'avatar.create' }")
            assertContains(services, "export const looseCreate = (options?: RequestOptions) =>")
        }
}
