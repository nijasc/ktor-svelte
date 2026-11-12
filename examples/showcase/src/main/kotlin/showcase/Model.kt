package showcase

import io.github.nijasc.ktor.svelte.Validated
import io.github.nijasc.ktor.svelte.Validator
import io.github.nijasc.ktorsvelte.LucideIcon
import io.ktor.openapi.JsonSchema
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import java.time.LocalDate
import kotlin.time.Instant

const val MAX_TITLE_LENGTH = 120
const val MAX_DESCRIPTION_LENGTH = 4000
const val MAX_COMMENT_LENGTH = 2000
const val MAX_NAME_LENGTH = 80
const val MAX_EMAIL_LENGTH = 190
const val MIN_PASSWORD_LENGTH = 10
const val MAX_PASSWORD_LENGTH = 200
const val MAX_LABELS = 5
const val MAX_UPLOAD_BYTES = 5L * 1024L * 1024L

private val LABEL = Regex("[a-z0-9-]{1,20}")
private val EMAIL = Regex("[^@\\s]+@[^@\\s]+\\.[^@\\s]+")

@Serializable
data class AppConfig(
    val appName: String,
    val maxUploadBytes: Long,
    val registrationOpen: Boolean,
)

@Serializable
enum class Role { ADMIN, MEMBER }

@Serializable
enum class TaskStatus { TODO, DOING, DONE }

@Serializable
enum class Priority { LOW, NORMAL, HIGH }

@Serializable
data class User(
    val id: Int,
    val email: String,
    val name: String,
    val role: Role,
    val active: Boolean,
    val createdAt: Instant,
)

@Serializable
data class UserRef(
    val id: Int,
    val name: String,
)

@Serializable
data class Login(
    val email: String,
    val password: String,
)

@Serializable
data class Registration(
    @JsonSchema.MaxLength(MAX_EMAIL_LENGTH)
    val email: String,
    @JsonSchema.MinLength(1)
    @JsonSchema.MaxLength(MAX_NAME_LENGTH)
    val name: String,
    @JsonSchema.MinLength(MIN_PASSWORD_LENGTH)
    @JsonSchema.MaxLength(MAX_PASSWORD_LENGTH)
    val password: String,
) : Validated {
    override fun Validator.rules() {
        check(::name, name.isNotBlank()) { "Tell us your name." }
        check(::email, EMAIL.matches(email)) { "Enter an email address such as ada@example.com." }
    }
}

@Serializable
data class ProfileInput(
    @JsonSchema.MinLength(1)
    @JsonSchema.MaxLength(MAX_NAME_LENGTH)
    val name: String,
) : Validated {
    override fun Validator.rules() {
        check(::name, name.isNotBlank()) { "Tell us your name." }
    }
}

@Serializable
data class PasswordChange(
    val current: String,
    @JsonSchema.MinLength(MIN_PASSWORD_LENGTH)
    @JsonSchema.MaxLength(MAX_PASSWORD_LENGTH)
    val next: String,
) : Validated {
    override fun Validator.rules() {
        check(::next, next != current) { "Choose a password you have not used here before." }
    }
}

@Serializable
data class RoleChange(
    val role: Role,
)

@Serializable
data class ActiveChange(
    val active: Boolean,
)

@Serializable
data class Task(
    val id: Int,
    val title: String,
    val description: String,
    val status: TaskStatus,
    val priority: Priority,
    val labels: List<String>,
    val icon: LucideIcon,
    val assignee: UserRef?,
    val creator: UserRef,
    val dueOn: String?,
    val createdAt: Instant,
    val updatedAt: Instant,
    val comments: Int,
    val attachments: Int,
)

@Serializable
data class TaskInput(
    @JsonSchema.MinLength(1)
    @JsonSchema.MaxLength(MAX_TITLE_LENGTH)
    val title: String,
    @JsonSchema.MaxLength(MAX_DESCRIPTION_LENGTH)
    val description: String = "",
    val priority: Priority = Priority.NORMAL,
    val labels: List<String> = emptyList(),
    val icon: LucideIcon = LucideIcon.SquareCheck,
    val assigneeId: Int? = null,
    val dueOn: String? = null,
) : Validated {
    override fun Validator.rules() {
        check(::title, title.isNotBlank()) { "A task needs a title." }
        check(::labels, labels.size <= MAX_LABELS) { "Use at most $MAX_LABELS labels." }
        check(::labels, labels.all(LABEL::matches)) { "Labels are lowercase letters, digits and dashes, up to 20 characters." }
        check(::labels, labels.distinct().size == labels.size) { "Each label can only be used once." }
        check(::dueOn, dueOn == null || runCatching { LocalDate.parse(dueOn) }.isSuccess) { "Use a date such as 2026-12-24." }
    }
}

@Serializable
data class StatusChange(
    val status: TaskStatus,
)

@Serializable
data class Comment(
    val id: Int,
    val author: UserRef,
    val body: String,
    val createdAt: Instant,
)

@Serializable
data class CommentInput(
    @JsonSchema.MinLength(1)
    @JsonSchema.MaxLength(MAX_COMMENT_LENGTH)
    val body: String,
) : Validated {
    override fun Validator.rules() {
        check(::body, body.isNotBlank()) { "Write something first." }
    }
}

@Serializable
data class Attachment(
    val id: Int,
    val taskId: Int,
    val name: String,
    val contentType: String,
    val size: Long,
    val uploader: UserRef,
    val createdAt: Instant,
)

@Serializable
data class BoardStats(
    val todo: Int,
    val doing: Int,
    val done: Int,
    val mine: Int,
    val labels: Map<String, Int>,
)

@Serializable
sealed interface Activity {
    val at: Instant
    val by: UserRef
}

@Serializable
@SerialName("created")
data class TaskCreated(
    override val at: Instant,
    override val by: UserRef,
) : Activity

@Serializable
@SerialName("commented")
data class TaskCommented(
    override val at: Instant,
    override val by: UserRef,
    val excerpt: String,
) : Activity

@Serializable
@SerialName("attached")
data class TaskAttached(
    override val at: Instant,
    override val by: UserRef,
    val fileName: String,
) : Activity

@Serializable
data class Greeting(
    val message: String,
    val locale: String,
    val theme: String,
)

@Serializable
data class Problem(
    val message: String,
)
