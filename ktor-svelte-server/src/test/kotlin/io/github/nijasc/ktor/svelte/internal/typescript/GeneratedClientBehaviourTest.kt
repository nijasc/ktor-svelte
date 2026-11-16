package io.github.nijasc.ktor.svelte.internal.typescript

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertEquals

class GeneratedClientBehaviourTest {
    @TempDir
    lateinit var dir: File

    private fun bun(): File? {
        val names = if (System.getProperty("os.name").startsWith("Windows")) listOf("bun.exe", "bun.cmd") else listOf("bun")
        return System
            .getenv("PATH")
            .orEmpty()
            .split(File.pathSeparator)
            .flatMap { folder -> names.map { File(folder, it) } }
            .firstOrNull { it.isFile }
    }

    private fun runHarness(): JsonObject {
        val runtime = bun()
        assumeTrue(runtime != null, "bun is not on PATH, and the generated client is TypeScript")
        dir.resolve("client.ts").writeText(typeScriptTemplate("client.ts"))
        val harness = dir.resolve("client-harness.ts")
        harness.writeText(checkNotNull(javaClass.getResource("/client-harness.ts")).readText())
        val process = ProcessBuilder(runtime!!.path, harness.path).directory(dir).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        return Json.parseToJsonElement(output.lines().last { it.startsWith("{") }).jsonObject
    }

    @Test
    fun `GET requests are retried with backoff only when asked to`() {
        val results = runHarness()

        fun result(name: String) = results.getValue(name).jsonPrimitive.content
        assertEquals("TypeError after 1 call(s)", result("offByDefault"))
        assertEquals("ok {\"status\":200} after 3 call(s)", result("recovers"))
        assertEquals("ok {\"status\":200} after 2 call(s)", result("timeoutsAreRetried"))
        assertEquals("ApiError 503 after 3 call(s)", result("givesUp"))
        assertEquals("ApiError 503 after 1 call(s)", result("writesAreNeverRetried"))
        assertEquals("ApiError 500 after 1 call(s)", result("otherStatusesAreNotRetried"))
        assertEquals("ApiError 404 after 1 call(s)", result("notFoundIsNotRetried"))
        assertEquals("ApiError 503 after 1 call(s)", result("oneCallCanOptOut"))
        assertEquals("ok {\"status\":200} after 2 call(s)", result("oneCallCanOptIn"))
        assertEquals("ok {\"status\":200} after 2 call(s)", result("trueUsesTheDefaults"))
        assertEquals("ApiError 503 after 3 call(s)", result("reportsOnlyTheLastFailure"))
        assertEquals(
            1,
            results
                .getValue("reported")
                .jsonPrimitive.content
                .toInt(),
        )
        assertEquals(listOf(100, 200, 250, 250), results.getValue("waits").jsonArray.map { it.jsonPrimitive.content.toInt() })
        assertEquals("AbortError after 1 call(s)", result("stopsWhenAborted"))
    }

    @Test
    fun `a rate limit carries its wait, and is waited for once when retries are on`() {
        val results = runHarness()

        fun result(name: String) = results.getValue(name).jsonPrimitive.content
        assertEquals("wait 2000", result("limitError"))
        assertEquals("false", result("otherErrorIsNotALimit"))
        assertEquals("ApiError 429 after 1 call(s)", result("limitIsNotWaitedForByDefault"))
        assertEquals("ok {\"status\":201} after 2 call(s)", result("limitWaitsAndResendsWrites"))
        assertEquals("ApiError 429 after 2 call(s)", result("limitResendsOnlyOnce"))
        assertEquals("ApiError 429 after 1 call(s)", result("longLimitIsNotWaitedFor"))
        assertEquals("ok {\"status\":200} after 4 call(s)", result("limitDoesNotUseUpGetAttempts"))
        assertEquals("true", result("limitFromDate"))
        assertEquals("true", result("unreadableLimit"))
    }
}
