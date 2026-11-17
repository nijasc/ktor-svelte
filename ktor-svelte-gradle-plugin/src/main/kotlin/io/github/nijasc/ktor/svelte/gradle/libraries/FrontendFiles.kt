package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonOutput
import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy
import io.github.nijasc.ktor.svelte.gradle.renderTemplate
import io.github.nijasc.ktor.svelte.gradle.tasks.MERGE_DRIVER

private const val HEADER = "// $GENERATED_MARKER\n"

internal const val GENERATED_GIT_ATTRIBUTES = "$GENERATED_DIR/.gitattributes"
internal const val GENERATED_LINT_RULES = "$GENERATED_DIR/eslint.js"
internal const val CONFIRM_HELPER = "$GENERATED_DIR/confirm.ts"
internal const val MODAL_HELPER = "$GENERATED_DIR/modal.ts"
internal const val COMPONENTS_DIR = "$GENERATED_DIR/components"
internal const val CHARTS_HELPER = "$GENERATED_DIR/charts.ts"
internal const val CLIENT_HOOKS = "src/hooks.client.ts"
internal const val ERROR_ROUTE = "src/routes/+error.svelte"
private const val ERROR_ROUTE_SOURCE =
    "<!-- $GENERATED_MARKER -->\n<script lang=\"ts\">\n    import ErrorPage from '#components/ErrorPage.svelte';\n</script>\n\n<ErrorPage />\n"
private const val HANDLE_ERROR_EXPORT = "\nexport { handleError } from './lib/ktor-svelte/errors';\n"
private const val GIT_ATTRIBUTES = "# $GENERATED_MARKER\n* text eol=lf linguist-generated merge=$MERGE_DRIVER\n"

private fun json(value: Any?): String = JsonOutput.toJson(value)

private fun tsArray(values: List<String>): String = json(values).replace('"', '\'')

private fun typeUnion(values: List<String>): String = values.joinToString(" | ") { json(it).replace('"', '\'') }

internal fun frontendFiles(
    spec: LibrarySpec,
    messages: MessageCatalog?,
    hasUserViteConfig: Boolean,
    routes: List<FrontendRoute>? = null,
): Map<String, String> =
    buildMap {
        put("vite.config.ts", viteConfig(spec, hasUserViteConfig))
        if (spec.usesCss) put("$GENERATED_DIR/app.css", appCss(spec))
        if (spec.daisy != null) put("$GENERATED_DIR/theme.ts", themeSource(spec.daisy))
        if (spec.lucide) put("$GENERATED_DIR/Icon.svelte", renderTemplate("Icon.svelte"))
        if (spec.i18n != null && messages != null) {
            put("$GENERATED_DIR/i18n.ts", i18nSource(spec.i18n, messages))
            put(FORMAT_HELPER, formatSource(spec.i18n))
        }
        val shares = spec.routes && sharesPages(routes)
        if (spec.usesHooks || shares) {
            put("$GENERATED_DIR/server-hooks.ts", serverHooks(spec, shares))
            put("src/hooks.server.ts", HOOKS_SERVER)
        }
        if (spec.i18n?.strategy == LocaleStrategy.UrlPrefix) put("src/hooks.ts", universalHooks(spec.i18n))
        if (spec.routes &&
            routes != null
        ) {
            put("$GENERATED_DIR/routes.ts", routesSource(routes, spec.i18n, messages?.keys.orEmpty().toSet()))
        }
        if (spec.toasts) {
            put("$GENERATED_DIR/toasts.ts", renderTemplate("toasts.ts", mapOf("daisy" to (spec.daisy != null).toString())))
        }
        if (spec.toasts || spec.components) put(CLIENT_HOOKS, clientHooks(spec))
        if (spec.charts) put(CHARTS_HELPER, HEADER + renderTemplate("charts.ts"))
        spec.installable?.let { putAll(installableFiles(it, spec.i18n, messages)) }
        if (spec.components) {
            putAll(componentFiles(spec, messages))
            put("$GENERATED_DIR/errors.ts", renderTemplate("errors.ts"))
            put("$GENERATED_DIR/app-error.d.ts", renderTemplate("app-error.d.ts"))
            put(ERROR_ROUTE, ERROR_ROUTE_SOURCE)
        }
        if (spec.lucide || keys.any { it.startsWith("$GENERATED_DIR/") }) {
            put(GENERATED_GIT_ATTRIBUTES, GIT_ATTRIBUTES)
            put(GENERATED_LINT_RULES, lintRulesSource(routes.takeIf { spec.routes }))
            put(ASSISTANT_GUIDE, assistantGuide(spec, routes.takeIf { spec.routes }))
            put(CONFIRM_HELPER, renderTemplate("confirm.ts", mapOf("daisy" to (spec.daisy != null).toString())))
            put(MODAL_HELPER, renderTemplate("modal.ts"))
        }
    }

private const val PLAIN_FIELD_STYLE =
    "\n<style>\n" +
        "    .ktor-svelte-field {\n        display: grid;\n        gap: 0.25rem;\n    }\n\n" +
        "    .ktor-svelte-field-hint {\n        margin: 0;\n        font-size: 0.875em;\n        opacity: 0.7;\n    }\n\n" +
        "    .ktor-svelte-field-changed {\n        display: inline-block;\n        width: 0.5em;\n        height: 0.5em;\n" +
        "        margin-left: 0.4em;\n        border-radius: 50%;\n        background: currentColor;\n        opacity: 0.6;\n    }\n" +
        "</style>\n"

private const val PLAIN_TABLE_STYLE =
    "\n<style>\n" +
        "    .ktor-svelte-table-wrap {\n        overflow-x: auto;\n    }\n\n" +
        "    .ktor-svelte-table {\n        width: 100%;\n        border-collapse: collapse;\n        text-align: left;\n    }\n\n" +
        "    .ktor-svelte-table-pager {\n        display: flex;\n        gap: 0.5rem;\n    }\n" +
        "</style>\n"

private const val PLAIN_DROP_STYLE =
    "\n<style>\n" +
        "    .ktor-svelte-drop {\n        display: grid;\n        gap: 0.5rem;\n        padding: 1rem;\n" +
        "        border: 2px dashed currentColor;\n        border-radius: 0.5rem;\n    }\n\n" +
        "    .ktor-svelte-drop-over {\n        border-style: solid;\n    }\n\n" +
        "    .ktor-svelte-drop-list {\n        display: grid;\n        gap: 0.5rem;\n        margin: 0;\n        padding: 0;\n" +
        "        list-style: none;\n    }\n\n" +
        "    .ktor-svelte-drop-row {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 0.5rem;\n" +
        "        align-items: center;\n    }\n\n" +
        "    .ktor-svelte-drop-preview {\n        width: 3rem;\n        height: 3rem;\n        object-fit: cover;\n    }\n\n" +
        "    .ktor-svelte-drop-name {\n        flex: 1;\n    }\n\n" +
        "    .ktor-svelte-drop-progress,\n    .ktor-svelte-drop-error {\n        width: 100%;\n        margin: 0;\n    }\n" +
        "</style>\n"

private fun fileDrop(daisy: Boolean): String =
    renderTemplate(
        "components/FileDrop.svelte",
        mapOf(
            "zone" to if (daisy) "border-base-300 rounded-box grid gap-2 border-2 border-dashed p-4" else "ktor-svelte-drop",
            "over" to if (daisy) "border-primary bg-base-200" else "ktor-svelte-drop-over",
            "label" to if (daisy) "text-sm font-medium" else "ktor-svelte-drop-label",
            "input" to if (daisy) "file-input w-full" else "ktor-svelte-drop-input",
            "hint" to if (daisy) "text-sm opacity-70" else "ktor-svelte-drop-hint",
            "list" to if (daisy) "grid gap-2 text-sm" else "ktor-svelte-drop-list",
            "row" to if (daisy) "flex flex-wrap items-center gap-2" else "ktor-svelte-drop-row",
            "preview" to if (daisy) "h-12 w-12 rounded object-cover" else "ktor-svelte-drop-preview",
            "name" to if (daisy) "flex-1" else "ktor-svelte-drop-name",
            "error" to if (daisy) "text-error w-full" else "ktor-svelte-drop-error",
            "progress" to if (daisy) "progress progress-primary w-full" else "ktor-svelte-drop-progress",
            "style" to if (daisy) "" else PLAIN_DROP_STYLE,
        ),
    )

private const val PLAIN_SUMMARY_STYLE =
    "\n<style>\n" +
        "    .ktor-svelte-error-summary {\n        padding: 0.75rem 1rem;\n        border: 2px solid currentColor;\n" +
        "        border-radius: 0.5rem;\n    }\n\n" +
        "    .ktor-svelte-error-summary-title {\n        margin: 0 0 0.5rem;\n        font-weight: 600;\n    }\n\n" +
        "    .ktor-svelte-error-summary-list {\n        margin: 0;\n        padding-left: 1.25rem;\n    }\n" +
        "</style>\n"

private fun errorSummary(daisy: Boolean): String =
    renderTemplate(
        "components/ErrorSummary.svelte",
        mapOf(
            "wrapper" to if (daisy) "alert alert-error grid gap-1 text-left" else "ktor-svelte-error-summary",
            "title" to if (daisy) "font-semibold" else "ktor-svelte-error-summary-title",
            "list" to if (daisy) "list-inside list-disc" else "ktor-svelte-error-summary-list",
            "link" to if (daisy) "link" else "ktor-svelte-error-summary-link",
            "style" to if (daisy) "" else PLAIN_SUMMARY_STYLE,
        ),
    )

private fun dataTable(daisy: Boolean): String =
    renderTemplate(
        "components/DataTable.svelte",
        mapOf(
            "wrapper" to if (daisy) "overflow-x-auto" else "ktor-svelte-table-wrap",
            "table" to if (daisy) "table" else "ktor-svelte-table",
            "caption" to if (daisy) "text-left font-semibold" else "ktor-svelte-table-caption",
            "error" to if (daisy) "text-error py-2 text-sm" else "ktor-svelte-table-error",
            "note" to if (daisy) "py-2 text-sm opacity-70" else "ktor-svelte-table-note",
            "button" to if (daisy) "btn btn-sm" else "ktor-svelte-table-button",
            "pager" to if (daisy) "flex gap-2 py-2" else "ktor-svelte-table-pager",
            "style" to if (daisy) "" else PLAIN_TABLE_STYLE,
        ),
    )

private fun clientHooks(spec: LibrarySpec): String {
    val toasts = if (spec.toasts) renderTemplate("hooks.client.ts", mapOf("reloadPrompt" to spec.reloadPrompt.toString())) else HEADER
    return if (spec.components) toasts + HANDLE_ERROR_EXPORT.removePrefix(if (spec.toasts) "" else "\n") else toasts
}

private const val PLAIN_ERROR_STYLE =
    "\n<style>\n" +
        "    .ktor-svelte-error {\n        display: grid;\n        gap: 1rem;\n        justify-items: center;\n" +
        "        padding: 4rem 1rem;\n        text-align: center;\n    }\n\n" +
        "    .ktor-svelte-error-status {\n        margin: 0;\n        font-size: 3.75rem;\n    }\n\n" +
        "    .ktor-svelte-error-request {\n        font-size: 0.875em;\n        opacity: 0.7;\n    }\n" +
        "</style>\n"

private fun errorPage(
    daisy: Boolean,
    messages: MessageCatalog?,
): String {
    val keys = messages?.keys.orEmpty().toSet()
    val translated = ERROR_PAGE_TEXTS.keys.any { it in keys }

    fun inScript(key: String): String = if (key in keys) "m.${propertyName(key)}()" else "'${ERROR_PAGE_TEXTS.getValue(key)}'"

    fun inMarkup(key: String): String = if (key in keys) "{m.${propertyName(key)}()}" else ERROR_PAGE_TEXTS.getValue(key)
    return renderTemplate(
        "components/ErrorPage.svelte",
        mapOf(
            "imports" to if (translated) "    import { m } from '#i18n';\n" else "",
            "notFound" to inScript("error-not-found"),
            "forbidden" to inScript("error-forbidden"),
            "signIn" to inScript("error-sign-in"),
            "failed" to inScript("error-failed"),
            "requestText" to inMarkup("error-request-id"),
            "homeText" to inMarkup("error-home"),
            "wrapperClass" to if (daisy) "grid justify-items-center gap-4 py-16 text-center" else "ktor-svelte-error",
            "statusClass" to if (daisy) "text-6xl font-bold" else "ktor-svelte-error-status",
            "messageClass" to if (daisy) "text-lg" else "ktor-svelte-error-message",
            "requestClass" to if (daisy) "text-sm opacity-70" else "ktor-svelte-error-request",
            "buttonClass" to if (daisy) "btn btn-primary" else "ktor-svelte-error-home",
            "style" to if (daisy) "" else PLAIN_ERROR_STYLE,
        ),
    )
}

internal val ERROR_PAGE_TEXTS =
    mapOf(
        "error-not-found" to "This page does not exist.",
        "error-forbidden" to "You are not allowed to see this page.",
        "error-sign-in" to "Sign in to see this page.",
        "error-failed" to "Something went wrong. Please try again.",
        "error-request-id" to "Request ID:",
        "error-home" to "Back to the start page",
    )

internal fun componentFiles(
    spec: LibrarySpec,
    messages: MessageCatalog? = null,
): Map<String, String> {
    val daisy = spec.daisy != null
    val field =
        renderTemplate(
            "components/Field.svelte",
            mapOf(
                "wrapper" to if (daisy) "grid gap-1" else "ktor-svelte-field",
                "label" to if (daisy) "text-sm font-medium" else "ktor-svelte-field-label",
                "input" to if (daisy) "input w-full" else "ktor-svelte-field-input",
                "textarea" to if (daisy) "textarea w-full" else "ktor-svelte-field-input",
                "hint" to if (daisy) "text-sm opacity-70" else "ktor-svelte-field-hint",
                "error" to if (daisy) "text-error text-sm" else "field-error",
                "changed" to if (daisy) "badge badge-info badge-xs ml-2 align-middle" else "ktor-svelte-field-changed",
                "style" to if (daisy) "" else PLAIN_FIELD_STYLE,
            ),
        )
    val input = mapOf("input" to if (daisy) "input w-full" else "ktor-svelte-field-input")
    val select = mapOf("select" to if (daisy) "select w-full" else "ktor-svelte-field-input")
    val switches =
        buildMap {
            if (daisy) put("$COMPONENTS_DIR/ThemeToggle.svelte", renderTemplate("components/ThemeToggle.svelte"))
            if (spec.i18n != null) {
                put("$COMPONENTS_DIR/TimeAgo.svelte", renderTemplate("components/TimeAgo.svelte"))
                val classes = mapOf("select" to if (daisy) "select select-sm" else "ktor-svelte-locale-switch")
                put("$COMPONENTS_DIR/LocaleSwitch.svelte", renderTemplate("components/LocaleSwitch.svelte", classes))
            }
        }
    return switches +
        mapOf(
            "$COMPONENTS_DIR/Field.svelte" to field,
            "$COMPONENTS_DIR/DateInput.svelte" to renderTemplate("components/DateInput.svelte", input),
            "$COMPONENTS_DIR/DateTimeInput.svelte" to renderTemplate("components/DateTimeInput.svelte", input),
            "$COMPONENTS_DIR/MaskedInput.svelte" to renderTemplate("components/MaskedInput.svelte", input),
            "$COMPONENTS_DIR/ErrorSummary.svelte" to errorSummary(daisy),
            "$COMPONENTS_DIR/masks.ts" to renderTemplate("components/masks.ts"),
            "$COMPONENTS_DIR/EnumSelect.svelte" to renderTemplate("components/EnumSelect.svelte", select),
            "$COMPONENTS_DIR/DataTable.svelte" to dataTable(daisy),
            "$COMPONENTS_DIR/FileDrop.svelte" to fileDrop(daisy),
            "$COMPONENTS_DIR/ErrorPage.svelte" to errorPage(daisy, messages),
            "$COMPONENTS_DIR/NavigationProgress.svelte" to
                renderTemplate(
                    "components/NavigationProgress.svelte",
                    mapOf(
                        "color" to if (daisy) "var(--color-primary)" else "currentColor",
                    ),
                ),
        )
}

internal fun iconSources(
    iconFiles: List<String>,
    used: Set<String>? = null,
): Map<String, String> {
    val entries = iconFiles.sorted().map { iconConstant(it) to it }
    val loaders =
        entries.filter { (constant, _) -> used == null || constant in used }.joinToString("") { (constant, file) ->
            "    $constant: () => import('@lucide/svelte/icons/$file'),\n"
        }
    val names = entries.joinToString("\n") { (constant, _) -> "    | '$constant'" }
    val icons =
        HEADER + "import type { Component } from 'svelte';\n\n" +
            "export type LucideIconName =\n$names;\n\n" +
            "export const icons: Partial<Record<LucideIconName, () => Promise<{ default: Component<any> }>>> = {\n$loaders};\n"
    return mapOf(
        "$GENERATED_DIR/icons.ts" to icons,
        "$GENERATED_DIR/icons.json" to json(entries.map { it.first }) + "\n",
    )
}

internal fun iconConstant(file: String): String {
    val pascal =
        file
            .split('-')
            .filter { it.isNotEmpty() }
            .joinToString("") { part -> part.replaceFirstChar { it.uppercase() } }
    return if (pascal.first().isDigit()) "Icon$pascal" else pascal
}

internal fun lintRulesSource(routes: List<FrontendRoute>?): String =
    HEADER + renderTemplate("eslint.js", mapOf("routes" to json(routes.orEmpty().associate { it.name to it.id })))

private fun viteConfig(
    spec: LibrarySpec,
    hasUserViteConfig: Boolean,
): String {
    val imports =
        buildList {
            add("import { sveltekit } from '@sveltejs/kit/vite';")
            add("import adapter from '@sveltejs/adapter-static';")
            if (spec.usesCss) add("import tailwindcss from '@tailwindcss/vite';")
            if (spec.images) add("import { enhancedImages } from '@sveltejs/enhanced-img';")
            add("import { defineConfig${if (hasUserViteConfig) ", mergeConfig" else ""} } from 'vite';")
            if (hasUserViteConfig) add("import userConfig from './vite.user';")
        }
    val prerender =
        if (spec.i18n?.strategy == LocaleStrategy.UrlPrefix) {
            val entries = listOf("*") + spec.i18n.locales.map { "/$it" }
            ", prerender: { entries: ${json(entries).replace('"', '\'')} }"
        } else {
            ""
        }
    val plugins =
        buildList {
            if (spec.usesCss) add("tailwindcss()")
            if (spec.images) add("enhancedImages()")
            add("sveltekit({ adapter: adapter({ fallback: '200.html', precompress: true })$prerender })")
        }
    val config =
        "defineConfig({\n    plugins: [${plugins.joinToString(", ")}],\n" +
            "    server: { hmr: { clientPort: ${spec.devPort}, protocol: 'ws' } }\n})"
    val export = if (hasUserViteConfig) "mergeConfig(config, userConfig)" else "config"
    return HEADER + imports.joinToString("\n") + "\n\nconst config = $config;\n\nexport default $export;\n"
}

private fun appCss(spec: LibrarySpec): String =
    buildString {
        append("/* $GENERATED_MARKER */\n")
        append("@import 'tailwindcss';\n")
        if (spec.tailwind?.typography == true) append("@plugin '@tailwindcss/typography';\n")
        if (spec.tailwind?.forms == true) append("@plugin '@tailwindcss/forms';\n")
        spec.fonts?.let { fonts ->
            fonts.families.flatMap(fonts::stylesheets).forEach { append("@import '$it';\n") }
            append("@theme {\n")
            append("    --font-sans: '${fonts.cssName(fonts.sans)}', ui-sans-serif, system-ui, sans-serif;\n")
            fonts.mono?.let { append("    --font-mono: '${fonts.cssName(it)}', ui-monospace, monospace;\n") }
            append("}\n")
        }
        if (spec.charts) append("@import 'layerchart/daisyui-5.css';\n")
        spec.daisy?.let { daisy ->
            val builtIn =
                daisy.themes.joinToString(", ") { theme ->
                    theme + (if (theme == daisy.defaultTheme) " --default" else "") +
                        (if (theme == daisy.prefersDark) " --prefersdark" else "")
                }
            append("@plugin 'daisyui' {\n    themes: ${builtIn.ifEmpty { "false" }};\n}\n")
            daisy.customThemes.forEach { theme ->
                append("@plugin 'daisyui/theme' {\n")
                append("    name: '${theme.name}';\n")
                append("    default: ${theme.name == daisy.defaultTheme};\n")
                append("    prefersdark: ${theme.name == daisy.prefersDark};\n")
                append("    color-scheme: ${theme.colorScheme};\n")
                theme.colors.forEach { (name, value) -> append("    --$name: $value;\n") }
                append("}\n")
            }
        }
    }

private fun themeSource(daisy: DaisySpec): String =
    HEADER +
        renderTemplate(
            "theme.ts",
            mapOf("themes" to tsArray(daisy.allThemes), "defaultTheme" to daisy.defaultTheme, "cookie" to THEME_COOKIE),
        )

private fun i18nSource(
    i18n: I18nSpec,
    catalog: MessageCatalog,
): String {
    val tables =
        catalog.locales.entries.joinToString(
            ",\n",
        ) { (locale, messages) -> "    ${json(locale)}: ${json(messages.toSortedMap())}" }
    val functions =
        catalog.keys.joinToString("\n") { key ->
            val placeholders = catalog.placeholders(key)
            val counts = catalog.counts(key)
            val signature =
                if (placeholders.isEmpty()) {
                    "()"
                } else {
                    "(values: { " + placeholders.joinToString("; ") { "$it: ${if (it in counts) "number" else "string | number"}" } + " })"
                }
            val argument = if (placeholders.isEmpty()) "" else ", values"
            "    ${propertyName(key)}: $signature => translate(${json(key).replace('"', '\'')}$argument),"
        }
    val urlPrefix = i18n.strategy == LocaleStrategy.UrlPrefix
    val browserLocale =
        if (urlPrefix) {
            "    const prefix = location.pathname.split('/')[1];\n" +
                "    const fromPath = locales.find((locale) => locale === prefix);\n" +
                "    if (fromPath) return fromPath;\n"
        } else {
            ""
        }
    val setLocaleBody =
        if (urlPrefix) {
            "    const rest = location.pathname.replace(/^\\/[^/]+/, '');\n" +
                "    location.assign(`/${'$'}{locale}${'$'}{rest || '/'}${'$'}{location.search}`);\n"
        } else {
            "    location.reload();\n"
        }
    val localizeBody = if (urlPrefix) "path === '/' ? `/${'$'}{getLocale()}` : `/${'$'}{getLocale()}${'$'}{path}`" else "path"
    val prefixCookie =
        if (urlPrefix) {
            "    document.cookie = `$LOCALE_COOKIE=${'$'}{getLocale()}; path=/; max-age=31536000; samesite=lax`;\n"
        } else {
            ""
        }
    return HEADER +
        renderTemplate(
            "i18n.ts",
            mapOf(
                "tables" to tables,
                "locales" to tsArray(i18n.locales),
                "defaultLocale" to i18n.defaultLocale,
                "browserLocale" to browserLocale,
                "cookie" to LOCALE_COOKIE,
                "setLocaleBody" to setLocaleBody,
                "localizeBody" to localizeBody,
                "functions" to functions,
                "prefixCookie" to prefixCookie,
            ),
        )
}

private fun serverHooks(
    spec: LibrarySpec,
    shares: Boolean = false,
): String {
    val i18n = spec.i18n
    val daisy = spec.daisy
    val localeSetup =
        when {
            i18n == null -> ""
            i18n.strategy == LocaleStrategy.UrlPrefix ->
                "    const prefix = event.url.pathname.split('/')[1];\n" +
                    "    globalThis.__ktorSvelteLocale = locales.find((locale) => locale === prefix) ?? defaultLocale;\n"
            else -> "    globalThis.__ktorSvelteLocale = defaultLocale;\n"
        }
    val attributes =
        buildList {
            if (i18n != null) add("lang=\"${'$'}{getLocale()}\"")
            if (daisy != null) add("data-theme=\"${daisy.defaultTheme}\"")
        }.joinToString(" ")
    val cookieScript =
        buildList {
            if (daisy != null) {
                add("var t=document.cookie.match(/(?:^|; )$THEME_COOKIE=([^;]+)/);if(t)document.documentElement.dataset.theme=t[1];")
            }
            if (i18n?.strategy == LocaleStrategy.Cookie) {
                add("var l=document.cookie.match(/(?:^|; )$LOCALE_COOKIE=([^;]+)/);if(l)document.documentElement.lang=l[1];")
            }
        }.joinToString("")
    val fonts = spec.fonts
    val imports =
        buildList {
            add("import type { Handle } from '@sveltejs/kit/hooks';")
            if (i18n != null) add("import { defaultLocale, getLocale, locales } from './i18n.js';")
            if (shares) add("import { shareTags } from './routes.js';")
            fonts?.families?.forEachIndexed { index, family -> add("import font$index from '${fonts.preloadFile(family)}?url';") }
        }.joinToString("\n")
    val preloads =
        fonts
            ?.families
            ?.indices
            ?.joinToString("") { "<link rel=\"preload\" as=\"font\" type=\"font/woff2\" href=\"${'$'}{font$it}\" crossorigin>" }
            .orEmpty()
    val shareTags = if (shares) "${'$'}{shareTags(event)}" else ""
    val appTags = spec.installable?.let(::installableHeadTags).orEmpty()
    val headPart = shareTags + appTags + preloads + if (cookieScript.isEmpty()) "" else "<script>$cookieScript</script>"
    val scriptPart = if (headPart.isEmpty()) "" else ".replace('</head>', () => `$headPart</head>`)"
    val htmlPart = if (attributes.isEmpty()) "html" else "html.replace(/<html[^>]*>/, () => `<html $attributes>`)"
    return HEADER + "$imports\n\n" +
        "export const ktorSvelteHandle: Handle = ({ event, resolve }) => {\n$localeSetup" +
        "    return resolve(event, {\n" +
        "        transformPageChunk: ({ html }) =>\n" +
        "            $htmlPart$scriptPart\n" +
        "    });\n};\n"
}

private fun universalHooks(i18n: I18nSpec): String = HEADER + renderTemplate("hooks.ts", mapOf("locales" to tsArray(i18n.locales)))

private const val HOOKS_SERVER = HEADER + "export { ktorSvelteHandle as handle } from './lib/ktor-svelte/server-hooks.js';\n"

internal fun rootLayout(): String = renderTemplate("+layout.svelte")
