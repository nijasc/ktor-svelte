package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.messageSourceFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.propertyName
import io.github.nijasc.ktor.svelte.gradle.libraries.readMessages
import io.github.nijasc.ktor.svelte.gradle.libraries.unusedMessageKeys
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.ListProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.File

internal fun unusedMessages(
    frontend: File,
    messagesDirectory: File,
    locales: List<String>,
    kotlinSources: Collection<File>,
): List<String> {
    val catalog = readMessages(messagesDirectory, locales)
    val excluded = setOf(frontend.resolve(GENERATED_DIR), frontend.resolve("src/lib/api"))
    val sources = messageSourceFiles(listOf(frontend.resolve("src")) + kotlinSources, excluded)
    return unusedMessageKeys(catalog.keys, sources.map { it.readText() })
}

@UntrackedTask(because = "Reads the message files and the sources and reports messages nothing uses")
public abstract class SvelteVerifyMessagesTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Internal
    public abstract val messagesDirectory: DirectoryProperty

    @get:Internal
    public abstract val kotlinSources: ConfigurableFileCollection

    @get:Input
    public abstract val locales: ListProperty<String>

    @get:Input
    @get:Optional
    @get:Option(option = "strict", description = "Fails the build when a message is unused, instead of only listing it")
    public abstract val strict: Property<Boolean>

    @TaskAction
    public fun verify() {
        if (locales.get().isEmpty()) {
            logger.lifecycle("ktor-svelte: i18n is off, so there are no messages to verify.")
            return
        }
        val unused = unusedMessages(frontendDir.get().asFile, messagesDirectory.get().asFile, locales.get(), kotlinSources.files)
        if (unused.isEmpty()) {
            logger.lifecycle("ktor-svelte: every message is used.")
            return
        }
        unused.forEach { key -> logger.lifecycle("$key  ->  nothing calls ${propertyName(key)}() and no source names '$key'") }
        val summary = "${unused.size} message(s) are in every locale file but used nowhere."
        if (strict.getOrElse(false)) throw GradleException(summary + DocLink.I18N.see())
        logger.warn("ktor-svelte: $summary Add --strict to fail the build on them." + DocLink.I18N.see())
    }
}
