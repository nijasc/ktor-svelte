package io.github.nijasc.ktor.svelte.gradle.tasks

import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class RenamePageTest {
    @TempDir
    lateinit var dir: File

    private val routes: File get() = dir.resolve("src/routes")

    private fun page(
        path: String,
        content: String = "",
    ): File {
        val target = routes.resolve(path).resolve("+page.svelte")
        target.parentFile.mkdirs()
        target.writeText(content)
        return target
    }

    @Test
    fun `nothing is touched when the check before the rename refuses`() {
        val home = page("", "<a href={routes.adminUsers()}>Users</a>")
        page("admin/users")
        assertFailsWith<IllegalStateException> {
            renamePage(dir, routes, emptyList(), "admin/users", "people") { error("dirty") }
        }
        assertEquals("<a href={routes.adminUsers()}>Users</a>", home.readText())
        assertTrue(routes.resolve("admin/users/+page.svelte").isFile)
        assertFalse(routes.resolve("people").exists())
    }

    @Test
    fun `the check sees every file the rename would change, and empty parents are removed`() {
        val home = page("", "<a href={routes.adminUsers()}>Users</a>")
        val moved = page("admin/users", "<a href={routes.adminUsers()}>Self</a>")
        var checked = emptyList<File>()
        val result = renamePage(dir, routes, emptyList(), "admin/users", "people") { checked = it }
        assertEquals(setOf(home, moved, moved.parentFile), checked.toSet())
        assertEquals(2, result.updatedCalls)
        assertEquals(setOf(home, routes.resolve("people/+page.svelte")), result.updatedFiles.toSet())
        assertEquals("<a href={routes.people()}>Self</a>", routes.resolve("people/+page.svelte").readText())
        assertFalse(routes.resolve("admin").exists())
    }

    @Test
    fun `uncommitted files are named`() {
        fun git(vararg arguments: String): Boolean =
            runCatching {
                ProcessBuilder(listOf("git", *arguments))
                    .directory(dir)
                    .redirectErrorStream(true)
                    .start()
                    .apply { inputStream.readBytes() }
                    .waitFor() == 0
            }.getOrDefault(false)
        assumeTrue(git("init", "-q"))
        val committed = dir.resolve("committed.txt").apply { writeText("a") }
        val changed = dir.resolve("changed.txt").apply { writeText("a") }
        assumeTrue(git("add", "-A") && git("-c", "user.name=t", "-c", "user.email=t@example.com", "commit", "-q", "-m", "x"))
        changed.writeText("b")
        assertEquals(listOf("changed.txt"), uncommittedFiles(dir, listOf(committed, changed)))
        assertEquals(emptyList(), uncommittedFiles(dir, listOf(committed)))
    }
}
