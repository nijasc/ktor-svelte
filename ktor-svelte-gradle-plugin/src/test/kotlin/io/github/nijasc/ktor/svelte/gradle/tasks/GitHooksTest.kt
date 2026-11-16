package io.github.nijasc.ktor.svelte.gradle.tasks

import org.gradle.api.GradleException
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
}
