package io.github.nijasc.ktor.svelte.internal.dev

import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCallPipeline
import io.ktor.server.application.call
import io.ktor.server.plugins.mutableOriginConnectionPoint
import io.ktor.server.request.header

internal const val DEV_HTTPS_HEADER = "X-Ktor-Svelte-Dev-Https"
private const val FORWARDED_PORT = "X-Forwarded-Port"

internal fun installDevHttps(application: Application) {
    application.intercept(ApplicationCallPipeline.Setup) {
        if (call.request.header(DEV_HTTPS_HEADER) != "1" || !isLocalCall(call)) return@intercept
        val origin = call.mutableOriginConnectionPoint
        origin.scheme = "https"
        call.request.header(FORWARDED_PORT)?.toIntOrNull()?.let { port ->
            origin.serverPort = port
            origin.localPort = port
        }
    }
}
