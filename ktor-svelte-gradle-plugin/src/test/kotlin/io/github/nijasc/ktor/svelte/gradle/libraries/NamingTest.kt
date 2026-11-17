package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.NamingStyle
import io.github.nijasc.ktor.svelte.gradle.tasks.describeRule
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class NamingTest {
    @TempDir
    lateinit var dir: File

    private fun page(path: String) {
        dir.resolve(path).apply {
            parentFile.mkdirs()
            writeText("")
        }
    }

    @Test
    fun `the styles accept their own names and refuse the others`() {
        val kebab = Regex(NamingStyle.KebabCase.pattern)
        val camel = Regex(NamingStyle.CamelCase.pattern)
        val pascal = Regex(NamingStyle.PascalCase.pattern)
        val snake = Regex(NamingStyle.SnakeCase.pattern)

        assertTrue(kebab.matches("task-list") && kebab.matches("v2") && !kebab.matches("taskList") && !kebab.matches("task--list"))
        assertTrue(camel.matches("taskList") && !camel.matches("TaskList") && !camel.matches("task_list"))
        assertTrue(pascal.matches("TaskInput") && !pascal.matches("taskInput") && !pascal.matches("Task_Input"))
        assertTrue(snake.matches("task_list") && !snake.matches("task-list"))
        assertEquals("kebab-case", describeRule(NamingStyle.KebabCase.pattern))
        assertEquals("matching [A-Z]\\w*Dto", describeRule("[A-Z]\\w*Dto"))
    }

    @Test
    fun `pages are checked folder by folder, without groups and parameters`() {
        page("+page.svelte")
        page("(app)/task-list/+page.svelte")
        page("(app)/taskList/[taskId]/+page.ts")
        page("(app)/taskList/[taskId]/editForm/+page.svelte")
        page("admin/[[optional]]/[...rest]/+page.svelte")
        page("Settings/+layout.svelte")

        val problems = pageNameProblems(dir, Regex(NamingStyle.KebabCase.pattern))

        assertEquals(
            listOf(
                "page|/(app)/taskList|taskList",
                "page|/(app)/taskList/[taskId]/editForm|editForm",
            ),
            problems.map { "${it.kind}|${it.where}|${it.name}" },
        )
    }

    @Test
    fun `api routes and dtos are read from the generated OpenAPI document`() {
        val openApi =
            """
            {"paths": {"/api/tasks/{taskId}": {}, "/api/taskComments": {}, "/api/me": {}},
             "components": {"schemas": {"TaskInput": {}, "taskView": {}, "UserDto": {}}}}
            """.trimIndent()

        val problems = apiNameProblems(openApi, Regex(NamingStyle.KebabCase.pattern), Regex("[A-Z][A-Za-z0-9]*(?<!Dto)"))

        assertEquals(
            listOf("api route|/api/taskComments|taskComments", "dto|UserDto|UserDto", "dto|taskView|taskView"),
            problems.map { "${it.kind}|${it.where}|${it.name}" },
        )
        assertEquals(emptyList(), apiNameProblems(openApi, null, null))
    }

    @Test
    fun `message keys are checked against their rule`() {
        val problems = messageKeyProblems(listOf("nav-board", "navSettings", "task_saved"), Regex(NamingStyle.KebabCase.pattern))

        assertEquals(listOf("navSettings", "task_saved"), problems.map { it.name })
    }
}
