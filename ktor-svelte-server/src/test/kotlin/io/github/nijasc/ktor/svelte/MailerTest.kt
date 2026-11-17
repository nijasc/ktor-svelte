package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import java.util.concurrent.CopyOnWriteArrayList
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class MailerTest {
    private val sent = CopyOnWriteArrayList<Email>()
    private val realMailer = Mailer { sent += it }

    private fun app(
        development: Boolean,
        configured: Mailer? = realMailer,
        catch: Boolean = true,
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        serverConfig { developmentMode = development }
        application {
            install(Svelte) {
                configured?.let { mailer = it }
                dev {
                    url = "http://127.0.0.1:1"
                    mode = DevMode.Always
                    catchEmails = catch
                }
            }
            routing {
                post("/api/invite") {
                    call.application.mailer.send(
                        Email(
                            to = "ada@example.com",
                            subject = "You are invited",
                            text = "Join us.",
                            html = "<p>Join <b>us</b>.</p>",
                            from = "team@example.com",
                        ),
                    )
                    call.respondText("sent")
                }
            }
        }
        block()
    }

    @Test
    fun `in development emails are caught and listed in the dev panel instead of being sent`() =
        app(development = true) {
            assertEquals(HttpStatusCode.OK, client.post("/api/invite").status)
            assertTrue(sent.isEmpty(), "the real mailer must not be called in development")

            val response = client.get("/_ktor-svelte/dev/emails")
            assertEquals("no-store", response.headers[HttpHeaders.CacheControl])
            val email =
                Json
                    .parseToJsonElement(response.bodyAsText())
                    .jsonArray
                    .single()
                    .jsonObject
            assertEquals("You are invited", email.getValue("subject").jsonPrimitive.content)
            assertEquals(
                "ada@example.com",
                email
                    .getValue("to")
                    .jsonArray
                    .single()
                    .jsonPrimitive.content,
            )
            assertEquals("team@example.com", email.getValue("from").jsonPrimitive.content)
            assertEquals("<p>Join <b>us</b>.</p>", email.getValue("html").jsonPrimitive.content)
            assertEquals("Join us.", email.getValue("text").jsonPrimitive.content)

            assertEquals(HttpStatusCode.Forbidden, client.post("/_ktor-svelte/dev/emails/clear").status)
            val remote = client.get("/_ktor-svelte/dev/emails") { header(HttpHeaders.XForwardedFor, "203.0.113.9") }
            assertEquals(HttpStatusCode.Forbidden, remote.status)
            val cleared = client.post("/_ktor-svelte/dev/emails/clear") { header("X-Ktor-Svelte-Dev", "1") }
            assertEquals(HttpStatusCode.NoContent, cleared.status)
            assertEquals("[]", client.get("/_ktor-svelte/dev/emails").bodyAsText())
        }

    @Test
    fun `in development the app needs no mailer at all`() =
        app(development = true, configured = null) {
            assertEquals(HttpStatusCode.OK, client.post("/api/invite").status)
            assertContains(client.get("/_ktor-svelte/dev/emails").bodyAsText(), "You are invited")
        }

    @Test
    fun `outside development, or with catchEmails off, the configured mailer sends`() {
        app(development = false) {
            client.post("/api/invite")
            assertEquals(listOf("You are invited"), sent.map { it.subject })
        }
        sent.clear()
        app(development = true, catch = false) {
            client.post("/api/invite")
            assertEquals(listOf("ada@example.com"), sent.single().to)
        }
    }

    @Test
    fun `sending without a mailer says what to configure`() =
        app(development = false, configured = null) {
            startApplication()
            val problem =
                assertFailsWith<IllegalStateException> {
                    application.mailer.send(Email("ada@example.com", "Hi", text = "Hello"))
                }
            assertContains(problem.message.orEmpty(), "mailer = ")
        }

    @Test
    fun `an email needs a recipient and a body`() {
        assertFailsWith<IllegalArgumentException> { Email(to = emptyList(), subject = "Hi", text = "Hello") }
        assertFailsWith<IllegalArgumentException> { Email("ada@example.com", "Hi") }
    }
}
