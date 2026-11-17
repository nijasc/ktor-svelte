package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy
import org.gradle.api.GradleException
import java.io.File

internal sealed interface RoutePart {
    data class Text(
        val value: String,
    ) : RoutePart

    data class Param(
        val name: String,
        val optional: Boolean,
        val rest: Boolean,
    ) : RoutePart
}

internal data class NavMeta(
    val title: String,
    val icon: String? = null,
    val order: Int = DEFAULT_NAV_ORDER,
    val menu: Boolean = true,
    val description: String? = null,
    val image: String? = null,
) {
    val shared: Boolean get() = description != null || image != null
}

internal fun sharesPages(routes: List<FrontendRoute>?): Boolean = routes.orEmpty().any { it.nav?.shared == true }

internal const val DEFAULT_NAV_ORDER = 100
private val NAV_EXPORT = Regex("""export\s+const\s+_nav\s*=\s*\{([^}]*)}""")
private val NAV_PROPERTY = Regex("""(\w+)\s*:\s*('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|-?\d+|true|false)\s*(?:,|$)""")
private val NAV_FILES = listOf("+page.ts", "+page.js")

internal fun navMeta(
    source: String,
    file: String,
): NavMeta? {
    val body =
        NAV_EXPORT
            .find(source)
            ?.groupValues
            ?.get(1)
            ?.trim() ?: return null

    fun wrong(reason: String): Nothing =
        throw GradleException(
            "$file: _nav $reason. Write it as export const _nav = { title: 'Board', icon: 'LayoutDashboard', order: 1 }, " +
                "with plain text, numbers and true or false." + DocLink.ROUTES.see(),
        )
    val found = NAV_PROPERTY.findAll(body).associate { it.groupValues[1] to it.groupValues[2] }
    val rest = NAV_PROPERTY.replace(body, "").trim()
    if (rest.isNotEmpty()) wrong("has a part that cannot be read here: $rest")
    val unknown = found.keys - setOf("title", "icon", "order", "menu", "description", "image")
    if (unknown.isNotEmpty()) wrong("has no setting called ${unknown.joinToString()}")

    fun text(name: String): String? =
        found[name]?.let { value ->
            if (!value.startsWith("'") && !value.startsWith("\"")) wrong("needs text for $name")
            value.substring(1, value.length - 1).replace(Regex("""\\(.)"""), "$1")
        }
    val title = text("title")?.takeIf { it.isNotBlank() } ?: wrong("needs a title")
    val order = found["order"]?.let { it.toIntOrNull() ?: wrong("needs a whole number for order") } ?: DEFAULT_NAV_ORDER
    val menu = found["menu"]?.let { it.toBooleanStrictOrNull() ?: wrong("needs true or false for menu") } ?: true
    val image = text("image")
    if (image != null && !image.startsWith("/") && !image.startsWith("https://") && !image.startsWith("http://")) {
        wrong("needs an address for image, such as '/share/board.png' or one that starts with https://")
    }
    return NavMeta(title, text("icon"), order, menu, text("description"), image)
}

internal data class FrontendRoute(
    val id: String,
    val name: String,
    val segments: List<List<RoutePart>>,
    val nav: NavMeta? = null,
) {
    val params: List<RoutePart.Param> get() = segments.flatten().filterIsInstance<RoutePart.Param>()
}

private val PAGE_FILE = Regex("""\+page(@[^.]*)?(\.server)?\.(svelte|ts|js)""")
private val GROUP = Regex("""\(.+\)""")
private val SEGMENT_PART =
    Regex("""\[x\+([0-9a-fA-F]{2})]|\[u\+([0-9a-fA-F]{4,6}(?:-[0-9a-fA-F]{4,6})*)]|\[\[(\w+)(?:=\w+)?]]|\[(\.\.\.)?(\w+)(?:=\w+)?]""")
private val WORD_SEPARATOR = Regex("[^\\p{L}\\p{N}]+")
private const val SAFE_PATH_CHARACTERS = "-._~!$&'()*+,;=:@"

private val KOTLIN_KEYWORDS =
    setOf(
        "as",
        "break",
        "class",
        "continue",
        "do",
        "else",
        "false",
        "for",
        "fun",
        "if",
        "in",
        "interface",
        "is",
        "null",
        "object",
        "package",
        "return",
        "super",
        "this",
        "throw",
        "true",
        "try",
        "typealias",
        "typeof",
        "val",
        "var",
        "when",
        "while",
    )

internal fun scanRoutes(routesDirectory: File): List<FrontendRoute> {
    if (!routesDirectory.isDirectory) {
        throw GradleException("Routes are enabled, but $routesDirectory does not exist. Set routes { dir = ... }." + DocLink.ROUTES.see())
    }
    val routes =
        routesDirectory
            .walkTopDown()
            .filter { directory -> directory.isDirectory && directory.list().orEmpty().any { PAGE_FILE.matches(it) } }
            .map { directory ->
                val id = "/" + directory.relativeTo(routesDirectory).invariantSeparatorsPath
                val declared =
                    NAV_FILES.map(directory::resolve).firstOrNull(File::isFile)?.let { file ->
                        navMeta(file.readText(), file.relativeTo(routesDirectory.parentFile ?: routesDirectory).invariantSeparatorsPath)
                    }
                routeOf(id).copy(nav = declared)
            }.sortedBy { it.id }
            .toList()
    val clashes = routes.groupBy { it.name }.filterValues { it.size > 1 }
    if (clashes.isNotEmpty()) {
        val details = clashes.entries.joinToString("; ") { (name, same) -> "${same.joinToString(" and ") { it.id }} are both $name" }
        throw GradleException("Frontend routes need unique names, but $details. Rename one of the folders." + DocLink.ROUTES.see())
    }
    return routes
}

internal fun routeOf(id: String): FrontendRoute {
    val segments =
        id
            .split('/')
            .filter { it.isNotEmpty() && !GROUP.matches(it) }
            .map(::parseSegment)
    return FrontendRoute(id, routeName(segments), segments)
}

private fun parseSegment(segment: String): List<RoutePart> {
    val parts = mutableListOf<RoutePart>()
    val text = StringBuilder()
    var position = 0
    SEGMENT_PART.findAll(segment).forEach { match ->
        text.append(segment, position, match.range.first)
        position = match.range.last + 1
        val (hex, unicode, optional, rest, name) = match.destructured
        when {
            hex.isNotEmpty() -> text.append(hex.toInt(16).toChar())
            unicode.isNotEmpty() -> unicode.split('-').forEach { text.appendCodePoint(it.toInt(16)) }
            else -> {
                if (text.isNotEmpty()) parts += RoutePart.Text(text.toString())
                text.clear()
                parts += RoutePart.Param(optional.ifEmpty { name }, optional = optional.isNotEmpty(), rest = rest.isNotEmpty())
            }
        }
    }
    text.append(segment, position, segment.length)
    if (text.isNotEmpty()) parts += RoutePart.Text(text.toString())
    return parts
}

private fun routeName(segments: List<List<RoutePart>>): String {
    val words =
        segments.flatten().flatMap { part ->
            val source =
                when (part) {
                    is RoutePart.Text -> part.value
                    is RoutePart.Param -> part.name
                }
            source.split(WORD_SEPARATOR).filter { it.isNotEmpty() }
        }
    if (words.isEmpty()) return "home"
    val name =
        words.first().replaceFirstChar { it.lowercaseChar() } +
            words.drop(1).joinToString("") { word -> word.replaceFirstChar { it.uppercaseChar() } }
    return if (name.first().isDigit()) "route${name.replaceFirstChar { it.uppercaseChar() }}" else name
}

internal fun encodePathSegment(value: String): String =
    buildString {
        value.toByteArray(Charsets.UTF_8).forEach { byte ->
            val code = byte.toInt() and 0xFF
            val character = code.toChar()
            if (code < 0x80 && (character.isLetterOrDigit() || character in SAFE_PATH_CHARACTERS)) {
                append(character)
            } else {
                append('%').append("%02X".format(code))
            }
        }
    }

private fun quoted(text: String): String = "'" + text.replace("\\", "\\\\").replace("'", "\\'") + "'"

private fun navSource(
    routes: List<FrontendRoute>,
    messageKeys: Set<String>,
): String {
    val described = routes.filter { it.nav != null }
    if (described.isEmpty()) return ""

    fun words(text: String): String = if (text in messageKeys) "() => m.${propertyName(text)}()" else "() => ${quoted(text)}"

    fun title(nav: NavMeta): String = words(nav.title)
    val shares = sharesPages(routes)
    val pages =
        described.joinToString(",\n") { route ->
            val nav = route.nav!!
            val more =
                listOfNotNull(nav.description?.let { "description: ${words(it)}" }, nav.image?.let { "image: ${quoted(it)}" })
            "    { ${(listOf("id: ${quoted(route.id)}", "title: ${title(nav)}") + more).joinToString()} }"
        }
    val sharing = if (shares) " description?: () => string; image?: string" else ""
    val shape = "{ id: string; title: () => string;$sharing }"
    val menu =
        described
            .filter { it.nav!!.menu && it.params.isEmpty() }
            .sortedWith(compareBy({ it.nav!!.order }, { it.id }))
            .joinToString(",\n") { route ->
                val nav = route.nav!!
                val icon = nav.icon?.let { "${quoted(it)} as const" } ?: "undefined"
                "    { name: ${quoted(route.name)} as const, to: routes.${route.name}, title: ${title(nav)}, icon: $icon }"
            }
    return "\nconst pageTitles: $shape[] = [\n$pages\n];\n" +
        "\nexport const nav = [${if (menu.isEmpty()) "" else "\n$menu\n"}];\n" + NAV_HELPERS + (if (shares) SHARE_HELPERS else "")
}

private val NAV_HELPERS =
    """
    |
    |export interface OpenPage extends CurrentPage {
    |    params?: Record<string, string>;
    |}
    |
    |export interface Crumb {
    |    title: string;
    |    href: string;
    |    current: boolean;
    |}
    |
    |export function pageTitle(page: CurrentPage): string | undefined {
    |    return pageTitles.find((known) => known.id === page.route.id)?.title();
    |}
    |
    |export function breadcrumbs(page: OpenPage): Crumb[] {
    |    if (page.route.id === null) return [];
    |    const here = withoutGroups(page.route.id);
    |    return pageTitles
    |        .map((known) => ({ known, path: withoutGroups(known.id) }))
    |        .filter(({ path }) => path === here || path === '/' || here.startsWith(path + '/'))
    |        .sort((first, second) => first.path.length - second.path.length)
    |        .map(({ known, path }) => ({
    |            title: known.title(),
    |            href: (route(known.id as RouteId) as (params?: object) => string)(page.params),
    |            current: path === here
    |        }));
    |}
    |
    """.trimMargin()

private val SHARE_HELPERS =
    """
    |
    |function inAttribute(text: string): string {
    |    return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    |}
    |
    |export function shareTags(page: CurrentPage): string {
    |    const known = pageTitles.find((candidate) => candidate.id === page.route.id);
    |    if (!known || (!known.description && !known.image)) return '';
    |    const tags = ['<meta property="og:type" content="website">', `<meta property="og:title" content="${'$'}{inAttribute(known.title())}">`];
    |    if (known.description) {
    |        const description = inAttribute(known.description());
    |        tags.push(`<meta name="description" content="${'$'}{description}">`, `<meta property="og:description" content="${'$'}{description}">`);
    |    }
    |    if (known.image) {
    |        tags.push(`<meta property="og:image" content="${'$'}{inAttribute(known.image)}">`, '<meta name="twitter:card" content="summary_large_image">');
    |    }
    |    return tags.join('');
    |}
    |
    """.trimMargin()

internal fun routesSource(
    routes: List<FrontendRoute>,
    i18n: I18nSpec?,
    messageKeys: Set<String> = emptySet(),
): String {
    val ids = routes.joinToString(",\n") { "    ${it.name}: '${it.id.replace("\\", "\\\\").replace("'", "\'")}'" }
    val builders = routes.joinToString(",\n") { "    ${it.name}: link(routeIds.${it.name})" }
    val localized = i18n?.strategy == LocaleStrategy.UrlPrefix
    return buildString {
        append("// $GENERATED_MARKER\n")
        append("import { resolve } from '\$app/paths';\n")
        append("import type { RouteId, RouteParams } from '\$app/types';\n")
        val translated = routes.any { it.nav?.title in messageKeys || it.nav?.description in messageKeys }
        val fromI18n = listOfNotNull("getLocale".takeIf { localized }, "m".takeIf { translated })
        if (fromI18n.isNotEmpty()) append("import { ${fromI18n.joinToString()} } from './i18n.js';\n")
        append("\nexport const routeIds = {\n$ids\n} as const;\n\n")
        append(ROUTE_TYPES)
        append(if (localized) LOCALIZED_ROUTE else PLAIN_ROUTE)
        append(ACTIVE_LINKS)
        append("\nexport const routes = {\n$builders\n};\n")
        append(navSource(routes, messageKeys))
    }
}

private val ROUTE_TYPES =
    """
    |export type RouteName = keyof typeof routeIds;
    |
    |export type RouteArgs<T extends RouteId> =
    |    RouteParams<T> extends Record<string, never>
    |        ? []
    |        : Partial<RouteParams<T>> extends RouteParams<T>
    |          ? [params?: { [K in keyof RouteParams<T>]: RouteParams<T>[K] | number }]
    |          : [params: { [K in keyof RouteParams<T>]: RouteParams<T>[K] | number }];
    |
    |
    """.trimMargin()

private val ACTIVE_LINKS =
    """
    |
    |export interface CurrentPage {
    |    route: { id: string | null };
    |}
    |
    |export interface ActiveOptions {
    |    below?: boolean;
    |}
    |
    |export interface RouteLink<T extends RouteId> {
    |    (...args: RouteArgs<T>): string;
    |    readonly id: T;
    |    isActive(page: CurrentPage, options?: ActiveOptions): boolean;
    |    ariaCurrent(page: CurrentPage, options?: ActiveOptions): 'page' | 'true' | undefined;
    |}
    |
    |function withoutGroups(id: string): string {
    |    return id.replace(/\/\([^/]+\)/g, '') || '/';
    |}
    |
    |function link<T extends RouteId>(id: T): RouteLink<T> {
    |    const own = withoutGroups(id);
    |    const isOpen = (page: CurrentPage) => page.route.id !== null && withoutGroups(page.route.id) === own;
    |    const isAbove = (page: CurrentPage) => own !== '/' && page.route.id !== null && withoutGroups(page.route.id).startsWith(own + '/');
    |    return Object.assign(route(id), {
    |        id,
    |        isActive: (page: CurrentPage, options?: ActiveOptions) => isOpen(page) || (options?.below === true && isAbove(page)),
    |        ariaCurrent: (page: CurrentPage, options?: ActiveOptions) =>
    |            isOpen(page) ? ('page' as const) : options?.below === true && isAbove(page) ? ('true' as const) : undefined
    |    });
    |}
    |
    """.trimMargin()

private val PLAIN_ROUTE =
    """
    |function route<T extends RouteId>(id: T): (...args: RouteArgs<T>) => string {
    |    return (...args) => (resolve as (id: string, params?: object) => string)(id, ...args);
    |}
    |
    """.trimMargin()

private val LOCALIZED_ROUTE =
    """
    |const PART = /\[(?:x\+([0-9a-f]{2})|u\+([0-9a-f-]+)|\[?(?:\.\.\.)?(\w+)(?:=\w+)?\]?)\]/gi;
    |
    |function fill(route: string, params: Record<string, unknown> = {}): string {
    |    return route
    |        .split('/')
    |        .filter((segment) => !/^\(.+\)$/.test(segment))
    |        .map((segment) =>
    |            segment.replace(PART, (_, hex: string, unicode: string, name: string) => {
    |                if (hex) return String.fromCharCode(parseInt(hex, 16));
    |                if (unicode) return String.fromCodePoint(...unicode.split('-').map((code) => parseInt(code, 16)));
    |                return String(params[name] ?? '');
    |            })
    |        )
    |        .filter(Boolean)
    |        .join('/');
    |}
    |
    |function route<T extends RouteId>(id: T): (...args: RouteArgs<T>) => string {
    |    return (...args) => {
    |        const path = fill(id, args[0] as Record<string, unknown> | undefined);
    |        return (resolve as (pathname: string) => string)(path ? `${'$'}{getLocale()}/${'$'}{path}` : getLocale());
    |    };
    |}
    |
    """.trimMargin()

internal fun routesObject(
    generatedPackage: String,
    routes: List<FrontendRoute>,
): String {
    val dynamic = routes.filter { it.params.isNotEmpty() }
    val usesRest = dynamic.any { route -> route.params.any { it.rest } }
    val members =
        routes.joinToString("\n\n") { route ->
            if (route.params.isEmpty()) {
                "    public const val ${kotlinName(route.name)}: String = \"${staticPath(route)}\""
            } else {
                routeFunction(route)
            }
        }
    return buildString {
        append("// $GENERATED_MARKER\npackage $generatedPackage\n\n")
        append("public object FrontendRoutes {\n")
        append(members)
        append("\n")
        if (dynamic.isNotEmpty()) append(KOTLIN_PATH_HELPERS)
        if (usesRest) append(KOTLIN_REST_HELPER)
        append("}\n")
    }
}

internal fun kotlinName(name: String): String = if (name in KOTLIN_KEYWORDS) "`$name`" else name

private fun staticPath(route: FrontendRoute): String =
    "/" +
        route.segments.joinToString("/") { parts ->
            parts.joinToString("") { encodePathSegment((it as RoutePart.Text).value).replace("$", "\\$") }
        }

private fun routeFunction(route: FrontendRoute): String {
    val parameters =
        route.params.joinToString(", ") { param ->
            val type = if (param.optional) "String? = null" else "String"
            "${kotlinName(param.name)}: $type"
        }
    val segments =
        route.segments.joinToString(", ") { parts ->
            parts.joinToString(" + ") { part ->
                when (part) {
                    is RoutePart.Text -> "\"${encodePathSegment(part.value).replace("$", "\\$")}\""
                    is RoutePart.Param -> if (part.rest) "encodeRest(${kotlinName(part.name)})" else "encode(${kotlinName(part.name)})"
                }
            }
        }
    return "    public fun ${kotlinName(route.name)}($parameters): String = path($segments)"
}

private val KOTLIN_PATH_HELPERS =
    """
    |
    |    private fun path(vararg segments: String): String = "/" + segments.filter { it.isNotEmpty() }.joinToString("/")
    |
    |    private fun encode(value: String?): String =
    |        buildString {
    |            value.orEmpty().toByteArray(Charsets.UTF_8).forEach { byte ->
    |                val code = byte.toInt() and 0xFF
    |                val character = code.toChar()
    |                if (code < 0x80 && (character.isLetterOrDigit() || character in "-._~!${'$'}&'()*+,;=:@")) {
    |                    append(character)
    |                } else {
    |                    append('%').append("%02X".format(code))
    |                }
    |            }
    |        }
    |
    """.trimMargin()

private val KOTLIN_REST_HELPER =
    """
    |
    |    private fun encodeRest(value: String): String = value.split('/').filter { it.isNotEmpty() }.joinToString("/") { encode(it) }
    |
    """.trimMargin()
