package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.SvelteConfig
import io.github.nijasc.ktor.svelte.SvelteSource
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationStarted
import io.ktor.server.application.log
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import kotlinx.serialization.json.putJsonObject
import kotlin.io.path.Path
import kotlin.io.path.createParentDirectories
import kotlin.io.path.writeText

internal const val CONFIG_REPORT_PROPERTY = "ktor.svelte.configReport"
private val prettyJson = Json { prettyPrint = true }

private fun strings(values: Iterable<String>) = JsonArray(values.map(::JsonPrimitive))

internal fun configReport(config: SvelteConfig): JsonObject =
    buildJsonObject {
        put("apiPrefixes", strings(config.apiPrefixList))
        put("paramRoutes", strings(config.paramRouteList))
        put("spaFallback", config.spaFallback)
        put("notFoundPage", config.notFoundPage)
        put(
            "source",
            when (val source = config.source) {
                SvelteSource.Classpath -> "Classpath"
                is SvelteSource.Directory -> "Directory(${source.path})"
            },
        )
        put("generateTs", config.generateTs)
        put("generateTsOutput", config.generateTsOutput)
        put("apiDocs", config.apiDocs)
        put("apiDocsPath", config.apiDocsPath)
        put("routing", config.routing.name)
        put("statusEndpoint", config.statusEndpoint)
        put("healthEndpoint", config.healthEndpoint)
        put("healthChecks", config.healthCheckList.size)
        put("originCheck", config.originCheck)
        put("allowedOrigins", strings(config.allowedOriginList))
        put("hideErrorDetails", config.hideErrorDetails)
        put("apiCompression", config.apiCompression)
        put("inlinePublicConfig", config.inlinePublicConfig)
        put("publicConfig", config.publicConfigProvider != null)
        put("buildHeader", config.buildHeader)
        put("requestIds", config.requestIds)
        put("sitemap", config.sitemap)
        put("siteUrl", config.siteUrl)
        put("defaultFavicon", config.defaultFavicon)
        put("maxApiBodySize", config.maxApiBodySize)
        put("maxJsonDepth", config.maxJsonDepth)
        put("maxJsonStringLength", config.maxJsonStringLength)
        put("declaredErrors", strings(config.declaredErrorList.map { it.name }))
        putJsonObject("cache") {
            put("immutable", config.cacheConfig.immutable)
            put("html", config.cacheConfig.html)
            put("other", config.cacheConfig.other)
        }
        putJsonObject("dev") {
            put("url", config.devConfig.url)
            put("mode", config.devConfig.mode.name)
            put("allowRemote", config.devConfig.allowRemote)
            put("slowApiCall", config.devConfig.slowApiCall?.toString())
            put("panel", config.devConfig.panel)
            put("browserLogs", config.devConfig.browserLogs)
        }
        putJsonObject("transport") {
            put("formats", strings(config.transportConfig.formatNames.ifEmpty { listOf("json") }))
            put("compression", config.transportConfig.compressionConfig != null)
        }
        putJsonObject("securityHeaders") {
            val headers = config.securityHeadersConfig
            put("enabled", headers.enabled)
            put("contentTypeOptions", headers.contentTypeOptions)
            put("frameOptions", headers.frameOptions)
            put("referrerPolicy", headers.referrerPolicy)
            put("contentSecurityPolicy", headers.contentSecurityPolicy)
            put("automaticContentSecurityPolicy", headers.automaticContentSecurityPolicy)
            putJsonObject("extraCspSources") {
                headers.extraCspSources.forEach { (directive, sources) ->
                    put(directive, strings(sources))
                }
            }
        }
        putJsonObject("rateLimit") {
            val rate = config.rateLimitConfig
            put("enabled", rate.enabled)
            put("apiWrites", rate.apiWrites)
            put("period", rate.period.toString())
            put("algorithm", rate.algorithm.name)
            put("namedLimits", strings(rate.namedLimits.keys))
        }
    }

internal fun installConfigReport(
    application: Application,
    config: SvelteConfig,
) {
    val target = System.getProperty(CONFIG_REPORT_PROPERTY)?.takeIf { it.isNotBlank() } ?: return
    application.monitor.subscribe(ApplicationStarted) {
        val file = Path(target)
        file.createParentDirectories()
        val report =
            buildJsonObject {
                put("settings", configReport(config))
                put("defaults", configReport(SvelteConfig()))
            }
        file.writeText(prettyJson.encodeToString(JsonObject.serializer(), report) + "\n")
        application.log.info("ktor-svelte wrote its settings to $file")
        Runtime.getRuntime().halt(0)
    }
}
