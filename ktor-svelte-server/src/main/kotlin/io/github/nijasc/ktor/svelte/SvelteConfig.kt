package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.DeclaredError
import io.ktor.http.HttpStatusCode
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.KotlinxJsonSchemaInference
import io.ktor.server.application.ApplicationCall
import io.ktor.util.reflect.TypeInfo
import io.ktor.util.reflect.typeInfo
import io.ktor.utils.io.KtorDsl
import kotlinx.serialization.json.Json
import kotlinx.serialization.serializer
import java.time.Instant
import kotlin.reflect.KClass
import kotlin.reflect.typeOf
import kotlin.time.Duration
import kotlin.time.Duration.Companion.milliseconds

@KtorDsl
public class SvelteConfig internal constructor() {
    internal var apiPrefixList: List<String> = listOf("/api")
        private set

    internal var allowedOriginList: List<String> = emptyList()
        private set

    internal var paramRouteList: List<String> = emptyList()
        private set

    internal var warmUpPathList: List<String> = emptyList()
        private set

    internal val cacheConfig: SvelteCacheConfig = SvelteCacheConfig()
    internal val devConfig: SvelteDevConfig = SvelteDevConfig()
    internal val transportConfig: SvelteTransportConfig = SvelteTransportConfig()
    internal val securityHeadersConfig: SvelteSecurityHeadersConfig = SvelteSecurityHeadersConfig()
    internal val rateLimitConfig: SvelteRateLimitConfig = SvelteRateLimitConfig()
    internal val internalAccessConfig: SvelteInternalAccessConfig = SvelteInternalAccessConfig()
    internal val healthCheckList: MutableList<suspend () -> Boolean> = mutableListOf()
    internal val declaredErrorList: MutableList<DeclaredError> = mutableListOf()
    internal val constantHolders: MutableList<Any> = mutableListOf()
    internal val idempotencyConfig: SvelteIdempotencyConfig = SvelteIdempotencyConfig()
    internal val guardsConfig: SvelteGuardsConfig = SvelteGuardsConfig()
    internal val frontendErrorsConfig: SvelteFrontendErrorsConfig = SvelteFrontendErrorsConfig()
    internal val webVitalsConfig: SvelteWebVitalsConfig = SvelteWebVitalsConfig()
    internal val typedCookies: MutableList<TypedCookie<*>> = mutableListOf()
    internal var errorCodeSet: ErrorCodeSet? = null
        private set
    internal var currentUserSpec: CurrentUserSpec? = null
        private set
    internal var permissionSet: PermissionSet? = null
        private set
    internal var preferencesSpec: PreferencesSpec? = null
        private set
    internal var publicConfigProvider: (() -> String)? = null
        private set
    internal var publicConfigSchema: String? = null
        private set

    public var spaFallback: String? = "200.html"
    public var notFoundPage: String? = "404.html"
    public var source: SvelteSource = SvelteSource.Classpath
    public var generateTs: Boolean = false
    public var generateTsOutput: String? = null
    public var apiDocs: Boolean = false
    public var apiDocsPath: String = "/api/docs"
    public var routing: SvelteRouting = SvelteRouting.Automatic
    public var statusEndpoint: Boolean = false
    public var healthEndpoint: Boolean = false
    public var originCheck: Boolean = true
    public var hideErrorDetails: Boolean = true
    public var apiCompression: Boolean = true
    public var mailer: Mailer? = null
    public var inlinePublicConfig: Boolean = true
    public var buildHeader: Boolean = true
    public var requestIds: Boolean = true
    public var accessLog: Boolean = false
    public var publicBuildInfo: Boolean = false
    public var defaultTimeZone: String = "UTC"
    public var defaultFavicon: Boolean = true
    public var sitemap: Boolean = true
    public var siteUrl: String? = null
    public var loginPage: String? = null
    public var maxApiBodySize: Long? = 1024L * 1024L
    public var maxJsonDepth: Int? = 64
    public var maxJsonStringLength: Int? = null

    public fun apiPrefixes(vararg prefixes: String) {
        apiPrefixList = prefixes.toList()
    }

    public fun allowedOrigins(vararg origins: String) {
        allowedOriginList = origins.toList()
    }

    public fun paramRoutes(vararg routes: String) {
        paramRouteList = routes.toList()
    }

    public fun warmUp(vararg paths: String) {
        require(paths.all { it.startsWith("/") }) { "warmUp paths start with a slash, such as \"/api/notes\"." }
        warmUpPathList = paths.toList()
    }

    public fun healthCheck(check: suspend () -> Boolean) {
        healthCheckList += check
    }

    public fun cache(configure: SvelteCacheConfig.() -> Unit) {
        cacheConfig.configure()
    }

    public fun dev(configure: SvelteDevConfig.() -> Unit) {
        devConfig.configure()
    }

    public fun transport(configure: SvelteTransportConfig.() -> Unit) {
        transportConfig.configure()
    }

    public inline fun <reified E : Enum<E>> errorCodes(noinline message: ((ApplicationCall, E) -> String?)? = null) {
        val resolver: ((ApplicationCall, Enum<*>) -> String?)? =
            message?.let { own -> { call, code -> (code as? E)?.let { own(call, it) } } }
        setErrorCodes(E::class.java, enumValues<E>().map { it.name }, resolver)
    }

    @PublishedApi
    internal fun setErrorCodes(
        type: Class<*>,
        names: List<String>,
        message: ((ApplicationCall, Enum<*>) -> String?)?,
    ) {
        require(names.isNotEmpty()) { "errorCodes needs an enum with at least one code." }
        check(
            errorCodeSet == null,
        ) { "errorCodes is already set to ${errorCodeSet?.type?.simpleName}. An app has one enum of error codes." }
        errorCodeSet = ErrorCodeSet(type, names, message)
    }

    public inline fun <reified T : Any> currentUser(
        path: String? = null,
        noinline signInMessage: ((ApplicationCall) -> String)? = null,
        noinline sessionEnds: (suspend ApplicationCall.() -> Instant?)? = null,
        noinline extendSession: (suspend ApplicationCall.() -> Unit)? = null,
        noinline find: suspend ApplicationCall.() -> T?,
    ) {
        setCurrentUser(
            T::class,
            KotlinxJsonSchemaInference.buildSchema(typeOf<T>()),
            typeInfo<CurrentUserAnswer<T>>(),
            path,
            signInMessage,
            sessionEnds,
            extendSession,
            find,
        )
    }

    @PublishedApi
    internal fun setCurrentUser(
        type: KClass<*>,
        schema: JsonSchema,
        answerType: TypeInfo,
        path: String?,
        signInMessage: ((ApplicationCall) -> String)?,
        sessionEnds: (suspend ApplicationCall.() -> Instant?)?,
        extendSession: (suspend ApplicationCall.() -> Unit)?,
        find: suspend ApplicationCall.() -> Any?,
    ) {
        check(
            currentUserSpec == null,
        ) { "currentUser is already set to ${currentUserSpec?.typeName}. An app has one kind of signed-in user." }
        require(path == null || path.startsWith("/")) { "currentUser: the path must start with a slash, but is '$path'." }
        currentUserSpec =
            CurrentUserSpec(
                type,
                Json.encodeToString(JsonSchema.serializer(), schema),
                path,
                answerType,
                signInMessage,
                sessionEnds,
                extendSession,
                find,
            )
    }

    public inline fun <reified P : Enum<P>, reified U : Any> permissions(
        noinline refusedMessage: ((ApplicationCall) -> String)? = null,
        noinline of: suspend ApplicationCall.(U) -> Set<P>,
    ) {
        setPermissions(P::class.java, enumValues<P>().map { it.name }, U::class, refusedMessage) { user -> of(user as U) }
    }

    @PublishedApi
    internal fun setPermissions(
        type: Class<*>,
        names: List<String>,
        userType: KClass<*>,
        refusedMessage: ((ApplicationCall) -> String)?,
        of: suspend ApplicationCall.(Any) -> Set<Enum<*>>,
    ) {
        require(names.isNotEmpty()) { "permissions needs an enum with at least one permission." }
        check(
            permissionSet == null,
        ) { "permissions is already set to ${permissionSet?.type?.simpleName}. An app has one enum of permissions." }
        permissionSet = PermissionSet(type, names, userType, refusedMessage, of)
    }

    public inline fun <reified T : Any, reified U : Any> preferences(
        defaults: T,
        path: String? = null,
        noinline load: suspend ApplicationCall.(U) -> T?,
        noinline save: suspend ApplicationCall.(U, T) -> Unit,
    ) {
        setPreferences(
            typeName = T::class.simpleName ?: "Preferences",
            schema = KotlinxJsonSchemaInference.buildSchema(typeOf<T>()),
            defaultsJson = Json { encodeDefaults = true }.encodeToString(serializer<T>(), defaults),
            userType = U::class,
            path = path,
            valueType = typeInfo<T>(),
            answerType = typeInfo<PreferencesAnswer<T>>(),
            defaults = defaults,
            load = { user -> load(user as U) },
            save = { user, value -> save(user as U, value as T) },
        )
    }

    @PublishedApi
    internal fun setPreferences(
        typeName: String,
        schema: JsonSchema,
        defaultsJson: String,
        userType: KClass<*>,
        path: String?,
        valueType: TypeInfo,
        answerType: TypeInfo,
        defaults: Any,
        load: suspend ApplicationCall.(Any) -> Any?,
        save: suspend ApplicationCall.(Any, Any) -> Unit,
    ) {
        check(
            preferencesSpec == null,
        ) { "preferences is already set to ${preferencesSpec?.typeName}. An app has one class of preferences." }
        require(path == null || path.startsWith("/")) { "preferences: the path must start with a slash, but is '$path'." }
        preferencesSpec =
            PreferencesSpec(
                typeName,
                Json.encodeToString(JsonSchema.serializer(), schema),
                defaultsJson,
                userType,
                path,
                valueType,
                answerType,
                defaults,
                load,
                save,
            )
    }

    public fun frontendErrors(configure: SvelteFrontendErrorsConfig.() -> Unit = {}) {
        frontendErrorsConfig.enabled = true
        frontendErrorsConfig.configure()
        require(frontendErrorsConfig.perClientPerMinute >= 1) {
            "frontendErrors: perClientPerMinute must be at least 1, but is ${frontendErrorsConfig.perClientPerMinute}."
        }
        require(frontendErrorsConfig.maxBodyBytes in 256..MAX_ERROR_REPORT_BYTES) {
            "frontendErrors: maxBodyBytes must be between 256 and $MAX_ERROR_REPORT_BYTES, but is ${frontendErrorsConfig.maxBodyBytes}."
        }
    }

    public fun webVitals(configure: SvelteWebVitalsConfig.() -> Unit = {}) {
        webVitalsConfig.enabled = true
        webVitalsConfig.configure()
        require(webVitalsConfig.sampleRate > 0.0 && webVitalsConfig.sampleRate <= 1.0) {
            "webVitals: sampleRate is the share of page loads that report, above 0 and at most 1, but is ${webVitalsConfig.sampleRate}."
        }
        require(webVitalsConfig.perClientPerMinute >= 1) {
            "webVitals: perClientPerMinute must be at least 1, but is ${webVitalsConfig.perClientPerMinute}."
        }
    }

    public fun guards(configure: SvelteGuardsConfig.() -> Unit) {
        guardsConfig.configure()
    }

    public fun cookies(vararg cookies: TypedCookie<*>) {
        cookies.forEach { cookie ->
            require(typedCookies.none { it.name == cookie.name }) { "The cookie '${cookie.name}' is declared twice." }
            typedCookies.add(cookie)
        }
    }

    public fun constants(vararg holders: Any) {
        constantHolders.addAll(holders)
    }

    public fun idempotency(configure: SvelteIdempotencyConfig.() -> Unit = {}) {
        idempotencyConfig.enabled = true
        idempotencyConfig.configure()
        require(idempotencyConfig.ttl.isPositive()) { "idempotency: ttl must be above zero, but is ${idempotencyConfig.ttl}." }
        require(idempotencyConfig.maxEntries >= 1) { "idempotency: maxEntries must be at least 1, but is ${idempotencyConfig.maxEntries}." }
    }

    public fun rateLimit(configure: SvelteRateLimitConfig.() -> Unit) {
        rateLimitConfig.configure()
    }

    public fun internalAccess(configure: SvelteInternalAccessConfig.() -> Unit) {
        internalAccessConfig.configure()
    }

    public fun securityHeaders(configure: SvelteSecurityHeadersConfig.() -> Unit = {}) {
        securityHeadersConfig.configure()
    }

    public inline fun <reified T : Any> publicConfig(value: T) {
        setPublicConfig(Json.encodeToString(serializer<T>(), value), KotlinxJsonSchemaInference.buildSchema(typeOf<T>()))
    }

    public inline fun <reified T : Any> publicConfig(noinline provider: () -> T) {
        val serializer = serializer<T>()
        setPublicConfig({ Json.encodeToString(serializer, provider()) }, KotlinxJsonSchemaInference.buildSchema(typeOf<T>()))
    }

    public inline fun <reified T : Any> errorResponse(vararg statuses: HttpStatusCode) {
        addErrorResponse(T::class.simpleName ?: "ErrorBody", KotlinxJsonSchemaInference.buildSchema(typeOf<T>()), statuses.toList())
    }

    @PublishedApi
    internal fun addErrorResponse(
        name: String,
        schema: JsonSchema,
        statuses: List<HttpStatusCode>,
    ) {
        require(statuses.isNotEmpty()) { "errorResponse needs at least one status code." }
        require(statuses.all { it.value >= 400 }) { "errorResponse only takes error status codes, 400 and above." }
        declaredErrorList += DeclaredError(name, Json.encodeToString(JsonSchema.serializer(), schema), statuses.map { it.value })
    }

    @PublishedApi
    internal fun setPublicConfig(
        json: String,
        schema: JsonSchema,
    ) {
        setPublicConfig({ json }, schema)
    }

    @PublishedApi
    internal fun setPublicConfig(
        provider: () -> String,
        schema: JsonSchema,
    ) {
        publicConfigProvider = provider
        publicConfigSchema = Json.encodeToString(JsonSchema.serializer(), schema)
    }
}

internal const val MAX_ERROR_REPORT_BYTES = 64 * 1024

@KtorDsl
public class SvelteWebVitalsConfig internal constructor() {
    internal var enabled: Boolean = false
    public var sampleRate: Double = 0.1
    public var perClientPerMinute: Int = 10
}

@KtorDsl
public class SvelteFrontendErrorsConfig internal constructor() {
    internal var enabled: Boolean = false
    public var perClientPerMinute: Int = 10
    public var maxBodyBytes: Int = 8 * 1024
}

@KtorDsl
public class SvelteCacheConfig internal constructor() {
    public var immutable: String = "public, max-age=31536000, immutable"
    public var html: String = "no-cache"
    public var other: String = "no-cache"
}

@KtorDsl
public class SvelteDevConfig internal constructor() {
    public var url: String = "http://localhost:5173"
    public var mode: DevMode = DevMode.Auto
    public var allowRemote: Boolean = false
    public var slowApiCall: Duration? = 500.milliseconds
    public var panel: Boolean = true
    public var browserLogs: Boolean = true
    public var refreshAfterRestart: Boolean = true
    public var errorOverlay: Boolean = true
    public var startupTiming: Boolean = true
    public var catchEmails: Boolean = true
}

@KtorDsl
public class SvelteSecurityHeadersConfig internal constructor() {
    internal val extraCspSources: MutableMap<String, MutableList<String>> = linkedMapOf()

    public var enabled: Boolean = true
    public var contentTypeOptions: String? = "nosniff"
    public var frameOptions: String? = "DENY"
    public var referrerPolicy: String? = "strict-origin-when-cross-origin"
    public var contentSecurityPolicy: String? = null
    public var automaticContentSecurityPolicy: Boolean = true

    public fun allowCspSources(
        directive: String,
        vararg sources: String,
    ) {
        require(CSP_DIRECTIVE.matches(directive)) { "'$directive' is not a Content-Security-Policy directive name." }
        sources.forEach { source ->
            require(CSP_SOURCE.matches(source)) { "'$source' is not a single Content-Security-Policy source." }
        }
        extraCspSources.getOrPut(directive) { mutableListOf() }.addAll(sources)
    }
}

private val CSP_DIRECTIVE = Regex("[a-z][a-z-]*")
private val CSP_SOURCE = Regex("""[^\s;,]+""")

public enum class SvelteRouting {
    Automatic,
    Manual,
}

public enum class DevMode {
    Auto,
    Always,
    Never,
}
