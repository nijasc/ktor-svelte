package showcase

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.flywaydb.core.Flyway
import org.jetbrains.exposed.v1.core.Table
import org.jetbrains.exposed.v1.jdbc.Database
import org.jetbrains.exposed.v1.jdbc.transactions.transaction
import java.nio.file.Files
import java.nio.file.Path

private const val MAX_POOL_SIZE = 8
private const val CONNECTION_TIMEOUT_MILLIS = 5_000L
private const val PING_TIMEOUT_SECONDS = 2

object Users : Table("users") {
    val id = integer("id").autoIncrement()
    val email = varchar("email", MAX_EMAIL_LENGTH)
    val name = varchar("name", MAX_NAME_LENGTH)
    val passwordHash = varchar("password_hash", 255)
    val role = varchar("role", 16)
    val active = bool("active")
    val createdAt = long("created_at")

    override val primaryKey = PrimaryKey(id)
}

object Tasks : Table("tasks") {
    val id = integer("id").autoIncrement()
    val title = varchar("title", MAX_TITLE_LENGTH)
    val description = varchar("description", MAX_DESCRIPTION_LENGTH)
    val status = varchar("status", 16)
    val priority = varchar("priority", 16)
    val labels = varchar("labels", 255)
    val icon = varchar("icon", 64)
    val assigneeId = integer("assignee_id").nullable()
    val creatorId = integer("creator_id")
    val dueOn = varchar("due_on", 10).nullable()
    val createdAt = long("created_at")
    val updatedAt = long("updated_at")

    override val primaryKey = PrimaryKey(id)
}

object Comments : Table("comments") {
    val id = integer("id").autoIncrement()
    val taskId = integer("task_id")
    val authorId = integer("author_id")
    val body = varchar("body", MAX_COMMENT_LENGTH)
    val createdAt = long("created_at")

    override val primaryKey = PrimaryKey(id)
}

object Attachments : Table("attachments") {
    val id = integer("id").autoIncrement()
    val taskId = integer("task_id")
    val uploaderId = integer("uploader_id")
    val name = varchar("name", 255)
    val contentType = varchar("content_type", 127)
    val size = long("size")
    val createdAt = long("created_at")

    override val primaryKey = PrimaryKey(id)
}

class AppDatabase(
    dataDirectory: Path,
) : AutoCloseable {
    private val dataSource: HikariDataSource

    init {
        Files.createDirectories(dataDirectory)
        dataSource =
            HikariDataSource(
                HikariConfig().apply {
                    jdbcUrl = "jdbc:h2:file:${dataDirectory.resolve("showcase").toAbsolutePath()};CASE_INSENSITIVE_IDENTIFIERS=TRUE;WRITE_DELAY=0"
                    maximumPoolSize = MAX_POOL_SIZE
                    connectionTimeout = CONNECTION_TIMEOUT_MILLIS
                },
            )
        Flyway
            .configure()
            .dataSource(dataSource)
            .load()
            .migrate()
        Database.connect(dataSource)
    }

    fun isReachable(): Boolean = dataSource.connection.use { it.isValid(PING_TIMEOUT_SECONDS) }

    override fun close() {
        dataSource.close()
    }
}

suspend fun <T> query(block: () -> T): T = withContext(Dispatchers.IO) { transaction { block() } }
