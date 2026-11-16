package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.DocLink
import org.gradle.api.GradleException
import java.io.File

internal data class RouteRename(
    val oldId: String,
    val newId: String,
    val oldName: String,
    val newName: String,
    val parametersChanged: Boolean,
)

internal fun normalizedRoutePath(path: String): String = path.trim().replace('\\', '/').trim('/')

internal fun routeRenames(
    routesDirectory: File,
    from: String,
    to: String,
): List<RouteRename> {
    val source = "/" + normalizedRoutePath(from)
    val target = "/" + normalizedRoutePath(to)
    if (source == "/" || target == "/") throw GradleException("The home page cannot be renamed. Pass a folder below the routes folder.")
    if (target == source || target.startsWith("$source/")) {
        throw GradleException("A page cannot be moved into itself: $source to $target.")
    }
    if (!routesDirectory.resolve(source.removePrefix("/")).isDirectory) {
        throw GradleException("There is no page folder at ${routesDirectory.resolve(source.removePrefix("/"))}." + DocLink.ROUTES.see())
    }
    if (routesDirectory.resolve(target.removePrefix("/")).exists()) {
        throw GradleException(
            "${routesDirectory.resolve(target.removePrefix("/"))} already exists. Choose another target or move its pages first.",
        )
    }
    val routes = scanRoutes(routesDirectory)
    val (moved, staying) = routes.partition { it.id == source || it.id.startsWith("$source/") }
    if (moved.isEmpty()) throw GradleException("$source holds no page, so there is nothing to rename." + DocLink.ROUTES.see())
    val renames =
        moved.map { route ->
            val renamed = routeOf(target + route.id.removePrefix(source))
            RouteRename(route.id, renamed.id, route.name, renamed.name, route.params.map { it.name } != renamed.params.map { it.name })
        }
    val taken = staying.associate { it.name to it.id }
    val clash =
        renames.firstOrNull { it.newName in taken } ?: renames
            .groupBy { it.newName }
            .values
            .firstOrNull { it.size > 1 }
            ?.first()
    if (clash != null) {
        val other = taken[clash.newName] ?: renames.first { it.newName == clash.newName && it != clash }.newId
        throw GradleException(
            "${clash.newId} would get the route name ${clash.newName}, which $other already has. Choose another target." +
                DocLink.ROUTES.see(),
        )
    }
    return renames
}

internal fun renameRouteUsages(
    source: String,
    renames: List<RouteRename>,
    kotlin: Boolean,
): Pair<String, Int> {
    val changed = renames.filter { it.oldName != it.newName }
    if (changed.isEmpty()) return source to 0
    val byOldName =
        changed.associate { rename ->
            if (kotlin) kotlinName(rename.oldName) to kotlinName(rename.newName) else rename.oldName to rename.newName
        }
    val names = byOldName.keys.sortedByDescending { it.length }.joinToString("|") { Regex.escape(it) }
    val owner = if (kotlin) "FrontendRoutes" else "routes|routeIds"
    val pattern = Regex("""\b($owner)\.($names)(?![\w`])""")
    var count = 0
    val rewritten =
        pattern.replace(source) { match ->
            count++
            "${match.groupValues[1]}.${byOldName.getValue(match.groupValues[2])}"
        }
    return rewritten to count
}
