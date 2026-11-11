package io.github.nijasc.ktor.svelte.gradle

import groovy.lang.MissingPropertyException
import org.gradle.api.GradleException
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertIs
import kotlin.test.assertNull

class UnknownSettingTest {
    @Test
    fun `setting names come from the public getters and methods`() {
        assertEquals(listOf("debugPort", "openBrowser", "port", "script"), settingNames(SvelteDevSettings::class.java))
        assertEquals(true, "libraries" in settingNames(SvelteExtension::class.java))
    }

    @Test
    fun `close names are suggested, distant ones are not`() {
        val names = settingNames(SvelteExtension::class.java)
        assertEquals("frontendDir", closestName("fronendDir", names))
        assertEquals("precompress", closestName("Precompres", names))
        assertNull(closestName("description", names))
        assertNull(closestName("buildDir", names))
    }

    @Test
    fun `only likely typos stop the build, other names fall through to the project`() {
        assertIs<GradleException>(unknownSetting(SvelteExtension::class.java, "svelte", "outputDr"))
        assertIs<MissingPropertyException>(unknownSetting(SvelteExtension::class.java, "svelte", "version"))
    }
}
