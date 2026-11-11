package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.DocLink
import io.github.nijasc.ktor.svelte.internal.HEALTH_DOWN_JSON
import io.github.nijasc.ktor.svelte.internal.HEALTH_UP_JSON
import io.github.nijasc.ktor.svelte.internal.HealthReport
import io.github.nijasc.ktor.svelte.internal.MISSING_BUILD_MESSAGE
import io.github.nijasc.ktor.svelte.internal.SvelteHandler
import io.github.nijasc.ktor.svelte.internal.assets.AssetResponder
import io.github.nijasc.ktor.svelte.internal.assets.AssetStore
import io.github.nijasc.ktor.svelte.internal.assets.ClasspathAssetStore
import io.github.nijasc.ktor.svelte.internal.assets.DirectoryAssetStore
import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.dev.DevProxy
import io.github.nijasc.ktor.svelte.internal.dev.SlowCallLog
import io.github.nijasc.ktor.svelte.internal.dev.isLocalCall
import io.github.nijasc.ktor.svelte.internal.dev.requireAllowedTarget
import io.github.nijasc.ktor.svelte.internal.dev.resolveDevServerUrl
import io.github.nijasc.ktor.svelte.internal.dev.statusJson
import io.github.nijasc.ktor.svelte.internal.installApiCompression
import io.github.nijasc.ktor.svelte.internal.installTransport
import io.github.nijasc.ktor.svelte.internal.security.CONTENT_SECURITY_POLICY_HEADER
import io.github.nijasc.ktor.svelte.internal.security.OriginCheck
import io.github.nijasc.ktor.svelte.internal.security.PageContentSecurityPolicy
import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.github.nijasc.ktor.svelte.internal.security.findJsonShapeException
import io.github.nijasc.ktor.svelte.internal.security.findPayloadTooLarge
import io.github.nijasc.ktor.svelte.internal.security.installJsonShapeLimits
import io.github.nijasc.ktor.svelte.internal.security.installRateLimits
import io.github.nijasc.ktor.svelte.internal.security.mayHideErrorDetails
import io.github.nijasc.ktor.svelte.internal.security.respondBodyTooLarge
import io.github.nijasc.ktor.svelte.internal.security.respondJsonMessage
import io.github.nijasc.ktor.svelte.internal.security.respondJsonShape
import io.github.nijasc.ktor.svelte.internal.security.respondWithoutDetails
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
import io.ktor.server.application.hooks.ResponseSent
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
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

private const val DEV_SERVER_VARIABLE = "KTOR_SVELTE_DEV_SERVER"
private const val PUBLIC_CONFIG_PATH = "/_ktor-svelte/config.json"
private const val STATUS_PATH = "/_ktor-svelte/status"
private const val HEALTH_PATH = "/_ktor-svelte/health"
private const val STATUS_REFUSED_MESSAGE = "The ktor-svelte status endpoint only answers requests from this machine."
private val VITE_DEV_PATHS = listOf("/@vite/*", "/@fs/*", "/@id/*", "/src/*", "/node_modules/*", "/.svelte-kit/*")
private val SvelteHandlerKey = AttributeKey<SvelteHandler>("KtorSvelteHandler")
private val BODY_LIMIT_CONFLICT_MESSAGE =
    "RequestBodyLimit is already installed. Set maxApiBodySize = null in install(Svelte) to keep your own limits." +
        DocLink.API_REQUEST_GUARDS.see()

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
        val contentSecurityPolicy = pageContentSecurityPolicy(store, securityHeaders, devProxy != null)
        if (contentSecurityPolicy != null && !application.developmentMode) {
            application.launch(Dispatchers.IO) { contentSecurityPolicy.precomputeAll() }
        }
        val responder = AssetResponder(store, pluginConfig.cacheConfig, contentSecurityPolicy)
        val docsPath = pluginConfig.apiDocsPath.takeIf { pluginConfig.apiDocs && application.developmentMode }
        val handler = SvelteHandler(store, resolver, responder, devProxy, devUrl, allowRemote)
        application.attributes.put(SvelteHandlerKey, handler)

        installTransport(application, pluginConfig.transportConfig)
        if (pluginConfig.apiCompression) installApiCompression(application, resolver)
        installTypeScriptGeneration(
            application,
            pluginConfig.generateTs,
            pluginConfig.generateTsOutput,
            pluginConfig.apiPrefixList,
            listOfNotNull(docsPath),
            pluginConfig.publicConfigSchema,
            pluginConfig.declaredErrorList.toList(),
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
        installJsonShapeLimits(application, resolver, pluginConfig.maxJsonDepth, pluginConfig.maxJsonStringLength)
        installRateLimits(application, pluginConfig.rateLimitConfig, resolver)
        if (pluginConfig.originCheck) {
            val originCheck = OriginCheck(pluginConfig.allowedOriginList, application.developmentMode)
            onCall { call ->
                if (resolver.isApiPath(decodedPathOrRaw(call))) originCheck.refuseIfCrossOrigin(call)
            }
        }

        val slowApiCall = pluginConfig.devConfig.slowApiCall
        if (slowApiCall != null && application.developmentMode) {
            val slowCalls = SlowCallLog(slowApiCall, resolver)
            slowCalls.install(application)
            onCall { call -> slowCalls.started(call) }
            on(ResponseSent) { call -> slowCalls.finished(call) }
        }

        val hideErrorDetails = pluginConfig.hideErrorDetails
        on(CallFailed) { call, cause ->
            if (cause is ValidationException) {
                respondJsonMessage(call, HttpStatusCode.UnprocessableEntity, "Validation failed", cause.fields)
                return@on
            }
            cause.findJsonShapeException()?.let { shape ->
                respondJsonShape(call, shape)
                return@on
            }
            if (maxApiBodySize != null && cause.findPayloadTooLarge() != null) {
                respondBodyTooLarge(call, maxApiBodySize)
                return@on
            }
            if (hideErrorDetails && mayHideErrorDetails(call)) {
                respondWithoutDetails(call, cause, resolver.isApiPath(decodedPathOrRaw(call)))
            }
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
                    if (!isLocalCall(call)) {
                        call.respondText(STATUS_REFUSED_MESSAGE, status = HttpStatusCode.Forbidden)
                        return@get
                    }
                    call.response.header(HttpHeaders.CacheControl, "no-store")
                    call.respondText(statusJson(store.manifest(), devProxy, devUrl), ContentType.Application.Json)
                }.hide()
            }
            if (pluginConfig.healthEndpoint) {
                val health = HealthReport(pluginConfig.healthCheckList.toList())
                get(HEALTH_PATH) {
                    call.response.header(HttpHeaders.CacheControl, "no-store")
                    if (health.isUp(call, frontendReady = store.manifest() != null || devProxy != null)) {
                        call.respondText(HEALTH_UP_JSON, ContentType.Application.Json)
                    } else {
                        call.respondText(HEALTH_DOWN_JSON, ContentType.Application.Json, HttpStatusCode.ServiceUnavailable)
                    }
                }.hide()
            }
            if (docsPath != null) {
                application.log.info("ktor-svelte serves API docs at $docsPath")
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
            ?: error("Install the Svelte plugin before calling svelte() in routing." + DocLink.KTOR.see())
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
