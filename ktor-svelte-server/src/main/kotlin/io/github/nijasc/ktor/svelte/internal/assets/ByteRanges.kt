package io.github.nijasc.ktor.svelte.internal.assets

import java.io.FilterInputStream
import java.io.InputStream

internal sealed interface RangeRequest {
    data class Satisfiable(
        val first: Long,
        val last: Long,
    ) : RangeRequest {
        val length: Long get() = last - first + 1
    }

    data object Unsatisfiable : RangeRequest
}

private val SINGLE_RANGE = Regex("""bytes=(\d*)-(\d*)""")

internal fun parseRange(
    header: String,
    size: Long,
): RangeRequest? {
    val match = SINGLE_RANGE.matchEntire(header.trim()) ?: return null
    val (start, end) = match.destructured
    if (start.isEmpty() && end.isEmpty()) return null
    if (start.isEmpty()) {
        val suffix = end.toLongOrNull() ?: return null
        if (suffix == 0L || size == 0L) return RangeRequest.Unsatisfiable
        return RangeRequest.Satisfiable((size - suffix).coerceAtLeast(0), size - 1)
    }
    val first = start.toLongOrNull() ?: return null
    val last = if (end.isEmpty()) size - 1 else end.toLongOrNull()?.coerceAtMost(size - 1) ?: return null
    if (first >= size || last < first) return RangeRequest.Unsatisfiable
    return RangeRequest.Satisfiable(first, last)
}

internal class BoundedInputStream(
    source: InputStream,
    private var remaining: Long,
) : FilterInputStream(source) {
    override fun read(): Int {
        if (remaining <= 0) return -1
        val value = super.read()
        if (value >= 0) remaining--
        return value
    }

    override fun read(
        buffer: ByteArray,
        offset: Int,
        length: Int,
    ): Int {
        if (remaining <= 0) return -1
        val read = super.read(buffer, offset, minOf(length.toLong(), remaining).toInt())
        if (read > 0) remaining -= read
        return read
    }
}

internal fun InputStream.slice(range: RangeRequest.Satisfiable): InputStream {
    skipNBytes(range.first)
    return BoundedInputStream(this, range.length)
}
