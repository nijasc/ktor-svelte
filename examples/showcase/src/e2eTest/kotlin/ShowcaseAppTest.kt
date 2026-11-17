import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.net.CookieManager
import java.net.ServerSocket
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.nio.file.Path
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import kotlin.test.fail

private const val ADMIN_EMAIL = "ada@example.com"
private const val MEMBER_EMAIL = "grace@example.com"
private const val ADMIN_PASSWORD = "e2e-admin-password"
private const val MEMBER_PASSWORD = "e2e-member-password"
private const val SIGN_KEY = "00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff"
private const val PNG_PIXEL = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
private const val MAX_UPLOAD_BYTES = 5 * 1024 * 1024

class RunningApp(
    private val process: Process,
    val port: Int,
) {
    fun stop() {
        process.destroyForcibly()
    }
}

class Browser(
    private val port: Int,
) {
    private val http =
        HttpClient
            .newBuilder()
            .cookieHandler(CookieManager())
            .followRedirects(HttpClient.Redirect.NEVER)
            .build()

    fun send(
        method: String,
        path: String,
        body: String? = null,
        vararg headers: Pair<String, String>,
    ): HttpResponse<String> {
        val publisher = body?.let(HttpRequest.BodyPublishers::ofString) ?: HttpRequest.BodyPublishers.noBody()
        val builder = HttpRequest.newBuilder(URI.create("http://localhost:$port$path")).method(method, publisher)
        if (body != null) builder.header("Content-Type", "application/json")
        headers.forEach { (name, value) -> builder.setHeader(name, value) }
        return http.send(builder.build(), HttpResponse.BodyHandlers.ofString())
    }

    fun bytes(path: String): HttpResponse<ByteArray> =
        http.send(HttpRequest.newBuilder(URI.create("http://localhost:$port$path")).build(), HttpResponse.BodyHandlers.ofByteArray())

    fun upload(
        path: String,
        fileName: String,
        contentType: String,
        content: ByteArray,
    ): HttpResponse<String> {
        val boundary = "e2e-boundary-${System.nanoTime()}"
        val head = "--$boundary\r\nContent-Disposition: form-data; name=\"file\"; filename=\"$fileName\"\r\nContent-Type: $contentType\r\n\r\n"
        val body = head.toByteArray() + content + "\r\n--$boundary--\r\n".toByteArray()
        val request =
            HttpRequest
                .newBuilder(URI.create("http://localhost:$port$path"))
                .header("Content-Type", "multipart/form-data; boundary=$boundary")
                .POST(HttpRequest.BodyPublishers.ofByteArray(body))
                .build()
        return http.send(request, HttpResponse.BodyHandlers.ofString())
    }

    fun signIn(
        email: String,
        password: String,
    ): HttpResponse<String> = send("POST", "/api/session", """{"email":"$email","password":"$password"}""")
}

class ShowcaseAppTest {
    companion object {
        @TempDir
        @JvmStatic
        lateinit var directory: Path

        private lateinit var app: RunningApp
        private lateinit var admin: Browser
        private lateinit var member: Browser
        private var counter = 0

        fun start(
            name: String,
            vararg environment: Pair<String, String>,
        ): RunningApp {
            val port = ServerSocket(0).use { it.localPort }
            val java = File(System.getProperty("java.home"), "bin/java").path
            val process =
                ProcessBuilder(java, "-jar", System.getProperty("example.jar"))
                    .apply {
                        environment()["PORT"] = port.toString()
                        environment()["SHOWCASE_DATA"] = directory.resolve(name).toString()
                        environment()["SHOWCASE_ADMIN_PASSWORD"] = ADMIN_PASSWORD
                        environment()["SHOWCASE_MEMBER_PASSWORD"] = MEMBER_PASSWORD
                        environment()["SHOWCASE_INSECURE_COOKIES"] = "true"
                        environment()["SESSION_SIGN_KEY"] = SIGN_KEY
                        environment().putAll(environment)
                    }.redirectErrorStream(true)
                    .redirectOutput(ProcessBuilder.Redirect.DISCARD)
                    .start()
            val probe = Browser(port)
            repeat(200) {
                val ready = runCatching { probe.send("GET", "/_ktor-svelte/health").statusCode() == 200 }.getOrDefault(false)
                if (ready) return RunningApp(process, port)
                Thread.sleep(100)
            }
            process.destroyForcibly()
            fail("The showcase app did not start")
        }

        @JvmStatic
        @BeforeAll
        fun startApp() {
            app = start("main", "SHOWCASE_LOGIN_ATTEMPTS" to "1000", "APP_NAME" to "from e2e")
            admin = Browser(app.port).also { assertEquals(200, it.signIn(ADMIN_EMAIL, ADMIN_PASSWORD).statusCode()) }
            member = Browser(app.port).also { assertEquals(200, it.signIn(MEMBER_EMAIL, MEMBER_PASSWORD).statusCode()) }
        }

        @JvmStatic
        @AfterAll
        fun stopApp() {
            app.stop()
        }

        @Synchronized
        fun unique(prefix: String): String = "$prefix${++counter}x${System.nanoTime() % 100000}"
    }

    private val html = "Accept" to "text/html"

    private fun anonymous() = Browser(app.port)

    private fun id(response: HttpResponse<String>): String = Regex(""""id":\s*(\d+)""").find(response.body())!!.groupValues[1]

    private fun createTask(
        browser: Browser,
        title: String,
        extra: String = "",
    ): String {
        val created = browser.send("POST", "/api/tasks", """{"title":"$title"$extra}""")
        assertEquals(201, created.statusCode(), created.body())
        return id(created)
    }

    @Test
    fun `public pages are served and everything else needs a session`() {
        val visitor = anonymous()
        listOf("/", "/login", "/register", "/about").forEach { path ->
            val response = visitor.send("GET", path, null, html)
            assertEquals(200, response.statusCode(), path)
            assertContains(response.body(), "<html", message = path)
        }
        listOf("/board", "/tasks/1", "/settings", "/admin").forEach { path ->
            val response = visitor.send("GET", path, null, html)
            assertEquals(302, response.statusCode(), path)
            assertEquals("/login", response.headers().firstValue("Location").orElse(""), path)
        }
        listOf("/api/tasks", "/api/me", "/api/stats", "/api/members", "/api/admin/users", "/api/attachments/1").forEach { path ->
            val response = visitor.send("GET", path)
            assertEquals(401, response.statusCode(), path)
            assertContains(response.body(), "Sign in first.", message = path)
        }
        assertEquals(401, visitor.send("POST", "/api/tasks", """{"title":"Nope"}""").statusCode())
    }

    @Test
    fun `signing in sets a protected cookie and signing out ends the session`() {
        val browser = anonymous()
        val refused = browser.signIn(ADMIN_EMAIL, "not-the-password")
        assertEquals(401, refused.statusCode())
        assertContains(refused.body(), "Wrong email or password.")
        assertEquals(401, browser.signIn("nobody@example.com", ADMIN_PASSWORD).statusCode())

        val accepted = browser.signIn("  ADA@example.com ", ADMIN_PASSWORD)
        assertEquals(200, accepted.statusCode())
        assertFalse(accepted.body().contains("password", ignoreCase = true))
        val cookie = accepted.headers().firstValue("Set-Cookie").orElse("")
        assertContains(cookie, "HttpOnly")
        assertContains(cookie, "SameSite=Lax")
        assertContains(browser.send("GET", "/api/me").body(), ADMIN_EMAIL)

        val page = browser.send("GET", "/board", null, html)
        assertEquals(200, page.statusCode())
        assertContains(page.headers().firstValue("Cache-Control").orElse(""), "private")

        assertEquals(204, browser.send("DELETE", "/api/session").statusCode())
        assertEquals(401, browser.send("GET", "/api/me").statusCode())
    }

    @Test
    fun `a forged session cookie is refused`() {
        val response = anonymous().send("GET", "/api/me", null, "Cookie" to "showcase_session=userId%3D%2523i1")
        assertEquals(401, response.statusCode())
    }

    @Test
    fun `tasks can be created changed moved commented and deleted`() {
        val title = unique("Lifecycle")
        val created = admin.send("POST", "/api/tasks", """{"title":"$title","labels":["e2e"],"priority":"HIGH","dueOn":"2026-12-24"}""")
        assertEquals(201, created.statusCode())
        assertContains(created.body(), """"status":"TODO"""")
        assertContains(created.body(), """"creator":{"id":1,"name":"Ada Lovelace"}""")
        val id = id(created)

        val updated = member.send("PUT", "/api/tasks/$id", """{"title":"$title edited","assigneeId":2}""")
        assertEquals(200, updated.statusCode())
        assertContains(updated.body(), """"assignee":{"id":2,"name":"Grace Hopper"}""")
        assertContains(member.send("POST", "/api/tasks/$id/status", """{"status":"DOING"}""").body(), """"status":"DOING"""")

        val comment = member.send("POST", "/api/tasks/$id/comments", """{"body":"Looks fine."}""")
        assertEquals(201, comment.statusCode())
        assertContains(admin.send("GET", "/api/tasks/$id/comments").body(), "Looks fine.")
        assertContains(admin.send("GET", "/api/tasks/$id").body(), """"comments":1""")

        val activity = admin.send("GET", "/api/tasks/$id/activity").body()
        assertContains(activity, """"type":"created"""")
        assertContains(activity, """"type":"commented"""")

        val refused = member.send("DELETE", "/api/tasks/$id")
        assertEquals(403, refused.statusCode())
        assertContains(refused.body(), "Only the person who created this")
        assertEquals(204, admin.send("DELETE", "/api/tasks/$id").statusCode())
        assertEquals(404, admin.send("GET", "/api/tasks/$id").statusCode())
        assertEquals(404, admin.send("GET", "/api/tasks/$id/comments").statusCode())
    }

    @Test
    fun `the cookie declared in Kotlin is in the generated client with its type and options`() {
        assertContains(
            File("frontend/src/lib/api/cookies.ts").readText(),
            "boardMine: typedCookie<boolean, boolean>('board-mine', " +
                "{ kind: 'boolean', default: false, maxAge: 7776000, path: '/', sameSite: 'lax', secure: false, category: 'preferences' })",
        )
    }

    @Test
    fun `saving a task with an old version is answered with the current one`() {
        val created = member.send("POST", "/api/tasks", """{"title":"Versioned"}""")
        val id = id(created)
        val version = Regex(""""version":(\d+)""").find(created.body())!!.groupValues[1]
        Thread.sleep(5)
        val first = member.send("PUT", "/api/tasks/$id", """{"title":"Theirs","version":$version}""")
        assertEquals(200, first.statusCode())

        val stale = member.send("PUT", "/api/tasks/$id", """{"title":"Mine","version":$version}""")
        assertEquals(409, stale.statusCode())
        assertContains(stale.body(), """"message":"Someone else changed this task while you were editing it.","code":"version.conflict","current":{"id":$id,"title":"Theirs"""")
        assertEquals(200, member.send("PUT", "/api/tasks/$id", """{"title":"No version sent"}""").statusCode())
    }

    @Test
    fun `a patch changes the fields it names, clears the ones it sets to null and leaves the rest`() {
        val created = member.send("POST", "/api/tasks", """{"title":"Patched","description":"Keep me","dueOn":"2026-12-24","labels":["a"]}""")
        val id = id(created)
        val renamed = member.send("PATCH", "/api/tasks/$id", """{"title":"  Patched twice  "}""")
        assertEquals(200, renamed.statusCode())
        assertContains(renamed.body(), """"title":"Patched twice"""")
        assertContains(renamed.body(), """"description":"Keep me"""")
        assertContains(renamed.body(), """"dueOn":"2026-12-24"""")

        val cleared = member.send("PATCH", "/api/tasks/$id", """{"dueOn":null}""")
        assertEquals(200, cleared.statusCode())
        assertFalse("2026-12-24" in cleared.body())
        assertContains(cleared.body(), """"labels":["a"]""")

        assertEquals(400, member.send("PATCH", "/api/tasks/$id", """{"titel":"typo"}""").statusCode())
        assertEquals(400, member.send("PATCH", "/api/tasks/$id", """{"title":null}""").statusCode())
        assertEquals(422, member.send("PATCH", "/api/tasks/$id", """{"title":"   "}""").statusCode())
        assertEquals(409, member.send("PATCH", "/api/tasks/$id", """{"title":"Stale","version":1}""").statusCode())
        assertContains(member.send("GET", "/api/tasks/$id").body(), """"title":"Patched twice"""")
    }

    @Test
    fun `the upload route says which fields its form has, and the generated function takes them by name`() {
        val services = File("frontend/src/lib/api/services.ts").readText()
        assertContains(services, "export const tasksAttachments = (id: string | number, body: { file: File }, options?: RequestOptions) =>")
        assertContains(services, "multipart: true, operation: 'tasks.attachments'")
    }

    @Test
    fun `a write that is sent twice with one key creates one task`() {
        val key = "e2e-" + System.nanoTime()
        val title = "Once $key"
        val first = member.send("POST", "/api/tasks", """{"title":"$title"}""", "Idempotency-Key" to key)
        val again = member.send("POST", "/api/tasks", """{"title":"$title"}""", "Idempotency-Key" to key)
        assertEquals(201, first.statusCode())
        assertEquals(201, again.statusCode())
        assertEquals(id(first), id(again))
        assertEquals("true", again.headers().firstValue("Idempotency-Replayed").orElse(""))
        assertEquals(first.headers().firstValue("X-Ktor-Svelte-Navigate"), again.headers().firstValue("X-Ktor-Svelte-Navigate"))
        assertEquals(1, Regex(""""title":"$title"""").findAll(member.send("GET", "/api/tasks?search=$key").body()).count())

        val other = admin.send("POST", "/api/tasks", """{"title":"$title by someone else"}""", "Idempotency-Key" to key)
        assertEquals(false, id(other) == id(first))
    }

    @Test
    fun `wrong environment variables stop the app at once, with one table that names them all`() {
        val runtime = File(System.getProperty("java.home"), "bin/java").path
        val process =
            ProcessBuilder(runtime, "-jar", System.getProperty("example.jar"))
                .apply {
                    environment()["PORT"] = "eighty"
                    environment()["SHOWCASE_REGISTRATION"] = "maybe"
                    environment()["SHOWCASE_DATA"] = directory.resolve("never-started").toString()
                }.redirectErrorStream(true)
                .start()
        val output = process.inputStream.bufferedReader().readText()
        assertTrue(process.waitFor(60, java.util.concurrent.TimeUnit.SECONDS), output)
        assertFalse(process.exitValue() == 0, output)
        assertContains(output, "The app cannot start: 2 environment variables are missing or wrong.")
        assertTrue(Regex("""PORT\s+"eighty" is not a whole number\s+Port the server listens on""").containsMatchIn(output), output)
        assertTrue(Regex("""SHOWCASE_REGISTRATION\s+"maybe" is not one of Open, Closed""").containsMatchIn(output), output)
        assertFalse(directory.resolve("never-started").toFile().exists())
        assertContains(File(".env.example").readText(), "# SHOWCASE_REGISTRATION=Open")
    }

    @Test
    fun `an id that is a value class in Kotlin is its own type in the generated client`() {
        val types = File("frontend/src/lib/api/types.ts").readText().replace("\r\n", "\n")
        assertContains(types, "export type AttachmentId = number & { readonly [brand]: 'AttachmentId' };")
        assertContains(types, "export interface Attachment {\n    id: AttachmentId;\n    taskId: number;")
        assertContains(types, "        id: AttachmentId(0),")
    }

    @Test
    fun `the limits the server uses are in the generated client as typed constants`() {
        val constants = File("frontend/src/lib/api/constants.ts").readText()
        assertEquals(
            "export const BoardLimits = {\n    MAX_LABELS: 5,\n    MAX_TITLE_LENGTH: 120,\n    PAGE_SIZE: 5\n} as const;\n",
            constants.replace("\r\n", "\n"),
        )
    }

    @Test
    fun `creating a task tells the browser which page to open`() {
        val created = admin.send("POST", "/api/tasks", """{"title":"${unique("Navigate")}"}""")
        assertEquals(201, created.statusCode())
        val id = Regex(""""id":\s*(\d+)""").find(created.body())!!.groupValues[1]
        assertEquals("/tasks/$id", created.headers().firstValue("X-Ktor-Svelte-Navigate").orElse(null))
        assertEquals("success:Task%20created.", created.headers().firstValue("X-Ktor-Svelte-Toast").orElse(null))
    }

    @Test
    fun `deleting a task asks the browser to show a toast in the visitor's language`() {
        val english = createTask(admin, unique("Toast"))
        val answer = admin.send("DELETE", "/api/tasks/$english")
        assertEquals(204, answer.statusCode())
        assertEquals("success:Task%20deleted.%20It%20had%20no%20comments.", answer.headers().firstValue("X-Ktor-Svelte-Toast").orElse(null))

        fun deletedWith(
            comments: Int,
            language: String,
        ): String {
            val id = createTask(admin, unique("Counted"))
            repeat(comments) { assertEquals(201, admin.send("POST", "/api/tasks/$id/comments", """{"body":"Comment $it"}""").statusCode()) }
            val deleted = admin.send("DELETE", "/api/tasks/$id", null, "Accept-Language" to language)
            return java.net.URLDecoder.decode(deleted.headers().firstValue("X-Ktor-Svelte-Toast").orElse(""), Charsets.UTF_8)
        }
        assertEquals("success:Task deleted. Its 1 comment went with it.", deletedWith(1, "en"))
        assertEquals("success:Task deleted. Its 2 comments went with it.", deletedWith(2, "en"))
        assertEquals("success:Aufgabe gel\u00f6scht. Ihr 1 Kommentar ist mit weg.", deletedWith(1, "de"))
        assertEquals("success:Aufgabe gel\u00f6scht. Sie hatte keine Kommentare.", deletedWith(0, "de"))
    }

    @Test
    fun `invalid input is refused with one message per field`() {
        val blank = admin.send("POST", "/api/tasks", """{"title":"  "}""")
        assertEquals(422, blank.statusCode())
        assertContains(blank.body(), """"title":["Must be at least 1 character.","A task needs a title."]""")

        val labels = admin.send("POST", "/api/tasks", """{"title":"Ok","labels":["Not Valid"]}""")
        assertEquals(422, labels.statusCode())
        assertContains(labels.body(), "Labels are lowercase letters")

        assertContains(admin.send("POST", "/api/tasks", """{"title":"Ok","dueOn":"soon"}""").body(), "Use a date such as 2026-12-24.")
        assertContains(admin.send("POST", "/api/tasks", """{"title":"Ok","assigneeId":9999}""").body(), """"assigneeId":["That user does not exist."]""")
        assertEquals(422, admin.send("POST", "/api/tasks", """{"title":"${"x".repeat(121)}"}""").statusCode())
        assertEquals(400, admin.send("POST", "/api/tasks", """{"title":"Ok","priority":"URGENT"}""").statusCode())

        val id = createTask(admin, unique("Valid"))
        assertEquals(422, admin.send("PUT", "/api/tasks/$id", """{"title":""}""").statusCode())
        assertEquals(422, admin.send("POST", "/api/tasks/$id/comments", """{"body":" "}""").statusCode())
    }

    @Test
    fun `the board pages through tasks and filters them`() {
        val token = unique("pagetoken")
        val ids = (1..3).map { createTask(member, "$token number $it", ""","labels":["$token"]""") }

        val first = admin.send("GET", "/api/tasks?search=$token&limit=2")
        assertContains(first.body(), "$token number 3")
        assertContains(first.body(), "$token number 2")
        assertFalse(first.body().contains("$token number 1"))
        val cursor = Regex(""""next":"(\d+)"""").find(first.body())!!.groupValues[1]
        assertEquals(ids[1], cursor)

        val second = admin.send("GET", "/api/tasks?search=$token&limit=2&cursor=$cursor")
        assertContains(second.body(), "$token number 1")
        assertContains(second.body(), """"next":null""")

        assertEquals(3, Regex(""""title":""").findAll(admin.send("GET", "/api/tasks?label=$token&limit=50").body()).count())
        assertContains(admin.send("GET", "/api/tasks?search=${token.uppercase()}").body(), "$token number 1")
        assertContains(admin.send("GET", "/api/tasks?search=%25&limit=50").body(), """"items":[]""")
        assertContains(admin.send("GET", "/api/tasks?search=$token&status=DONE").body(), """"items":[]""")
        assertFalse(admin.send("GET", "/api/tasks?mine=true&limit=50").body().contains(token))

        val wrong = admin.send("GET", "/api/tasks?status=LATER&limit=many&mine=maybe")
        assertEquals(422, wrong.statusCode())
        assertContains(wrong.body(), """"status":["Must be one of TODO, DOING, DONE."]""")
        assertContains(wrong.body(), """"limit":["Must be a whole number."]""")
        assertContains(wrong.body(), """"mine":["Must be true or false."]""")
        assertEquals(422, admin.send("GET", "/api/tasks?limit=0").statusCode())
        val services = File("frontend/src/lib/api/services.ts").readText()
        assertContains(
            services,
            "query?: { search?: string; status?: Status; label?: string; mine?: boolean; limit?: number; cursor?: string }",
        )
        assertContains(admin.send("GET", "/api/stats").body(), """"$token":3""")
    }

    @Test
    fun `files can be attached downloaded and removed`() {
        val id = createTask(member, unique("Files"))
        val pixel = java.util.Base64.getDecoder().decode(PNG_PIXEL)

        val stored = member.upload("/api/tasks/$id/attachments", "../../evil <b>.png", "image/png", pixel)
        assertEquals(201, stored.statusCode(), stored.body())
        assertContains(stored.body(), """"name":"evil _b_.png"""")
        val fileId = id(stored)

        val image = admin.bytes("/api/attachments/$fileId")
        assertEquals(200, image.statusCode())
        assertTrue(pixel.contentEquals(image.body()))
        assertEquals("image/png", image.headers().firstValue("Content-Type").orElse(""))
        assertContains(image.headers().firstValue("Content-Disposition").orElse(""), "inline")
        assertEquals("nosniff", image.headers().firstValue("X-Content-Type-Options").orElse(""))

        val csv = member.upload("/api/tasks/$id/attachments", "data.csv", "text/csv", "a,b\n1,2\n".toByteArray())
        assertContains(admin.bytes("/api/attachments/${id(csv)}").headers().firstValue("Content-Disposition").orElse(""), "attachment")

        val svg = member.upload("/api/tasks/$id/attachments", "x.svg", "image/svg+xml", "<svg onload=\"alert(1)\"/>".toByteArray())
        assertEquals(415, svg.statusCode())
        assertEquals("""{"message":"x.svg is not an accepted file type.","code":"upload.type","file":"x.svg"}""", svg.body())
        assertEquals(415, member.upload("/api/tasks/$id/attachments", "page.html", "text/html", "<script>alert(1)</script>".toByteArray()).statusCode())

        val tooLarge = member.upload("/api/tasks/$id/attachments", "big.png", "image/png", ByteArray(MAX_UPLOAD_BYTES + 128 * 1024))
        assertEquals(413, tooLarge.statusCode())

        assertContains(admin.send("GET", "/api/tasks/$id").body(), """"attachments":2""")
        assertContains(admin.send("GET", "/api/tasks/$id/activity").body(), """"type":"attached"""")

        val outsider = anonymous().also { browser -> register(browser, unique("outsider")) }
        assertEquals(403, outsider.send("DELETE", "/api/attachments/$fileId").statusCode())
        assertEquals(204, member.send("DELETE", "/api/attachments/$fileId").statusCode())
        assertEquals(404, admin.bytes("/api/attachments/$fileId").statusCode())
        assertEquals(404, member.upload("/api/tasks/999999/attachments", "a.png", "image/png", pixel).statusCode())
    }

    private fun register(
        browser: Browser,
        name: String,
    ): HttpResponse<String> = browser.send("POST", "/api/users", """{"email":"$name@example.com","name":"$name","password":"registered-password"}""")

    @Test
    fun `people can register once with a valid address and a long password`() {
        val name = unique("newcomer")
        val browser = anonymous()
        val weak = browser.send("POST", "/api/users", """{"email":"$name@example.com","name":"$name","password":"short"}""")
        assertEquals(422, weak.statusCode())
        assertContains(weak.body(), "Must be at least 10 characters.")
        val address = browser.send("POST", "/api/users", """{"email":"not-an-address","name":"$name","password":"registered-password"}""")
        assertContains(address.body(), "Enter an email address such as ada@example.com.")

        val created = register(browser, name)
        assertEquals(201, created.statusCode())
        assertContains(created.body(), """"role":"MEMBER"""")
        assertContains(browser.send("GET", "/api/me").body(), "$name@example.com")

        val again = register(anonymous(), name.uppercase())
        assertEquals(409, again.statusCode())
        assertContains(again.body(), "already has an account")
        assertContains(again.body(), """"code":"EmailTaken"""")
    }

    @Test
    fun `only admins reach the admin area and the last admin stays`() {
        val refused = member.send("GET", "/api/admin/users")
        assertEquals(403, refused.statusCode())
        assertContains(refused.body(), "Only admins can do that.")
        assertEquals(403, member.send("PUT", "/api/admin/users/2/role", """{"role":"ADMIN"}""").statusCode())
        assertContains(member.send("GET", "/api/me").body(), """"role":"MEMBER"""")

        assertContains(admin.send("GET", "/api/admin/users").body(), MEMBER_EMAIL)
        val lastAdmin = admin.send("PUT", "/api/admin/users/1/role", """{"role":"MEMBER"}""")
        assertEquals(409, lastAdmin.statusCode())
        assertContains(lastAdmin.body(), """"code":"LastAdmin"""")
        assertEquals(409, admin.send("PUT", "/api/admin/users/1/active", """{"active":false}""").statusCode())
        assertEquals(404, admin.send("PUT", "/api/admin/users/999999/role", """{"role":"ADMIN"}""").statusCode())
    }

    @Test
    fun `a deactivated person loses the session and cannot sign in`() {
        val name = unique("leaver")
        val browser = anonymous()
        val userId = id(register(browser, name))
        assertEquals(200, browser.send("GET", "/api/me").statusCode())

        assertContains(admin.send("PUT", "/api/admin/users/$userId/active", """{"active":false}""").body(), """"active":false""")
        assertEquals(401, browser.send("GET", "/api/me").statusCode())
        assertEquals(401, anonymous().signIn("$name@example.com", "registered-password").statusCode())

        admin.send("PUT", "/api/admin/users/$userId/active", """{"active":true}""")
        assertEquals(200, anonymous().signIn("$name@example.com", "registered-password").statusCode())
    }

    @Test
    fun `passwords change only with the current one`() {
        val name = unique("changer")
        val browser = anonymous()
        register(browser, name)

        val wrong = browser.send("PUT", "/api/me/password", """{"current":"not-this-one","next":"another-long-password"}""")
        assertEquals(403, wrong.statusCode())
        assertEquals(422, browser.send("PUT", "/api/me/password", """{"current":"registered-password","next":"short"}""").statusCode())
        assertEquals(204, browser.send("PUT", "/api/me/password", """{"current":"registered-password","next":"another-long-password"}""").statusCode())
        assertEquals(401, anonymous().signIn("$name@example.com", "registered-password").statusCode())
        assertEquals(200, anonymous().signIn("$name@example.com", "another-long-password").statusCode())

        assertContains(browser.send("PUT", "/api/me", """{"name":"Renamed $name"}""").body(), "Renamed $name")
        assertEquals(422, browser.send("PUT", "/api/me", """{"name":" "}""").statusCode())
    }

    @Test
    fun `api errors follow the language of the person`() {
        val german = admin.send("GET", "/api/tasks/999999", null, "Cookie" to "ktor_svelte_locale=de")
        assertEquals(404, german.statusCode())
        assertContains(admin.send("GET", "/api/tasks/999999").body(), "That task does not exist.")
        assertContains(anonymous().send("GET", "/api/tasks", null, "Accept-Language" to "de-DE").body(), "Bitte melde dich zuerst an.")
        assertContains(anonymous().send("GET", "/api/greeting?name=Ada", null, "Accept-Language" to "de").body(), "Hallo Ada")
    }

    @Test
    fun `writes from another site are refused`() {
        val response = admin.send("POST", "/api/tasks", """{"title":"Forged"}""", "Origin" to "https://evil.example")
        assertEquals(403, response.statusCode())
        val deleted = admin.send("DELETE", "/api/session", null, "Origin" to "https://evil.example")
        assertEquals(403, deleted.statusCode())
        assertEquals(200, admin.send("GET", "/api/me").statusCode())
    }

    @Test
    fun `the public config and the health check answer everyone`() {
        val visitor = anonymous()
        val config = visitor.send("GET", "/_ktor-svelte/config.json")
        assertContains(config.body(), """"appName":"from e2e"""")
        assertContains(config.body(), """"registrationOpen":true""")
        assertContains(visitor.send("GET", "/_ktor-svelte/health").body(), """"status":"up"""")
        assertContains(visitor.send("GET", "/login", null, html).body(), """id="ktor-svelte-config"""")
        assertEquals(200, visitor.send("GET", "/robots.txt").statusCode())
        assertEquals(200, visitor.send("GET", "/favicon.ico").statusCode())
    }

    @Test
    fun `sign in is rate limited and registration can be closed`() {
        val limited = start("limited", "SHOWCASE_REGISTRATION" to "closed")
        try {
            val browser = Browser(limited.port)
            val closed = browser.send("POST", "/api/users", """{"email":"late@example.com","name":"Late","password":"registered-password"}""")
            assertEquals(403, closed.statusCode())
            assertContains(closed.body(), "Registration is closed")
            val statuses = (1..12).map { browser.signIn(ADMIN_EMAIL, "wrong-password-$it").statusCode() }
            assertEquals(401, statuses.first())
            assertEquals(429, statuses.last())
            assertEquals(429, browser.signIn(ADMIN_EMAIL, ADMIN_PASSWORD).statusCode())
        } finally {
            limited.stop()
        }
    }

    @Test
    fun `data survives a restart`() {
        val first = start("restart")
        val title = unique("Survivor")
        try {
            val browser = Browser(first.port).also { it.signIn(ADMIN_EMAIL, ADMIN_PASSWORD) }
            createTask(browser, title)
        } finally {
            first.stop()
        }
        val second = start("restart")
        try {
            val browser = Browser(second.port).also { assertEquals(200, it.signIn(ADMIN_EMAIL, ADMIN_PASSWORD).statusCode()) }
            assertContains(browser.send("GET", "/api/tasks?search=$title").body(), title)
        } finally {
            second.stop()
        }
    }
}
