package io.github.nijasc.ktor.svelte

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

public class SvelteMetrics internal constructor() {
    internal val vitals = WebVitalStore()
    internal val crossOrigin = AtomicLong()
    internal val bodyTooLarge = AtomicLong()
    internal val rateLimited = AtomicLong()

    public val crossOriginRefusals: Long get() = crossOrigin.get()
    public val bodyTooLargeRefusals: Long get() = bodyTooLarge.get()
    public val rateLimitRefusals: Long get() = rateLimited.get()
    public val webVitals: List<WebVital> get() = vitals.snapshot()
}

internal val SvelteMetricsKey = AttributeKey<SvelteMetrics>("KtorSvelteMetrics")

public val Application.svelteMetrics: SvelteMetrics
    get() =
        attributes.getOrNull(SvelteMetricsKey)
            ?: error("Install the Svelte plugin before reading svelteMetrics.")
