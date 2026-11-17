package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.security.respondJsonMessage
import io.github.nijasc.ktor.svelte.internal.typescript.FIELDS_EXTENSION
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCallPipeline
import io.ktor.server.application.call
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingNode
import io.ktor.server.routing.application
import io.ktor.server.routing.openapi.describe
import io.ktor.util.AttributeKey
import io.ktor.util.pipeline.PipelinePhase
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.serializer

private const val FIELDS_PARAMETER = "fields"
private val SparseFieldsPhase = PipelinePhase("KtorSvelteSparseFields")
internal val AskedFields = AttributeKey<AskedFieldSet>("KtorSvelteAskedFields")

@Serializable
internal data class SparseFieldsSpec(
    val type: String,
    val fields: List<String>,
)

internal class AskedFieldSet(
    val asked: Set<String>,
    val known: Set<String>,
)

public inline fun <reified T : Any> Route.sparseFields(): Route {
    val descriptor = serializer<T>().descriptor
    return sparseFields(
        T::class.simpleName ?: descriptor.serialName.substringAfterLast('.'),
        List(descriptor.elementsCount, descriptor::getElementName),
    )
}

@PublishedApi
@OptIn(ExperimentalKtorApi::class)
internal fun Route.sparseFields(
    type: String,
    fields: List<String>,
): Route {
    require(fields.isNotEmpty()) { "sparseFields needs a class with at least one field, but $type has none." }
    val known = fields.toSet()
    application.installAnswerShaping()
    val node = this as? RoutingNode
    if (node != null) {
        node.insertPhaseBefore(ApplicationCallPipeline.Call, SparseFieldsPhase)
        node.intercept(SparseFieldsPhase) {
            val asked = askedList(call, FIELDS_PARAMETER) ?: return@intercept
            val unknown = asked.filterNot { it in known }
            when {
                asked.isEmpty() -> {
                    respondJsonMessage(
                        call,
                        HttpStatusCode.BadRequest,
                        "fields names the fields to send, such as ?fields=${fields.first()}.",
                    )
                    finish()
                }
                unknown.isNotEmpty() -> {
                    val list = unknown.joinToString(", ")
                    respondJsonMessage(
                        call,
                        HttpStatusCode.BadRequest,
                        "$list ${if (unknown.size == 1) "is not a field" else "are not fields"} of $type. Ask for ${fields.joinToString(
                            ", ",
                        )}.",
                    )
                    finish()
                }
                else -> call.attributes.put(AskedFields, AskedFieldSet(asked.toSet(), known))
            }
        }
    }
    return describe { extension(FIELDS_EXTENSION, SparseFieldsSpec(type, fields)) }
}
