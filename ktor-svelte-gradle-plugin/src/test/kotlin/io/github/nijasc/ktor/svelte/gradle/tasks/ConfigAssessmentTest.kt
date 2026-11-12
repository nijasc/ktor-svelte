package io.github.nijasc.ktor.svelte.gradle.tasks

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class ConfigAssessmentTest {
    private val gradle = mapOf("includeSourceMaps" to "false", "precompress" to "true", "verifyTs" to "true")
    private val secureDefaults =
        mapOf(
            "originCheck" to true,
            "hideErrorDetails" to true,
            "apiCompression" to true,
            "requestIds" to true,
            "buildHeader" to true,
            "generateTs" to false,
            "apiDocs" to false,
            "healthEndpoint" to false,
            "publicConfig" to false,
            "maxApiBodySize" to 1048576,
            "maxJsonDepth" to 64,
            "maxJsonStringLength" to null,
            "cache" to mapOf("immutable" to "public, max-age=31536000, immutable"),
            "dev" to mapOf("allowRemote" to false, "slowApiCall" to "500ms"),
            "securityHeaders" to mapOf("enabled" to true, "frameOptions" to "DENY", "automaticContentSecurityPolicy" to true),
            "rateLimit" to mapOf("enabled" to true),
        )

    @Test
    fun `without the app only build settings are scored`() {
        val checks = assess(gradle, null)
        assertEquals(3, checks.size)
        assertTrue(checks.all { it.passed })
    }

    @Test
    fun `weakened settings fail with a suggestion`() {
        val weak = secureDefaults + mapOf("originCheck" to false, "maxJsonDepth" to null)
        val failed = assess(gradle + ("includeSourceMaps" to "true"), weak).filterNot { it.passed }.map { it.label }
        assertContains(failed, "Cross-site writes to the API are refused")
        assertContains(failed, "Deeply nested JSON is refused")
        assertContains(failed, "Source maps stay out of the JAR")
        assertContains(failed, "Huge JSON strings are refused")
    }

    @Test
    fun `inlining public config only counts when there is public config`() {
        assertFalse(assess(gradle, secureDefaults).any { it.label.startsWith("Public config") })
        assertTrue(assess(gradle, secureDefaults + ("publicConfig" to true)).any { it.label.startsWith("Public config") && it.passed })
    }

    @Test
    fun `the report lists settings, marks changes, scores areas and suggests fixes`() {
        val report =
            renderReport(
                gradle,
                secureDefaults + ("generateTs" to true),
                null,
                secureDefaults,
            )
        assertContains(report, "generateTs")
        assertContains(report, "true  (default: false)")
        assertContains(report, "securityHeaders.frameOptions")
        assertContains(report, "Security              [#########-]  90%  10 of 11")
        assertContains(report, "- [Security] Set maxJsonStringLength = 100_000")
        assertContains(report, "+ [Developer experience] TypeScript is generated from your routes")
    }

    @Test
    fun `score bars round to the nearest tenth`() {
        assertEquals("[##########]", scoreBar(3, 3))
        assertEquals("[#######---]", scoreBar(2, 3))
        assertEquals("[----------]", scoreBar(0, 4))
    }
}
