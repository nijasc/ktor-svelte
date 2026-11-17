package io.github.nijasc.ktor.svelte.gradle.tasks

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class BuildTimingsTest {
    private val frontend = setOf("install", "frontend build", "bundling")

    @Test
    fun `the table lists each step with its time and how it ended, and the total`() {
        val table =
            timingSummary(
                listOf(
                    StepTime("install", 240, StepOutcome.UP_TO_DATE),
                    StepTime("frontend build", 12_430, StepOutcome.RAN),
                    StepTime("bundling", 310, StepOutcome.RAN),
                    StepTime("Kotlin compile", 4_050, StepOutcome.FROM_CACHE),
                ),
                frontend,
            )
        assertEquals(
            """
            ktor-svelte build times:
              install          0.2s  up to date
              frontend build  12.4s
              bundling         0.3s
              Kotlin compile   4.1s  from cache
              total           17.0s
            """.trimIndent(),
            table,
        )
    }

    @Test
    fun `nothing is printed when no frontend step ran`() {
        assertNull(timingSummary(listOf(StepTime("Kotlin compile", 4_000, StepOutcome.RAN)), frontend))
        assertNull(
            timingSummary(
                listOf(StepTime("frontend build", 10, StepOutcome.UP_TO_DATE), StepTime("bundling", 10, StepOutcome.SKIPPED)),
                frontend,
            ),
        )
    }

    @Test
    fun `a failed step is marked`() {
        val table =
            timingSummary(
                listOf(StepTime("frontend build", 1_000, StepOutcome.RAN), StepTime("bundling", 50, StepOutcome.FAILED)),
                frontend,
            )
        assertEquals("  bundling        0.1s  failed", table.orEmpty().lines()[2])
    }
}
