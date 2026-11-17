package io.github.nijasc.ktor.svelte

import io.ktor.client.HttpClient
import io.ktor.client.plugins.cookies.HttpCookies
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.put
import io.ktor.client.request.setBody
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.server.application.install
import io.ktor.server.response.respond
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.sessions.Sessions
import io.ktor.server.sessions.cookie
import io.ktor.server.sessions.get
import io.ktor.server.sessions.sessions
import io.ktor.server.sessions.set
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import org.junit.jupiter.api.io.TempDir
import java.nio.file.Path
import kotlin.io.path.createDirectories
import kotlin.io.path.exists
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse

@Serializable
enum class Density { Cosy, Compact }

@Serializable
data class Settings(
    val theme: String? = null,
    val locale: String? = null,
    val density: Density = Density.Cosy,
    val pageSize: Int = 20,
    val pinned: List<String> = emptyList(),
)

class PreferencesTest {
    @TempDir
    lateinit var dir: Path

    private val kept = mutableMapOf<Int, Settings>()

    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            dir.resolve("package.json").writeText("{}")
            dir.resolve("src/lib").createDirectories()
            val build = fixtureBuild()
            application {
                install(Sessions) { cookie<MemberSession>("member") }
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    generateTs = true
                    generateTsOutput = dir.resolve("src/lib/api").toString()
                    transport { json() }
                    currentUser<Member> { sessions.get<MemberSession>()?.let { Member(it.id, "Ada") } }
                    preferences<Settings, Member>(
                        defaults = Settings(pageSize = 25),
                        load = { member -> kept[member.id] },
                        save = { member, settings -> kept[member.id] = settings },
                    )
                }
                routing {
                    post("/api/session/{id}") {
                        call.sessions.set(MemberSession(call.parameters["id"]!!.toInt()))
                        call.respond(HttpStatusCode.NoContent)
                    }
                }
            }
            block()
        }

    private suspend fun ApplicationTestBuilder.signedIn(id: Int): HttpClient {
        val browser = createClient { install(HttpCookies) }
        browser.post("/api/session/$id") { header(HttpHeaders.Origin, "http://localhost") }
        return browser
    }

    private suspend fun HttpClient.save(json: String): HttpResponse =
        put("/api/preferences") {
            header(HttpHeaders.Origin, "http://localhost")
            contentType(ContentType.Application.Json)
            setBody(json)
        }

    private val defaults = """{"theme":null,"locale":null,"density":"Cosy","pageSize":25,"pinned":[]}"""

    @Test
    fun `a visitor gets the defaults and cannot save`() =
        app {
            val answer = client.get("/api/preferences")
            assertEquals(HttpStatusCode.OK, answer.status)
            assertEquals("""{"preferences":$defaults,"signedIn":false}""", answer.bodyAsText())
            assertEquals("no-store", answer.headers[HttpHeaders.CacheControl])
            val refused = client.save("""{"pageSize":50}""")
            assertEquals(HttpStatusCode.Unauthorized, refused.status)
            assertEquals(emptyMap(), kept)
        }

    @Test
    fun `a user gets the defaults until something is saved, and then what was saved`() =
        app {
            val ada = signedIn(1)
            assertEquals("""{"preferences":$defaults,"signedIn":true}""", ada.get("/api/preferences").bodyAsText())

            val saved = ada.save("""{"theme":"dracula","density":"Compact","pinned":["a","b"]}""")
            assertEquals(HttpStatusCode.OK, saved.status)
            val stored = """{"theme":"dracula","locale":null,"density":"Compact","pageSize":20,"pinned":["a","b"]}"""
            assertEquals("""{"preferences":$stored,"signedIn":true}""", saved.bodyAsText())
            assertEquals(Settings(theme = "dracula", density = Density.Compact, pinned = listOf("a", "b")), kept[1])
            assertEquals("""{"preferences":$stored,"signedIn":true}""", ada.get("/api/preferences").bodyAsText())

            assertEquals("""{"preferences":$defaults,"signedIn":true}""", signedIn(2).get("/api/preferences").bodyAsText(), "kept per user")
            assertEquals(HttpStatusCode.BadRequest, ada.save("""{"density":"Huge"}""").status)
        }

    @Test
    fun `the frontend gets the type, the defaults and a store bound to the theme and locale cookies`() =
        app {
            startApplication()
            val api = dir.resolve("src/lib/api")
            val types = api.resolve("types.ts").readText()
            assertContains(types, "export interface UserPreferences {\n")
            assertContains(types, "    pageSize?: number;\n")
            assertEquals(
                "import { preferenceStore, type PreferenceState } from './client.js';\n" +
                    "import type { UserPreferences } from './types.js';\n\n" +
                    "const defaults: Required<UserPreferences> = {\n" +
                    "    \"theme\": null,\n" +
                    "    \"locale\": null,\n" +
                    "    \"density\": \"Cosy\",\n" +
                    "    \"pageSize\": 25,\n" +
                    "    \"pinned\": []\n" +
                    "};\n\n" +
                    "const state = \$state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });\n\n" +
                    "export const preferences = preferenceStore<Required<UserPreferences>>('/api/preferences', state, defaults, " +
                    "{ theme: 'ktor_svelte_theme', locale: 'ktor_svelte_locale' });\n",
                api.resolve("preferences.svelte.ts").readText(),
            )
            assertContains(api.resolve("index.ts").readText(), "export * from './preferences.svelte.js';\n")
            assertFalse("preferences" in api.resolve("services.ts").readText())
        }

    @Test
    fun `preferences need the user they belong to`() {
        val failure =
            assertFailsWith<IllegalStateException> {
                testApplication {
                    val build = fixtureBuild()
                    application {
                        install(Svelte) {
                            source = SvelteSource.Directory(build)
                            dev { mode = DevMode.Never }
                            preferences<Settings, Member>(defaults = Settings(), load = { null }, save = { _, _ -> })
                        }
                    }
                    startApplication()
                }
            }
        assertContains(failure.message.orEmpty(), "add currentUser<Member> { ... }")
        assertFalse(dir.resolve("src/lib/api/preferences.svelte.ts").exists())
    }
}
