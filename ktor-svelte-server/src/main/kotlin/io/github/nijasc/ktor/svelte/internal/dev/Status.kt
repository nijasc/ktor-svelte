package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.SvelteMetrics
import io.github.nijasc.ktor.svelte.internal.assets.MANIFEST_FORMAT_VERSION
import io.github.nijasc.ktor.svelte.internal.assets.Manifest
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.addJsonObject
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import java.security.MessageDigest

internal fun Manifest.fingerprint(): String {
    val digest = MessageDigest.getInstance("SHA-256")
    files.toSortedMap().forEach { (path, entry) -> digest.update("$path\u0000${entry.hash}\n".toByteArray()) }
    return digest.digest().joinToString("") { "%02x".format(it) }
}

private const val P95 = 0.95

internal suspend fun statusJson(
    manifest: Manifest?,
    devProxy: DevProxy?,
    devUrl: String,
    metrics: SvelteMetrics,
): String =
    buildJsonObject {
        put(
            "build",
            buildJsonObject {
                put("present", manifest != null)
                if (manifest != null) {
                    put("formatVersion", MANIFEST_FORMAT_VERSION)
                    put("files", manifest.files.size)
                    put("fingerprint", manifest.fingerprint())
                }
            },
        )
        put(
            "dev",
            buildJsonObject {
                put("proxy", devProxy != null)
                if (devProxy != null) {
                    put("url", devUrl)
                    put("reachable", devProxy.isReachable())
                }
            },
        )
        put(
            "refusals",
            buildJsonObject {
                put("crossOrigin", metrics.crossOriginRefusals)
                put("bodyTooLarge", metrics.bodyTooLargeRefusals)
                put("rateLimit", metrics.rateLimitRefusals)
            },
        )
        val routes = metrics.routes
        if (routes.isNotEmpty()) {
            put(
                "routes",
                buildJsonArray {
                    routes.forEach { route ->
                        addJsonObject {
                            put("kind", route.kind.name.lowercase())
                            put("method", route.method)
                            put("route", route.route)
                            put("count", route.count)
                            put("serverErrors", route.serverErrors)
                            put("clientErrors", route.clientErrors)
                            put("averageMillis", route.averageMillis)
                            put("p95Millis", route.percentileMillis(P95))
                        }
                    }
                },
            )
        }
        val vitals = metrics.webVitals
        if (vitals.isNotEmpty()) {
            put(
                "webVitals",
                buildJsonArray {
                    vitals.forEach { vital ->
                        addJsonObject {
                            put("page", vital.page)
                            put("name", vital.name)
                            put("count", vital.count)
                            put("average", vital.average)
                            put("good", vital.good)
                            put("needsImprovement", vital.needsImprovement)
                            put("poor", vital.poor)
                        }
                    }
                },
            )
        }
    }.toString()

internal fun devStatus(
    status: String,
    health: Boolean?,
    settings: List<String>,
    versions: Map<String, String?>,
    build: Map<String, String?>,
): JsonObject =
    buildJsonObject {
        put("versions", buildJsonObject { versions.forEach { (name, version) -> if (version != null) put(name, version) } })
        put("app", buildJsonObject { build.forEach { (name, value) -> if (value != null) put(name, value) } })
        put(
            "health",
            when (health) {
                null -> "no health checks"
                true -> "up"
                false -> "down"
            },
        )
        put("status", Json.parseToJsonElement(status))
        put("settings", buildJsonArray { settings.forEach { add(JsonPrimitive(it.trim())) } })
    }
