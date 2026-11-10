package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonOutput
import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy
import io.github.nijasc.ktor.svelte.gradle.renderTemplate

private const val HEADER = "// $GENERATED_MARKER\n"

private fun json(value: Any?): String = JsonOutput.toJson(value)

private fun tsArray(values: List<String>): String = json(values).replace('"', '\'')

private fun typeUnion(values: List<String>): String = values.joinToString(" | ") { json(it).replace('"', '\'') }

internal fun frontendFiles(
    spec: LibrarySpec,
    messages: MessageCatalog?,
    hasUserViteConfig: Boolean,
): Map<String, String> =
    buildMap {
        put("vite.config.ts", viteConfig(spec, hasUserViteConfig))
        if (spec.usesCss) put("$GENERATED_DIR/app.css", appCss(spec))
        if (spec.daisy != null) put("$GENERATED_DIR/theme.ts", themeSource(spec.daisy))
        if (spec.lucide) put("$GENERATED_DIR/Icon.svelte", renderTemplate("Icon.svelte"))
        if (spec.i18n != null && messages != null) put("$GENERATED_DIR/i18n.ts", i18nSource(spec.i18n, messages))
        if (spec.usesHooks) {
            put("$GENERATED_DIR/server-hooks.ts", serverHooks(spec))
            put("src/hooks.server.ts", HOOKS_SERVER)
        }
        if (spec.i18n?.strategy == LocaleStrategy.UrlPrefix) put("src/hooks.ts", universalHooks(spec.i18n))
    }

internal fun iconSources(iconFiles: List<String>): Map<String, String> {
    val entries = iconFiles.sorted().map { iconConstant(it) to it }
    val loaders =
        entries.joinToString("\n") { (constant, file) ->
            "    $constant: () => import('@lucide/svelte/icons/$file'),"
        }
    val icons =
        HEADER + "import type { Component } from 'svelte';\n\n" +
            "export const icons = {\n$loaders\n} satisfies Record<string, () => Promise<{ default: Component<any> }>>;\n\n" +
            "export type LucideIconName = keyof typeof icons;\n"
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

private fun viteConfig(
    spec: LibrarySpec,
    hasUserViteConfig: Boolean,
): String {
    val imports =
        buildList {
            add("import { sveltekit } from '@sveltejs/kit/vite';")
            add("import adapter from '@sveltejs/adapter-static';")
            if (spec.usesCss) add("import tailwindcss from '@tailwindcss/vite';")
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
            add("sveltekit({ adapter: adapter({ fallback: '200.html', precompress: true })$prerender })")
        }
    val config =
        "defineConfig({\n    plugins: [${plugins.joinToString(", ")}],\n" +
            "    server: { hmr: { clientPort: ${spec.devPort} } }\n})"
    val export = if (hasUserViteConfig) "mergeConfig(config, userConfig)" else "config"
    return HEADER + imports.joinToString("\n") + "\n\nconst config = $config;\n\nexport default $export;\n"
}

private fun appCss(spec: LibrarySpec): String =
    buildString {
        append("/* $GENERATED_MARKER */\n")
        append("@import 'tailwindcss';\n")
        if (spec.tailwind?.typography == true) append("@plugin '@tailwindcss/typography';\n")
        if (spec.tailwind?.forms == true) append("@plugin '@tailwindcss/forms';\n")
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
            val signature =
                if (placeholders.isEmpty()) {
                    "()"
                } else {
                    "(values: { " + placeholders.joinToString("; ") { "$it: string | number" } + " })"
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
    val localizeBody = if (urlPrefix) "`/${'$'}{getLocale()}${'$'}{path}`" else "path"
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

private fun serverHooks(spec: LibrarySpec): String {
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
    val imports =
        buildList {
            add("import type { Handle } from '@sveltejs/kit/hooks';")
            if (i18n != null) add("import { defaultLocale, getLocale, locales } from './i18n.js';")
        }.joinToString("\n")
    val scriptPart = if (cookieScript.isEmpty()) "" else ".replace('</head>', () => `<script>$cookieScript</script></head>`)"
    return HEADER + "$imports\n\n" +
        "export const ktorSvelteHandle: Handle = ({ event, resolve }) => {\n$localeSetup" +
        "    return resolve(event, {\n" +
        "        transformPageChunk: ({ html }) =>\n" +
        "            html.replace(/<html[^>]*>/, () => `<html $attributes>`)$scriptPart\n" +
        "    });\n};\n"
}

private fun universalHooks(i18n: I18nSpec): String = HEADER + renderTemplate("hooks.ts", mapOf("locales" to tsArray(i18n.locales)))

private const val HOOKS_SERVER = HEADER + "export { ktorSvelteHandle as handle } from './lib/ktor-svelte/server-hooks.js';\n"

internal fun rootLayout(): String = renderTemplate("+layout.svelte")
