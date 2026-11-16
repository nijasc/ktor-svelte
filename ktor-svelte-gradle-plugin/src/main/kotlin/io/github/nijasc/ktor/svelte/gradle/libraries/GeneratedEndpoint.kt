package io.github.nijasc.ktor.svelte.gradle.libraries

internal data class GeneratedEndpoint(
    val exportName: String,
    val operation: String,
    val method: String,
    val path: String,
)

private val ENDPOINT =
    Regex(
        """export const (\w+) = [^\n]*?(?:request|stream)<[\s\S]*?>""" +
            """\('([A-Z]+)', ([`'])(.*?)\3, \{[^\n]*?operation: '([\w.]+)'""",
    )
private val PATH_ARGUMENT = Regex("""\$\{encodeURIComponent\((\w+)\)}""")
private val IDENTIFIER = Regex("""[A-Za-z_$][\w$]*""")
private val MEMBER_ACCESS = Regex("""(?=([A-Za-z_$][\w$]*)\s*\.\s*([A-Za-z_$][\w$]*))""")

internal fun generatedEndpoints(services: String): List<GeneratedEndpoint> =
    ENDPOINT
        .findAll(services)
        .map { match ->
            val (exportName, method, _, path, operation) = match.destructured
            GeneratedEndpoint(exportName, operation, method, PATH_ARGUMENT.replace(path) { "{${it.groupValues[1]}}" })
        }.toList()

internal fun unusedEndpoints(
    endpoints: List<GeneratedEndpoint>,
    sources: Iterable<String>,
): List<GeneratedEndpoint> {
    val identifiers = HashSet<String>()
    val memberAccesses = HashSet<String>()
    sources.forEach { source ->
        IDENTIFIER.findAll(source).mapTo(identifiers) { it.value }
        MEMBER_ACCESS.findAll(source).mapTo(memberAccesses) { "${it.groupValues[1]}.${it.groupValues[2]}" }
    }
    return endpoints.filter { endpoint ->
        val call =
            endpoint.operation
                .split('.')
                .takeLast(2)
                .joinToString(".")
        endpoint.exportName !in identifiers && call !in memberAccesses
    }
}
