package showcase

import io.github.nijasc.ktor.svelte.Page
import io.github.nijasc.ktorsvelte.LucideIcon
import org.jetbrains.exposed.v1.core.Op
import org.jetbrains.exposed.v1.core.ResultRow
import org.jetbrains.exposed.v1.core.SortOrder
import org.jetbrains.exposed.v1.core.and
import org.jetbrains.exposed.v1.core.eq
import org.jetbrains.exposed.v1.core.inList
import org.jetbrains.exposed.v1.core.less
import org.jetbrains.exposed.v1.core.like
import org.jetbrains.exposed.v1.core.lowerCase
import org.jetbrains.exposed.v1.core.or
import org.jetbrains.exposed.v1.jdbc.deleteWhere
import org.jetbrains.exposed.v1.jdbc.insert
import org.jetbrains.exposed.v1.jdbc.selectAll
import org.jetbrains.exposed.v1.jdbc.update
import java.nio.file.Files
import java.nio.file.Path
import kotlin.time.Clock
import kotlin.time.Instant

private const val MAX_PAGE_SIZE = 50
private const val EXCERPT_LENGTH = 80

data class TaskFilter(
    val search: String? = null,
    val status: TaskStatus? = null,
    val label: String? = null,
    val assigneeId: Int? = null,
)

class StoredFile(
    val attachment: Attachment,
    val path: Path,
)

class TaskStore(
    private val users: UserStore,
    private val fileDirectory: Path,
) {
    init {
        Files.createDirectories(fileDirectory)
    }

    suspend fun page(
        filter: TaskFilter,
        cursor: String?,
        limit: Int,
    ): Page<Task> =
        query {
            val size = limit.coerceIn(1, MAX_PAGE_SIZE)
            val before = cursor?.toIntOrNull()
            val condition = if (before == null) filter.condition() else filter.condition() and (Tasks.id less before)
            val rows =
                Tasks
                    .selectAll()
                    .where { condition }
                    .orderBy(Tasks.id, SortOrder.DESC)
                    .limit(size + 1)
                    .toList()
            val items = toTasks(rows.take(size))
            Page(items, items.lastOrNull()?.id?.toString()?.takeIf { rows.size > size })
        }

    suspend fun find(id: Int): Task? = query { toTasks(Tasks.selectAll().where { Tasks.id eq id }.toList()).singleOrNull() }

    suspend fun create(
        input: TaskInput,
        creator: User,
    ): Task {
        val now = Clock.System.now().toEpochMilliseconds()
        val id =
            query {
                Tasks.insert {
                    it[title] = input.title.trim()
                    it[description] = input.description
                    it[status] = TaskStatus.TODO.name
                    it[priority] = input.priority.name
                    it[labels] = encodeLabels(input.labels)
                    it[icon] = input.icon.name
                    it[assigneeId] = input.assigneeId
                    it[creatorId] = creator.id
                    it[dueOn] = input.dueOn
                    it[createdAt] = now
                    it[updatedAt] = now
                } get Tasks.id
            }
        return find(id) ?: error("Task $id disappeared right after it was created.")
    }

    suspend fun update(
        id: Int,
        input: TaskInput,
    ): Task? {
        query {
            Tasks.update({ Tasks.id eq id }) {
                it[title] = input.title.trim()
                it[description] = input.description
                it[priority] = input.priority.name
                it[labels] = encodeLabels(input.labels)
                it[icon] = input.icon.name
                it[assigneeId] = input.assigneeId
                it[dueOn] = input.dueOn
                it[updatedAt] = Clock.System.now().toEpochMilliseconds()
            }
        }
        return find(id)
    }

    suspend fun move(
        id: Int,
        status: TaskStatus,
    ): Task? {
        query {
            Tasks.update({ Tasks.id eq id }) {
                it[Tasks.status] = status.name
                it[updatedAt] = Clock.System.now().toEpochMilliseconds()
            }
        }
        return find(id)
    }

    suspend fun delete(id: Int): Boolean {
        val files = query { Attachments.selectAll().where { Attachments.taskId eq id }.map { it[Attachments.id] } }
        val deleted = query { Tasks.deleteWhere { Tasks.id eq id } > 0 }
        if (deleted) files.forEach { Files.deleteIfExists(filePath(it)) }
        return deleted
    }

    suspend fun stats(viewer: User): BoardStats =
        query {
            val rows = Tasks.selectAll().toList()
            BoardStats(
                todo = rows.count { it[Tasks.status] == TaskStatus.TODO.name },
                doing = rows.count { it[Tasks.status] == TaskStatus.DOING.name },
                done = rows.count { it[Tasks.status] == TaskStatus.DONE.name },
                mine = rows.count { it[Tasks.assigneeId] == viewer.id && it[Tasks.status] != TaskStatus.DONE.name },
                labels =
                    rows
                        .flatMap { decodeLabels(it[Tasks.labels]) }
                        .groupingBy { it }
                        .eachCount()
                        .toSortedMap(),
            )
        }

    suspend fun comments(taskId: Int): List<Comment> =
        query {
            val rows = Comments.selectAll().where { Comments.taskId eq taskId }.orderBy(Comments.id).toList()
            val authors = users.refs(rows.map { it[Comments.authorId] })
            rows.map { Comment(it[Comments.id], authors.getValue(it[Comments.authorId]), it[Comments.body], instant(it[Comments.createdAt])) }
        }

    suspend fun comment(
        taskId: Int,
        author: User,
        body: String,
    ): Comment {
        val now = Clock.System.now().toEpochMilliseconds()
        val id =
            query {
                Comments.insert {
                    it[Comments.taskId] = taskId
                    it[authorId] = author.id
                    it[Comments.body] = body.trim()
                    it[createdAt] = now
                } get Comments.id
            }
        return Comment(id, UserRef(author.id, author.name), body.trim(), instant(now))
    }

    suspend fun attachments(taskId: Int): List<Attachment> =
        query { toAttachments(Attachments.selectAll().where { Attachments.taskId eq taskId }.orderBy(Attachments.id).toList()) }

    suspend fun attach(
        taskId: Int,
        uploader: User,
        name: String,
        contentType: String,
        content: ByteArray,
    ): Attachment {
        val now = Clock.System.now().toEpochMilliseconds()
        val id =
            query {
                Attachments.insert {
                    it[Attachments.taskId] = taskId
                    it[uploaderId] = uploader.id
                    it[Attachments.name] = name
                    it[Attachments.contentType] = contentType
                    it[size] = content.size.toLong()
                    it[createdAt] = now
                } get Attachments.id
            }
        Files.write(filePath(id), content)
        return Attachment(id, taskId, name, contentType, content.size.toLong(), UserRef(uploader.id, uploader.name), instant(now))
    }

    suspend fun file(id: Int): StoredFile? {
        val attachment = query { toAttachments(Attachments.selectAll().where { Attachments.id eq id }.toList()).singleOrNull() }
        val path = filePath(id)
        return attachment?.takeIf { Files.isRegularFile(path) }?.let { StoredFile(it, path) }
    }

    suspend fun detach(id: Int): Boolean {
        val deleted = query { Attachments.deleteWhere { Attachments.id eq id } > 0 }
        if (deleted) Files.deleteIfExists(filePath(id))
        return deleted
    }

    suspend fun activity(task: Task): List<Activity> {
        val commented = comments(task.id).map { TaskCommented(it.createdAt, it.author, it.body.take(EXCERPT_LENGTH)) }
        val attached = attachments(task.id).map { TaskAttached(it.createdAt, it.uploader, it.name) }
        return (listOf<Activity>(TaskCreated(task.createdAt, task.creator)) + commented + attached).sortedBy { it.at }
    }

    private fun filePath(id: Int): Path = fileDirectory.resolve(id.toString())

    private fun TaskFilter.condition(): Op<Boolean> {
        var condition: Op<Boolean> = Op.TRUE
        if (status != null) condition = condition and (Tasks.status eq status.name)
        if (assigneeId != null) condition = condition and (Tasks.assigneeId eq assigneeId)
        if (!label.isNullOrBlank()) condition = condition and (Tasks.labels like "%,${escapeLike(label)},%")
        if (!search.isNullOrBlank()) {
            val pattern = "%${escapeLike(search.trim().lowercase())}%"
            condition = condition and ((Tasks.title.lowerCase() like pattern) or (Tasks.description.lowerCase() like pattern))
        }
        return condition
    }

    private fun toTasks(rows: List<ResultRow>): List<Task> {
        if (rows.isEmpty()) return emptyList()
        val ids = rows.map { it[Tasks.id] }
        val people = users.refs(rows.flatMap { listOfNotNull(it[Tasks.creatorId], it[Tasks.assigneeId]) })
        val commentCounts = Comments.selectAll().where { Comments.taskId inList ids }.groupingBy { it[Comments.taskId] }.eachCount()
        val fileCounts = Attachments.selectAll().where { Attachments.taskId inList ids }.groupingBy { it[Attachments.taskId] }.eachCount()
        return rows.map { row ->
            val id = row[Tasks.id]
            Task(
                id = id,
                title = row[Tasks.title],
                description = row[Tasks.description],
                status = TaskStatus.valueOf(row[Tasks.status]),
                priority = Priority.valueOf(row[Tasks.priority]),
                labels = decodeLabels(row[Tasks.labels]),
                icon = LucideIcon.entries.firstOrNull { it.name == row[Tasks.icon] } ?: LucideIcon.SquareCheck,
                assignee = row[Tasks.assigneeId]?.let(people::get),
                creator = people.getValue(row[Tasks.creatorId]),
                dueOn = row[Tasks.dueOn],
                createdAt = instant(row[Tasks.createdAt]),
                updatedAt = instant(row[Tasks.updatedAt]),
                comments = commentCounts[id] ?: 0,
                attachments = fileCounts[id] ?: 0,
            )
        }
    }

    private fun toAttachments(rows: List<ResultRow>): List<Attachment> {
        val uploaders = users.refs(rows.map { it[Attachments.uploaderId] })
        return rows.map {
            Attachment(
                id = it[Attachments.id],
                taskId = it[Attachments.taskId],
                name = it[Attachments.name],
                contentType = it[Attachments.contentType],
                size = it[Attachments.size],
                uploader = uploaders.getValue(it[Attachments.uploaderId]),
                createdAt = instant(it[Attachments.createdAt]),
            )
        }
    }
}

private fun encodeLabels(labels: List<String>): String = if (labels.isEmpty()) "" else labels.joinToString(",", prefix = ",", postfix = ",")

private fun decodeLabels(stored: String): List<String> = stored.split(',').filter(String::isNotEmpty)

private fun escapeLike(value: String): String = value.replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_")

private fun instant(millis: Long): Instant = Instant.fromEpochMilliseconds(millis)
