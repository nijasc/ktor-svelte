package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonOutput
import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_MARKER
import io.github.nijasc.ktor.svelte.gradle.libraries.LibrarySpec
import io.github.nijasc.ktor.svelte.gradle.libraries.PACKAGE_VERSIONS
import io.github.nijasc.ktor.svelte.gradle.libraries.frontendFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.iconSources
import io.github.nijasc.ktor.svelte.gradle.libraries.kotlinFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.readMessages
import io.github.nijasc.ktor.svelte.gradle.libraries.rootLayout
import io.github.nijasc.ktor.svelte.gradle.libraries.runtimeProperties
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.CacheableTask
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.InputFiles
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.OutputDirectory
import org.gradle.api.tasks.PathSensitive
import org.gradle.api.tasks.PathSensitivity
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.work.DisableCachingByDefault
import java.io.File

private const val ICONS_JSON = "$GENERATED_DIR/icons.json"
private const val USER_VITE_CONFIG = "vite.user.ts"
private val OWNED_ONLY_WITH_MARKER = setOf("vite.config.ts", "src/hooks.server.ts", "src/hooks.ts")
private val KNOWN_PACKAGES = PACKAGE_VERSIONS.keys

internal fun File.isOwnedByPlugin(): Boolean = !isFile || GENERATED_MARKER in readText()

private fun readPackageJson(frontend: File): MutableMap<String, Any?> {
    val file = frontend.resolve("package.json")
    if (!file.isFile) throw GradleException("No package.json in $frontend. Run svelteInit first.")
    @Suppress("UNCHECKED_CAST")
    return (JsonSlurper().parse(file) as Map<String, Any?>).toMutableMap()
}

@Suppress("UNCHECKED_CAST")
internal fun updatedPackageJson(
    current: Map<String, Any?>,
    spec: LibrarySpec,
): Map<String, Any?> {
    val result = LinkedHashMap(current)
    val devDependencies = java.util.TreeMap<String, Any?>((current["devDependencies"] as? Map<String, Any?>).orEmpty())
    KNOWN_PACKAGES.filter { it !in spec.requiredPackages }.forEach(devDependencies::remove)
    spec.requiredPackages.forEach { name -> devDependencies.putIfAbsent(name, PACKAGE_VERSIONS.getValue(name)) }
    result["devDependencies"] = devDependencies
    val imports = LinkedHashMap((current["imports"] as? Map<String, Any?>).orEmpty())
    imports.putIfAbsent("#lib/*", "./src/lib/*")
    val aliases =
        buildMap {
            if (spec.i18n != null) put("#i18n", "./$GENERATED_DIR/i18n.ts")
            if (spec.daisy != null) put("#theme", "./$GENERATED_DIR/theme.ts")
            if (spec.lucide) put("#icon", "./$GENERATED_DIR/Icon.svelte")
        }
    imports.entries.removeIf { (name, target) -> name !in aliases && target.toString().startsWith("./$GENERATED_DIR/") }
    imports.putAll(aliases)
    result["imports"] = imports
    return result
}

@DisableCachingByDefault(because = "Base type for tasks that compare or write frontend library files")
public abstract class SvelteLibraryTask : SvelteToolTask() {
    @get:Input
    public abstract val spec: Property<LibrarySpec>

    @get:Internal
    public abstract val messagesDirectory: DirectoryProperty

    internal fun expectedFiles(): Map<String, String> {
        val frontend = frontendDir.get().asFile
        val current = spec.get()
        current.validate()
        val catalog = current.i18n?.let { readMessages(messagesDirectory.get().asFile, it.locales) }
        return frontendFiles(current, catalog, frontend.resolve(USER_VITE_CONFIG).isFile)
    }
}

@UntrackedTask(because = "Changes package.json, the lockfile and generated frontend files")
public abstract class SvelteSyncTask : SvelteLibraryTask() {
    @TaskAction
    public fun sync() {
        val frontend = frontendDir.get().asFile
        val current = spec.get()
        val expected = expectedFiles()
        requireOwnedFiles(frontend, expected.keys)

        val packageJson = readPackageJson(frontend)
        val updated = updatedPackageJson(packageJson, current)
        val packagesChanged = updated != packageJson
        if (packagesChanged) {
            frontend.resolve("package.json").writeText(JsonOutput.prettyPrint(JsonOutput.toJson(updated)) + "\n")
        }
        if (packagesChanged || !frontend.resolve("node_modules").isDirectory) {
            val tool = tool()
            runToolQuietly(tool, listOf("install"))
        }

        val icons = if (current.lucide) iconSources(installedIcons(frontend)) else emptyMap()
        val all = expected + icons
        val changed =
            all.filter { (path, content) ->
                val file = frontend.resolve(path)
                val different = !file.isFile || file.readText() != content
                if (different) {
                    file.parentFile.mkdirs()
                    file.writeText(content)
                }
                different
            }
        removeStaleFiles(frontend, all.keys)
        addRootLayout(frontend, current)
        logger.lifecycle(
            if (changed.isEmpty() && !packagesChanged) {
                "ktor-svelte: frontend libraries are in sync."
            } else {
                "ktor-svelte: updated frontend libraries. Commit package.json, the lockfile and the generated files."
            },
        )
    }

    private fun requireOwnedFiles(
        frontend: File,
        paths: Set<String>,
    ) {
        val blocked = paths.filter { it in OWNED_ONLY_WITH_MARKER }.filterNot { frontend.resolve(it).isOwnedByPlugin() }
        if (blocked.isEmpty()) return
        throw GradleException(
            "ktor-svelte generates ${blocked.joinToString()}, but found your own version. " +
                "Move custom Vite settings to $USER_VITE_CONFIG, and merge any custom hooks by hand, then delete those files.",
        )
    }

    private fun installedIcons(frontend: File): List<String> {
        val directory = frontend.resolve("node_modules/@lucide/svelte/dist/icons")
        val icons =
            directory
                .list()
                .orEmpty()
                .filter { it.endsWith(".svelte") }
                .map { it.removeSuffix(".svelte") }
        if (icons.isEmpty()) throw GradleException("No Lucide icons found in $directory. Check that @lucide/svelte installed correctly.")
        return icons
    }

    private fun removeStaleFiles(
        frontend: File,
        keep: Set<String>,
    ) {
        frontend
            .resolve(GENERATED_DIR)
            .walkBottomUp()
            .filter { it.isFile && it.relativeTo(frontend).invariantSeparatorsPath !in keep }
            .forEach { it.delete() }
        listOf("src/hooks.server.ts", "src/hooks.ts").filter { it !in keep }.forEach { path ->
            val file = frontend.resolve(path)
            if (file.isFile && GENERATED_MARKER in file.readText()) file.delete()
        }
    }

    private fun addRootLayout(
        frontend: File,
        current: LibrarySpec,
    ) {
        if (!current.usesCss) return
        val layout = frontend.resolve("src/routes/+layout.svelte")
        if (!layout.isFile) {
            layout.parentFile.mkdirs()
            layout.writeText(rootLayout())
        } else if ("ktor-svelte/app.css" !in layout.readText()) {
            logger.warn("ktor-svelte: add import '#lib/ktor-svelte/app.css'; to src/routes/+layout.svelte to load your styles.")
        }
    }
}

@UntrackedTask(because = "Compares the working tree with the generated frontend files")
public abstract class SvelteVerifySyncTask : SvelteLibraryTask() {
    @TaskAction
    public fun verify() {
        val frontend = frontendDir.get().asFile
        val current = spec.get()
        val problems = mutableListOf<String>()
        expectedFiles().forEach { (path, content) ->
            val file = frontend.resolve(path)
            if (!file.isFile || file.readText() != content) problems += path
        }
        if (current.lucide && !frontend.resolve(ICONS_JSON).isFile) problems += ICONS_JSON
        val packageJson = readPackageJson(frontend)
        if (updatedPackageJson(packageJson, current) != packageJson) problems += "package.json"
        if (problems.isNotEmpty()) {
            throw GradleException("Frontend libraries are out of sync: ${problems.joinToString()}. Run svelteSync and commit the result.")
        }
    }
}

@CacheableTask
public abstract class SvelteGenerateSourcesTask : DefaultTask() {
    @get:Input
    public abstract val spec: Property<LibrarySpec>

    @get:Input
    public abstract val hasRuntimeDependency: Property<Boolean>

    @get:InputFiles
    @get:PathSensitive(PathSensitivity.NONE)
    public abstract val iconsFile: ConfigurableFileCollection

    @get:InputFiles
    @get:PathSensitive(PathSensitivity.RELATIVE)
    public abstract val messageFiles: ConfigurableFileCollection

    @get:Internal
    public abstract val messagesDirectory: DirectoryProperty

    @get:OutputDirectory
    public abstract val kotlinDirectory: DirectoryProperty

    @get:OutputDirectory
    public abstract val resourcesDirectory: DirectoryProperty

    @TaskAction
    public fun generate() {
        val current = spec.get()
        current.validate()
        val icons =
            if (current.lucide) {
                val file =
                    iconsFile.files.firstOrNull { it.isFile }
                        ?: throw GradleException("Lucide is enabled, but $ICONS_JSON is missing. Run svelteSync and commit the result.")
                @Suppress("UNCHECKED_CAST")
                JsonSlurper().parse(file) as List<String>
            } else {
                emptyList()
            }
        val catalog = current.i18n?.let { readMessages(messagesDirectory.get().asFile, it.locales) }

        val packagePath = current.generatedPackage.replace('.', '/')
        val kotlinRoot = kotlinDirectory.get().asFile
        kotlinRoot.deleteRecursively()
        kotlinFiles(current, icons, catalog, hasRuntimeDependency.get()).forEach { (name, content) ->
            val file = kotlinRoot.resolve("$packagePath/$name")
            file.parentFile.mkdirs()
            file.writeText(content)
        }

        val resourcesRoot = resourcesDirectory.get().asFile
        resourcesRoot.deleteRecursively()
        val properties = resourcesRoot.resolve("ktor-svelte/libraries.properties")
        properties.parentFile.mkdirs()
        properties.writeText(runtimeProperties(current))
    }
}
