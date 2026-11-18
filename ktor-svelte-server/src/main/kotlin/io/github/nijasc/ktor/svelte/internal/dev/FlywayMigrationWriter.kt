package io.github.nijasc.ktor.svelte.internal.dev

import org.flywaydb.core.Flyway
import org.jetbrains.exposed.v1.core.Table
import org.jetbrains.exposed.v1.jdbc.Database
import org.jetbrains.exposed.v1.jdbc.SchemaUtils
import org.jetbrains.exposed.v1.jdbc.transactions.TransactionManager
import org.jetbrains.exposed.v1.jdbc.transactions.transaction
import java.nio.file.Path
import kotlin.io.path.createDirectories
import kotlin.io.path.writeText

internal object FlywayMigrationWriter {
    fun write(
        classLoader: ClassLoader,
        directory: Path,
        name: String?,
        tableClasses: List<Class<*>>,
    ): MigrationOutcome {
        val database =
            TransactionManager.primaryDatabase
                ?: return MigrationOutcome.Refused(
                    "The app started without connecting an Exposed database, so there is nothing to compare the tables with. " +
                        "Call Database.connect while the app starts.",
                )
        val tables = tableClasses.mapNotNull { runCatching { it.getField("INSTANCE").get(null) as Table }.getOrNull() }
        if (tables.isEmpty()) return MigrationOutcome.Refused("Found no Exposed Table objects in the app's classes.")
        return write(classLoader, database, directory, name, tables)
    }

    fun write(
        classLoader: ClassLoader,
        database: Database,
        directory: Path,
        name: String?,
        tables: List<Table>,
    ): MigrationOutcome {
        val info =
            Flyway
                .configure(classLoader)
                .dataSource(ExposedDataSource(database))
                .locations("filesystem:${directory.toAbsolutePath()}")
                .load()
                .info()
        val pending = info.pending().map { it.script }
        if (pending.isNotEmpty()) {
            return MigrationOutcome.Refused(
                "The database has not run ${pending.joinToString()} yet, so a new migration would repeat them. " +
                    "Start the app once so Flyway migrates the database, then run generateMigrations again.",
            )
        }
        val failed = info.all().filter { it.state.isFailed }.map { it.script }
        if (failed.isNotEmpty()) {
            return MigrationOutcome.Refused("Fix the failed migration first: ${failed.joinToString()}.")
        }
        val statements =
            transaction(database) {
                database.dialectMetadata.resetCaches()
                @Suppress("DEPRECATION")
                SchemaUtils.statementsRequiredToActualizeScheme(*tables.toTypedArray(), withLogs = false)
            }
        if (statements.isEmpty()) return MigrationOutcome.UpToDate
        directory.createDirectories()
        val file = nextMigrationFile(directory, migrationName(name, statements))
        file.writeText(migrationScript(statements))
        return MigrationOutcome.Written(file, statements)
    }
}
