package io.github.nijasc.ktor.svelte.internal.security

import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.plugins.PayloadTooLargeException
import io.ktor.server.request.ApplicationReceivePipeline
import io.ktor.server.request.contentType
import io.ktor.util.AttributeKey
import io.ktor.utils.io.ByteReadChannel
import io.ktor.utils.io.readAvailable
import io.ktor.utils.io.writeFully
import io.ktor.utils.io.writer
import kotlinx.coroutines.CoroutineScope

internal class JsonShapeException(
    override val message: String,
) : IllegalArgumentException(message)

internal class JsonShapeScanner(
    private val maxDepth: Int?,
    private val maxStringLength: Int?,
) {
    private var depth = 0
    private var inString = false
    private var escaped = false
    private var stringLength = 0

    fun feed(
        bytes: ByteArray,
        count: Int,
    ) {
        for (index in 0 until count) {
            val byte = bytes[index].toInt()
            if (inString) {
                inStringByte(byte)
                continue
            }
            when (byte) {
                '"'.code -> {
                    inString = true
                    stringLength = 0
                }
                '{'.code, '['.code -> {
                    depth++
                    if (maxDepth != null && depth > maxDepth) {
                        throw JsonShapeException("Request JSON is nested deeper than $maxDepth levels.")
                    }
                }
                '}'.code, ']'.code -> depth--
            }
        }
    }

    private fun inStringByte(byte: Int) {
        when {
            escaped -> escaped = false
            byte == '\\'.code -> escaped = true
            byte == '"'.code -> {
                inString = false
                return
            }
        }
        if (byte and 0xC0 != 0x80) stringLength++
        if (maxStringLength != null && stringLength > maxStringLength) {
            throw JsonShapeException("Request JSON has a string longer than $maxStringLength characters.")
        }
    }
}

internal fun Throwable.findJsonShapeException(): JsonShapeException? =
    generateSequence(this) { it.cause }.take(16).filterIsInstance<JsonShapeException>().firstOrNull()

internal val BodyTooLarge = AttributeKey<Boolean>("KtorSvelteBodyTooLarge")

internal fun installJsonShapeLimits(
    application: Application,
    resolver: RequestResolver,
    maxDepth: Int?,
    maxStringLength: Int?,
) {
    if (maxDepth == null && maxStringLength == null) return
    application.receivePipeline.intercept(ApplicationReceivePipeline.Before) { body ->
        if (body !is ByteReadChannel || !isJsonApiCall(context, resolver)) return@intercept
        proceedWith(scanned(this, context, body, JsonShapeScanner(maxDepth, maxStringLength)))
    }
}

private fun isJsonApiCall(
    call: ApplicationCall,
    resolver: RequestResolver,
): Boolean {
    val type = call.request.contentType()
    val json = type.match(ContentType.Application.Json) || type.contentSubtype.endsWith("+json")
    return json && resolver.isApiPath(decodedPathOrRaw(call))
}

private fun scanned(
    scope: CoroutineScope,
    call: ApplicationCall,
    source: ByteReadChannel,
    scanner: JsonShapeScanner,
): ByteReadChannel =
    scope
        .writer {
            val buffer = ByteArray(8192)
            while (true) {
                val read =
                    try {
                        source.readAvailable(buffer)
                    } catch (tooLarge: PayloadTooLargeException) {
                        call.attributes.put(BodyTooLarge, true)
                        throw tooLarge
                    }
                if (read < 0) {
                    val closed = source.closedCause
                    if (closed is PayloadTooLargeException) {
                        call.attributes.put(BodyTooLarge, true)
                        throw closed
                    }
                    break
                }
                if (read == 0) continue
                scanner.feed(buffer, read)
                channel.writeFully(buffer, 0, read)
            }
        }.channel

internal suspend fun respondJsonShape(
    call: ApplicationCall,
    cause: JsonShapeException,
) {
    respondJsonMessage(call, HttpStatusCode.BadRequest, cause.message)
}
