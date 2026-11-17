package io.github.nijasc.ktor.svelte.gradle.tasks

import org.gradle.api.GradleException
import java.io.BufferedInputStream
import java.io.ByteArrayOutputStream
import java.io.File
import java.io.InputStream
import java.io.OutputStream
import java.net.InetAddress
import java.net.ServerSocket
import java.net.Socket
import java.security.KeyStore
import java.util.concurrent.TimeUnit
import javax.net.ssl.KeyManagerFactory
import javax.net.ssl.SSLContext
import kotlin.concurrent.thread

internal const val DEV_STORE_PASSWORD = "ktor-svelte-dev"
internal const val FORWARDED_BY_DEV_PROXY = "X-Ktor-Svelte-Dev-Https"
private const val CA_FILE = "ca.p12"
private const val CA_CERTIFICATE = "ca.crt"
private const val SERVER_FILE = "server.p12"
private const val CA_DAYS = "3650"
private const val SERVER_DAYS = "397"
private const val KEYTOOL_SECONDS = 60L
private const val LARGEST_HEAD = 64 * 1024
private const val BUFFER = 16 * 1024
private const val HEX = 16
private val HOP_HEADERS = listOf("x-forwarded-proto", "x-forwarded-port", "x-forwarded-host", FORWARDED_BY_DEV_PROXY.lowercase())

internal class DevCertificate(
    val keyStore: File,
    val authority: File,
    val created: Boolean,
)

private fun keytool(
    executable: File,
    directory: File,
    vararg arguments: String,
) {
    val process = ProcessBuilder(listOf(executable.path) + arguments).directory(directory).redirectErrorStream(true).start()
    val output = process.inputStream.bufferedReader().readText()
    if (!process.waitFor(KEYTOOL_SECONDS, TimeUnit.SECONDS) || process.exitValue() != 0) {
        process.destroyForcibly()
        throw GradleException("keytool could not prepare the development certificate (${arguments.first()}): ${output.trim()}")
    }
}

internal fun devCertificate(
    directory: File,
    keytool: File,
    owner: String,
): DevCertificate {
    val keyStore = directory.resolve(SERVER_FILE)
    val authority = directory.resolve(CA_CERTIFICATE)
    if (keyStore.isFile && authority.isFile) return DevCertificate(keyStore, authority, created = false)
    directory.mkdirs()
    listOf(CA_FILE, CA_CERTIFICATE, SERVER_FILE, "server.csr", "server.crt").forEach { directory.resolve(it).delete() }
    val store = arrayOf("-storetype", "PKCS12", "-storepass", DEV_STORE_PASSWORD)
    val key = arrayOf("-keyalg", "RSA", "-keysize", "2048")
    val name = "CN=ktor-svelte development CA ($owner)"
    keytool(
        keytool,
        directory,
        "-genkeypair",
        "-alias",
        "ca",
        *key,
        "-dname",
        name,
        "-ext",
        "bc:c=ca:true",
        "-ext",
        "ku:c=keyCertSign,cRLSign",
        "-validity",
        CA_DAYS,
        "-keystore",
        CA_FILE,
        *store,
    )
    keytool(
        keytool,
        directory,
        "-genkeypair",
        "-alias",
        "server",
        *key,
        "-dname",
        "CN=localhost",
        "-validity",
        SERVER_DAYS,
        "-keystore",
        SERVER_FILE,
        *store,
    )
    keytool(keytool, directory, "-certreq", "-alias", "server", "-keystore", SERVER_FILE, *store, "-file", "server.csr")
    keytool(
        keytool,
        directory,
        "-gencert",
        "-alias",
        "ca",
        "-keystore",
        CA_FILE,
        *store,
        "-infile",
        "server.csr",
        "-outfile",
        "server.crt",
        "-ext",
        "san=dns:localhost,ip:127.0.0.1,ip:0:0:0:0:0:0:0:1",
        "-ext",
        "eku=serverAuth",
        "-ext",
        "ku:c=digitalSignature,keyEncipherment",
        "-validity",
        SERVER_DAYS,
        "-rfc",
    )
    keytool(keytool, directory, "-exportcert", "-alias", "ca", "-keystore", CA_FILE, *store, "-rfc", "-file", CA_CERTIFICATE)
    keytool(keytool, directory, "-importcert", "-alias", "ca", "-keystore", SERVER_FILE, *store, "-file", CA_CERTIFICATE, "-noprompt")
    keytool(keytool, directory, "-importcert", "-alias", "server", "-keystore", SERVER_FILE, *store, "-file", "server.crt", "-noprompt")
    listOf("server.csr", "server.crt").forEach { directory.resolve(it).delete() }
    return DevCertificate(keyStore, authority, created = true)
}

internal fun trustInstructions(
    osName: String,
    authority: File,
): String {
    val path = authority.absolutePath
    val os = osName.lowercase()
    val command =
        when {
            "win" in os -> "certutil -addstore -user Root \"$path\""
            "mac" in os -> "security add-trusted-cert -r trustRoot -k ~/Library/Keychains/login.keychain-db \"$path\""
            else -> "sudo cp \"$path\" /usr/local/share/ca-certificates/ktor-svelte-dev.crt && sudo update-ca-certificates"
        }
    return "Your browser does not know this certificate yet and will warn. To trust it on this computer, run once:\n  $command\n" +
        "Firefox keeps its own list: import $path under Settings, Certificates, Authorities.\n" +
        "ktor-svelte does not run this for you. Whoever has the files in ${authority.parentFile.absolutePath} can sign for any site " +
        "your browser then trusts, so keep that folder to yourself, and delete it and the trust entry when you stop using HTTPS in development."
}

internal class RequestHead(
    val lines: List<String>,
) {
    private fun header(name: String): String? =
        lines
            .drop(1)
            .firstOrNull { it.substringBefore(':').trim().equals(name, ignoreCase = true) }
            ?.substringAfter(':')
            ?.trim()

    val contentLength: Long get() = header("Content-Length")?.toLongOrNull() ?: 0
    val chunked: Boolean get() = header("Transfer-Encoding")?.contains("chunked", ignoreCase = true) == true
    val upgrades: Boolean get() = header("Upgrade") != null || lines.first().startsWith("CONNECT ")

    fun forwarded(port: Int): ByteArray {
        val kept = lines.drop(1).filterNot { it.substringBefore(':').trim().lowercase() in HOP_HEADERS }
        val added = listOf("X-Forwarded-Proto: https", "X-Forwarded-Port: $port", "$FORWARDED_BY_DEV_PROXY: 1")
        return (listOf(lines.first()) + added + kept).joinToString("\r\n", postfix = "\r\n\r\n").toByteArray(Charsets.ISO_8859_1)
    }
}

internal fun readHead(input: InputStream): RequestHead? {
    val bytes = ByteArrayOutputStream()
    var matched = 0
    while (matched < 4) {
        val next = input.read()
        if (next < 0) return null
        bytes.write(next)
        matched =
            if (next == (if (matched % 2 == 0) '\r'.code else '\n'.code)) {
                matched + 1
            } else if (next == '\r'.code) {
                1
            } else {
                0
            }
        if (bytes.size() > LARGEST_HEAD) return null
    }
    val lines = bytes.toString(Charsets.ISO_8859_1).trimEnd('\r', '\n').split("\r\n")
    return RequestHead(lines)
}

private fun copy(
    from: InputStream,
    to: OutputStream,
    count: Long,
) {
    val buffer = ByteArray(BUFFER)
    var left = count
    while (left > 0) {
        val read = from.read(buffer, 0, minOf(buffer.size.toLong(), left).toInt())
        if (read < 0) return
        to.write(buffer, 0, read)
        left -= read
    }
}

private fun readLine(input: InputStream): String? {
    val line = StringBuilder()
    while (true) {
        val next = input.read()
        if (next < 0) return null
        if (next == '\n'.code) return line.toString().trimEnd('\r')
        line.append(next.toChar())
    }
}

private fun copyChunks(
    from: InputStream,
    to: OutputStream,
) {
    while (true) {
        val size = readLine(from) ?: return
        to.write("$size\r\n".toByteArray(Charsets.ISO_8859_1))
        val length = size.substringBefore(';').trim().toLongOrNull(HEX) ?: return
        if (length == 0L) {
            while (true) {
                val trailer = readLine(from) ?: return
                to.write("$trailer\r\n".toByteArray(Charsets.ISO_8859_1))
                if (trailer.isEmpty()) return
            }
        }
        copy(from, to, length)
        readLine(from)
        to.write("\r\n".toByteArray(Charsets.ISO_8859_1))
    }
}

internal class DevHttpsProxy(
    certificate: DevCertificate,
    val port: Int,
    private val targetPort: () -> Int?,
) : AutoCloseable {
    private val server: ServerSocket

    init {
        val keys = KeyStore.getInstance("PKCS12")
        certificate.keyStore.inputStream().use { keys.load(it, DEV_STORE_PASSWORD.toCharArray()) }
        val managers = KeyManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm())
        managers.init(keys, DEV_STORE_PASSWORD.toCharArray())
        val context = SSLContext.getInstance("TLS")
        context.init(managers.keyManagers, null, null)
        server = context.serverSocketFactory.createServerSocket(port, 0, InetAddress.getLoopbackAddress())
        thread(isDaemon = true, name = "ktor-svelte-https") { accept() }
    }

    val localPort: Int get() = server.localPort

    private fun accept() {
        while (!server.isClosed) {
            val client = runCatching { server.accept() }.getOrNull() ?: return
            thread(isDaemon = true, name = "ktor-svelte-https-connection") { runCatching { serve(client) } }
        }
    }

    private fun serve(client: Socket) {
        client.use {
            val target = targetPort() ?: return
            Socket(InetAddress.getLoopbackAddress(), target).use { upstream ->
                val answers =
                    thread(isDaemon = true, name = "ktor-svelte-https-answers") {
                        runCatching { upstream.getInputStream().copyTo(client.getOutputStream(), BUFFER) }
                        runCatching { client.close() }
                    }
                val requests = BufferedInputStream(client.getInputStream(), BUFFER)
                val out = upstream.getOutputStream()
                while (true) {
                    val head = readHead(requests) ?: break
                    out.write(head.forwarded(localPort))
                    when {
                        head.upgrades -> {
                            out.flush()
                            requests.copyTo(out, BUFFER)
                            break
                        }
                        head.chunked -> copyChunks(requests, out)
                        else -> copy(requests, out, head.contentLength)
                    }
                    out.flush()
                }
                runCatching { upstream.shutdownOutput() }
                answers.join()
            }
        }
    }

    override fun close() {
        server.close()
    }
}
