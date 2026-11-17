package io.github.nijasc.ktor.svelte.gradle

import org.gradle.api.GradleException
import java.io.File
import java.io.InputStream
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.security.MessageDigest
import java.time.Duration
import java.util.zip.GZIPInputStream
import java.util.zip.ZipInputStream

internal const val NODE_RELEASES = "https://nodejs.org/dist"
private val NODE_VERSION = Regex("""\d+\.\d+\.\d+""")
private const val TAR_BLOCK = 512
private const val COMPLETE_MARKER = ".complete"
private const val INSTALL_NODE_YOURSELF = "Install Node yourself and remove svelte.nodeVersion."

internal fun nodePlatform(
    osName: String = System.getProperty("os.name"),
    osArch: String = System.getProperty("os.arch"),
    isMusl: Boolean = File("/etc/alpine-release").isFile,
): String {
    val os =
        when {
            osName.startsWith("Windows") -> "win"
            osName.startsWith("Mac") -> "darwin"
            osName.startsWith("Linux") && !isMusl -> "linux"
            osName.startsWith("Linux") ->
                throw GradleException("Node publishes no build for Alpine. Install Node with apk and remove svelte.nodeVersion.")
            else -> throw GradleException("ktor-svelte can't download Node for $osName. $INSTALL_NODE_YOURSELF")
        }
    val arch =
        when (osArch.lowercase()) {
            "amd64", "x86_64" -> "x64"
            "aarch64", "arm64" -> "arm64"
            else -> throw GradleException("ktor-svelte can't download Node for $osArch. $INSTALL_NODE_YOURSELF")
        }
    return "$os-$arch"
}

internal class NodeInstallation(
    val home: File,
    private val windows: Boolean,
) {
    val binDirectory: File get() = if (windows) home else home.resolve("bin")
    val node: File get() = binDirectory.resolve(if (windows) "node.exe" else "node")
    val npmCli: File get() = home.resolve(if (windows) "node_modules/npm/bin/npm-cli.js" else "lib/node_modules/npm/bin/npm-cli.js")
}

internal class NodeDownload(
    private val cacheDirectory: File,
    private val baseUrl: String = NODE_RELEASES,
    private val platform: String = nodePlatform(),
) {
    private val windows = platform.startsWith("win-")

    fun installation(version: String): NodeInstallation {
        if (!NODE_VERSION.matches(version)) {
            throw GradleException("svelte.nodeVersion must be an exact version such as 22.12.0, but was '$version'.")
        }
        val home = cacheDirectory.resolve("$version/$platform")
        if (!home.resolve(COMPLETE_MARKER).isFile) download(version, home)
        return NodeInstallation(home, windows)
    }

    private fun download(
        version: String,
        home: File,
    ) {
        val release = "$baseUrl/v$version"
        val folder = "node-v$version-$platform"
        val archiveName = if (windows) "$folder.zip" else "$folder.tar.gz"
        val client =
            HttpClient
                .newBuilder()
                .followRedirects(HttpClient.Redirect.NORMAL)
                .connectTimeout(Duration.ofSeconds(30))
                .build()
        val expected =
            checksumFor(fetch(client, "$release/SHASUMS256.txt").decodeToString(), archiveName)
                ?: throw GradleException("ktor-svelte found no checksum for $archiveName in Node $version's SHASUMS256.txt.")
        val archive = fetch(client, "$release/$archiveName")
        val actual = MessageDigest.getInstance("SHA-256").digest(archive).joinToString("") { "%02x".format(it) }
        if (actual != expected) {
            throw GradleException("The download of Node $version for $platform does not match its published checksum. Try again later.")
        }
        home.parentFile.mkdirs()
        val temporary = Files.createTempDirectory(home.parentFile.toPath(), "node").toFile()
        try {
            if (windows) unzip(archive, "$folder/", temporary) else untar(GZIPInputStream(archive.inputStream()), "$folder/", temporary)
            temporary.resolve(COMPLETE_MARKER).writeText(version)
            home.deleteRecursively()
            Files.move(temporary.toPath(), home.toPath(), StandardCopyOption.ATOMIC_MOVE)
        } finally {
            temporary.deleteRecursively()
        }
    }

    private fun fetch(
        client: HttpClient,
        url: String,
    ): ByteArray {
        val request =
            HttpRequest
                .newBuilder(URI.create(url))
                .timeout(Duration.ofMinutes(5))
                .build()
        val response =
            try {
                client.send(request, HttpResponse.BodyHandlers.ofByteArray())
            } catch (failure: java.io.IOException) {
                throw GradleException("ktor-svelte could not download $url: ${failure.message}", failure)
            }
        if (response.statusCode() != 200) {
            throw GradleException("ktor-svelte could not download $url: HTTP ${response.statusCode()}. Check svelte.nodeVersion.")
        }
        return response.body()
    }

    private fun unzip(
        archive: ByteArray,
        prefix: String,
        target: File,
    ) {
        ZipInputStream(archive.inputStream()).use { zip ->
            while (true) {
                val entry = zip.nextEntry ?: return
                val relative = entry.name.removePrefix(prefix).takeIf { entry.name.startsWith(prefix) && it.isNotEmpty() } ?: continue
                val file = safeTarget(target, relative)
                if (entry.isDirectory) {
                    file.mkdirs()
                } else {
                    file.parentFile.mkdirs()
                    file.outputStream().use { zip.copyTo(it) }
                }
            }
        }
    }
}

internal fun untar(
    input: InputStream,
    prefix: String,
    target: File,
) {
    input.use { stream ->
        var longName: String? = null
        while (true) {
            val header = stream.readNBytes(TAR_BLOCK)
            if (header.size < TAR_BLOCK || header.all { it.toInt() == 0 }) return
            val size = octal(header, 124, 12)
            val type = header[156].toInt().toChar()
            val name = longName ?: tarName(header)
            longName = null
            val padded = (size + TAR_BLOCK - 1) / TAR_BLOCK * TAR_BLOCK
            when (type) {
                'L' -> {
                    longName = String(stream.readNBytes(size.toInt()), Charsets.UTF_8).trimEnd('\u0000')
                    stream.skipNBytes(padded - size)
                }
                'x' -> {
                    val pax = String(stream.readNBytes(size.toInt()), Charsets.UTF_8)
                    longName = Regex("""\d+ path=([^\n]*)\n""").find(pax)?.groupValues?.get(1)
                    stream.skipNBytes(padded - size)
                }
                '0', '\u0000', '7' -> {
                    val relative = name.removePrefix(prefix).takeIf { name.startsWith(prefix) && it.isNotEmpty() }
                    if (relative == null) {
                        stream.skipNBytes(padded)
                    } else {
                        val file = safeTarget(target, relative)
                        file.parentFile.mkdirs()
                        file.writeBytes(stream.readNBytes(size.toInt()))
                        stream.skipNBytes(padded - size)
                        if (octal(header, 100, 8) and 0b001_001_001 != 0L) file.setExecutable(true)
                    }
                }
                '5' -> {
                    name.removePrefix(prefix).takeIf { name.startsWith(prefix) && it.isNotEmpty() }?.let { safeTarget(target, it).mkdirs() }
                    stream.skipNBytes(padded)
                }
                else -> stream.skipNBytes(padded)
            }
        }
    }
}

private fun tarName(header: ByteArray): String {
    val name = field(header, 0, 100)
    val prefix = field(header, 345, 155)
    return if (prefix.isEmpty()) name else "$prefix/$name"
}

private fun field(
    header: ByteArray,
    offset: Int,
    length: Int,
): String {
    val end = (offset until offset + length).firstOrNull { header[it].toInt() == 0 } ?: (offset + length)
    return String(header, offset, end - offset, Charsets.UTF_8)
}

private fun octal(
    header: ByteArray,
    offset: Int,
    length: Int,
): Long = field(header, offset, length).trim().ifEmpty { "0" }.toLong(8)

private fun safeTarget(
    root: File,
    relative: String,
): File {
    val file = root.resolve(relative).normalize()
    if (!file.toPath().startsWith(root.normalize().toPath())) {
        throw GradleException("The Node archive holds a path outside its folder: $relative")
    }
    return file
}
