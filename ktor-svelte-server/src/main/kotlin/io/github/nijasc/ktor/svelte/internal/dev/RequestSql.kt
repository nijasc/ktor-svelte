package io.github.nijasc.ktor.svelte.internal.dev

import io.ktor.util.AttributeKey
import kotlinx.coroutines.ThreadContextElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.atomic.AtomicInteger
import java.util.concurrent.atomic.AtomicLong
import kotlin.coroutines.CoroutineContext

private const val DISTINCT_STATEMENTS_KEPT = 200
private const val REPEATS_WORTH_A_FLAG = 5
private const val LONGEST_STATEMENT_SHOWN = 300
private const val NANOS_PER_MILLI = 1_000_000.0

internal val RequestSqlKey = AttributeKey<RequestSql>("KtorSvelteDevRequestSql")
internal val currentRequestSql = ThreadLocal<RequestSql?>()

internal class RequestSql {
    private val count = AtomicInteger()
    private val nanos = AtomicLong()
    private val statements = ConcurrentHashMap<String, AtomicInteger>()

    fun ran(
        statement: String,
        tookNanos: Long,
    ) {
        count.incrementAndGet()
        nanos.addAndGet(tookNanos)
        if (statements.size < DISTINCT_STATEMENTS_KEPT || statements.containsKey(statement)) {
            statements.computeIfAbsent(statement) { AtomicInteger() }.incrementAndGet()
        }
    }

    fun summary(): JsonObject? {
        if (count.get() == 0) return null
        val mostRepeated = statements.maxByOrNull { it.value.get() }
        return buildJsonObject {
            put("count", count.get())
            put("ms", nanos.get() / NANOS_PER_MILLI)
            if (mostRepeated != null && mostRepeated.value.get() >= REPEATS_WORTH_A_FLAG) {
                put("repeated", mostRepeated.value.get())
                put("statement", mostRepeated.key.take(LONGEST_STATEMENT_SHOWN))
            }
        }
    }
}

internal class RequestSqlElement(
    private val sql: RequestSql,
) : ThreadContextElement<RequestSql?> {
    companion object Key : CoroutineContext.Key<RequestSqlElement>

    override val key: CoroutineContext.Key<RequestSqlElement> get() = Key

    override fun updateThreadContext(context: CoroutineContext): RequestSql? {
        val before = currentRequestSql.get()
        currentRequestSql.set(sql)
        return before
    }

    override fun restoreThreadContext(
        context: CoroutineContext,
        oldState: RequestSql?,
    ) {
        currentRequestSql.set(oldState)
    }
}
