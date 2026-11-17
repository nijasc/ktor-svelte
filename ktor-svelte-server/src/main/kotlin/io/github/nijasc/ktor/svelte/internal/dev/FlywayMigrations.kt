package io.github.nijasc.ktor.svelte.internal.dev

import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.addJsonObject
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import kotlinx.serialization.json.putJsonArray
import org.flywaydb.core.Flyway
import org.flywaydb.core.api.MigrationInfo
import org.flywaydb.core.api.MigrationState
import org.jetbrains.exposed.v1.jdbc.Database
import org.jetbrains.exposed.v1.jdbc.transactions.TransactionManager
import java.io.PrintWriter
import java.sql.Connection
import java.sql.SQLException
import java.util.logging.Logger
import javax.sql.DataSource

private class ExposedDataSource(
    private val database: Database,
) : DataSource {
    override fun getConnection(): Connection = database.connector().connection as Connection

    override fun getConnection(
        username: String?,
        password: String?,
    ): Connection = connection

    override fun getLogWriter(): PrintWriter? = null

    override fun setLogWriter(out: PrintWriter?) = Unit

    override fun setLoginTimeout(seconds: Int) = Unit

    override fun getLoginTimeout(): Int = 0

    override fun getParentLogger(): Logger = Logger.getLogger("ktor-svelte")

    override fun <T : Any?> unwrap(iface: Class<T>?): T = throw SQLException("ktor-svelte's data source wraps nothing.")

    override fun isWrapperFor(iface: Class<*>?): Boolean = false
}

internal object FlywayMigrations {
    fun read(classLoader: ClassLoader): JsonObject {
        val database =
            TransactionManager.primaryDatabase
                ?: return buildJsonObject {
                    put("tool", "Flyway")
                    put("note", "Flyway is on the classpath, but the app has not connected an Exposed database yet.")
                }
        val info =
            Flyway
                .configure(classLoader)
                .dataSource(ExposedDataSource(database))
                .load()
                .info()
        return migrationState(info.all().toList(), info.current()?.version?.toString())
    }

    private fun migrationState(
        all: List<MigrationInfo>,
        current: String?,
    ): JsonObject {
        val last = all.filter { it.state.isApplied }.maxByOrNull { it.installedRank ?: 0 }
        return buildJsonObject {
            put("tool", "Flyway")
            current?.let { put("current", it) }
            put("pending", all.count { it.state == MigrationState.PENDING })
            put("failed", last?.state?.isFailed == true)
            putJsonArray("migrations") {
                all.forEach { migration ->
                    addJsonObject {
                        migration.version?.let { put("version", it.toString()) }
                        put("description", migration.description)
                        put("script", migration.script)
                        put("state", migration.state.displayName)
                        put("applied", migration.state.isApplied)
                        put("failed", migration.state.isFailed)
                        migration.installedOn?.let { put("installedOn", it.time) }
                        migration.executionTime?.let { put("ms", it) }
                    }
                }
            }
        }
    }
}
