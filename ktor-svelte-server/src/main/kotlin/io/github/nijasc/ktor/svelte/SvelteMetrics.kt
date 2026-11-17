package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.RouteMetricStore
import io.github.nijasc.ktor.svelte.internal.WebVitalStore
import io.ktor.server.application.Application
import io.ktor.util.AttributeKey
import java.util.concurrent.atomic.AtomicLong

public class WebVital internal constructor(
    public val page: String,
    public val name: String,
    public val count: Long,
    public val average: Double,
    public val good: Long,
    public val needsImprovement: Long,
    public val poor: Long,
)

public enum class RouteKind {
    Api,
    Page,
}

public class LatencyBucket internal constructor(
    public val upToMillis: Long?,
    public val count: Long,
)

public class RouteMetric internal constructor(
    public val kind: RouteKind,
    public val method: String,
    public val route: String,
    public val count: Long,
    public val serverErrors: Long,
    public val clientErrors: Long,
    public val averageMillis: Double,
    public val maxMillis: Double,
    public val buckets: List<LatencyBucket>,
) {
    public val errorRate: Double get() = if (count == 0L) 0.0 else serverErrors.toDouble() / count

    public fun percentileMillis(fraction: Double): Long? {
        require(fraction > 0.0 && fraction <= 1.0) { "fraction must be above 0 and at most 1, such as 0.95." }
        var seen = 0L
        buckets.forEach { bucket ->
            seen += bucket.count
            if (seen >= fraction * count) return bucket.upToMillis
        }
        return null
    }
}

public class SvelteMetrics internal constructor() {
    internal val vitals = WebVitalStore()
    internal val routeStore = RouteMetricStore()
    internal val crossOrigin = AtomicLong()
    internal val bodyTooLarge = AtomicLong()
    internal val rateLimited = AtomicLong()

    public val crossOriginRefusals: Long get() = crossOrigin.get()
    public val bodyTooLargeRefusals: Long get() = bodyTooLarge.get()
    public val rateLimitRefusals: Long get() = rateLimited.get()
    public val webVitals: List<WebVital> get() = vitals.snapshot()
    public val routes: List<RouteMetric> get() = routeStore.snapshot()
}

internal val SvelteMetricsKey = AttributeKey<SvelteMetrics>("KtorSvelteMetrics")

public val Application.svelteMetrics: SvelteMetrics
    get() =
        attributes.getOrNull(SvelteMetricsKey)
            ?: error("Install the Svelte plugin before reading svelteMetrics.")
