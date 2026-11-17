package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy

internal const val ASSISTANT_GUIDE = "$GENERATED_DIR/AGENTS.md"

private const val DOCS = "https://nijasc.github.io/ktor-svelte"

internal fun assistantGuide(
    spec: LibrarySpec,
    routes: List<FrontendRoute>?,
): String =
    buildString {
        appendLine("<!-- $GENERATED_MARKER -->")
        appendLine("# How this project works")
        appendLine()
        appendLine("A Ktor backend and a SvelteKit frontend that ship as one JAR, wired together by the ktor-svelte Gradle plugin.")
        appendLine("Kotlin lives in `src/main/kotlin`, the frontend in this folder's project. The docs are at $DOCS, with the full text at")
        appendLine("$DOCS/llms-full.txt.")
        appendLine()
        appendLine("## Files you must not edit by hand")
        appendLine()
        appendLine("They are generated. An edit is overwritten, and `./gradlew check` fails when they are out of date.")
        appendLine()
        appendLine(
            "- `$GENERATED_DIR/`: written by `./gradlew svelteSync` from `svelte { libraries { } }` in `build.gradle.kts`. Change that block.",
        )
        appendLine(
            "- `src/lib/api/`: the typed API client, written by `./gradlew svelteGenerateTs` from the Ktor routes. Change the route in Kotlin.",
        )
        append("- `vite.config.ts`")
        if (spec.usesHooks) append(", `src/hooks.server.ts`")
        if (spec.i18n?.strategy == LocaleStrategy.UrlPrefix) append(", `src/hooks.ts`")
        if (spec.toasts || spec.components) append(", `src/hooks.client.ts`")
        appendLine(": written by `svelteSync`. Your own Vite settings go in `vite.user.ts`.")
        appendLine("- The frontend packages the libraries need are added to `package.json` by `svelteSync`. Do not remove them.")
        appendLine()
        appendLine("## Calling the backend")
        appendLine()
        appendLine(
            "- Every API route has a typed function in `src/lib/api/services.ts`. Read that file for what exists. Do not guess paths.",
        )
        appendLine("- In components: `import { api } from '#api'`, then `await api.notes.list()`.")
        appendLine("- In a `load` function: `apiWith(event)` instead of `api`, so SvelteKit's `fetch` is used.")
        appendLine("- Do not write `fetch('/api/...')` by hand, and do not write request or response types by hand. They come from `#api`.")
        appendLine("- A failed call throws `ApiError`. Use `isValidationError`, `errorMessage` and the other helpers exported by `#api`.")
        appendLine(
            "- To add or change an endpoint: edit the Kotlin route, then run `./gradlew svelteGenerateTs`. In dev mode this happens on restart.",
        )
        if (spec.i18n != null) {
            appendLine()
            appendLine("## Numbers, money and dates")
            appendLine()
            appendLine(
                "Format them with `formatNumber`, `formatMoney`, `formatDate`, `formatDateTime` and `formatTime` from `#format`, " +
                    "and with `call.formats` in Kotlin. Both print the same text for the visitor's language. " +
                    "Do not call `toLocaleString` or `Intl` for these.",
            )
        }
        if (spec.charts) {
            appendLine()
            appendLine("## Charts")
            appendLine()
            appendLine(
                "Charts are LayerChart components, such as `import { BarChart, LineChart } from 'layerchart'`, " +
                    "inside an element with a height. " +
                    "Build their `series` with `chartSeries` from `#charts`, which checks the keys against the data's type and gives the theme's colors.",
            )
        }
        if (spec.components) {
            appendLine()
            appendLine("## Components")
            appendLine()
            appendLine("Ready-made components are in `#components/`. Use them before writing the same markup by hand.")
            appendLine(
                "- `import Field from '#components/Field.svelte'`: one form field with its label, hint and errors, such as " +
                    "`<Field label=\"Title\" bind:value={form.draft.title} bounds={NoteInput.bounds.title} errors={form.errors.title} />`.",
            )
            appendLine(
                "- `DateInput.svelte` and `DateTimeInput.svelte`: the same for `IsoDate` and `IsoDateTime` values, without converting text by hand.",
            )
            appendLine(
                "- `MaskedInput.svelte`: formats phone numbers, IBANs, dates and money while typing and binds the clean value, " +
                    "such as `<MaskedInput label=\"IBAN\" mask=\"iban\" bind:value={form.draft.iban} />`.",
            )
            appendLine(
                "- `DataTable.svelte`: a table over a route that returns `Page<T>`, with loading, empty and error states and paging, " +
                    "such as `<DataTable load={api.notes.list} columns={[{ key: 'title', label: 'Title' }]} />`.",
            )
            if (spec.daisy !=
                null
            ) {
                appendLine("- `ThemeToggle.svelte`: lets the visitor pick one of the configured themes and remembers it.")
            }
            if (spec.i18n != null) {
                appendLine("- `TimeAgo.svelte`: a time as \"3 minutes ago\" in the visitor's language, which keeps itself current.")
            }
            if (spec.i18n != null) appendLine("- `LocaleSwitch.svelte`: lets the visitor pick one of the configured languages.")
            appendLine("- `NavigationProgress.svelte`: a bar at the top while a page loads. It belongs in the root layout, once.")
            appendLine(
                "- `FileDrop.svelte`: a drop area and file input for an upload route, with previews, progress and the route's refusals, " +
                    "such as `<FileDrop label=\"Files\" rules={uploadRules['files.create']} " +
                    "upload={(file, options) => api.files.create({ file }, options)} />`.",
            )
            appendLine(
                "- `ErrorPage.svelte`: the page behind `src/routes/+error.svelte`. A failed API call in a `load` function shows it " +
                    "with the call's status and message, so do not catch `ApiError` there only to call `error(...)`.",
            )
            appendLine(
                "- `EnumSelect.svelte`: a `<select>` over a generated enum object, such as `<EnumSelect label=\"Status\" options={Status} bind:value={status} />`.",
            )
        }
        if (spec.routes) {
            appendLine()
            appendLine("## Pages and links")
            appendLine()
            appendLine(
                "Link to pages through `import { routes } from '#routes'`, such as `href={routes.home()}`. Do not write page paths as strings.",
            )
            appendLine("In Kotlin, redirects use the generated `FrontendRoutes` object. After adding, moving or deleting a page, run")
            appendLine("`./gradlew svelteSync`. To rename one, use `./gradlew svelteRename --page <old> --to <new>`.")
            if (!routes.isNullOrEmpty()) {
                appendLine()
                appendLine("| Name | Page |")
                appendLine("|---|---|")
                routes.forEach { appendLine("| `routes.${it.name}` | `${it.id}` |") }
            }
        }
        val libraries =
            buildList {
                if (spec.daisy != null) {
                    add(
                        "Styling is Tailwind with DaisyUI. Themes are ${spec.daisy.themes.joinToString { "`$it`" }}, set in Gradle. " +
                            "Switch with `setTheme` from `#theme`. Use DaisyUI classes and theme colors, not fixed colors.",
                    )
                } else if (spec.tailwind != null) {
                    add("Styling is Tailwind, set up from Gradle. There is no `tailwind.config.js` to edit.")
                }
                if (spec.lucide) {
                    add(
                        "Icons: `import Icon from '#icon'`, then `<Icon name=\"Rocket\" />`. Names are type checked. " +
                            "After using a new icon, run `./gradlew svelteSync`.",
                    )
                }
                if (spec.i18n != null) {
                    add(
                        "Texts: add the key to every file in `messages/` (${spec.i18n.locales.joinToString { "`$it.json`" }}), run " +
                            "`./gradlew svelteSync`, then use `m.key()` from `#i18n`. " +
                            (if (spec.routes) "" else "Wrap page links in `localizeHref`. ") +
                            "Do not put user-visible text into components directly.",
                    )
                }
                if (spec.toasts) {
                    add(
                        "Failed API calls already show a toast. Do not add error toasts around API calls. " +
                            "For your own messages use `toast` from `\$lib/ktor-svelte/toasts`.",
                    )
                }
                if (spec.images) add("Images: use `<enhanced:img>` for images in `src`, so they are resized and converted at build time.")
            }
        if (libraries.isNotEmpty()) {
            appendLine()
            appendLine("## Libraries that are set up")
            appendLine()
            libraries.forEach { appendLine("- $it") }
        }
        appendLine()
        appendLine("## Commands")
        appendLine()
        appendLine("Run them from the project root. Use the Gradle tasks, not the package manager, so both halves stay in sync.")
        appendLine()
        appendLine("| Command | What it does |")
        appendLine("|---|---|")
        appendLine("| `./gradlew svelteDevAll` | Starts Ktor and Vite with hot reload. Open the app on Ktor's port |")
        appendLine("| `./gradlew svelteSync` | Regenerates `$GENERATED_DIR/` and installs the packages it needs |")
        appendLine("| `./gradlew svelteGenerateTs` | Regenerates the typed client in `src/lib/api/` |")
        appendLine("| `./gradlew check` | Tests, plus checks that generated files, links and the client are current |")
        appendLine("| `./gradlew svelteCheck` | Type checks the frontend |")
        appendLine("| `./gradlew svelteDoctor` | Finds setup problems. `--fix` repairs what it can |")
        appendLine("| `./gradlew buildFatJar` | Builds the one JAR that serves both |")
    }
