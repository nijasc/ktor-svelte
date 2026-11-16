package io.github.nijasc.ktor.svelte.gradle.tasks

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull

class RestartSummaryTest {
    @TempDir
    lateinit var dir: File

    private fun file(
        path: String,
        modified: Long,
        content: String = "x",
    ): File =
        dir.resolve(path).apply {
            parentFile.mkdirs()
            writeText(content)
            setLastModified(modified)
        }

    @Test
    fun `the file saved last is named, with how many changed and when the first was saved`() {
        file("src/main/kotlin/app/Old.kt", 1_000)
        file("src/main/kotlin/app/Routes.kt", 5_000)
        val newest = file("src/main/kotlin/app/Model.kt", 7_000)
        val sources = listOf(dir.resolve("src/main/kotlin"), dir.resolve("src/main/java"))

        val change = assertNotNull(changedSince(sources, since = 2_000))
        assertEquals(SourceChange(newest, files = 2, savedAt = 5_000), change)
        assertNull(changedSince(sources, since = 7_000))
        assertNull(changedSince(listOf(dir.resolve("missing")), since = 0))
    }

    @Test
    fun `a source file is named before a resource that changed with it`() {
        val source = file("src/main/kotlin/app/Routes.kt", 5_000)
        file("src/main/resources/application.yaml", 9_000)
        val folders = listOf(dir.resolve("src/main/kotlin"), dir.resolve("src/main/resources"))
        assertEquals(SourceChange(source, files = 1, savedAt = 5_000), changedSince(folders, since = 0))

        val resource = file("src/main/resources/logback.xml", 9_500)
        assertEquals(resource, changedSince(listOf(dir.resolve("src/main/resources")), since = 9_200)?.newest)
    }

    @Test
    fun `the client fingerprint follows content, not time`() {
        val client = dir.resolve("api")
        file("api/services.ts", 1_000, "one")
        file("api/types.ts", 1_000, "types")
        val before = clientFingerprint(client)
        file("api/services.ts", 9_000, "one")
        assertEquals(emptyList(), changedClientFiles(before, clientFingerprint(client)))
        file("api/services.ts", 9_000, "two")
        file("api/form.ts", 9_000, "new")
        client.resolve("types.ts").delete()
        assertEquals(listOf("form.ts", "services.ts", "types.ts"), changedClientFiles(before, clientFingerprint(client)))
        assertEquals(emptyMap(), clientFingerprint(dir.resolve("missing")))
    }

    @Test
    fun `the line names the cause, splits the time and says what happened to the client`() {
        val one = SourceChange(File("TaskRoutes.kt"), files = 1, savedAt = 10_000)
        val client = mapOf("services.ts" to 1L, "types.ts" to 2L)
        assertEquals(
            "ktor-svelte: restarted in 3.4 s after TaskRoutes.kt changed: 1.9 s to compile, 1.5 s to start. " +
                "The API client changed: services.ts.",
            restartSummary(PendingRestart(one, compiledAt = 11_900, client), readyAt = 13_400, client + ("services.ts" to 9L)),
        )
        assertEquals(
            "ktor-svelte: restarted in 3.4 s after TaskRoutes.kt and 1 more file changed: 1.9 s to compile, 1.5 s to start. " +
                "The API client did not change.",
            restartSummary(PendingRestart(one.copy(files = 2), 11_900, client), 13_400, client),
        )
        assertEquals(
            "ktor-svelte: restarted in 3.4 s after TaskRoutes.kt and 4 more files changed: 1.9 s to compile, 1.5 s to start.",
            restartSummary(PendingRestart(one.copy(files = 5), 11_900, emptyMap()), 13_400, emptyMap()),
        )
    }

    @Test
    fun `without a known cause only the start is timed`() {
        assertEquals(
            "ktor-svelte: restarted in 1.5 s after a change.",
            restartSummary(PendingRestart(null, compiledAt = 11_900, emptyMap()), readyAt = 13_400, emptyMap()),
        )
        val savedLater = SourceChange(File("Late.kt"), files = 1, savedAt = 12_500)
        assertEquals(
            "ktor-svelte: restarted in 1.5 s after Late.kt changed.",
            restartSummary(PendingRestart(savedLater, compiledAt = 11_900, emptyMap()), readyAt = 13_400, emptyMap()),
        )
    }
}
