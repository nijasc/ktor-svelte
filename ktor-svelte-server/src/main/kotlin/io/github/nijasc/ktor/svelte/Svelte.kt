package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.AssetResponder
import io.github.nijasc.ktor.svelte.internal.AssetStore
import io.github.nijasc.ktor.svelte.internal.ClasspathAssetStore
import io.github.nijasc.ktor.svelte.internal.DevProxy
import io.github.nijasc.ktor.svelte.internal.DirectoryAssetStore
import io.github.nijasc.ktor.svelte.internal.Manifest
import io.github.nijasc.ktor.svelte.internal.RequestResolver
import io.github.nijasc.ktor.svelte.internal.Resolution
import io.github.nijasc.ktor.svelte.internal.installTransport
import io.github.nijasc.ktor.svelte.internal.resolveDevServerUrl
import io.github.nijasc.ktor.svelte.internal.typescript.installTypeScriptGeneration
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.decodeURLPart
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.ApplicationPlugin
import io.ktor.server.application.createApplicationPlugin
import io.ktor.server.application.log
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.request.path
import io.ktor.server.request.uri
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.route
import io.ktor.server.routing.routing

private const val DEV_SERVER_VARIABLE = "KTOR_SVELTE_DEV_SERVER"
private const val MISSING_BUILD_MESSAGE =
    "ktor-svelte found no frontend build. Build the app with the ktor-svelte Gradle plugin, " +
        "and do not pass -Psvelte.skip=true or -Psvelte.dev=true."

public val Svelte: ApplicationPlugin<SvelteConfig> =
    createApplicationPlugin("Svelte", ::SvelteConfig) {
        val store = createStore(pluginConfig.source, application)
        val resolver = RequestResolver(pluginConfig.apiPrefixList, pluginConfig.spaFallback, pluginConfig.notFoundPage)
        val responder = AssetResponder(store, pluginConfig.cacheConfig)
        val devUrl = resolveDevServerUrl(pluginConfig.devConfig.url, System.getenv(DEV_SERVER_VARIABLE))
        val devProxy = if (isDevProxyActive(pluginConfig.devConfig.mode, application)) DevProxy(devUrl) else null

        installTransport(application, pluginConfig.transportConfig)
        installTypeScriptGeneration(
            application,
            pluginConfig.generateTs,
            pluginConfig.generateTsOutput,
            pluginConfig.apiPrefixList,
        )

        if (store.manifest() == null) {
            check(application.developmentMode || devProxy != null) { MISSING_BUILD_MESSAGE }
            application.log.warn(MISSING_BUILD_MESSAGE)
        }

        application.routing {
            route("{svelte-path...}") {
                handle {
                    val method = call.request.httpMethod
                    val path = decodedPath(call)
                    if ((method == HttpMethod.Get || method == HttpMethod.Head) && path != null && !resolver.isApiPath(path)) {
                        if (devProxy?.forward(call) != true) {
                            val manifest = store.manifest()
                            if (manifest != null) {
                                respondFromManifest(call, path, manifest, resolver, responder)
                            } else {
                                respondMissingBuild(call, devProxy, devUrl)
                            }
                        }
                    }
                }
            }
        }
    }

private fun isDevProxyActive(
    mode: DevMode,
    application: Application,
): Boolean =
    when (mode) {
        DevMode.AUTO -> application.developmentMode
        DevMode.ALWAYS -> true
        DevMode.NEVER -> false
    }

private fun createStore(
    source: SvelteSource,
    application: Application,
): AssetStore =
    when (source) {
        SvelteSource.Classpath -> ClasspathAssetStore(application.environment.classLoader)
        is SvelteSource.Directory -> DirectoryAssetStore(source.path, rescanOnEveryRead = application.developmentMode)
    }

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
) {
    when (val resolution = resolver.resolve(path, acceptsHtml(call), manifest)) {
        is Resolution.Serve -> {
            responder.respond(call, resolution.path, manifest.files.getValue(resolution.path), resolution.notFound)
        }

        is Resolution.Redirect -> {
            val query = call.request.uri.substringAfter('?', "")
            val location = if (query.isEmpty()) resolution.location else "${resolution.location}?$query"
            call.response.header(HttpHeaders.Location, location)
            call.respond(HttpStatusCode.PermanentRedirect)
        }

        Resolution.Unhandled -> {}
    }
}

private fun acceptsHtml(call: ApplicationCall): Boolean {
    val accept = call.request.header(HttpHeaders.Accept)?.lowercase() ?: return true
    return "text/html" in accept || "text/*" in accept || "*/*" in accept
}
