package notes

import io.github.nijasc.ktor.svelte.getPage
import io.github.nijasc.ktor.svelte.resource
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
import io.github.nijasc.ktorsvelte.messages
import io.github.nijasc.ktorsvelte.theme

private const val MISSING_NOTE = "That note does not exist."

fun Route.noteRoutes(store: NoteStore) {
    resource<Note, Int>("/api/notes") {
        missing<Problem> { Problem(MISSING_NOTE) }
        list<NoteQuery> { query -> store.list(query.search, query.tag) }
        create<NoteInput> { input -> store.create(input) }
        get { id -> store.find(id) }
        update<NoteInput> { id, input -> store.update(id, input) }
        delete { id -> store.delete(id) }
    }

    route("/api/notes") {
        getPage<Note>("/feed", defaultLimit = 20) { request -> store.page(request.cursor, request.limit) }

        get("/export") {
            call.respond(NotesExport(store.list(search = null, tag = null)))
        }

        route("/{id}") {
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
    respond(HttpStatusCode.NotFound, Problem(MISSING_NOTE))
}
