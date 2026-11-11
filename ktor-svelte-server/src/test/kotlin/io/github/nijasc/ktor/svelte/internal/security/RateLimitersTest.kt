package io.github.nijasc.ktor.svelte.internal.security

import io.ktor.server.plugins.ratelimit.RateLimiter
import kotlinx.coroutines.runBlocking
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertIs
import kotlin.time.Duration.Companion.milliseconds
import kotlin.time.Duration.Companion.seconds

class RateLimitersTest {
    private var now = 0L

    private fun RateLimiter.allowed(tokens: Int = 1) = runBlocking { tryConsume(tokens) } is RateLimiter.State.Available

    @Test
    fun `a sliding window never lets a burst through at the window edge`() {
        val limiter = SlidingWindowRateLimiter(2, 10.seconds) { now }
        now = 9_000
        assertEquals(true, limiter.allowed())
        assertEquals(true, limiter.allowed())
        now = 10_500
        assertEquals(false, limiter.allowed())
        now = 19_001
        assertEquals(true, limiter.allowed())
        assertEquals(true, limiter.allowed())
        assertEquals(false, limiter.allowed())
    }

    @Test
    fun `a sliding window says how long to wait for the oldest request to expire`() {
        val limiter = SlidingWindowRateLimiter(1, 10.seconds) { now }
        limiter.allowed()
        now = 4_000
        val state = runBlocking { limiter.tryConsume(1) }
        assertIs<RateLimiter.State.Exhausted>(state)
        assertEquals(6_000.milliseconds, state.toWait)
    }

    @Test
    fun `a token bucket refills gradually`() {
        val limiter = TokenBucketRateLimiter(4, 4.seconds) { now }
        repeat(4) { assertEquals(true, limiter.allowed()) }
        assertEquals(false, limiter.allowed())
        now = 1_000
        assertEquals(true, limiter.allowed())
        assertEquals(false, limiter.allowed())
        now = 10_000
        repeat(4) { assertEquals(true, limiter.allowed()) }
        assertEquals(false, limiter.allowed())
    }

    @Test
    fun `requests with no weight are always allowed`() {
        val sliding = SlidingWindowRateLimiter(1, 1.seconds) { now }
        val bucket = TokenBucketRateLimiter(1, 1.seconds) { now }
        sliding.allowed()
        bucket.allowed()
        assertEquals(true, sliding.allowed(0))
        assertEquals(true, bucket.allowed(0))
    }
}
