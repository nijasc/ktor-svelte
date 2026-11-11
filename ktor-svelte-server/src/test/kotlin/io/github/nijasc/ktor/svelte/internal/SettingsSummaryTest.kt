package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.RateLimitAlgorithm
import io.github.nijasc.ktor.svelte.SvelteConfig
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.time.Duration.Companion.minutes

class SettingsSummaryTest {
    @Test
    fun `the defaults read as one short list`() {
        assertEquals(
            listOf(
                "API prefixes: /api",
                "Dev proxy: http://localhost:5173",
                "Origin check: on (same host only)",
                "Body limit: 1 MiB, JSON depth: 64",
                "Rate limit: 120 writes per 1m per client, FixedWindow",
                "Content-Security-Policy: off while proxying to Vite",
                "Error details: hidden in production, shown now",
                "API compression: on, request IDs: on",
            ),
            settingsSummary(SvelteConfig(), "http://localhost:5173"),
        )
    }

    @Test
    fun `changed settings show up`() {
        val config =
            SvelteConfig().apply {
                apiPrefixes("/api", "/rpc")
                allowedOrigins("https://admin.example.com")
                maxApiBodySize = 10L * 1024
                maxJsonDepth = null
                rateLimit {
                    algorithm = RateLimitAlgorithm.SlidingWindow
                    limit("login", 5, 1.minutes)
                }
                securityHeaders { automaticContentSecurityPolicy = false }
            }
        val summary = settingsSummary(config, null).joinToString("\n")
        assertContains(summary, "API prefixes: /api, /rpc")
        assertContains(summary, "Dev proxy: off")
        assertContains(summary, "Origin check: on (https://admin.example.com)")
        assertContains(summary, "Body limit: 10 KiB, JSON depth: off")
        assertContains(summary, "SlidingWindow")
        assertContains(summary, "Named rate limits: login 5 per 1m")
        assertContains(summary, "Content-Security-Policy: off")
    }
}
