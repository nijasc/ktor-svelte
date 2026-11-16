package io.github.nijasc.ktor.svelte.internal.typescript

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.time.Duration.Companion.minutes

enum class SharedRole { ADMIN, MEMBER }

object SharedLimits {
    const val MAX_TITLE_LENGTH = 80
    const val PAGE_SIZE: Long = 20
    const val APP_NAME = "Notes"
    const val RATIO = 0.5
    const val OPEN = true
    val LABEL = Regex("[a-z0-9-]{1,20}")
    val sessionMillis = 30.minutes.inWholeMilliseconds
    val pauses = listOf(1.minutes, 2.minutes)
    val defaultRole = SharedRole.MEMBER
    val roles = SharedRole.entries.toList()
    val uploadTypes = setOf("image/png", "it's/quoted")
    val quotas = mapOf("free" to 3, "team-plan" to 50)
    val isBeta = false

    @JvmField
    val GREETING = "Hello"
    private const val SECRET = "not shared"
    internal val hidden = "internal stays out"

    fun helper(): Int = SECRET.length
}

object NothingToShare

object WithAThread {
    val worker = Thread()
}

object WithADuration {
    val timeout = 5.minutes
}

class SharedConstantsTest {
    @Test
    fun `an object's public constants and values are read with their Kotlin names`() {
        val holder = sharedHolder(SharedLimits)
        assertEquals("SharedLimits", holder.name)
        assertEquals(
            listOf(
                "APP_NAME",
                "GREETING",
                "LABEL",
                "MAX_TITLE_LENGTH",
                "OPEN",
                "PAGE_SIZE",
                "RATIO",
                "defaultRole",
                "isBeta",
                "pauses",
                "quotas",
                "roles",
                "sessionMillis",
                "uploadTypes",
            ),
            holder.values.keys.toList(),
        )
    }

    @Test
    fun `they become one typed constant object in TypeScript`() {
        val source = constantsSource(listOf(sharedHolder(SharedLimits)))
        val expected =
            listOf(
                "export const SharedLimits = {",
                "    APP_NAME: 'Notes',",
                "    GREETING: 'Hello',",
                "    LABEL: '[a-z0-9-]{1,20}',",
                "    MAX_TITLE_LENGTH: 80,",
                "    OPEN: true,",
                "    PAGE_SIZE: 20,",
                "    RATIO: 0.5,",
                "    defaultRole: 'MEMBER',",
                "    isBeta: false,",
                "    pauses: [60000, 120000],",
                "    quotas: {",
                "        free: 3,",
                "        'team-plan': 50",
                "    },",
                "    roles: ['ADMIN', 'MEMBER'],",
                "    sessionMillis: 1800000,",
                "    uploadTypes: ['image/png', 'it\\'s/quoted']",
                "} as const;",
                "",
            )
        assertEquals(expected.joinToString("\n"), source)
        assertFalse("SECRET" in source || "hidden" in source || "helper" in source)
    }

    @Test
    fun `a value TypeScript cannot hold is named in the error`() {
        val thread = assertFailsWith<IllegalArgumentException> { sharedHolder(WithAThread) }
        assertContains(thread.message.orEmpty(), "WithAThread.worker is a java.lang.Thread, which cannot be shared with TypeScript.")
        val nothing = assertFailsWith<IllegalArgumentException> { sharedHolder(NothingToShare) }
        assertContains(nothing.message.orEmpty(), "has no public constants")
        val duration = assertFailsWith<IllegalArgumentException> { sharedHolder(WithADuration) }
        assertContains(duration.message.orEmpty(), "WithADuration.timeout is a value class, such as a Duration")
        val unnamed = assertFailsWith<IllegalArgumentException> { sharedHolder(object {}) }
        assertContains(unnamed.message.orEmpty(), "takes named objects")
    }

    @Test
    fun `the client gains a constants file and exports it, and only when there is something to share`() {
        val openApi = """{"openapi":"3.1.0","paths":{},"components":{"schemas":{}}}"""
        val plain = TypeScriptGenerator(listOf("/api")).generate(openApi)
        assertFalse(CONSTANTS_FILE in plain)
        assertFalse("constants" in plain.getValue("index.ts"))

        val shared = TypeScriptGenerator(listOf("/api"), constants = listOf(sharedHolder(SharedLimits))).generate(openApi)
        assertContains(shared.getValue(CONSTANTS_FILE), "MAX_TITLE_LENGTH: 80,")
        assertContains(shared.getValue("index.ts"), "export * from './constants.js';")
        assertContains(shared.getValue(".gitattributes"), "constants.ts text eol=lf")
    }

    @Test
    fun `an object named like something the client already exports is refused`() {
        val openApi = """{"openapi":"3.1.0","paths":{},"components":{"schemas":{"SharedLimits":{"type":"object","properties":{}}}}}"""
        val failure =
            assertFailsWith<IllegalStateException> {
                TypeScriptGenerator(listOf("/api"), constants = listOf(sharedHolder(SharedLimits))).generate(openApi)
            }
        assertContains(failure.message.orEmpty(), "constants(SharedLimits) would be exported as 'SharedLimits'")
    }
}
