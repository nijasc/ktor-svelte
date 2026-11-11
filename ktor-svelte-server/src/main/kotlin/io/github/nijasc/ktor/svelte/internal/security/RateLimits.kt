package io.github.nijasc.ktor.svelte.internal.security

import io.github.nijasc.ktor.svelte.RateLimitAlgorithm
import io.github.nijasc.ktor.svelte.SvelteRateLimitConfig
import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.ktor.http.HttpMethod
import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.application.pluginOrNull
import io.ktor.server.plugins.ratelimit.RateLimit
import io.ktor.server.plugins.ratelimit.RateLimitName
import io.ktor.server.plugins.ratelimit.RateLimitProviderConfig
import io.ktor.server.request.httpMethod
import kotlin.time.Duration

private val READ_METHODS = setOf(HttpMethod.Get, HttpMethod.Head, HttpMethod.Options, HttpMethod("TRACE"))
private const val RATE_LIMIT_CONFLICT_MESSAGE =
    "RateLimit is already installed. Set rateLimit { enabled = false } in install(Svelte) to keep your own limits."

internal fun installRateLimits(
    application: Application,
    config: SvelteRateLimitConfig,
    resolver: RequestResolver,
) {
    if (!config.enabled) return
    check(application.pluginOrNull(RateLimit) == null) { RATE_LIMIT_CONFLICT_MESSAGE }
    application.install(RateLimit) {
        if (config.apiWrites > 0) {
            global {
                useLimiter(config.algorithm, config.apiWrites, config.period)
                requestKey(config.clientKey)
                requestWeight { call, _ ->
                    if (call.request.httpMethod !in READ_METHODS && resolver.isApiPath(decodedPathOrRaw(call))) 1 else 0
                }
            }
        }
        config.namedLimits.forEach { (name, limit) ->
            register(RateLimitName(name)) {
                useLimiter(limit.algorithm, limit.requests, limit.period)
                requestKey(limit.key ?: config.clientKey)
            }
        }
    }
}

private fun RateLimitProviderConfig.useLimiter(
    algorithm: RateLimitAlgorithm,
    limit: Int,
    period: Duration,
) {
    if (algorithm == RateLimitAlgorithm.FixedWindow) {
        rateLimiter(limit = limit, refillPeriod = period)
    } else {
        rateLimiter { _, _ -> algorithm.limiter(limit, period)!! }
    }
}
