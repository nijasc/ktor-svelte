package io.github.nijasc.ktor.svelte

import kotlinx.serialization.Serializable
import kotlin.time.Clock
import kotlin.time.Instant

@Serializable
public data class Stamps(
    val createdAt: Instant,
    val updatedAt: Instant,
    val createdBy: String? = null,
    val updatedBy: String? = null,
) {
    public fun touched(
        by: String? = null,
        at: Instant = Clock.System.now(),
    ): Stamps = copy(updatedAt = at, updatedBy = by)

    public companion object {
        public fun created(
            by: String? = null,
            at: Instant = Clock.System.now(),
        ): Stamps = Stamps(at, at, by, by)
    }
}
