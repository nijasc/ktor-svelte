package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCallPipeline
import io.ktor.server.application.call
import io.ktor.util.pipeline.PipelinePhase
import io.ktor.utils.io.KtorDsl

internal class PageGuard(
    val page: String,
    val permission: Enum<*>?,
)

@KtorDsl
public class SvelteGuardsConfig internal constructor() {
    internal val rules: MutableList<PageGuard> = mutableListOf()

    public fun signedIn(vararg pages: String) {
        require(pages.isNotEmpty()) { "signedIn needs at least one page." }
        pages.forEach { add(it, null) }
    }

    public fun permission(
        permission: Enum<*>,
        vararg pages: String,
    ) {
        require(pages.isNotEmpty()) { "permission(${permission.name}) needs at least one page." }
        pages.forEach { add(it, permission) }
    }

    private fun add(
        page: String,
        permission: Enum<*>?,
    ) {
        val clean = page.trimEnd('/')
        require(isPagePath(page) && clean.isNotEmpty() && page.none { it in "[]?#*" }) {
            "guards takes the path of a page and everything below it, such as \"/admin\" or FrontendRoutes.admin, but got '$page'."
        }
        require(rules.none { it.page == clean }) { "The page '$clean' is guarded twice." }
        rules += PageGuard(clean, permission)
    }
}

internal fun covers(
    prefix: String,
    path: String,
): Boolean = path == prefix || path.startsWith("$prefix/")

internal fun guardFor(
    guards: List<PageGuard>,
    apiPrefixes: List<String>,
    path: String,
): PageGuard? =
    guards
        .filter { guard -> apiPrefixes.any { prefix -> covers(prefix.trimEnd('/') + guard.page, path) } }
        .maxByOrNull { it.page.length }

private val GuardPhase = PipelinePhase("KtorSvelteGuards")

internal fun installGuards(
    application: Application,
    guards: List<PageGuard>,
    apiPrefixes: List<String>,
) {
    application.insertPhaseBefore(ApplicationCallPipeline.Call, GuardPhase)
    application.intercept(GuardPhase) {
        val guard = guardFor(guards, apiPrefixes, decodedPathOrRaw(call)) ?: return@intercept
        val permission = guard.permission
        if (permission != null) call.requirePermission(permission) else call.findUser(Any::class) ?: throw SignInRequiredException()
    }
}
