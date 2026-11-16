package io.github.nijasc.ktor.svelte

import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.PartData
import io.ktor.http.content.forEachPart
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.receiveMultipart
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingCall
import io.ktor.server.routing.RoutingNode
import io.ktor.server.routing.openapi.describe
import io.ktor.util.AttributeKey
import io.ktor.utils.io.readRemaining
import kotlinx.io.readByteArray
import kotlinx.serialization.Serializable
import java.util.Locale

internal const val UPLOAD_EXTENSION = "x-ktor-svelte-upload"
private const val KIBIBYTE = 1024.0
private val UploadRulesKey = AttributeKey<UploadRules>("KtorSvelteUploadRules")

@Serializable
internal data class UploadRules(
    val maxBytes: Long? = null,
    val types: List<String> = emptyList(),
    val maxFiles: Int? = null,
)

public class UploadedFile(
    public val field: String,
    public val fileName: String?,
    public val contentType: String,
    public val bytes: ByteArray,
) {
    public val size: Int get() = bytes.size
}

public class UploadRuleException(
    public val code: String,
    message: String,
    public val status: HttpStatusCode,
    public val file: String?,
) : RuntimeException(message)

internal fun readableSize(bytes: Long): String {
    val (value, unit) =
        when {
            bytes >= KIBIBYTE * KIBIBYTE -> bytes / (KIBIBYTE * KIBIBYTE) to "MiB"
            bytes >= KIBIBYTE -> bytes / KIBIBYTE to "KiB"
            else -> return "$bytes bytes"
        }
    return String.format(Locale.ROOT, "%.1f", value).removeSuffix(".0") + " " + unit
}

internal fun acceptsFile(
    types: List<String>,
    contentType: String,
    fileName: String?,
): Boolean {
    if (types.isEmpty()) return true
    val type = contentType.lowercase()
    val name = fileName.orEmpty().lowercase()
    return types.any { accepted ->
        val wanted = accepted.trim().lowercase()
        when {
            wanted.startsWith(".") -> name.endsWith(wanted)
            wanted.endsWith("/*") -> type.startsWith(wanted.removeSuffix("*"))
            else -> type == wanted
        }
    }
}

internal fun tooLarge(
    file: String,
    limit: Long,
) = UploadRuleException("upload.tooLarge", "$file is larger than ${readableSize(limit)}.", HttpStatusCode.PayloadTooLarge, file)

internal fun wrongType(file: String) =
    UploadRuleException("upload.type", "$file is not an accepted file type.", HttpStatusCode.UnsupportedMediaType, file)

internal fun tooMany(limit: Int) =
    UploadRuleException(
        "upload.tooMany",
        if (limit == 1) "Only one file can be sent at once." else "At most $limit files can be sent at once.",
        HttpStatusCode.BadRequest,
        null,
    )

public fun Route.uploadRules(
    maxSize: Long? = null,
    types: List<String> = emptyList(),
    maxFiles: Int? = null,
): Route {
    require(maxSize == null || maxSize > 0) { "uploadRules: maxSize must be positive, but is $maxSize." }
    require(maxFiles == null || maxFiles > 0) { "uploadRules: maxFiles must be positive, but is $maxFiles." }
    require(types.all { it.startsWith(".") || it.count { character -> character == '/' } == 1 }) {
        "uploadRules: types are media types such as \"image/*\" or \"application/pdf\", or file endings such as \".csv\", but got $types."
    }
    val rules = UploadRules(maxSize, types, maxFiles)
    (this as? RoutingNode)?.attributes?.put(UploadRulesKey, rules)
    return describe {
        requestBody { ContentType.MultiPart.FormData() }
        extension(UPLOAD_EXTENSION, rules)
    }
}

private fun rulesOf(call: ApplicationCall): UploadRules? =
    generateSequence((call as? RoutingCall)?.route) { it.parent }.firstNotNullOfOrNull { it.attributes.getOrNull(UploadRulesKey) }

public suspend fun ApplicationCall.receiveUploads(): List<UploadedFile> {
    val rules = rulesOf(this) ?: UploadRules()
    val files = mutableListOf<UploadedFile>()
    receiveMultipart().forEachPart { part ->
        try {
            if (part is PartData.FileItem) {
                val name = part.originalFileName
                val shown = name ?: "The file"
                val type =
                    part.contentType
                        ?.withoutParameters()
                        ?.toString()
                        .orEmpty()
                if (rules.maxFiles != null && files.size >= rules.maxFiles) throw tooMany(rules.maxFiles)
                if (!acceptsFile(rules.types, type, name)) throw wrongType(shown)
                val limit = rules.maxBytes
                val bytes =
                    (
                        if (limit ==
                            null
                        ) {
                            part.provider().readRemaining()
                        } else {
                            part.provider().readRemaining(limit + 1)
                        }
                    ).readByteArray()
                if (limit != null && bytes.size > limit) throw tooLarge(shown, limit)
                files += UploadedFile(part.name.orEmpty(), name, type, bytes)
            }
        } finally {
            part.dispose()
        }
    }
    return files
}
