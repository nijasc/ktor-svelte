package io.github.nijasc.ktor.svelte.internal.security

import io.github.nijasc.ktor.svelte.SvelteRateLimitConfig
import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.ktor.http.HttpMethod
import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.application.pluginOrNull
import io.ktor.server.plugins.origin
import io.ktor.server.plugins.ratelimit.RateLimit
import io.ktor.server.plugins.ratelimit.RateLimitName
import io.ktor.server.request.httpMethod

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
                rateLimiter(limit = config.apiWrites, refillPeriod = config.period)
                requestKey { call -> call.request.origin.remoteHost }
                requestWeight { call, _ ->
                    if (call.request.httpMethod !in READ_METHODS && resolver.isApiPath(decodedPathOrRaw(call))) 1 else 0
                }
            }
        }
        config.namedLimits.forEach { (name, limit) ->
            register(RateLimitName(name)) {
                rateLimiter(limit = limit.first, refillPeriod = limit.second)
                requestKey { call -> call.request.origin.remoteHost }
            }
        }
    }
}
