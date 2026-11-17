package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.GeneratedEndpoint
import io.github.nijasc.ktor.svelte.gradle.libraries.generatedEndpoints
import io.github.nijasc.ktor.svelte.gradle.libraries.unusedEndpoints
import org.gradle.api.DefaultTask
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.File

private const val SERVICES_FILE = "src/lib/api/services.ts"
private val IMPORT = Regex("""(?:\bfrom\s*|\bimport\s*\(\s*|\bimport\s+)(['"])([^'"]+)\1""")
private val SCRIPT_EXTENSIONS = listOf("", ".ts", ".js", ".svelte", "/index.ts", "/index.js")
private val PAGE_FILE = Regex("""\+(page|layout)(\.server)?\.(svelte|ts|js)""")

internal data class PageCalls(
    val page: String,
    val layout: Boolean,
    val endpoints: List<GeneratedEndpoint>,
)

internal class ImportResolver(
    private val frontend: File,
) {
    private val aliases: Map<String, String> =
        runCatching {
            @Suppress("UNCHECKED_CAST")
            ((JsonSlurper().parse(frontend.resolve("package.json")) as Map<String, Any?>)["imports"] as? Map<String, Any?>)
                .orEmpty()
                .mapNotNull { (name, target) -> (target as? String)?.let { name to it } }
                .toMap()
        }.getOrDefault(emptyMap())

    fun resolve(
        from: File,
        specifier: String,
    ): File? {
        val base =
            when {
                specifier.startsWith(".") -> from.parentFile.resolve(specifier)
                specifier.startsWith("#") -> aliased(specifier) ?: return null
                else -> return null
            }
        return SCRIPT_EXTENSIONS.map { File(base.path + it) }.firstOrNull { it.isFile }?.normalize()
    }

    private fun aliased(specifier: String): File? {
        aliases[specifier]?.let { return frontend.resolve(it) }
        val (pattern, target) =
            aliases.entries.firstOrNull { (name, _) -> name.endsWith("/*") && specifier.startsWith(name.dropLast(1)) } ?: return null
        return frontend.resolve(target.removeSuffix("*") + specifier.removePrefix(pattern.dropLast(1)))
    }
}

internal fun reachableSources(
    start: List<File>,
    resolver: ImportResolver,
    excluded: Set<File>,
): List<File> {
    val seen = LinkedHashSet<File>()
    val queue = ArrayDeque(start.map { it.normalize() })
    while (queue.isNotEmpty()) {
        val file = queue.removeFirst()
        if (!seen.add(file)) continue
        IMPORT
            .findAll(file.readText())
            .mapNotNull { resolver.resolve(file, it.groupValues[2]) }
            .filter { candidate -> excluded.none { candidate.startsWith(it) } && candidate !in seen }
            .forEach(queue::addLast)
    }
    return seen.toList()
}

internal fun pageRoute(
    routes: File,
    directory: File,
): String {
    val segments =
        directory
            .relativeTo(routes)
            .invariantSeparatorsPath
            .split('/')
            .filter { it.isNotEmpty() && !(it.startsWith("(") && it.endsWith(")")) }
    return "/" + segments.joinToString("/")
}

internal fun pageCalls(
    frontend: File,
    routes: File,
): List<PageCalls>? {
    val services = frontend.resolve(SERVICES_FILE).takeIf { it.isFile } ?: return null
    val endpoints = generatedEndpoints(services.readText())
    val resolver = ImportResolver(frontend)
    val excluded = setOf(frontend.resolve(GENERATED_DIR).normalize(), frontend.resolve("src/lib/api").normalize())
    return routes
        .walkTopDown()
        .filter { it.isDirectory }
        .flatMap { directory ->
            val files =
                directory
                    .listFiles()
                    .orEmpty()
                    .filter { PAGE_FILE.matches(it.name) }
                    .sortedBy { it.name }
            files.groupBy { it.name.startsWith("+layout") }.map { (layout, start) ->
                val sources = reachableSources(start, resolver, excluded).map { it.readText() }
                val called = endpoints - unusedEndpoints(endpoints, sources).toSet()
                PageCalls(pageRoute(routes, directory), layout, called)
            }
        }.sortedWith(compareBy({ it.page }, { !it.layout }))
        .toList()
}

private fun label(text: String): String = "\"" + text.replace("\"", "#quot;") + "\""

internal fun pagesDiagram(
    calls: List<PageCalls>,
    endpoints: List<GeneratedEndpoint>,
): String {
    val apiIds = endpoints.mapIndexed { index, endpoint -> endpoint to "api$index" }.toMap()
    val called = calls.flatMap { it.endpoints }.toSet()
    return buildString {
        appendLine("# Pages and the API routes they call")
        appendLine()
        appendLine("Generated by ktor-svelte from the frontend's pages and its generated client. Run svelteRoutesDiagram to update it.")
        appendLine()
        appendLine("```mermaid")
        appendLine("flowchart LR")
        calls.forEachIndexed { index, page ->
            val name = if (page.layout) "${page.page} (layout)" else page.page
            appendLine("    page$index[${label(name)}]")
        }
        endpoints.forEach { endpoint -> appendLine("    ${apiIds.getValue(endpoint)}([${label("${endpoint.method} ${endpoint.path}")}])") }
        calls.forEachIndexed { index, page ->
            page.endpoints.forEach { endpoint -> appendLine("    page$index --> ${apiIds.getValue(endpoint)}") }
        }
        endpoints.filter { it !in called }.forEach { appendLine("    class ${apiIds.getValue(it)} uncalled") }
        appendLine("    classDef uncalled stroke-dasharray: 4 4")
        appendLine("```")
        appendLine()
        appendLine("| Page | API routes |")
        appendLine("|---|---|")
        calls.filter { it.endpoints.isNotEmpty() }.forEach { page ->
            val name = if (page.layout) "${page.page} (layout)" else page.page
            appendLine("| `$name` | ${page.endpoints.joinToString(", ") { "`${it.method} ${it.path}`" }} |")
        }
        val uncalled = endpoints.filter { it !in called }
        if (uncalled.isNotEmpty()) {
            appendLine()
            appendLine("No page calls ${uncalled.joinToString(", ") { "`${it.method} ${it.path}`" }}.")
        }
    }
}

@UntrackedTask(because = "Reads the frontend sources and writes a diagram for people to read")
public abstract class SvelteRoutesDiagramTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Internal
    public abstract val routesDirectory: DirectoryProperty

    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Input
    @get:Optional
    @get:Option(option = "output", description = "Where to write the diagram, relative to the project")
    public abstract val output: Property<String>

    @TaskAction
    public fun write() {
        val frontend = frontendDir.get().asFile
        val calls = pageCalls(frontend, routesDirectory.get().asFile)
        if (calls == null) {
            logger.lifecycle("ktor-svelte: there is no generated client in src/lib/api, so there is nothing to draw. Turn on generateTs.")
            return
        }
        val endpoints = generatedEndpoints(frontend.resolve(SERVICES_FILE).readText())
        val target = projectDirectory.get().asFile.resolve(output.getOrElse("build/ktor-svelte/pages-to-routes.md"))
        target.parentFile.mkdirs()
        target.writeText(pagesDiagram(calls, endpoints))
        val edges = calls.sumOf { it.endpoints.size }
        logger.lifecycle("ktor-svelte: wrote ${calls.size} page(s), ${endpoints.size} API route(s) and $edges call(s) to $target")
    }
}
