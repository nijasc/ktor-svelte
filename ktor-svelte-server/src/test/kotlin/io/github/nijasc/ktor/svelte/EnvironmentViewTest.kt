package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.dev.EnvironmentRow
import io.github.nijasc.ktor.svelte.internal.dev.appProperties
import io.github.nijasc.ktor.svelte.internal.dev.environmentJson
import io.github.nijasc.ktor.svelte.internal.dev.isSecretName
import io.github.nijasc.ktor.svelte.internal.dev.maskedSetting
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.config.MapApplicationConfig
import io.ktor.server.testing.testApplication
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class EnvironmentViewTest {
    @Test
    fun `names that look like secrets are recognised by their words`() {
        listOf(
            "DATABASE_PASSWORD",
            "apiKey",
            "API_KEY",
            "jwt.secret",
            "ktor.security.signingKey",
            "GITHUB_TOKEN",
            "SESSION_SIGN_KEY",
            "csrfToken",
        ).forEach { assertTrue(isSecretName(it), it) }
        listOf("PORT", "KEYBOARD_LAYOUT", "AUTHOR", "PATH", "ktor.deployment.port", "monkeyCount")
            .forEach { assertFalse(isSecretName(it), it) }
        assertTrue(isSecretName("PIN_CODE", setOf("pinCode")))
    }

    @Test
    fun `secret values are hidden, and credentials inside a url too`() {
        assertEquals(EnvironmentRow("DB_PASSWORD", "***", true), maskedSetting("DB_PASSWORD", "hunter2"))
        assertEquals(EnvironmentRow("DB_PASSWORD", "", false), maskedSetting("DB_PASSWORD", ""))
        assertEquals(
            EnvironmentRow("DATABASE_URL", "postgres://app:***@db:5432/app", true),
            maskedSetting("DATABASE_URL", "postgres://app:hunter2@db:5432/app"),
        )
        assertEquals(
            "jdbc:postgresql://db/app?user=app&password=***",
            maskedSetting("JDBC", "jdbc:postgresql://db/app?user=app&password=hunter2").value,
        )
        assertEquals(EnvironmentRow("PORT", "8080", false), maskedSetting("PORT", "8080"))
    }

    @Test
    fun `the JVM's own system properties are left out`() {
        val kept = appProperties(mapOf("java.version" to "21", "user.home" to "/home", "ktor.svelte.dev" to "x", "app.mode" to "demo"))
        assertEquals(setOf("ktor.svelte.dev", "app.mode"), kept.keys)
    }

    @Test
    fun `groups come sorted by name`() {
        val json = environmentJson(mapOf("b" to "2", "A" to "1"), mapOf("TOKEN" to "t"), emptyMap(), emptySet())
        val groups = json.getValue("groups").jsonArray.map { it.jsonObject }
        assertEquals(
            listOf("Config", "Environment variables", "System properties"),
            groups.map { it.getValue("name").jsonPrimitive.content },
        )
        assertEquals(
            listOf("A", "b"),
            groups[0].getValue("rows").jsonArray.map {
                it.jsonObject
                    .getValue("name")
                    .jsonPrimitive.content
            },
        )
        assertEquals(
            """{"name":"TOKEN","value":"***","hidden":true}""",
            groups[1]
                .getValue("rows")
                .jsonArray
                .single()
                .toString(),
        )
    }

    @Test
    fun `the dev panel reads the app's config with secrets hidden, for this machine only`() =
        testApplication {
            environment {
                config =
                    MapApplicationConfig(
                        "ktor.deployment.port" to "8080",
                        "jwt.secret" to "very-secret",
                        "database.url" to "postgres://app:hunter2@db/app",
                    )
            }
            application {
                install(Svelte) {
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.Always
                    }
                }
            }
            val response = client.get("/_ktor-svelte/dev/environment")
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("no-store", response.headers[HttpHeaders.CacheControl])
            val body = response.bodyAsText()
            assertFalse("very-secret" in body || "hunter2" in body, body)
            val config =
                Json
                    .parseToJsonElement(body)
                    .jsonObject
                    .getValue("groups")
                    .jsonArray
                    .first()
                    .jsonObject
                    .getValue("rows")
                    .jsonArray
                    .associate {
                        it.jsonObject
                            .getValue("name")
                            .jsonPrimitive.content to
                            it.jsonObject
                                .getValue("value")
                                .jsonPrimitive.content
                    }
            assertEquals("8080", config["ktor.deployment.port"])
            assertEquals("***", config["jwt.secret"])
            assertEquals("postgres://app:***@db/app", config["database.url"])

            val remote = client.get("/_ktor-svelte/dev/environment") { header(HttpHeaders.XForwardedFor, "203.0.113.9") }
            assertEquals(HttpStatusCode.Forbidden, remote.status)
        }
}
