package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.internal.typescript.parameterSegment
import io.ktor.server.routing.HttpMethodRouteSelector
import io.ktor.server.routing.PathSegmentConstantRouteSelector
import io.ktor.server.routing.PathSegmentOptionalParameterRouteSelector
import io.ktor.server.routing.PathSegmentParameterRouteSelector
import io.ktor.server.routing.PathSegmentTailcardRouteSelector
import io.ktor.server.routing.RoutingNode
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.addJsonObject
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import kotlinx.serialization.json.putJsonArray
import java.util.concurrent.ConcurrentHashMap

private const val ROUTES_RANKED = 20

internal fun routeKey(node: RoutingNode): String? {
    var method: String? = null
    val parts = ArrayDeque<String>()
    var current: RoutingNode? = node
    while (current != null) {
        when (val selector = current.selector) {
            is HttpMethodRouteSelector -> method = method ?: selector.method.value
            is PathSegmentConstantRouteSelector -> parts.addFirst("/${selector.value}")
            is PathSegmentParameterRouteSelector -> parts.addFirst(parameterSegment(selector.prefix, selector.name, selector.suffix))
            is PathSegmentOptionalParameterRouteSelector ->
                parts.addFirst(
                    parameterSegment(selector.prefix, selector.name, selector.suffix),
                )
            is PathSegmentTailcardRouteSelector -> parts.addFirst("/{${selector.name}...}")
            else -> Unit
        }
        current = current.parent
    }
    return method?.let { "$it ${parts.joinToString("").ifEmpty { "/" }}" }
}

private data class RouteTime(
    val calls: Int = 0,
    val totalMs: Double = 0.0,
    val slowestMs: Double = 0.0,
    val failed: Int = 0,
)

internal class RouteTimes {
    private val times = ConcurrentHashMap<String, RouteTime>()

    fun record(
        route: String,
        ms: Double,
        status: Int,
    ) {
        times.compute(route) { _, old ->
            val time = old ?: RouteTime()
            RouteTime(time.calls + 1, time.totalMs + ms, maxOf(time.slowestMs, ms), time.failed + if (status >= 500) 1 else 0)
        }
    }

    fun ranking(): JsonObject {
        val rows = times.toList()
        return buildJsonObject {
            put("routes", rows.size)
            putJsonArray("slowest") {
                rows.sortedByDescending { it.second.totalMs }.take(ROUTES_RANKED).forEach { (route, time) ->
                    addJsonObject {
                        put("method", route.substringBefore(' '))
                        put("path", route.substringAfter(' '))
                        put("calls", time.calls)
                        put("totalMs", time.totalMs)
                        put("averageMs", time.totalMs / time.calls)
                        put("slowestMs", time.slowestMs)
                        if (time.failed > 0) put("failed", time.failed)
                    }
                }
            }
        }
    }
}
