package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.LatencyBucket
import io.github.nijasc.ktor.svelte.RouteKind
import io.github.nijasc.ktor.svelte.RouteMetric
import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.server.application.ApplicationCall
import io.ktor.server.plugins.origin
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.routing.HttpMethodRouteSelector
import io.ktor.server.routing.PathSegmentConstantRouteSelector
import io.ktor.server.routing.PathSegmentOptionalParameterRouteSelector
import io.ktor.server.routing.PathSegmentParameterRouteSelector
import io.ktor.server.routing.PathSegmentTailcardRouteSelector
import io.ktor.server.routing.RoutingNode
import io.ktor.util.AttributeKey
import java.util.concurrent.ConcurrentHashMap

internal val LATENCY_BOUNDS_MILLIS: List<Long> = listOf(5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000)
internal const val OTHER_ROUTES = "(other routes)"
internal const val UNMATCHED_ROUTE = "(no route)"
private const val MAX_ROUTES = 200
private const val NANOS_PER_MILLI = 1_000_000.0
private const val FRONTEND_CATCH_ALL = "{svelte-path...}"
private const val INTERNAL_PREFIX = "/_ktor-svelte/"
private const val SERVER_ERROR = 500
internal const val SERVER_ERROR_STATUS = SERVER_ERROR
private const val CLIENT_ERROR = 400

internal val MetricStartedAt = AttributeKey<Long>("KtorSvelteMetricStartedAt")
internal val MetricRoute = AttributeKey<RoutingNode>("KtorSvelteMetricRoute")

internal fun routeTemplate(node: RoutingNode): String {
    val segments = ArrayDeque<String>()
    var current: RoutingNode? = node
    while (current != null) {
        when (val selector = current.selector) {
            is PathSegmentConstantRouteSelector -> segments.addFirst(selector.value)
            is PathSegmentParameterRouteSelector ->
                segments.addFirst("${selector.prefix.orEmpty()}{${selector.name}}${selector.suffix.orEmpty()}")
            is PathSegmentOptionalParameterRouteSelector ->
                segments.addFirst("${selector.prefix.orEmpty()}{${selector.name}?}${selector.suffix.orEmpty()}")
            is PathSegmentTailcardRouteSelector -> segments.addFirst("{${selector.name}...}")
            else -> Unit
        }
        current = current.parent
    }
    return "/" + segments.joinToString("/")
}

private fun methodOf(node: RoutingNode): String? {
    var current: RoutingNode? = node
    while (current != null) {
        (current.selector as? HttpMethodRouteSelector)?.let { return it.method.value }
        current = current.parent
    }
    return null
}

internal class RouteMetricStore(
    private val maxRoutes: Int = MAX_ROUTES,
) {
    private class Tally {
        var count = 0L
        var serverErrors = 0L
        var clientErrors = 0L
        var totalMillis = 0.0
        var maxMillis = 0.0
        val buckets = LongArray(LATENCY_BOUNDS_MILLIS.size + 1)
    }

    private data class Key(
        val kind: RouteKind,
        val method: String,
        val route: String,
    )

    private val tallies = ConcurrentHashMap<Key, Tally>()

    fun record(
        kind: RouteKind,
        method: String,
        route: String,
        millis: Double,
        status: Int,
    ) {
        val wanted = Key(kind, method, route)
        val other = if (kind == RouteKind.Page) OTHER_PAGES else OTHER_ROUTES
        val key = if (tallies.containsKey(wanted) || tallies.size < maxRoutes) wanted else Key(kind, method, other)
        val tally = tallies.computeIfAbsent(key) { Tally() }
        synchronized(tally) {
            tally.count++
            if (status >= SERVER_ERROR) {
                tally.serverErrors++
            } else if (status >= CLIENT_ERROR) {
                tally.clientErrors++
            }
            tally.totalMillis += millis
            tally.maxMillis = maxOf(tally.maxMillis, millis)
            val bucket = LATENCY_BOUNDS_MILLIS.indexOfFirst { millis <= it }.let { if (it < 0) LATENCY_BOUNDS_MILLIS.size else it }
            tally.buckets[bucket]++
        }
    }

    fun snapshot(): List<RouteMetric> =
        tallies.entries
            .map { (key, tally) ->
                synchronized(tally) {
                    RouteMetric(
                        kind = key.kind,
                        method = key.method,
                        route = key.route,
                        count = tally.count,
                        serverErrors = tally.serverErrors,
                        clientErrors = tally.clientErrors,
                        averageMillis = tally.totalMillis / tally.count,
                        maxMillis = tally.maxMillis,
                        buckets =
                            tally.buckets.mapIndexed { index, count ->
                                LatencyBucket(LATENCY_BOUNDS_MILLIS.getOrNull(index), count)
                            },
                    )
                }
            }.sortedWith(compareBy({ it.kind }, { it.route }, { it.method }))
}

internal fun recordRouteMetric(
    call: ApplicationCall,
    store: RouteMetricStore,
    resolver: RequestResolver,
    paramRoutes: List<String>,
    now: Long = System.nanoTime(),
    answered: Int? = null,
) {
    val started = call.attributes.getOrNull(MetricStartedAt) ?: return
    val path = decodedPathOrRaw(call)
    if (path.startsWith(INTERNAL_PREFIX) || isWarmUpCall(call)) return
    val status = answered ?: call.response.status()?.value ?: 200
    val millis = (now - started) / NANOS_PER_MILLI
    val node = call.attributes.getOrNull(MetricRoute)
    val template = node?.let(::routeTemplate)
    val method = call.request.httpMethod.value
    if (template != null && FRONTEND_CATCH_ALL !in template) {
        store.record(RouteKind.Api, methodOf(node) ?: method, template, millis, status)
        return
    }
    if (resolver.isApiPath(path)) {
        store.record(RouteKind.Api, method, UNMATCHED_ROUTE, millis, status)
        return
    }
    val type = call.response.headers[HttpHeaders.ContentType]?.let { runCatching { ContentType.parse(it) }.getOrNull() }
    if (type?.match(ContentType.Text.Html) != true) return
    store.record(RouteKind.Page, method, vitalPage(path, paramRoutes) ?: OTHER_PAGES, millis, status)
}

private val LOOPBACK_ADDRESSES = setOf("127.0.0.1", "::1", "0:0:0:0:0:0:0:1")

private fun isWarmUpCall(call: ApplicationCall): Boolean =
    call.request.header(WARM_UP_HEADER) != null && call.request.origin.remoteAddress in LOOPBACK_ADDRESSES
