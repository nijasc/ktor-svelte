package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.dev.RequestSql
import io.ktor.client.request.get
import io.ktor.client.request.prepareGet
import io.ktor.client.statement.bodyAsChannel
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import io.ktor.utils.io.readUTF8Line
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.withContext
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.double
import kotlinx.serialization.json.int
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import org.jetbrains.exposed.v1.core.Table
import org.jetbrains.exposed.v1.core.eq
import org.jetbrains.exposed.v1.jdbc.Database
import org.jetbrains.exposed.v1.jdbc.SchemaUtils
import org.jetbrains.exposed.v1.jdbc.insert
import org.jetbrains.exposed.v1.jdbc.selectAll
import org.jetbrains.exposed.v1.jdbc.transactions.transaction
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

private object Notes : Table("request_sql_notes") {
    val id = integer("id")
    val title = varchar("title", 50)
    override val primaryKey = PrimaryKey(id)
}

class RequestSqlTest {
    private val database =
        Database.connect("jdbc:h2:mem:request-sql-${System.nanoTime()};DB_CLOSE_DELAY=-1", driver = "org.h2.Driver").also { database ->
            transaction(database) {
                SchemaUtils.create(Notes)
                (1..6).forEach { number ->
                    Notes.insert {
                        it[id] = number
                        it[title] = "Note $number"
                    }
                }
            }
        }

    private fun entries(vararg paths: String): List<JsonObject> {
        lateinit var read: List<JsonObject>
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.Always
                    }
                }
                routing {
                    get("/api/list") {
                        val titles = withContext(Dispatchers.IO) { transaction(database) { Notes.selectAll().map { it[Notes.title] } } }
                        call.respondText(titles.joinToString())
                    }
                    get("/api/one-by-one") {
                        val titles =
                            withContext(Dispatchers.IO) {
                                transaction(database) {
                                    Notes.selectAll().map { it[Notes.id] }.map { id ->
                                        Notes.selectAll().where { Notes.id eq id }.single()[Notes.title]
                                    }
                                }
                            }
                        call.respondText(titles.joinToString())
                    }
                    get("/api/side-by-side") {
                        val counts =
                            coroutineScope {
                                (1..3).map { async(Dispatchers.IO) { transaction(database) { Notes.selectAll().count() } } }.awaitAll()
                            }
                        call.respondText(counts.joinToString())
                    }
                    get("/api/no-database") { call.respondText("none") }
                }
            }
            paths.forEach { client.get(it) }
            read =
                client.prepareGet("/_ktor-svelte/dev/requests").execute { response ->
                    val channel = response.bodyAsChannel()
                    repeat(3) { channel.readUTF8Line() }
                    paths.map {
                        val line = channel.readUTF8Line().orEmpty()
                        channel.readUTF8Line()
                        Json.parseToJsonElement(line.removePrefix("data: ")).jsonObject
                    }
                }
        }
        return read
    }

    @Test
    fun `each call lists how many statements it ran, even on another thread, and a call without any says nothing`() {
        val (list, none, parallel) = entries("/api/list", "/api/no-database", "/api/side-by-side")
        val sql = list.getValue("sql").jsonObject
        assertEquals(1, sql.getValue("count").jsonPrimitive.int)
        assertTrue(sql.getValue("ms").jsonPrimitive.double >= 0.0)
        assertFalse("repeated" in sql)
        assertNull(none["sql"])
        assertEquals(
            3,
            parallel
                .getValue("sql")
                .jsonObject
                .getValue("count")
                .jsonPrimitive.int,
        )
    }

    @Test
    fun `the same statement run again and again is flagged with its text`() {
        val sql = entries("/api/one-by-one").single().getValue("sql").jsonObject
        assertEquals(7, sql.getValue("count").jsonPrimitive.int)
        assertEquals(6, sql.getValue("repeated").jsonPrimitive.int)
        val statement = sql.getValue("statement").jsonPrimitive.content
        assertContains(statement, "REQUEST_SQL_NOTES", ignoreCase = true)
        assertContains(statement, "= ?")
    }

    @Test
    fun `calls do not count each other's statements`() {
        val both = entries("/api/list", "/api/one-by-one", "/api/list")
        assertEquals(
            listOf(1, 7, 1),
            both.map {
                it
                    .getValue("sql")
                    .jsonObject
                    .getValue("count")
                    .jsonPrimitive.int
            },
        )
    }

    @Test
    fun `the summary is empty without statements and remembers only so many different ones`() {
        val sql = RequestSql()
        assertNull(sql.summary())
        repeat(500) { sql.ran("SELECT $it", 1_000_000) }
        repeat(4) { sql.ran("SELECT 1", 0) }
        val summary = sql.summary()!!
        assertEquals(504, summary.getValue("count").jsonPrimitive.int)
        assertEquals(500.0, summary.getValue("ms").jsonPrimitive.double)
        assertEquals(5, summary.getValue("repeated").jsonPrimitive.int)
        assertEquals("SELECT 1", summary.getValue("statement").jsonPrimitive.content)
    }
}
