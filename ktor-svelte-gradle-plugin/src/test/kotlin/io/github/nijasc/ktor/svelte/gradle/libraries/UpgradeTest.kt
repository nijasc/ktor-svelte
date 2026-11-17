package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.tasks.bundledUpgradeNotes
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class UpgradeTest {
    @TempDir
    lateinit var dir: File

    @Test
    fun `versions compare by number, and a pre-release comes before its release`() {
        assertTrue(compareVersions("1.10.0", "1.9.3") > 0)
        assertTrue(compareVersions("1.4.0", "1.4.0") == 0)
        assertTrue(compareVersions("1.4.0-rc.1", "1.4.0") < 0)
        assertTrue(compareVersions("2.0", "1.99.99") > 0)
    }

    @Test
    fun `the latest release is read from the Maven metadata`() {
        val metadata = "<metadata><versioning><latest>1.5.0-rc.1</latest><release>1.4.0</release></versioning></metadata>"
        assertEquals("1.4.0", latestReleaseFrom(metadata))
        assertEquals(null, latestReleaseFrom("<metadata/>"))
    }

    @Test
    fun `notes between two versions, oldest first, with conditions on the project`() {
        val notes =
            parseUpgradeNotes(
                """
                # comment
                ## 1.3.0
                - old
                ## 1.4.0
                - always
                - when frontend/src/lib/components: components only
                ## 1.5.0
                - newest
                ## 1.6.0
                - too new
                """.trimIndent(),
            )
        val shown = notesBetween(notes, "1.3.0", "1.5.0") { it == "frontend/src/lib/components" }
        assertEquals(listOf("always", "components only", "newest"), shown.map { it.text })
        assertEquals(listOf("always", "newest"), notesBetween(notes, "1.3.0", "1.5.0") { false }.map { it.text })
        val report = upgradeNotesReport(shown, "1.3.0", "1.5.0")
        assertTrue(report.startsWith("ktor-svelte 1.3.0 -> 1.5.0: what to know\n\n1.4.0\n  - always\n"), report)
        assertEquals(
            "ktor-svelte 1.5.0 -> 1.6.0: nothing in this upgrade needs your attention.\n",
            upgradeNotesReport(emptyList(), "1.5.0", "1.6.0"),
        )
    }

    @Test
    fun `the bundled notes parse and every note has text`() {
        val notes = parseUpgradeNotes(bundledUpgradeNotes())
        assertTrue(notes.isNotEmpty())
        assertTrue(notes.all { it.text.isNotBlank() && compareVersions(it.version, "1.0.0") > 0 })
    }

    @Test
    fun `the version is bumped in the catalog, the plugins block and coordinates, and nowhere else`() {
        dir.resolve("gradle").mkdirs()
        dir.resolve("gradle/libs.versions.toml").writeText(
            """
            [versions]
            ktor-svelte = "1.3.0"
            ktor = "1.3.0"

            [plugins]
            ktor-svelte = { id = "io.github.nijasc.ktor-svelte", version.ref = "ktor-svelte" }
            other = { id = "io.github.nijasc.ktor-svelte", version = "1.3.0" }
            """.trimIndent(),
        )
        dir.resolve("app").mkdirs()
        dir.resolve("app/build.gradle.kts").writeText(
            """
            plugins {
                id("io.github.nijasc.ktor-svelte") version "1.3.0"
            }
            dependencies {
                testImplementation("io.github.nijasc:ktor-svelte-test:1.3.0")
                implementation("com.example:other:1.3.0")
            }
            """.trimIndent(),
        )
        dir.resolve("build").mkdirs()
        dir.resolve("build/build.gradle.kts").writeText("id(\"io.github.nijasc.ktor-svelte\") version \"1.3.0\"")

        val bumps = versionBumps(dir, "1.3.0", "1.4.0").associate { it.file.relativeTo(dir).invariantSeparatorsPath to it.content }

        assertEquals(setOf("gradle/libs.versions.toml", "app/build.gradle.kts"), bumps.keys)
        val catalog = bumps.getValue("gradle/libs.versions.toml")
        assertTrue("ktor-svelte = \"1.4.0\"" in catalog && "ktor = \"1.3.0\"" in catalog, catalog)
        assertTrue("version = \"1.4.0\" }" in catalog, catalog)
        val build = bumps.getValue("app/build.gradle.kts")
        assertTrue("version \"1.4.0\"" in build && "ktor-svelte-test:1.4.0" in build && "other:1.3.0" in build, build)
    }
}
