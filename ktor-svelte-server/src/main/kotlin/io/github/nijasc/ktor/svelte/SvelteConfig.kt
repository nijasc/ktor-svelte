package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.DeclaredError
import io.ktor.http.HttpStatusCode
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.KotlinxJsonSchemaInference
import io.ktor.utils.io.KtorDsl
import kotlinx.serialization.json.Json
import kotlinx.serialization.serializer
import kotlin.reflect.typeOf
import kotlin.time.Duration
import kotlin.time.Duration.Companion.milliseconds

@KtorDsl
public class SvelteConfig {
    internal var apiPrefixList: List<String> = listOf("/api")
        private set

    internal var allowedOriginList: List<String> = emptyList()
        private set

    internal var paramRouteList: List<String> = emptyList()
        private set

    internal val cacheConfig: SvelteCacheConfig = SvelteCacheConfig()
    internal val devConfig: SvelteDevConfig = SvelteDevConfig()
    internal val transportConfig: SvelteTransportConfig = SvelteTransportConfig()
    internal val securityHeadersConfig: SvelteSecurityHeadersConfig = SvelteSecurityHeadersConfig()
    internal val rateLimitConfig: SvelteRateLimitConfig = SvelteRateLimitConfig()
    internal val healthCheckList: MutableList<suspend () -> Boolean> = mutableListOf()
    internal val declaredErrorList: MutableList<DeclaredError> = mutableListOf()
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
    public var inlinePublicConfig: Boolean = true
    public var buildHeader: Boolean = true
    public var requestIds: Boolean = true
    public var sitemap: Boolean = true
    public var siteUrl: String? = null
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

    public fun rateLimit(configure: SvelteRateLimitConfig.() -> Unit) {
        rateLimitConfig.configure()
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

@KtorDsl
public class SvelteCacheConfig {
    public var immutable: String = "public, max-age=31536000, immutable"
    public var html: String = "no-cache"
    public var other: String = "no-cache"
}

@KtorDsl
public class SvelteDevConfig {
    public var url: String = "http://localhost:5173"
    public var mode: DevMode = DevMode.AUTO
    public var allowRemote: Boolean = false
    public var slowApiCall: Duration? = 500.milliseconds
    public var panel: Boolean = true
    public var browserLogs: Boolean = true
}

@KtorDsl
public class SvelteSecurityHeadersConfig {
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

@Deprecated(
    "Renamed to match the other configuration classes.",
    ReplaceWith("SvelteSecurityHeadersConfig"),
)
public typealias SvelteSecurityHeaders = SvelteSecurityHeadersConfig

private val CSP_DIRECTIVE = Regex("[a-z][a-z-]*")
private val CSP_SOURCE = Regex("""[^\s;,]+""")

public enum class SvelteRouting {
    Automatic,
    Manual,
}

public enum class DevMode {
    AUTO,
    ALWAYS,
    NEVER,
}
