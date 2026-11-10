package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.MISSING_BUILD_MESSAGE
import io.github.nijasc.ktor.svelte.internal.SvelteHandler
import io.github.nijasc.ktor.svelte.internal.assets.AssetResponder
import io.github.nijasc.ktor.svelte.internal.assets.AssetStore
import io.github.nijasc.ktor.svelte.internal.assets.ClasspathAssetStore
import io.github.nijasc.ktor.svelte.internal.assets.DirectoryAssetStore
import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.dev.DevProxy
import io.github.nijasc.ktor.svelte.internal.dev.isLocalRequest
import io.github.nijasc.ktor.svelte.internal.dev.requireAllowedTarget
import io.github.nijasc.ktor.svelte.internal.dev.resolveDevServerUrl
import io.github.nijasc.ktor.svelte.internal.dev.statusJson
import io.github.nijasc.ktor.svelte.internal.installTransport
import io.github.nijasc.ktor.svelte.internal.security.CONTENT_SECURITY_POLICY_HEADER
import io.github.nijasc.ktor.svelte.internal.security.OriginCheck
import io.github.nijasc.ktor.svelte.internal.security.PageContentSecurityPolicy
import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.github.nijasc.ktor.svelte.internal.security.findPayloadTooLarge
import io.github.nijasc.ktor.svelte.internal.security.respondBodyTooLarge
import io.github.nijasc.ktor.svelte.internal.security.respondJsonMessage
import io.github.nijasc.ktor.svelte.internal.typescript.installTypeScriptGeneration
import io.github.nijasc.ktor.svelte.internal.validation.SchemaConstraints
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.openapi.OpenApiInfo
import io.ktor.server.application.Application
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
import io.ktor.server.request.path
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.application
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.OpenApiDocSource
import io.ktor.server.routing.openapi.hide
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.util.AttributeKey

private const val DEV_SERVER_VARIABLE = "KTOR_SVELTE_DEV_SERVER"
private const val PUBLIC_CONFIG_PATH = "/_ktor-svelte/config.json"
private const val STATUS_PATH = "/_ktor-svelte/status"
private const val STATUS_REFUSED_MESSAGE = "The ktor-svelte status endpoint only answers requests from this machine."
private val VITE_DEV_PATHS = listOf("/@vite/*", "/@fs/*", "/@id/*", "/src/*", "/node_modules/*", "/.svelte-kit/*")
private val SvelteHandlerKey = AttributeKey<SvelteHandler>("KtorSvelteHandler")
private const val BODY_LIMIT_CONFLICT_MESSAGE =
    "RequestBodyLimit is already installed. Set maxApiBodySize = null in install(Svelte) to keep your own limits."

public val Svelte: ApplicationPlugin<SvelteConfig> =
    createApplicationPlugin("Svelte", ::SvelteConfig) {
        val store = createStore(pluginConfig.source, application)
        val resolver =
            RequestResolver(pluginConfig.apiPrefixList, pluginConfig.spaFallback, pluginConfig.notFoundPage, pluginConfig.paramRouteList)
        val devUrl = resolveDevServerUrl(pluginConfig.devConfig.url, System.getenv(DEV_SERVER_VARIABLE))
        val allowRemote = pluginConfig.devConfig.allowRemote
        val devProxy =
            if (isDevProxyActive(pluginConfig.devConfig.mode, application)) {
                requireAllowedTarget(devUrl, allowRemote)
                DevProxy(devUrl)
            } else {
                null
            }
        val securityHeaders = pluginConfig.securityHeadersConfig
        val responder =
            AssetResponder(store, pluginConfig.cacheConfig, pageContentSecurityPolicy(store, securityHeaders, devProxy != null))
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
        if (securityHeaders.enabled) installSecurityHeaders(securityHeaders, devProxy != null)

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
                if (resolver.isApiPath(decodedPathOrRaw(call))) originCheck.refuseIfCrossOrigin(call)
            }
        }

        on(CallFailed) { call, cause ->
            if (cause is ValidationException) {
                respondJsonMessage(call, HttpStatusCode.UnprocessableEntity, "Validation failed", cause.fields)
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
    headers: SvelteSecurityHeadersConfig,
    devProxyActive: Boolean,
) {
    val values =
        listOfNotNull(
            headers.contentTypeOptions?.let { "X-Content-Type-Options" to it },
            headers.frameOptions?.let { "X-Frame-Options" to it },
            headers.referrerPolicy?.let { "Referrer-Policy" to it },
            headers.contentSecurityPolicy?.takeUnless { devProxyActive }?.let { CONTENT_SECURITY_POLICY_HEADER to it },
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
        bodyLimit { call -> if (resolver.isApiPath(decodedPathOrRaw(call))) limit else Long.MAX_VALUE }
    }
}

private fun pageContentSecurityPolicy(
    store: AssetStore,
    headers: SvelteSecurityHeadersConfig,
    devProxyActive: Boolean,
): PageContentSecurityPolicy? {
    val automatic = headers.enabled && headers.automaticContentSecurityPolicy && headers.contentSecurityPolicy == null
    if (!automatic || devProxyActive) return null
    return PageContentSecurityPolicy(store, headers.frameOptions, headers.extraCspSources)
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
