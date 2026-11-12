package showcase

import io.github.nijasc.ktor.svelte.Page
import io.github.nijasc.ktor.svelte.validate
import io.github.nijasc.ktorsvelte.messages
import io.github.nijasc.ktorsvelte.theme
import io.ktor.http.ContentDisposition
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.PartData
import io.ktor.http.content.forEachPart
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.receive
import io.ktor.server.request.receiveMultipart
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.server.response.respondBytes
import io.ktor.server.routing.Route
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.describe
import io.ktor.server.routing.post
import io.ktor.server.routing.put
import io.ktor.server.routing.route
import io.ktor.utils.io.readRemaining
import kotlinx.io.readByteArray
import java.nio.file.Files

private const val DEFAULT_PAGE_SIZE = 10
private const val MAX_FILE_NAME_LENGTH = 120

private val INLINE_TYPES = setOf("image/png", "image/jpeg", "image/gif", "image/webp")
private val DOWNLOAD_TYPES = setOf("application/pdf", "text/plain", "text/csv", "application/zip")
private val UNSAFE_NAME_CHARACTERS = Regex("[^A-Za-z0-9._ -]")

fun Route.publicRoutes() {
    get("/api/greeting") {
        val name = call.queryParameters["name"]?.take(MAX_NAME_LENGTH) ?: "Ktor"
        val greeting = Greeting(call.messages.serverGreeting(name), call.messages.locale, call.theme.cssName)
        call.respond(greeting)
    }
}

fun Route.taskRoutes(
    tasks: TaskStore,
    users: UserStore,
) {
    get("/api/stats") {
        val stats: BoardStats = tasks.stats(call.currentUser(users))
        call.respond(stats)
    }

    get("/api/members") {
        val members: List<UserRef> = users.all().filter { it.active }.map { UserRef(it.id, it.name) }
        call.respond(members)
    }

    route("/api/tasks") {
        get {
            val viewer = call.currentUser(users)
            val filter =
                TaskFilter(
                    search = call.queryParameters["search"],
                    status = call.queryParameters["status"]?.let { name -> TaskStatus.entries.firstOrNull { it.name == name } },
                    label = call.queryParameters["label"],
                    assigneeId = viewer.id.takeIf { call.queryParameters["mine"] == "true" },
                )
            val limit = call.queryParameters["limit"]?.toIntOrNull() ?: DEFAULT_PAGE_SIZE
            val page: Page<Task> = tasks.page(filter, call.queryParameters["cursor"], limit)
            call.respond(page)
        }

        post {
            val input = call.receive<TaskInput>()
            call.checkAssignee(users, input)
            val task: Task = tasks.create(input, call.currentUser(users))
            call.respond(HttpStatusCode.Created, task)
        }

        route("/{id}") {
            get {
                val task: Task? = tasks.find(call.id())
                if (task == null) call.respondMissingTask() else call.respond(task)
            }

            put {
                val input = call.receive<TaskInput>()
                call.checkAssignee(users, input)
                val task: Task? = tasks.update(call.id(), input)
                if (task == null) call.respondMissingTask() else call.respond(task)
            }

            delete {
                val task = tasks.find(call.id()) ?: return@delete call.respondMissingTask()
                val viewer = call.currentUser(users)
                if (task.creator.id != viewer.id && viewer.role != Role.ADMIN) {
                    return@delete call.respond(HttpStatusCode.Forbidden, Problem(call.messages.problemNotYours()))
                }
                tasks.delete(task.id)
                call.respond(HttpStatusCode.NoContent)
            }

            post("/status") {
                val change = call.receive<StatusChange>()
                val task: Task? = tasks.move(call.id(), change.status)
                if (task == null) call.respondMissingTask() else call.respond(task)
            }

            get("/activity") {
                val task = tasks.find(call.id()) ?: return@get call.respondMissingTask()
                val activity: List<Activity> = tasks.activity(task)
                call.respond(activity)
            }

            get("/comments") {
                val task = tasks.find(call.id()) ?: return@get call.respondMissingTask()
                val comments: List<Comment> = tasks.comments(task.id)
                call.respond(comments)
            }

            post("/comments") {
                val input = call.receive<CommentInput>()
                val task = tasks.find(call.id()) ?: return@post call.respondMissingTask()
                val comment: Comment = tasks.comment(task.id, call.currentUser(users), input.body)
                call.respond(HttpStatusCode.Created, comment)
            }

            get("/attachments") {
                val task = tasks.find(call.id()) ?: return@get call.respondMissingTask()
                val attachments: List<Attachment> = tasks.attachments(task.id)
                call.respond(attachments)
            }

            post("/attachments") {
                val task = tasks.find(call.id()) ?: return@post call.respondMissingTask()
                val uploader = call.currentUser(users)
                val stored = mutableListOf<Attachment>()
                var refused: Problem? = null
                call.receiveMultipart().forEachPart { part ->
                    if (part is PartData.FileItem && refused == null) {
                        val content = part.provider().readRemaining(MAX_UPLOAD_BYTES + 1).readByteArray()
                        val contentType = part.contentType?.withoutParameters()?.toString().orEmpty()
                        when {
                            content.size > MAX_UPLOAD_BYTES -> refused = Problem(call.messages.problemFileTooLarge())
                            contentType !in INLINE_TYPES && contentType !in DOWNLOAD_TYPES -> refused = Problem(call.messages.problemFileType())
                            else -> stored += tasks.attach(task.id, uploader, cleanFileName(part.originalFileName), contentType, content)
                        }
                    }
                    part.dispose()
                }
                val problem = refused
                if (problem != null) {
                    stored.forEach { tasks.detach(it.id) }
                    return@post call.respond(HttpStatusCode.UnprocessableEntity, problem)
                }
                val attachments: List<Attachment> = stored
                call.respond(HttpStatusCode.Created, attachments)
            }.describe {
                summary = "Uploads files to a task."
                description = "Send the files as multipart form data. Images, PDF, text, CSV and ZIP files up to 5 MiB are accepted."
                requestBody { ContentType.MultiPart.FormData() }
            }
        }
    }

    route("/api/attachments/{id}") {
        get {
            val file = tasks.file(call.id()) ?: return@get call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingFile()))
            val disposition = if (file.attachment.contentType in INLINE_TYPES) ContentDisposition.Inline else ContentDisposition.Attachment
            call.response.header(
                HttpHeaders.ContentDisposition,
                disposition.withParameter(ContentDisposition.Parameters.FileName, file.attachment.name).toString(),
            )
            call.response.header(HttpHeaders.CacheControl, "private, max-age=3600")
            call.respondBytes(Files.readAllBytes(file.path), ContentType.parse(file.attachment.contentType))
        }

        delete {
            val file = tasks.file(call.id()) ?: return@delete call.respond(HttpStatusCode.NotFound, Problem(call.messages.problemMissingFile()))
            val viewer = call.currentUser(users)
            if (file.attachment.uploader.id != viewer.id && viewer.role != Role.ADMIN) {
                return@delete call.respond(HttpStatusCode.Forbidden, Problem(call.messages.problemNotYours()))
            }
            tasks.detach(file.attachment.id)
            call.respond(HttpStatusCode.NoContent)
        }
    }
}

private suspend fun ApplicationCall.checkAssignee(
    users: UserStore,
    input: TaskInput,
) {
    val assignee = input.assigneeId?.let { users.findActive(it) }
    val message = messages.problemMissingUser()
    validate { check("assigneeId", input.assigneeId == null || assignee != null) { message } }
}

private fun cleanFileName(original: String?): String {
    val base = original.orEmpty().substringAfterLast('/').substringAfterLast('\\')
    val cleaned = base.replace(UNSAFE_NAME_CHARACTERS, "_").trim().trimStart('.').take(MAX_FILE_NAME_LENGTH)
    return cleaned.ifEmpty { "upload" }
}

private fun ApplicationCall.id(): Int = parameters["id"]?.toIntOrNull() ?: -1

private suspend fun ApplicationCall.respondMissingTask() {
    respond(HttpStatusCode.NotFound, Problem(messages.problemMissingTask()))
}
