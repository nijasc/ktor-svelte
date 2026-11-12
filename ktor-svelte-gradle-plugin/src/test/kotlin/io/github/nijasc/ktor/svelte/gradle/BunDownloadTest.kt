package io.github.nijasc.ktor.svelte.gradle

import com.sun.net.httpserver.HttpServer
import org.gradle.api.GradleException
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.io.TempDir
import java.io.ByteArrayOutputStream
import java.io.File
import java.net.InetAddress
import java.net.InetSocketAddress
import java.security.MessageDigest
import java.util.concurrent.CopyOnWriteArrayList
import java.util.zip.ZipEntry
import java.util.zip.ZipOutputStream
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNull
import kotlin.test.assertTrue

class BunDownloadTest {
    @TempDir
    lateinit var cache: File

    private lateinit var server: HttpServer
    private lateinit var baseUrl: String
    private val requests = CopyOnWriteArrayList<String>()
    private var archive = zip("bun-linux-x64/bun" to "fake bun")
    private var checksum: String? = null

    @BeforeEach
    fun start() {
        server = HttpServer.create(InetSocketAddress(InetAddress.getLoopbackAddress(), 0), 0)
        server.createContext("/") { exchange ->
            requests += exchange.requestURI.path
            val body =
                when (exchange.requestURI.path) {
                    "/bun-v1.3.14/SHASUMS256.txt" ->
                        "${sha256(
                            zip("x" to "other"),
                        )}  bun-darwin-x64.zip\n${checksum ?: sha256(archive)}  bun-linux-x64.zip\n".toByteArray()
                    "/bun-v1.3.14/bun-linux-x64.zip" -> archive
                    else -> null
                }
            if (body == null) {
                exchange.sendResponseHeaders(404, -1)
            } else {
                exchange.sendResponseHeaders(200, body.size.toLong())
                exchange.responseBody.use { it.write(body) }
            }
            exchange.close()
        }
        server.start()
        baseUrl = "http://${server.address.address.hostAddress}:${server.address.port}"
    }

    @AfterEach
    fun stop() {
        server.stop(0)
    }

    private fun download() = BunDownload(cache, baseUrl, "bun-linux-x64")

    @Test
    fun `downloads, verifies and unpacks the pinned version once`() {
        val bun = download().executable("1.3.14")
        assertEquals(File(cache, "1.3.14/bun-linux-x64/bun"), bun)
        assertEquals("fake bun", bun.readText())
        assertTrue(bun.canExecute())

        download().executable("1.3.14")
        assertEquals(listOf("/bun-v1.3.14/SHASUMS256.txt", "/bun-v1.3.14/bun-linux-x64.zip"), requests.toList())
    }

    @Test
    fun `refuses an archive that does not match its checksum`() {
        checksum = "0".repeat(64)
        val failure = assertFailsWith<GradleException> { download().executable("1.3.14") }
        assertContains(failure.message.orEmpty(), "does not match its published checksum")
        assertTrue(cache.listFiles().orEmpty().none { it.walk().any { file -> file.name == "bun" } })
    }

    @Test
    fun `reports a version that does not exist and rejects ranges`() {
        assertContains(assertFailsWith<GradleException> { download().executable("1.3.99") }.message.orEmpty(), "HTTP 404")
        assertContains(assertFailsWith<GradleException> { download().executable("1.x") }.message.orEmpty(), "exact version")
    }

    @Test
    fun `platforms map to Bun's release names`() {
        assertEquals("bun-windows-x64", bunPlatform("Windows 11", "amd64", isMusl = false))
        assertEquals("bun-darwin-aarch64", bunPlatform("Mac OS X", "aarch64", isMusl = false))
        assertEquals("bun-linux-x64-musl", bunPlatform("Linux", "x86_64", isMusl = true))
        assertFailsWith<GradleException> { bunPlatform("FreeBSD", "amd64", isMusl = false) }
    }

    @Test
    fun `checksums are read from SHASUMS256 lines`() {
        val sums = "abc  bun-linux-x64.zip\nDEF *bun-windows-x64.zip\n"
        assertEquals("abc", checksumFor(sums, "bun-linux-x64.zip"))
        assertEquals("def", checksumFor(sums, "bun-windows-x64.zip"))
        assertNull(checksumFor(sums, "bun-darwin-x64.zip"))
    }

    private fun zip(vararg entries: Pair<String, String>): ByteArray {
        val bytes = ByteArrayOutputStream()
        ZipOutputStream(bytes).use { zip ->
            entries.forEach { (name, content) ->
                zip.putNextEntry(ZipEntry(name))
                zip.write(content.toByteArray())
                zip.closeEntry()
            }
        }
        return bytes.toByteArray()
    }

    private fun sha256(bytes: ByteArray): String = MessageDigest.getInstance("SHA-256").digest(bytes).joinToString("") { "%02x".format(it) }
}
