package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import java.time.ZoneId
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class TimeZonesTest {
    private fun app(
        config: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                config()
            }
            routing { get("/api/zone") { call.respondText(call.timeZone.id) } }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.zoneFor(sent: String?): String =
        client.get("/api/zone") { if (sent != null) header("X-Time-Zone", sent) }.bodyAsText()

    @Test
    fun `the zone the browser sent is the call's time zone`() =
        app {
            assertEquals("Europe/Zurich", zoneFor("Europe/Zurich"))
            assertEquals("America/Argentina/Buenos_Aires", zoneFor("America/Argentina/Buenos_Aires"))
            assertEquals("Etc/GMT+5", zoneFor("Etc/GMT+5"))
        }

    @Test
    fun `without a usable zone the default applies`() =
        app {
            listOf(null, "", "Mars/Olympus", "Europe/Zurich; DROP", "x".repeat(200), "../../etc/passwd").forEach { sent ->
                assertEquals("UTC", zoneFor(sent), "sent: $sent")
            }
        }

    @Test
    fun `the default can be set`() =
        app({ defaultTimeZone = "Europe/Zurich" }) {
            assertEquals("Europe/Zurich", zoneFor(null))
            assertEquals("Asia/Tokyo", zoneFor("Asia/Tokyo"))
        }

    @Test
    fun `a default that is no time zone stops the app at startup`() {
        val failure =
            assertFailsWith<IllegalArgumentException> {
                app({ defaultTimeZone = "Zurich time" }) { startApplication() }
            }
        assertContains(failure.message.orEmpty(), "defaultTimeZone 'Zurich time' is not a time zone")
    }

    @Test
    fun `zone names are checked before they reach the JDK`() {
        assertEquals(ZoneId.of("UTC"), zoneOrNull("UTC"))
        assertEquals(null, zoneOrNull("UTC\nX-Injected: 1"))
        assertEquals(null, zoneOrNull(null))
    }
}
