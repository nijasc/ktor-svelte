package io.github.nijasc.ktor.svelte.gradle.tasks

internal enum class Area(
    val label: String,
) {
    SECURITY("Security"),
    PERFORMANCE("Performance"),
    OPERATIONS("Operations"),
    DEVELOPER_EXPERIENCE("Developer experience"),
}

internal data class Check(
    val area: Area,
    val passed: Boolean,
    val label: String,
    val suggestion: String,
)

private class Settings(
    private val values: Map<String, Any?>,
) {
    fun value(path: String): Any? = path.split('.').fold(values as Any?) { current, key -> (current as? Map<*, *>)?.get(key) }

    fun flag(path: String): Boolean? = value(path) as? Boolean

    fun text(path: String): String? = value(path)?.toString()

    fun isSet(path: String): Boolean = value(path) != null
}

internal fun assess(
    gradle: Map<String, String>,
    ktor: Map<String, Any?>?,
): List<Check> {
    val checks = mutableListOf<Check>()

    fun check(
        area: Area,
        passed: Boolean,
        label: String,
        suggestion: String,
    ) {
        checks += Check(area, passed, label, suggestion)
    }

    check(
        Area.SECURITY,
        gradle["includeSourceMaps"] != "true",
        "Source maps stay out of the JAR",
        "Set svelte { includeSourceMaps = false } unless you need them in production: they publish your frontend source.",
    )
    check(
        Area.PERFORMANCE,
        gradle["precompress"] != "false",
        "Assets are precompressed at build time",
        "Set svelte { precompress = true } so gzip and brotli files are served without compressing on every request.",
    )
    check(
        Area.PERFORMANCE,
        gradle["libraries.images"] == "true",
        "Images are resized and served as AVIF and WebP",
        "Turn on svelte { libraries { images() } } and use enhanced:img for pictures in src/lib/assets.",
    )
    check(
        Area.OPERATIONS,
        gradle["bunVersion"].let { it != null && it != "not pinned" },
        "Every machine builds with the same Bun",
        "Set svelte { bunVersion = \"1.3.14\" } so CI and new laptops download the same Bun instead of needing one installed.",
    )
    check(
        Area.DEVELOPER_EXPERIENCE,
        gradle["libraries.toasts"] == "true",
        "Failed API calls are shown to users",
        "Turn on svelte { libraries { toasts() } } so failed API calls show a message without handling code.",
    )
    check(
        Area.DEVELOPER_EXPERIENCE,
        gradle["verifyTs"] != "false",
        "check verifies the generated TypeScript",
        "Remove svelte.verifyTs=false so check fails when a DTO or route drifts from the frontend.",
    )

    if (ktor == null) return checks
    val app = Settings(ktor)
    check(
        Area.SECURITY,
        app.flag("originCheck") != false,
        "Cross-site writes to the API are refused",
        "Set originCheck = true. Without it, any site can make your users' browsers write to your API.",
    )
    check(
        Area.SECURITY,
        app.flag("securityHeaders.enabled") != false,
        "Security headers are sent",
        "Set securityHeaders { enabled = true } for nosniff, frame and referrer protection.",
    )
    check(
        Area.SECURITY,
        app.flag("securityHeaders.automaticContentSecurityPolicy") == true || app.isSet("securityHeaders.contentSecurityPolicy"),
        "A Content-Security-Policy protects pages",
        "Set securityHeaders { automaticContentSecurityPolicy = true }, or your own contentSecurityPolicy.",
    )
    check(
        Area.SECURITY,
        app.isSet("securityHeaders.frameOptions") || app.isSet("securityHeaders.contentSecurityPolicy"),
        "Pages can't be framed by other sites",
        "Set securityHeaders { frameOptions = \"DENY\" } to prevent clickjacking.",
    )
    check(
        Area.SECURITY,
        app.flag("hideErrorDetails") != false,
        "Exception messages stay hidden in production",
        "Set hideErrorDetails = true so stack details never reach clients.",
    )
    check(
        Area.SECURITY,
        app.isSet("maxApiBodySize"),
        "API request bodies have a size limit",
        "Set maxApiBodySize = 1024L * 1024L, or the size your uploads need.",
    )
    check(
        Area.SECURITY,
        app.isSet("maxJsonDepth"),
        "Deeply nested JSON is refused",
        "Set maxJsonDepth = 64 to stop parser exhaustion attacks.",
    )
    check(
        Area.SECURITY,
        app.isSet("maxJsonStringLength"),
        "Huge JSON strings are refused",
        "Set maxJsonStringLength = 100_000, or the longest text your API accepts.",
    )
    check(
        Area.SECURITY,
        app.flag("rateLimit.enabled") != false,
        "API writes are rate limited per client",
        "Set rateLimit { enabled = true } to slow down brute force and abuse.",
    )
    check(
        Area.SECURITY,
        app.flag("dev.allowRemote") != true,
        "The dev proxy only answers this machine",
        "Remove dev { allowRemote = true } unless other machines really need your dev server.",
    )
    check(
        Area.PERFORMANCE,
        app.flag("apiCompression") != false,
        "API responses are compressed",
        "Set apiCompression = true. JSON shrinks by 70 to 90 percent.",
    )
    check(
        Area.PERFORMANCE,
        app.text("cache.immutable")?.contains("immutable") == true,
        "Hashed assets are cached for a year",
        "Set cache { immutable = \"public, max-age=31536000, immutable\" }. Hashed file names change on every deploy.",
    )
    if (app.flag("publicConfig") == true) {
        check(
            Area.PERFORMANCE,
            app.flag("inlinePublicConfig") != false,
            "Public config is inlined into pages",
            "Set inlinePublicConfig = true to save a request before the first render.",
        )
    }
    check(
        Area.OPERATIONS,
        app.flag("healthEndpoint") == true,
        "A health endpoint for load balancers",
        "Set healthEndpoint = true and point your orchestrator at /_ktor-svelte/health.",
    )
    if (app.flag("sitemap") == true) {
        check(
            Area.OPERATIONS,
            app.isSet("siteUrl"),
            "Sitemap URLs don't depend on the request's Host",
            "Set siteUrl = \"https://example.com\" so sitemap.xml and robots.txt always name your public address.",
        )
    }
    check(
        Area.OPERATIONS,
        app.flag("requestIds") != false,
        "Requests carry an X-Request-Id",
        "Set requestIds = true so errors in logs can be matched to user reports.",
    )
    check(
        Area.OPERATIONS,
        app.flag("buildHeader") != false,
        "The client notices new deploys",
        "Set buildHeader = true and handle apiConfig.onNewBuild to offer a reload.",
    )
    check(
        Area.DEVELOPER_EXPERIENCE,
        app.flag("generateTs") == true,
        "TypeScript is generated from your routes",
        "Set generateTs = true for typed services and validation in the frontend.",
    )
    check(
        Area.DEVELOPER_EXPERIENCE,
        app.flag("apiDocs") == true,
        "Swagger UI in development",
        "Set apiDocs = true to browse and try your API at /api/docs while developing.",
    )
    check(
        Area.DEVELOPER_EXPERIENCE,
        app.isSet("dev.slowApiCall"),
        "Slow API calls are logged in development",
        "Set dev { slowApiCall = 500.milliseconds } to see which handler is slow.",
    )
    return checks
}

internal fun scoreBar(
    passed: Int,
    total: Int,
    width: Int = 10,
): String {
    val filled = if (total == 0) width else (passed * width + total / 2) / total
    return "[" + "#".repeat(filled) + "-".repeat(width - filled) + "]"
}

internal fun flatten(
    values: Map<String, Any?>,
    prefix: String = "",
): List<Pair<String, String>> =
    values.flatMap { (key, value) ->
        val name = if (prefix.isEmpty()) key else "$prefix.$key"
        when (value) {
            is Map<*, *> -> {
                @Suppress("UNCHECKED_CAST")
                val nested = value as Map<String, Any?>
                if (nested.isEmpty()) listOf(name to "{}") else flatten(nested, name)
            }
            is List<*> -> listOf(name to value.joinToString(", ").ifEmpty { "none" })
            null -> listOf(name to "not set")
            else -> listOf(name to value.toString())
        }
    }

internal fun renderReport(
    gradle: Map<String, String>,
    ktor: Map<String, Any?>?,
    ktorNote: String?,
    ktorDefaults: Map<String, Any?>? = null,
): String {
    val checks = assess(gradle, ktor)
    val ktorRows = ktor?.let { flatten(it) }.orEmpty()
    val defaultRows = ktorDefaults?.let { flatten(it).toMap() }.orEmpty()
    val width = (gradle.keys + ktorRows.map { it.first }).maxOfOrNull { it.length } ?: 0
    return buildString {
        appendLine("ktor-svelte configuration")
        appendLine()
        appendLine("Gradle: svelte { } in build.gradle.kts")
        gradle.forEach { (name, value) -> appendLine("  ${name.padEnd(width)}  $value") }
        appendLine()
        appendLine("Ktor: install(Svelte) { }")
        if (ktor == null) {
            appendLine("  ${ktorNote ?: "not available"}")
        } else {
            ktorRows.forEach { (name, value) ->
                val default = defaultRows[name]
                val changed = default != null && default != value
                appendLine("  ${name.padEnd(width)}  $value" + if (changed) "  (default: $default)" else "")
            }
        }
        appendLine()
        appendLine("Scores")
        val areaWidth = Area.entries.maxOf { it.label.length }
        Area.entries.forEach { area ->
            val inArea = checks.filter { it.area == area }
            if (inArea.isEmpty()) return@forEach
            val passed = inArea.count { it.passed }
            val percent = passed * 100 / inArea.size
            appendLine(
                "  ${area.label.padEnd(areaWidth)}  ${scoreBar(passed, inArea.size)} ${"$percent%".padStart(4)}  $passed of ${inArea.size}",
            )
        }
        val failed = checks.filterNot { it.passed }
        appendLine()
        if (failed.isEmpty()) {
            appendLine("Nothing to suggest. Every check passes.")
        } else {
            appendLine("Suggestions")
            failed.sortedBy { it.area }.forEach { appendLine("  - [${it.area.label}] ${it.suggestion}") }
        }
        val passedChecks = checks.filter { it.passed }
        if (passedChecks.isNotEmpty()) {
            appendLine()
            appendLine("Already in place")
            passedChecks.sortedBy { it.area }.forEach { appendLine("  + [${it.area.label}] ${it.label}") }
        }
    }.trimEnd()
}
