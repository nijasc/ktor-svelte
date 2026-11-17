package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.PageDataSpec
import io.github.nijasc.ktor.svelte.internal.typescript.PageLoadSpec
import io.github.nijasc.ktor.svelte.internal.typescript.validPageDataKey

public class SveltePageLoadsConfig internal constructor() {
    internal val pages: MutableList<PageLoadSpec> = mutableListOf()

    public fun page(
        path: String,
        configure: SveltePageLoadConfig.() -> Unit,
    ) {
        val clean = path.trimEnd('/').ifEmpty { "/" }
        require(isPagePath(path) && path.none { it in "?#*" }) {
            "pageLoads takes the path of a page, such as \"/tasks/[id]\", but got '$path'."
        }
        require(pages.none { it.page == clean }) { "The page '$clean' has two pageLoads." }
        val page = SveltePageLoadConfig().apply(configure)
        require(page.data.isNotEmpty()) { "pageLoads: '$clean' loads nothing. Add data(\"key\", \"group.operation\")." }
        pages += PageLoadSpec(clean, page.data.toList())
    }
}

public class SveltePageLoadConfig internal constructor() {
    internal val data: MutableList<PageDataSpec> = mutableListOf()

    public fun data(
        key: String,
        operation: String,
        params: Map<String, String> = emptyMap(),
    ) {
        require(validPageDataKey(key)) { "data takes a name the page reads as data.$key, so it must be a JavaScript name, but got '$key'." }
        require(data.none { it.key == key }) { "The page loads '$key' twice." }
        require(
            '.' in operation,
        ) { "data takes the operation as the generated client names it, such as \"tasks.get\", but got '$operation'." }
        data += PageDataSpec(key, operation, params)
    }
}
