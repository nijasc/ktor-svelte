package io.github.nijasc.ktor.svelte

import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.header
import io.ktor.util.AttributeKey
import java.time.ZoneId

internal const val TIME_ZONE_HEADER = "X-Time-Zone"
private const val LONGEST_ZONE_NAME = 64
private val ZONE_NAME = Regex("[A-Za-z0-9_+/-]+")
internal val DefaultTimeZoneKey = AttributeKey<ZoneId>("KtorSvelteDefaultTimeZone")

internal fun zoneOrNull(name: String?): ZoneId? {
    if (name == null || name.length > LONGEST_ZONE_NAME || !ZONE_NAME.matches(name)) return null
    return runCatching { ZoneId.of(name) }.getOrNull()
}

public val ApplicationCall.timeZone: ZoneId
    get() =
        zoneOrNull(request.header(TIME_ZONE_HEADER))
            ?: application.attributes.getOrNull(DefaultTimeZoneKey)
            ?: ZoneId.of("UTC")
