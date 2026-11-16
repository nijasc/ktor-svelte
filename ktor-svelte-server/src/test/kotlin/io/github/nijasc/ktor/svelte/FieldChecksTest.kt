package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
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

class FieldChecksTest {
    @TempDir
    lateinit var dir: Path

    private val calls = mutableListOf<String>()

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
                    fieldCheck("/api/checks/email") { email ->
                        calls += email
                        if (email == "ada@example.com") "That email already has an account." else null
                    }
                }
            }
            block()
        }

    @Test
    fun `a check answers with a message or with none, and is never cached`() =
        app {
            val taken = client.get("/api/checks/email?value=ada%40example.com")
            assertEquals(HttpStatusCode.OK, taken.status)
            assertEquals("""{"message":"That email already has an account."}""", taken.bodyAsText())
            assertEquals("no-store", taken.headers[HttpHeaders.CacheControl])
            assertContains(taken.headers[HttpHeaders.ContentType].orEmpty(), "application/json")
            assertEquals("""{"message":null}""", client.get("/api/checks/email?value=new%40example.com").bodyAsText())
            assertEquals(listOf("ada@example.com", "new@example.com"), calls)
        }

    @Test
    fun `an empty value is fine without asking, and an endless one is refused`() =
        app {
            assertEquals("""{"message":null}""", client.get("/api/checks/email").bodyAsText())
            assertEquals("""{"message":null}""", client.get("/api/checks/email?value=").bodyAsText())
            val endless = client.get("/api/checks/email?value=" + "a".repeat(1001))
            assertEquals(HttpStatusCode.BadRequest, endless.status)
            assertEquals(emptyList(), calls)
        }

    @Test
    fun `the check is a typed function of the generated client`() =
        app {
            startApplication()
            val services = dir.resolve("src/lib/api/services.ts").readText()
            assertContains(
                services,
                "export const checksGetEmail = (query: { value: string }, options?: RequestOptions) => request<FieldCheckAnswer>(",
            )
            assertContains(
                dir.resolve("src/lib/api/types.ts").readText(),
                "export interface FieldCheckAnswer {\n    message?: string | null;\n}",
            )
            val helper = dir.resolve("src/lib/api/form-state.svelte.ts").readText()
            assertContains(helper, "checks?: Partial<Record<keyof T & string, FieldCheckRoute>>;")
            assertContains(helper, "ask({ value }, { signal: controller.signal, silent: true })")
        }
}
