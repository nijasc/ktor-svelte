package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
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
import java.io.File
import java.io.IOException
import java.util.concurrent.TimeUnit

internal const val HOOK_MARKER = "Installed by ktor-svelte (svelteGitHooks)."
internal const val MERGE_DRIVER = "ktor-svelte"
internal const val REGENERATE_MARKER = "refs/ktor-svelte/regenerate"
internal const val MERGE_DRIVER_COMMAND = "git update-ref $REGENERATE_MARKER HEAD"
internal val REGENERATE_HOOKS = listOf("post-merge", "post-rewrite")
private const val GIT_TIMEOUT_SECONDS = 10L

internal fun preCommitHook(
    projectPath: String,
    tasks: List<String>,
): String {
    val folder = if (projectPath.isEmpty()) "" else "/$projectPath"
    return "#!/bin/sh\n" +
        "# $HOOK_MARKER Remove it with: ./gradlew svelteGitHooks --remove\n" +
        "cd \"\$(git rev-parse --show-toplevel)$folder\" || exit 1\n" +
        "if ! ./gradlew --quiet ${tasks.joinToString(" ")}; then\n" +
        "    echo \"ktor-svelte: commit stopped. Run ./gradlew format svelteSync, stage the result and commit again.\"\n" +
        "    echo \"To commit anyway, add --no-verify.\"\n" +
        "    exit 1\n" +
        "fi\n"
}

internal fun regenerateHook(
    projectPath: String,
    tasks: List<String>,
): String {
    val folder = if (projectPath.isEmpty()) "" else "/$projectPath"
    val command = "./gradlew ${tasks.joinToString(" ")}"
    return "#!/bin/sh\n" +
        "# $HOOK_MARKER Remove it with: ./gradlew svelteGitHooks --remove\n" +
        "git rev-parse -q --verify $REGENERATE_MARKER >/dev/null 2>&1 || exit 0\n" +
        "git update-ref -d $REGENERATE_MARKER\n" +
        "cd \"\$(git rev-parse --show-toplevel)$folder\" || exit 0\n" +
        "echo \"ktor-svelte: generated files changed on both sides, so one side was kept. Regenerating them now.\"\n" +
        "if ./gradlew --quiet ${tasks.joinToString(" ")}; then\n" +
        "    echo \"ktor-svelte: done. Commit the regenerated files if git status shows any.\"\n" +
        "else\n" +
        "    echo \"ktor-svelte: that did not work. Run $command yourself and commit the result.\"\n" +
        "fi\n" +
        "exit 0\n"
}

internal fun gitSucceeds(
    directory: File,
    vararg arguments: String,
): Boolean =
    try {
        val process = ProcessBuilder(listOf("git", *arguments)).directory(directory).redirectErrorStream(true).start()
        process.inputStream.readBytes()
        val finished = process.waitFor(GIT_TIMEOUT_SECONDS, TimeUnit.SECONDS)
        if (!finished) process.destroyForcibly()
        finished && process.exitValue() == 0
    } catch (_: IOException) {
        false
    }

internal fun installMergeDriver(
    project: File,
    hooks: File,
    projectPath: String,
    tasks: List<String>,
): List<String> {
    gitSucceeds(project, "config", "merge.$MERGE_DRIVER.name", "Keeps one side of files ktor-svelte generates; they are regenerated after")
    if (!gitSucceeds(project, "config", "merge.$MERGE_DRIVER.driver", MERGE_DRIVER_COMMAND)) return emptyList()
    return REGENERATE_HOOKS.filter { name ->
        val hook = hooks.resolve(name)
        val foreign = hook.isFile && HOOK_MARKER !in hook.readText()
        if (!foreign) installHook(hook, regenerateHook(projectPath, tasks))
        !foreign
    }
}

internal fun removeMergeDriver(
    project: File,
    hooks: File,
) {
    REGENERATE_HOOKS.forEach { removeHook(hooks.resolve(it)) }
    gitSucceeds(project, "config", "--remove-section", "merge.$MERGE_DRIVER")
    gitSucceeds(project, "update-ref", "-d", REGENERATE_MARKER)
}

internal fun gitOutput(
    directory: File,
    vararg arguments: String,
): String? =
    try {
        val process = ProcessBuilder(listOf("git", *arguments)).directory(directory).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        val finished = process.waitFor(GIT_TIMEOUT_SECONDS, TimeUnit.SECONDS)
        if (!finished) process.destroyForcibly()
        output.trim().takeIf { finished && process.exitValue() == 0 && it.isNotEmpty() }
    } catch (_: IOException) {
        null
    }

internal enum class HookChange { INSTALLED, UPDATED, UNCHANGED, REMOVED, NOTHING_TO_REMOVE }

internal fun installHook(
    hook: File,
    content: String,
): HookChange {
    val existing = hook.takeIf { it.isFile }?.readText()
    if (existing != null && HOOK_MARKER !in existing) {
        throw GradleException(
            "$hook already exists and was not written by ktor-svelte, so it was left alone. " +
                "Call ./gradlew formatCheck svelteVerifySync from it yourself, or delete it and run svelteGitHooks again.",
        )
    }
    if (existing == content) return HookChange.UNCHANGED
    hook.parentFile.mkdirs()
    hook.writeText(content)
    hook.setExecutable(true)
    return if (existing == null) HookChange.INSTALLED else HookChange.UPDATED
}

internal fun removeHook(hook: File): HookChange {
    if (!hook.isFile || HOOK_MARKER !in hook.readText()) return HookChange.NOTHING_TO_REMOVE
    hook.delete()
    return HookChange.REMOVED
}

@UntrackedTask(because = "Writes into the git folder of this clone")
public abstract class SvelteGitHooksTask : DefaultTask() {
    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Input
    public abstract val hookTasks: ListProperty<String>

    @get:Input
    public abstract val regenerateTasks: ListProperty<String>

    @get:Input
    @get:Optional
    @get:Option(option = "remove", description = "Removes the hook again, if ktor-svelte installed it")
    public abstract val remove: Property<Boolean>

    @TaskAction
    public fun install() {
        val project = projectDirectory.get().asFile
        val topLevel = gitOutput(project, "rev-parse", "--show-toplevel")
        val hooks = gitOutput(project, "rev-parse", "--git-path", "hooks")
        if (topLevel == null || hooks == null) {
            throw GradleException("$project is not inside a git repository, so there is nowhere to install a hook." + DocLink.GRADLE.see())
        }
        val hooksFolder = project.resolve(hooks).normalize()
        val hook = hooksFolder.resolve("pre-commit")
        if (remove.getOrElse(false)) {
            removeMergeDriver(project, hooksFolder)
            val removed = removeHook(hook) == HookChange.REMOVED
            logger.lifecycle(if (removed) "ktor-svelte: removed $hook." else "ktor-svelte: there is no ktor-svelte hook at $hook.")
            return
        }
        val projectPath = project.canonicalFile.relativeToOrSelf(File(topLevel).canonicalFile).invariantSeparatorsPath
        when (installHook(hook, preCommitHook(projectPath, hookTasks.get()))) {
            HookChange.UNCHANGED -> logger.lifecycle("ktor-svelte: the pre-commit hook at $hook is up to date.")
            else ->
                logger.lifecycle(
                    "ktor-svelte: installed $hook. Every commit now runs ${hookTasks.get().joinToString(" and ")} first.",
                )
        }
        val regenerate = regenerateTasks.get()
        if (regenerate.isEmpty()) return
        val installed = installMergeDriver(project, hooksFolder, projectPath, regenerate)
        val skipped = REGENERATE_HOOKS - installed.toSet()
        logger.lifecycle(
            "ktor-svelte: generated files no longer conflict in this clone. When both sides of a merge or rebase changed one, " +
                "one side is kept" +
                if (installed.isEmpty()) "." else " and ${regenerate.joinToString(" and ")} run afterwards.",
        )
        if (skipped.isNotEmpty()) {
            logger.lifecycle(
                "ktor-svelte: ${skipped.joinToString(" and ")} already ${if (skipped.size == 1) "has a hook" else "have hooks"} " +
                    "from something else, which stayed. After such a merge, run ./gradlew ${regenerate.joinToString(" ")} yourself.",
            )
        }
    }
}
