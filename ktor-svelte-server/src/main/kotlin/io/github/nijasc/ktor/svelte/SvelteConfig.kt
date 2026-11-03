package io.github.nijasc.ktor.svelte

import io.ktor.utils.io.KtorDsl

@KtorDsl
public class SvelteConfig {
    internal var apiPrefixList: List<String> = listOf("/api")
        private set

    internal val cacheConfig: SvelteCacheConfig = SvelteCacheConfig()
    internal val devConfig: SvelteDevConfig = SvelteDevConfig()
    internal val transportConfig: SvelteTransportConfig = SvelteTransportConfig()

    public var spaFallback: String? = "200.html"
    public var notFoundPage: String? = "404.html"
    public var source: SvelteSource = SvelteSource.Classpath
    public var generateTs: Boolean = false
    public var generateTsOutput: String? = null

    public fun apiPrefixes(vararg prefixes: String) {
        apiPrefixList = prefixes.toList()
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
}

public enum class DevMode {
    AUTO,
    ALWAYS,
    NEVER,
}
