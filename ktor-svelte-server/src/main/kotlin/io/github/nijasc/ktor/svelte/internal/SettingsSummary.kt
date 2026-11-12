package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.SvelteConfig

private fun onOff(value: Boolean) = if (value) "on" else "off"

private fun bytes(value: Long): String =
    when {
        value % (1024L * 1024L) == 0L -> "${value / (1024L * 1024L)} MiB"
        value % 1024L == 0L -> "${value / 1024L} KiB"
        else -> "$value bytes"
    }

internal fun settingsSummary(
    config: SvelteConfig,
    devProxyUrl: String?,
): List<String> {
    val headers = config.securityHeadersConfig
    val rate = config.rateLimitConfig
    val origins = config.allowedOriginList.ifEmpty { listOf("same host only") }.joinToString()
    val csp =
        when {
            !headers.enabled -> "off"
            devProxyUrl != null -> "off while proxying to Vite"
            headers.contentSecurityPolicy != null -> "your own policy"
            headers.automaticContentSecurityPolicy -> "automatic, from page hashes"
            else -> "off"
        }
    val rateLimit =
        when {
            !rate.enabled -> "off"
            rate.apiWrites <= 0 -> "named limits only"
            else -> "${rate.apiWrites} writes per ${rate.period} per client, ${rate.algorithm}"
        }
    val named = rate.namedLimits.entries.joinToString { (name, limit) -> "$name ${limit.requests} per ${limit.period}" }
    return listOfNotNull(
        "API prefixes: ${config.apiPrefixList.joinToString()}",
        "Dev proxy: ${devProxyUrl ?: "off"}",
        "Origin check: ${onOff(config.originCheck)}${if (config.originCheck) " ($origins)" else ""}",
        "Body limit: ${config.maxApiBodySize?.let(::bytes) ?: "off"}, JSON depth: ${config.maxJsonDepth ?: "off"}",
        "Rate limit: $rateLimit",
        named.ifEmpty { null }?.let { "Named rate limits: $it" },
        "Content-Security-Policy: $csp",
        "Error details: ${if (config.hideErrorDetails) "hidden in production, shown now" else "always shown"}",
        "API compression: ${onOff(config.apiCompression)}, request IDs: ${onOff(config.requestIds)}",
        "Sitemap and robots.txt: ${if (config.sitemap) config.siteUrl ?: "on, URLs from the request" else "off"}",
    )
}
