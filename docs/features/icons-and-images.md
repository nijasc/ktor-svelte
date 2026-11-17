# Icons and images

Typed Lucide icons that you can use in Kotlin DTOs and Svelte alike, and pictures that are resized and converted at build time.

<Badge type="info" text="Gradle" /> <Badge type="warning" text="Generated files" />

This page is part of [Frontend libraries](./frontend-libraries.md). Run `./gradlew svelteSync` after every change to the `libraries { }` block.

## Quick start

```kotlin
svelte {
    libraries {
        lucide()
        images()
    }
}
```

```svelte
<script lang="ts">
    import Icon from '#icon';
</script>

<Icon name="ArrowRight" size={20} />
<enhanced:img src="#lib/assets/hero.png" alt="Our team" />
```

## Lucide icons

`lucide()` installs [Lucide](https://lucide.dev) for Svelte and generates a `LucideIcon` enum from the installed version, so a misspelled icon is a compile error, in Kotlin and in TypeScript.

### In Svelte

```svelte
<script lang="ts">
    import Icon from '#icon';
</script>

<Icon name="ArrowRight" size={20} />
<Icon name={note.icon} class="text-primary" />
```

| Prop | What it does |
|---|---|
| `name` | The icon, typed as `LucideIconName`. A typo fails `svelteCheck` |
| `size` | Width and height, as a number of pixels or any CSS length |
| `color` | The stroke color. Without it the icon takes the text color |
| `strokeWidth` | The width of the lines |
| `class` | Classes for the `<svg>`, such as `text-primary` or `inline` |

Each icon loads on demand, so you only download the ones a page uses.

### In Kotlin

The enum is generated in the [generated package](./frontend-libraries.md#what-ktor-svelte-owns). Use it in your DTOs, and it reaches the frontend as the same type:

```kotlin
import io.github.nijasc.ktorsvelte.LucideIcon

@Serializable
data class Note(val title: String, val icon: LucideIcon)
```

A misspelled icon name from a client gets a 400 from Ktor, like any other invalid enum value.

### Icon names

An icon's enum name is its Lucide name in PascalCase:

| Lucide name | Enum name |
|---|---|
| `arrow-right` | `ArrowRight` |
| `square-check` | `SquareCheck` |
| `layout-dashboard` | `LayoutDashboard` |
| `a-arrow-down` | `AArrowDown` |

Names starting with a digit get an `Icon` prefix.

### Only the icons you use

Only the icons your app uses are built into the frontend. `svelteSync` finds them in your Kotlin code (`LucideIcon.Flame`) and in your frontend (`name="ArrowRight"`, `Icon.Tags`, or a string such as `'Search'`), and writes just those into `src/lib/ktor-svelte/icons.ts`.

Lucide has almost 2,000 icons, and each would otherwise become its own file in your JAR. In the notes example, this takes the frontend build from 6,180 files and 11 MB down to 120 files and 1.8 MB. The `LucideIcon` enum and the TypeScript type still list every icon, so anything stored or sent stays valid.

A list of icons in your own code is found the same way, since each name is a string:

```ts
import type { LucideIcon } from '#api';

const choices: LucideIcon[] = ['SquareCheck', 'Bug', 'Lightbulb', 'Rocket'];
```

### In development

In development, an icon that isn't in the list yet still shows, with a console hint to run `svelteSync`. A production build checks the list and fails with "Run svelteSync" when an icon is missing, so nothing silently disappears. `svelteDevAll` syncs on every Kotlin change.

### Keep every icon

If icon names come from somewhere the scan can't see, such as a database your users fill or an icon picker, keep all icons:

```kotlin
svelte {
    libraries {
        lucide {
            allIcons()
        }
    }
}
```

| Setting | Default | What it does |
|---|---|---|
| `allIcons()` | off | Builds every Lucide icon into the frontend, not only the ones the scan finds |

## Images

`images()` adds SvelteKit's [`@sveltejs/enhanced-img`](https://svelte.dev/docs/kit/images#sveltejs-enhanced-img). Keep pictures next to your code, for example in `frontend/src/lib/assets`, and use `enhanced:img` instead of `img`:

```svelte
<enhanced:img src="#lib/assets/hero.png" alt="Our team" sizes="(min-width: 768px) 65ch, 100vw" />
```

### What the build makes of it

At build time, every image becomes AVIF and WebP in several widths, plus a fallback in the original format, inside a `<picture>` with `srcset`, `width` and `height`.

- Browsers download only the size and format they need.
- The layout doesn't jump while the image loads, because the size is known.
- In the notes example, a 339 KB PNG becomes an 8 KB AVIF for a laptop screen.
- The files land in `_app/immutable/`, so browsers cache them for a year like any other hashed asset.

`sizes` is the standard HTML attribute that tells the browser how wide the image is shown, so it can pick the right file.

### Images in static

Files in `frontend/static/` are copied as they are, because nothing in the build knows where they are used. Move images there to `src/lib/assets` to have them optimized.

## Full example

A task form with an icon picker, where the icon is a typed field of the DTO, and a start page with a hero image. This is how the showcase example does it.

::: code-group

```kotlin no-check [Model.kt]
import io.github.nijasc.ktorsvelte.LucideIcon

@Serializable
data class TaskInput(
    val title: String,
    val icon: LucideIcon = LucideIcon.SquareCheck,
)

@Serializable
data class Task(
    val id: Long,
    val title: String,
    val icon: LucideIcon,
)
```

```svelte no-check [TaskForm.svelte]
<script lang="ts">
    import type { LucideIcon, TaskInput } from '#api';
    import Icon from '#icon';

    let { draft = $bindable() }: { draft: TaskInput } = $props();

    const icons: LucideIcon[] = ['SquareCheck', 'Bug', 'Lightbulb', 'Rocket', 'Flame', 'Package', 'Star'];
</script>

<fieldset>
    <legend class="mb-1">Icon</legend>
    <div class="flex flex-wrap gap-2">
        {#each icons as icon (icon)}
            <label class="btn btn-sm" class:btn-primary={draft.icon === icon}>
                <input class="sr-only" type="radio" name="task-icon" value={icon} bind:group={draft.icon} />
                <Icon name={icon} size={16} />
                <span class="sr-only">{icon}</span>
            </label>
        {/each}
    </div>
</fieldset>
```

```svelte no-check [TaskCard.svelte]
<script lang="ts">
    import type { Task } from '#api';
    import Icon from '#icon';

    let { task }: { task: Task } = $props();
</script>

<a class="link flex items-center gap-2 font-semibold" href="/tasks/{task.id}">
    <Icon name={task.icon} size={18} />
    {task.title}
</a>
```

```svelte no-check [+page.svelte]
<script lang="ts">
    import Icon from '#icon';
</script>

<section class="grid items-center gap-8 md:grid-cols-2">
    <div>
        <h1 class="text-4xl font-bold">A team board in one JAR</h1>
        <a class="btn btn-primary mt-6" href="/board"><Icon name="LayoutDashboard" size={18} /> Open the board</a>
    </div>
    <enhanced:img
        class="rounded-box h-auto w-full"
        src="#lib/assets/hero.png"
        alt="Ktor and SvelteKit working together"
        sizes="(min-width: 768px) 28rem, 100vw"
    />
</section>
```

:::

The seven icons of the picker, `LayoutDashboard`, and every `LucideIcon.X` in your Kotlin code are found by the scan, so they are in the build. A task stored with any other icon still loads in development, and a production build tells you to run `svelteSync`.

## Use cases

- Users pick an icon for a project, a label or a category: store it as a `LucideIcon`, and it is validated on the way in.
- Navigation items with icons, defined once next to [typed routes](./routes.md).
- A marketing or start page with large pictures: `enhanced:img`.
- Icons chosen from data you do not control, such as a user-filled table: [`allIcons()`](#keep-every-icon).

## Good to know

::: tip Smaller JARs
Without the used-icon scan, every Lucide icon would be a file in your JAR. With it, only the icons you use are built. Turn on `allIcons()` only when names come from data.
:::

::: details Image processing
Processing uses `sharp`, which comes with prebuilt binaries for Windows, macOS and Linux. The first build with many large images takes longer, and later builds reuse Vite's cache.
:::
