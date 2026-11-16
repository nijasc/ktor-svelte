package io.github.nijasc.ktor.svelte.gradle.tasks

import org.gradle.api.GradleException
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class GitHooksTest {
    @TempDir
    lateinit var dir: File

    private val hook: File get() = dir.resolve("hooks/pre-commit")
    private val content = preCommitHook("", listOf("formatCheck", "svelteVerifySync"))

    @Test
    fun `the hook runs the checks from the project folder and explains a stopped commit`() {
        assertEquals(
            "#!/bin/sh\n" +
                "# Installed by ktor-svelte (svelteGitHooks). Remove it with: ./gradlew svelteGitHooks --remove\n" +
                "cd \"\$(git rev-parse --show-toplevel)\" || exit 1\n" +
                "if ! ./gradlew --quiet formatCheck svelteVerifySync; then\n" +
                "    echo \"ktor-svelte: commit stopped. Run ./gradlew format svelteSync, stage the result and commit again.\"\n" +
                "    echo \"To commit anyway, add --no-verify.\"\n" +
                "    exit 1\n" +
                "fi\n",
            content,
        )
        assertContains(
            preCommitHook("services/shop", listOf("formatCheck")),
            "cd \"\$(git rev-parse --show-toplevel)/services/shop\" || exit 1\n",
        )
    }

    @Test
    fun `installing writes the hook once and updates it when it changes`() {
        assertEquals(HookChange.INSTALLED, installHook(hook, content))
        assertEquals(content, hook.readText())
        assertEquals(HookChange.UNCHANGED, installHook(hook, content))
        assertEquals(HookChange.UPDATED, installHook(hook, preCommitHook("", listOf("formatCheck"))))
        assertFalse("svelteVerifySync" in hook.readText())
    }

    @Test
    fun `a hook someone else wrote is never replaced or removed`() {
        hook.parentFile.mkdirs()
        hook.writeText("#!/bin/sh\nnpx lint-staged\n")
        val failure = assertFailsWith<GradleException> { installHook(hook, content) }
        assertContains(failure.message.orEmpty(), "was not written by ktor-svelte")
        assertEquals(HookChange.NOTHING_TO_REMOVE, removeHook(hook))
        assertEquals("#!/bin/sh\nnpx lint-staged\n", hook.readText())
    }

    @Test
    fun `removing deletes only what was installed`() {
        assertEquals(HookChange.NOTHING_TO_REMOVE, removeHook(hook))
        installHook(hook, content)
        assertEquals(HookChange.REMOVED, removeHook(hook))
        assertFalse(hook.exists())
    }

    @Test
    fun `git output is null outside a repository or for a failing command`() {
        assertEquals(null, gitOutput(dir, "rev-parse", "--show-toplevel"))
        assertTrue(gitOutput(dir, "--version")?.startsWith("git version") ?: true)
    }

    private fun git(vararg arguments: String): Boolean = gitSucceeds(dir, *arguments)

    private fun commit(message: String) = git("add", "-A") && git("commit", "-q", "-m", message)

    private fun repositoryWithGeneratedFile(): File {
        assumeTrue(git("init", "-q", "-b", "main") && git("config", "user.email", "test@example.com") && git("config", "user.name", "Test"))
        git("config", "core.autocrlf", "false")
        val generated = dir.resolve("frontend/src/lib/ktor-svelte/routes.ts")
        generated.parentFile.mkdirs()
        generated.resolveSibling(".gitattributes").writeText("* text eol=lf linguist-generated merge=$MERGE_DRIVER\n")
        generated.writeText("export const routes = ['home'];\n")
        dir.resolve("notes.txt").writeText("base\n")
        dir.resolve("gradlew").writeText("#!/bin/sh\necho \"\$@\" >> gradle-calls.txt\n")
        dir.resolve(".gitignore").writeText("gradle-calls.txt\n")
        assumeTrue(commit("base") && git("update-index", "--chmod=+x", "gradlew") && commit("executable wrapper"))
        return generated
    }

    private fun changeOnBothSides(generated: File) {
        assertTrue(git("checkout", "-q", "-b", "feature"))
        generated.writeText("export const routes = ['home', 'feature'];\n")
        assertTrue(commit("feature page"))
        assertTrue(git("checkout", "-q", "main"))
        generated.writeText("export const routes = ['home', 'main'];\n")
        assertTrue(commit("main page"))
    }

    @Test
    fun `without the driver a generated file that changed on both sides conflicts`() {
        val generated = repositoryWithGeneratedFile()
        changeOnBothSides(generated)
        assertFalse(git("merge", "-q", "feature", "-m", "merge"))
        assertContains(generated.readText(), "<<<<<<<")
    }

    @Test
    fun `with the driver the merge goes through, one side is kept and the files are regenerated after`() {
        val generated = repositoryWithGeneratedFile()
        val hooks = dir.resolve(".git/hooks")
        assertEquals(REGENERATE_HOOKS, installMergeDriver(dir, hooks, "", listOf("svelteSync", "svelteGenerateTs")))
        changeOnBothSides(generated)

        assertTrue(git("merge", "-q", "feature", "-m", "merge"))

        assertEquals("export const routes = ['home', 'main'];\n", generated.readText())
        assertEquals("--quiet svelteSync svelteGenerateTs\n", dir.resolve("gradle-calls.txt").readText())
        assertEquals(null, gitOutput(dir, "rev-parse", "-q", "--verify", REGENERATE_MARKER))
    }

    @Test
    fun `a rebase goes through as well and regenerates once at the end`() {
        val generated = repositoryWithGeneratedFile()
        installMergeDriver(dir, dir.resolve(".git/hooks"), "", listOf("svelteSync"))
        changeOnBothSides(generated)
        assertTrue(git("checkout", "-q", "feature"))
        dir.resolve("notes.txt").writeText("second feature commit\n")
        assertTrue(commit("more work"))

        assertTrue(git("rebase", "-q", "main"))

        assertFalse("<<<<<<<" in generated.readText())
        assertEquals("--quiet svelteSync\n", dir.resolve("gradle-calls.txt").readText())
    }

    @Test
    fun `a merge that touches no generated file runs nothing`() {
        val generated = repositoryWithGeneratedFile()
        installMergeDriver(dir, dir.resolve(".git/hooks"), "", listOf("svelteSync"))
        assertTrue(git("checkout", "-q", "-b", "feature"))
        generated.writeText("export const routes = ['home', 'feature'];\n")
        assertTrue(commit("feature page"))
        assertTrue(git("checkout", "-q", "main"))
        dir.resolve("notes.txt").writeText("main\n")
        assertTrue(commit("main notes"))

        assertTrue(git("merge", "-q", "feature", "-m", "merge"))

        assertEquals("export const routes = ['home', 'feature'];\n", generated.readText())
        assertFalse(dir.resolve("gradle-calls.txt").exists())
    }

    @Test
    fun `a hook from something else stays, and removing takes out only what was installed`() {
        repositoryWithGeneratedFile()
        val hooks = dir.resolve(".git/hooks")
        val foreign = hooks.resolve("post-merge").apply { writeText("#!/bin/sh\nexit 0\n") }

        assertEquals(listOf("post-rewrite"), installMergeDriver(dir, hooks, "app", listOf("svelteSync")))
        assertEquals("#!/bin/sh\nexit 0\n", foreign.readText())
        assertContains(hooks.resolve("post-rewrite").readText(), "cd \"\$(git rev-parse --show-toplevel)/app\" || exit 0")
        assertEquals(MERGE_DRIVER_COMMAND, gitOutput(dir, "config", "merge.$MERGE_DRIVER.driver"))

        removeMergeDriver(dir, hooks)
        assertTrue(foreign.exists())
        assertFalse(hooks.resolve("post-rewrite").exists())
        assertEquals(null, gitOutput(dir, "config", "merge.$MERGE_DRIVER.driver"))
    }
}
