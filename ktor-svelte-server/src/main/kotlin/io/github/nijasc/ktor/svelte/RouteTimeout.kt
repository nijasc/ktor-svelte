package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.security.respondJsonMessage
import io.github.nijasc.ktor.svelte.internal.typescript.TIMEOUT_EXTENSION
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCallPipeline
import io.ktor.server.application.call
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingNode
import io.ktor.server.routing.openapi.describe
import io.ktor.util.pipeline.PipelinePhase
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.coroutines.withTimeoutOrNull
import kotlin.time.Duration

private val TimeoutPhase = PipelinePhase("KtorSvelteRouteTimeout")

@OptIn(ExperimentalKtorApi::class)
public fun Route.timeout(limit: Duration): Route {
    require(limit.isPositive() && limit.isFinite()) { "timeout takes a positive duration, such as 5.seconds, but got $limit." }
    val node = this as? RoutingNode
    if (node != null) {
        node.insertPhaseBefore(ApplicationCallPipeline.Call, TimeoutPhase)
        node.intercept(TimeoutPhase) {
            val finished = withTimeoutOrNull(limit) { proceed() }
            if (finished == null && !call.response.isCommitted) {
                respondJsonMessage(call, HttpStatusCode.ServiceUnavailable, "This request took longer than its limit of $limit.")
            }
        }
    }
    return describe { extension(TIMEOUT_EXTENSION, limit.inWholeMilliseconds) }
}
