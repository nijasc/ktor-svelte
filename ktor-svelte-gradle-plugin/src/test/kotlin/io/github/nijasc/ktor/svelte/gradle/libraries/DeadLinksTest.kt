package io.github.nijasc.ktor.svelte.gradle.libraries

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals

class DeadLinksTest {
    @TempDir
    lateinit var dir: File

    private val routes = listOf("/", "/about", "/notes", "/notes/[id]").map(::routeOf)
    private val targets = LinkTargets(apiRoots = setOf("api"), staticFiles = setOf("/terms.pdf", "/img/logo.svg"))

    private fun dead(
        source: String,
        locales: List<String> = emptyList(),
    ) = deadLinks(findUnmatchedLinks(source, routes, locales), targets).map { it.path }

    @Test
    fun `links to pages that do not exist are found`() {
        val source =
            """
            <a href="/abuot">About</a>
            <a href="/notes/{note.id}/edit">Edit</a>
            <a href="/about">About</a>
            <a href="/notes/{note.id}?tab=files">Files</a>
            goto("/settings");
            goto("/nots/" + id);
            """.trimIndent()
        assertEquals(listOf("/abuot", "/notes/{}/edit", "/settings", "/nots/{}"), dead(source))
        assertEquals(listOf(1, 2, 5, 6), deadLinks(findUnmatchedLinks(source, routes), targets).map { it.line })
    }

    @Test
    fun `the API, static files and what the runtime serves are not dead`() {
        val source =
            """
            <a href="/api/docs">API docs</a>
            <a href="/api/notes/export">Export</a>
            <a href="/terms.pdf">Terms</a>
            <img src="/img/logo.svg" alt="" /><a href="/img/logo.svg">Logo</a>
            <a href="/sitemap.xml">Sitemap</a>
            <a href="/_app/version.json">Version</a>
            <a href="/">Home</a>
            <a href="/missing.pdf">Missing</a>
            """.trimIndent()
        assertEquals(listOf("/missing.pdf"), dead(source))
    }

    @Test
    fun `a link that starts with a value cannot be judged`() {
        assertEquals(emptyList(), dead("""<a href="/{section}/overview">Overview</a>"""))
    }

    @Test
    fun `a language prefix is accepted when the app uses them`() {
        val source = """<a href="/de/about">Deutsch</a> <a href="/de">Start</a> <a href="/fr/about">Francais</a>"""
        assertEquals(listOf("/fr/about"), dead(source, locales = listOf("en", "de")))
        assertEquals(listOf("/de/about", "/de", "/fr/about"), dead(source))
    }

    @Test
    fun `kotlin redirects to missing pages are found`() {
        val source =
            """
            call.respondRedirect("/abuot")
            call.respondRedirect("/notes/${'$'}id")
            call.respondRedirect("/api/docs")
            """.trimIndent()
        assertEquals(listOf("/abuot"), deadLinks(findUnmatchedKotlinLinks(source, routes), targets).map { it.path })
    }

    @Test
    fun `targets come from the static folder and the generated openapi document`() {
        dir.resolve("static/img").mkdirs()
        dir.resolve("static/img/logo.svg").writeText("")
        dir.resolve("static/robots.txt").writeText("")
        dir.resolve("src/lib/api").mkdirs()
        dir.resolve("src/lib/api/openapi.json").writeText("""{"paths":{"/api/notes":{},"/internal/jobs/{id}":{}}}""")
        assertEquals(LinkTargets(setOf("api", "internal"), setOf("/img/logo.svg", "/robots.txt")), readLinkTargets(dir))
        assertEquals(setOf("api"), apiRoots(dir.resolve("missing.json")))
    }
}
