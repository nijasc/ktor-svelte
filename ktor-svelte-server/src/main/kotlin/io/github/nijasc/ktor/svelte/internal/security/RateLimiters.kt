package io.github.nijasc.ktor.svelte.internal.security

import io.github.nijasc.ktor.svelte.RateLimitAlgorithm
import io.ktor.server.plugins.ratelimit.RateLimiter
import kotlin.math.ceil
import kotlin.math.min
import kotlin.time.Duration
import kotlin.time.Duration.Companion.milliseconds

internal class SlidingWindowRateLimiter(
    private val limit: Int,
    private val period: Duration,
    private val clock: () -> Long = System::currentTimeMillis,
) : RateLimiter {
    private val consumed = ArrayDeque<Long>()

    override suspend fun tryConsume(tokens: Int): RateLimiter.State =
        synchronized(this) {
            val now = clock()
            val windowStart = now - period.inWholeMilliseconds
            while (consumed.isNotEmpty() && consumed.first() <= windowStart) consumed.removeFirst()
            if (consumed.size + tokens > limit) {
                val oldest = consumed.firstOrNull() ?: now
                return RateLimiter.State.Exhausted((oldest + period.inWholeMilliseconds - now).coerceAtLeast(1).milliseconds)
            }
            repeat(tokens) { consumed.addLast(now) }
            val resetAt = (consumed.firstOrNull() ?: now) + period.inWholeMilliseconds
            RateLimiter.State.Available(limit - consumed.size, limit, resetAt)
        }
}

internal class TokenBucketRateLimiter(
    private val capacity: Int,
    private val period: Duration,
    private val clock: () -> Long = System::currentTimeMillis,
) : RateLimiter {
    private val tokensPerMillisecond = capacity.toDouble() / period.inWholeMilliseconds
    private var available = capacity.toDouble()
    private var lastRefill = clock()

    override suspend fun tryConsume(tokens: Int): RateLimiter.State =
        synchronized(this) {
            val now = clock()
            available = min(capacity.toDouble(), available + (now - lastRefill) * tokensPerMillisecond)
            lastRefill = now
            if (available < tokens) {
                val missing = tokens - available
                return RateLimiter.State.Exhausted(ceil(missing / tokensPerMillisecond).toLong().coerceAtLeast(1).milliseconds)
            }
            available -= tokens
            val untilFull = ((capacity - available) / tokensPerMillisecond).toLong()
            RateLimiter.State.Available(available.toInt(), capacity, now + untilFull)
        }
}

internal fun RateLimitAlgorithm.limiter(
    limit: Int,
    period: Duration,
): RateLimiter? =
    when (this) {
        RateLimitAlgorithm.FixedWindow -> null
        RateLimitAlgorithm.SlidingWindow -> SlidingWindowRateLimiter(limit, period)
        RateLimitAlgorithm.TokenBucket -> TokenBucketRateLimiter(limit, period)
    }
