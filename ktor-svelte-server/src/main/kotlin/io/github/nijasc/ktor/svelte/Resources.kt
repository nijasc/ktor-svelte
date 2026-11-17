package io.github.nijasc.ktor.svelte

import io.ktor.http.HttpStatusCode
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.KotlinxJsonSchemaInference
import io.ktor.server.plugins.NotFoundException
import io.ktor.server.request.path
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingContext
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.describe
import io.ktor.server.routing.post
import io.ktor.server.routing.put
import io.ktor.server.routing.route
import io.ktor.util.reflect.TypeInfo
import io.ktor.util.reflect.typeInfo
import io.ktor.utils.io.ExperimentalKtorApi
import io.ktor.utils.io.KtorDsl
import kotlinx.serialization.KSerializer
import kotlinx.serialization.serializer
import kotlin.reflect.KClass
import kotlin.reflect.typeOf

private const val ID = "id"

@PublishedApi
internal class ResourceShape(
    private val idType: KClass<*>,
    private val idSchema: JsonSchema,
    private val itemType: TypeInfo,
    private val itemSchema: JsonSchema,
    private val listType: TypeInfo,
    private val listSchema: JsonSchema,
) {
    private var missing: (suspend RoutingContext.() -> Any)? = null
    private var missingType: TypeInfo? = null
    private var missingSchema: JsonSchema? = null

    fun missing(
        type: TypeInfo,
        schema: JsonSchema,
        body: suspend RoutingContext.() -> Any,
    ) {
        check(missing == null) { "resource: missing is declared twice." }
        check(declared.none { it in setOf("get", "update", "delete") }) {
            "resource: missing comes before get, update and delete, which answer with it."
        }
        missing = body
        missingType = type
        missingSchema = schema
    }

    private val declared = mutableSetOf<String>()

    private fun once(name: String) {
        check(declared.add(name)) { "resource: $name is declared twice." }
    }

    private fun RoutingContext.id(): Any = call.pathParameter(ID, idType)

    private suspend fun RoutingContext.found(
        item: Any?,
        status: HttpStatusCode = HttpStatusCode.OK,
    ) {
        val own = missing
        when {
            item != null -> call.respond(status, item, itemType)
            own != null -> call.respond(HttpStatusCode.NotFound, own(), checkNotNull(missingType))
            else -> throw NotFoundException("Nothing is at ${call.request.path()}.")
        }
    }

    @OptIn(ExperimentalKtorApi::class)
    fun list(
        route: Route,
        handler: suspend RoutingContext.() -> Any,
    ) {
        once("list")
        route.get { call.respond(handler(), listType) }.describe {
            responses { HttpStatusCode.OK { schema = listSchema } }
        }
    }

    @OptIn(ExperimentalKtorApi::class)
    fun <Q : Any> listBy(
        route: Route,
        query: KSerializer<Q>,
        handler: suspend RoutingContext.(Q) -> Any,
    ) {
        once("list")
        route.get { call.respond(handler(readQuery(call, query)), listType) }.describeQuery(query.descriptor).describe {
            responses { HttpStatusCode.OK { schema = listSchema } }
        }
    }

    @OptIn(ExperimentalKtorApi::class)
    fun get(
        route: Route,
        handler: suspend RoutingContext.(Any) -> Any?,
    ) {
        once("get")
        route.get("{$ID}") { found(handler(id())) }.describe {
            parameters { path(ID) { schema = idSchema } }
            responses {
                HttpStatusCode.OK { schema = itemSchema }
                missingSchema?.let { known -> HttpStatusCode.NotFound { schema = known } }
            }
        }
    }

    @OptIn(ExperimentalKtorApi::class)
    fun create(
        route: Route,
        inputType: TypeInfo,
        inputSchema: JsonSchema,
        handler: suspend RoutingContext.(Any) -> Any,
    ) {
        once("create")
        route.post { found(handler(call.receive(inputType)), HttpStatusCode.Created) }.describe {
            requestBody { schema = inputSchema }
            responses { HttpStatusCode.Created { schema = itemSchema } }
        }
    }

    @OptIn(ExperimentalKtorApi::class)
    fun update(
        route: Route,
        inputType: TypeInfo,
        inputSchema: JsonSchema,
        handler: suspend RoutingContext.(Any, Any) -> Any?,
    ) {
        once("update")
        route.put("{$ID}") { found(handler(id(), call.receive(inputType))) }.describe {
            parameters { path(ID) { schema = idSchema } }
            requestBody { schema = inputSchema }
            responses {
                HttpStatusCode.OK { schema = itemSchema }
                missingSchema?.let { known -> HttpStatusCode.NotFound { schema = known } }
            }
        }
    }

    @OptIn(ExperimentalKtorApi::class)
    fun delete(
        route: Route,
        handler: suspend RoutingContext.(Any) -> Boolean,
    ) {
        once("delete")
        route.delete("{$ID}") { if (handler(id())) call.respond(HttpStatusCode.NoContent) else found(null) }.describe {
            parameters { path(ID) { schema = idSchema } }
            responses {
                HttpStatusCode.NoContent {}
                missingSchema?.let { known -> HttpStatusCode.NotFound { schema = known } }
            }
        }
    }
}

@KtorDsl
public class ResourceScope<T : Any, ID : Any>
    @PublishedApi
    internal constructor(
        @PublishedApi internal val route: Route,
        @PublishedApi internal val shape: ResourceShape,
    ) {
        public inline fun <reified E : Any> missing(noinline body: suspend RoutingContext.() -> E) {
            shape.missing(typeInfo<E>(), KotlinxJsonSchemaInference.buildSchema(typeOf<E>()), body)
        }

        public fun list(handler: suspend RoutingContext.() -> List<T>) {
            shape.list(route, handler)
        }

        public inline fun <reified Q : Any> list(noinline handler: suspend RoutingContext.(Q) -> List<T>) {
            shape.listBy(route, serializer<Q>(), handler)
        }

        @Suppress("UNCHECKED_CAST")
        public fun get(handler: suspend RoutingContext.(ID) -> T?) {
            shape.get(route, handler as suspend RoutingContext.(Any) -> Any?)
        }

        @Suppress("UNCHECKED_CAST")
        public inline fun <reified I : Any> create(noinline handler: suspend RoutingContext.(I) -> T) {
            val schema = KotlinxJsonSchemaInference.buildSchema(typeOf<I>())
            shape.create(route, typeInfo<I>(), schema, handler as suspend RoutingContext.(Any) -> Any)
        }

        @Suppress("UNCHECKED_CAST")
        public inline fun <reified I : Any> update(noinline handler: suspend RoutingContext.(ID, I) -> T?) {
            val schema = KotlinxJsonSchemaInference.buildSchema(typeOf<I>())
            shape.update(route, typeInfo<I>(), schema, handler as suspend RoutingContext.(Any, Any) -> Any?)
        }

        @Suppress("UNCHECKED_CAST")
        public fun delete(handler: suspend RoutingContext.(ID) -> Boolean) {
            shape.delete(route, handler as suspend RoutingContext.(Any) -> Boolean)
        }
    }

@JvmName("resourceWithId")
public inline fun <reified T : Any, reified ID : Any> Route.resource(
    path: String,
    crossinline build: ResourceScope<T, ID>.() -> Unit,
): Route =
    route(path) {
        val shape =
            ResourceShape(
                ID::class,
                KotlinxJsonSchemaInference.buildSchema(typeOf<ID>()),
                typeInfo<T>(),
                KotlinxJsonSchemaInference.buildSchema(typeOf<T>()),
                typeInfo<List<T>>(),
                KotlinxJsonSchemaInference.buildSchema(typeOf<List<T>>()),
            )
        ResourceScope<T, ID>(this, shape).build()
    }

public inline fun <reified T : Any> Route.resource(
    path: String,
    crossinline build: ResourceScope<T, String>.() -> Unit,
): Route = resource<T, String>(path, build)
