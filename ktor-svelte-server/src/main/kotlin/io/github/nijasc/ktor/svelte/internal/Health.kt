package io.github.nijasc.ktor.svelte.internal

import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.log
import kotlin.coroutines.cancellation.CancellationException

internal class HealthReport(
    private val checks: List<suspend () -> Boolean>,
) {
    suspend fun isUp(
        call: ApplicationCall,
        frontendReady: Boolean,
    ): Boolean = frontendReady && checks.all { passes(call, it) }

    private suspend fun passes(
        call: ApplicationCall,
        check: suspend () -> Boolean,
    ): Boolean =
        try {
            check()
        } catch (cancelled: CancellationException) {
            throw cancelled
        } catch (failure: Exception) {
            call.application.log.warn("A ktor-svelte health check failed", failure)
            false
        }
}

internal const val HEALTH_UP_JSON = """{"status":"up"}"""
internal const val HEALTH_DOWN_JSON = """{"status":"down"}"""
