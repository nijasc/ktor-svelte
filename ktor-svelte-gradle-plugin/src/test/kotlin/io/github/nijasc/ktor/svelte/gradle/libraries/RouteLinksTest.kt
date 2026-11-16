package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.tasks.stringLinkReport
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals

class RouteLinksTest {
    @TempDir
    lateinit var dir: File

    private val routes =
        listOf(
            "/",
            "/(app)/data-nodes",
            "/(app)/data-nodes/[id]",
            "/(app)/data-nodes/definition",
            "/(app)/data-nodes/definition/[id]",
            "/docs/[[lang]]/[...path]",
            "/files/[name].json",
            "/wiki/[...path]",
        ).map(::routeOf)

    private fun suggestions(source: String) = findStringLinks(source, routes).map { it.suggestion }

    @Test
    fun `static links name their route and a static page beats a parameter`() {
        assertEquals(listOf("routes.home()"), suggestions("""<a href="/">Home</a>"""))
        assertEquals(listOf("routes.dataNodes()"), suggestions("""<a href="/data-nodes" class="btn">"""))
        assertEquals(listOf("routes.dataNodesDefinition()"), suggestions("""<a href={"/data-nodes/definition/"}>"""))
    }

    @Test
    fun `markup expressions become route parameters`() {
        assertEquals(
            listOf("routes.dataNodesDefinitionId({ id: node.id })"),
            suggestions("""<a href="/data-nodes/definition/{node.id}" class="btn">"""),
        )
        assertEquals(listOf("routes.dataNodesId({ id: '42' })"), suggestions("""<a href="/data-nodes/42">"""))
    }

    @Test
    fun `goto and redirect are found with template literals and concatenation`() {
        assertEquals(
            listOf("routes.dataNodesDefinitionId({ id: newNode.id })"),
            suggestions("""await goto("/data-nodes/definition/" + newNode.id)"""),
        )
        assertEquals(listOf("routes.dataNodesId({ id: id })"), suggestions("goto(`/data-nodes/\${id}?tab=fields`);"))
        assertEquals(listOf("routes.dataNodes()"), suggestions("redirect(303, '/data-nodes');"))
        assertEquals(listOf("routes.dataNodesId({ id: ... })"), suggestions("""goto("/data-nodes/node-" + id)"""))
    }

    @Test
    fun `optional and rest parameters and mixed segments are matched`() {
        assertEquals(listOf("routes.docsLangPath({ lang: 'guide', path: 'intro' })"), suggestions("""<a href="/docs/guide/intro">"""))
        assertEquals(listOf("routes.wikiPath({ path: 'a/b' })"), suggestions("""<a href="/wiki/a/b">"""))
        assertEquals(listOf("routes.wikiPath({ path: slug })"), suggestions("""<a href="/wiki/{slug}">"""))
        assertEquals(listOf("routes.docsLangPath()"), suggestions("""<a href="/docs">"""))
        assertEquals(listOf("routes.filesNameJson({ name: 'report' })"), suggestions("""<a href="/files/report.json">"""))
        assertEquals(listOf("routes.filesNameJson({ name: ... })"), suggestions("""<a href="/files/{name}.json">"""))
    }

    @Test
    fun `a finding quotes the whole call`() {
        val written = { source: String -> findStringLinks(source, routes).single().written }
        assertEquals("""goto("/data-nodes/definition/" + newNode.id)""", written("""await goto("/data-nodes/definition/" + newNode.id);"""))
        assertEquals("redirect(307, '/data-nodes')", written("if (!user) redirect(307, '/data-nodes');"))
        assertEquals("goto('/data-nodes'", written("goto('/data-nodes', { replaceState: true });"))
        assertEquals("""href="/data-nodes"""", written("""<a href="/data-nodes" class="btn">"""))
    }

    @Test
    fun `other links are left alone`() {
        val source =
            """
            <a href="/api/docs">API</a>
            <a href="//cdn.example.com/x">CDN</a>
            <a href="https://example.com/data-nodes">Out</a>
            <a href={routes.dataNodes()}>Typed</a>
            <a href="/data-nodes/1/2/3">Too deep</a>
            """.trimIndent()
        assertEquals(emptyList(), findStringLinks(source, routes))
    }

    @Test
    fun `the report names file and line and skips generated folders`() {
        listOf("", "about").forEach { route ->
            dir.resolve("src/routes/$route").mkdirs()
            dir.resolve("src/routes/$route/+page.svelte").writeText("<h1>Page</h1>\n<a href=\"/about\">About</a>\n")
        }
        listOf("src/lib/api/client.ts", "$GENERATED_DIR/routes.ts").forEach { path ->
            dir.resolve(path).parentFile.mkdirs()
            dir.resolve(path).writeText("goto('/about');")
        }
        assertEquals(
            listOf(
                "src/routes/+page.svelte:2  href=\"/about\"  ->  routes.about()",
                "src/routes/about/+page.svelte:2  href=\"/about\"  ->  routes.about()",
            ),
            stringLinkReport(dir, dir.resolve("src/routes")),
        )
    }
}
