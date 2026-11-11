package io.github.nijasc.ktor.svelte.gradle.tasks

import org.gradle.api.Action
import org.gradle.api.Task
import java.io.File

internal class DeleteUnlockedFiles(
    private val directories: List<File>,
) : Action<Task> {
    override fun execute(task: Task) {
        val locked = directories.flatMap(::deleteUnlocked)
        if (locked.isNotEmpty()) {
            task.logger.warn(
                "ktor-svelte could not delete ${locked.size} files that a running Gradle daemon or IDE still holds, " +
                    "for example ${locked.first()}. Run ./gradlew --stop, close the IDE, and run deepClean again to remove them.",
            )
        }
    }
}

internal fun deleteUnlocked(directory: File): List<File> {
    if (!directory.exists()) return emptyList()
    return directory
        .walkBottomUp()
        .filterNot { file -> file.delete() || !file.exists() }
        .filter { it.isFile }
        .toList()
}
