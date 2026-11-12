package io.github.nijasc.ktor.svelte.gradle

import org.gradle.api.GradleException
import java.io.File
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.security.MessageDigest
import java.time.Duration
import java.util.zip.ZipInputStream

internal const val BUN_RELEASES = "https://github.com/oven-sh/bun/releases/download"
private val VERSION = Regex("""\d+\.\d+\.\d+""")

internal fun bunPlatform(
    osName: String = System.getProperty("os.name"),
    osArch: String = System.getProperty("os.arch"),
    isMusl: Boolean = File("/etc/alpine-release").isFile,
): String {
    val os =
        when {
            osName.startsWith("Windows") -> "windows"
            osName.startsWith("Mac") -> "darwin"
            osName.startsWith("Linux") -> "linux"
            else -> throw GradleException("ktor-svelte can't download Bun for $osName. Install Bun yourself and remove svelte.bunVersion.")
        }
    val arch =
        when (osArch.lowercase()) {
            "amd64", "x86_64" -> "x64"
            "aarch64", "arm64" -> "aarch64"
            else -> throw GradleException("ktor-svelte can't download Bun for $osArch. Install Bun yourself and remove svelte.bunVersion.")
        }
    return "bun-$os-$arch" + if (os == "linux" && isMusl) "-musl" else ""
}

internal fun checksumFor(
    shasums: String,
    fileName: String,
): String? =
    shasums
        .lineSequence()
        .map { it.trim().split(Regex("\\s+")) }
        .firstOrNull { it.size == 2 && it[1].removePrefix("*") == fileName }
        ?.first()
        ?.lowercase()

internal class BunDownload(
    private val cacheDirectory: File,
    private val baseUrl: String = BUN_RELEASES,
    private val platform: String = bunPlatform(),
) {
    private val executableName = if (platform.startsWith("bun-windows")) "bun.exe" else "bun"

    fun executable(version: String): File {
        if (!VERSION.matches(version)) {
            throw GradleException("svelte.bunVersion must be an exact version such as 1.3.14, but was '$version'.")
        }
        val target = cacheDirectory.resolve("$version/$platform/$executableName")
        if (target.isFile) return target
        download(version, target)
        return target
    }

    private fun download(
        version: String,
        target: File,
    ) {
        val release = "$baseUrl/bun-v$version"
        val archiveName = "$platform.zip"
        val client =
            HttpClient
                .newBuilder()
                .followRedirects(HttpClient.Redirect.NORMAL)
                .connectTimeout(Duration.ofSeconds(30))
                .build()
        val expected =
            checksumFor(fetch(client, "$release/SHASUMS256.txt").decodeToString(), archiveName)
                ?: throw GradleException("ktor-svelte found no checksum for $archiveName in Bun $version's SHASUMS256.txt.")
        val archive = fetch(client, "$release/$archiveName")
        val actual = MessageDigest.getInstance("SHA-256").digest(archive).joinToString("") { "%02x".format(it) }
        if (actual != expected) {
            throw GradleException("The download of Bun $version for $platform does not match its published checksum. Try again later.")
        }
        val binary =
            unzipEntry(archive, "$platform/$executableName")
                ?: throw GradleException("Bun $version's $archiveName has no $platform/$executableName.")
        target.parentFile.mkdirs()
        val temporary = File.createTempFile("bun", ".tmp", target.parentFile)
        temporary.writeBytes(binary)
        temporary.setExecutable(true)
        Files.move(temporary.toPath(), target.toPath(), StandardCopyOption.REPLACE_EXISTING, StandardCopyOption.ATOMIC_MOVE)
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
            throw GradleException("ktor-svelte could not download $url: HTTP ${response.statusCode()}. Check svelte.bunVersion.")
        }
        return response.body()
    }

    private fun unzipEntry(
        archive: ByteArray,
        name: String,
    ): ByteArray? {
        ZipInputStream(archive.inputStream()).use { zip ->
            while (true) {
                val entry = zip.nextEntry ?: return null
                if (entry.name == name) return zip.readBytes()
            }
        }
    }
}
