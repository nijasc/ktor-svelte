package io.github.nijasc.ktor.svelte

import io.ktor.server.application.Application
import io.ktor.util.AttributeKey
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import java.time.Instant
import java.time.OffsetDateTime
import java.util.Properties

private const val BUILD_INFO_RESOURCE = "ktor-svelte/build-info.properties"
private const val SHORT_COMMIT_LENGTH = 7
private val BuildInfoKey = AttributeKey<BuildInfo>("KtorSvelteBuildInfo")

public data class BuildInfo(
    val version: String?,
    val commit: String?,
    val time: Instant?,
) {
    val shortCommit: String? get() = commit?.take(SHORT_COMMIT_LENGTH)
}

public val Application.buildInfo: BuildInfo
    get() = attributes.computeIfAbsent(BuildInfoKey) { readBuildInfo(environment.classLoader) }

internal fun readBuildInfo(classLoader: ClassLoader): BuildInfo {
    val properties = Properties()
    classLoader.getResourceAsStream(BUILD_INFO_RESOURCE)?.use { properties.load(it.reader()) }
    return buildInfoOf(properties.getProperty("version"), properties.getProperty("commit"), properties.getProperty("time"))
}

internal fun buildInfoOf(
    version: String?,
    commit: String?,
    time: String?,
): BuildInfo =
    BuildInfo(
        version?.trim()?.ifEmpty { null },
        commit?.trim()?.ifEmpty { null },
        time?.trim()?.let { text -> runCatching { OffsetDateTime.parse(text).toInstant() }.getOrNull() },
    )

internal fun BuildInfo.toJson(): String =
    buildJsonObject {
        version?.let { put("version", it) }
        commit?.let { put("commit", it) }
        time?.let { put("time", it.toString()) }
    }.toString()
