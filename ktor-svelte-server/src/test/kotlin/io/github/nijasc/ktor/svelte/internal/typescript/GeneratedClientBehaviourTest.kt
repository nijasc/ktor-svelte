package io.github.nijasc.ktor.svelte.internal.typescript

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

class GeneratedClientBehaviourTest {
    @TempDir
    lateinit var dir: File

    private fun bun(): File? {
        val names = if (System.getProperty("os.name").startsWith("Windows")) listOf("bun.exe", "bun.cmd") else listOf("bun")
        return System
            .getenv("PATH")
            .orEmpty()
            .split(File.pathSeparator)
            .flatMap { folder -> names.map { File(folder, it) } }
            .firstOrNull { it.isFile }
    }

    private fun runHarness(): JsonObject {
        val runtime = bun()
        assumeTrue(runtime != null, "bun is not on PATH, and the generated client is TypeScript")
        dir.resolve("client.ts").writeText(typeScriptTemplate("client.ts"))
        val harness = dir.resolve("client-harness.ts")
        harness.writeText(checkNotNull(javaClass.getResource("/client-harness.ts")).readText())
        val process = ProcessBuilder(runtime!!.path, harness.path).directory(dir).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        return Json.parseToJsonElement(output.lines().last { it.startsWith("{") }).jsonObject
    }

    @Test
    fun `the user store loads once, follows sign-in and sign-out, and clears on a 401`() {
        val steps =
            runHarness().getValue("currentUser").jsonArray.map { step ->
                step.jsonArray.joinToString(" | ") { it.jsonPrimitive.content }
            }
        assertEquals(
            listOf(
                "before loading | null | false | false | 0",
                "a change before the first load asks nothing | null | false | false | 0",
                "loaded once for two callers: Ada Ada | Ada | true | true | 1",
                "loading again asks nothing | Ada | true | true | 1",
                "the sign-in response reloads: Grace | Grace | true | true | 2",
                "other calls ask nothing | Grace | true | true | 2",
                "the sign-out response reloads | null | true | false | 3",
                "set by hand | Linus | true | true | 3",
                "a 401 clears | null | true | false | 3",
                "reload asks | Ada | true | true | 4",
                "an answer that arrives after clear is dropped: null | null | true | false | 5",
                "a failed call keeps what was known | null | true | false | 6",
                "and the next load asks again | Ada | true | true | 7",
            ),
            steps,
        )
    }

    @Test
    fun `a 401 sends the visitor to the login page with the page they were on`() {
        val login = runHarness().getValue("login").jsonObject

        fun texts(
            of: JsonObject,
            name: String,
        ) = of.getValue(name).jsonArray.map { it.jsonPrimitive.content }
        val redirects = login.getValue("redirects").jsonObject
        val stays = listOf("the call failed first")
        assertEquals(stays + "/login?next=%2Fnotes%2F7%3Ftab%3Dfiles%23top", texts(redirects, "fromAPage"))
        assertEquals(stays, texts(redirects, "fromTheLoginPage"))
        assertEquals(stays, texts(redirects, "silentCall"))
        assertEquals(stays, texts(redirects, "otherStatus"))
        assertEquals(stays + "own handler", texts(redirects, "ownHandler"))
        assertEquals(stays, texts(redirects, "noLoginPage"))
        assertEquals(stays + "assign /login?next=%2Fnotes", texts(redirects, "withoutRouter"))
        assertEquals(stays, texts(redirects, "otherOrigin"))
        assertEquals(
            listOf(
                "/login?next=%2Fboard%3Fmine%3Dtrue",
                "/login?next=%2Ftasks%2F4",
                "/login?next=%2Ftasks%2F4%3Ftab%3Dfiles",
                "/login",
                "/login",
            ),
            texts(login, "paths"),
        )
        assertEquals(listOf("/tasks/4?tab=files", "/board", "/board", "/board", "/settings", "/tasks/4?tab=files"), texts(login, "returns"))
        assertContains(login.getValue("withoutLoginPage").jsonPrimitive.content, "install(Svelte) { loginPage = \"/login\" }")
    }

    @Test
    fun `the user store knows when the session ends, warns before, extends it and notices the end`() {
        val session = runHarness().getValue("session").jsonObject
        val steps = session.getValue("steps").jsonArray.map { step -> step.jsonArray.joinToString(" | ") { it.jsonPrimitive.content } }
        assertEquals(
            listOf(
                "before loading | null | null | false | 0",
                "loaded with 0.4 seconds left | Ada | 0.4 | false | 1",
                "inside the warning time | Ada | 0.2 | true | 1",
                "extended | Ada | 5 | false | 2",
                "another response says less is left | Ada | 0.3 | false | 2",
                "and a later one says more | Ada | 8 | false | 2",
                "the time ran out, so the store asked and the server said nobody | null | null | false | 3",
                "nothing is planned for a visitor | null | null | false | 3",
            ),
            steps,
        )
        assertEquals(
            listOf("GET /api/current-user", "POST /api/current-user/extend", "GET /api/current-user"),
            session.getValue("calls").jsonArray.map { it.jsonPrimitive.content },
        )
    }

    @Test
    fun `the user store answers what the user may do`() {
        val steps =
            runHarness().getValue("permissions").jsonArray.map { step ->
                step.jsonArray.joinToString(" | ") { it.jsonPrimitive.content }
            }
        assertEquals(
            listOf(
                "before loading | false | false",
                "a member | true | false",
                "an admin | true | true",
                "after a 401 | false | false",
                "a visitor, whatever the answer lists | false | false",
            ),
            steps,
        )
    }

    @Test
    fun `a page is guarded by the deepest guard above it`() {
        assertEquals(
            listOf(
                "/admin -> /admin (Manage)",
                "/admin/ -> /admin (Manage)",
                "/admin/users/4 -> /admin (Manage)",
                "/admin/help -> /admin/help",
                "/admin/help/x -> /admin/help",
                "/administrators -> open",
                "/board -> /board",
                "/ -> open",
                "/about -> open",
            ),
            runHarness().getValue("guards").jsonArray.map { it.jsonPrimitive.content },
        )
    }

    @Test
    fun `preferences follow the user between devices, and the theme and language cookies with them`() {
        val preferences = runHarness().getValue("preferences").jsonObject
        val steps = preferences.getValue("steps").jsonArray.map { step -> step.jsonArray.joinToString(" | ") { it.jsonPrimitive.content } }
        assertEquals(
            listOf(
                """a visitor has the defaults | {"theme":null,"locale":null,"compact":false} |  | null | 0 | 0""",
                """a visitor changes things on this device only | {"theme":"nord","locale":null,"compact":true} | theme=nord | nord | 0 | 0""",
                "signing in on a new device brings the saved theme and language | " +
                    """{"theme":"dracula","locale":"de","compact":false} | theme=dracula locale=de | dracula | 0 | 1""",
                "a theme picked on this device since then is saved | " +
                    """{"theme":"light","locale":"de","compact":false} | theme=light locale=de | dracula | 1 | 1""",
                "a change is shown at once and saved | " +
                    """{"theme":"light","locale":"de","compact":true} | theme=light locale=de | dracula | 2 | 1""",
                "a theme picked on another device arrives here | " +
                    """{"theme":"nord","locale":"de","compact":true} | theme=nord locale=de | nord | 2 | 1""",
                "someone with nothing saved keeps what this device shows, and it is saved | " +
                    """{"theme":"nord","locale":"de","compact":false} | theme=nord locale=de | nord | 5 | 1""",
                """after a 401 the defaults are back | {"theme":null,"locale":null,"compact":false} | theme=nord locale=de | nord | 5 | 1""",
            ),
            steps,
        )
        assertEquals("""{"theme":"nord","locale":"de","compact":false}""", preferences.getValue("lastSaved").jsonPrimitive.content)
    }

    @Test
    fun `GET requests are retried with backoff only when asked to`() {
        val results = runHarness()

        fun result(name: String) = results.getValue(name).jsonPrimitive.content
        assertEquals("TypeError after 1 call(s)", result("offByDefault"))
        assertEquals("ok {\"status\":200} after 3 call(s)", result("recovers"))
        assertEquals("ok {\"status\":200} after 2 call(s)", result("timeoutsAreRetried"))
        assertEquals("ApiError 503 after 3 call(s)", result("givesUp"))
        assertEquals("ApiError 503 after 1 call(s)", result("writesAreNeverRetried"))
        assertEquals("ApiError 500 after 1 call(s)", result("otherStatusesAreNotRetried"))
        assertEquals("ApiError 404 after 1 call(s)", result("notFoundIsNotRetried"))
        assertEquals("ApiError 503 after 1 call(s)", result("oneCallCanOptOut"))
        assertEquals("ok {\"status\":200} after 2 call(s)", result("oneCallCanOptIn"))
        assertEquals("ok {\"status\":200} after 2 call(s)", result("trueUsesTheDefaults"))
        assertEquals("ApiError 503 after 3 call(s)", result("reportsOnlyTheLastFailure"))
        assertEquals(
            1,
            results
                .getValue("reported")
                .jsonPrimitive.content
                .toInt(),
        )
        assertEquals(listOf(100, 200, 250, 250), results.getValue("waits").jsonArray.map { it.jsonPrimitive.content.toInt() })
        assertEquals("AbortError after 1 call(s)", result("stopsWhenAborted"))
    }

    @Test
    fun `a rate limit carries its wait, and is waited for once when retries are on`() {
        val results = runHarness()

        fun result(name: String) = results.getValue(name).jsonPrimitive.content
        assertEquals("wait 2000", result("limitError"))
        assertEquals("false", result("otherErrorIsNotALimit"))
        assertEquals("ApiError 429 after 1 call(s)", result("limitIsNotWaitedForByDefault"))
        assertEquals("ok {\"status\":201} after 2 call(s)", result("limitWaitsAndResendsWrites"))
        assertEquals("ApiError 429 after 2 call(s)", result("limitResendsOnlyOnce"))
        assertEquals("ApiError 429 after 1 call(s)", result("longLimitIsNotWaitedFor"))
        assertEquals("ok {\"status\":200} after 4 call(s)", result("limitDoesNotUseUpGetAttempts"))
        assertEquals("true", result("limitFromDate"))
        assertEquals("true", result("unreadableLimit"))
    }

    @Test
    fun `the visitor's time zone travels with calls to the app's own origin`() {
        val results = runHarness()

        fun result(name: String) = results.getValue(name).jsonPrimitive.content
        assertEquals("true", result("zoneIsSent"))
        assertEquals("false", result("zoneCanBeTurnedOff"))
        assertEquals("false", result("zoneStaysHome"))
        assertEquals("Asia/Tokyo", result("ownZoneHeaderWins"))
    }

    @Test
    fun `a successful write is noticed once, so the page can load its data again`() {
        val results = runHarness()

        fun result(name: String) = results.getValue(name).jsonPrimitive.content
        assertEquals("1", result("writeIsNoticed"))
        assertEquals("0", result("readIsNotNoticed"))
        assertEquals("0", result("failedWriteIsNotNoticed"))
        assertEquals("0", result("oneCallCanStayQuiet"))
        assertEquals("1", result("writesTogetherAreNoticedOnce"))
        assertEquals("ok {\"status\":200}", result("brokenHandlerDoesNotFailTheCall"))
    }

    @Test
    fun `recorded calls answer the client in tests, in the order they were recorded`() {
        val results = runHarness()
        assertEquals(
            listOf(
                "ok {\"items\":[\"first\"]}",
                "ok {\"id\":7}",
                "ok {\"items\":[\"first\",\"New\"]}",
                "ok {\"items\":[\"first\",\"New\"]}",
                "ok undefined",
                "ApiError 404",
                "ok \"hello\"",
            ),
            results.getValue("fixtures").jsonArray.map { it.jsonPrimitive.content },
        )
        assertEquals(
            "No fixture for GET /api/other. Make that call in the app, then save the fixtures from the dev panel again.",
            results.getValue("missingFixture").jsonPrimitive.content,
        )
        assertEquals("ok {\"items\":[\"first\"]}", results.getValue("eachFetchStartsOver").jsonPrimitive.content)
    }

    @Test
    fun `toasts the server asked for are handed to the app, from its own origin only`() {
        val results = runHarness()

        fun list(name: String) = results.getValue(name).jsonArray.map { it.jsonPrimitive.content }
        assertEquals(listOf("success: Note saved"), list("serverToast"))
        assertEquals(listOf("info: Gr\u00fc\u00dfe, Ada", "warning: Almost full"), list("severalToasts"))
        assertEquals(listOf("error: Quota reached"), list("toastOnAFailedCall"))
        assertEquals(emptyList(), list("toastFromAnotherOrigin"))
        assertEquals(emptyList(), list("noToastHeader"))
    }

    @Test
    fun `the client goes where the server says after a successful call, inside the app only`() {
        val results = runHarness()

        fun list(name: String) = results.getValue(name).jsonArray.map { it.jsonPrimitive.content }
        assertEquals(listOf("the call returned", "/notes/7?tab=files"), list("navigates"), "the caller's own code runs first")
        assertEquals(listOf("the call returned"), list("noNavigationHeader"))
        assertEquals(listOf("the call returned"), list("noNavigationAfterAFailure"))
        assertEquals(List(4) { "the call returned" }, list("otherSitesAreNotFollowed"))
        assertEquals(listOf("the call returned"), list("noNavigationFromAnotherOrigin"))
    }

    @Test
    fun `upload rules are checked before anything is sent, with the server's own errors`() {
        val results = runHarness()
        assertEquals(
            listOf(
                "sent 1",
                "413 upload.tooLarge big.txt is larger than 10 bytes. file=big.txt sent 0",
                "415 upload.type photo.png is not an accepted file type. file=photo.png sent 0",
                "400 upload.tooMany At most 2 files can be sent at once. file=- sent 0",
                "sent 1",
                "413 upload.tooLarge photo.png is larger than 5 MiB. file=photo.png sent 0",
                "400 upload.tooMany Only one file can be sent at once. file=- sent 0",
            ),
            results.getValue("uploads").jsonArray.map { it.jsonPrimitive.content },
        )
    }

    @Test
    fun `an error's code is read from its body and chooses the message shown`() {
        val results = runHarness()
        assertEquals(listOf("NoteLocked", "null", "null", "null"), results.getValue("codes").jsonArray.map { it.toString().trim('"') })
        assertEquals(
            listOf(
                "This note is locked.",
                "Limit reached at 1970.",
                "Server wording.",
                "Something went wrong. Please try again.",
                "Could not reach the server. Check your connection and try again.",
            ),
            results.getValue("codeMessages").jsonArray.map { it.jsonPrimitive.content },
        )
    }

    @Test
    fun `a typed cookie is read, checked and written in the browser as the server does it`() {
        val cookies = runHarness().getValue("cookies").jsonObject
        assertEquals("""["Light",null]""", cookies.getValue("withoutDocument").toString())
        assertEquals("""["Dark",50,true,true]""", cookies.getValue("read").toString())
        assertEquals("""["Light",null,null,false]""", cookies.getValue("broken").toString())
        assertEquals("""["Dark",null]""", cookies.getValue("fromHeader").toString())
        assertEquals(
            listOf(
                "theme=Dark; path=/; samesite=lax; max-age=60",
                "page-size=20; path=/app; samesite=strict; secure",
                "greeting=a%20b%3Bc; path=/; samesite=lax",
                "theme=; path=/; samesite=lax; max-age=0",
            ),
            cookies.getValue("jar").jsonArray.map { it.jsonPrimitive.content },
        )
    }

    @Test
    fun `optional cookies follow the visitor's choice in the browser`() {
        val consent = runHarness().getValue("consent").jsonObject
        assertEquals(
            listOf(
                """[false,false,0,null,""]""",
                """[true,true,2,"wide","cookie-consent=analytics.marketing.preferences; visits=2; layout=wide"]""",
                """[true,true,2,null,"cookie-consent=analytics; visits=2"]""",
                """[true,false,0,null,"cookie-consent=none"]""",
                """[false,false,0,null,""]""",
            ),
            consent.getValue("steps").jsonArray.map { it.toString() },
        )
        assertEquals(
            listOf("false:", "true:analytics+marketing+preferences", "true:analytics", "true:", "true:preferences", "false:"),
            consent.getValue("seen").jsonArray.map { it.jsonPrimitive.content },
        )
        assertEquals("[0,9,0]", consent.getValue("fromHeader").toString())
    }

    @Test
    fun `only a 409 with the conflict code and the current record is a version conflict`() {
        assertEquals("[true,false,false,false,false]", runHarness().getValue("conflicts").toString())
    }

    @Test
    fun `a patch holds the fields that changed, with null for the ones that were cleared`() {
        assertEquals(
            listOf(
                """{}""",
                """{"title":"Groceries"}""",
                """{"dueOn":null}""",
                """{"tags":["home","food"],"stars":null}""",
                """{}""",
                """{"title":"Shopping","dueOn":null,"tags":["home"],"stars":5}""",
            ),
            runHarness().getValue("patches").jsonArray.map { it.toString() },
        )
    }

    @Test
    fun `a typed upload body is sent as a form, field by field, and still checked against the rules`() {
        val forms = runHarness().getValue("forms").jsonObject
        assertEquals(
            listOf(
                "untyped title=Report count=3 cover=<cover.txt:4> pages=<one.txt:1> pages=<two.txt:2>",
                "untyped title=Ready made",
            ),
            forms.getValue("sent").jsonArray.map { it.jsonPrimitive.content },
        )
        assertEquals("upload.tooMany", forms.getValue("refused").jsonPrimitive.content)
    }

    @Test
    fun `every write carries one key, also across its retries, and a write is only retried when the call asks for it`() {
        val idempotency = runHarness().getValue("idempotency").jsonObject
        assertEquals("true", idempotency.getValue("writeHasKey").toString())
        assertEquals("[null]", idempotency.getValue("readHasNone").toString())
        assertEquals("""["ok",3,1]""", idempotency.getValue("retried").toString())
        assertEquals("""["503",1]""", idempotency.getValue("notRetriedByDefault").toString())
        assertEquals("""["mine"]""", idempotency.getValue("ownKey").toString())
        assertEquals("""["503",[null]]""", idempotency.getValue("switchedOff").toString())
    }
}
