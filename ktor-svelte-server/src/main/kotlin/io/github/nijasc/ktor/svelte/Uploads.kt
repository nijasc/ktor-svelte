package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.UPLOAD_EXTENSION
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.PartData
import io.ktor.http.content.forEachPart
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.JsonType
import io.ktor.openapi.ReferenceOr
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.receiveMultipart
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingCall
import io.ktor.server.routing.RoutingNode
import io.ktor.server.routing.openapi.describe
import io.ktor.util.AttributeKey
import io.ktor.utils.io.ExperimentalKtorApi
import io.ktor.utils.io.KtorDsl
import io.ktor.utils.io.readRemaining
import kotlinx.io.readByteArray
import kotlinx.serialization.Serializable
import java.util.Locale

private const val KIBIBYTE = 1024.0
private val UploadRulesKey = AttributeKey<UploadRules>("KtorSvelteUploadRules")
private val UploadFormKey = AttributeKey<Map<String, UploadField>>("KtorSvelteUploadForm")
private val FIELD_NAME = Regex("[A-Za-z0-9_-]+")

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

private fun checkedRules(
    caller: String,
    maxSize: Long?,
    types: List<String>,
    maxFiles: Int?,
): UploadRules {
    require(maxSize == null || maxSize > 0) { "$caller: maxSize must be positive, but is $maxSize." }
    require(maxFiles == null || maxFiles > 0) { "$caller: maxFiles must be positive, but is $maxFiles." }
    require(types.all { it.startsWith(".") || it.count { character -> character == '/' } == 1 }) {
        "$caller: types are media types such as \"image/*\" or \"application/pdf\", or file endings such as \".csv\", but got $types."
    }
    return UploadRules(maxSize, types, maxFiles)
}

public fun Route.uploadRules(
    maxSize: Long? = null,
    types: List<String> = emptyList(),
    maxFiles: Int? = null,
): Route {
    val rules = checkedRules("uploadRules", maxSize, types, maxFiles)
    (this as? RoutingNode)?.attributes?.put(UploadRulesKey, rules)
    return describe {
        requestBody { ContentType.MultiPart.FormData() }
        extension(UPLOAD_EXTENSION, rules)
    }
}

internal enum class UploadFieldKind { File, Files, Text }

internal class UploadField(
    val name: String,
    val kind: UploadFieldKind,
    val required: Boolean,
)

@KtorDsl
public class UploadFormBuilder internal constructor() {
    internal val fields = linkedMapOf<String, UploadField>()

    private fun add(
        name: String,
        kind: UploadFieldKind,
        required: Boolean,
    ) {
        require(FIELD_NAME.matches(name)) { "uploadForm: '$name' is not a field name. Use letters, digits, '_' and '-'." }
        require(name !in fields) { "uploadForm: the field '$name' is declared twice." }
        fields[name] = UploadField(name, kind, required)
    }

    public fun file(
        name: String,
        required: Boolean = true,
    ) {
        add(name, UploadFieldKind.File, required)
    }

    public fun files(
        name: String,
        required: Boolean = false,
    ) {
        add(name, UploadFieldKind.Files, required)
    }

    public fun text(
        name: String,
        required: Boolean = true,
    ) {
        add(name, UploadFieldKind.Text, required)
    }
}

public class UploadForm internal constructor(
    private val filesByField: Map<String, List<UploadedFile>>,
    private val texts: Map<String, String>,
) {
    public val allFiles: List<UploadedFile> get() = filesByField.values.flatten()

    public fun files(name: String): List<UploadedFile> = filesByField[name].orEmpty()

    public fun fileOrNull(name: String): UploadedFile? = filesByField[name]?.firstOrNull()

    public fun file(name: String): UploadedFile = fileOrNull(name) ?: throw missingField(name)

    public fun textOrNull(name: String): String? = texts[name]

    public fun text(name: String): String = textOrNull(name) ?: throw missingField(name)
}

internal fun missingField(name: String) = UploadRuleException("upload.missing", "'$name' is required.", HttpStatusCode.BadRequest, null)

internal fun unknownField(name: String) =
    UploadRuleException("upload.field", "'$name' is not a field of this form.", HttpStatusCode.BadRequest, null)

internal fun wrongKind(
    name: String,
    wanted: String,
) = UploadRuleException("upload.field", "'$name' takes $wanted.", HttpStatusCode.BadRequest, null)

private fun binary(): ReferenceOr<JsonSchema> = ReferenceOr.Value(JsonSchema(type = JsonType.STRING, format = "binary"))

private fun formSchema(fields: Collection<UploadField>): JsonSchema =
    JsonSchema(
        type = JsonType.OBJECT,
        properties =
            fields.associate { field ->
                field.name to
                    when (field.kind) {
                        UploadFieldKind.File -> binary()
                        UploadFieldKind.Files -> ReferenceOr.Value(JsonSchema(type = JsonType.ARRAY, items = binary()))
                        UploadFieldKind.Text -> ReferenceOr.Value(JsonSchema(type = JsonType.STRING))
                    }
            },
        required = fields.filter { it.required }.map { it.name }.takeIf { it.isNotEmpty() },
    )

@OptIn(ExperimentalKtorApi::class)
public fun Route.uploadForm(
    maxSize: Long? = null,
    types: List<String> = emptyList(),
    maxFiles: Int? = null,
    fields: UploadFormBuilder.() -> Unit,
): Route {
    val declared = UploadFormBuilder().apply(fields).fields
    require(declared.isNotEmpty()) { "uploadForm needs at least one field, such as file(\"file\")." }
    val rules = checkedRules("uploadForm", maxSize, types, maxFiles)
    (this as? RoutingNode)?.attributes?.put(UploadRulesKey, rules)
    (this as? RoutingNode)?.attributes?.put(UploadFormKey, declared)
    val schema = formSchema(declared.values)
    return describe {
        requestBody { ContentType.MultiPart.FormData { this.schema = schema } }
        if (rules != UploadRules()) extension(UPLOAD_EXTENSION, rules)
    }
}

private fun <T : Any> attributeOf(
    call: ApplicationCall,
    key: AttributeKey<T>,
): T? = generateSequence((call as? RoutingCall)?.route) { it.parent }.firstNotNullOfOrNull { it.attributes.getOrNull(key) }

private suspend fun ApplicationCall.readParts(): UploadForm {
    val rules = attributeOf(this, UploadRulesKey) ?: UploadRules()
    val declared = attributeOf(this, UploadFormKey)
    val files = linkedMapOf<String, MutableList<UploadedFile>>()
    val texts = linkedMapOf<String, String>()
    var count = 0
    receiveMultipart().forEachPart { part ->
        try {
            val field = part.name.orEmpty()
            val kind = declared?.let { (it[field] ?: throw unknownField(field)).kind }
            if (part is PartData.FormItem) {
                if (kind != null && kind != UploadFieldKind.Text) throw wrongKind(field, "a file")
                texts[field] = part.value
            }
            if (part is PartData.FileItem) {
                if (kind == UploadFieldKind.Text) throw wrongKind(field, "text")
                if (kind == UploadFieldKind.File && field in files) throw wrongKind(field, "one file")
                val name = part.originalFileName
                val shown = name ?: "The file"
                val type =
                    part.contentType
                        ?.withoutParameters()
                        ?.toString()
                        .orEmpty()
                if (rules.maxFiles != null && count >= rules.maxFiles) throw tooMany(rules.maxFiles)
                if (!acceptsFile(rules.types, type, name)) throw wrongType(shown)
                val limit = rules.maxBytes
                val source = part.provider()
                val bytes = (if (limit == null) source.readRemaining() else source.readRemaining(limit + 1)).readByteArray()
                if (limit != null && bytes.size > limit) throw tooLarge(shown, limit)
                files.getOrPut(field) { mutableListOf() } += UploadedFile(field, name, type, bytes)
                count++
            }
        } finally {
            part.dispose()
        }
    }
    declared?.values?.firstOrNull { it.required && it.name !in files && it.name !in texts }?.let { throw missingField(it.name) }
    return UploadForm(files, texts)
}

public suspend fun ApplicationCall.receiveUploads(): List<UploadedFile> = readParts().allFiles

public suspend fun ApplicationCall.receiveForm(): UploadForm = readParts()
