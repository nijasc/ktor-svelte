# Charts

`charts()` sets up [LayerChart](https://layerchart.com), a chart library for Svelte 5, so that its charts take the colors of your DaisyUI themes, light and dark, without any setup of your own. A small typed helper makes sure every series points at a real number field.

<Badge type="info" text="Gradle" /> <Badge type="warning" text="Generated files" />

This page is part of [Frontend libraries](./frontend-libraries.md).

## Quick start

```kotlin
svelte {
    libraries {
        daisyUi()
        charts()
    }
}
```

```bash
./gradlew svelteSync
```

`svelteSync` installs the package, adds LayerChart's DaisyUI preset to the generated stylesheet, and writes `src/lib/ktor-svelte/charts.ts`, imported as `#charts`. A chart is then a component in an element with a height:

```svelte no-check
<script lang="ts">
    import { LineChart } from 'layerchart';
    import { chartSeries } from '#charts';

    interface Day {
        day: string;
        opened: number;
        closed: number;
    }

    let { days }: { days: Day[] } = $props();

    const series = chartSeries<Day>({ opened: 'Opened', closed: { label: 'Closed', color: 'success' } });
</script>

<div class="h-64">
    <LineChart data={days} x="day" {series} />
</div>
```

## Typed series with chartSeries

`chartSeries<T>` is the typed part. Its keys must be number properties of `T`, so a renamed field fails `svelteCheck` instead of drawing an empty chart.

Each entry is one of:

| Entry | Example | Result |
|---|---|---|
| A label | `opened: 'Opened'` | That label, and the color for its position |
| A label and a color | `closed: { label: 'Closed', color: 'success' }` | That label and that theme color |
| Only a color | `closed: { color: 'error' }` | The key as the label, and that color |

```ts no-check
interface Month {
    month: string;
    revenue: number;
    costs: number;
    customers: number | null;
}

const money = chartSeries<Month>({
    revenue: { label: 'Revenue', color: 'primary' },
    costs: { label: 'Costs', color: 'error' }
});

// Fails svelteCheck: 'month' is text, not a number.
const wrong = chartSeries<Month>({ month: 'Month' });
```

A property that may be `null` or missing, such as `customers` above, still counts as a number property.

The result is an array of `{ key, label, color }`, typed as `ChartSeries<T>[]`, which is the shape LayerChart's `series` prop takes.

## Theme colors

The colors are the theme's own, as CSS variables, so a chart follows the theme when the visitor switches it. A series without a color gets the one for its position in `chartSeries`: the first series `primary`, the second `secondary`, and so on:

| Name | CSS variable |
|---|---|
| `primary` | `var(--color-primary)` |
| `secondary` | `var(--color-secondary)` |
| `accent` | `var(--color-accent)` |
| `neutral` | `var(--color-neutral)` |
| `info` | `var(--color-info)` |
| `success` | `var(--color-success)` |
| `warning` | `var(--color-warning)` |
| `error` | `var(--color-error)` |

After the eighth series the list starts again.

## chartColors for anything else

`chartColors` holds the same colors, for anything else you draw, and `ChartColor` is the union of their names:

```svelte no-check
<script lang="ts">
    import { chartColors } from '#charts';
</script>

<svg viewBox="0 0 100 10" class="h-3 w-full">
    <rect width="70" height="10" fill={chartColors.success} />
    <rect x="70" width="30" height="10" fill={chartColors.error} />
</svg>
```

## Exports of #charts

| Export | What it is |
|---|---|
| `chartSeries<T>(lines)` | Turns labels and colors into typed series |
| `chartColors` | The eight theme colors as CSS variables |
| `ChartColor` | `'primary' \| 'secondary' \| ... \| 'error'` |
| `ChartSeries<T>` | One series: `key`, `label` and `color` |
| `ChartLine` | One entry of `chartSeries`: a label, or `{ label?, color? }` |
| `NumberKeys<T>` | The keys of `T` whose values are numbers |

## Full example

A dashboard with tasks per status as bars, and opened and closed tasks per day as lines. The server sends the numbers, the page draws them. It follows the board page of the showcase example.

::: code-group

```kotlin no-check [StatsRoutes.kt]
@Serializable
data class BoardStats(val todo: Int, val doing: Int, val done: Int)

@Serializable
data class DayStats(val day: String, val opened: Int, val closed: Int)

fun Route.statsRoutes() {
    get("/api/stats") {
        call.respond(BoardStats(todo = tasks.count(Status.TODO), doing = tasks.count(Status.DOING), done = tasks.count(Status.DONE)))
    }
    get("/api/stats/days") {
        call.respond(tasks.perDay(days = 14))
    }
}
```

```ts no-check [+page.ts]
import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    const api = apiWith(event);
    const [stats, days] = await Promise.all([api.stats.list(), api.stats.days()]);
    return { stats, days };
};
```

```svelte no-check [+page.svelte]
<script lang="ts">
    import type { DayStats } from '#api';
    import { chartSeries } from '#charts';
    import { m } from '#i18n';
    import { BarChart, LineChart } from 'layerchart';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    interface StatusCount {
        status: string;
        tasks: number;
    }

    const counts = $derived<StatusCount[]>([
        { status: m.statusTodo(), tasks: data.stats.todo },
        { status: m.statusDoing(), tasks: data.stats.doing },
        { status: m.statusDone(), tasks: data.stats.done }
    ]);

    const countSeries = chartSeries<StatusCount>({ tasks: { label: m.navBoard(), color: 'primary' } });
    const daySeries = chartSeries<DayStats>({
        opened: 'Opened',
        closed: { label: 'Closed', color: 'success' }
    });
</script>

<h1 class="mb-6 text-3xl font-bold">Dashboard</h1>

<dl class="stats bg-base-200 mb-6 w-full">
    <div class="stat"><dt class="stat-title">{m.statusTodo()}</dt><dd class="stat-value text-2xl">{data.stats.todo}</dd></div>
    <div class="stat"><dt class="stat-title">{m.statusDoing()}</dt><dd class="stat-value text-2xl">{data.stats.doing}</dd></div>
    <div class="stat"><dt class="stat-title">{m.statusDone()}</dt><dd class="stat-value text-2xl">{data.stats.done}</dd></div>
</dl>

<div class="grid gap-6 md:grid-cols-2">
    <section class="card bg-base-100 border-base-300 border p-4">
        <h2 class="mb-2 font-semibold">Tasks by status</h2>
        <div class="h-48">
            <BarChart data={counts} x="status" series={countSeries} />
        </div>
    </section>
    <section class="card bg-base-100 border-base-300 border p-4">
        <h2 class="mb-2 font-semibold">Last two weeks</h2>
        <div class="h-48">
            <LineChart data={data.days} x="day" series={daySeries} />
        </div>
    </section>
</div>
```

:::

Switch the theme, and both charts change color with the rest of the page.

## Use cases

- A dashboard or admin page with a few numbers over time.
- Counts per status or per category next to a list, as on the showcase board.
- A small bar or meter in your own SVG, in theme colors: [`chartColors`](#chartcolors-for-anything-else).

## Good to know

::: warning charts needs daisyUi
`charts()` needs `daisyUi()`, whose theme colors the charts take. Without it the build stops with "charts needs daisyUi()".
:::

::: tip Give the chart a height
LayerChart fills its parent. Put the chart in an element with a height, such as `class="h-64"`, or it has none.
:::

- For what the components can do, such as axes, tooltips, legends and other chart types, see LayerChart's own documentation. ktor-svelte adds the colors and the typed series, nothing else.
- The preset is LayerChart's own `layerchart/daisyui-5.css`, imported into the generated stylesheet.
