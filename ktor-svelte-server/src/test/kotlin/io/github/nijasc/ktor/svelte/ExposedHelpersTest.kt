package io.github.nijasc.ktor.svelte

import io.ktor.server.plugins.BadRequestException
import kotlinx.serialization.Serializable
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
import kotlin.test.assertFailsWith
import kotlin.time.Instant

object HelperNotes : Table("helper_notes") {
    val id = integer("id").autoIncrement()
    val title = varchar("title", 50)
    val status = varchar("status", 10)
    val starCount = integer("star_count")
    val dueOn = varchar("due_on", 10).nullable()
    val createdAt = long("created_at")
    val done = bool("done")

    override val primaryKey = PrimaryKey(id)
}

enum class HelperStatus { OPEN, DONE }

@Serializable
data class HelperNote(
    val id: Int,
    val title: String,
    val status: HelperStatus,
    val starCount: Int,
    val dueOn: String? = null,
    val done: Boolean,
    val shared: Boolean = false,
)

@Serializable
data class HelperAuthor(
    val name: String,
)

@Serializable
data class HelperNoteWithMore(
    val id: Int,
    val title: String,
    val createdAt: Instant,
    val author: HelperAuthor,
    val tags: List<String>,
)

class ExposedHelpersTest {
    private fun withNotes(
        count: Int,
        block: () -> Unit,
    ) {
        val database = Database.connect("jdbc:h2:mem:helpers-${System.nanoTime()};DB_CLOSE_DELAY=-1", driver = "org.h2.Driver")
        transaction(database) {
            SchemaUtils.create(HelperNotes)
            (1..count).forEach { number ->
                HelperNotes.insert {
                    it[title] = "Note $number"
                    it[status] = if (number % 2 == 0) "DONE" else "OPEN"
                    it[starCount] = number
                    it[dueOn] = "2026-12-24".takeIf { number == 1 }
                    it[createdAt] = 1_700_000_000_000 + number
                    it[done] = number % 2 == 0
                }
            }
            block()
        }
    }

    @Test
    fun `a row becomes a DTO by column name, with snake case, enums, nulls and defaults`() =
        withNotes(2) {
            val notes = HelperNotes.selectAll().orderBy(HelperNotes.id).map { it.toDto<HelperNote>() }
            assertEquals(
                listOf(
                    HelperNote(1, "Note 1", HelperStatus.OPEN, 1, "2026-12-24", done = false),
                    HelperNote(2, "Note 2", HelperStatus.DONE, 2, null, done = true),
                ),
                notes,
            )
        }

    @Test
    fun `values the row does not have are passed along, as they are`() =
        withNotes(1) {
            val row = HelperNotes.selectAll().single()
            val note =
                row.toDto<HelperNoteWithMore>(
                    "createdAt" to Instant.fromEpochMilliseconds(row[HelperNotes.createdAt]),
                    "author" to HelperAuthor("Ada"),
                    "tags" to listOf("a", "b"),
                )
            assertEquals(
                HelperNoteWithMore(1, "Note 1", Instant.fromEpochMilliseconds(1_700_000_000_001), HelperAuthor("Ada"), listOf("a", "b")),
                note,
            )
        }

    @Test
    fun `a missing column or a value that does not fit is named`() =
        withNotes(1) {
            val row = HelperNotes.selectAll().single()
            val missing =
                assertFailsWith<IllegalStateException> {
                    row.toDto<HelperNoteWithMore>(
                        "createdAt" to Instant.fromEpochMilliseconds(0),
                    )
                }
            assertContains(missing.message.orEmpty(), "The row has no column for 'author', 'tags' of HelperNoteWithMore.")
            assertContains(missing.message.orEmpty(), "toDto<HelperNoteWithMore>(\"author\" to value)")
            val unfit = assertFailsWith<IllegalStateException> { row.toDto<HelperNote>("status" to "LATER") }
            assertContains(unfit.message.orEmpty(), "The row does not fit HelperNote:")
        }

    @Test
    fun `a query is paged by a column, newest first, with a cursor until the end`() =
        withNotes(5) {
            val first = HelperNotes.selectAll().pageBy(HelperNotes.id, null, 2) { it[HelperNotes.title] }
            assertEquals(Page(listOf("Note 5", "Note 4"), "4"), first)
            val second = HelperNotes.selectAll().pageBy(HelperNotes.id, first.next, 2) { it[HelperNotes.title] }
            assertEquals(Page(listOf("Note 3", "Note 2"), "2"), second)
            val last = HelperNotes.selectAll().pageBy(HelperNotes.id, PageRequest(second.next, 2)) { it[HelperNotes.title] }
            assertEquals(Page(listOf("Note 1"), null), last)
            assertEquals(Page(emptyList<String>(), null), HelperNotes.selectAll().pageBy(HelperNotes.id, "1", 2) { it[HelperNotes.title] })
        }

    @Test
    fun `paging keeps the query's own conditions, can go upwards and works on other columns`() =
        withNotes(6) {
            val open = HelperNotes.selectAll().where { HelperNotes.status eq "OPEN" }
            assertEquals(Page(listOf(1, 3), "3"), open.pageBy(HelperNotes.id, null, 2, descending = false) { it[HelperNotes.id] })
            val rest = HelperNotes.selectAll().where { HelperNotes.status eq "OPEN" }
            assertEquals(Page(listOf(5), null), rest.pageBy(HelperNotes.id, "3", 2, descending = false) { it[HelperNotes.id] })
            val byTime = HelperNotes.selectAll().pageBy(HelperNotes.createdAt, null, 4) { it[HelperNotes.id] }
            assertEquals(Page(listOf(6, 5, 4, 3), "1700000000003"), byTime)
            val byTitle =
                HelperNotes.selectAll().pageBy(
                    HelperNotes.title,
                    "Note 3",
                    10,
                    descending = false,
                    parse = { it },
                ) { it[HelperNotes.title] }
            assertEquals(listOf("Note 4", "Note 5", "Note 6"), byTitle.items)
        }

    @Test
    fun `a cursor that is not one of the list's is a bad request, and a limit below one is a mistake`() =
        withNotes(1) {
            val failure = assertFailsWith<BadRequestException> { HelperNotes.selectAll().pageBy(HelperNotes.id, "soon", 2) { it } }
            assertContains(failure.message.orEmpty(), "The cursor 'soon' is not one this list gave out.")
            assertFailsWith<IllegalArgumentException> { HelperNotes.selectAll().pageBy(HelperNotes.id, null, 0) { it } }
            Unit
        }
}
