package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.SvelteConfig
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlin.test.Test
import kotlin.test.assertEquals

class ConfigReportTest {
    @Test
    fun `the report shows every setting, including nested blocks`() {
        val config =
            SvelteConfig().apply {
                generateTs = true
                maxJsonStringLength = 1000
                allowedOrigins("https://admin.example.com")
                transport { xml() }
                rateLimit { limit("login", requests = 5, per = kotlin.time.Duration.parse("1m")) }
                securityHeaders { allowCspSources("img-src", "https://cdn.example.com") }
            }
        val report = configReport(config)
        assertEquals("true", report.getValue("generateTs").jsonPrimitive.content)
        assertEquals("1000", report.getValue("maxJsonStringLength").jsonPrimitive.content)
        assertEquals("[\"https://admin.example.com\"]", report.getValue("allowedOrigins").toString())
        assertEquals(
            "[\"xml\"]",
            report
                .getValue("transport")
                .jsonObject
                .getValue("formats")
                .toString(),
        )
        assertEquals(
            "[\"login\"]",
            report
                .getValue("rateLimit")
                .jsonObject
                .getValue("namedLimits")
                .toString(),
        )
        val csp = report.getValue("securityHeaders").jsonObject.getValue("extraCspSources") as JsonObject
        assertEquals("[\"https://cdn.example.com\"]", csp.getValue("img-src").toString())
    }

    @Test
    fun `defaults report json as the only format`() {
        assertEquals(
            "[\"json\"]",
            configReport(SvelteConfig())
                .getValue("transport")
                .jsonObject
                .getValue("formats")
                .toString(),
        )
    }
}
