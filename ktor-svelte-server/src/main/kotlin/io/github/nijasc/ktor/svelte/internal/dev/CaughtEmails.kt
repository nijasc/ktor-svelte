package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.Email
import io.github.nijasc.ktor.svelte.Mailer
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.request.header
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import org.slf4j.Logger
import java.util.concurrent.atomic.AtomicLong

internal const val DEV_EMAILS_PATH = "/_ktor-svelte/dev/emails"
private const val KEPT_EMAILS = 50

internal class CaughtEmails(
    private val log: Logger?,
    private val wallClock: () -> Long = System::currentTimeMillis,
) : Mailer {
    private val kept = ArrayDeque<JsonObject>()
    private val ids = AtomicLong()

    override suspend fun send(email: Email) {
        val entry =
            buildJsonObject {
                put("id", ids.incrementAndGet())
                put("at", wallClock())
                email.from?.let { put("from", it) }
                put("to", JsonArray(email.to.map(::JsonPrimitive)))
                if (email.cc.isNotEmpty()) put("cc", JsonArray(email.cc.map(::JsonPrimitive)))
                if (email.bcc.isNotEmpty()) put("bcc", JsonArray(email.bcc.map(::JsonPrimitive)))
                email.replyTo?.let { put("replyTo", it) }
                put("subject", email.subject)
                email.text?.let { put("text", it) }
                email.html?.let { put("html", it) }
            }
        synchronized(kept) {
            kept.addLast(entry)
            if (kept.size > KEPT_EMAILS) kept.removeFirst()
        }
        log?.info("ktor-svelte: caught an email to ${email.to.joinToString()}: \"${email.subject}\". It was not sent; see the dev panel.")
    }

    fun list(): List<JsonObject> = synchronized(kept) { kept.toList() }

    fun clear() = synchronized(kept) { kept.clear() }
}

internal fun Route.devEmailRoutes(
    allowRemote: Boolean,
    emails: CaughtEmails,
) {
    get(DEV_EMAILS_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respondText(JsonArray(emails.list().reversed()).toString(), ContentType.Application.Json)
    }
    post("$DEV_EMAILS_PATH/clear") {
        call.response.header(HttpHeaders.CacheControl, "no-store")
        when {
            !allowRemote && !isLocalCall(call) ->
                call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            call.request.header(DEV_CLIENT_HEADER) == null ->
                call.respondText("Only the ktor-svelte dev panel clears the caught emails.", status = HttpStatusCode.Forbidden)
            else -> {
                emails.clear()
                call.respondText("", status = HttpStatusCode.NoContent)
            }
        }
    }
}
