package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.libraries.MAVEN_METADATA_URL
import io.github.nijasc.ktor.svelte.gradle.libraries.compareVersions
import io.github.nijasc.ktor.svelte.gradle.libraries.latestReleaseFrom
import io.github.nijasc.ktor.svelte.gradle.libraries.notesBetween
import io.github.nijasc.ktor.svelte.gradle.libraries.parseUpgradeNotes
import io.github.nijasc.ktor.svelte.gradle.libraries.upgradeNotesReport
import io.github.nijasc.ktor.svelte.gradle.libraries.versionBumps
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.ListProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.IOException
import java.net.URI
import java.time.Duration

internal const val UPGRADE_NOTES_RESOURCE = "/io/github/nijasc/ktor/svelte/gradle/upgrade-notes.txt"

internal fun bundledUpgradeNotes(): String =
    SvelteUpgradeNotesTask::class.java
        .getResourceAsStream(UPGRADE_NOTES_RESOURCE)
        ?.use { it.readBytes().decodeToString() }
        .orEmpty()

@UntrackedTask(because = "It prints notes for the project as it is now.")
public abstract class SvelteUpgradeNotesTask : DefaultTask() {
    @get:Input
    @get:Option(option = "since", description = "The ktor-svelte version you upgraded from, such as 1.3.0.")
    public abstract val since: Property<String>

    @get:Input
    public abstract val pluginVersion: Property<String>

    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Input
    public abstract val frontendDirectory: Property<String>

    @TaskAction
    public fun print() {
        if (!since.isPresent) throw GradleException("svelteUpgradeNotes needs the version you upgraded from: --since=1.3.0")
        val root = projectDirectory.get().asFile
        val notes =
            notesBetween(parseUpgradeNotes(bundledUpgradeNotes()), since.get(), pluginVersion.get()) { path ->
                root.resolve(path.replace("{frontend}", frontendDirectory.get())).exists()
            }
        logger.lifecycle(upgradeNotesReport(notes, since.get(), pluginVersion.get()))
    }
}

@UntrackedTask(because = "It changes the build files and runs a new build.")
public abstract class SvelteUpgradeTask : DefaultTask() {
    @get:Input
    @get:Optional
    @get:Option(option = "to", description = "The version to upgrade to. Without it, the latest release on Maven Central.")
    public abstract val to: Property<String>

    @get:Input
    @get:Option(option = "bump-only", description = "Only change the version in the build files; run nothing.")
    public abstract val bumpOnly: Property<Boolean>

    @get:Input
    public abstract val pluginVersion: Property<String>

    @get:Internal
    public abstract val rootDirectory: DirectoryProperty

    @get:Input
    public abstract val projectPath: Property<String>

    @get:Input
    public abstract val followUpTasks: ListProperty<String>

    init {
        bumpOnly.convention(false)
    }

    @TaskAction
    public fun upgrade() {
        val current = pluginVersion.get()
        val target = to.orNull?.trim()?.takeIf { it.isNotEmpty() } ?: latestRelease()
        if (compareVersions(target, current) <= 0) {
            logger.lifecycle("ktor-svelte is already on $current, which is not older than $target. Nothing to upgrade.")
            return
        }
        val root = rootDirectory.get().asFile
        val bumps = versionBumps(root, current, target)
        if (bumps.isEmpty()) {
            throw GradleException(
                "svelteUpgrade found no ktor-svelte $current in gradle/*.versions.toml or the build files under $root. " +
                    "Set the version to $target where your build declares the plugin, then run " +
                    "./gradlew svelteSync svelteGenerateTs svelteUpgradeNotes --since=$current",
            )
        }
        bumps.forEach { bump -> bump.file.writeText(bump.content) }
        logger.lifecycle("ktor-svelte $current -> $target in ${bumps.joinToString { it.file.relativeTo(root).path }}")
        val prefix = projectPath.get().let { if (it == ":") ":" else "$it:" }
        val tasks = followUpTasks.get().map { prefix + it } + listOf("${prefix}svelteUpgradeNotes", "--since=$current")
        if (bumpOnly.get()) {
            logger.lifecycle("Now run: ./gradlew ${tasks.joinToString(" ")}")
            return
        }
        runWithNewVersion(root, tasks)
    }

    private fun runWithNewVersion(
        root: java.io.File,
        tasks: List<String>,
    ) {
        val windows = System.getProperty("os.name").lowercase().contains("win")
        val wrapper = root.resolve(if (windows) "gradlew.bat" else "gradlew")
        if (!wrapper.isFile) {
            logger.lifecycle("No Gradle wrapper in $root. Run with the new version: gradle ${tasks.joinToString(" ")}")
            return
        }
        logger.lifecycle("Running the new version: ${wrapper.name} ${tasks.joinToString(" ")}")
        val command = if (windows) listOf("cmd", "/c", wrapper.absolutePath) else listOf(wrapper.absolutePath)
        val exit =
            ProcessBuilder(command + "--console=plain" + tasks)
                .directory(root)
                .inheritIO()
                .start()
                .waitFor()
        if (exit != 0) {
            throw GradleException(
                "The build with the new version failed (exit $exit). The version is already changed; fix what it says, then run " +
                    "./gradlew ${tasks.joinToString(" ")}",
            )
        }
    }

    private fun latestRelease(): String =
        try {
            val connection = URI(MAVEN_METADATA_URL).toURL().openConnection()
            connection.connectTimeout = Duration.ofSeconds(10).toMillis().toInt()
            connection.readTimeout = Duration.ofSeconds(10).toMillis().toInt()
            val metadata = connection.getInputStream().use { it.readBytes().decodeToString() }
            latestReleaseFrom(metadata) ?: throw GradleException("Maven Central lists no release of ktor-svelte. Pass --to=<version>.")
        } catch (failure: IOException) {
            throw GradleException(
                "svelteUpgrade could not ask Maven Central for the latest version (${failure.message}). Pass --to=<version>.",
            )
        }
}
