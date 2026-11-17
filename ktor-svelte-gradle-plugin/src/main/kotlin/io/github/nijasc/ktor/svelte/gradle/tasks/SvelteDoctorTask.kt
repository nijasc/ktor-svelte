package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonOutput
import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.LOCKFILES
import io.github.nijasc.ktor.svelte.gradle.PackageManager
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
import io.github.nijasc.ktor.svelte.gradle.resolveFrontendTool
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.File
import java.io.IOException
import java.net.BindException
import java.net.InetAddress
import java.net.ServerSocket
import java.util.concurrent.TimeUnit

internal enum class Severity { OK, WARN, ERROR }

internal data class Finding(
    val severity: Severity,
    val message: String,
    val fix: (() -> String)? = null,
)

private const val API_IMPORT = "#api"
private const val API_TARGET = "./src/lib/api/index.ts"
private const val LIB_IMPORT = "#lib/*"
private const val LIB_TARGET = "./src/lib/*"
private const val APP_TSCONFIG = "\$app/tsconfig"
private val LEGACY_LIB_IMPORT = Regex("""(\bfrom\s*|\bimport\s*\(\s*|\bimport\s+)(['"])\${'$'}lib(?=[/'"])""")
private val SOURCE_EXTENSIONS = setOf("ts", "js", "svelte")

private fun parsedObject(file: File): MutableMap<String, Any?>? =
    runCatching {
        @Suppress("UNCHECKED_CAST")
        LinkedHashMap(JsonSlurper().parse(file) as Map<String, Any?>)
    }.getOrNull()

private fun writeObject(
    file: File,
    content: Map<String, Any?>,
) {
    file.writeText(JsonOutput.prettyPrint(JsonOutput.toJson(content)) + "\n")
}

private fun addSubpathImport(
    packageJson: File,
    name: String,
    target: String,
): Boolean {
    val manifest = parsedObject(packageJson) ?: return false

    @Suppress("UNCHECKED_CAST")
    val imports = LinkedHashMap((manifest["imports"] as? Map<String, Any?>).orEmpty())
    if (name in imports) return false
    imports[name] = target
    manifest["imports"] = imports
    writeObject(packageJson, manifest)
    return true
}

internal class SetupDoctor(
    private val frontend: File,
    private val packageManager: PackageManager,
    private val devPort: Int,
    private val outputDir: String = "build",
    private val bundleDirectory: File? = null,
    private val findExecutable: (String) -> File? = { locateExecutable(it) },
    private val isPortFree: (Int) -> Boolean = ::portIsFree,
    private val nodeVersion: () -> String? = ::installedNodeVersion,
    private val bunVersion: String? = null,
    private val environment: (String) -> String? = System::getenv,
    private val userHome: File? = System.getProperty("user.home")?.let(::File),
    private val registryProbe: ((NetworkSettings) -> RegistryAnswer)? = ::probeRegistry,
) {
    private val pinnedBun = bunVersion != null && (packageManager == PackageManager.Auto || packageManager == PackageManager.Bun)

    fun examine(): List<Finding> {
        if (!frontend.isDirectory) return listOf(Finding(Severity.ERROR, "No frontend at $frontend. Run svelteInit to create one."))
        val packageJson = frontend.resolve("package.json")
        if (!packageJson.isFile) return listOf(Finding(Severity.ERROR, "No package.json in $frontend. Run svelteInit in an empty folder."))
        val manifest = packageJson.readText()
        return listOfNotNull(
            tool(),
            node(),
            kitVersion(manifest),
            adapter(manifest),
            buildOutput(),
            bundledManifest(),
            legacyConfig(),
            subpathImports(manifest),
            tsconfig(),
            legacyLibImports(),
            dependenciesInstalled(manifest),
            extraCertificates(),
            port(),
        ) + networkFindings(networkSettings(frontend, environment, userHome), registryProbe)
    }

    fun fix(): List<String> = examine().mapNotNull { it.fix?.invoke() }

    private fun tool(): Finding {
        if (pinnedBun) return Finding(Severity.OK, "Bun $bunVersion is pinned, and ktor-svelte downloads it when a task needs it")
        if (packageManager == PackageManager.Auto && LOCKFILES.none { (name, _) -> frontend.resolve(name).isFile }) {
            return Finding(Severity.ERROR, "No lockfile found. Install dependencies once, or set svelte.packageManager.")
        }
        val name = resolveFrontendTool(frontend, packageManager).executableName
        return if (findExecutable(name) != null) {
            Finding(Severity.OK, "Package manager $name is on PATH")
        } else {
            Finding(Severity.ERROR, "$name is not on PATH. Install it, or set svelte.packageManager.")
        }
    }

    private fun node(): Finding {
        val version =
            nodeVersion() ?: run {
                val usesBun = pinnedBun || runCatching { resolveFrontendTool(frontend, packageManager).executableName }.getOrNull() == "bun"
                return if (usesBun) {
                    Finding(Severity.OK, "Node is not installed, and bun runs Vite itself")
                } else {
                    Finding(Severity.WARN, "Node is not on PATH. Vite needs Node 20.19 or newer.")
                }
            }
        val parts = version.removePrefix("v").split('.').map { it.toIntOrNull() ?: 0 }
        val major = parts.getOrElse(0) { 0 }
        val minor = parts.getOrElse(1) { 0 }
        val supported = (major == 20 && minor >= 19) || (major == 22 && minor >= 12) || major > 22
        return if (supported) {
            Finding(Severity.OK, "Node ${version.removePrefix("v")}")
        } else {
            Finding(Severity.WARN, "Node ${version.removePrefix("v")} is too old for Vite. Use Node 20.19, 22.12 or newer.")
        }
    }

    private fun buildOutput(): Finding {
        val config =
            listOf("vite.config.ts", "vite.config.js", "vite.config.mts", "vite.config.mjs")
                .map { frontend.resolve(it) }
                .firstOrNull { it.isFile }
                ?: return Finding(Severity.WARN, "No vite.config file in $frontend. SvelteKit needs one.")
        val text = config.readText()
        val declared = Regex("pages\\s*:\\s*([\"'`])([^\"'`]+)\\1").find(text)?.groupValues?.get(2)
        val hasPagesOption = Regex("pages\\s*:").containsMatchIn(text)
        val written = declared?.normalizedOutputPath() ?: if (hasPagesOption) null else "build"
        val expected = outputDir.normalizedOutputPath()
        return when {
            written == null -> Finding(Severity.OK, "adapter-static pages option is computed, so it was not compared with svelte.outputDir")
            written == expected -> Finding(Severity.OK, "adapter-static writes to $expected, matching svelte.outputDir")
            else ->
                Finding(
                    Severity.ERROR,
                    "adapter-static writes to '$written' but svelte.outputDir is '$expected'. " +
                        "Set pages: '$expected' in the adapter options, or svelte { outputDir = \"$written\" }.",
                )
        }
    }

    private fun bundledManifest(): Finding {
        val root = bundleDirectory?.resolve("ktor-svelte") ?: return Finding(Severity.OK, "Bundled frontend was not checked")
        val manifest = root.resolve("manifest.json")
        if (!manifest.isFile) return Finding(Severity.OK, "Frontend is not bundled yet. svelteBundle runs as part of the build.")
        val files =
            try {
                ((JsonSlurper().parse(manifest) as Map<*, *>)["files"] as Map<*, *>)
                    .entries
                    .associate { (path, entry) -> path.toString() to ((entry as Map<*, *>)["size"] as Number).toLong() }
            } catch (_: Exception) {
                return Finding(Severity.ERROR, "$manifest is not a valid ktor-svelte manifest. Run svelteBundle to write it again.")
            }
        val public = root.resolve("public")
        val problems =
            files.mapNotNull { (path, size) ->
                val file = public.resolve(path)
                when {
                    !file.isFile -> "$path is listed but missing"
                    file.length() != size -> "$path does not match its listed size"
                    else -> null
                }
            }
        val more = if (problems.size > 1) ", and ${problems.size - 1} more" else ""
        return when {
            problems.isNotEmpty() ->
                Finding(Severity.ERROR, "The bundled manifest is out of date (${problems.first()}$more). Run svelteBundle again.")
            files.keys.none { it.endsWith(".html") } ->
                Finding(Severity.ERROR, "The bundled manifest lists no HTML files. Check adapter-static.")
            else -> Finding(Severity.OK, "Bundled manifest lists ${files.size} files")
        }
    }

    private fun kitVersion(manifest: String): Finding {
        val major = Regex("\"@sveltejs/kit\"\\s*:\\s*\"[^0-9\"]*(\\d+)").find(manifest)?.groupValues?.get(1)
        return when {
            major == null -> Finding(Severity.ERROR, "@sveltejs/kit is not a dependency.")
            major == "3" -> Finding(Severity.OK, "SvelteKit 3")
            else -> Finding(Severity.WARN, "SvelteKit $major is not tested. ktor-svelte supports SvelteKit 3.")
        }
    }

    private fun adapter(manifest: String): Finding =
        if ("@sveltejs/adapter-static" in manifest) {
            Finding(Severity.OK, "Uses adapter-static")
        } else {
            Finding(Severity.ERROR, "@sveltejs/adapter-static is not a dependency. ktor-svelte serves static builds only.")
        }

    private fun legacyConfig(): Finding {
        val legacy = listOf("svelte.config.js", "svelte.config.ts").firstOrNull { frontend.resolve(it).isFile }
        return if (legacy == null) {
            Finding(Severity.OK, "No svelte.config file")
        } else {
            Finding(Severity.ERROR, "$legacy is not used by SvelteKit 3. Move its options to sveltekit() in the Vite config.")
        }
    }

    private fun subpathImports(manifest: String): Finding =
        if ("\"#api\"" in manifest) {
            Finding(Severity.OK, "#api import is configured")
        } else {
            Finding(
                Severity.WARN,
                "package.json has no \"#api\" import. Add \"#api\": \"./src/lib/api/index.ts\" to import the generated client.",
            ) {
                addSubpathImport(frontend.resolve("package.json"), API_IMPORT, API_TARGET)
                "Added the #api import to package.json"
            }
        }

    private fun tsconfig(): Finding {
        val file = frontend.resolve("tsconfig.json")
        return when {
            !file.isFile -> Finding(Severity.OK, "No tsconfig.json, so type checking is off")
            "\$app/tsconfig" in file.readText() -> Finding(Severity.OK, "tsconfig.json extends \$app/tsconfig")
            else ->
                Finding(
                    Severity.WARN,
                    "tsconfig.json should extend \$app/tsconfig on SvelteKit 3.",
                    parsedObject(file)?.let { config ->
                        {
                            writeObject(file, mapOf("extends" to APP_TSCONFIG) + (config - "extends"))
                            "Made tsconfig.json extend \$app/tsconfig"
                        }
                    },
                )
        }
    }

    private fun legacyLibImports(): Finding {
        val offenders =
            frontend
                .resolve("src")
                .walkTopDown()
                .filter { it.isFile && it.extension in SOURCE_EXTENSIONS && LEGACY_LIB_IMPORT.containsMatchIn(it.readText()) }
                .sortedBy { it.invariantSeparatorsPath }
                .toList()
        val offender = offenders.firstOrNull() ?: return Finding(Severity.OK, "No \$lib imports")
        return Finding(Severity.ERROR, "${offender.relativeTo(frontend).invariantSeparatorsPath} imports \$lib. SvelteKit 3 uses #lib.") {
            offenders.forEach { file ->
                file.writeText(LEGACY_LIB_IMPORT.replace(file.readText()) { "${it.groupValues[1]}${it.groupValues[2]}#lib" })
            }
            addSubpathImport(frontend.resolve("package.json"), LIB_IMPORT, LIB_TARGET)
            "Rewrote \$lib imports to #lib in ${offenders.size} file(s)"
        }
    }

    private fun dependenciesInstalled(manifest: String): Finding {
        val modules = frontend.resolve("node_modules")
        if (!modules.isDirectory) {
            return Finding(Severity.WARN, "Dependencies are not installed yet. svelteInstall runs automatically when needed.")
        }
        val incomplete = installedPackages(modules).filter { it.isMissingItsFiles() }.map { it.relativeTo(modules).invariantSeparatorsPath }
        if (incomplete.isNotEmpty()) {
            val cache = cacheClearCommand()?.let { " If it happens again, clear the package manager cache with `$it`." }.orEmpty()
            return Finding(
                Severity.ERROR,
                "${incomplete.size} installed package(s) are missing their files (${incomplete.summary()}), " +
                    "so the install was cut short. Run svelteClean and install again.$cache",
            ) {
                modules.deleteRecursively()
                "Deleted node_modules, so the next task that needs it installs it again"
            }
        }
        val missing = declaredDependencies(manifest).filterNot { modules.resolve("$it/package.json").isFile }
        if (missing.isNotEmpty()) {
            return Finding(Severity.WARN, "${missing.summary()} in package.json is not installed. Run svelteInstall.")
        }
        return Finding(Severity.OK, "Dependencies are installed")
    }

    private fun cacheClearCommand(): String? =
        when (if (pinnedBun) "bun" else runCatching { resolveFrontendTool(frontend, packageManager).executableName }.getOrNull()) {
            "bun" -> "bun pm cache rm"
            "pnpm" -> "pnpm store prune"
            "npm" -> "npm cache clean --force"
            "yarn" -> "yarn cache clean"
            else -> null
        }

    private fun extraCertificates(): Finding? {
        val path = environment("NODE_EXTRA_CA_CERTS")?.takeIf { it.isNotBlank() } ?: return null
        return if (File(path).isFile) {
            Finding(Severity.OK, "NODE_EXTRA_CA_CERTS file exists")
        } else {
            Finding(
                Severity.WARN,
                "NODE_EXTRA_CA_CERTS points to $path, which does not exist, so package downloads can fail behind a proxy. " +
                    "Fix the path or unset the variable.",
            )
        }
    }

    private fun port(): Finding =
        if (isPortFree(devPort)) {
            Finding(Severity.OK, "Port $devPort is free")
        } else {
            Finding(Severity.WARN, "Port $devPort is in use. If Vite is not running, a process was left behind.")
        }
}

private fun List<String>.summary(): String = take(3).joinToString() + if (size > 3) " and ${size - 3} more" else ""

private fun installedPackages(modules: File): List<File> =
    modules
        .listFiles()
        .orEmpty()
        .filter { it.isDirectory && !it.name.startsWith(".") }
        .flatMap { if (it.name.startsWith("@")) it.listFiles().orEmpty().filter(File::isDirectory) else listOf(it) }
        .filter { it.resolve("package.json").isFile }
        .sortedBy { it.relativeTo(modules).invariantSeparatorsPath }

private fun parsedManifest(text: String): Map<*, *>? = runCatching { JsonSlurper().parseText(text) as? Map<*, *> }.getOrNull()

private fun declaredDependencies(manifest: String): List<String> {
    val parsed = parsedManifest(manifest) ?: return emptyList()
    return listOf("dependencies", "devDependencies")
        .flatMap { section -> (parsed[section] as? Map<*, *>)?.keys.orEmpty().map { it.toString() } }
        .sorted()
}

private fun File.isMissingItsFiles(): Boolean {
    val manifest = parsedManifest(resolve("package.json").readText()) ?: return false
    val exports = manifest["exports"]
    val root = if (exports is Map<*, *> && exports.keys.any { it.toString().startsWith(".") }) exports["."] else exports
    val declared =
        (listOf("main", "module", "svelte", "types", "typings").map { manifest[it] } + entryFiles(root))
            .filterIsInstance<String>()
            .filter { it.isNotBlank() && '*' !in it }
    if (declared.isEmpty()) return false
    return declared.none { entry -> listOf(entry, "$entry.js", "$entry/index.js").any { resolve(it).isFile } }
}

private fun entryFiles(node: Any?): List<String> =
    when (node) {
        is String -> listOf(node)
        is Map<*, *> -> node.values.flatMap(::entryFiles)
        is List<*> -> node.flatMap(::entryFiles)
        else -> emptyList()
    }

private fun String.normalizedOutputPath(): String = trim().removePrefix("./").trimEnd('/', '\\').replace('\\', '/')

private fun installedNodeVersion(): String? {
    val node = locateExecutable("node") ?: return null
    return try {
        val process = ProcessBuilder(node.path, "--version").redirectErrorStream(true).start()
        if (!process.waitFor(5, TimeUnit.SECONDS)) {
            process.destroyForcibly()
            return null
        }
        process.inputStream
            .bufferedReader()
            .readText()
            .trim()
            .ifEmpty { null }
    } catch (_: IOException) {
        null
    }
}

private fun portIsFree(port: Int): Boolean =
    try {
        ServerSocket(port, 1, InetAddress.getLoopbackAddress()).close()
        true
    } catch (_: BindException) {
        false
    }

@UntrackedTask(because = "Checks the state of the machine and the frontend project")
public abstract class SvelteDoctorTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Input
    public abstract val packageManager: Property<PackageManager>

    @get:Input
    @get:Optional
    public abstract val bunVersion: Property<String>

    @get:Input
    public abstract val devPort: Property<Int>

    @get:Input
    public abstract val outputDir: Property<String>

    @get:Internal
    public abstract val bundleDirectory: DirectoryProperty

    @get:Input
    @get:Optional
    @get:Option(option = "fix", description = "Applies the fixes that are safe to make without asking")
    public abstract val fix: Property<Boolean>

    @get:Input
    public abstract val offline: Property<Boolean>

    @TaskAction
    public fun examine() {
        val doctor =
            SetupDoctor(
                frontendDir.get().asFile,
                packageManager.get(),
                devPort.get(),
                outputDir.get(),
                bundleDirectory.orNull?.asFile,
                bunVersion = bunVersion.orNull,
                registryProbe = if (offline.getOrElse(false)) null else ::probeRegistry,
            )
        val applied = if (fix.getOrElse(false)) doctor.fix() else emptyList()
        applied.forEach { logger.lifecycle("FIXED $it") }
        val findings = doctor.examine()
        findings.forEach { finding -> logger.lifecycle("${finding.severity.name.padEnd(5)} ${finding.message}") }
        val fixable = findings.count { it.fix != null }
        if (fixable > 0) logger.lifecycle("ktor-svelte: svelteDoctor --fix can fix $fixable of these.")
        val errors = findings.count { it.severity == Severity.ERROR }
        if (errors > 0) throw GradleException("svelteDoctor found $errors problem(s) to fix.")
    }
}
