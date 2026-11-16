package io.github.nijasc.ktor.svelte.gradle.tasks

import org.gradle.api.DefaultTask
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.ListProperty
import org.gradle.api.provider.Property
import org.gradle.api.provider.ValueSource
import org.gradle.api.provider.ValueSourceParameters
import org.gradle.api.tasks.CacheableTask
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.OutputDirectory
import org.gradle.api.tasks.TaskAction

internal const val BUILD_INFO_RESOURCE = "ktor-svelte/build-info.properties"
private const val UNSPECIFIED_VERSION = "unspecified"

internal fun buildInfoProperties(
    version: String?,
    commit: String?,
    time: String?,
): String =
    listOf("version" to version?.takeUnless { it == UNSPECIFIED_VERSION }, "commit" to commit, "time" to time)
        .filter { (_, value) -> !value.isNullOrBlank() }
        .joinToString("") { (name, value) -> "$name=${value.orEmpty().trim()}\n" }

internal abstract class GitOutputSource : ValueSource<String, GitOutputSource.Parameters> {
    interface Parameters : ValueSourceParameters {
        val directory: DirectoryProperty
        val arguments: ListProperty<String>
    }

    override fun obtain(): String? =
        gitOutput(
            parameters.directory
                .get()
                .asFile,
            *parameters.arguments.get().toTypedArray(),
        )
}

@CacheableTask
public abstract class SvelteBuildInfoTask : DefaultTask() {
    @get:Input
    @get:Optional
    public abstract val version: Property<String>

    @get:Input
    @get:Optional
    public abstract val commit: Property<String>

    @get:Input
    @get:Optional
    public abstract val commitTime: Property<String>

    @get:OutputDirectory
    public abstract val outputDirectory: DirectoryProperty

    @TaskAction
    public fun write() {
        val file = outputDirectory.get().asFile.resolve(BUILD_INFO_RESOURCE)
        file.parentFile.mkdirs()
        file.writeText(buildInfoProperties(version.orNull, commit.orNull, commitTime.orNull))
    }
}
