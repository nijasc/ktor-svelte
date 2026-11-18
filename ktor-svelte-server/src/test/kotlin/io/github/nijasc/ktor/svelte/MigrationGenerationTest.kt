package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.dev.FlywayMigrationWriter
import io.github.nijasc.ktor.svelte.internal.dev.MigrationOutcome
import io.github.nijasc.ktor.svelte.internal.dev.migrationName
import io.github.nijasc.ktor.svelte.internal.dev.nextMigrationFile
import io.github.nijasc.ktor.svelte.internal.dev.tableClasses
import org.flywaydb.core.Flyway
import org.jetbrains.exposed.v1.core.Table
import org.jetbrains.exposed.v1.jdbc.Database
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import kotlin.io.path.Path
import kotlin.io.path.copyTo
import kotlin.io.path.listDirectoryEntries
import kotlin.io.path.name
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertIs
import kotlin.test.assertTrue

object MigratedNotes : Table("notes") {
    val id = integer("id")
    val title = varchar("title", 200).nullable()
    override val primaryKey = PrimaryKey(id)
}

object NotesWithAuthor : Table("notes") {
    val id = integer("id")
    val title = varchar("title", 200).nullable()
    val author = varchar("author", 100).nullable()
    override val primaryKey = PrimaryKey(id)
}

object MigrationTags : Table("tags") {
    val id = integer("id")
    val label = varchar("label", 50)
    override val primaryKey = PrimaryKey(id)
}

object KeywordColumns : Table("files") {
    val id = integer("id")
    val name = varchar("name", 80)
    val size = long("size")
    val role = varchar("role", 16)
    override val primaryKey = PrimaryKey(id)
}

class MigrationGenerationTest {
    private val url = "jdbc:h2:mem:migration-generation-${System.nanoTime()};DB_CLOSE_DELAY=-1"
    private val loader = javaClass.classLoader

    private fun migrations(): Path {
        val directory = Files.createTempDirectory("migrations")
        listOf("V1__create_notes.sql", "V2__add_title.sql").forEach { name ->
            Paths.get(loader.getResource("db/migration/$name")!!.toURI()).copyTo(directory.resolve(name))
        }
        return directory
    }

    private fun migrated(directory: Path): Database {
        Flyway
            .configure()
            .dataSource(url, "sa", "")
            .locations("filesystem:$directory")
            .load()
            .migrate()
        return Database.connect(url, user = "sa")
    }

    @Test
    fun `writes the next migration with the tables and columns the database is missing`() {
        val directory = migrations()
        val outcome = FlywayMigrationWriter.write(loader, migrated(directory), directory, null, listOf(NotesWithAuthor, MigrationTags))
        val written = assertIs<MigrationOutcome.Written>(outcome)
        assertEquals("V3__update_schema.sql", written.file.name)
        val script = written.file.readText().uppercase()
        assertContains(script, "CREATE TABLE IF NOT EXISTS TAGS")
        assertContains(script, "ALTER TABLE NOTES ADD AUTHOR")
        assertTrue(script.lines().filter { it.isNotBlank() }.all { it.endsWith(";") })
    }

    @Test
    fun `the written migration runs and leaves nothing to generate`() {
        val directory = migrations()
        val database = migrated(directory)
        assertIs<MigrationOutcome.Written>(
            FlywayMigrationWriter.write(loader, database, directory, "add tags", listOf(MigratedNotes, MigrationTags)),
        )
        assertTrue(directory.resolve("V3__add_tags.sql").toFile().isFile)
        migrated(directory)
        assertEquals(
            MigrationOutcome.UpToDate,
            FlywayMigrationWriter.write(loader, database, directory, null, listOf(MigratedNotes, MigrationTags)),
        )
        assertEquals(3, directory.listDirectoryEntries().size)
    }

    @Test
    fun `columns named like SQL keywords are not reported as changed once they exist`() {
        val directory = migrations()
        val database = migrated(directory)
        val first =
            assertIs<MigrationOutcome.Written>(FlywayMigrationWriter.write(loader, database, directory, null, listOf(KeywordColumns)))
        assertEquals("V3__create_files.sql", first.file.name)
        migrated(directory)
        assertEquals(MigrationOutcome.UpToDate, FlywayMigrationWriter.write(loader, database, directory, null, listOf(KeywordColumns)))
    }

    @Test
    fun `refuses while the database has not run every migration in the folder`() {
        val directory = migrations()
        val database = migrated(directory)
        directory.resolve("V3__more.sql").writeText("alter table notes add column body varchar(10);\n")
        val outcome = FlywayMigrationWriter.write(loader, database, directory, null, listOf(NotesWithAuthor))
        val refused = assertIs<MigrationOutcome.Refused>(outcome)
        assertContains(refused.message, "V3__more.sql")
        assertEquals(3, directory.listDirectoryEntries().size)
    }

    @Test
    fun `finds the Exposed table objects among compiled classes`() {
        val classes =
            Paths.get(
                MigratedNotes::class.java.protectionDomain.codeSource.location
                    .toURI(),
            )
        val found = tableClasses(listOf(classes), loader)
        assertTrue(MigratedNotes::class.java in found)
        assertTrue(MigrationTags::class.java in found)
        assertTrue(found.none { it == MigrationGenerationTest::class.java })
    }

    @Test
    fun `names the file after what it does and numbers it after the highest version`() {
        val directory = Files.createTempDirectory("migrations")
        directory.resolve("V1__a.sql").writeText("")
        directory.resolve("V12__b.sql").writeText("")
        directory.resolve("R__view.sql").writeText("")
        assertEquals("V13__x.sql", nextMigrationFile(directory, "x").name)
        assertEquals("V1__x.sql", nextMigrationFile(Files.createTempDirectory("empty"), "x").name)
        assertEquals(
            "create_tags_labels",
            migrationName(null, listOf("CREATE TABLE IF NOT EXISTS tags (id INT)", "CREATE TABLE labels (id INT)")),
        )
        assertEquals("update_schema", migrationName(null, listOf("CREATE TABLE tags (id INT)", "ALTER TABLE notes ADD body TEXT")))
        assertEquals("add_tags_to_notes", migrationName("Add tags to notes!", emptyList()))
    }
}
