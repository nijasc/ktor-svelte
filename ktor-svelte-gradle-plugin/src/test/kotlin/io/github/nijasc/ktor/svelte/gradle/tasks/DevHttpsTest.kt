package io.github.nijasc.ktor.svelte.gradle.tasks

import com.sun.net.httpserver.HttpServer
import org.junit.jupiter.api.io.TempDir
import java.io.ByteArrayInputStream
import java.io.File
import java.net.InetAddress
import java.net.InetSocketAddress
import java.net.ServerSocket
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.security.KeyStore
import java.security.cert.CertificateFactory
import java.security.cert.X509Certificate
import javax.net.ssl.SSLContext
import javax.net.ssl.SSLHandshakeException
import javax.net.ssl.TrustManagerFactory
import kotlin.concurrent.thread
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class DevHttpsTest {
    @TempDir
    lateinit var dir: File

    private val keytool: File
        get() = File(System.getProperty("java.home"), "bin").listFiles { file -> file.nameWithoutExtension == "keytool" }!!.first()

    private fun trusting(authority: File): SSLContext {
        val certificate = authority.inputStream().use { CertificateFactory.getInstance("X.509").generateCertificate(it) }
        val trusted = KeyStore.getInstance(KeyStore.getDefaultType()).apply { load(null) }
        trusted.setCertificateEntry("ca", certificate)
        val managers = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm()).apply { init(trusted) }
        return SSLContext.getInstance("TLS").apply { init(null, managers.trustManagers, null) }
    }

    private fun echoServer(): HttpServer {
        val server = HttpServer.create(InetSocketAddress(InetAddress.getLoopbackAddress(), 0), 0)
        server.createContext("/") { exchange ->
            val body = exchange.requestBody.readBytes()
            val headers = exchange.requestHeaders
            val answer =
                listOf(
                    exchange.requestMethod + " " + exchange.requestURI,
                    "proto=" + headers.getFirst("X-Forwarded-Proto"),
                    "port=" + headers.getFirst("X-Forwarded-Port"),
                    "dev=" + headers.getFirst("X-Ktor-Svelte-Dev-Https"),
                    "all-proto=" + headers["X-Forwarded-Proto"],
                    "body=" + body.size + ":" + body.take(12).toByteArray().decodeToString(),
                ).joinToString("\n").toByteArray()
            exchange.sendResponseHeaders(200, answer.size.toLong())
            exchange.responseBody.use { it.write(answer) }
        }
        server.start()
        return server
    }

    @Test
    fun `the certificate is made once, is for localhost, and is signed by its own authority`() {
        val first = devCertificate(dir, keytool, "ada@laptop")
        assertTrue(first.created)
        assertTrue(first.keyStore.isFile && first.authority.isFile)
        assertFalse(dir.resolve("server.csr").exists())
        val stamp = first.keyStore.lastModified()
        val second = devCertificate(dir, keytool, "ada@laptop")
        assertFalse(second.created)
        assertEquals(stamp, second.keyStore.lastModified())

        val keys = KeyStore.getInstance("PKCS12")
        first.keyStore.inputStream().use { keys.load(it, DEV_STORE_PASSWORD.toCharArray()) }
        val chain = keys.getCertificateChain("server").map { it as X509Certificate }
        assertEquals(2, chain.size)
        assertEquals("CN=localhost", chain[0].subjectX500Principal.name)
        assertContains(chain[1].subjectX500Principal.name, "ktor-svelte development CA (ada@laptop)")
        assertEquals(listOf("localhost", "127.0.0.1", "0:0:0:0:0:0:0:1"), chain[0].subjectAlternativeNames.map { it[1].toString() })
        assertTrue(chain[1].basicConstraints >= 0, "the authority may sign")
        assertEquals(-1, chain[0].basicConstraints, "the server certificate may not")
        chain[0].verify(chain[1].publicKey)
    }

    @Test
    fun `the certificate for localhost is renewed before it runs out, by the same authority`() {
        val first = devCertificate(dir, keytool, "ada@laptop")
        val authorityBefore = first.authority.readBytes()
        val serverBefore = first.keyStore.readBytes()
        val expiry = serverCertificateExpiry(first.keyStore)!!
        val renewed = devCertificate(dir, keytool, "ada@laptop", now = expiry.minus(java.time.Duration.ofDays(10)))
        assertFalse(renewed.created)
        val serverAfter = renewed.keyStore.readBytes()
        assertFalse(serverBefore.contentEquals(serverAfter))
        assertTrue(authorityBefore.contentEquals(renewed.authority.readBytes()))
        val untouched = devCertificate(dir, keytool, "ada@laptop")
        assertTrue(serverAfter.contentEquals(untouched.keyStore.readBytes()))
    }

    @Test
    fun `requests reach the app with the note that they came over HTTPS`() {
        val certificate = devCertificate(dir, keytool, "test")
        val app = echoServer()
        DevHttpsProxy(certificate, 0) { app.address.port }.use { proxy ->
            val client =
                HttpClient
                    .newBuilder()
                    .sslContext(trusting(certificate.authority))
                    .version(HttpClient.Version.HTTP_1_1)
                    .build()
            val address = "https://localhost:${proxy.localPort}"

            val plain = client.send(HttpRequest.newBuilder(URI("$address/board?x=1")).build(), HttpResponse.BodyHandlers.ofString()).body()
            assertContains(plain, "GET /board?x=1\n")
            assertContains(plain, "proto=https\nport=${proxy.localPort}\ndev=1\n")

            val spoofed = HttpRequest.newBuilder(URI("$address/a")).header("X-Forwarded-Proto", "gopher").build()
            assertContains(client.send(spoofed, HttpResponse.BodyHandlers.ofString()).body(), "all-proto=[https]")

            val sized = HttpRequest.newBuilder(URI("$address/notes")).POST(HttpRequest.BodyPublishers.ofString("hello body")).build()
            assertContains(client.send(sized, HttpResponse.BodyHandlers.ofString()).body(), "POST /notes\n")
            assertContains(client.send(sized, HttpResponse.BodyHandlers.ofString()).body(), "body=10:hello body")

            val large = ByteArray(200_000) { 'x'.code.toByte() }
            val chunked =
                HttpRequest
                    .newBuilder(URI("$address/upload"))
                    .POST(
                        HttpRequest.BodyPublishers.ofInputStream {
                            ByteArrayInputStream(large)
                        },
                    ).build()
            assertContains(client.send(chunked, HttpResponse.BodyHandlers.ofString()).body(), "body=200000:xxxxxxxxxxxx")
            assertContains(
                client.send(HttpRequest.newBuilder(URI("$address/after")).build(), HttpResponse.BodyHandlers.ofString()).body(),
                "GET /after",
            )
        }
        app.stop(0)
    }

    @Test
    fun `a browser that does not trust the authority refuses the connection`() {
        val certificate = devCertificate(dir, keytool, "test")
        DevHttpsProxy(certificate, 0) { null }.use { proxy ->
            val client = HttpClient.newBuilder().build()
            val request = HttpRequest.newBuilder(URI("https://localhost:${proxy.localPort}/")).build()
            assertFailsWith<SSLHandshakeException> { client.send(request, HttpResponse.BodyHandlers.ofString()) }
        }
    }

    @Test
    fun `an upgraded connection is passed through in both directions`() {
        val certificate = devCertificate(dir, keytool, "test")
        val backend = ServerSocket(0, 0, InetAddress.getLoopbackAddress())
        val received = StringBuilder()
        thread(isDaemon = true) {
            backend.accept().use { socket ->
                val head = readHead(socket.getInputStream())!!
                received.append(head.lines.first()).append('|').append(head.lines.any { it == "X-Forwarded-Proto: https" })
                socket.getOutputStream().write("HTTP/1.1 101 Switching Protocols\r\nUpgrade: test\r\n\r\n".toByteArray())
                val frame = ByteArray(5)
                socket.getInputStream().readNBytes(frame, 0, 5)
                socket.getOutputStream().write(frame.reversedArray())
                socket.getOutputStream().flush()
            }
        }
        DevHttpsProxy(certificate, 0) { backend.localPort }.use { proxy ->
            trusting(certificate.authority).socketFactory.createSocket("localhost", proxy.localPort).use { socket ->
                socket.getOutputStream().write(
                    "GET /live HTTP/1.1\r\nHost: localhost\r\nUpgrade: test\r\nConnection: Upgrade\r\n\r\n".toByteArray(),
                )
                val answer = readHead(socket.getInputStream())!!
                assertEquals("HTTP/1.1 101 Switching Protocols", answer.lines.first())
                socket.getOutputStream().write("abcde".toByteArray())
                socket.getOutputStream().flush()
                assertEquals("edcba", socket.getInputStream().readNBytes(5).decodeToString())
            }
        }
        assertEquals("GET /live HTTP/1.1|true", received.toString())
        backend.close()
    }

    @Test
    fun `the way to trust the authority is told, per system, and never done`() {
        val authority = File("/home/ada/.ktor-svelte/dev-https/ca.crt")
        assertContains(trustInstructions("Windows 11", authority), "certutil -addstore -user Root")
        assertContains(trustInstructions("Mac OS X", authority), "security add-trusted-cert -r trustRoot")
        assertContains(trustInstructions("Linux", authority), "update-ca-certificates")
        assertContains(trustInstructions("Linux", authority), "ktor-svelte does not run this for you.")
        val head = RequestHead(listOf("POST /a HTTP/1.1", "content-length: 12", "Transfer-Encoding: gzip, chunked"))
        assertEquals(12L, head.contentLength)
        assertTrue(head.chunked)
        assertFalse(head.upgrades)
    }

    @Test
    fun `with HTTPS on, the banner names the secure address and remembers the app's own port`() {
        val banner = ReadyBanner(5173, httpsPort = 8443)
        var opened = ""
        banner.onFirstReady = { opened = it }
        val text = banner.onAppLine("Responding at http://0.0.0.0:8080").orEmpty()
        assertContains(text, "App:  https://localhost:8443")
        assertEquals("https://localhost:8443", opened)
        assertEquals(8080, banner.appPort)
        assertEquals("ktor-svelte: the app is ready again at https://localhost:8443", banner.onAppLine("Responding at http://0.0.0.0:8081"))
        assertEquals(8081, banner.appPort)
    }
}
