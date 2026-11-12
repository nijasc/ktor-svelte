package io.github.nijasc.ktor.svelte.gradle.libraries

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse

class IconUsageTest {
    @TempDir
    lateinit var dir: File

    private fun write(
        path: String,
        text: String,
    ) = File(dir, path).apply {
        parentFile.mkdirs()
        writeText(text)
    }

    @Test
    fun `icons are found in Kotlin and frontend sources, but not in generated code`() {
        write("src/main/kotlin/App.kt", "val icon = LucideIcon.Flame\nval other = LucideIcon.Unknown")
        write("frontend/src/routes/+page.svelte", "<Icon name=\"ArrowLeft\" />\n<Icon name={note.icon} />")
        write("frontend/src/lib/menu.ts", "export const items = [{ icon: 'Search' }, { icon: Icon.Tags }, { label: \"Hello\" }];")
        write("frontend/src/lib/api/types.ts", "export const Icon = { Rocket: 'Rocket' };")
        write("frontend/src/lib/ktor-svelte/icons.ts", "Trash: () => import('x')")
        val known = setOf("Flame", "ArrowLeft", "Search", "Tags", "Rocket", "Trash", "Hello")
        val used =
            usedIcons(
                known,
                listOf(File(dir, "src/main/kotlin")),
                File(dir, "frontend/src"),
                setOf(File(dir, "frontend/src/lib/api"), File(dir, "frontend/src/lib/ktor-svelte")),
            )
        assertEquals(setOf("ArrowLeft", "Flame", "Hello", "Search", "Tags"), used)
    }

    @Test
    fun `the registry only loads used icons while the type lists every icon`() {
        val icons = iconSources(listOf("arrow-left", "flame", "trash-2"), setOf("Flame")).getValue("$GENERATED_DIR/icons.ts")
        assertContains(icons, "    | 'ArrowLeft'\n    | 'Flame'\n    | 'Trash2';")
        assertContains(icons, "    Flame: () => import('@lucide/svelte/icons/flame'),\n};")
        assertFalse(icons.contains("import('@lucide/svelte/icons/trash-2')"))
        val all = iconSources(listOf("arrow-left", "flame"), null).getValue("$GENERATED_DIR/icons.ts")
        assertContains(all, "ArrowLeft: () => import('@lucide/svelte/icons/arrow-left'),")
    }
}
