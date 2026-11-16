package io.github.nijasc.ktor.svelte.gradle.tasks

import kotlin.test.Test
import kotlin.test.assertEquals

class BuildInfoPropertiesTest {
    @Test
    fun `what is known is written, one value per line`() {
        assertEquals(
            "version=1.4.0\ncommit=3f2b8c1e5d47\ntime=2026-11-16T09:30:00+01:00\n",
            buildInfoProperties("1.4.0", "3f2b8c1e5d47\n", " 2026-11-16T09:30:00+01:00 "),
        )
    }

    @Test
    fun `an unset version and a missing repository leave their lines out`() {
        assertEquals("", buildInfoProperties("unspecified", null, null))
        assertEquals("version=0.1.0\n", buildInfoProperties("0.1.0", "", " "))
    }
}
