package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonOutput
import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.libraries.APP_STATIC_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.CLIENT_HOOKS
import io.github.nijasc.ktor.svelte.gradle.libraries.COMPONENTS_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.ERROR_ROUTE
import io.github.nijasc.ktor.svelte.gradle.libraries.FONT_PACKAGE_VERSION
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_MARKER
import io.github.nijasc.ktor.svelte.gradle.libraries.LibrarySpec
import io.github.nijasc.ktor.svelte.gradle.libraries.PACKAGE_VERSIONS
import io.github.nijasc.ktor.svelte.gradle.libraries.SERVICE_WORKER
import io.github.nijasc.ktor.svelte.gradle.libraries.SERVICE_WORKER_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.SERVICE_WORKER_TSCONFIG
import io.github.nijasc.ktor.svelte.gradle.libraries.appIcons
import io.github.nijasc.ktor.svelte.gradle.libraries.frontendFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.iconConstant
import io.github.nijasc.ktor.svelte.gradle.libraries.iconSources
import io.github.nijasc.ktor.svelte.gradle.libraries.kotlinFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.readMessages
import io.github.nijasc.ktor.svelte.gradle.libraries.rootLayout
import io.github.nijasc.ktor.svelte.gradle.libraries.runtimeProperties
import io.github.nijasc.ktor.svelte.gradle.libraries.samePixels
import io.github.nijasc.ktor.svelte.gradle.libraries.scanRoutes
import io.github.nijasc.ktor.svelte.gradle.libraries.usedIcons
import io.github.nijasc.ktor.svelte.gradle.libraries.writePng
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
private val OWNED_ONLY_WITH_MARKER =
    setOf("vite.config.ts", "src/hooks.server.ts", "src/hooks.ts", "src/hooks.client.ts", SERVICE_WORKER, SERVICE_WORKER_TSCONFIG)
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
    spec.requiredPackages.forEach { name -> devDependencies.putIfAbsent(name, PACKAGE_VERSIONS[name] ?: FONT_PACKAGE_VERSION) }
    result["devDependencies"] = devDependencies
    val imports = LinkedHashMap((current["imports"] as? Map<String, Any?>).orEmpty())
    imports.putIfAbsent("#lib/*", "./src/lib/*")
    val aliases =
        buildMap {
            if (spec.i18n != null) put("#i18n", "./$GENERATED_DIR/i18n.ts")
            if (spec.i18n != null) put("#format", "./$GENERATED_DIR/format.ts")
            if (spec.daisy != null) put("#theme", "./$GENERATED_DIR/theme.ts")
            if (spec.lucide) put("#icon", "./$GENERATED_DIR/Icon.svelte")
            if (spec.routes) put("#routes", "./$GENERATED_DIR/routes.ts")
            if (spec.charts) put("#charts", "./$GENERATED_DIR/charts.ts")
            if (spec.components) put("#components/*", "./$COMPONENTS_DIR/*")
        }
    imports.entries.removeIf { (name, target) -> name !in aliases && target.toString().startsWith("./$GENERATED_DIR/") }
    imports.putAll(aliases)
    result["imports"] = imports
    return result
}

internal fun refreshGeneratedFiles(
    frontend: File,
    expected: Map<String, String>,
): List<String> =
    expected
        .filter { (path, _) -> path.startsWith("$GENERATED_DIR/") }
        .filter { (path, content) ->
            val file = frontend.resolve(path)
            val stale = file.isFile && file.readText() != content
            if (stale) file.writeText(content)
            stale
        }.keys
        .toList()

@DisableCachingByDefault(because = "Base type for tasks that compare or write frontend library files")
public abstract class SvelteLibraryTask : SvelteToolTask() {
    @get:Input
    public abstract val spec: Property<LibrarySpec>

    @get:Internal
    public abstract val messagesDirectory: DirectoryProperty

    @get:Internal
    public abstract val routesDirectory: DirectoryProperty

    @get:Internal
    public abstract val kotlinSources: ConfigurableFileCollection

    internal fun iconFiles(frontend: File): Map<String, String> {
        val installed = installedIcons(frontend)
        val used =
            if (spec.get().allIcons) {
                null
            } else {
                usedIcons(
                    installed.map(::iconConstant).toSet(),
                    kotlinSources.files,
                    frontend.resolve("src"),
                    setOf(frontend.resolve("src/lib/api"), frontend.resolve(GENERATED_DIR)),
                )
            }
        return iconSources(installed, used)
    }

    internal fun installedIcons(frontend: File): List<String> {
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

    internal fun expectedFiles(): Map<String, String> {
        val frontend = frontendDir.get().asFile
        val current = spec.get()
        current.validate()
        val catalog = current.i18n?.let { readMessages(messagesDirectory.get().asFile, it.locales) }
        val routes = if (current.routes) scanRoutes(routesDirectory.get().asFile) else null
        return frontendFiles(current, catalog, frontend.resolve(USER_VITE_CONFIG).isFile, routes).filterNot { (path, _) ->
            val yoursWins = path == ERROR_ROUTE || (path == CLIENT_HOOKS && !current.toasts)
            yoursWins && !frontend.resolve(path).isOwnedByPlugin()
        }
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

        val icons = if (current.lucide) iconFiles(frontend) else emptyMap()
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
        val appIconFiles = current.installable?.let(::appIcons).orEmpty()
        val changedIcons =
            appIconFiles.filter { (path, image) ->
                val file = frontend.resolve(path)
                val different = !samePixels(file, image)
                if (different) writePng(file, image)
                different
            }
        removeStaleFiles(frontend, all.keys + appIconFiles.keys)
        addRootLayout(frontend, current)
        logger.lifecycle(
            if (changed.isEmpty() && changedIcons.isEmpty() && !packagesChanged) {
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
                "Move custom Vite settings to $USER_VITE_CONFIG, and merge any custom hooks by hand, then delete those files." +
                DocLink.FRONTEND_LIBRARIES.see(),
        )
    }

    private fun removeStaleFiles(
        frontend: File,
        keep: Set<String>,
    ) {
        listOf(GENERATED_DIR, APP_STATIC_DIR).forEach { dir ->
            frontend
                .resolve(dir)
                .walkBottomUp()
                .filter { it.isFile && it.relativeTo(frontend).invariantSeparatorsPath !in keep }
                .forEach { it.delete() }
        }
        frontend.resolve(APP_STATIC_DIR).takeIf { it.isDirectory && it.list().isNullOrEmpty() }?.delete()
        listOf("src/hooks.server.ts", "src/hooks.ts", CLIENT_HOOKS, ERROR_ROUTE, SERVICE_WORKER, SERVICE_WORKER_TSCONFIG)
            .filter {
                it !in
                    keep
            }.forEach { path ->
                val file = frontend.resolve(path)
                if (file.isFile && GENERATED_MARKER in file.readText()) file.delete()
            }
        frontend.resolve(SERVICE_WORKER_DIR).takeIf { it.isDirectory && it.list().isNullOrEmpty() }?.delete()
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
        if (current.lucide && frontend.resolve("node_modules/@lucide/svelte").isDirectory) {
            iconFiles(frontend).forEach { (path, content) ->
                val file = frontend.resolve(path)
                if (path !in problems && (!file.isFile || file.readText() != content)) problems += path
            }
        }
        current.installable?.let(::appIcons)?.forEach { (path, image) ->
            if (!samePixels(frontend.resolve(path), image)) problems += path
        }
        val packageJson = readPackageJson(frontend)
        if (updatedPackageJson(packageJson, current) != packageJson) problems += "package.json"
        if (problems.isNotEmpty()) {
            throw GradleException(
                "Frontend libraries are out of sync: ${problems.joinToString()}. Run svelteSync and commit the result." +
                    DocLink.FRONTEND_LIBRARIES.see(),
            )
        }
    }
}

internal fun writeOnlyWhatChanged(
    root: File,
    files: Map<String, String>,
) {
    val wanted = files.mapKeys { (path, _) -> root.resolve(path).normalize() }
    if (root.isDirectory) {
        root.walkBottomUp().filter { it.isFile && it !in wanted }.forEach { it.delete() }
        root.walkBottomUp().filter { it.isDirectory && it != root && it.list().isNullOrEmpty() }.forEach { it.delete() }
    }
    wanted.forEach { (file, content) ->
        if (file.isFile && file.readText() == content) return@forEach
        file.parentFile.mkdirs()
        file.writeText(content)
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

    @get:InputFiles
    @get:PathSensitive(PathSensitivity.RELATIVE)
    public abstract val routeFiles: ConfigurableFileCollection

    @get:Internal
    public abstract val routesDirectory: DirectoryProperty

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
                        ?: throw GradleException(
                            "Lucide is enabled, but $ICONS_JSON is missing. Run svelteSync and commit the result." +
                                DocLink.FRONTEND_LIBRARIES.see(),
                        )
                @Suppress("UNCHECKED_CAST")
                JsonSlurper().parse(file) as List<String>
            } else {
                emptyList()
            }
        val catalog = current.i18n?.let { readMessages(messagesDirectory.get().asFile, it.locales) }

        val packagePath = current.generatedPackage.replace('.', '/')
        val routes = if (current.routes) scanRoutes(routesDirectory.get().asFile) else null
        writeOnlyWhatChanged(
            kotlinDirectory.get().asFile,
            kotlinFiles(current, icons, catalog, hasRuntimeDependency.get(), routes).mapKeys { (name, _) -> "$packagePath/$name" },
        )
        writeOnlyWhatChanged(resourcesDirectory.get().asFile, mapOf("ktor-svelte/libraries.properties" to runtimeProperties(current)))
    }
}
