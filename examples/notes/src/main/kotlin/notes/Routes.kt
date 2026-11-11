package notes

import io.github.nijasc.ktor.svelte.Page
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.PartData
import io.ktor.http.content.forEachPart
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.receive
import io.ktor.server.request.receiveMultipart
import io.ktor.utils.io.discard
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.describe
import io.ktor.server.routing.post
import io.ktor.server.routing.put
import io.ktor.server.routing.route
import ktorsvelte.messages
import ktorsvelte.theme

fun Route.noteRoutes(store: NoteStore) {
    route("/api/notes") {
        get {
            val search = call.queryParameters["search"]
            val tag = call.queryParameters["tag"]
            val notes: List<Note> = store.list(search, tag)
            call.respond(notes)
        }

        post {
            val input = call.receive<NoteInput>()
            call.respond(HttpStatusCode.Created, store.create(input))
        }

        get("/feed") {
            val cursor = call.queryParameters["cursor"]
            val limit = call.queryParameters["limit"]?.toIntOrNull() ?: 20
            val page: Page<Note> = store.page(cursor, limit)
            call.respond(page)
        }

        get("/export") {
            call.respond(NotesExport(store.list(search = null, tag = null)))
        }

        route("/{id}") {
            get {
                val note: Note? = store.find(call.noteId())
                if (note == null) call.respondMissing() else call.respond(note)
            }

            put {
                val input = call.receive<NoteInput>()
                val note: Note? = store.update(call.noteId(), input)
                if (note == null) call.respondMissing() else call.respond(note)
            }

            delete {
                if (store.delete(call.noteId())) call.respond(HttpStatusCode.NoContent) else call.respondMissing()
            }

            post("/attachments") {
                if (store.find(call.noteId()) == null) return@post call.respondMissing()
                var received = 0L
                val names = mutableListOf<String>()
                call.receiveMultipart().forEachPart { part ->
                    if (part is PartData.FileItem) {
                        names += part.originalFileName ?: part.name.orEmpty()
                        received += part.provider().discard()
                    }
                    part.dispose()
                }
                call.respond(UploadReceipt(names, received))
            }.describe {
                summary = "Uploads files to a note."
                description = "Send the files as multipart form data. The response lists the received file names and the total size."
                requestBody { ContentType.MultiPart.FormData() }
            }

            get("/activity") {
                val note = store.find(call.noteId()) ?: return@get call.respondMissing()
                val activity: List<Activity> =
                    listOfNotNull(Created(note.createdAt), Archived(note.createdAt, note.title).takeIf { note.status == NoteStatus.ARCHIVED })
                call.respond(activity)
            }

            post("/archive") {
                val note: Note? = store.archive(call.noteId())
                if (note == null) call.respondMissing() else call.respond(note)
            }
        }
    }

    get("/api/greeting") {
        val name = call.queryParameters["name"] ?: "Ktor"
        val greeting = Greeting(call.messages.serverGreeting(name), call.messages.locale, call.theme.cssName)
        call.respond(greeting)
    }

    get("/api/stats") {
        call.respond(store.stats())
    }
}

private fun ApplicationCall.noteId(): Int = parameters["id"]?.toIntOrNull() ?: -1

private suspend fun ApplicationCall.respondMissing() {
    respond(HttpStatusCode.NotFound, Problem("That note does not exist."))
}
