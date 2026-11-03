package io.github.nijasc.ktor.svelte.internal

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.int
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlinx.serialization.json.long

internal const val MANIFEST_FORMAT_VERSION = 1

internal enum class AssetEncoding(
    val manifestKey: String,
    val fileSuffix: String,
) {
    BROTLI("br", ".br"),
    GZIP("gzip", ".gz"),
}

internal data class ManifestEntry(
    val size: Long,
    val hash: String,
    val encodings: Map<AssetEncoding, Long> = emptyMap(),
)

internal data class Manifest(
    val files: Map<String, ManifestEntry>,
) {
    companion object {
        fun parse(json: String): Manifest {
            val root = Json.parseToJsonElement(json).jsonObject
            val formatVersion = root.getValue("formatVersion").jsonPrimitive.int
            check(formatVersion == MANIFEST_FORMAT_VERSION) {
                "ktor-svelte manifest has format version $formatVersion, but this runtime reads version " +
                    "$MANIFEST_FORMAT_VERSION. Use the same version of the Gradle plugin and ktor-svelte-server."
            }
            val files = root.getValue("files").jsonObject.mapValues { (_, value) -> parseEntry(value.jsonObject) }
            return Manifest(files)
        }

        private fun parseEntry(entry: JsonObject): ManifestEntry {
            val encodings = entry["encodings"]?.jsonObject.orEmpty()
            return ManifestEntry(
                size = entry.getValue("size").jsonPrimitive.long,
                hash = entry.getValue("hash").jsonPrimitive.content,
                encodings =
                    AssetEncoding.entries
                        .mapNotNull { encoding ->
                            encodings[encoding.manifestKey]?.let { value ->
                                encoding to
                                    value.jsonObject
                                        .getValue("size")
                                        .jsonPrimitive.long
                            }
                        }.toMap(),
            )
        }
    }
}
