package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.GENERATE_MIGRATION_SYSTEM_PROPERTY
import io.github.nijasc.ktor.svelte.gradle.MIGRATION_CLASSES_SYSTEM_PROPERTY
import io.github.nijasc.ktor.svelte.gradle.MIGRATION_NAME_SYSTEM_PROPERTY
import io.github.nijasc.ktor.svelte.gradle.MIGRATION_REPORT_SYSTEM_PROPERTY
import org.gradle.api.GradleException
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.JavaExec
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import org.gradle.process.CommandLineArgumentProvider
import java.io.File

internal fun migrationReportProblem(report: File): Pair<Boolean, String> {
    if (!report.isFile) {
        return true to
            "The app stopped before it could compare its tables with the database. " +
            "Check that it installs Svelte and connects its Exposed database while it starts."
    }
    val lines = report.readLines()
    return (lines.firstOrNull() != "ok") to lines.drop(1).joinToString("\n").trim()
}

@UntrackedTask(because = "Compares the app's Exposed tables with its database, which Gradle cannot track")
public abstract class SvelteGenerateMigrationsTask : JavaExec() {
    @get:Internal
    public abstract val migrationsDirectory: DirectoryProperty

    @get:Internal
    public abstract val tableClasses: ConfigurableFileCollection

    @get:Internal
    public abstract val reportFile: RegularFileProperty

    @get:Internal
    @get:Option(option = "name", description = "Name of the migration, such as add_tags. Defaults to one taken from what it changes.")
    public abstract val migrationName: Property<String>

    init {
        jvmArgumentProviders.add(MigrationArguments(migrationsDirectory, tableClasses, reportFile, migrationName))
        isIgnoreExitValue = true
    }

    @TaskAction
    override fun exec() {
        val report = reportFile.get().asFile
        report.delete()
        report.parentFile.mkdirs()
        super.exec()
        val (failed, message) = migrationReportProblem(report)
        if (failed) throw GradleException(message)
        logger.lifecycle("ktor-svelte: $message")
    }
}

private class MigrationArguments(
    @get:Internal
    val directory: DirectoryProperty,
    @get:Internal
    val classes: ConfigurableFileCollection,
    @get:Internal
    val report: RegularFileProperty,
    @get:Internal
    val name: Property<String>,
) : CommandLineArgumentProvider {
    override fun asArguments(): Iterable<String> =
        listOfNotNull(
            "-D$GENERATE_MIGRATION_SYSTEM_PROPERTY=${directory.get().asFile.absolutePath}",
            "-D$MIGRATION_CLASSES_SYSTEM_PROPERTY=${classes.files.joinToString(File.pathSeparator) { it.absolutePath }}",
            "-D$MIGRATION_REPORT_SYSTEM_PROPERTY=${report.get().asFile.absolutePath}",
            name.orNull?.let { "-D$MIGRATION_NAME_SYSTEM_PROPERTY=$it" },
        )
}
