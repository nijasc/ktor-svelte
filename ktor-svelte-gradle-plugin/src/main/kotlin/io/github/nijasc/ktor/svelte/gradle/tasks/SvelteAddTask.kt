package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.File

private val STATIC_SEGMENT = Regex("[a-z0-9][a-z0-9-]*")
private val PARAMETER_SEGMENT = Regex("\\[([A-Za-z][A-Za-z0-9]*)]")
private val GROUP_SEGMENT = Regex("\\([a-z0-9][a-z0-9-]*\\)")
private val CLIENT_FUNCTION =
    Regex("""export const \w+ = \(([^)]*)\) =>\s*request<.*>\('GET', ([`'])([^`']*)[`'], \{.*operation: '([\w.]+)'""")
private val CLIENT_PARAMETER = Regex("""\$\{encodeURIComponent\((\w+)\)}""")

internal class PagePath(
    val folder: String,
) {
    private val segments = folder.split('/')
    private val visible = segments.filterNot { GROUP_SEGMENT.matches(it) }
    val parameters: List<String> = visible.mapNotNull { PARAMETER_SEGMENT.matchEntire(it)?.groupValues?.get(1) }
    private val words = visible.map { PARAMETER_SEGMENT.matchEntire(it)?.groupValues?.get(1) ?: it }.flatMap { it.split('-') }
    val url: String = "/" + visible.joinToString("/")
    val apiPath: String =
        "/api/" + visible.joinToString("/") { PARAMETER_SEGMENT.matchEntire(it)?.let { found -> "{${found.groupValues[1]}}" } ?: it }
    val shape: String = "/" + visible.joinToString("/") { if (PARAMETER_SEGMENT.matches(it)) "{}" else it }
    val title: String =
        (visible.lastOrNull { STATIC_SEGMENT.matches(it) } ?: "home").split('-').joinToString(" ").replaceFirstChar { it.uppercase() }
    val typeName: String = words.filter { it.isNotEmpty() }.joinToString("") { it.replaceFirstChar(Char::uppercase) }.ifEmpty { "Home" }
    val functionName: String = typeName.replaceFirstChar(Char::lowercase) + "Routes"
    val dataKey: String =
        (visible.lastOrNull { STATIC_SEGMENT.matches(it) } ?: "data")
            .split('-')
            .mapIndexed { index, word -> if (index == 0) word else word.replaceFirstChar(Char::uppercase) }
            .joinToString("")
            .let { name ->
                if (visible.lastOrNull()?.let(PARAMETER_SEGMENT::matches) == true &&
                    name.endsWith("s")
                ) {
                    name.dropLast(1)
                } else {
                    name
                }
            }

    init {
        val valid = segments.all { STATIC_SEGMENT.matches(it) || PARAMETER_SEGMENT.matches(it) || GROUP_SEGMENT.matches(it) }
        if (folder.isBlank() || !valid) {
            throw GradleException(
                "'$folder' is not a page folder. Write it as it is under src/routes, such as notes, notes/[id] or (app)/settings." +
                    DocLink.ROUTES.see(),
            )
        }
    }
}

internal class ClientCall(
    val operation: String,
    val numericParameters: List<Boolean>,
)

internal fun matchingClientCall(
    page: PagePath,
    services: String,
): ClientCall? =
    services.lineSequence().firstNotNullOfOrNull { line ->
        val found = CLIENT_FUNCTION.find(line) ?: return@firstNotNullOfOrNull null
        val (signature, _, path, operation) = found.destructured
        val names = CLIENT_PARAMETER.findAll(path).map { it.groupValues[1] }.toList()
        val shape = CLIENT_PARAMETER.replace(path, "{}")
        val withoutPrefix = "/" + shape.trim('/').substringAfter('/', "")
        if (withoutPrefix != page.shape || names.size != page.parameters.size) return@firstNotNullOfOrNull null
        val types = signature.split(',').associate { it.substringBefore(':').trim().removeSuffix("?") to it.substringAfter(':', "").trim() }
        ClientCall(operation, names.map { types[it] == "number" })
    }

internal fun pageLoadSource(
    page: PagePath,
    call: ClientCall?,
): String {
    val dynamic = page.parameters.isNotEmpty()
    val settings =
        listOfNotNull("export const prerender = false;".takeIf { dynamic }, "export const ssr = false;".takeIf { dynamic || call != null })
    val head = if (settings.isEmpty()) "" else settings.joinToString("\n", postfix = "\n\n")
    if (call == null) {
        val body =
            if (dynamic) {
                "export const load: PageLoad = async ({ params }) => {\n    return { ${page.parameters.joinToString {
                    "$it: params.$it"
                }} };\n};\n"
            } else {
                "export const load: PageLoad = async () => {\n    return {};\n};\n"
            }
        return "import type { PageLoad } from './\$types';\n\n$head$body"
    }
    val arguments =
        page.parameters.mapIndexed {
            index,
            name,
            ->
            if (call.numericParameters[index]) "Number(event.params.$name)" else "event.params.$name"
        }
    val method = call.operation.substringAfterLast('.')
    val group = call.operation.substringBeforeLast('.')
    return "import { apiWith } from '#api';\nimport type { PageLoad } from './\$types';\n\n$head" +
        "export const load: PageLoad = async (event) => {\n" +
        "    return { ${page.dataKey}: await apiWith(event).$group.$method(${arguments.joinToString()}) };\n" +
        "};\n"
}

internal fun pageSource(page: PagePath): String =
    "<script lang=\"ts\">\n" +
        "    import type { PageProps } from './\$types';\n\n" +
        "    let { data }: PageProps = \$props();\n" +
        "</script>\n\n" +
        "<svelte:head>\n    <title>${page.title}</title>\n</svelte:head>\n\n" +
        "<h1>${page.title}</h1>\n" +
        "<pre>{JSON.stringify(data, null, 2)}</pre>\n"

internal fun routeStubSource(
    page: PagePath,
    packageName: String?,
): String {
    val read = page.parameters.joinToString("") { "        val $it = call.parameters[\"$it\"].orEmpty()\n" }
    val answer = if (page.parameters.isEmpty()) page.title else page.title + page.parameters.joinToString("") { " \$$it" }
    return (if (packageName.isNullOrEmpty()) "" else "package $packageName\n\n") +
        "import io.ktor.server.response.respondText\n" +
        "import io.ktor.server.routing.Route\n" +
        "import io.ktor.server.routing.get\n\n" +
        "fun Route.${page.functionName}() {\n" +
        "    get(\"${page.apiPath}\") {\n" +
        read +
        "        call.respondText(\"$answer\")\n" +
        "    }\n" +
        "}\n"
}

@UntrackedTask(because = "Creates the files of a new page once")
public abstract class SvelteAddTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Internal
    public abstract val routesDirectory: DirectoryProperty

    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Input
    @get:Optional
    public abstract val mainClass: Property<String>

    @get:Input
    @get:Optional
    @get:Option(option = "page", description = "The page folder to create, relative to the routes folder, such as notes/[id]")
    public abstract val page: Property<String>

    @get:Input
    @get:Optional
    @get:Option(option = "route", description = "Also writes a Kotlin file with a matching API route to start from")
    public abstract val route: Property<Boolean>

    @get:Internal
    public abstract val messagesDirectory: DirectoryProperty

    @get:Input
    @get:Optional
    @get:Option(option = "crud", description = "A class of the API, such as Note: creates list, detail and form pages for its routes")
    public abstract val crud: Property<String>

    private fun addCrud(
        type: String,
        folder: String?,
    ) {
        val project = projectDirectory.get().asFile
        val frontend = frontendDir.get().asFile
        val api = frontend.resolve("src/lib/api")
        val services = api.resolve("services.ts").takeIf(File::isFile)?.readText()
        val types = api.resolve("types.ts").takeIf(File::isFile)?.readText()
        if (services == null || types == null) {
            throw GradleException("svelteAdd --crud reads the generated client, and there is none yet. Run svelteGenerateTs first.")
        }
        val generated = frontend.resolve("src/lib/ktor-svelte")
        val locales =
            messagesDirectory.orNull
                ?.asFile
                ?.listFiles { file -> file.extension == "json" }
                ?.sortedBy { it.name }
                .orEmpty()
        val translated = generated.resolve("i18n.ts").isFile && locales.isNotEmpty()
        val plan = crudPlan(type, services, types, folder?.also { PagePath(it) }, generated.resolve("routes.ts").isFile, translated)
        val routes = routesDirectory.get().asFile
        val files = crudFiles(plan).mapKeys { routes.resolve(it.key) }
        val taken = files.keys.filter(File::exists)
        if (taken.isNotEmpty()) {
            throw GradleException(
                "svelteAdd does not overwrite: ${taken.joinToString { it.relativeTo(project).invariantSeparatorsPath }} " +
                    "${if (taken.size == 1) "is" else "are"} already there.",
            )
        }
        files.forEach { (file, content) ->
            file.parentFile.mkdirs()
            file.writeText(content)
        }
        if (translated) locales.forEach { file -> file.writeText(withMessages(file.readText(), plan.texts)) }
        val steps =
            listOfNotNull(
                "ktor-svelte added pages for ${plan.type}, wired to api.${plan.group}:",
                files.keys.joinToString("\n") { "  ${it.relativeTo(project).invariantSeparatorsPath}" },
                "Their texts are in ${locales.joinToString { it.name }}, in English. Translate them.".takeIf { translated },
                plan.skippedFields.takeIf { it.isNotEmpty() }?.let { skipped ->
                    "The form leaves out ${skipped.joinToString {
                        it.name
                    }}: add inputs for them, they are not plain text, numbers or switches."
                },
                "Add paramRoutes(\"/${plan.folder.split(
                    '/',
                ).filterNot { it.startsWith("(") }.joinToString("/")}/[id]\") to install(Svelte), " +
                    "so the app serves the detail page for every id.".takeIf { plan.has("get") }.orEmpty(),
                "The files are yours from here on.",
            )
        logger.lifecycle(steps.joinToString("\n"))
    }

    @TaskAction
    public fun add() {
        val asked = page.orNull?.trim('/', ' ')?.takeIf { it.isNotEmpty() }
        val type = crud.orNull?.trim()?.takeIf { it.isNotEmpty() }
        if (type != null) return addCrud(type, asked)
        if (asked == null) {
            throw GradleException("Say what to add: svelteAdd --page=notes/[id], or svelteAdd --crud=Note" + DocLink.ROUTES.see())
        }
        val path = PagePath(asked)
        val project = projectDirectory.get().asFile
        val frontend = frontendDir.get().asFile
        val folder = routesDirectory.get().asFile.resolve(path.folder)
        val services = frontend.resolve("src/lib/api/services.ts").takeIf(File::isFile)?.readText()
        val call = services?.let { matchingClientCall(path, it) }
        val files =
            mutableMapOf(
                folder.resolve("+page.svelte") to pageSource(path),
                folder.resolve("+page.ts") to pageLoadSource(path, call),
            )
        if (route.getOrElse(false)) {
            val packageName = mainClass.orNull?.substringBeforeLast('.', "")
            val directory = project.resolve("src/main/kotlin").resolve(packageName.orEmpty().replace('.', '/'))
            files[directory.resolve("${path.typeName}Routes.kt")] = routeStubSource(path, packageName)
        }
        val taken = files.keys.filter(File::exists)
        if (taken.isNotEmpty()) {
            throw GradleException(
                "svelteAdd does not overwrite: ${taken.joinToString { it.relativeTo(project).invariantSeparatorsPath }} " +
                    "${if (taken.size == 1) "is" else "are"} already there.",
            )
        }
        files.forEach { (file, content) ->
            file.parentFile.mkdirs()
            file.writeText(content)
        }
        val steps =
            listOfNotNull(
                "ktor-svelte added ${path.url}:",
                files.keys.joinToString("\n") { "  ${it.relativeTo(project).invariantSeparatorsPath}" },
                call?.let { "Its load calls api.${it.operation}, the route that answers at the same path." },
                "Add paramRoutes(\"${path.url}\") to install(Svelte), so the app serves the page for every value.".takeIf {
                    path.parameters
                        .isNotEmpty()
                },
                "Call ${path.functionName}() inside routing { } to turn the new route on.".takeIf { route.getOrElse(false) },
                "The files are yours from here on.",
            )
        logger.lifecycle(steps.joinToString("\n"))
    }
}
