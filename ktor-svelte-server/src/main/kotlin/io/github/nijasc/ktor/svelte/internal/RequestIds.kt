package io.github.nijasc.ktor.svelte.internal

import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationModulesLoaded
import io.ktor.server.application.install
import io.ktor.server.application.pluginOrNull
import io.ktor.server.plugins.callid.CallId
import java.util.UUID

internal const val REQUEST_ID_HEADER = "X-Request-Id"
private val REQUEST_ID = Regex("[A-Za-z0-9._-]{1,128}")

internal fun isValidRequestId(value: String): Boolean = REQUEST_ID.matches(value)

internal fun installRequestIds(application: Application) {
    application.monitor.subscribe(ApplicationModulesLoaded) {
        if (application.pluginOrNull(CallId) != null) return@subscribe
        application.install(CallId) {
            retrieveFromHeader(REQUEST_ID_HEADER)
            generate { UUID.randomUUID().toString() }
            verify(::isValidRequestId)
            replyToHeader(REQUEST_ID_HEADER)
        }
    }
}
