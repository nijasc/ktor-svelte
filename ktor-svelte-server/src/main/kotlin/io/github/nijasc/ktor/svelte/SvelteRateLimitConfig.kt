package io.github.nijasc.ktor.svelte

import io.ktor.utils.io.KtorDsl
import kotlin.time.Duration
import kotlin.time.Duration.Companion.minutes

@KtorDsl
public class SvelteRateLimitConfig {
    internal val namedLimits: MutableMap<String, Pair<Int, Duration>> = linkedMapOf()

    public var enabled: Boolean = true
    public var apiWrites: Int = 120
    public var period: Duration = 1.minutes

    public fun limit(
        name: String,
        requests: Int,
        per: Duration,
    ) {
        require(requests > 0) { "A rate limit needs at least one request per period." }
        require(per.isPositive()) { "A rate limit needs a positive period." }
        namedLimits[name] = requests to per
    }
}
