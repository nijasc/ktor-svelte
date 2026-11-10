package io.github.nijasc.ktor.svelte.gradle

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class OutputDirTest {
    @Test
    fun `relative folders inside the frontend are accepted`() {
        listOf("build", "dist/app", "./build", "out\\static", "build/").forEach { output ->
            assertTrue(isFolderInsideFrontend(output), output)
        }
    }

    @Test
    fun `absolute paths are rejected on every platform`() {
        listOf("/tmp/build", "\\build", "\\\\server\\share", "C:\\Users\\build", "c:/build", "D:build").forEach { output ->
            assertFalse(isFolderInsideFrontend(output), output)
        }
    }

    @Test
    fun `parent segments are rejected`() {
        listOf("..", "../outside", "build/../..", "build\\..\\..").forEach { output ->
            assertFalse(isFolderInsideFrontend(output), output)
        }
    }

    @Test
    fun `the frontend folder itself is rejected`() {
        listOf("", "  ", ".", "./", ".\\", "/.").forEach { output ->
            assertFalse(isFolderInsideFrontend(output), output)
        }
    }
}
