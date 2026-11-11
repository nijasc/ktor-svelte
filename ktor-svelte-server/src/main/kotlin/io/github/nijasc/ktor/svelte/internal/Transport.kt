package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.SvelteTransportConfig
import io.ktor.serialization.kotlinx.xml.xml
import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.application.pluginOrNull
import io.ktor.server.plugins.compression.Compression
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import io.ktor.server.plugins.contentnegotiation.ContentNegotiationConfig

internal fun ContentNegotiationConfig.registerXml() {
    try {
        xml()
    } catch (missing: NoClassDefFoundError) {
        throw IllegalStateException(
            "transport { xml() } needs implementation(\"io.ktor:ktor-serialization-kotlinx-xml\") in your build.",
            missing,
        )
    }
}

internal fun installTransport(
    application: Application,
    transport: SvelteTransportConfig,
) {
    if (transport.negotiation.isNotEmpty()) {
        check(application.pluginOrNull(ContentNegotiation) == null) {
            "ContentNegotiation is already installed. Remove it, or remove the formats from install(Svelte) { transport { } }." +
                DocLink.TRANSPORT.see()
        }
        application.install(ContentNegotiation) {
            transport.negotiation.forEach { configure -> configure() }
        }
    }
    transport.compressionConfig?.let { configure ->
        check(application.pluginOrNull(Compression) == null) {
            "Compression is already installed. Remove it, or remove compression() from install(Svelte) { transport { } }." +
                DocLink.TRANSPORT.see()
        }
        application.install(Compression) { configure() }
    }
}
