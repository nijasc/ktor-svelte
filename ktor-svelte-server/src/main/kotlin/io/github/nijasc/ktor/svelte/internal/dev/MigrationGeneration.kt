package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.internal.onOwn
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationStarted
import io.ktor.server.application.log
import java.io.File
import java.nio.file.Path
import kotlin.io.path.Path
import kotlin.io.path.createDirectories
import kotlin.io.path.writeText

internal const val GENERATE_MIGRATION_PROPERTY = "ktor.svelte.generateMigration"
internal const val MIGRATION_NAME_PROPERTY = "ktor.svelte.migrationName"
internal const val MIGRATION_CLASSES_PROPERTY = "ktor.svelte.migrationClasses"
internal const val MIGRATION_REPORT_PROPERTY = "ktor.svelte.migrationReport"
private const val EXPOSED_TABLE = "org.jetbrains.exposed.v1.core.Table"
private const val FLYWAY_CLASS = "org.flywaydb.core.Flyway"
private const val EXPOSED_JDBC_DATABASE = "org.jetbrains.exposed.v1.jdbc.Database"
private val CREATE_TABLE = Regex("^CREATE TABLE (?:IF NOT EXISTS )?[\"`]?([A-Za-z0-9_]+)", RegexOption.IGNORE_CASE)

internal sealed interface MigrationOutcome {
    val message: String
    val failed: Boolean get() = false

    data class Written(
        val file: Path,
        val statements: List<String>,
    ) : MigrationOutcome {
        override val message: String
            get() = "Wrote ${file.fileName} with ${statements.size} statement${if (statements.size == 1) "" else "s"}: $file"
    }

    data object UpToDate : MigrationOutcome {
        override val message: String = "The database already matches the Exposed tables. No migration written."
    }

    data class Refused(
        override val message: String,
    ) : MigrationOutcome {
        override val failed: Boolean get() = true
    }
}

internal fun installMigrationGeneration(application: Application) {
    val directory = System.getProperty(GENERATE_MIGRATION_PROPERTY) ?: return
    val name = System.getProperty(MIGRATION_NAME_PROPERTY)
    val classes =
        System
            .getProperty(MIGRATION_CLASSES_PROPERTY)
            .orEmpty()
            .split(File.pathSeparatorChar)
            .filter { it.isNotBlank() }
            .map { Path(it) }
    val report = System.getProperty(MIGRATION_REPORT_PROPERTY)?.let { Path(it) }
    application.onOwn(ApplicationStarted) {
        val classLoader = application.environment.classLoader
        val outcome =
            runCatching { generateMigration(classLoader, Path(directory), name, classes) }
                .getOrElse { problem -> MigrationOutcome.Refused("Could not generate a migration: ${problem.message ?: problem}") }
        if (outcome.failed) application.log.error(outcome.message) else application.log.info(outcome.message)
        report?.let {
            it.parent?.createDirectories()
            it.writeText((if (outcome.failed) "error\n" else "ok\n") + outcome.message + "\n")
        }
        Runtime.getRuntime().halt(if (outcome.failed) 1 else 0)
    }
}

private fun generateMigration(
    classLoader: ClassLoader,
    directory: Path,
    name: String?,
    classDirectories: List<Path>,
): MigrationOutcome {
    val missing = listOf(FLYWAY_CLASS, EXPOSED_JDBC_DATABASE).filterNot { hasClassNamed(it, classLoader) }
    if (missing.isNotEmpty()) {
        return MigrationOutcome.Refused(
            "generateMigrations needs flyway-core and exposed-jdbc in the app. Missing: ${missing.joinToString()}.",
        )
    }
    val tables = tableClasses(classDirectories, classLoader)
    return FlywayMigrationWriter.write(classLoader, directory, name, tables)
}

private fun hasClassNamed(
    name: String,
    classLoader: ClassLoader,
): Boolean = runCatching { Class.forName(name, false, classLoader) }.isSuccess

internal fun tableClasses(
    classDirectories: List<Path>,
    classLoader: ClassLoader,
): List<Class<*>> {
    val table = runCatching { Class.forName(EXPOSED_TABLE, false, classLoader) }.getOrNull() ?: return emptyList()
    return classDirectories
        .map { it.toFile() }
        .filter { it.isDirectory }
        .flatMap { root ->
            root
                .walkTopDown()
                .filter { it.isFile && it.name.endsWith(".class") && it.name != "module-info.class" }
                .map {
                    it
                        .relativeTo(root)
                        .invariantSeparatorsPath
                        .removeSuffix(".class")
                        .replace('/', '.')
                }.toList()
        }.sorted()
        .mapNotNull { className ->
            runCatching { Class.forName(className, false, classLoader) }
                .getOrNull()
                ?.takeIf { table.isAssignableFrom(it) && it != table && hasInstance(it) }
        }
}

private fun hasInstance(type: Class<*>): Boolean =
    runCatching {
        java.lang.reflect.Modifier
            .isStatic(type.getDeclaredField("INSTANCE").modifiers)
    }.getOrDefault(false)

internal fun nextMigrationFile(
    directory: Path,
    name: String,
): Path {
    val versions =
        directory
            .toFile()
            .listFiles()
            .orEmpty()
            .mapNotNull {
                Regex("^V(\\d+)")
                    .find(it.name)
                    ?.groupValues
                    ?.get(1)
                    ?.toIntOrNull()
            }
    return directory.resolve("V${(versions.maxOrNull() ?: 0) + 1}__$name.sql")
}

internal fun migrationName(
    requested: String?,
    statements: List<String>,
): String {
    val created = statements.mapNotNull { CREATE_TABLE.find(it.trimStart())?.groupValues?.get(1) }
    val onlyCreates = statements.all { it.trimStart().startsWith("CREATE", ignoreCase = true) }
    val raw =
        requested?.takeIf { it.isNotBlank() }
            ?: if (onlyCreates && created.isNotEmpty()) "create_" + created.joinToString("_") else "update_schema"
    return raw
        .lowercase()
        .replace(Regex("[^a-z0-9]+"), "_")
        .trim('_')
        .ifEmpty { "update_schema" }
}

internal fun migrationScript(statements: List<String>): String = statements.joinToString("") { it.trimEnd().removeSuffix(";") + ";\n" }
