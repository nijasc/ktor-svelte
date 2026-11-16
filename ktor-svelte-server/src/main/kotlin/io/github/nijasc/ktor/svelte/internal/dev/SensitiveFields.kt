@file:OptIn(ExperimentalSerializationApi::class)

package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.Sensitive
import io.ktor.server.application.Application
import io.ktor.server.application.call
import io.ktor.server.application.receiveType
import io.ktor.server.request.ApplicationReceivePipeline
import io.ktor.server.response.ApplicationSendPipeline
import io.ktor.server.response.responseType
import io.ktor.util.reflect.TypeInfo
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.elementDescriptors
import kotlinx.serialization.serializerOrNull
import java.util.concurrent.ConcurrentHashMap
import kotlin.reflect.KType

private const val DEEPEST_TYPE = 32
private const val MASK = "***"
private val QUERY_PARAMETER = Regex("""([?&])([^=&#]+)=([^&#]*)""")

internal class SensitiveFields {
    private val seenTypes = ConcurrentHashMap.newKeySet<KType>()
    private val found = ConcurrentHashMap.newKeySet<String>()

    val names: Set<String> get() = found

    fun learnFrom(type: TypeInfo?) {
        val kotlinType = type?.kotlinType ?: return
        if (!seenTypes.add(kotlinType)) return
        val descriptor = runCatching { serializerOrNull(kotlinType)?.descriptor }.getOrNull() ?: return
        learnFrom(descriptor, mutableSetOf(), 0)
    }

    fun learnFrom(
        descriptor: SerialDescriptor,
        seen: MutableSet<String> = mutableSetOf(),
        depth: Int = 0,
    ) {
        if (depth > DEEPEST_TYPE || !seen.add(descriptor.serialName)) return
        for (index in 0 until descriptor.elementsCount) {
            if (descriptor.getElementAnnotations(index).any { it is Sensitive }) found += descriptor.getElementName(index)
            learnFrom(descriptor.getElementDescriptor(index), seen, depth + 1)
        }
        descriptor.elementDescriptors.forEach { learnFrom(it, seen, depth + 1) }
    }

    fun maskQuery(uri: String): String {
        if (found.isEmpty() || '?' !in uri) return uri
        return QUERY_PARAMETER.replace(uri) { match ->
            val (separator, name, _) = match.destructured
            if (found.any { it.equals(name, ignoreCase = true) }) "$separator$name=$MASK" else match.value
        }
    }

    fun install(application: Application) {
        application.receivePipeline.intercept(ApplicationReceivePipeline.Before) { learnFrom(call.receiveType) }
        application.sendPipeline.intercept(ApplicationSendPipeline.Before) { learnFrom(call.response.responseType) }
    }
}
