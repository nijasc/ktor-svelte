package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import java.net.URLClassLoader
import java.nio.file.Files
import java.time.Instant
import kotlin.io.path.createDirectories
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertEquals

class BuildInfoTest {
    private fun classLoaderWith(properties: String?): ClassLoader {
        val root = Files.createTempDirectory("ktor-svelte-build-info")
        if (properties != null) {
            val file = root.resolve("ktor-svelte/build-info.properties")
            file.parent.createDirectories()
            file.writeText(properties)
        }
        return URLClassLoader(arrayOf(root.toUri().toURL()), null)
    }

    private fun app(
        config: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                config()
            }
            routing { get("/api/version") { call.respondText(call.application.buildInfo.toString()) } }
        }
        block()
    }

    @Test
    fun `version, commit and time are read from the build's resource`() {
        val info =
            readBuildInfo(
                classLoaderWith("version=1.4.0\ncommit=3f2b8c1e5d474a1b9c3e8a7d6f5e4b3c2a1f0e9d\ntime=2026-11-16T09\\:30\\:00+01\\:00\n"),
            )
        assertEquals(
            BuildInfo("1.4.0", "3f2b8c1e5d474a1b9c3e8a7d6f5e4b3c2a1f0e9d", Instant.parse("2026-11-16T08:30:00Z")),
            info,
        )
        assertEquals("3f2b8c1", info.shortCommit)
        assertEquals(
            """{"version":"1.4.0","commit":"3f2b8c1e5d474a1b9c3e8a7d6f5e4b3c2a1f0e9d","time":"2026-11-16T08:30:00Z"}""",
            info.toJson(),
        )
    }

    @Test
    fun `what the build did not know is simply absent`() {
        assertEquals(BuildInfo(null, null, null), readBuildInfo(classLoaderWith(null)))
        assertEquals(BuildInfo("2.0", null, null), readBuildInfo(classLoaderWith("version=2.0\ncommit=\ntime=yesterday\n")))
        assertEquals("""{"version":"2.0"}""", BuildInfo("2.0", null, null).toJson())
        assertEquals(null, BuildInfo(null, null, null).shortCommit)
    }

    @Test
    fun `the app can read its build info, and it is not public unless asked`() =
        app {
            assertEquals("BuildInfo(version=null, commit=null, time=null)", client.get("/api/version").bodyAsText())
            assertEquals(HttpStatusCode.NotFound, client.get("/_ktor-svelte/build.json").status)
        }

    @Test
    fun `the build info endpoint answers JSON once it is turned on`() =
        app({ publicBuildInfo = true }) {
            val response = client.get("/_ktor-svelte/build.json")
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("{}", response.bodyAsText())
            assertEquals("no-cache", response.headers["Cache-Control"])
        }
}
