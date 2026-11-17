package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.PageDataSpec
import io.github.nijasc.ktor.svelte.internal.typescript.PageLoadSpec
import io.github.nijasc.ktor.svelte.internal.typescript.routeKeyOf
import io.github.nijasc.ktor.svelte.internal.typescript.validPageDataKey
import io.ktor.server.application.Application
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingNode
import io.ktor.server.routing.application
import io.ktor.util.AttributeKey
import kotlin.time.Duration
import kotlin.time.Duration.Companion.seconds

internal val PageLoadsKey: AttributeKey<MutableList<PageLoadSpec>> = AttributeKey("ktor-svelte-page-loads")

internal fun Application.pageLoadSpecs(): List<PageLoadSpec> =
    attributes.getOrNull(PageLoadsKey)?.let { pages -> synchronized(pages) { pages.toList() } }.orEmpty()

public class SveltePageLoadsConfig internal constructor() {
    public var inline: Boolean = false

    public var inlineTimeout: Duration = 2.seconds
}

public class SveltePageLoadConfig internal constructor(
    private val page: String,
) {
    internal val data: MutableList<PageDataSpec> = mutableListOf()

    public fun data(
        key: String,
        route: Route,
        params: Map<String, String> = emptyMap(),
    ) {
        require(validPageDataKey(key)) { "data takes a name the page reads as data.$key, so it must be a JavaScript name, but got '$key'." }
        require(data.none { it.key == key }) { "The page '$page' loads '$key' twice." }
        val (method, path) =
            (route as? RoutingNode)?.let(::routeKeyOf)
                ?: throw IllegalArgumentException("data takes the route that get(\"...\") { } returns, but got '$route'.")
        require(method == "GET") { "pageLoad: '$page' loads $method $path. A page load only reads: use a GET route." }
        data += PageDataSpec(key, method, path, params)
    }
}

public fun Route.pageLoad(
    page: String,
    configure: SveltePageLoadConfig.() -> Unit,
) {
    val clean = page.trimEnd('/').ifEmpty { "/" }
    require(isPagePath(page) && page.none { it in "?#*" }) {
        "pageLoad takes the pattern of a page, such as FrontendRoutes.Patterns.tasksId (\"/tasks/[id]\"), but got '$page'."
    }
    val load = SveltePageLoadConfig(clean).apply(configure)
    require(load.data.isNotEmpty()) { "pageLoad: '$clean' loads nothing. Add data(\"key\", route)." }
    val pages = application.attributes.computeIfAbsent(PageLoadsKey) { mutableListOf() }
    synchronized(pages) {
        require(pages.none { it.page == clean }) { "The page '$clean' has two pageLoad blocks." }
        pages += PageLoadSpec(clean, load.data.toList())
    }
}
