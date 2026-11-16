package io.github.nijasc.ktor.svelte.gradle.libraries

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class RouteLinkFixesTest {
    private val routes = listOf("/", "/login", "/notes", "/notes/[id]", "/files/[name].json").map(::routeOf)

    private fun fixed(source: String) = fixStringLinks(source, findStringLinks(source, routes))

    private fun fixedKotlin(source: String) = fixStringLinks(source, findKotlinStringLinks(source, routes))

    @Test
    fun `markup links become typed route calls`() {
        val result =
            fixed(
                """
                <a href="/">Home</a>
                <a href="/notes/{note.id}" class="btn">Open</a>
                <a href={"/login"}>Sign in</a>
                <a href={`/notes/${'$'}{id}`}>Open</a>
                """.trimIndent(),
            )
        assertEquals(
            """
            <a href={routes.home()}>Home</a>
            <a href={routes.notesId({ id: note.id })} class="btn">Open</a>
            <a href={routes.login()}>Sign in</a>
            <a href={routes.notesId({ id: id })}>Open</a>
            """.trimIndent(),
            result.source,
        )
        assertEquals(4, result.fixed)
        assertEquals(emptyList(), result.left)
    }

    @Test
    fun `goto and redirect keep their other arguments`() {
        val result =
            fixed(
                """
                await goto("/notes/" + created.id);
                goto('/notes', { replaceState: true });
                if (!user) redirect(307, '/login');
                """.trimIndent(),
            )
        assertEquals(
            """
            await goto(routes.notesId({ id: created.id }));
            goto(routes.notes(), { replaceState: true });
            if (!user) redirect(307, routes.login());
            """.trimIndent(),
            result.source,
        )
    }

    @Test
    fun `links that would lose something are left for a person`() {
        val source =
            """
            <a href="/notes?sort=title">Sorted</a>
            <a href="/notes/{id}#comments">Comments</a>
            <a href="/files/{name}.json">File</a>
            goto("/notes/note-" + id);
            """.trimIndent()
        val result = fixed(source)
        assertEquals(source, result.source)
        assertEquals(0, result.fixed)
        assertEquals(listOf(1, 2, 3, 4), result.left.map { it.line })
    }

    @Test
    fun `kotlin redirects to static pages are rewritten and others are left`() {
        val result =
            fixedKotlin(
                """
                call.respondRedirect("/login")
                call.respondRedirect(url = "/notes", permanent = true)
                call.respondRedirect("/notes/${'$'}id")
                """.trimIndent(),
            )
        assertEquals(
            """
            call.respondRedirect(FrontendRoutes.login)
            call.respondRedirect(url = FrontendRoutes.notes, permanent = true)
            call.respondRedirect("/notes/${'$'}id")
            """.trimIndent(),
            result.source,
        )
        assertEquals(2, result.fixed)
        assertEquals(listOf("FrontendRoutes.notesId(id)"), result.left.map { it.suggestion })
    }

    @Test
    fun `the routes import goes into the instance script with the file's indentation and quotes`() {
        assertEquals(
            "<script lang=\"ts\">\n  import { routes } from \"#routes\";\n  import { api } from \"#api\";\n</script>\n\n<a>x</a>\n",
            withRoutesImport("<script lang=\"ts\">\n  import { api } from \"#api\";\n</script>\n\n<a>x</a>\n", svelte = true),
        )
        assertEquals(
            "<script module>\n    export const x = 1;\n</script>\n<script>\n    import { routes } from '#routes';\n    let a = 1;\n</script>\n",
            withRoutesImport("<script module>\n    export const x = 1;\n</script>\n<script>\n    let a = 1;\n</script>\n", svelte = true),
        )
    }

    @Test
    fun `a file without a script gets one`() {
        assertEquals(
            "<script lang=\"ts\">\n    import { routes } from '#routes';\n</script>\n\n<a href={routes.home()}>Home</a>\n",
            withRoutesImport("<a href={routes.home()}>Home</a>\n", svelte = true),
        )
    }

    @Test
    fun `typescript files get the import before their first import`() {
        assertEquals(
            "import { routes } from '#routes';\nimport { redirect } from '@sveltejs/kit';\n\nexport const ssr = false;\n",
            withRoutesImport("import { redirect } from '@sveltejs/kit';\n\nexport const ssr = false;\n", svelte = false),
        )
        assertEquals(
            "import { routes } from '#routes';\n\nexport const ssr = false;\n",
            withRoutesImport("export const ssr = false;\n", svelte = false),
        )
    }

    @Test
    fun `an existing routes import is kept or extended`() {
        val already = "import { routes } from '#routes';\n"
        assertEquals(already, withRoutesImport(already, svelte = false))
        assertEquals(
            "import { routeIds, routes } from '#routes';\n",
            withRoutesImport("import { routeIds } from '#routes';\n", svelte = false),
        )
    }

    @Test
    fun `a file with its own routes is recognised`() {
        assertTrue(definesOwnRoutes("const routes = [];"))
        assertTrue(definesOwnRoutes("import { routes } from './nav';"))
        assertFalse(definesOwnRoutes("import { routes } from '#routes';"))
        assertFalse(definesOwnRoutes("const subroutes = routes.home();"))
    }

    @Test
    fun `the kotlin import is added in order and only when needed`() {
        val name = "app.generated.FrontendRoutes"
        assertEquals(
            "package app\n\nimport app.generated.FrontendRoutes\nimport io.ktor.server.response.respondRedirect\n\nfun x() {}\n",
            withKotlinImport("package app\n\nimport io.ktor.server.response.respondRedirect\n\nfun x() {}\n", name),
        )
        assertEquals(
            "package app\n\nimport aaa.First\nimport app.generated.FrontendRoutes\n\nfun x() {}\n",
            withKotlinImport("package app\n\nimport aaa.First\n\nfun x() {}\n", name),
        )
        assertEquals(
            "package app\n\nimport app.generated.FrontendRoutes\n\nfun x() {}\n",
            withKotlinImport("package app\n\nfun x() {}\n", name),
        )
        assertEquals("import app.generated.FrontendRoutes\n\nfun x() {}\n", withKotlinImport("fun x() {}\n", name))
        val sameUnit = "package app.generated\n\nfun x() {}\n"
        assertEquals(sameUnit, withKotlinImport(sameUnit, name))
        val imported = "package app\n\nimport app.generated.*\n\nfun x() {}\n"
        assertEquals(imported, withKotlinImport(imported, name))
    }
}
