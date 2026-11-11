package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.renderTemplate
import org.gradle.api.DefaultTask
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.OutputFile
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.File

private const val TEMPLATE_FILE = "ktor-svelte.xml"
private val IDE_PREFIXES = listOf("IntelliJIdea", "IdeaIC", "WebStorm")

internal fun jetBrainsConfigRoot(
    osName: String = System.getProperty("os.name"),
    environment: Map<String, String> = System.getenv(),
    home: String = System.getProperty("user.home"),
): File =
    when {
        osName.startsWith("Windows") -> File(environment["APPDATA"] ?: "$home/AppData/Roaming", "JetBrains")
        osName.startsWith("Mac") -> File(home, "Library/Application Support/JetBrains")
        else -> File(environment["XDG_CONFIG_HOME"] ?: "$home/.config", "JetBrains")
    }

internal fun ideConfigDirectories(root: File): List<File> =
    root
        .listFiles()
        .orEmpty()
        .filter { directory -> directory.isDirectory && IDE_PREFIXES.any { directory.name.startsWith(it) } }
        .sortedBy { it.name }

@UntrackedTask(because = "Writes IDE settings outside the build when asked to")
public abstract class SvelteLiveTemplatesTask : DefaultTask() {
    @get:OutputFile
    public abstract val templateFile: RegularFileProperty

    @get:Input
    @get:Optional
    @get:Option(option = "install", description = "Copies the templates into every IntelliJ IDEA and WebStorm configuration found")
    public abstract val install: Property<Boolean>

    @get:Input
    @get:Optional
    @get:Option(option = "config-dir", description = "The JetBrains configuration folder to install into, if not the default one")
    public abstract val configDirectory: Property<String>

    @TaskAction
    public fun write() {
        val content = renderTemplate("live-templates.xml")
        val file = templateFile.get().asFile
        file.parentFile.mkdirs()
        file.writeText(content)
        if (!install.getOrElse(false)) {
            logger.lifecycle("ktor-svelte wrote live templates to $file.")
            logger.lifecycle(
                "Run svelteLiveTemplates --install to copy them into IntelliJ, or copy the file into <IDE config>/templates yourself.",
            )
            return
        }
        val root = configDirectory.orNull?.let(::File) ?: jetBrainsConfigRoot()
        val targets = ideConfigDirectories(root)
        if (targets.isEmpty()) {
            logger.warn(
                "ktor-svelte found no IntelliJ IDEA or WebStorm configuration in $root. Copy $file into <IDE config>/templates yourself.",
            )
            return
        }
        targets.forEach { ide ->
            val target = ide.resolve("templates/$TEMPLATE_FILE")
            target.parentFile.mkdirs()
            target.writeText(content)
            logger.lifecycle("ktor-svelte installed live templates for ${ide.name}.")
        }
        logger.lifecycle("Restart the IDE, then type ksget, kspost, kspage, ksdto, ksinput, ksapi, ksload or kserror and press Tab.")
    }
}
