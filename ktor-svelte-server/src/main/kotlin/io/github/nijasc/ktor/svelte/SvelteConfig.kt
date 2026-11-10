package io.github.nijasc.ktor.svelte

import io.ktor.openapi.JsonSchema
import io.ktor.openapi.KotlinxJsonSchemaInference
import io.ktor.utils.io.KtorDsl
import kotlinx.serialization.json.Json
import kotlinx.serialization.serializer
import kotlin.reflect.typeOf

@KtorDsl
public class SvelteConfig {
    internal var apiPrefixList: List<String> = listOf("/api")
        private set

    internal var paramRouteList: List<String> = emptyList()
        private set

    internal val cacheConfig: SvelteCacheConfig = SvelteCacheConfig()
    internal val devConfig: SvelteDevConfig = SvelteDevConfig()
    internal val transportConfig: SvelteTransportConfig = SvelteTransportConfig()
    internal var securityHeadersConfig: SvelteSecurityHeaders? = null
        private set
    internal var publicConfigJson: String? = null
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

    public fun apiPrefixes(vararg prefixes: String) {
        apiPrefixList = prefixes.toList()
    }

    public fun paramRoutes(vararg routes: String) {
        paramRouteList = routes.toList()
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

    public fun securityHeaders(configure: SvelteSecurityHeaders.() -> Unit = {}) {
        securityHeadersConfig = SvelteSecurityHeaders().apply(configure)
    }

    public inline fun <reified T : Any> publicConfig(value: T) {
        setPublicConfig(Json.encodeToString(serializer<T>(), value), KotlinxJsonSchemaInference.buildSchema(typeOf<T>()))
    }

    @PublishedApi
    internal fun setPublicConfig(
        json: String,
        schema: JsonSchema,
    ) {
        publicConfigJson = json
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
}

@KtorDsl
public class SvelteSecurityHeaders {
    public var contentTypeOptions: String? = "nosniff"
    public var frameOptions: String? = "DENY"
    public var referrerPolicy: String? = "strict-origin-when-cross-origin"
    public var contentSecurityPolicy: String? = null
}

public enum class SvelteRouting {
    Automatic,
    Manual,
}

public enum class DevMode {
    AUTO,
    ALWAYS,
    NEVER,
}
