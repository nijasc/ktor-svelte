package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.VitalKind
import io.github.nijasc.ktor.svelte.internal.WebVitalStore
import io.github.nijasc.ktor.svelte.internal.vitalPage
import io.ktor.client.request.get
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.Application
import io.ktor.server.application.install
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
import kotlin.test.assertNull

class WebVitalsTest {
    @TempDir
    lateinit var dir: Path

    private lateinit var running: Application

    private fun app(
        configure: SvelteConfig.() -> Unit = { webVitals { sampleRate = 0.25 } },
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        dir.resolve("package.json").writeText("{}")
        dir.resolve("src/lib").createDirectories()
        val build = fixtureBuild()
        application {
            running = this
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                generateTs = true
                generateTsOutput = dir.resolve("src/lib/api").toString()
                statusEndpoint = true
                paramRoutes("/notes/[slug]")
                configure()
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.report(body: String): HttpResponse = client.post("/_ktor-svelte/vitals") { setBody(body) }

    @Test
    fun `pages are grouped by their route, not by every id that was opened`() {
        val routes = listOf("/notes/[slug]", "/[lang]/about")
        assertEquals("/notes/[slug]", vitalPage("/notes/my-first-note", routes))
        assertEquals("/[lang]/about", vitalPage("/de/about/", routes))
        assertEquals("/tasks/[id]", vitalPage("/tasks/4711", routes))
        assertEquals("/files/[id]/preview", vitalPage("/files/3f2c1a9e-7b4d-4c1a-9a3e-0d5f6a7b8c9d/preview?x=1", routes))
        assertEquals("/", vitalPage("/", routes))
        assertEquals("/board", vitalPage("/board#top", routes))
        assertNull(vitalPage("board", routes))
        assertNull(vitalPage("/a b/<script>", routes))
        assertNull(vitalPage("/" + "x".repeat(300), routes))
    }

    @Test
    fun `timings are counted per page and rated by the usual thresholds`() {
        val store = WebVitalStore()
        listOf(1200.0, 2600.0, 5000.0, 2500.0).forEach { store.record("/board", VitalKind.LCP, it) }
        store.record("/board", VitalKind.CLS, 0.3)
        store.record("/", VitalKind.TTFB, 90.0)
        val vitals = store.snapshot()
        assertEquals(listOf("/ TTFB", "/board LCP", "/board CLS"), vitals.map { "${it.page} ${it.name}" })
        val lcp = vitals[1]
        assertEquals(listOf(4L, 2L, 1L, 1L), listOf(lcp.count, lcp.good, lcp.needsImprovement, lcp.poor))
        assertEquals(2825.0, lcp.average)
        assertEquals(1L, vitals[2].poor)

        repeat(150) { store.record("/page-$it", VitalKind.FCP, 100.0) }
        val pages = store.snapshot().map { it.page }.toSet()
        assertEquals(101, pages.size, "a flood of made-up pages ends in one bucket")
        assertContains(pages, "(other pages)")
    }

    @Test
    fun `a report is added to the metrics and shown by the status endpoint`() =
        app {
            assertEquals(
                HttpStatusCode.NoContent,
                report("""{"page":"/notes/hello","metrics":{"LCP":1800.5,"CLS":0.02,"INP":90,"FID":3,"TTFB":-1}}""").status,
            )
            assertEquals(HttpStatusCode.NoContent, report("""{"page":"/notes/other","metrics":{"LCP":4200}}""").status)
            val vitals = running.svelteMetrics.webVitals
            assertEquals(listOf("LCP 2", "INP 1", "CLS 1"), vitals.map { "${it.name} ${it.count}" })
            assertEquals(setOf("/notes/[slug]"), vitals.map { it.page }.toSet())
            val status = client.get("/_ktor-svelte/status").bodyAsText()
            assertContains(
                status,
                """{"page":"/notes/[slug]","name":"LCP","count":2,"average":3000.25,"good":1,"needsImprovement":0,"poor":1}""",
            )
        }

    @Test
    fun `what is no report is refused, and one client can send only so many`() =
        app(configure = { webVitals { perClientPerMinute = 4 } }) {
            assertEquals(HttpStatusCode.BadRequest, report("nonsense").status)
            assertEquals(HttpStatusCode.BadRequest, report("""{"page":"/board","metrics":{"LCP":1e99,"Made up":1}}""").status)
            assertEquals(
                HttpStatusCode.BadRequest,
                report("""{"page":"//evil","metrics":{"LCP":1}}""".replace("//evil", "no-slash")).status,
            )
            assertEquals(HttpStatusCode.PayloadTooLarge, report("""{"page":"/${"x".repeat(3000)}","metrics":{"LCP":1}}""").status)
            assertEquals(HttpStatusCode.TooManyRequests, report("""{"page":"/board","metrics":{"LCP":1}}""").status)
            assertEquals(emptyList(), running.svelteMetrics.webVitals)
        }

    @Test
    fun `it is off unless asked for, and the client is told the sample rate`() {
        app(configure = {}) {
            assertEquals(HttpStatusCode.NotFound, report("""{"page":"/","metrics":{"LCP":1}}""").status)
            startApplication()
            assertFalse("\nreportVitals('" in dir.resolve("src/lib/api/client.ts").readText())
            assertFalse("webVitals" in client.get("/_ktor-svelte/status").bodyAsText())
        }
        app {
            startApplication()
            assertContains(dir.resolve("src/lib/api/client.ts").readText(), "\nreportVitals('/_ktor-svelte/vitals', 0.25);\n")
        }
        assertFailsWith<IllegalArgumentException> { app(configure = { webVitals { sampleRate = 0.0 } }) { startApplication() } }
        assertFailsWith<IllegalArgumentException> { app(configure = { webVitals { sampleRate = 1.5 } }) { startApplication() } }
    }
}
