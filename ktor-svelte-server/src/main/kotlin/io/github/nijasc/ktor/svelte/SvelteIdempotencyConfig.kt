package io.github.nijasc.ktor.svelte

import io.ktor.utils.io.KtorDsl
import kotlin.time.Duration
import kotlin.time.Duration.Companion.minutes

@KtorDsl
public class SvelteIdempotencyConfig internal constructor() {
    internal var enabled: Boolean = false
    public var ttl: Duration = 10.minutes
    public var maxEntries: Int = 10_000
}
