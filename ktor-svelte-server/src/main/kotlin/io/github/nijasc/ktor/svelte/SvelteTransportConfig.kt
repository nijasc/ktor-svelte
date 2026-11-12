package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.registerXml
import io.ktor.serialization.kotlinx.json.DefaultJson
import io.ktor.serialization.kotlinx.json.json
import io.ktor.server.plugins.compression.CompressionConfig
import io.ktor.server.plugins.contentnegotiation.ContentNegotiationConfig
import io.ktor.utils.io.KtorDsl
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonBuilder

@KtorDsl
public class SvelteTransportConfig {
    internal val negotiation: MutableList<ContentNegotiationConfig.() -> Unit> = mutableListOf()
    internal var compressionConfig: (CompressionConfig.() -> Unit)? = null
        private set
    internal val formatNames: MutableList<String> = mutableListOf()

    public fun json(configure: JsonBuilder.() -> Unit = {}) {
        formatNames += "json"
        negotiation += { json(Json(DefaultJson, configure)) }
    }

    public fun xml() {
        formatNames += "xml"
        negotiation += { registerXml() }
    }

    public fun negotiation(configure: ContentNegotiationConfig.() -> Unit) {
        formatNames += "custom"
        negotiation += configure
    }

    public fun compression(configure: CompressionConfig.() -> Unit = {}) {
        compressionConfig = configure
    }
}
