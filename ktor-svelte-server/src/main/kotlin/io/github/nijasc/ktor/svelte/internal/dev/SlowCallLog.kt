package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.github.nijasc.ktor.svelte.internal.typescript.SourceLocation
import io.github.nijasc.ktor.svelte.internal.typescript.handlerSource
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.log
import io.ktor.server.request.httpMethod
import io.ktor.server.request.uri
import io.ktor.server.routing.RoutingNode
import io.ktor.server.routing.RoutingRoot
import io.ktor.util.AttributeKey
import java.util.concurrent.ConcurrentHashMap
import kotlin.time.Duration
import kotlin.time.Duration.Companion.nanoseconds

private val StartedAt = AttributeKey<Long>("KtorSvelteStartedAt")
private val MatchedRoute = AttributeKey<RoutingNode>("KtorSvelteMatchedRoute")

internal class SlowCallLog(
    private val threshold: Duration,
    private val resolver: RequestResolver,
    private val clock: () -> Long = System::nanoTime,
) {
    private val sources = ConcurrentHashMap<RoutingNode, Any>()
    private val unknown = Any()

    fun install(application: Application) {
        application.monitor.subscribe(RoutingRoot.RoutingCallStarted) { call ->
            call.attributes.put(MatchedRoute, call.route)
        }
    }

    fun started(call: ApplicationCall) {
        call.attributes.put(StartedAt, clock())
    }

    fun finished(call: ApplicationCall) {
        val startedAt = call.attributes.getOrNull(StartedAt) ?: return
        if (!resolver.isApiPath(decodedPathOrRaw(call))) return
        val took = (clock() - startedAt).nanoseconds
        if (took < threshold) return
        call.application.log.warn(message(call, took))
    }

    fun message(
        call: ApplicationCall,
        took: Duration,
    ): String {
        val source = call.attributes.getOrNull(MatchedRoute)?.let(::sourceFor)
        val where = source?.let { " (${it.file}:${it.line})" }.orEmpty()
        return "ktor-svelte: slow API call ${call.request.httpMethod.value} ${call.request.uri} took ${took.inWholeMilliseconds} ms$where"
    }

    private fun sourceFor(node: RoutingNode): SourceLocation? = sources.getOrPut(node) { handlerSource(node) ?: unknown } as? SourceLocation
}
