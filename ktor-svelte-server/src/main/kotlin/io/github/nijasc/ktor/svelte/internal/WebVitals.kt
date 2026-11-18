package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.WebVital
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.plugins.origin
import io.ktor.server.request.header
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.openapi.hide
import io.ktor.server.routing.post
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import java.util.concurrent.ConcurrentHashMap

internal const val WEB_VITALS_PATH = "/_ktor-svelte/vitals"
internal const val OTHER_PAGES = "(other pages)"
private const val MAX_PAGES = 100
private const val MAX_PAGE_LENGTH = 200
private const val MAX_BODY_BYTES = 2048
private const val LONGEST_TIMING = 600_000.0
private const val LARGEST_SHIFT = 100.0
private val lenient = Json { ignoreUnknownKeys = true }
private val NUMBER_SEGMENT = Regex("\\d+")
private val ID_SEGMENT = Regex("[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|[0-9a-fA-F]{16,}")
private val PLAIN_SEGMENT = Regex("[A-Za-z0-9._~-]+")

internal enum class VitalKind(
    val good: Double,
    val poor: Double,
    val largest: Double,
) {
    TTFB(800.0, 1800.0, LONGEST_TIMING),
    FCP(1800.0, 3000.0, LONGEST_TIMING),
    LCP(2500.0, 4000.0, LONGEST_TIMING),
    INP(200.0, 500.0, LONGEST_TIMING),
    CLS(0.1, 0.25, LARGEST_SHIFT),
}

@Serializable
internal data class VitalsReport(
    val page: String = "",
    val metrics: Map<String, Double> = emptyMap(),
)

internal fun vitalPage(
    path: String,
    paramRoutes: List<String>,
): String? {
    val segments =
        path
            .substringBefore('?')
            .substringBefore('#')
            .trim('/')
            .split('/')
            .filter { it.isNotEmpty() }
    if (path.length > MAX_PAGE_LENGTH || !path.startsWith("/") || segments.any { !PLAIN_SEGMENT.matches(it) }) return null
    paramRoutes.forEach { route ->
        val pattern = route.trim('/').split('/').filter { it.isNotEmpty() }
        val fits = pattern.size == segments.size && pattern.indices.all { pattern[it].startsWith("[") || pattern[it] == segments[it] }
        if (fits) return "/" + pattern.joinToString("/")
    }
    return "/" + segments.joinToString("/") { if (NUMBER_SEGMENT.matches(it) || ID_SEGMENT.matches(it)) "[id]" else it }
}

internal class WebVitalStore {
    private class Tally {
        var count = 0L
        var sum = 0.0
        var good = 0L
        var middle = 0L
        var poor = 0L
    }

    private val tallies = ConcurrentHashMap<Pair<String, VitalKind>, Tally>()
    private val pages = ConcurrentHashMap.newKeySet<String>()

    fun record(
        page: String,
        kind: VitalKind,
        value: Double,
    ) {
        val known = if (page in pages || pages.size < MAX_PAGES) page.also(pages::add) else OTHER_PAGES
        val tally = tallies.computeIfAbsent(known to kind) { Tally() }
        synchronized(tally) {
            tally.count++
            tally.sum += value
            when {
                value <= kind.good -> tally.good++
                value <= kind.poor -> tally.middle++
                else -> tally.poor++
            }
        }
    }

    fun snapshot(): List<WebVital> =
        tallies.entries
            .map { (key, tally) ->
                synchronized(
                    tally,
                ) { WebVital(key.first, key.second.name, tally.count, tally.sum / tally.count, tally.good, tally.middle, tally.poor) }
            }.sortedWith(compareBy({ it.page }, { VitalKind.valueOf(it.name).ordinal }))
}

internal fun recordVitals(
    store: WebVitalStore,
    report: VitalsReport,
    paramRoutes: List<String>,
): Boolean {
    val page = vitalPage(report.page, paramRoutes) ?: return false
    val known =
        report.metrics.mapNotNull { (name, value) ->
            val kind = VitalKind.entries.firstOrNull { it.name == name } ?: return@mapNotNull null
            if (value.isFinite() && value >= 0 && value <= kind.largest) kind to value else null
        }
    known.forEach { (kind, value) -> store.record(page, kind, value) }
    return known.isNotEmpty()
}

@OptIn(ExperimentalKtorApi::class)
internal fun Route.webVitalsRoute(
    store: WebVitalStore,
    perClientPerMinute: Int,
    paramRoutes: List<String>,
) {
    val limiter = ReportLimiter(perClientPerMinute)
    post(WEB_VITALS_PATH) {
        call.response.headers.append(HttpHeaders.CacheControl, "no-store")
        if (!limiter.allows(call.request.origin.remoteAddress)) return@post call.respond(HttpStatusCode.TooManyRequests)
        val declared = call.request.header(HttpHeaders.ContentLength)?.toLongOrNull()
        if (declared != null && declared > MAX_BODY_BYTES) return@post call.respond(HttpStatusCode.PayloadTooLarge)
        val body = call.receiveTextUpTo(MAX_BODY_BYTES) ?: return@post call.respond(HttpStatusCode.PayloadTooLarge)
        val report = runCatching { lenient.decodeFromString<VitalsReport>(body) }.getOrNull()
        if (report == null || !recordVitals(store, report, paramRoutes)) return@post call.respond(HttpStatusCode.BadRequest)
        call.respond(HttpStatusCode.NoContent)
    }.hide()
}
