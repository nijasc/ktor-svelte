package io.github.nijasc.ktor.svelte

import io.ktor.server.application.ApplicationCall
import io.ktor.utils.io.KtorDsl

@KtorDsl
public class SvelteInternalAccessConfig internal constructor() {
    public var token: String? = null
    internal val networkList: MutableList<String> = mutableListOf()
    internal val checks: MutableList<suspend (ApplicationCall) -> Boolean> = mutableListOf()

    public fun networks(vararg ranges: String) {
        networkList += ranges
    }

    public fun allow(check: suspend (ApplicationCall) -> Boolean) {
        checks += check
    }

    internal val isConfigured: Boolean get() = token != null || networkList.isNotEmpty() || checks.isNotEmpty()
}
