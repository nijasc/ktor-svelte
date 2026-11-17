package io.github.nijasc.ktor.svelte.internal.dev

import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.request.header
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.addJsonObject
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import kotlinx.serialization.json.putJsonArray
import kotlinx.serialization.json.putJsonObject
import java.lang.management.ManagementFactory
import java.lang.management.MemoryUsage

internal const val DEV_RUNTIME_PATH = "/_ktor-svelte/dev/runtime"

private fun MemoryUsage.toJson(): JsonObject =
    buildJsonObject {
        put("used", used)
        put("committed", committed)
        if (max >= 0) put("max", max)
    }

internal fun runtimeJson(): JsonObject {
    val memory = ManagementFactory.getMemoryMXBean()
    val threads = ManagementFactory.getThreadMXBean()
    val runtime = ManagementFactory.getRuntimeMXBean()
    val states =
        Thread
            .getAllStackTraces()
            .keys
            .groupingBy { it.state.name }
            .eachCount()
            .toSortedMap()
    return buildJsonObject {
        put("uptime", runtime.uptime)
        put("processors", Runtime.getRuntime().availableProcessors())
        put("heap", memory.heapMemoryUsage.toJson())
        put("nonHeap", memory.nonHeapMemoryUsage.toJson())
        putJsonArray("collectors") {
            ManagementFactory.getGarbageCollectorMXBeans().forEach { collector ->
                addJsonObject {
                    put("name", collector.name)
                    put("count", collector.collectionCount)
                    put("ms", collector.collectionTime)
                }
            }
        }
        putJsonObject("threads") {
            put("live", threads.threadCount)
            put("daemon", threads.daemonThreadCount)
            put("peak", threads.peakThreadCount)
            put("started", threads.totalStartedThreadCount)
            putJsonObject("states") { states.forEach { (state, count) -> put(state, count) } }
        }
    }
}

internal fun Route.devRuntimeRoute(allowRemote: Boolean) {
    get(DEV_RUNTIME_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respondText(runtimeJson().toString(), ContentType.Application.Json)
    }
    post("$DEV_RUNTIME_PATH/gc") {
        call.response.header(HttpHeaders.CacheControl, "no-store")
        when {
            !allowRemote && !isLocalCall(call) ->
                call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            call.request.header(DEV_CLIENT_HEADER) == null ->
                call.respondText("Only the ktor-svelte dev panel asks for a garbage collection.", status = HttpStatusCode.Forbidden)
            else -> {
                System.gc()
                call.respondText("", status = HttpStatusCode.NoContent)
            }
        }
    }
}
