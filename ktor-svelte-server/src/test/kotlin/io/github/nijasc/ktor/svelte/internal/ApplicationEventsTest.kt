package io.github.nijasc.ktor.svelte.internal

import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationStarted
import io.ktor.server.application.ApplicationStopped
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertEquals

class ApplicationEventsTest {
    @Test
    fun `handlers ignore other applications and stop with their own`() {
        val seen = mutableListOf<Application>()
        lateinit var app: Application
        testApplication {
            application {
                app = this
                onOwn(ApplicationStarted) { seen += it }
            }
            startApplication()
            assertEquals(listOf(app), seen)

            lateinit var other: Application
            testApplication {
                application { other = this }
                startApplication()
            }
            app.monitor.raise(ApplicationStarted, other)
            assertEquals(listOf(app), seen)

            app.monitor.raise(ApplicationStopped, app)
            app.monitor.raise(ApplicationStarted, app)
            assertEquals(listOf(app), seen)
        }
    }
}
