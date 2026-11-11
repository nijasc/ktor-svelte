package io.github.nijasc.ktor.svelte.gradle.tasks

import java.security.MessageDigest
import java.util.Base64
import kotlin.test.Test
import kotlin.test.assertEquals

class InlineScriptsTest {
    private fun expected(script: String) =
        "'sha256-${Base64.getEncoder().encodeToString(MessageDigest.getInstance("SHA-256").digest(script.toByteArray()))}'"

    @Test
    fun `inline scripts are hashed and external ones are skipped`() {
        val html =
            """
            <script src="/_app/start.js"></script>
            <script type="module">
              start()
            </script>
            <SCRIPT data-x='a>b'>theme()</SCRIPT>
            <script>theme()</script>
            """.trimIndent()
        assertEquals(listOf(expected("\n  start()\n"), expected("theme()")), inlineScriptHashes(html))
    }

    @Test
    fun `non ascii text is hashed as utf 8`() {
        assertEquals(listOf(expected("say('grüße')")), inlineScriptHashes("<script>say('grüße')</script>"))
    }
}
