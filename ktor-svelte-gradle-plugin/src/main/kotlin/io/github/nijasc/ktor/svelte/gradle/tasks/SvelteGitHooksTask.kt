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
        val hook = project.resolve(hooks).resolve("pre-commit").normalize()
        if (remove.getOrElse(false)) {
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
    }
}
