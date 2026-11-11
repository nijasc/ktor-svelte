package io.github.nijasc.ktor.svelte

import io.ktor.server.application.ApplicationCall
import io.ktor.server.plugins.origin
import io.ktor.utils.io.KtorDsl
import kotlin.time.Duration
import kotlin.time.Duration.Companion.minutes

internal class NamedRateLimit(
    val requests: Int,
    val period: Duration,
    val key: (suspend (ApplicationCall) -> Any)?,
)

@KtorDsl
public class SvelteRateLimitConfig {
    internal val namedLimits: MutableMap<String, NamedRateLimit> = linkedMapOf()
    internal var clientKey: suspend (ApplicationCall) -> Any = { call -> call.request.origin.remoteHost }
        private set

    public var enabled: Boolean = true
    public var apiWrites: Int = 120
    public var period: Duration = 1.minutes

    public fun key(key: suspend (ApplicationCall) -> Any) {
        clientKey = key
    }

    public fun limit(
        name: String,
        requests: Int,
        per: Duration,
        key: (suspend (ApplicationCall) -> Any)? = null,
    ) {
        require(requests > 0) { "A rate limit needs at least one request per period." }
        require(per.isPositive()) { "A rate limit needs a positive period." }
        namedLimits[name] = NamedRateLimit(requests, per, key)
    }
}
