package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.security.respondJsonMessage
import io.github.nijasc.ktor.svelte.internal.typescript.INCLUDE_EXTENSION
import io.ktor.http.HttpStatusCode
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.KotlinxJsonSchemaInference
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.ApplicationCallPipeline
import io.ktor.server.application.call
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingNode
import io.ktor.server.routing.application
import io.ktor.server.routing.openapi.describe
import io.ktor.util.AttributeKey
import io.ktor.util.pipeline.PipelinePhase
import io.ktor.utils.io.ExperimentalKtorApi
import io.ktor.utils.io.KtorDsl
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.serializer
import kotlin.reflect.KClass
import kotlin.reflect.typeOf

private const val INCLUDE_PARAMETER = "include"
private val RELATION_NAME = Regex("[A-Za-z_][A-Za-z0-9_]*")
private val IncludesPhase = PipelinePhase("KtorSvelteIncludes")
internal val AskedIncludes = AttributeKey<AskedRelations>("KtorSvelteAskedIncludes")

internal class Relation(
    val name: String,
    val serializer: KSerializer<Any?>,
    val schema: JsonSchema,
    val resolve: suspend ApplicationCall.(List<Any>) -> List<Any?>,
)

internal class AskedRelations(
    val itemType: KClass<*>,
    val relations: List<Relation>,
    val known: Set<String>,
)

@Serializable
internal data class IncludeSpec(
    val type: String,
    val relations: Map<String, JsonSchema>,
)

@KtorDsl
public class SvelteIncludesConfig<T : Any>
    @PublishedApi
    internal constructor() {
        @PublishedApi
        internal val relations: MutableList<Relation> = mutableListOf()

        public inline fun <reified R> relation(
            name: String,
            noinline resolve: suspend ApplicationCall.(List<T>) -> List<R>,
        ) {
            @Suppress("UNCHECKED_CAST")
            addRelation(
                name,
                serializer<R>() as KSerializer<Any?>,
                KotlinxJsonSchemaInference.buildSchema(typeOf<R>()),
                resolve as suspend ApplicationCall.(List<Any>) -> List<Any?>,
            )
        }

        @PublishedApi
        internal fun addRelation(
            name: String,
            serializer: KSerializer<Any?>,
            schema: JsonSchema,
            resolve: suspend ApplicationCall.(List<Any>) -> List<Any?>,
        ) {
            require(RELATION_NAME.matches(name)) { "includes: a relation name is a plain name such as \"author\", but got '$name'." }
            require(relations.none { it.name == name }) { "includes: the relation '$name' is declared twice." }
            relations += Relation(name, serializer, schema, resolve)
        }
    }

public inline fun <reified T : Any> Route.includes(configure: SvelteIncludesConfig<T>.() -> Unit): Route {
    val descriptor = serializer<T>().descriptor
    val relations = SvelteIncludesConfig<T>().apply(configure).relations
    return includes(
        T::class,
        T::class.simpleName ?: descriptor.serialName.substringAfterLast('.'),
        List(descriptor.elementsCount, descriptor::getElementName),
        relations,
    )
}

@PublishedApi
@OptIn(ExperimentalKtorApi::class)
internal fun Route.includes(
    itemType: KClass<*>,
    type: String,
    fields: List<String>,
    relations: List<Relation>,
): Route {
    require(relations.isNotEmpty()) { "includes needs at least one relation, such as relation<User?>(\"author\") { ... }." }
    relations.firstOrNull { it.name in fields }?.let { clash ->
        throw IllegalArgumentException("includes: '${clash.name}' is already a field of $type. Give the relation another name.")
    }
    application.installAnswerShaping()
    val byName = relations.associateBy { it.name }
    val node = this as? RoutingNode
    if (node != null) {
        node.insertPhaseBefore(ApplicationCallPipeline.Call, IncludesPhase)
        node.intercept(IncludesPhase) {
            val asked = askedList(call, INCLUDE_PARAMETER) ?: return@intercept
            val unknown = asked.filterNot { it in byName }
            when {
                asked.isEmpty() -> {
                    respondJsonMessage(
                        call,
                        HttpStatusCode.BadRequest,
                        "include names the relations to add, such as ?include=${relations.first().name}.",
                    )
                    finish()
                }
                unknown.isNotEmpty() -> {
                    val list = unknown.joinToString(", ")
                    val names = relations.joinToString(", ") { it.name }
                    respondJsonMessage(
                        call,
                        HttpStatusCode.BadRequest,
                        "$list ${if (unknown.size == 1) "is not a relation" else "are not relations"} of $type. Ask for $names.",
                    )
                    finish()
                }
                else -> call.attributes.put(AskedIncludes, AskedRelations(itemType, asked.map(byName::getValue), fields.toSet()))
            }
        }
    }
    return describe { extension(INCLUDE_EXTENSION, IncludeSpec(type, relations.associate { it.name to it.schema })) }
}

internal suspend fun resolveIncludes(
    call: ApplicationCall,
    value: Any?,
): Map<String, List<JsonElement>>? {
    val asked = call.attributes.getOrNull(AskedIncludes) ?: return null
    val items =
        when (value) {
            is Page<*> -> value.items
            is Collection<*> -> value.toList()
            else -> listOf(value)
        }
    if (items.any { it == null || !asked.itemType.isInstance(it) }) return null
    @Suppress("UNCHECKED_CAST")
    val typed = items as List<Any>
    return asked.relations.associate { relation ->
        val values = relation.resolve(call, typed)
        check(values.size == typed.size) {
            "includes: the relation '${relation.name}' gave ${values.size} values for ${typed.size} items. Give one value per item, in order."
        }
        relation.name to values.map { Json.encodeToJsonElement(relation.serializer, it) }
    }
}
