package showcase

import io.github.nijasc.ktor.svelte.pageLoad
import io.github.nijasc.ktor.svelte.Page
import io.github.nijasc.ktor.svelte.Patch
import io.github.nijasc.ktor.svelte.ToastKind
import io.github.nijasc.ktor.svelte.can
import io.github.nijasc.ktor.svelte.includes
import io.github.nijasc.ktor.svelte.navigateTo
import io.github.nijasc.ktor.svelte.query
import io.github.nijasc.ktor.svelte.queryOf
import io.github.nijasc.ktor.svelte.receiveForm
import io.github.nijasc.ktor.svelte.requireUser
import io.github.nijasc.ktor.svelte.respondIfStale
import io.github.nijasc.ktor.svelte.sparseFields
import io.github.nijasc.ktor.svelte.toast
import io.github.nijasc.ktor.svelte.uploadForm
import io.github.nijasc.ktor.svelte.validate
import io.github.nijasc.ktorsvelte.FrontendRoutes
import io.github.nijasc.ktorsvelte.messages
import io.github.nijasc.ktorsvelte.theme
import io.ktor.http.ContentDisposition
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.receive
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.server.response.respondBytes
import io.ktor.server.routing.Route
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.describe
import io.ktor.server.routing.patch
import io.ktor.server.routing.post
import io.ktor.server.routing.put
import io.ktor.server.routing.route
import java.nio.file.Files

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
        val stats: BoardStats = tasks.stats(call.requireUser<User>())
        call.respond(stats)
    }

    val membersRoute =
        get("/api/members") {
        val members: List<UserRef> = users.all().filter { it.active }.map { UserRef(it.id, it.name) }
        call.respond(members)
    }

    route("/api/tasks") {
        get {
            val viewer = call.requireUser<User>()
            val query = call.query<TaskQuery>()
            val filter = TaskFilter(query.search, query.status, query.label, viewer.id.takeIf { query.mine })
            val page: Page<Task> = tasks.page(filter, query.cursor, query.limit)
            call.respond(page)
        }.queryOf<TaskQuery>()
            .sparseFields<Task>()
            .includes<Task> { relation<Comment?>("lastComment") { items -> tasks.lastComments(items.map { it.id }) } }

        post {
            val input = call.receive<TaskInput>()
            call.checkAssignee(users, input)
            val task: Task = tasks.create(input, call.requireUser<User>())
            call.toast(call.messages.taskCreated(), ToastKind.Success)
            call.navigateTo(FrontendRoutes.tasksId(task.id.toString()))
            call.respond(HttpStatusCode.Created, task)
        }

        route("/{id}") {
            val taskRoute =
                get {
                    val task: Task? = tasks.find(call.id())
                if (task == null) call.respondMissingTask() else call.respond(task)
            }

            put {
                val input = call.receive<TaskInput>()
                call.checkAssignee(users, input)
                val stored = tasks.find(call.id()) ?: return@put call.respondMissingTask()
                if (call.respondIfStale(input.version, stored.version, call.messages.problemTaskChanged()) { stored }) return@put
                val task: Task? = tasks.update(call.id(), input)
                if (task == null) call.respondMissingTask() else call.respond(task)
            }

            patch {
                val patch = call.receive<Patch<TaskInput>>()
                val stored = tasks.find(call.id()) ?: return@patch call.respondMissingTask()
                val input = patch.applyTo(stored.toInput())
                call.checkAssignee(users, input)
                val sent = input.version.takeIf { TaskInput::version in patch }
                if (call.respondIfStale(sent, stored.version, call.messages.problemTaskChanged()) { stored }) return@patch
                val task: Task? = tasks.update(call.id(), input)
                if (task == null) call.respondMissingTask() else call.respond(task)
            }

            delete {
                val task = tasks.find(call.id()) ?: return@delete call.respondMissingTask()
                val viewer = call.requireUser<User>()
                if (task.creator.id != viewer.id && !call.can(Permission.DeleteAnyTask)) {
                    return@delete call.respond(HttpStatusCode.Forbidden, Problem(call.messages.problemNotYours()))
                }
                tasks.delete(task.id)
                call.toast(call.messages.taskDeleted(task.comments), ToastKind.Success)
                call.respond(HttpStatusCode.NoContent)
            }

            post("/status") {
                val change = call.receive<StatusChange>()
                val task: Task? = tasks.move(call.id(), change.status)
                if (task == null) call.respondMissingTask() else call.respond(task)
            }

            val activityRoute =
                get("/activity") {
                val task = tasks.find(call.id()) ?: return@get call.respondMissingTask()
                val activity: List<Activity> = tasks.activity(task)
                call.respond(activity)
            }

            val commentsRoute =
                get("/comments") {
                val task = tasks.find(call.id()) ?: return@get call.respondMissingTask()
                val comments: List<Comment> = tasks.comments(task.id)
                call.respond(comments)
            }

            post("/comments") {
                val input = call.receive<CommentInput>()
                val task = tasks.find(call.id()) ?: return@post call.respondMissingTask()
                val comment: Comment = tasks.comment(task.id, call.requireUser<User>(), input.body)
                call.respond(HttpStatusCode.Created, comment)
            }

            val attachmentsRoute =
                get("/attachments") {
                val task = tasks.find(call.id()) ?: return@get call.respondMissingTask()
                val attachments: List<Attachment> = tasks.attachments(task.id)
                call.respond(attachments)
            }

            post("/attachments") {
                val task = tasks.find(call.id()) ?: return@post call.respondMissingTask()
                val uploader = call.requireUser<User>()
                val file = call.receiveForm().file("file")
                val attachments: List<Attachment> =
                    listOf(tasks.attach(task.id, uploader, cleanFileName(file.fileName), file.contentType, file.bytes))
                call.respond(HttpStatusCode.Created, attachments)
            }.uploadForm(maxSize = MAX_UPLOAD_BYTES, types = (INLINE_TYPES + DOWNLOAD_TYPES).toList()) { file("file") }.describe {
                summary = "Uploads files to a task."
                description = "Send the files as multipart form data. Images, PDF, text, CSV and ZIP files up to 5 MiB are accepted."
            }

            pageLoad(FrontendRoutes.Patterns.tasksId) {
                data("task", taskRoute)
                data("comments", commentsRoute)
                data("attachments", attachmentsRoute)
                data("activity", activityRoute)
                data("members", membersRoute)
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
            val viewer = call.requireUser<User>()
            if (file.attachment.uploader.id != viewer.id && !call.can(Permission.DeleteAnyFile)) {
                return@delete call.respond(HttpStatusCode.Forbidden, Problem(call.messages.problemNotYours()))
            }
            tasks.detach(file.attachment.id.value)
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

private fun Task.toInput(): TaskInput = TaskInput(title, description, priority, labels, icon, assignee?.id, dueOn, version)
