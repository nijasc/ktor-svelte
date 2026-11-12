package io.github.nijasc.ktor.svelte.internal.validation

internal object ConstraintMessages {
    fun minLength(count: Int): String = "Must be at least ${characters(count)}."

    fun maxLength(count: Int): String = "Must be at most ${characters(count)}."

    fun minimum(
        value: Double,
        exclusive: Boolean,
    ): String = "Must be ${if (exclusive) "greater than" else "at least"} ${formatNumber(value)}."

    fun maximum(
        value: Double,
        exclusive: Boolean,
    ): String = "Must be ${if (exclusive) "less than" else "at most"} ${formatNumber(value)}."

    fun pattern(pattern: String): String = "Must match $pattern."

    private fun characters(count: Int): String = if (count == 1) "1 character" else "$count characters"
}

internal fun formatNumber(value: Double): String = if (value % 1.0 == 0.0) value.toLong().toString() else value.toString()
