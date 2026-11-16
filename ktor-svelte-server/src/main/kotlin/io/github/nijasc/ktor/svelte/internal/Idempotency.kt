package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.OutgoingContent
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.ApplicationCallPipeline
import io.ktor.server.application.call
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.response.ApplicationSendPipeline
import io.ktor.server.response.header
import io.ktor.server.response.respondBytes
import io.ktor.server.response.respondText
import io.ktor.util.AttributeKey
import java.security.MessageDigest

internal const val IDEMPOTENCY_HEADER = "Idempotency-Key"
internal const val REPLAYED_HEADER = "Idempotency-Replayed"
private const val LONGEST_KEY = 200
private const val LARGEST_STORED_BODY = 1024 * 1024
private val WRITES = setOf(HttpMethod.Post, HttpMethod.Put, HttpMethod.Patch, HttpMethod.Delete)
private val NOT_REPLAYED = setOf(HttpHeaders.ContentType, HttpHeaders.ContentLength, HttpHeaders.TransferEncoding, HttpHeaders.Date)
private val ScopeKey = AttributeKey<String>("KtorSvelteIdempotencyScope")
private const val IN_PROGRESS_BODY = """{"message":"This request is still being handled.","code":"idempotency.inProgress"}"""

internal class StoredAnswer(
    val status: HttpStatusCode,
    val contentType: ContentType?,
    val headers: List<Pair<String, String>>,
    val body: ByteArray,
)

internal sealed interface Begun {
    data object Fresh : Begun

    data object InProgress : Begun

    class Replay(
        val answer: StoredAnswer,
    ) : Begun
}

internal class IdempotencyStore(
    private val ttlMillis: Long,
    private val maxEntries: Int,
    private val clock: () -> Long = System::currentTimeMillis,
) {
    private class Entry(
        val answer: StoredAnswer?,
        val at: Long,
    )

    private val entries = LinkedHashMap<String, Entry>()

    val size: Int get() = synchronized(entries) { entries.size }

    fun begin(scope: String): Begun =
        synchronized(entries) {
            val now = clock()
            entries.values.removeIf { now - it.at > ttlMillis }
            val known = entries[scope]
            when {
                known == null -> {
                    while (entries.size >= maxEntries) entries.remove(entries.keys.first())
                    entries[scope] = Entry(null, now)
                    Begun.Fresh
                }
                known.answer == null -> Begun.InProgress
                else -> Begun.Replay(known.answer)
            }
        }

    fun finish(
        scope: String,
        answer: StoredAnswer?,
    ) {
        synchronized(entries) {
            if (answer == null) entries.remove(scope) else entries[scope] = Entry(answer, clock())
        }
    }
}

private fun scopeOf(
    call: ApplicationCall,
    key: String,
    path: String,
): String {
    val who = call.request.header(HttpHeaders.Authorization).orEmpty() + "\n" + call.request.header(HttpHeaders.Cookie).orEmpty()
    val digest = MessageDigest.getInstance("SHA-256").digest(who.toByteArray())
    return "${call.request.httpMethod.value} $path $key ${digest.joinToString("") { "%02x".format(it) }}"
}

internal fun installIdempotency(
    application: Application,
    resolver: RequestResolver,
    store: IdempotencyStore,
) {
    application.intercept(ApplicationCallPipeline.Plugins) {
        val key = call.request.header(IDEMPOTENCY_HEADER)?.takeIf { it.isNotBlank() && it.length <= LONGEST_KEY } ?: return@intercept
        val path = decodedPathOrRaw(call)
        if (call.request.httpMethod !in WRITES || !resolver.isApiPath(path)) return@intercept
        val scope = scopeOf(call, key, path)
        when (val begun = store.begin(scope)) {
            Begun.InProgress -> {
                call.respondText(IN_PROGRESS_BODY, ContentType.Application.Json, HttpStatusCode.Conflict)
                finish()
            }
            is Begun.Replay -> {
                begun.answer.headers.forEach { (name, value) -> call.response.header(name, value) }
                call.response.header(REPLAYED_HEADER, "true")
                call.respondBytes(begun.answer.body, begun.answer.contentType, begun.answer.status)
                finish()
            }
            Begun.Fresh -> {
                call.attributes.put(ScopeKey, scope)
                try {
                    proceed()
                } finally {
                    call.attributes.getOrNull(ScopeKey)?.let { store.finish(it, null) }
                }
            }
        }
    }
    application.sendPipeline.intercept(ApplicationSendPipeline.After) { content ->
        val scope = call.attributes.getOrNull(ScopeKey) ?: return@intercept
        call.attributes.remove(ScopeKey)
        val outgoing = content as? OutgoingContent
        val status = outgoing?.status ?: call.response.status() ?: HttpStatusCode.OK
        val body =
            when (outgoing) {
                is OutgoingContent.ByteArrayContent -> outgoing.bytes()
                is OutgoingContent.NoContent -> ByteArray(0)
                else -> null
            }
        if (body == null || body.size > LARGEST_STORED_BODY || status.value >= HttpStatusCode.InternalServerError.value) {
            store.finish(scope, null)
            return@intercept
        }
        val headers =
            call.response.headers
                .allValues()
                .entries()
                .filter { (name, _) -> NOT_REPLAYED.none { it.equals(name, ignoreCase = true) } }
                .flatMap { (name, values) -> values.map { name to it } }
        store.finish(scope, StoredAnswer(status, outgoing?.contentType, headers, body))
    }
}
