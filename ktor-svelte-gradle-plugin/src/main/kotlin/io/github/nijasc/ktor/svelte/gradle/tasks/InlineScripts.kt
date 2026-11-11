package io.github.nijasc.ktor.svelte.gradle.tasks

import java.security.MessageDigest
import java.util.Base64

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
