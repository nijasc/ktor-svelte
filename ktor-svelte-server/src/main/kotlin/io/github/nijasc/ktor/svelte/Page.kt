package io.github.nijasc.ktor.svelte

import io.ktor.http.HttpStatusCode
import io.ktor.openapi.jsonSchema
import io.ktor.server.application.ApplicationCall
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingContext
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.describe
import io.ktor.util.reflect.TypeInfo
import io.ktor.util.reflect.typeInfo
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.EncodeDefault
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.Serializable

public const val DEFAULT_PAGE_LIMIT: Int = 50
public const val LARGEST_PAGE_LIMIT: Int = 100

@Serializable
public data class Page<T>(
    val items: List<T>,
    val next: String? = null,
    @OptIn(ExperimentalSerializationApi::class)
    @EncodeDefault(EncodeDefault.Mode.NEVER)
    val total: Long? = null,
) {
    public constructor(items: List<T>, next: String?) : this(items, next, null)
}

public data class PageRequest(
    val cursor: String?,
    val limit: Int,
    val wantsTotal: Boolean = false,
) {
    public constructor(cursor: String?, limit: Int) : this(cursor, limit, false)

    public inline fun total(count: () -> Long): Long? = if (wantsTotal) count() else null
}

private val TOTAL_ASKED = setOf("true", "1")

private fun ApplicationCall.pageRequest(
    defaultLimit: Int,
    maxLimit: Int,
): PageRequest {
    val asked = request.queryParameters["limit"]?.toIntOrNull() ?: defaultLimit
    return PageRequest(
        request.queryParameters["cursor"]?.takeIf { it.isNotEmpty() },
        asked.coerceIn(1, maxLimit),
        request.queryParameters["total"]?.lowercase() in TOTAL_ASKED,
    )
}

@PublishedApi
internal fun <T : Any> Route.pagedRoute(
    path: String,
    defaultLimit: Int,
    maxLimit: Int,
    pageType: TypeInfo,
    body: suspend RoutingContext.(PageRequest) -> Page<T>,
): Route {
    require(maxLimit >= 1) { "maxLimit must be at least 1, but is $maxLimit." }
    return get(path) { call.respond(body(call.pageRequest(defaultLimit, maxLimit)), pageType) }
}

@OptIn(ExperimentalKtorApi::class)
public inline fun <reified T : Any> Route.getPage(
    path: String = "",
    defaultLimit: Int = DEFAULT_PAGE_LIMIT,
    maxLimit: Int = LARGEST_PAGE_LIMIT,
    noinline body: suspend RoutingContext.(PageRequest) -> Page<T>,
): Route =
    pagedRoute(path, defaultLimit, maxLimit, typeInfo<Page<T>>(), body).describe {
        parameters {
            query("cursor") { required = false }
            query("limit") { required = false }
            query("total") {
                required = false
                schema = jsonSchema<Boolean>()
            }
        }
        responses {
            HttpStatusCode.OK { schema = jsonSchema<Page<T>>() }
        }
    }
