package io.github.nijasc.ktor.svelte.gradle.tasks

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

class VerifyA11yTest {
    @Test
    fun `the failure lists each problem with its page and theme, and where the rules are explained`() {
        val message = a11yFailure(listOf("/about in the dark theme dracula: image-alt: Images must have alternative text ([img])"), 4)
        assertEquals("axe found 1 accessibility problem on 4 pages:", message.lines().first())
        assertContains(message, "\n  /about in the dark theme dracula: image-alt: Images must have alternative text ([img])\n")
        assertContains(message, "https://dequeuniversity.com/rules/axe/")
        assertContains(a11yFailure(listOf("a", "b"), 1), "axe found 2 accessibility problems on 1 page:")
    }
}
