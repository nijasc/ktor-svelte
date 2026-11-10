package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.AssetResponder
import io.github.nijasc.ktor.svelte.internal.AssetStore
import io.github.nijasc.ktor.svelte.internal.ClasspathAssetStore
import io.github.nijasc.ktor.svelte.internal.DevProxy
import io.github.nijasc.ktor.svelte.internal.DirectoryAssetStore
import io.github.nijasc.ktor.svelte.internal.Manifest
import io.github.nijasc.ktor.svelte.internal.OriginCheck
import io.github.nijasc.ktor.svelte.internal.RequestResolver
import io.github.nijasc.ktor.svelte.internal.Resolution
import io.github.nijasc.ktor.svelte.internal.SchemaConstraints
import io.github.nijasc.ktor.svelte.internal.findPayloadTooLarge
import io.github.nijasc.ktor.svelte.internal.installTransport
import io.github.nijasc.ktor.svelte.internal.isLocalRequest
import io.github.nijasc.ktor.svelte.internal.requestPathForGuards
import io.github.nijasc.ktor.svelte.internal.requireAllowedTarget
import io.github.nijasc.ktor.svelte.internal.resolveDevServerUrl
import io.github.nijasc.ktor.svelte.internal.respondBodyTooLarge
import io.github.nijasc.ktor.svelte.internal.statusJson
import io.github.nijasc.ktor.svelte.internal.typescript.installTypeScriptGeneration
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.decodeURLPart
import io.ktor.openapi.OpenApiInfo
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.ApplicationPlugin
import io.ktor.server.application.PluginBuilder
import io.ktor.server.application.createApplicationPlugin
import io.ktor.server.application.hooks.CallFailed
import io.ktor.server.application.install
import io.ktor.server.application.log
import io.ktor.server.application.pluginOrNull
import io.ktor.server.plugins.bodylimit.RequestBodyLimit
import io.ktor.server.plugins.swagger.swaggerUI
import io.ktor.server.request.ApplicationReceivePipeline
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.request.path
import io.ktor.server.request.uri
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.application
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.OpenApiDocSource
import io.ktor.server.routing.openapi.hide
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.util.AttributeKey
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive

private const val DEV_SERVER_VARIABLE = "KTOR_SVELTE_DEV_SERVER"
private val PROXIED_BODY_METHODS = setOf(HttpMethod.Post, HttpMethod.Put, HttpMethod.Patch, HttpMethod.Delete)
private const val PUBLIC_CONFIG_PATH = "/_ktor-svelte/config.json"
private const val STATUS_PATH = "/_ktor-svelte/status"
private const val STATUS_REFUSED_MESSAGE = "The ktor-svelte status endpoint only answers requests from this machine."
private val VITE_DEV_PATHS = listOf("/@vite/*", "/@fs/*", "/@id/*", "/src/*", "/node_modules/*", "/.svelte-kit/*")
private val SvelteHandlerKey = AttributeKey<SvelteHandler>("KtorSvelteHandler")
private const val REMOTE_REFUSED_MESSAGE =
    "The ktor-svelte dev proxy only answers requests from this machine. Set dev { allowRemote = true } to change that."
private const val BODY_LIMIT_CONFLICT_MESSAGE =
    "RequestBodyLimit is already installed. Set maxApiBodySize = null in install(Svelte) to keep your own limits."
private const val MISSING_BUILD_MESSAGE =
    "ktor-svelte found no frontend build. Build the app with the ktor-svelte Gradle plugin, " +
        "and do not pass -Psvelte.skip=true or -Psvelte.dev=true."

public val Svelte: ApplicationPlugin<SvelteConfig> =
    createApplicationPlugin("Svelte", ::SvelteConfig) {
        val store = createStore(pluginConfig.source, application)
        val resolver =
            RequestResolver(pluginConfig.apiPrefixList, pluginConfig.spaFallback, pluginConfig.notFoundPage, pluginConfig.paramRouteList)
        val responder = AssetResponder(store, pluginConfig.cacheConfig)
        val devUrl = resolveDevServerUrl(pluginConfig.devConfig.url, System.getenv(DEV_SERVER_VARIABLE))
        val allowRemote = pluginConfig.devConfig.allowRemote
        val devProxy =
            if (isDevProxyActive(pluginConfig.devConfig.mode, application)) {
                requireAllowedTarget(devUrl, allowRemote)
                DevProxy(devUrl)
            } else {
                null
            }
        val docsPath = pluginConfig.apiDocsPath.takeIf { pluginConfig.apiDocs && application.developmentMode }
        val handler = SvelteHandler(store, resolver, responder, devProxy, devUrl, allowRemote)
        application.attributes.put(SvelteHandlerKey, handler)

        installTransport(application, pluginConfig.transportConfig)
        installTypeScriptGeneration(
            application,
            pluginConfig.generateTs,
            pluginConfig.generateTsOutput,
            pluginConfig.apiPrefixList,
            listOfNotNull(docsPath),
            pluginConfig.publicConfigSchema,
        )
        pluginConfig.securityHeadersConfig?.let { headers -> installSecurityHeaders(headers, devProxy != null) }

        if (store.manifest() == null) {
            check(application.developmentMode || devProxy != null) { MISSING_BUILD_MESSAGE }
            if (devProxy == null) application.log.warn(MISSING_BUILD_MESSAGE)
        }

        val constraints = SchemaConstraints()
        application.receivePipeline.intercept(ApplicationReceivePipeline.After) { received ->
            constraints.requireValid(received)
        }

        val maxApiBodySize = pluginConfig.maxApiBodySize
        if (maxApiBodySize != null) installBodyLimit(resolver, maxApiBodySize)
        if (pluginConfig.originCheck) {
            val originCheck = OriginCheck(pluginConfig.allowedOriginList)
            onCall { call ->
                if (resolver.isApiPath(requestPathForGuards(call))) originCheck.refuseIfCrossOrigin(call)
            }
        }

        on(CallFailed) { call, cause ->
            if (cause is ValidationException) {
                respondValidationFailure(call, cause)
                return@on
            }
            if (maxApiBodySize != null && cause.findPayloadTooLarge() != null) respondBodyTooLarge(call, maxApiBodySize)
        }

        val automaticRouting = pluginConfig.routing == SvelteRouting.Automatic
        val publicConfigJson = pluginConfig.publicConfigJson
        application.routing {
            if (automaticRouting) {
                catchAll(handler)
            }
            if (publicConfigJson != null) {
                get(PUBLIC_CONFIG_PATH) {
                    call.response.header(HttpHeaders.CacheControl, "no-cache")
                    call.respondText(publicConfigJson, ContentType.Application.Json)
                }.hide()
            }
            if (pluginConfig.statusEndpoint) {
                get(STATUS_PATH) {
                    if (!isLocalRequest(call.request.local.remoteAddress, call.request.header(HttpHeaders.Host))) {
                        call.respondText(STATUS_REFUSED_MESSAGE, status = HttpStatusCode.Forbidden)
                        return@get
                    }
                    call.response.header(HttpHeaders.CacheControl, "no-store")
                    call.respondText(statusJson(store.manifest(), devProxy, devUrl), ContentType.Application.Json)
                }.hide()
            }
            if (docsPath != null) {
                swaggerUI(docsPath) {
                    info = OpenApiInfo(title = "API", version = "dev")
                    source = OpenApiDocSource.Routing(ContentType.Application.Json)
                }
            }
        }
    }

public fun Route.svelte(public: List<String> = emptyList()) {
    val handler =
        application.attributes.getOrNull(SvelteHandlerKey)
            ?: error("Install the Svelte plugin before calling svelte() in routing.")
    if (public.isEmpty()) {
        catchAll(handler, privateResponses = true)
        return
    }
    val paths = if (handler.proxiesToVite) public + VITE_DEV_PATHS else public
    paths.forEach { path ->
        val routePath = if (path.endsWith("/*")) path.removeSuffix("*") + "{svelte-path...}" else path
        route(routePath) { handle { handler.handle(call) } }
    }
}

private fun Route.catchAll(
    handler: SvelteHandler,
    privateResponses: Boolean = false,
) {
    route("{svelte-path...}") {
        handle { handler.handle(call, privateResponses) }
    }
}

private fun PluginBuilder<SvelteConfig>.installSecurityHeaders(
    headers: SvelteSecurityHeaders,
    devProxyActive: Boolean,
) {
    val values =
        listOfNotNull(
            headers.contentTypeOptions?.let { "X-Content-Type-Options" to it },
            headers.frameOptions?.let { "X-Frame-Options" to it },
            headers.referrerPolicy?.let { "Referrer-Policy" to it },
            headers.contentSecurityPolicy?.takeUnless { devProxyActive }?.let { "Content-Security-Policy" to it },
        )
    onCall { call ->
        values.forEach { (name, value) -> call.response.header(name, value) }
    }
}

private fun PluginBuilder<SvelteConfig>.installBodyLimit(
    resolver: RequestResolver,
    limit: Long,
) {
    check(application.pluginOrNull(RequestBodyLimit) == null) { BODY_LIMIT_CONFLICT_MESSAGE }
    application.install(RequestBodyLimit) {
        bodyLimit { call -> if (resolver.isApiPath(requestPathForGuards(call))) limit else Long.MAX_VALUE }
    }
}

private class SvelteHandler(
    private val store: AssetStore,
    private val resolver: RequestResolver,
    private val responder: AssetResponder,
    private val devProxy: DevProxy?,
    private val devUrl: String,
    private val allowRemote: Boolean,
) {
    val proxiesToVite: Boolean get() = devProxy != null

    suspend fun handle(
        call: ApplicationCall,
        privateResponses: Boolean = false,
    ) {
        val method = call.request.httpMethod
        val path = decodedPath(call)
        if (path == null || resolver.isApiPath(path)) return
        val mayProxy = allowRemote || isLocalRequest(call.request.local.remoteAddress, call.request.header(HttpHeaders.Host))
        if (method != HttpMethod.Get && method != HttpMethod.Head) {
            if (method in PROXIED_BODY_METHODS && mayProxy) devProxy?.forward(call)
            return
        }
        if (needsLocalePrefix(path, call.application.libraryConfig)) {
            redirectToLocale(call)
            return
        }
        if (mayProxy && devProxy?.forward(call) == true) return
        val manifest = store.manifest()
        when {
            manifest != null -> respondFromManifest(call, path, manifest, resolver, responder, privateResponses)
            devProxy != null && !mayProxy -> call.respondText(REMOTE_REFUSED_MESSAGE, status = HttpStatusCode.Forbidden)
            else -> respondMissingBuild(call, devProxy, devUrl)
        }
    }
}

private suspend fun respondValidationFailure(
    call: ApplicationCall,
    failure: ValidationException,
) {
    val fields = JsonObject(failure.fields.mapValues { (_, messages) -> JsonArray(messages.map(::JsonPrimitive)) })
    val body = JsonObject(mapOf("message" to JsonPrimitive("Validation failed"), "fields" to fields))
    call.respondText(body.toString(), ContentType.Application.Json, HttpStatusCode.UnprocessableEntity)
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
    privateResponses: Boolean,
) {
    when (val resolution = resolver.resolve(path, acceptsHtml(call), manifest)) {
        is Resolution.Serve -> {
            responder.respond(call, resolution.path, manifest.files.getValue(resolution.path), resolution.notFound, privateResponses)
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
