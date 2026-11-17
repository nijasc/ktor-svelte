package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonOutput
import kotlin.test.Test
import kotlin.test.assertEquals

class ApiChangesTest {
    private fun ref(name: String) = mapOf("\$ref" to "#/components/schemas/$name")

    private fun json(content: Map<String, Any?>) = mapOf("content" to mapOf("application/json" to mapOf("schema" to content)))

    private fun document(
        paths: Map<String, Any?>,
        schemas: Map<String, Any?>,
    ) = JsonOutput.toJson(mapOf("openapi" to "3.1.1", "paths" to paths, "components" to mapOf("schemas" to schemas)))

    private fun text(vararg more: Pair<String, Any?>) = mapOf("type" to "string") + more

    private val userRef =
        mapOf(
            "type" to "object",
            "required" to listOf("id", "name"),
            "properties" to mapOf("id" to mapOf("type" to "integer"), "name" to text()),
        )

    private val noteBefore =
        mapOf(
            "type" to "object",
            "required" to listOf("id", "title", "author"),
            "properties" to
                mapOf(
                    "id" to mapOf("type" to "integer"),
                    "title" to text(),
                    "dueOn" to text("format" to "date"),
                    "status" to mapOf("enum" to listOf("OPEN", "DONE")),
                    "author" to ref("UserRef"),
                    "tags" to mapOf("type" to "array", "items" to text()),
                ),
        )
    private val inputBefore =
        mapOf(
            "type" to "object",
            "required" to listOf("title"),
            "properties" to mapOf("title" to text(), "color" to text()),
        )

    private val before =
        document(
            mapOf(
                "/api/notes" to
                    mapOf(
                        "get" to
                            mapOf(
                                "parameters" to listOf(mapOf("name" to "search", "in" to "query", "required" to false, "schema" to text())),
                                "responses" to mapOf("200" to json(mapOf("type" to "array", "items" to ref("Note")))),
                            ),
                        "post" to
                            mapOf(
                                "requestBody" to json(ref("NoteInput")),
                                "responses" to mapOf("201" to json(ref("Note")), "422" to json(ref("Problem"))),
                            ),
                    ),
                "/api/notes/{id}" to mapOf("delete" to mapOf("responses" to mapOf("204" to mapOf("description" to "")))),
            ),
            mapOf("Note" to noteBefore, "NoteInput" to inputBefore, "UserRef" to userRef, "Problem" to mapOf("type" to "object")),
        )

    @Test
    fun `an unchanged document has no changes`() {
        assertEquals(emptyList(), apiChanges(before, before))
        assertEquals("ktor-svelte: the API is the same for callers as on origin/main.", apiChangeReport(emptyList(), "origin/main"))
    }

    @Test
    fun `what callers can trip over is told apart from what they will not notice`() {
        val noteAfter =
            mapOf(
                "type" to "object",
                "required" to listOf("id"),
                "properties" to
                    mapOf(
                        "id" to text(),
                        "title" to text(),
                        "status" to mapOf("enum" to listOf("OPEN", "DONE", "LATER")),
                        "author" to ref("UserRef"),
                        "tags" to mapOf("type" to "array", "items" to text()),
                        "starred" to mapOf("type" to "boolean"),
                    ),
            )
        val inputAfter =
            mapOf(
                "type" to "object",
                "required" to listOf("title", "folder"),
                "properties" to mapOf("title" to text(), "folder" to text(), "pinned" to mapOf("type" to "boolean")),
            )
        val userAfter = mapOf("type" to "object", "required" to listOf("id"), "properties" to mapOf("id" to mapOf("type" to "integer")))
        val after =
            document(
                mapOf(
                    "/api/notes" to
                        mapOf(
                            "get" to
                                mapOf(
                                    "parameters" to
                                        listOf(
                                            mapOf("name" to "search", "in" to "query", "required" to true, "schema" to text()),
                                            mapOf(
                                                "name" to "limit",
                                                "in" to "query",
                                                "required" to false,
                                                "schema" to mapOf("type" to "integer"),
                                            ),
                                        ),
                                    "responses" to mapOf("200" to json(mapOf("type" to "array", "items" to ref("Note")))),
                                ),
                            "post" to mapOf("requestBody" to json(ref("NoteInput")), "responses" to mapOf("201" to json(ref("Note")))),
                        ),
                    "/api/stats" to mapOf("get" to mapOf("responses" to mapOf("200" to json(mapOf("type" to "object"))))),
                ),
                mapOf("Note" to noteAfter, "NoteInput" to inputAfter, "UserRef" to userAfter),
            )
        val changes = apiChanges(before, after)
        assertEquals(
            listOf(
                "! DELETE /api/notes/{id}: removed",
                "  GET /api/notes  query  limit: added",
                "! GET /api/notes  query  search: is required now",
                "! GET /api/notes  response  [].dueOn: removed",
                "! GET /api/notes  response  [].author.name: removed",
                "  GET /api/notes  response  [].starred: added",
                "! GET /api/notes  response  [].id: was integer, is string",
                "! GET /api/notes  response  [].title: can be missing now",
                "! GET /api/notes  response  [].status: was OPEN | DONE, is OPEN | DONE | LATER",
                "! GET /api/notes  response  [].author: can be missing now",
                "  POST /api/notes  request  color: is no longer read",
                "! POST /api/notes  request  folder: is new and required",
                "  POST /api/notes  request  pinned: added",
                "! POST /api/notes  response  dueOn: removed",
                "! POST /api/notes  response  author.name: removed",
                "  POST /api/notes  response  starred: added",
                "! POST /api/notes  response  id: was integer, is string",
                "! POST /api/notes  response  title: can be missing now",
                "! POST /api/notes  response  status: was OPEN | DONE, is OPEN | DONE | LATER",
                "! POST /api/notes  response  author: can be missing now",
                "  GET /api/stats: added",
            ),
            changes.map { "${if (it.breaking) "!" else " "} ${it.where}: ${it.what}" },
        )
        val report = apiChangeReport(changes, "origin/main").lines()
        assertEquals("API changes against origin/main: 15 that can break callers, 6 other.", report.first())
        assertEquals("Can break callers", report[2])
        assertEquals("  " + "DELETE /api/notes/{id}".padEnd("GET /api/notes  response  [].author.name".length) + "  removed", report[3])
        assertEquals("Other changes", report[report.indexOf("") + 1 + report.drop(report.indexOf("") + 1).indexOf("") + 1])
    }

    @Test
    fun `a class that contains itself does not send the comparison in circles`() {
        val tree =
            mapOf(
                "type" to "object",
                "properties" to mapOf("name" to text(), "children" to mapOf("type" to "array", "items" to ref("Tree"))),
            )
        val paths = mapOf("/api/tree" to mapOf("get" to mapOf("responses" to mapOf("200" to json(ref("Tree"))))))
        val renamed =
            mapOf(
                "type" to "object",
                "properties" to mapOf("label" to text(), "children" to mapOf("type" to "array", "items" to ref("Tree"))),
            )
        val changes = apiChanges(document(paths, mapOf("Tree" to tree)), document(paths, mapOf("Tree" to renamed)))
        assertEquals(
            listOf("GET /api/tree  response  name: removed", "GET /api/tree  response  label: added"),
            changes.map {
                "${it.where}: ${it.what}"
            },
        )
    }
}
