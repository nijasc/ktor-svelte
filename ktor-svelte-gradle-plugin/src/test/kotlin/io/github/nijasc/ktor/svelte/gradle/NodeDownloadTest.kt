package io.github.nijasc.ktor.svelte.gradle

import com.sun.net.httpserver.HttpServer
import io.github.nijasc.ktor.svelte.gradle.tasks.prependedPath
import io.github.nijasc.ktor.svelte.gradle.tasks.toolCommand
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
import java.util.zip.GZIPOutputStream
import java.util.zip.ZipEntry
import java.util.zip.ZipOutputStream
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class NodeDownloadTest {
    @TempDir
    lateinit var cache: File

    private lateinit var server: HttpServer
    private lateinit var baseUrl: String
    private val requests = CopyOnWriteArrayList<String>()
    private val longPath = "lib/node_modules/npm/" + "deeply/".repeat(20) + "file.js"
    private val tarball =
        gzip(
            tar(
                TarEntry("node-v22.12.0-linux-x64/", directory = true),
                TarEntry("node-v22.12.0-linux-x64/bin/node", "fake node", executable = true),
                TarEntry("node-v22.12.0-linux-x64/lib/node_modules/npm/bin/npm-cli.js", "npm cli"),
                TarEntry("node-v22.12.0-linux-x64/$longPath", "long", paxPath = true),
                TarEntry("node-v22.12.0-linux-x64/bin/npm", linkTarget = "../lib/node_modules/npm/bin/npm-cli.js"),
            ),
        )
    private val zipball =
        zip(
            "node-v22.12.0-win-x64/node.exe" to "fake node",
            "node-v22.12.0-win-x64/node_modules/npm/bin/npm-cli.js" to "npm cli",
        )
    private var checksum: String? = null

    @BeforeEach
    fun start() {
        server = HttpServer.create(InetSocketAddress(InetAddress.getLoopbackAddress(), 0), 0)
        server.createContext("/") { exchange ->
            requests += exchange.requestURI.path
            val body =
                when (exchange.requestURI.path) {
                    "/v22.12.0/SHASUMS256.txt" ->
                        (
                            "${checksum ?: sha256(tarball)}  node-v22.12.0-linux-x64.tar.gz\n" +
                                "${sha256(zipball)}  node-v22.12.0-win-x64.zip\n"
                        ).toByteArray()
                    "/v22.12.0/node-v22.12.0-linux-x64.tar.gz" -> tarball
                    "/v22.12.0/node-v22.12.0-win-x64.zip" -> zipball
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

    @Test
    fun `downloads, verifies and unpacks the pinned Node once`() {
        val node = NodeDownload(cache, baseUrl, "linux-x64").installation("22.12.0")
        assertEquals(File(cache, "22.12.0/linux-x64/bin/node"), node.node)
        assertEquals("fake node", node.node.readText())
        assertTrue(node.node.canExecute())
        assertEquals("npm cli", node.npmCli.readText())
        assertEquals("long", File(cache, "22.12.0/linux-x64/$longPath").readText())
        assertEquals(File(cache, "22.12.0/linux-x64/bin"), node.binDirectory)

        NodeDownload(cache, baseUrl, "linux-x64").installation("22.12.0")
        assertEquals(listOf("/v22.12.0/SHASUMS256.txt", "/v22.12.0/node-v22.12.0-linux-x64.tar.gz"), requests.toList())
    }

    @Test
    fun `the Windows build is a zip with node and npm at the top`() {
        val node = NodeDownload(cache, baseUrl, "win-x64").installation("22.12.0")
        assertEquals(File(cache, "22.12.0/win-x64/node.exe"), node.node)
        assertEquals("npm cli", node.npmCli.readText())
        assertEquals(File(cache, "22.12.0/win-x64"), node.binDirectory)
    }

    @Test
    fun `refuses an archive that does not match its checksum and keeps nothing`() {
        checksum = "0".repeat(64)
        val failure = assertFailsWith<GradleException> { NodeDownload(cache, baseUrl, "linux-x64").installation("22.12.0") }
        assertContains(failure.message.orEmpty(), "does not match its published checksum")
        assertFalse(File(cache, "22.12.0/linux-x64").exists())
    }

    @Test
    fun `reports a version that does not exist and rejects ranges`() {
        val download = NodeDownload(cache, baseUrl, "linux-x64")
        assertContains(assertFailsWith<GradleException> { download.installation("22.99.0") }.message.orEmpty(), "HTTP 404")
        assertContains(assertFailsWith<GradleException> { download.installation("22") }.message.orEmpty(), "exact version")
    }

    @Test
    fun `platforms map to Node's release names`() {
        assertEquals("win-x64", nodePlatform("Windows 11", "amd64", isMusl = false))
        assertEquals("darwin-arm64", nodePlatform("Mac OS X", "aarch64", isMusl = false))
        assertEquals("linux-x64", nodePlatform("Linux", "x86_64", isMusl = false))
        assertContains(assertFailsWith<GradleException> { nodePlatform("Linux", "x86_64", isMusl = true) }.message.orEmpty(), "Alpine")
    }

    @Test
    fun `npm runs from the pinned Node, and every tool finds that Node first on PATH`() {
        val home = File(cache, "22.12.0/linux-x64")
        val node = NodeInstallation(home, windows = false)
        val npm = toolCommand(FrontendTool(PackageManager.Npm), listOf("ci"), node) { error("not on PATH") }
        assertEquals(listOf(node.node.absolutePath, node.npmCli.absolutePath, "ci"), npm.arguments)
        assertEquals(node.binDirectory, npm.pathPrefix)

        val pnpm = toolCommand(FrontendTool(PackageManager.Pnpm), listOf("install"), node) { File("/usr/bin/pnpm") }
        assertEquals(listOf(File("/usr/bin/pnpm").absolutePath, "install"), pnpm.arguments)
        assertEquals(node.binDirectory, pnpm.pathPrefix)

        assertEquals(null, toolCommand(FrontendTool(PackageManager.Npm), listOf("ci"), null) { File("/usr/bin/npm") }.pathPrefix)

        val path = prependedPath(mapOf("Path" to "C:\\Windows"), File("/node/bin"))
        assertEquals(setOf("Path"), path.keys)
        assertEquals(File("/node/bin").absolutePath + File.pathSeparator + "C:\\Windows", path["Path"])
    }

    private class TarEntry(
        val name: String,
        val content: String = "",
        val directory: Boolean = false,
        val executable: Boolean = false,
        val paxPath: Boolean = false,
        val linkTarget: String? = null,
    )

    private fun tar(vararg entries: TarEntry): ByteArray {
        val bytes = ByteArrayOutputStream()
        entries.forEach { entry ->
            val body = entry.content.toByteArray()
            if (entry.paxPath) {
                val record = "path=${entry.name}\n"
                var length = record.length + 3
                while ("$length $record".length != length) length = "$length $record".length
                val pax = "$length $record".toByteArray()
                bytes.write(header("PaxHeader", pax.size, 'x', "644"))
                bytes.write(padded(pax))
            }
            val type =
                when {
                    entry.directory -> '5'
                    entry.linkTarget != null -> '2'
                    else -> '0'
                }
            val name = if (entry.paxPath) entry.name.takeLast(99) else entry.name
            bytes.write(header(name, body.size, type, if (entry.executable) "755" else "644", entry.linkTarget))
            bytes.write(padded(body))
        }
        bytes.write(ByteArray(1024))
        return bytes.toByteArray()
    }

    private fun header(
        name: String,
        size: Int,
        type: Char,
        mode: String,
        linkTarget: String? = null,
    ): ByteArray {
        val header = ByteArray(512)
        name.toByteArray().copyInto(header, 0)
        "0000$mode\u0000".toByteArray().copyInto(header, 100)
        "%011o\u0000".format(size).toByteArray().copyInto(header, 124)
        header[156] = type.code.toByte()
        linkTarget?.toByteArray()?.copyInto(header, 157)
        "ustar\u000000".toByteArray().copyInto(header, 257)
        return header
    }

    private fun padded(body: ByteArray): ByteArray = body.copyOf((body.size + 511) / 512 * 512)

    private fun gzip(bytes: ByteArray): ByteArray {
        val out = ByteArrayOutputStream()
        GZIPOutputStream(out).use { it.write(bytes) }
        return out.toByteArray()
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
