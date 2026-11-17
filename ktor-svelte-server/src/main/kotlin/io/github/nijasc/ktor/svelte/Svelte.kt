package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.AccessLog
import io.github.nijasc.ktor.svelte.internal.BUILD_HEADER
import io.github.nijasc.ktor.svelte.internal.BuildFingerprint
import io.github.nijasc.ktor.svelte.internal.DocLink
import io.github.nijasc.ktor.svelte.internal.FRONTEND_ERRORS_PATH
import io.github.nijasc.ktor.svelte.internal.HEALTH_DOWN_JSON
import io.github.nijasc.ktor.svelte.internal.HEALTH_STARTING_JSON
import io.github.nijasc.ktor.svelte.internal.HEALTH_UP_JSON
import io.github.nijasc.ktor.svelte.internal.HealthReport
import io.github.nijasc.ktor.svelte.internal.IdempotencyStore
import io.github.nijasc.ktor.svelte.internal.MISSING_BUILD_MESSAGE
import io.github.nijasc.ktor.svelte.internal.MetricRoute
import io.github.nijasc.ktor.svelte.internal.MetricStartedAt
import io.github.nijasc.ktor.svelte.internal.SERVER_ERROR_STATUS
import io.github.nijasc.ktor.svelte.internal.StartupTiming
import io.github.nijasc.ktor.svelte.internal.SvelteHandler
import io.github.nijasc.ktor.svelte.internal.WEB_VITALS_PATH
import io.github.nijasc.ktor.svelte.internal.WarmUp
import io.github.nijasc.ktor.svelte.internal.assets.AssetResponder
import io.github.nijasc.ktor.svelte.internal.assets.AssetStore
import io.github.nijasc.ktor.svelte.internal.assets.ClasspathAssetStore
import io.github.nijasc.ktor.svelte.internal.assets.ConfigInjector
import io.github.nijasc.ktor.svelte.internal.assets.DefaultFavicon
import io.github.nijasc.ktor.svelte.internal.assets.DirectoryAssetStore
import io.github.nijasc.ktor.svelte.internal.assets.PublicConfigSource
import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.assets.SiteFiles
import io.github.nijasc.ktor.svelte.internal.constantGetPaths
import io.github.nijasc.ktor.svelte.internal.dev.DevProxy
import io.github.nijasc.ktor.svelte.internal.dev.DevRequestLog
import io.github.nijasc.ktor.svelte.internal.dev.SlowCallLog
import io.github.nijasc.ktor.svelte.internal.dev.TypedCookiesKey
import io.github.nijasc.ktor.svelte.internal.dev.browserLogRoute
import io.github.nijasc.ktor.svelte.internal.dev.compileErrorsFile
import io.github.nijasc.ktor.svelte.internal.dev.devClearSiteDataRoute
import io.github.nijasc.ktor.svelte.internal.dev.devClientRoutes
import io.github.nijasc.ktor.svelte.internal.dev.devCookieRoutes
import io.github.nijasc.ktor.svelte.internal.dev.devEnvironmentRoute
import io.github.nijasc.ktor.svelte.internal.dev.devMigrationsRoute
import io.github.nijasc.ktor.svelte.internal.dev.devRequestRoutes
import io.github.nijasc.ktor.svelte.internal.dev.devRuntimeRoute
import io.github.nijasc.ktor.svelte.internal.dev.devStatus
import io.github.nijasc.ktor.svelte.internal.dev.installDevHttps
import io.github.nijasc.ktor.svelte.internal.dev.isLocalCall
import io.github.nijasc.ktor.svelte.internal.dev.pagesOf
import io.github.nijasc.ktor.svelte.internal.dev.requireAllowedTarget
import io.github.nijasc.ktor.svelte.internal.dev.resolveDevServerUrl
import io.github.nijasc.ktor.svelte.internal.dev.routeMap
import io.github.nijasc.ktor.svelte.internal.dev.routeTable
import io.github.nijasc.ktor.svelte.internal.dev.statusJson
import io.github.nijasc.ktor.svelte.internal.dev.toHtml
import io.github.nijasc.ktor.svelte.internal.dev.toJson
import io.github.nijasc.ktor.svelte.internal.frontendErrorRoute
import io.github.nijasc.ktor.svelte.internal.installApiCompression
import io.github.nijasc.ktor.svelte.internal.installConfigReport
import io.github.nijasc.ktor.svelte.internal.installIdempotency
import io.github.nijasc.ktor.svelte.internal.installRequestIds
import io.github.nijasc.ktor.svelte.internal.installTransport
import io.github.nijasc.ktor.svelte.internal.jvmStartIfFirstApplication
import io.github.nijasc.ktor.svelte.internal.onOwn
import io.github.nijasc.ktor.svelte.internal.recordRouteMetric
import io.github.nijasc.ktor.svelte.internal.runtimeVersion
import io.github.nijasc.ktor.svelte.internal.security.BodyTooLarge
import io.github.nijasc.ktor.svelte.internal.security.CONTENT_SECURITY_POLICY_HEADER
import io.github.nijasc.ktor.svelte.internal.security.InternalAccess
import io.github.nijasc.ktor.svelte.internal.security.OriginCheck
import io.github.nijasc.ktor.svelte.internal.security.PageContentSecurityPolicy
import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.github.nijasc.ktor.svelte.internal.security.findJsonShapeException
import io.github.nijasc.ktor.svelte.internal.security.findPayloadTooLarge
import io.github.nijasc.ktor.svelte.internal.security.installJsonShapeLimits
import io.github.nijasc.ktor.svelte.internal.security.installRateLimits
import io.github.nijasc.ktor.svelte.internal.security.mayHideErrorDetails
import io.github.nijasc.ktor.svelte.internal.security.pathSegments
import io.github.nijasc.ktor.svelte.internal.security.respondBadRequest
import io.github.nijasc.ktor.svelte.internal.security.respondBodyTooLarge
import io.github.nijasc.ktor.svelte.internal.security.respondJsonMessage
import io.github.nijasc.ktor.svelte.internal.security.respondJsonShape
import io.github.nijasc.ktor.svelte.internal.security.respondUploadProblem
import io.github.nijasc.ktor.svelte.internal.security.respondWithoutDetails
import io.github.nijasc.ktor.svelte.internal.settingsSummary
import io.github.nijasc.ktor.svelte.internal.shadowedPages
import io.github.nijasc.ktor.svelte.internal.startupLine
import io.github.nijasc.ktor.svelte.internal.startupSteps
import io.github.nijasc.ktor.svelte.internal.subscribeWhileRunning
import io.github.nijasc.ktor.svelte.internal.typescript.CurrentUserType
import io.github.nijasc.ktor.svelte.internal.typescript.FRONTEND_DIR_PROPERTY
import io.github.nijasc.ktor.svelte.internal.typescript.GuardSpec
import io.github.nijasc.ktor.svelte.internal.typescript.PreferencesType
import io.github.nijasc.ktor.svelte.internal.typescript.installTypeScriptGeneration
import io.github.nijasc.ktor.svelte.internal.typescript.sharedHolder
import io.github.nijasc.ktor.svelte.internal.validation.SchemaConstraints
import io.github.nijasc.ktor.svelte.internal.validation.installInputNormalisation
import io.github.nijasc.ktor.svelte.internal.warmUpBaseUrl
import io.github.nijasc.ktor.svelte.internal.webVitalsRoute
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.URLDecodeException
import io.ktor.openapi.OpenApiInfo
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationPlugin
import io.ktor.server.application.ApplicationStarted
import io.ktor.server.application.PluginBuilder
import io.ktor.server.application.ServerReady
import io.ktor.server.application.createApplicationPlugin
import io.ktor.server.application.hooks.CallFailed
import io.ktor.server.application.hooks.ResponseSent
import io.ktor.server.application.install
import io.ktor.server.application.log
import io.ktor.server.application.plugin
import io.ktor.server.application.pluginOrNull
import io.ktor.server.plugins.bodylimit.RequestBodyLimit
import io.ktor.server.plugins.swagger.swaggerUI
import io.ktor.server.request.ApplicationReceivePipeline
import io.ktor.server.request.header
import io.ktor.server.request.path
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingRoot
import io.ktor.server.routing.application
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.OpenApiDocSource
import io.ktor.server.routing.openapi.hide
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.util.AttributeKey
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlin.io.path.Path

private const val DEV_SERVER_VARIABLE = "KTOR_SVELTE_DEV_SERVER"
private const val PUBLIC_CONFIG_PATH = "/_ktor-svelte/config.json"
private const val BUILD_INFO_PATH = "/_ktor-svelte/build.json"
private const val STATUS_PATH = "/_ktor-svelte/status"
private const val ROUTES_PATH = "/_ktor-svelte/routes"
private const val HEALTH_PATH = "/_ktor-svelte/health"
private const val DOCS_REFUSED_MESSAGE = "The API docs only answer requests from this machine."
private const val STATUS_REFUSED_MESSAGE = "The ktor-svelte status endpoint only answers requests from this machine."
private val VITE_DEV_PATHS = listOf("/@vite/*", "/@fs/*", "/@id/*", "/src/*", "/node_modules/*", "/.svelte-kit/*")
private val INSTALLABLE_APP_PATHS = listOf("/service-worker.js", "/ktor-svelte/*")
private val SvelteHandlerKey = AttributeKey<SvelteHandler>("KtorSvelteHandler")
private val BODY_LIMIT_CONFLICT_MESSAGE =
    "RequestBodyLimit is already installed. Set maxApiBodySize = null in install(Svelte) to keep your own limits." +
        DocLink.API_REQUEST_GUARDS.see()

public val Svelte: ApplicationPlugin<SvelteConfig> =
    createApplicationPlugin("Svelte", ::SvelteConfig) {
        val startupTiming = StartupTiming(jvmStartIfFirstApplication(), System.currentTimeMillis())
        val store = createStore(pluginConfig.source, application)
        val resolver =
            RequestResolver(pluginConfig.apiPrefixList, pluginConfig.spaFallback, pluginConfig.notFoundPage, pluginConfig.paramRouteList)
        val devUrl = resolveDevServerUrl(pluginConfig.devConfig.url, System.getenv(DEV_SERVER_VARIABLE))
        val allowRemote = pluginConfig.devConfig.allowRemote
        val devProxy =
            if (isDevProxyActive(pluginConfig.devConfig.mode, application)) {
                requireAllowedTarget(devUrl, allowRemote)
                DevProxy(
                    devUrl,
                    listOfNotNull(
                        "panel".takeIf { pluginConfig.devConfig.panel },
                        "logs".takeIf { pluginConfig.devConfig.browserLogs },
                        "refresh".takeIf { pluginConfig.devConfig.refreshAfterRestart },
                        "errors".takeIf { pluginConfig.devConfig.panel && pluginConfig.devConfig.errorOverlay },
                    ),
                )
            } else {
                null
            }
        val securityHeaders = pluginConfig.securityHeadersConfig
        val contentSecurityPolicy = pageContentSecurityPolicy(store, securityHeaders, devProxy != null)
        if (contentSecurityPolicy != null && !application.developmentMode) {
            application.launch(Dispatchers.IO) { contentSecurityPolicy.precomputeAll() }
        }
        val publicConfig = pluginConfig.publicConfigProvider?.let { PublicConfigSource(it, application.developmentMode) }
        val configInjector = publicConfig?.takeIf { pluginConfig.inlinePublicConfig }?.let { ConfigInjector(store, it) }
        val responder = AssetResponder(store, pluginConfig.cacheConfig, contentSecurityPolicy, configInjector)
        val internalAccess = InternalAccess(pluginConfig.internalAccessConfig)
        val docsOutsideDevelopment = pluginConfig.apiDocs && !application.developmentMode && internalAccess.isConfigured
        val docsPath = pluginConfig.apiDocsPath.takeIf { pluginConfig.apiDocs && (application.developmentMode || docsOutsideDevelopment) }
        if (docsPath != null && docsOutsideDevelopment) {
            val docsSegments = pathSegments(docsPath)
            onCall { call ->
                if (pathSegments(decodedPathOrRaw(call)).take(docsSegments.size) == docsSegments) {
                    internalAccess.allows(call, DOCS_REFUSED_MESSAGE)
                }
            }
        }
        val siteFiles =
            if (pluginConfig.sitemap) {
                SiteFiles(
                    pluginConfig.siteUrl,
                    pluginConfig.apiPrefixList,
                    setOfNotNull(pluginConfig.spaFallback, pluginConfig.notFoundPage),
                )
            } else {
                null
            }
        val devRequests = if (devProxy != null && pluginConfig.devConfig.panel) DevRequestLog(resolver) else null
        val defaultFavicon =
            if (pluginConfig.defaultFavicon) {
                DefaultFavicon(devProxy?.let { Path(System.getProperty(FRONTEND_DIR_PROPERTY) ?: "frontend").resolve("static") })
            } else {
                null
            }
        val handler = SvelteHandler(store, resolver, responder, devProxy, devUrl, allowRemote, siteFiles, defaultFavicon)
        application.attributes.put(SvelteHandlerKey, handler)
        val metrics = SvelteMetrics()
        application.attributes.put(SvelteMetricsKey, metrics)

        application.attributes.put(
            DefaultTimeZoneKey,
            zoneOrNull(pluginConfig.defaultTimeZone)
                ?: throw IllegalArgumentException(
                    "defaultTimeZone '${pluginConfig.defaultTimeZone}' is not a time zone. Use a name such as \"Europe/Zurich\" or \"UTC\".",
                ),
        )
        installTransport(application, pluginConfig.transportConfig, pluginConfig.maxApiBodySize)
        if (pluginConfig.apiCompression) installApiCompression(application, resolver)
        if (pluginConfig.requestIds) installRequestIds(application)
        installConfigReport(application, pluginConfig)
        if (application.developmentMode) installDevHttps(application)
        val loginPage = pluginConfig.loginPage
        require(loginPage == null || (isPagePath(loginPage) && '?' !in loginPage && '#' !in loginPage)) {
            "loginPage takes the path of a page in this app, such as \"/login\" or FrontendRoutes.login, but is '$loginPage'."
        }
        loginPage?.let { application.attributes.put(LoginPageKey, it) }
        val currentUser = pluginConfig.currentUserSpec
        val currentUserPath =
            currentUser?.let { it.path ?: (pluginConfig.apiPrefixList.firstOrNull() ?: "/api").trimEnd('/') + "/$CURRENT_USER_ROUTE" }
        installTypeScriptGeneration(
            application,
            pluginConfig.generateTs,
            pluginConfig.generateTsOutput,
            pluginConfig.apiPrefixList,
            listOfNotNull(docsPath, currentUserPath, pluginConfig.preferencesSpec?.let { preferencesPathOf(pluginConfig) }),
            pluginConfig.publicConfigSchema,
            pluginConfig.declaredErrorList.toList(),
            pluginConfig.constantHolders.map(::sharedHolder),
            pluginConfig.errorCodeSet?.names.orEmpty(),
            pluginConfig.typedCookies.map { it.spec() },
            currentUser?.let { CurrentUserType(it.typeName, it.schema, currentUserPath.orEmpty()) },
            loginPage,
            pluginConfig.permissionSet?.names.orEmpty(),
            pluginConfig.guardsConfig.rules.map { GuardSpec(it.page, it.permission?.name) },
            FRONTEND_ERRORS_PATH.takeIf { pluginConfig.frontendErrorsConfig.enabled },
            pluginConfig.webVitalsConfig.takeIf { it.enabled }?.let { "reportVitals('$WEB_VITALS_PATH', ${it.sampleRate});" },
            pluginConfig.preferencesSpec?.let {
                PreferencesType(
                    it.typeName,
                    it.schema,
                    preferencesPathOf(pluginConfig),
                    it.defaultsJson,
                    mapOf("theme" to THEME_COOKIE, "locale" to LOCALE_COOKIE),
                )
            },
        )
        pluginConfig.errorCodeSet?.let { application.attributes.put(ErrorCodesKey, it) }
        currentUser?.let { application.attributes.put(CurrentUserKey, it) }
        val permissions = pluginConfig.permissionSet
        if (permissions != null) {
            checkNotNull(currentUser) {
                "permissions says what a user may do, so it needs the user: add currentUser<${permissions.userType.simpleName}> { ... }."
            }
            check(permissions.userType.java.isAssignableFrom(currentUser.type.java)) {
                "permissions takes a ${permissions.userType.simpleName}, but currentUser is declared as ${currentUser.typeName}."
            }
            application.attributes.put(PermissionsKey, permissions)
        }
        val preferences = pluginConfig.preferencesSpec
        val preferencesPath =
            preferences?.let { it.path ?: (pluginConfig.apiPrefixList.firstOrNull() ?: "/api").trimEnd('/') + "/$PREFERENCES_ROUTE" }
        if (preferences != null) {
            checkNotNull(currentUser) {
                "preferences are kept per user, so it needs the user: add currentUser<${preferences.userType.simpleName}> { ... }."
            }
            check(preferences.userType.java.isAssignableFrom(currentUser.type.java)) {
                "preferences takes a ${preferences.userType.simpleName}, but currentUser is declared as ${currentUser.typeName}."
            }
        }
        val guards = pluginConfig.guardsConfig.rules.toList()
        if (guards.isNotEmpty()) {
            checkNotNull(currentUser) { "guards needs to know who is signed in: add currentUser<User> { ... } to install(Svelte)." }
            guards.mapNotNull { it.permission }.forEach { asked ->
                checkNotNull(permissions) {
                    "guards asks for ${asked.javaClass.simpleName}.$asked, so it needs permissions<${asked.javaClass.simpleName}, User> { ... }."
                }
                check(permissions.type.isInstance(asked)) {
                    "guards asks for ${asked.javaClass.simpleName}.$asked, but permissions are declared as ${permissions.type.simpleName}."
                }
            }
            installGuards(application, guards, pluginConfig.apiPrefixList)
        }
        if (currentUser?.sessionEnds != null) {
            onCallRespond { call, _ ->
                if (call.response.headers[SESSION_HEADER] == null && resolver.isApiPath(decodedPathOrRaw(call))) {
                    currentUser.secondsLeft(call)?.let { call.response.header(SESSION_HEADER, it.toString()) }
                }
            }
        }
        application.attributes.put(TypedCookiesKey, pluginConfig.typedCookies.toList())
        if (securityHeaders.enabled) installSecurityHeaders(securityHeaders, devProxy != null)
        if (pluginConfig.buildHeader) {
            val build = BuildFingerprint(store)
            onCall { call ->
                if (resolver.isApiPath(decodedPathOrRaw(call))) build.current()?.let { call.response.header(BUILD_HEADER, it) }
            }
        }

        val summary = if (application.developmentMode) settingsSummary(pluginConfig, devUrl.takeIf { devProxy != null }) else emptyList()
        if (application.developmentMode && pluginConfig.devConfig.startupTiming) {
            application.onOwn(ApplicationStarted) { startupTiming.modulesEnded = System.currentTimeMillis() }
            application.subscribeWhileRunning(ServerReady, { it === application.environment }) {
                application.log.info(startupTiming.line(System.currentTimeMillis(), application.startupSteps().toList()))
            }
        }
        val warmUp = WarmUp(pluginConfig.warmUpPathList)
        if (!warmUp.done) {
            application.subscribeWhileRunning(ServerReady, { it === application.environment }) {
                application.launch {
                    val baseUrl = runCatching { warmUpBaseUrl(application.engine.resolvedConnectors()) }.getOrNull()
                    warmUp.run(application, baseUrl)
                }
            }
        }
        application.onOwn(ApplicationStarted) {
            if (summary.isNotEmpty()) application.log.info("ktor-svelte settings:\n" + summary.joinToString("\n") { "  $it" })
            val manifest = store.manifest()
            val root = application.pluginOrNull(RoutingRoot)
            if (manifest != null && root != null) {
                shadowedPages(constantGetPaths(root), manifest, resolver).forEach { (route, page) ->
                    application.log.warn(
                        "ktor-svelte: the Ktor route GET $route hides the frontend page $page. Move the route or rename the page.",
                    )
                }
            }
            application.log.info(startupLine(store.manifest(), devUrl.takeIf { devProxy != null }))
        }
        if (store.manifest() == null) {
            check(application.developmentMode || devProxy != null) { MISSING_BUILD_MESSAGE }
            if (devProxy == null) application.log.warn(MISSING_BUILD_MESSAGE)
        }

        if (pluginConfig.idempotencyConfig.enabled) {
            val idempotency = pluginConfig.idempotencyConfig
            installIdempotency(application, resolver, IdempotencyStore(idempotency.ttl.inWholeMilliseconds, idempotency.maxEntries))
        }

        val constraints = SchemaConstraints()
        application.receivePipeline.intercept(ApplicationReceivePipeline.After) { received ->
            constraints.requireValid(received)
        }

        val maxApiBodySize = pluginConfig.maxApiBodySize
        if (maxApiBodySize != null) installBodyLimit(resolver, maxApiBodySize)
        installJsonShapeLimits(application, resolver, pluginConfig.maxJsonDepth, pluginConfig.maxJsonStringLength)
        installInputNormalisation(application)
        installRateLimits(application, pluginConfig.rateLimitConfig, resolver)
        if (pluginConfig.originCheck) {
            val originCheck = OriginCheck(pluginConfig.allowedOriginList, application.developmentMode)
            onCall { call ->
                if (resolver.isApiPath(decodedPathOrRaw(call)) &&
                    originCheck.refuseIfCrossOrigin(call)
                ) {
                    metrics.crossOrigin.incrementAndGet()
                }
            }
        }

        on(ResponseSent) { call ->
            if (call.response.status() == HttpStatusCode.TooManyRequests && resolver.isApiPath(decodedPathOrRaw(call))) {
                metrics.rateLimited.incrementAndGet()
            }
        }
        application.subscribeWhileRunning(RoutingRoot.RoutingCallStarted, { it.application === application }) { call ->
            call.attributes.put(MetricRoute, call.route)
        }
        onCall { call -> call.attributes.put(MetricStartedAt, System.nanoTime()) }
        on(ResponseSent) { call -> recordRouteMetric(call, metrics.routeStore, resolver, pluginConfig.paramRouteList) }

        if (devRequests != null) {
            devRequests.install(application)
            devRequests.sensitive.install(application)
            devRequests.countSql(application)
            devRequests.measurePayloads(application)
            onCall { call -> devRequests.started(call) }
            on(ResponseSent) { call -> devRequests.finished(call) }
        }

        if (pluginConfig.accessLog && !application.developmentMode) {
            val accessLog = AccessLog()
            onCall { call -> accessLog.started(call) }
            on(ResponseSent) { call -> accessLog.finished(call) }
        }

        val slowApiCall = pluginConfig.devConfig.slowApiCall
        if (slowApiCall != null && application.developmentMode) {
            val slowCalls = SlowCallLog(slowApiCall, resolver, sensitive = devRequests?.sensitive)
            slowCalls.install(application)
            onCall { call -> slowCalls.started(call) }
            on(ResponseSent) { call -> slowCalls.finished(call) }
        }

        val hideErrorDetails = pluginConfig.hideErrorDetails
        on(CallFailed) { call, cause ->
            if (cause is ValidationException) {
                devRequests?.validationFailed(call, cause.fields)
                respondJsonMessage(call, HttpStatusCode.UnprocessableEntity, "Validation failed", cause.fields)
                return@on
            }
            if (cause is SignInRequiredException && !call.response.isCommitted) {
                respondJsonMessage(call, HttpStatusCode.Unauthorized, currentUser?.signInMessage?.invoke(call) ?: SIGN_IN_MESSAGE)
                return@on
            }
            if (cause is PermissionDeniedException && !call.response.isCommitted) {
                respondJsonMessage(call, HttpStatusCode.Forbidden, permissions?.refusedMessage?.invoke(call) ?: REFUSED_MESSAGE)
                return@on
            }
            if (cause is RecordNotFoundException && !call.response.isCommitted) {
                respondJsonMessage(call, HttpStatusCode.NotFound, NOT_FOUND_MESSAGE)
                return@on
            }
            if (cause is ApiException && !call.response.isCommitted) {
                call.respondError(cause.code, cause.status, cause.message.takeUnless { it == cause.code.name })
                return@on
            }
            if (cause is UploadRuleException && !call.response.isCommitted) {
                respondUploadProblem(call, cause)
                return@on
            }
            if (cause is URLDecodeException && !call.response.isCommitted) {
                respondBadRequest(call, resolver.isApiPath(decodedPathOrRaw(call)))
                return@on
            }
            val bodyTooLarge = cause.findPayloadTooLarge() != null || call.attributes.contains(BodyTooLarge)
            cause.findJsonShapeException()?.takeUnless { bodyTooLarge }?.let { shape ->
                respondJsonShape(call, shape)
                return@on
            }
            if (maxApiBodySize != null && bodyTooLarge) {
                metrics.bodyTooLarge.incrementAndGet()
                respondBodyTooLarge(call, maxApiBodySize)
                return@on
            }
            devRequests?.failed(call, cause)
            if (hideErrorDetails && mayHideErrorDetails(call)) {
                respondWithoutDetails(call, cause, resolver.isApiPath(decodedPathOrRaw(call)))
            }
            devRequests?.leftUnanswered(call)
            if (!call.response.isCommitted) {
                recordRouteMetric(call, metrics.routeStore, resolver, pluginConfig.paramRouteList, answered = SERVER_ERROR_STATUS)
            }
        }

        val automaticRouting = pluginConfig.routing == SvelteRouting.Automatic
        application.routing {
            if (automaticRouting) {
                catchAll(handler)
            }
            if (currentUser != null && currentUserPath != null) currentUserRoute(currentUserPath, currentUser)
            if (pluginConfig.webVitalsConfig.enabled) {
                webVitalsRoute(metrics.vitals, pluginConfig.webVitalsConfig.perClientPerMinute, pluginConfig.paramRouteList)
            }
            if (pluginConfig.frontendErrorsConfig.enabled) {
                frontendErrorRoute(pluginConfig.frontendErrorsConfig.perClientPerMinute, pluginConfig.frontendErrorsConfig.maxBodyBytes)
            }
            if (preferences != null && preferencesPath != null) preferencesRoutes(preferencesPath, preferences)
            if (devProxy != null) devClientRoutes(compileErrorsFile(), allowRemote)
            if (devProxy != null && pluginConfig.devConfig.browserLogs) browserLogRoute(allowRemote)
            if (devRequests != null && devProxy != null) {
                val healthChecks = pluginConfig.healthCheckList.toList()
                devCookieRoutes(allowRemote, devRequests.sensitive)
                devEnvironmentRoute(allowRemote, devRequests.sensitive) { application.environment.config }
                devMigrationsRoute(allowRemote) { application.environment.classLoader }
                devRuntimeRoute(allowRemote)
                devClearSiteDataRoute(allowRemote)
                devRequestRoutes(
                    devRequests,
                    allowRemote,
                    devProxy,
                    routeMap = {
                        routeMap(
                            routeTable(application.plugin(RoutingRoot), store.manifest(), resolver, pluginConfig.paramRouteList),
                            pagesOf(System.getProperty(FRONTEND_DIR_PROPERTY)?.let { java.io.File(it) }, store.manifest()),
                            devRequests.sourceFiles,
                            docsPath,
                        )
                    },
                    status = { call ->
                        val build = application.buildInfo
                        devStatus(
                            statusJson(store.manifest(), devProxy, devUrl, metrics),
                            if (healthChecks.isEmpty()) null else HealthReport(healthChecks).isUp(call, frontendReady = true),
                            settingsSummary(pluginConfig, devUrl),
                            mapOf(
                                "ktor-svelte" to runtimeVersion,
                                "Ktor" to Application::class.java.`package`?.implementationVersion,
                                "Kotlin" to KotlinVersion.CURRENT.toString(),
                                "Java" to System.getProperty("java.version"),
                            ),
                            mapOf("version" to build.version, "commit" to build.shortCommit, "built" to build.time?.toString()),
                        )
                    },
                )
            }
            if (pluginConfig.publicBuildInfo) {
                get(BUILD_INFO_PATH) {
                    call.response.header(HttpHeaders.CacheControl, "no-cache")
                    call.respondText(application.buildInfo.toJson(), ContentType.Application.Json)
                }.hide()
            }
            if (publicConfig != null) {
                get(PUBLIC_CONFIG_PATH) {
                    call.response.header(HttpHeaders.CacheControl, "no-cache")
                    call.respondText(publicConfig.current(), ContentType.Application.Json)
                }.hide()
            }
            if (application.developmentMode) {
                get(ROUTES_PATH) {
                    if (!isLocalCall(call)) {
                        call.respondText(STATUS_REFUSED_MESSAGE, status = HttpStatusCode.Forbidden)
                        return@get
                    }
                    val table = routeTable(application.plugin(RoutingRoot), store.manifest(), resolver, pluginConfig.paramRouteList)
                    call.response.header(HttpHeaders.CacheControl, "no-store")
                    if (call.request.header(HttpHeaders.Accept)?.contains("application/json") == true) {
                        call.respondText(table.toJson(), ContentType.Application.Json)
                    } else {
                        call.respondText(table.toHtml(), ContentType.Text.Html)
                    }
                }.hide()
            }
            if (pluginConfig.statusEndpoint) {
                get(STATUS_PATH) {
                    if (!internalAccess.allows(call, STATUS_REFUSED_MESSAGE)) return@get
                    call.response.header(HttpHeaders.CacheControl, "no-store")
                    call.respondText(statusJson(store.manifest(), devProxy, devUrl, metrics), ContentType.Application.Json)
                }.hide()
            }
            if (pluginConfig.healthEndpoint) {
                val health = HealthReport(pluginConfig.healthCheckList.toList())
                get(HEALTH_PATH) {
                    call.response.header(HttpHeaders.CacheControl, "no-store")
                    if (!warmUp.done) {
                        call.respondText(HEALTH_STARTING_JSON, ContentType.Application.Json, HttpStatusCode.ServiceUnavailable)
                    } else if (health.isUp(call, frontendReady = store.manifest() != null || devProxy != null)) {
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
        startupTiming.installEnded = System.currentTimeMillis()
    }

public fun Route.svelte(public: List<String> = emptyList()) {
    val handler =
        application.attributes.getOrNull(SvelteHandlerKey)
            ?: error("Install the Svelte plugin before calling svelte() in routing." + DocLink.KTOR.see())
    if (public.isEmpty()) {
        catchAll(handler, privateResponses = true)
        return
    }
    val paths = ((if (handler.proxiesToVite) public + VITE_DEV_PATHS else public) + INSTALLABLE_APP_PATHS).distinct()
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
        DevMode.Auto -> application.developmentMode
        DevMode.Always -> true
        DevMode.Never -> false
    }

private fun createStore(
    source: SvelteSource,
    application: Application,
): AssetStore =
    when (source) {
        SvelteSource.Classpath -> ClasspathAssetStore(application.environment.classLoader)
        is SvelteSource.Directory -> DirectoryAssetStore(source.path, rescanOnEveryRead = application.developmentMode)
    }

private fun preferencesPathOf(config: SvelteConfig): String =
    config.preferencesSpec?.path ?: ((config.apiPrefixList.firstOrNull() ?: "/api").trimEnd('/') + "/$PREFERENCES_ROUTE")
