package io.github.nijasc.ktor.svelte.gradle.tasks

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertNull

class SmokeTestTest {
    @TempDir
    lateinit var dir: File

    private fun file(path: String) = dir.resolve(path).apply { parentFile.mkdirs() }.writeText("x")

    @Test
    fun `every prerendered page becomes its address and the fallback page is left out`() {
        listOf("index.html", "200.html", "about.html", "docs/index.html", "docs/setup.html", "_app/immutable/chunks/b.js").forEach(::file)
        listOf("_app/immutable/chunks/a.js.br", "_app/immutable/chunks/a.js", "_app/version.json").forEach(::file)
        assertEquals(listOf("/", "/about", "/docs", "/docs/setup"), prerenderedPages(dir))
        assertEquals("/_app/immutable/chunks/a.js", smokeAsset(dir))
        assertNull(smokeAsset(dir.resolve("docs")))
    }

    @Test
    fun `the API routes asked are the GET routes that need no input`() {
        val openApi =
            """
            {"paths": {
              "/api/notes": {"get": {"parameters": [{"name": "search", "in": "query", "required": false}]}, "post": {}},
              "/api/notes/{id}": {"get": {}},
              "/api/search": {"get": {"parameters": [{"name": "q", "in": "query", "required": true}]}},
              "/api/upload": {"post": {}},
              "/api/export": {"get": {}},
              "/api/me": {"get": {}}
            }}
            """.trimIndent()
        assertEquals(listOf("/api/me", "/api/notes"), smokeApiRoutes(openApi, listOf("/api/export")))
        assertEquals(emptyList(), smokeApiRoutes("{}", emptyList()))
    }

    @Test
    fun `each kind of request has its own idea of a correct answer`() {
        val page = SmokeRequest(SmokeKind.Page, "/about")
        val api = SmokeRequest(SmokeKind.Api, "/api/me")
        val answers =
            listOf(
                SmokeAnswer(page, 200, "text/html; charset=UTF-8", null),
                SmokeAnswer(page, 200, "application/json", null),
                SmokeAnswer(SmokeRequest(SmokeKind.Asset, "/_app/a.js"), 404, null, null),
                SmokeAnswer(api, 401, null, null),
                SmokeAnswer(api, 500, null, null),
                SmokeAnswer(SmokeRequest(SmokeKind.Api, "/api/gone"), 404, null, null),
                SmokeAnswer(SmokeRequest(SmokeKind.Path, "/health"), 302, null, null),
                SmokeAnswer(SmokeRequest(SmokeKind.Path, "/slow"), null, null, "no answer: request timed out"),
            )
        assertEquals(listOf(true, false, false, true, false, false, true, false), answers.map { it.correct })
        val report = smokeReport(answers, "build/ktor-svelte/smoke-test.log").orEmpty()
        assertContains(report, "The production build did not answer 5 of 8 requests correctly:")
        assertContains(report, "  200  /about         expected 200 and HTML\n")
        assertContains(report, "  500  GET /api/me    expected anything but 404 and a server error\n")
        assertContains(report, "  ---  /slow          no answer: request timed out\n")
        assertContains(report, "The app's output is in build/ktor-svelte/smoke-test.log.")
        assertNull(smokeReport(answers.filter { it.correct }, "log"))
    }
}
