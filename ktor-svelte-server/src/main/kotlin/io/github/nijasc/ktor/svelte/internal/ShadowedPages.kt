package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.internal.assets.Manifest
import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.ktor.http.HttpMethod
import io.ktor.server.routing.HttpMethodRouteSelector
import io.ktor.server.routing.PathSegmentConstantRouteSelector
import io.ktor.server.routing.PathSegmentParameterRouteSelector
import io.ktor.server.routing.PathSegmentTailcardRouteSelector
import io.ktor.server.routing.RoutingNode

internal fun constantGetPaths(root: RoutingNode): Set<String> {
    val paths = linkedSetOf<String>()

    fun walk(
        node: RoutingNode,
        path: String,
    ) {
        when (val selector = node.selector) {
            is PathSegmentParameterRouteSelector, is PathSegmentTailcardRouteSelector -> return
            is PathSegmentConstantRouteSelector -> {
                node.children.forEach { walk(it, "$path/${selector.value}") }
                return
            }
            is HttpMethodRouteSelector -> if (selector.method == HttpMethod.Get && node.hasHandler()) paths += path.ifEmpty { "/" }
            else -> Unit
        }
        node.children.forEach { walk(it, path) }
    }
    walk(root, "")
    return paths
}

internal fun shadowedPages(
    routes: Set<String>,
    manifest: Manifest,
    resolver: RequestResolver,
): Map<String, String> =
    routes
        .filterNot { it.startsWith("/_ktor-svelte") || resolver.isApiPath(it) }
        .mapNotNull { route ->
            val name = route.trim('/')
            val page =
                if (name.isEmpty()) {
                    "index.html".takeIf { it in manifest.files }
                } else {
                    listOf("$name.html", "$name/index.html").firstOrNull { it in manifest.files }
                }
            page?.let { route to it }
        }.toMap()
