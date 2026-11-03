package notes

import io.github.nijasc.ktor.svelte.Validated
import io.github.nijasc.ktor.svelte.Validator
import kotlinx.serialization.Serializable
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.atomic.AtomicInteger

const val MAX_TITLE_LENGTH = 80

@Serializable
data class AppConfig(
    val appName: String,
    val maxTitleLength: Int,
)

@Serializable
enum class NoteStatus { ACTIVE, ARCHIVED }

@Serializable
data class Note(
    val id: Int,
    val title: String,
    val body: String,
    val tags: List<String>,
    val status: NoteStatus,
)

@Serializable
data class NoteInput(
    val title: String,
    val body: String = "",
    val tags: List<String> = emptyList(),
) : Validated {
    override fun Validator.rules() {
        check("title", title.isNotBlank()) { "A note needs a title." }
        check("title", title.length <= MAX_TITLE_LENGTH) { "Keep the title under $MAX_TITLE_LENGTH characters." }
    }
}

@Serializable
data class NoteStats(
    val total: Int,
    val archived: Int,
    val tags: Map<String, Int>,
)

@Serializable
data class NotesExport(
    val notes: List<Note>,
)

@Serializable
data class Problem(
    val message: String,
)

class NoteStore {
    private val ids = AtomicInteger()
    private val notes = ConcurrentHashMap<Int, Note>()

    init {
        create(NoteInput("Welcome", "This note came from Ktor through a generated TypeScript client.", listOf("intro")))
        create(NoteInput("Try hot reload", "Change a Svelte file while the Dev run configuration is running.", listOf("intro", "dev")))
    }

    fun list(
        search: String?,
        tag: String?,
    ): List<Note> =
        notes.values
            .filter { tag == null || tag in it.tags }
            .filter { search == null || it.title.contains(search, ignoreCase = true) || it.body.contains(search, ignoreCase = true) }
            .sortedBy { it.id }

    fun find(id: Int): Note? = notes[id]

    fun create(input: NoteInput): Note {
        val note = Note(ids.incrementAndGet(), input.title, input.body, input.tags, NoteStatus.ACTIVE)
        notes[note.id] = note
        return note
    }

    fun update(
        id: Int,
        input: NoteInput,
    ): Note? = notes.computeIfPresent(id) { _, note -> note.copy(title = input.title, body = input.body, tags = input.tags) }

    fun archive(id: Int): Note? = notes.computeIfPresent(id) { _, note -> note.copy(status = NoteStatus.ARCHIVED) }

    fun delete(id: Int): Boolean = notes.remove(id) != null

    fun stats(): NoteStats =
        NoteStats(
            total = notes.size,
            archived = notes.values.count { it.status == NoteStatus.ARCHIVED },
            tags = notes.values.flatMap { it.tags }.groupingBy { it }.eachCount().toSortedMap(),
        )
}
