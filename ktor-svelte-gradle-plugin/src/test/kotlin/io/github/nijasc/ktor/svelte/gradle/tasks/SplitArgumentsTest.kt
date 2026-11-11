package io.github.nijasc.ktor.svelte.gradle.tasks

import org.gradle.api.GradleException
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class SplitArgumentsTest {
    @Test
    fun `splits on whitespace`() {
        assertEquals(listOf("--fix", "--max-warnings", "0"), splitArguments("  --fix\t--max-warnings  0 "))
    }

    @Test
    fun `keeps quoted text together and allows empty arguments`() {
        assertEquals(listOf("--grep", "two words", "it's", ""), splitArguments("""--grep "two words" "it's" ''"""))
    }

    @Test
    fun `joins quotes inside a word`() {
        assertEquals(listOf("--name=a b"), splitArguments("--name='a b'"))
    }

    @Test
    fun `empty input gives no arguments`() {
        assertEquals(emptyList(), splitArguments(""))
    }

    @Test
    fun `an unclosed quote fails`() {
        assertFailsWith<GradleException> { splitArguments("--grep \"open") }
    }
}
