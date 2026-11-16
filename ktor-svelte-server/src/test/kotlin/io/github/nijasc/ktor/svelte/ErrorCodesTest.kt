package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.TypeScriptGenerator
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.request.header
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse

enum class NoteError { NoteLocked, QuotaReached, NOT_YOURS }

enum class OtherError { Elsewhere }

class ErrorCodesTest {
    private fun app(
        config: SvelteConfig.() -> Unit = { errorCodes<NoteError>() },
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                config()
            }
            routing {
                get("/api/locked") { throw ApiException(NoteError.NoteLocked, HttpStatusCode.Conflict) }
                get("/api/quota") { throw ApiException(NoteError.QuotaReached, message = "You have used all 3 notes of the free plan.") }
                get("/api/direct") { call.respondError(NoteError.NOT_YOURS, HttpStatusCode.Forbidden) }
                get("/api/elsewhere") { throw ApiException(OtherError.Elsewhere) }
            }
        }
        block()
    }

    @Test
    fun `an error with a code is answered with its status, the code and a readable message`() =
        app {
            val locked = client.get("/api/locked")
            assertEquals(HttpStatusCode.Conflict, locked.status)
            assertEquals("""{"message":"Note locked.","code":"NoteLocked"}""", locked.bodyAsText())
            assertContains(locked.headers["Content-Type"].orEmpty(), "application/json")

            val quota = client.get("/api/quota")
            assertEquals(HttpStatusCode.BadRequest, quota.status)
            assertEquals("""{"message":"You have used all 3 notes of the free plan.","code":"QuotaReached"}""", quota.bodyAsText())

            val direct = client.get("/api/direct")
            assertEquals(HttpStatusCode.Forbidden, direct.status)
            assertEquals("""{"message":"Not yours.","code":"NOT_YOURS"}""", direct.bodyAsText())
        }

    @Test
    fun `the app can give each code its message, per request`() =
        app(
            config = {
                errorCodes<NoteError> { call, code ->
                    val german = call.request.header("Accept-Language") == "de"
                    when (code) {
                        NoteError.NoteLocked -> if (german) "Diese Notiz ist gesperrt." else "This note is locked."
                        else -> null
                    }
                }
            },
        ) {
            assertContains(client.get("/api/locked").bodyAsText(), "This note is locked.")
            assertContains(client.get("/api/locked") { header("Accept-Language", "de") }.bodyAsText(), "Diese Notiz ist gesperrt.")
            assertContains(client.get("/api/direct").bodyAsText(), "\"message\":\"Not yours.\"")
            assertContains(client.get("/api/quota").bodyAsText(), "You have used all 3 notes of the free plan.")
            assertEquals("""{"message":"Elsewhere.","code":"Elsewhere"}""", client.get("/api/elsewhere").bodyAsText())
        }

    @Test
    fun `an app has one enum of codes`() {
        val failure = assertFailsWith<IllegalStateException> { SvelteConfig().apply { errorCodes<NoteError>() }.errorCodes<OtherError>() }
        assertContains(failure.message.orEmpty(), "errorCodes is already set to NoteError")
    }

    @Test
    fun `the codes arrive in TypeScript as a union, with helpers that use it`() {
        val openApi = """{"openapi":"3.1.0","paths":{},"components":{"schemas":{}}}"""
        val files = TypeScriptGenerator(listOf("/api"), errorCodes = NoteError.entries.map { it.name }).generate(openApi)
        val types = files.getValue("types.ts")
        assertContains(types, "export type ErrorCode = 'NoteLocked' | 'QuotaReached' | 'NOT_YOURS';")
        assertContains(
            types,
            "export const ErrorCode = {\n    NoteLocked: 'NoteLocked',\n    QuotaReached: 'QuotaReached',\n    NOT_YOURS: 'NOT_YOURS',\n} as const;",
        )
        assertFalse("export {};" in types)
        val services = files.getValue("services.ts")
        assertContains(services, "import { ApiError, request, codeMessages, errorCode, type RequestOptions } from './client.js';")
        assertContains(services, "import type { ErrorCode } from './types.js';")
        assertContains(services, "export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C)")
        assertContains(services, "export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {")

        val plain = TypeScriptGenerator(listOf("/api")).generate(openApi)
        assertEquals("export {};\n", plain.getValue("types.ts"))
        assertFalse("hasErrorCode" in plain.getValue("services.ts"))
    }

    @Test
    fun `a class of the API called ErrorCode is refused`() {
        val openApi = """{"openapi":"3.1.0","paths":{},"components":{"schemas":{"ErrorCode":{"type":"object","properties":{}}}}}"""
        val failure =
            assertFailsWith<IllegalStateException> { TypeScriptGenerator(listOf("/api"), errorCodes = listOf("A")).generate(openApi) }
        assertContains(failure.message.orEmpty(), "errorCodes would be exported as 'ErrorCode'")
    }
}
