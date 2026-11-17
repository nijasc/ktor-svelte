package io.github.nijasc.ktor.svelte.internal.dev

import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put

internal const val DEV_MIGRATIONS_PATH = "/_ktor-svelte/dev/migrations"
private const val FLYWAY = "org.flywaydb.core.Flyway"
private const val EXPOSED_DATABASE = "org.jetbrains.exposed.v1.jdbc.Database"

private fun hasClass(
    name: String,
    classLoader: ClassLoader,
): Boolean = runCatching { Class.forName(name, false, classLoader) }.isSuccess

internal fun migrationsJson(classLoader: ClassLoader): JsonObject =
    when {
        !hasClass(FLYWAY, classLoader) -> buildJsonObject { put("tool", JsonNull) }
        !hasClass(EXPOSED_DATABASE, classLoader) ->
            buildJsonObject {
                put("tool", "Flyway")
                put("note", "The dev panel reads Flyway's history through Exposed, which this app does not use.")
            }
        else ->
            runCatching { FlywayMigrations.read(classLoader) }.getOrElse { problem ->
                buildJsonObject {
                    put("tool", "Flyway")
                    put("error", problem.message ?: problem.javaClass.simpleName)
                }
            }
    }

internal fun Route.devMigrationsRoute(
    allowRemote: Boolean,
    classLoader: () -> ClassLoader,
) {
    get(DEV_MIGRATIONS_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        val state = withContext(Dispatchers.IO) { migrationsJson(classLoader()) }
        call.respondText(state.toString(), ContentType.Application.Json)
    }
}
