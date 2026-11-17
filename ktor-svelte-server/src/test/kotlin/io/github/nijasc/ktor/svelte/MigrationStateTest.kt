package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.dev.migrationsJson
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.testing.testApplication
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.int
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import org.flywaydb.core.Flyway
import org.jetbrains.exposed.v1.jdbc.Database
import org.jetbrains.exposed.v1.jdbc.transactions.TransactionManager
import java.sql.DriverManager
import kotlin.test.AfterTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class MigrationStateTest {
    private val url = "jdbc:h2:mem:migration-state-${System.nanoTime()};DB_CLOSE_DELAY=-1"
    private val before = TransactionManager.defaultDatabase

    private fun migrateTo(version: String) {
        Flyway
            .configure()
            .dataSource(url, "sa", "")
            .target(version)
            .load()
            .migrate()
        TransactionManager.defaultDatabase = Database.connect(url, user = "sa")
    }

    @AfterTest
    fun restore() {
        TransactionManager.defaultDatabase = before
    }

    @Test
    fun `the dev panel lists the migrations that ran and the ones still pending`() =
        testApplication {
            migrateTo("1")
            application {
                install(Svelte) {
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.Always
                    }
                }
            }
            val response = client.get("/_ktor-svelte/dev/migrations")
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("no-store", response.headers[HttpHeaders.CacheControl])
            val state = Json.parseToJsonElement(response.bodyAsText()).jsonObject
            assertEquals("Flyway", state.getValue("tool").jsonPrimitive.content)
            assertEquals("1", state.getValue("current").jsonPrimitive.content)
            assertEquals(1, state.getValue("pending").jsonPrimitive.int)
            assertFalse(state.getValue("failed").jsonPrimitive.boolean)
            val migrations = state.getValue("migrations").jsonArray.map { it.jsonObject }
            assertEquals(listOf("1", "2"), migrations.map { it.getValue("version").jsonPrimitive.content })
            assertEquals(listOf("Success", "Pending"), migrations.map { it.getValue("state").jsonPrimitive.content })
            assertEquals("create notes", migrations[0].getValue("description").jsonPrimitive.content)
            assertTrue("installedOn" in migrations[0])
            assertFalse("installedOn" in migrations[1])

            val remote = client.get("/_ktor-svelte/dev/migrations") { header(HttpHeaders.XForwardedFor, "203.0.113.9") }
            assertEquals(HttpStatusCode.Forbidden, remote.status)
        }

    @Test
    fun `a migration that failed last is flagged`() {
        migrateTo("2")
        DriverManager.getConnection(url, "sa", "").use { connection ->
            connection.createStatement().use {
                it.executeUpdate(
                    "update \"flyway_schema_history\" set \"success\" = false where \"version\" = '2'",
                )
            }
        }
        val state = migrationsJson(javaClass.classLoader)
        assertTrue(state.getValue("failed").jsonPrimitive.boolean, state.toString())
        assertEquals(0, state.getValue("pending").jsonPrimitive.int)
        assertEquals(
            "Failed",
            state
                .getValue("migrations")
                .jsonArray[1]
                .jsonObject
                .getValue("state")
                .jsonPrimitive.content,
        )
    }

    @Test
    fun `without Flyway on the classpath the panel is told so`() {
        assertEquals(JsonNull, migrationsJson(ClassLoader.getPlatformClassLoader())["tool"])
    }
}
