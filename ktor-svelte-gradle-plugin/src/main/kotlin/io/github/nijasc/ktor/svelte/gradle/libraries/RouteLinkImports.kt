package io.github.nijasc.ktor.svelte.gradle.libraries

private const val DEFAULT_INDENT = "    "
private val ROUTES_IMPORT = Regex("""import\s*\{([^}]*)}\s*from\s*(['"])#routes\2""")
private val OWN_ROUTES =
    Regex("""\b(?:const|let|var|function|class)\s+routes\b|import\s[^;\n]*\broutes\b[^;\n]*from\s*['"](?!#routes['"])""")
private val INSTANCE_SCRIPT = Regex("""<script(?![^>]*\bmodule\b)[^>]*>""")
private val IMPORT_LINE = Regex("""^[ \t]*import\s""", RegexOption.MULTILINE)
private val DOUBLE_QUOTED_IMPORT = Regex("""\bfrom\s+"""")
private val INDENTED_LINE = Regex("""\n([ \t]+)\S""")
private val KOTLIN_PACKAGE = Regex("""^package\s+([\w.`]+)[ \t\r]*$""", RegexOption.MULTILINE)
private val KOTLIN_IMPORT = Regex("""^import\s+(\S+)[ \t\r]*$""", RegexOption.MULTILINE)

internal fun definesOwnRoutes(source: String): Boolean = OWN_ROUTES.containsMatchIn(source)

internal fun withRoutesImport(
    source: String,
    svelte: Boolean,
): String {
    val existing = ROUTES_IMPORT.find(source)
    if (existing != null) {
        val names =
            existing.groupValues[1]
                .split(',')
                .map { it.trim() }
                .filter { it.isNotEmpty() }
        if ("routes" in names) return source
        val quote = existing.groupValues[2]
        return source.replaceRange(existing.range, "import { ${(names + "routes").joinToString(", ")} } from $quote#routes$quote")
    }
    val quote = if (DOUBLE_QUOTED_IMPORT.containsMatchIn(source)) "\"" else "'"
    val statement = "import { routes } from $quote#routes$quote;"
    if (!svelte) {
        val first = IMPORT_LINE.find(source) ?: return "$statement\n\n$source"
        return source.replaceRange(first.range.first, first.range.first, "$statement\n")
    }
    val script = INSTANCE_SCRIPT.find(source) ?: return "<script lang=\"ts\">\n$DEFAULT_INDENT$statement\n</script>\n\n$source"
    val bodyStart = script.range.last + 1
    val body = source.substring(bodyStart).substringBefore("</script>")
    val indent = INDENTED_LINE.find(body)?.groupValues?.get(1) ?: DEFAULT_INDENT
    return source.replaceRange(bodyStart, bodyStart, "\n$indent$statement")
}

internal fun withKotlinImport(
    source: String,
    qualifiedName: String,
): String {
    val targetPackage = qualifiedName.substringBeforeLast('.')
    val declared = KOTLIN_PACKAGE.find(source)
    if (declared?.groupValues?.get(1) == targetPackage) return source
    val imports = KOTLIN_IMPORT.findAll(source).toList()
    if (imports.any { it.groupValues[1] == qualifiedName || it.groupValues[1] == "$targetPackage.*" }) return source
    val line = "import $qualifiedName"
    val next = imports.firstOrNull { it.groupValues[1] > qualifiedName }
    return when {
        next != null -> source.replaceRange(next.range.first, next.range.first, "$line\n")
        imports.isNotEmpty() -> source.replaceRange(imports.last().range.last + 1, imports.last().range.last + 1, "\n$line")
        declared != null -> source.replaceRange(declared.range.last + 1, declared.range.last + 1, "\n\n$line")
        else -> "$line\n\n$source"
    }
}
