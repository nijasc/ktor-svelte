package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.SetProperty
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import java.io.File

internal const val SHORTEST_SECRET = 8
internal const val ENV_EXAMPLE_FILE = ".env.example"
private const val LARGEST_SCANNED_FILE = 32L * 1024 * 1024
private val ENV_FILES = listOf(".env", ".env.local", ".env.production", ".env.production.local")
private val PUBLIC_PREFIXES = listOf("PUBLIC_", "VITE_")
private val ASSIGNMENT = Regex("""^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$""")
private val EXAMPLE_ASSIGNMENT = Regex("""^(?:# )?([A-Z][A-Z0-9_]*)=""")

internal class SecretValue(
    val name: String,
    val value: String,
    val origin: String,
)

internal class SecretLeak(
    val name: String,
    val origin: String,
    val file: String,
)

internal fun declaredSecretNames(example: String): Set<String> {
    val names = linkedSetOf<String>()
    var secret = false
    example.lineSequence().forEach { line ->
        val assigned = EXAMPLE_ASSIGNMENT.find(line)?.groupValues?.get(1)
        when {
            assigned != null -> {
                if (secret) names += assigned
                secret = false
            }
            line.startsWith("#") -> secret = line.trimEnd().endsWith(" Secret.")
            else -> secret = false
        }
    }
    return names
}

internal fun envFileValues(text: String): Map<String, String> =
    text
        .lineSequence()
        .filterNot { it.trimStart().startsWith("#") }
        .mapNotNull { ASSIGNMENT.find(it) }
        .associate { match ->
            val raw = match.groupValues[2].trim()
            val quoted = raw.length >= 2 && raw.first() == raw.last() && raw.first() in "\"'"
            match.groupValues[1] to if (quoted) raw.substring(1, raw.length - 1) else raw.substringBefore(" #").trim()
        }

internal fun isPublicName(
    name: String,
    declaredPublic: Set<String>,
): Boolean = name in declaredPublic || PUBLIC_PREFIXES.any { name.startsWith(it) }

internal fun secretValues(
    projectDirectory: File,
    frontendDirectory: File,
    declaredPublic: Set<String>,
    environment: (String) -> String?,
): List<SecretValue> {
    val found = linkedMapOf<String, SecretValue>()
    val fromFiles = linkedMapOf<String, SecretValue>()
    listOf(projectDirectory, frontendDirectory).distinct().forEach { directory ->
        ENV_FILES.map(directory::resolve).filter { it.isFile }.forEach { file ->
            val shown = file.relativeToOrSelf(projectDirectory).invariantSeparatorsPath
            envFileValues(file.readText()).forEach { (name, value) -> fromFiles.putIfAbsent(name, SecretValue(name, value, shown)) }
        }
    }
    val example = projectDirectory.resolve(ENV_EXAMPLE_FILE)
    if (example.isFile) {
        declaredSecretNames(example.readText()).forEach { name ->
            val value = environment(name) ?: fromFiles[name]?.value
            if (value != null) found[name] = SecretValue(name, value, "declared as a secret")
        }
    }
    fromFiles.values
        .filterNot { isPublicName(it.name, declaredPublic) || it.value.all(Char::isLetter) }
        .forEach { found.putIfAbsent(it.name, it) }
    return found.values.filter { it.value.length >= SHORTEST_SECRET }
}

internal fun findLeaks(
    buildOutput: File,
    secrets: List<SecretValue>,
): List<SecretLeak> {
    if (secrets.isEmpty() || !buildOutput.isDirectory) return emptyList()
    val needles = secrets.map { it to String(it.value.toByteArray(), Charsets.ISO_8859_1) }
    return buildOutput
        .walkTopDown()
        .filter { it.isFile && it.length() <= LARGEST_SCANNED_FILE }
        .sortedBy { it.path }
        .flatMap { file ->
            val content = String(file.readBytes(), Charsets.ISO_8859_1)
            needles.asSequence().filter { (_, needle) -> needle in content }.map { (secret, _) ->
                SecretLeak(secret.name, secret.origin, file.relativeTo(buildOutput).invariantSeparatorsPath)
            }
        }.toList()
}

internal fun leakReport(leaks: List<SecretLeak>): String {
    val labels = leaks.map { "${it.name} (${it.origin})" }
    val width = labels.maxOf { it.length }
    return "ktor-svelte found secret values in the frontend build. Everything in that folder is sent to browsers.\n\n" +
        leaks.indices.joinToString("\n") { "  ${labels[it].padEnd(width)}  ${leaks[it].file}" } +
        "\n\nRead such values on the server only. A value that is meant to be public belongs in svelte { buildEnv }, " +
        "or gets a name that starts with PUBLIC_."
}

@UntrackedTask(because = "Compares the frontend build with secret values from the environment and from .env files")
public abstract class SvelteVerifyLeaksTask : DefaultTask() {
    @get:Internal
    public abstract val buildOutput: DirectoryProperty

    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Internal
    public abstract val publicNames: SetProperty<String>

    @TaskAction
    public fun verify() {
        val secrets = secretValues(projectDirectory.get().asFile, frontendDir.get().asFile, publicNames.get(), System::getenv)
        val leaks = findLeaks(buildOutput.get().asFile, secrets)
        if (leaks.isNotEmpty()) throw GradleException(leakReport(leaks) + DocLink.SECRETS_IN_THE_BUILD.see())
        logger.info("ktor-svelte: none of ${secrets.size} secret value(s) is in the frontend build.")
    }
}
