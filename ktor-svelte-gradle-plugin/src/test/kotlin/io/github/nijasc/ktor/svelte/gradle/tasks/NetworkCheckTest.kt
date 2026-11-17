package io.github.nijasc.ktor.svelte.gradle.tasks

import com.sun.net.httpserver.HttpServer
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.net.InetAddress
import java.net.InetSocketAddress
import java.net.ServerSocket
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue

class NetworkCheckTest {
    @TempDir
    lateinit var dir: File

    private val frontend: File get() = dir.resolve("frontend").apply { mkdirs() }
    private val home: File get() = dir.resolve("home").apply { mkdirs() }

    private fun settings(environment: Map<String, String> = emptyMap()) = networkSettings(frontend, { environment[it] }, home)

    private fun findings(
        settings: NetworkSettings,
        answer: RegistryAnswer,
    ) = networkFindings(settings) { answer }

    @Test
    fun `without settings the public registry is used directly`() {
        val settings = settings()
        assertEquals(Setting(DEFAULT_REGISTRY, "default"), settings.registry)
        assertNull(settings.proxy)
        assertEquals(emptyList(), settings.certificates)
        assertEquals(
            "Network: registry https://registry.npmjs.org/ (default), no proxy, no extra certificates",
            findings(settings, RegistryAnswer.Answered(200)).first().message,
        )
    }

    @Test
    fun `settings are read from the environment before the project's npmrc and the user's`() {
        home.resolve(".npmrc").writeText("registry=https://user.example/\nproxy=http://user-proxy:3128\n")
        frontend.resolve(".npmrc").writeText(
            listOf(
                "# company mirror",
                "registry=https://npm.corp.example/",
                "https-proxy=http://bob:secret@proxy.corp:8080",
                "cafile=/etc/corp.pem",
                "strict-ssl=false",
            ).joinToString("\n"),
        )
        val fromFiles = settings()
        assertEquals(Setting("https://npm.corp.example/", "registry in frontend/.npmrc"), fromFiles.registry)
        assertEquals(Setting("http://bob:secret@proxy.corp:8080", "https-proxy in frontend/.npmrc"), fromFiles.proxy)
        assertEquals(listOf(Setting("/etc/corp.pem", "cafile in frontend/.npmrc")), fromFiles.certificates)
        assertEquals("strict-ssl in frontend/.npmrc", fromFiles.strictSslOff?.source)

        val fromEnvironment = settings(mapOf("npm_config_registry" to "https://env.example/", "NODE_EXTRA_CA_CERTS" to "/ca.pem"))
        assertEquals(Setting("https://env.example/", "npm_config_registry"), fromEnvironment.registry)
        assertEquals("NODE_EXTRA_CA_CERTS", fromEnvironment.certificates.first().source)

        val summary = findings(fromFiles, RegistryAnswer.Answered(200)).map { it.message }
        assertContains(summary.first(), "proxy http://***@proxy.corp:8080 (https-proxy in frontend/.npmrc)")
        assertTrue(summary.none { "secret" in it })
        assertTrue(summary.any { it.startsWith("strict-ssl=false") })
    }

    @Test
    fun `the registry of bunfig and the proxy from the environment are found`() {
        frontend.resolve("bunfig.toml").writeText("[install]\nregistry = \"https://bun.corp.example/\"\n")
        val settings = settings(mapOf("HTTPS_PROXY" to "http://proxy:8080"))
        assertEquals(Setting("https://bun.corp.example/", "registry in frontend/bunfig.toml"), settings.registry)
        assertEquals(Setting("http://proxy:8080", "HTTPS_PROXY"), settings.proxy)
    }

    @Test
    fun `NO_PROXY takes the registry out of the proxy`() {
        frontend.resolve(".npmrc").writeText("registry=https://npm.corp.example/\n")
        assertNull(settings(mapOf("HTTPS_PROXY" to "http://proxy:8080", "NO_PROXY" to "localhost,.corp.example")).proxy)
        assertTrue(bypassesProxy("npm.corp.example", "corp.example"))
        assertTrue(bypassesProxy("anything", "*"))
        assertEquals(false, bypassesProxy("registry.npmjs.org", "corp.example,localhost"))
    }

    @Test
    fun `each failure says what to set`() {
        val direct = settings()
        val proxied = settings(mapOf("HTTPS_PROXY" to "http://proxy:8080"))

        fun reach(
            settings: NetworkSettings,
            answer: RegistryAnswer,
        ) = findings(settings, answer)[1]

        assertEquals(Severity.OK, reach(direct, RegistryAnswer.Answered(200)).severity)
        assertContains(reach(direct, RegistryAnswer.Failed(NetworkFailure.TIMEOUT, "")).message, "set HTTPS_PROXY=http://host:port")
        assertContains(reach(proxied, RegistryAnswer.Failed(NetworkFailure.REFUSED, "")).message, "through the proxy http://proxy:8080")
        assertContains(reach(direct, RegistryAnswer.Failed(NetworkFailure.CERTIFICATE, "")).message, "Set NODE_EXTRA_CA_CERTS")
        assertContains(reach(direct, RegistryAnswer.Answered(407)).message, "proxy wants credentials")
        assertContains(reach(direct, RegistryAnswer.Answered(401)).message, "_authToken")
        assertEquals(Severity.WARN, reach(direct, RegistryAnswer.Failed(NetworkFailure.UNKNOWN_HOST, "")).severity)
    }

    @Test
    fun `offline the registry is not contacted`() {
        val result = networkFindings(settings(), null)
        assertEquals("Gradle runs offline, so the registry was not contacted", result[1].message)
    }

    @Test
    fun `the probe asks the registry and tells a refused connection apart`() {
        val server = HttpServer.create(InetSocketAddress(InetAddress.getLoopbackAddress(), 0), 0)
        server.createContext("/") { exchange ->
            exchange.sendResponseHeaders(200, -1)
            exchange.close()
        }
        server.start()
        try {
            val address = "http://${server.address.address.hostAddress}:${server.address.port}/"
            assertEquals(RegistryAnswer.Answered(200), probeRegistry(settings(mapOf("npm_config_registry" to address))))
        } finally {
            server.stop(0)
        }
        val closed = ServerSocket(0, 1, InetAddress.getLoopbackAddress()).use { it.localPort }
        val answer = probeRegistry(settings(mapOf("npm_config_registry" to "http://127.0.0.1:$closed/")))
        assertEquals(NetworkFailure.REFUSED, (answer as RegistryAnswer.Failed).failure)
    }
}
