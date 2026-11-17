package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.dev.CaughtEmails
import io.ktor.server.application.Application
import io.ktor.util.AttributeKey

public class Email(
    public val to: List<String>,
    public val subject: String,
    public val text: String? = null,
    public val html: String? = null,
    public val from: String? = null,
    public val cc: List<String> = emptyList(),
    public val bcc: List<String> = emptyList(),
    public val replyTo: String? = null,
) {
    public constructor(
        to: String,
        subject: String,
        text: String? = null,
        html: String? = null,
        from: String? = null,
    ) : this(listOf(to), subject, text, html, from)

    init {
        require(to.isNotEmpty()) { "An email needs at least one address in to." }
        require(text != null || html != null) { "An email needs a text, an html body or both." }
    }

    override fun toString(): String = "Email(to=$to, subject=$subject)"
}

public fun interface Mailer {
    public suspend fun send(email: Email)
}

internal val MailerKey = AttributeKey<Mailer>("KtorSvelteMailer")

private object NoMailer : Mailer {
    override suspend fun send(email: Email) {
        error("ktor-svelte has no mailer to send '${email.subject}' with: set mailer = ... in install(Svelte).")
    }
}

public val Application.mailer: Mailer
    get() = attributes.getOrNull(MailerKey) ?: NoMailer

internal fun mailerFor(
    configured: Mailer?,
    caught: CaughtEmails?,
): Mailer = caught ?: configured ?: NoMailer
