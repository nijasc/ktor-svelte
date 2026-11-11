package io.github.nijasc.ktor.svelte

import io.ktor.server.application.Application
import io.ktor.util.AttributeKey
import java.util.concurrent.atomic.AtomicLong

public class SvelteMetrics internal constructor() {
    internal val crossOrigin = AtomicLong()
    internal val bodyTooLarge = AtomicLong()
    internal val rateLimited = AtomicLong()

    public val crossOriginRefusals: Long get() = crossOrigin.get()
    public val bodyTooLargeRefusals: Long get() = bodyTooLarge.get()
    public val rateLimitRefusals: Long get() = rateLimited.get()
}

internal val SvelteMetricsKey = AttributeKey<SvelteMetrics>("KtorSvelteMetrics")

public val Application.svelteMetrics: SvelteMetrics
    get() =
        attributes.getOrNull(SvelteMetricsKey)
            ?: error("Install the Svelte plugin before reading svelteMetrics.")
