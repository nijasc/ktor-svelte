package io.github.nijasc.ktor.svelte.internal.security

import io.github.nijasc.ktor.svelte.internal.assets.AssetStore
import io.github.nijasc.ktor.svelte.internal.assets.ManifestEntry
import java.security.MessageDigest
import java.util.Base64
import java.util.concurrent.ConcurrentHashMap

internal const val CONTENT_SECURITY_POLICY_HEADER = "Content-Security-Policy"
private const val NONE = "'none'"
private const val SELF = "'self'"

private val SCRIPT_ELEMENT =
    Regex("""<script\b((?:[^>"']|"[^"]*"|'[^']*')*)>(.*?)</script\s*>""", setOf(RegexOption.IGNORE_CASE, RegexOption.DOT_MATCHES_ALL))
private val SRC_ATTRIBUTE = Regex("""(?:^|\s)src\s*=""", RegexOption.IGNORE_CASE)

internal fun inlineScriptHashes(html: String): List<String> =
    SCRIPT_ELEMENT
        .findAll(html)
        .filterNot { match -> SRC_ATTRIBUTE.containsMatchIn(match.groupValues[1]) }
        .map { match -> sha256Source(match.groupValues[2]) }
        .distinct()
        .toList()

private fun sha256Source(script: String): String {
    val digest = MessageDigest.getInstance("SHA-256").digest(script.toByteArray(Charsets.UTF_8))
    return "'sha256-${Base64.getEncoder().encodeToString(digest)}'"
}

internal fun frameAncestorsFor(frameOptions: String?): String? =
    when (frameOptions?.trim()?.uppercase()) {
        "DENY" -> NONE
        "SAMEORIGIN" -> SELF
        else -> null
    }

internal class PageContentSecurityPolicy(
    private val store: AssetStore,
    frameOptions: String?,
    extraSources: Map<String, List<String>>,
) {
    private val directives: Map<String, List<String>> = baseDirectives(frameOptions, extraSources)
    private val cache = ConcurrentHashMap<String, CachedPolicy>()

    fun forPage(
        path: String,
        entry: ManifestEntry,
    ): String {
        cache[path]?.takeIf { it.contentHash == entry.hash }?.let { return it.policy }
        val html = store.open(path)?.use { it.readBytes().decodeToString() }.orEmpty()
        val policy = render(inlineScriptHashes(html))
        cache[path] = CachedPolicy(entry.hash, policy)
        return policy
    }

    fun render(scriptHashes: List<String>): String =
        directives.entries.joinToString("; ") { (name, sources) ->
            val all = if (name == "script-src") sources + scriptHashes else sources
            (listOf(name) + all).joinToString(" ")
        }

    private class CachedPolicy(
        val contentHash: String,
        val policy: String,
    )
}

private fun baseDirectives(
    frameOptions: String?,
    extraSources: Map<String, List<String>>,
): Map<String, List<String>> {
    val directives =
        linkedMapOf(
            "default-src" to mutableListOf(SELF),
            "script-src" to mutableListOf(SELF),
            "style-src" to mutableListOf(SELF, "'unsafe-inline'"),
            "img-src" to mutableListOf(SELF, "data:", "blob:"),
            "font-src" to mutableListOf(SELF, "data:"),
            "connect-src" to mutableListOf(SELF),
            "object-src" to mutableListOf(NONE),
            "base-uri" to mutableListOf(SELF),
            "form-action" to mutableListOf(SELF),
        )
    frameAncestorsFor(frameOptions)?.let { directives["frame-ancestors"] = mutableListOf(it) }
    extraSources.forEach { (name, sources) ->
        val existing = directives.getOrPut(name) { mutableListOf() }
        if (sources.isNotEmpty()) existing.remove(NONE)
        sources.filterNot { it in existing }.forEach(existing::add)
    }
    return directives
}
