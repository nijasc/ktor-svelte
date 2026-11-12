package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.ktor.http.ContentType
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationModulesLoaded
import io.ktor.server.application.install
import io.ktor.server.application.log
import io.ktor.server.application.pluginOrNull
import io.ktor.server.plugins.compression.Compression
import io.ktor.server.plugins.compression.CompressionConfig
import io.ktor.server.plugins.compression.condition
import io.ktor.server.plugins.compression.deflate
import io.ktor.server.plugins.compression.excludeContentType
import io.ktor.server.plugins.compression.gzip
import io.ktor.server.plugins.compression.matchContentType
import io.ktor.server.plugins.compression.minimumSize
import io.ktor.server.plugins.compression.zstd.zstd

private const val MINIMUM_COMPRESSED_SIZE = 1024L
private const val ZSTD_MARKER = "io.ktor.server.plugins.compression.zstd.ZstdKt"
private const val ZSTD_NATIVE = "com.github.luben.zstd.Zstd"

internal fun isZstdAvailable(classLoader: ClassLoader): Boolean =
    runCatching {
        Class.forName(ZSTD_MARKER, false, classLoader)
        Class.forName(ZSTD_NATIVE, true, classLoader)
    }.isSuccess

internal fun installApiCompression(
    application: Application,
    resolver: RequestResolver,
) {
    application.onOwn(ApplicationModulesLoaded) {
        if (application.pluginOrNull(Compression) != null) return@onOwn
        val zstd = isZstdAvailable(application.environment.classLoader)
        application.install(Compression) { configureApiCompression(resolver, zstd) }
        application.log.debug("ktor-svelte compresses API responses with ${if (zstd) "zstd, gzip and deflate" else "gzip and deflate"}")
    }
}

internal fun CompressionConfig.configureApiCompression(
    resolver: RequestResolver,
    zstd: Boolean,
) {
    mode = CompressionConfig.Mode.CompressResponse
    if (zstd) addZstd()
    gzip { priority = 1.0 }
    deflate { priority = 0.9 }
    condition { _ -> resolver.isApiPath(decodedPathOrRaw(this)) }
    minimumSize(MINIMUM_COMPRESSED_SIZE)
    matchContentType(ContentType.Application.Json, ContentType.Application.Xml, ContentType.Application.Cbor, ContentType.Text.Any)
    excludeContentType(ContentType.Text.EventStream)
}

private fun CompressionConfig.addZstd() {
    zstd { priority = 1.1 }
}
