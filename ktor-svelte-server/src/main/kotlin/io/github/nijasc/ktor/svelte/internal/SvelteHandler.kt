package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.internal.assets.AssetResponder
import io.github.nijasc.ktor.svelte.internal.assets.AssetStore
import io.github.nijasc.ktor.svelte.internal.assets.DefaultFavicon
import io.github.nijasc.ktor.svelte.internal.assets.Manifest
import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.assets.Resolution
import io.github.nijasc.ktor.svelte.internal.assets.SiteFiles
import io.github.nijasc.ktor.svelte.internal.dev.DevProxy
import io.github.nijasc.ktor.svelte.internal.dev.isLocalCall
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.decodeURLPart
import io.ktor.http.encodeURLPath
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.request.path
import io.ktor.server.request.uri
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.server.response.respondText

private val PROXIED_BODY_METHODS = setOf(HttpMethod.Post, HttpMethod.Put, HttpMethod.Patch, HttpMethod.Delete)
private const val REMOTE_REFUSED_MESSAGE =
    "The ktor-svelte dev proxy only answers requests from this machine. Set dev { allowRemote = true } to change that."
internal val MISSING_BUILD_MESSAGE =
    "ktor-svelte found no frontend build. Build the app with the ktor-svelte Gradle plugin, " +
        "and do not pass -Psvelte.skip=true or -Psvelte.dev=true." + DocLink.DEV_WORKFLOW.see()

internal class SvelteHandler(
    private val store: AssetStore,
    private val resolver: RequestResolver,
    private val responder: AssetResponder,
    private val devProxy: DevProxy?,
    private val devUrl: String,
    private val allowRemote: Boolean,
    private val siteFiles: SiteFiles? = null,
    private val defaultFavicon: DefaultFavicon? = null,
) {
    val proxiesToVite: Boolean get() = devProxy != null

    suspend fun handle(
        call: ApplicationCall,
        privateResponses: Boolean = false,
    ) {
        val method = call.request.httpMethod
        val path = decodedPath(call)
        if (path == null || resolver.isApiPath(path)) return
        val mayProxy = allowRemote || isLocalCall(call)
        if (method != HttpMethod.Get && method != HttpMethod.Head) {
            if (method in PROXIED_BODY_METHODS && mayProxy && devProxy?.forward(call) == true) return
            respondWrongMethod(call, path, method)
            return
        }
        if (needsLocalePrefix(path, call.application.libraryConfig)) {
            redirectToLocale(call)
            return
        }
        if (defaultFavicon?.serves(path) == true && !defaultFavicon.appHasOwn(store.manifest())) {
            defaultFavicon.respond(call, path)
            return
        }
        if (mayProxy && devProxy?.forward(call) == true) return
        val manifest = store.manifest()
        when {
            manifest != null -> respondFromManifest(call, path, manifest, resolver, responder, privateResponses, siteFiles)
            devProxy != null && !mayProxy -> call.respondText(REMOTE_REFUSED_MESSAGE, status = HttpStatusCode.Forbidden)
            else -> respondMissingBuild(call, devProxy, devUrl)
        }
    }

    private suspend fun respondWrongMethod(
        call: ApplicationCall,
        path: String,
        method: HttpMethod,
    ) {
        val manifest = store.manifest() ?: return
        val resolution = resolver.resolve(path, acceptsHtml(call), manifest)
        if (resolution !is Resolution.Serve || resolution.notFound) return
        call.response.header(HttpHeaders.Allow, ALLOWED_FRONTEND_METHODS)
        if (method == HttpMethod.Options) {
            call.respond(HttpStatusCode.NoContent)
        } else {
            call.respond(HttpStatusCode.MethodNotAllowed)
        }
    }
}

private const val ALLOWED_FRONTEND_METHODS = "GET, HEAD, OPTIONS"

private fun decodedPath(call: ApplicationCall): String? =
    try {
        call.request.path().decodeURLPart()
    } catch (_: IllegalArgumentException) {
        null
    }

private suspend fun respondMissingBuild(
    call: ApplicationCall,
    devProxy: DevProxy?,
    devUrl: String,
) {
    val message =
        if (devProxy != null) {
            "ktor-svelte could not reach the Vite dev server at $devUrl and found no frontend build. " +
                "Start Vite with ./gradlew svelteDev."
        } else {
            MISSING_BUILD_MESSAGE
        }
    call.respondText(message, status = HttpStatusCode.ServiceUnavailable)
}

private suspend fun respondFromManifest(
    call: ApplicationCall,
    path: String,
    manifest: Manifest,
    resolver: RequestResolver,
    responder: AssetResponder,
    privateResponses: Boolean,
    siteFiles: SiteFiles?,
) {
    when (val resolution = resolver.resolve(path, acceptsHtml(call), manifest)) {
        is Resolution.Serve -> {
            responder.respond(call, resolution.path, manifest.files.getValue(resolution.path), resolution.notFound, privateResponses)
        }

        is Resolution.Redirect -> {
            val query = call.request.uri.substringAfter('?', "")
            val path = resolution.location.encodeURLPath()
            val location = if (query.isEmpty()) path else "$path?$query"
            call.response.header(HttpHeaders.Location, location)
            call.respond(HttpStatusCode.PermanentRedirect)
        }

        Resolution.Unhandled -> if (siteFiles?.serves(path) == true) siteFiles.respond(call, path, manifest)
    }
}

private fun acceptsHtml(call: ApplicationCall): Boolean {
    val accept = call.request.header(HttpHeaders.Accept)?.lowercase() ?: return true
    return "text/html" in accept || "text/*" in accept || "*/*" in accept
}
