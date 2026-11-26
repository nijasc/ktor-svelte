# Components

`components()` generates Svelte components for the things a ktor-svelte app does all the time: form fields with validation, date inputs, enum selects, a paged table, file uploads, an error page, theme and language switches. Every project with generated files also gets helpers for modals, confirmations and toasts, a guide for coding assistants and lint rules.

<Badge type="info" text="Gradle" /> <Badge type="warning" text="Generated files" />

This page is part of [Frontend libraries](./frontend-libraries.md).

## Quick start

```kotlin
svelte {
    libraries {
        daisyUi()
        components()
    }
}
```

```svelte no-check
<script lang="ts">
    import { TaskInput } from '#api';
    import Field from '#components/Field.svelte';

    let draft = $state(TaskInput.empty());
</script>

<Field label="Title" bind:value={draft.title} bounds={TaskInput.bounds.title} />
```

## How the components work

`components()` generates Svelte components into `src/lib/ktor-svelte/components`, imported as `#components/...`. They are the pieces that exist because of something the plugin already generates: a component here is a few lines of markup over a generated helper, written once. They use DaisyUI's classes when `daisyUi` is on, and plain class names with a minimal style otherwise.

The files belong to the plugin and are rewritten by `svelteSync`. For a different look, write your own component on the same helper. The generated ones are short enough to copy as a start.

The components import from `#api`, so they need `generateTs = true` on the server.

| Component | Generated when | What it does |
|---|---|---|
| [`Field`](#field) | `components()` | A label, an input, a hint and its validation errors |
| [`DateInput`, `DateTimeInput`](#dateinput-and-datetimeinput) | `components()` | Date and date-time inputs bound to the API's date text, `null` when empty |
| [`IconInput`](#iconinput) | `components()` and `lucide()` | A field with an icon inside, a clear button and a show button for passwords |
| [`EnumSelect`](#enumselect) | `components()` | A select over a generated enum |
| [`DataTable`](#datatable) | `components()` | A table over a route that returns `Page<T>` |
| [`Pagination`](#pagination) | `components()` | The same paging for lists and cards, with your own markup per item |
| [`FileDrop`](#filedrop) | `components()` | A drop area with progress for an upload route |
| [`ErrorPage`](#errorpage) | `components()` | The page SvelteKit shows when a page fails, with `+error.svelte` |
| [`NavigationProgress`](#navigationprogress) | `components()` | A thin bar while a navigation waits |
| [`ThemeToggle`](#themetoggle-and-localeswitch) | `components()` and `daisyUi` | Switches the theme |
| [`LocaleSwitch`](#themetoggle-and-localeswitch) | `components()` and `i18n` | Switches the language |
| [`TimeAgo`](#timeago) | `components()` and `i18n` | "3 minutes ago" that stays current |

| Helper | Generated when | What it does |
|---|---|---|
| [`modal`](#modals) | Any generated files | Opens a `<dialog>` and returns its result |
| [`confirmed`](#confirm-before-a-call) | Any generated files | Asks before a call |
| [`toast`](#toasts) | `toasts()` | Shows a short message in the corner |
| [`AGENTS.md`](#guide-for-coding-assistants) | Any generated files | A guide for coding assistants |
| [`eslint.js`](#lint-rules) | Any generated files | Lint rules for ktor-svelte mistakes |

## Field

One form field: its label, the input, an optional hint, and the validation errors.

```svelte no-check
<script lang="ts">
    import { NoteInput } from '#api';
    import Field from '#components/Field.svelte';
    import { formState } from '#lib/api/form-state.svelte.ts';

    const form = formState<NoteInput>(NoteInput.empty(), { validate: NoteInput.validate });
</script>

<Field label="Title" bind:value={form.draft.title} bounds={NoteInput.bounds.title} errors={form.errors.title} hint="Shown in the list." />
<Field label="Text" multiline rows={4} bind:value={form.draft.body} errors={form.errors.body} />
```

| Prop | Meaning |
|---|---|
| `label` | The text of the `<label>`, tied to the input. Required |
| `bind:value` | The value, as with an `<input>` |
| `bounds` | The limits from the DTO, such as `NoteInput.bounds.title`. They become `required`, `maxlength` and the like |
| `errors` | The messages for this field, from `validate()` or from a 422 |
| `hint` | A line under the input, announced with it by screen readers |
| `multiline` | Renders a `<textarea>` |
| `id` | The input's id. Without it, one is made up |
| `class` | Added to the wrapper |
| `control` | A snippet for a control that is not a plain input, see below |

Everything else, such as `type`, `autocomplete`, `placeholder` or `rows`, goes to the input unchanged. Underneath it is the [`field` action](validation.md), so errors appear and disappear the same way as with `use:field`.

### Password and email fields

```svelte no-check
<Field label="Email" type="email" autocomplete="email" bind:value={login.email} errors={errors.email} />
<Field
    label="New password"
    type="password"
    autocomplete="new-password"
    bind:value={password.next}
    bounds={PasswordChange.bounds.next}
    errors={errors.next}
    hint="At least {PasswordChange.bounds.next.minlength} characters."
/>
```

### A custom control

For a control that is not a plain input, pass it as the `control` snippet. It gets the `id` the label points at and the `options` for `use:field`, and the label, hint and errors stay as they are:

```svelte no-check
<Field label="Color" errors={form.errors.color}>
    {#snippet control({ id, options })}
        <input {id} type="color" bind:value={form.draft.color} use:field={options} />
    {/snippet}
</Field>
```

## DateInput and DateTimeInput

A date from the API is an `IsoDate`, text such as `2026-12-24`, and a field that may be empty is `null`. A plain `<input type="date">` gives `''` for empty and plain text otherwise, so pages convert by hand. `DateInput` binds to the value as it is:

```svelte no-check
<script lang="ts">
    import DateInput from '#components/DateInput.svelte';
    import DateTimeInput from '#components/DateTimeInput.svelte';
</script>

<DateInput label="Due on" bind:value={form.draft.dueOn} errors={form.errors.dueOn} />
<DateTimeInput label="Starts at" bind:value={form.draft.startsAt} />
<DateTimeInput label="Opens at" local bind:value={form.draft.opensAt} />
```

Both take the props of `Field` (`label`, `bounds`, `errors`, `hint`, `id`, `class` and any input attribute such as `min` or `max`), and an empty input is `null`.

| Component | Kotlin type | What it sends |
|---|---|---|
| `DateInput` | `LocalDate` | The date as typed, such as `2026-12-24` |
| `DateTimeInput` | `Instant` | Shows the moment in the visitor's own time zone and stores it as the UTC text the server expects |
| `DateTimeInput local` | `LocalDateTime` | The wall-clock text as typed, with no time zone |

## MaskedInput

A text field that formats while you type, for values people read in groups: phone numbers, IBANs, dates and money. The field shows the friendly form, and the bound value is the clean one your API expects:

```svelte no-check
<script lang="ts">
    import MaskedInput from '#components/MaskedInput.svelte';
</script>

<MaskedInput label="Phone" mask="phone" bind:value={form.draft.phone} />
<MaskedInput label="IBAN" mask="iban" bind:value={form.draft.iban} />
<MaskedInput label="Birthday" mask="date" bind:value={form.draft.birthday} />
<MaskedInput label="Price" mask="money" bind:value={form.draft.price} />
```

| `mask` | You see while typing | Bound value |
| --- | --- | --- |
| `phone` | `+49 301 234 567`, `0301 2345 67` | `+49301234567`: digits and a leading `+` |
| `iban` | `DE89 3704 0044 0532 0130 00`, in capitals | `DE89370400440532013000` |
| `date` | `24.12.2026` in German, `12/24/2026` in American English | `2026-12-24`, an `IsoDate`, once the date is complete and real; `null` before |
| `money` | `1.234.567,8` in German, `1,234,567.8` in English | `1234567.8`, a plain decimal for a [`Decimal`](./../features/typescript.md#money-and-durations) field |

| Prop | Default | What it does |
| --- | --- | --- |
| `label` | required | The label, as for `Field` |
| `mask` | required | `'phone'`, `'iban'`, `'date'`, `'money'`, or your own `Mask` |
| `value` | | The clean value, `bind:value`; `null` while the field is empty or a date is incomplete |
| `locale` | the page's `lang` | Which order and separators `date` and `money` use |
| `bounds`, `errors`, `hint`, `class` | | As for `Field` |

- The caret stays after the same character you typed, even when a space or a separator is added in front of it.
- The field sets `inputmode`, so phones show the number or phone keyboard.
- Money keeps a decimal separator you just typed, so `1234,` stays on screen while the value is `1234`. It never goes through a JavaScript number, so large amounts keep every digit.
- When you leave the field, a complete value is shown in its tidy form. An incomplete date stays as typed, with `null` as the value, so the form's validation can say it is required.
- For another format, pass an object with `show(clean)`, `retype(typed)`, `clean(typed)`, `keeps(character)` and `inputMode`, the same shape `masks.ts` exports for the four built-in ones.

## IconInput

A `Field` with a [Lucide icon](./icons-and-images.md) inside the box, for fields people find by their icon: email, search, passwords. It is generated when both `components()` and `lucide()` are on:

```svelte no-check
<script lang="ts">
    import IconInput from '#components/IconInput.svelte';
</script>

<IconInput label="Email" icon="Mail" type="email" bind:value={form.draft.email} bounds={SignUp.bounds.email} errors={form.errors.email} />
<IconInput label="Search" icon="Search" type="search" clearable bind:value={query} />
<IconInput label="Password" icon="LockKeyhole" type="password" autocomplete="current-password" bind:value={form.draft.password} />
```

| Prop | Default | What it does |
| --- | --- | --- |
| `label` | required | The label, as for `Field` |
| `icon` | required | A `LucideIconName`, shown at the start of the box. Names are type checked |
| `trailingIcon` | | A second icon at the end of the box. A password field shows its show button there instead |
| `type` | from `bounds`, else `text` | `text`, `email`, `search`, `url`, `tel` or `password` |
| `clearable` | `false` | Shows a clear button while the field has a value. Escape clears it too |
| `clearLabel`, `showLabel`, `hideLabel` | `Clear`, `Show password`, `Hide password` | The accessible names of the buttons. Pass your translations here |
| `busy`, `busyLabel` | `false`, `Checking` | Shows a spinner in place of the trailing icon while a check runs, such as whether a username is taken, and announces `busyLabel` |
| `value` | | `bind:value`; `null` after clearing |
| `bounds`, `errors`, `hint`, `id`, `class` | | As for `Field` |

- The icons are decorative and hidden from screen readers. The label names the field.
- The show button is a toggle with `aria-pressed`, and it switches the field to plain text and back. The browser's own reveal and clear buttons are hidden, so there is only one of each.
- Clearing puts the focus back into the field.
- While `busy`, the input has `aria-busy` and a hidden status line says `busyLabel` once, so screen readers hear that a check is running. The spinner slows down for people who prefer reduced motion.

```svelte no-check
<script lang="ts">
    import { api } from '#api';
    import IconInput from '#components/IconInput.svelte';

    let name = $state('');
    let checking = $state(false);
    let taken = $state<string[]>([]);

    async function check() {
        checking = true;
        try {
            taken = (await api.users.nameTaken({ name })) ? ['That name is taken.'] : [];
        } finally {
            checking = false;
        }
    }
</script>

<IconInput label="Username" icon="AtSign" bind:value={name} onblur={check} busy={checking} errors={taken} />
```
- Validation messages appear under the box, not inside it, and stay tied to the input through `aria-describedby`.
- With daisyUI the box is an `input`, so it follows the theme. Without it, the component carries a small style of its own.
- The icon you pass is picked up by the icon scan like any other quoted icon name, so it is in the production build.

## ErrorSummary

A box that lists every error of a form, each a link that moves focus to its field. Put it above or below the submit button of a long form:

```svelte no-check
<script lang="ts">
    import ErrorSummary from '#components/ErrorSummary.svelte';
</script>

<ErrorSummary errors={form.errors} labels={{ name: 'Name', email: 'Email', password: 'Password' }} />
```

| Prop | Default | What it does |
| --- | --- | --- |
| `errors` | required | The errors per field, usually `form.errors` |
| `labels` | `{}` | The text to show for each field; the field name when there is none |
| `title` | `Please check these fields:` | The heading of the box; pass a message for other languages |
| `class` | | More classes for the box |

- It shows nothing while there are no errors, and is announced as an alert when it appears.
- A link finds its field by `id` first, then by `name`, so give the fields an `id` or `name` equal to the property, as `<Field id="email" ...>` does.
- With DaisyUI it is an `alert alert-error`; without, it has a small style of its own.

## PasswordStrength

A meter and a checklist under a password field, driven by the same rule the server enforces with [`@Rule.StrongPassword`](./validation.md#ready-made-rules). Nobody has to guess what "strong" means, and the browser can never accept a password the server will refuse:

```svelte no-check
<script lang="ts">
    import Field from '#components/Field.svelte';
    import PasswordStrength from '#components/PasswordStrength.svelte';
</script>

<Field label="New password" type="password" bind:value={form.draft.password} errors={form.errors.password} />
<PasswordStrength password={form.draft.password} />
```

| Prop | Default | What it does |
| --- | --- | --- |
| `password` | required | The password typed so far |
| `requirements` | `{}` | Your own text per requirement, keyed by the English text, such as `{ 'a digit': m.passwordDigit() }` |
| `label` | `Password strength` | Accessible name of the meter |
| `strongText` | `Strong enough.` | Announced once every rule is met |
| `class` | | More classes |

The rules come from the generated client, so you can also use them without the component:

```ts no-check
import { passwordMessage, passwordRules, passwordStrength } from '#api';

const strength = passwordStrength('Correct1horse');
strength.score;
strength.strong;
strength.missing.map((rule) => rule.requirement);
```

| Name | What it is |
| --- | --- |
| `passwordRules` | Every part of the rule: `pattern` and `requirement`, such as `at least 10 characters`, `a lowercase letter`, `an uppercase letter`, `a digit` |
| `passwordStrength(password)` | `met`, `missing`, `score` from 0 to 1, and `strong` when nothing is missing |
| `passwordMessage` | The message the server answers with when the rule fails |

- Each rule is shown with a `+` or a `-` and a color, so it does not depend on color alone.
- Screen readers hear the meter's value and, once, that the password is strong enough, instead of every keystroke.
- Use it only for a property with `@Rule.StrongPassword`; for your own rule, write your own list.

## NumberInput

A number field that groups digits and uses the decimal separator of the visitor's language, and never rounds. Bind it to a [`Decimal`](./typescript.md#money-and-durations) for money and exact amounts, or to a `number`:

```svelte no-check
<script lang="ts">
    import NumberInput from '#components/NumberInput.svelte';
</script>

<NumberInput label="Price" bind:value={form.draft.price} />
<NumberInput label="Rate" bind:value={form.draft.rate} fractionDigits={4} />
<NumberInput label="Seats" bind:value={form.draft.seats} fractionDigits={0} number />
```

| Prop | Default | What it does |
| --- | --- | --- |
| `value` | | `bind:value`; a `Decimal` string such as `"1234.5"`, or a `number`; `null` while empty |
| `fractionDigits` | `2` | How many digits after the separator can be typed; `0` for whole numbers, where the separator is not accepted at all |
| `number` | `false` | Bind a `number` instead of a string; also on by itself when the value already is a number |
| `locale` | the page's `lang` | Which separators to use |
| `label`, `bounds`, `errors`, `hint`, `class` | | As for `Field` |

- In German, typing `1234567,8` shows `1.234.567,8` and binds `"1234567.8"`; in English the same amount is `1,234,567.8`.
- A `Decimal` never goes through a JavaScript number, so `12345678901234567890.1234` keeps every digit. Use `number` only for values that fit a double, such as counts.
- The keyboard on phones is the decimal one, and the caret stays where you are typing, as in [MaskedInput](#maskedinput), which this component builds on.

## Breadcrumbs

A ready breadcrumb trail for the open page, built from the titles your pages declare in [`_nav`](./routes.md#menu-titles-and-breadcrumbs). It comes with `components()` when `routes()` is on too:

```svelte no-check
<script lang="ts">
    import Breadcrumbs from '#components/Breadcrumbs.svelte';

    let { data } = $props();
</script>

<Breadcrumbs current={data.task.title} />
```

On `/admin/tasks` this shows "Home / Admin / All tasks", each part a link except the last.

| Prop | Default | What it does |
| --- | --- | --- |
| `current` | | The name of the open page, such as a record's title. It replaces the page's own title, or is added when the page has none, as for `/tasks/[id]` |
| `labels` | `{}` | Other names for parts of the trail, keyed by their link, such as `{ '/projects/7': project.name }` |
| `label` | `Breadcrumb` | The accessible name of the `<nav>`; pass a message for other languages |
| `class` | | More classes |

- The trail follows the page's place in your routes: every parent folder with a title is a step. Groups such as `(app)` are left out.
- It shows nothing on a page with no parents, so you can put it in a layout.
- The current page is marked with `aria-current="page"` and is not a link.
- With DaisyUI it uses the `breadcrumbs` class; without, a small style with `/` between the parts.

## Sidebar

A side menu for a section of your app. On wide screens it can collapse to icons, and remembers that; on small screens it turns into a drawer behind a "Menu" button:

```svelte no-check
<script lang="ts">
    import Sidebar from '#components/Sidebar.svelte';
    import { routes } from '#routes';

    let { children } = $props();
</script>

<Sidebar
    items={[
        { href: routes.admin(), label: 'People', icon: 'Users' },
        { href: routes.adminTasks(), label: 'All tasks', icon: 'ListChecks' }
    ]}
    label="Admin sections"
>
    {@render children()}
</Sidebar>
```

Put it in the `+layout.svelte` of the section, as above, and every page below gets it.

| Prop | Default | What it does |
| --- | --- | --- |
| `items` | required | `{ href, label, icon? }` per link; `icon` is a typed [Lucide](./icons-and-images.md) name when `lucide()` is on |
| `children` | required | The page content, shown next to the menu |
| `label` | `Sections` | The accessible name of the `<nav>` |
| `remember` | `ktor-svelte-sidebar` | The `localStorage` key for the collapsed state; give each sidebar its own |
| `collapseText`, `expandText`, `menuText` | `Collapse`, `Expand`, `Menu` | Button texts, for other languages |

- Collapsed, the links show only their icons, or the first letter of the label without Lucide. The label stays readable for screen readers and shows as a tooltip.
- The collapsed state is read after the page has loaded, so the server and the browser render the same first.
- Below 768 pixels wide, the menu is hidden. The "Menu" button opens it as a drawer over the page; Escape, a click on the backdrop or opening a link closes it.
- The link to the open page has `aria-current="page"`.

## FocusHeading

After a navigation inside the app, SvelteKit puts the focus back at the top of the document. Keyboard and screen reader users then start from the very beginning on every page. `FocusHeading` moves the focus to the new page's heading instead, so they land where the content starts and hear its name:

```svelte no-check
<script lang="ts">
    import FocusHeading from '#components/FocusHeading.svelte';

    let { children } = $props();
</script>

<FocusHeading />
{@render children()}
```

Put it once in your root `+layout.svelte`.

| Prop | Default | What it does |
| --- | --- | --- |
| `selector` | `main h1, h1` | Which element gets the focus: the first match on the new page |

- It does nothing on the first page load, and nothing for links to an anchor such as `#comments`, where the browser's own jump is right.
- The heading gets `tabindex="-1"`, so it can take the focus without becoming a stop in the tab order. The page does not scroll.
- SvelteKit's own announcer still tells screen readers the new page title.

## EnumSelect

A `<select>` over a generated enum object:

```svelte no-check
<script lang="ts">
    import { Status } from '#api';
    import EnumSelect from '#components/EnumSelect.svelte';
</script>

<EnumSelect label="Status" options={Status} bind:value={form.draft.status} labels={{ TODO: 'To do', DONE: 'Done' }} placeholder="Any" />
```

It lists every value of the enum, so a value added in Kotlin appears after the next `svelteGenerateTs`. The bound value has the enum's type, so no cast is needed.

| Prop | Meaning |
|---|---|
| `label` | The label. Required |
| `options` | The generated enum object, such as `Status` |
| `bind:value` | The chosen value, or `null` |
| `labels` | The text to show per value, as text or as a function for translations. A value without one shows its name |
| `placeholder` | Adds a first option that stands for `null` |
| `bounds`, `errors`, `hint`, `id`, `class` | As on `Field` |

Translated labels are functions, so they follow the language:

```svelte no-check
<script lang="ts">
    import { Priority } from '#api';
    import EnumSelect from '#components/EnumSelect.svelte';
    import { m } from '#i18n';

    const priorityLabels: Record<Priority, () => string> = {
        LOW: m.priorityLow,
        NORMAL: m.priorityNormal,
        HIGH: m.priorityHigh
    };
</script>

<EnumSelect label={m.fieldPriority()} options={Priority} labels={priorityLabels} bind:value={draft.priority} />
```

## DataTable

A table over any route that returns [`Page<T>`](../recipes/pagination.md). It loads the pages, and shows a line while it loads, when there is nothing, and when a load failed, with a button to try again.

```svelte no-check
<script lang="ts">
    import { api } from '#api';
    import DataTable from '#components/DataTable.svelte';

    let search = $state('');
</script>

<input type="search" bind:value={search} aria-label="Search" />
<DataTable
    load={api.notes.list}
    query={{ search, limit: '20' }}
    key={(note) => note.id}
    columns={[
        { key: 'title', label: 'Title' },
        { key: 'createdAt', label: 'Created', text: (note) => new Date(note.createdAt).toLocaleDateString() },
        { id: 'size', label: 'Size', text: (note) => `${note.body.length} characters` }
    ]}
/>
```

`load` is the generated function of the route, and the rows have the type it returns. So a column's `key` must be a property of the item, a typo fails `svelteCheck`, and `text` gets the typed item. A column that is not one property has an `id` and a `text` instead.

| Prop | Meaning |
|---|---|
| `load` | The generated function of a route that returns `Page<T>` |
| `columns` | The headers, and what each cell shows |
| `query` | The query parameters besides the cursor. When they change, the table loads again from the start |
| `key` | A stable id per row, such as `(note) => note.id` |
| `paging` | `'more'` (the default) adds rows with a Load more button. `'pages'` shows one page with Previous and Next |
| `first` | A first page that a `load` function already fetched, so the table does not fetch it again |
| `caption` | A caption for the table |
| `row` | A snippet that renders the cells of one row, see below |
| `empty`, `loading`, `more`, `previous`, `next`, `retry` | The texts, in English unless given: "Nothing here yet.", "Loading", "Load more", "Previous", "Next", "Try again" |
| `class` | Added to the wrapper |

### Choosing columns

With `chooser`, a "Columns" menu above the table lets people hide columns and change their order. With `remember`, the choice is kept in the browser for next time:

```svelte no-check
<DataTable load={api.tasks.list} columns={columns} chooser remember="admin-tasks" />
```

| Prop | Default | What it does |
| --- | --- | --- |
| `chooser` | `false` | Shows the menu with a checkbox per column and buttons to move it up or down |
| `remember` | | A name for this table. The order and the hidden columns are kept in `localStorage` under `ktor-svelte-table:<name>` |
| `columnsLabel`, `moveUp`, `moveDown` | `Columns`, `Up`, `Down` | The texts of the menu, for other languages |

- The last visible column cannot be hidden.
- A column you add to `columns` later shows up at the end; one you remove is forgotten.
- The move buttons say which column they move, such as "Up: Status", for screen readers.
- A [custom `row`](#cells-with-markup) gets the visible columns as its second argument, `{#snippet row(task, columns)}`, so its cells can follow the choice.

### Selecting rows and acting on them

Give the table `actions`, and every row gets a checkbox. A bar above the table shows how many are chosen and a button per action, which calls your function for each chosen row:

```svelte no-check
<DataTable
    load={api.tasks.list}
    key={(task) => task.id}
    {columns}
    actions={[
        { label: 'Mark as done', run: (task) => api.tasks.status(task.id, { status: 'DONE' }) },
        { label: 'Delete', run: (task) => api.tasks.delete(task.id), confirm: 'Delete the chosen tasks?' }
    ]}
/>
```

| Prop | Default | What it does |
| --- | --- | --- |
| `actions` | `[]` | `{ label, run, confirm? }` per action; `run` is called once per chosen row, one after the other |
| `key` | | Needed to keep choices across pages and for "Select every page" |
| `selectRow` | `Select all on this page: <first column>` | The accessible name of a row's checkbox |
| `selectPage`, `selectEverything`, `clearSelection` | `Select all on this page`, `Select every page`, `Clear` | Button and checkbox texts |
| `selectedText`, `workingText`, `doneText` | `2 selected`, `Working: 1 of 2`, `Done: 2 of 2 worked.` | Functions that build the status texts, for other languages |

- The checkbox in the header chooses every row on the page, and shows a mixed state when only some are chosen.
- "Select every page" loads the remaining pages and chooses everything, so an action can run over the whole list, not only what is visible.
- While an action runs, the bar counts up and the checkboxes are locked. When it ends, the bar says how many calls worked, the choice is cleared and the table reloads.
- A failing call does not stop the others; with [toasts](./components.md#toasts) on, each failure is shown too.
- `confirm` asks with the browser's dialog before the action starts.

### Sorting by a click on the header

Mark a column with `sort`, and its header becomes a button. The first click sorts ascending, the second descending, the third goes back to the order of the route:

```svelte no-check
<DataTable
    load={api.tasks.list}
    columns={[
        { key: 'title', label: 'Title', sort: true },
        { key: 'createdAt', label: 'Created', sort: 'created' }
    ]}
    sortParam="sort"
/>
```

| | What happens |
| --- | --- |
| With `sortParam` | The table asks the route again with `?sort=title` or `?sort=-title` (a leading `-` for descending), from the first page. Use this for lists with many pages; the route decides how to sort. `sort: 'created'` sends that name instead of the column's key |
| Without `sortParam` | The rows that are loaded are sorted in the browser, numbers as numbers and text in the visitor's language. This suits short lists that fit on one page; on a list with more pages, only the loaded rows are sorted |

- The header gets `aria-sort` (`ascending` or `descending`), and a small `^` or `v` shows the direction.
- With `sortParam`, the route reads the value like any other query parameter, such as `call.queryParameters["sort"]`; list it in `describe` to have it typed.

### When there is nothing to show

An empty table is either a fresh start or a filter that matches nothing, and people need to hear different things. The table tells them apart by its `query`: any value other than `cursor` and `limit` counts as a filter.

```svelte no-check
<DataTable
    load={api.tasks.list}
    query={{ search }}
    {columns}
    empty="No tasks yet."
    noResults="No task matches your search."
>
    {#snippet emptyAction()}
        <a class="btn btn-primary" href={routes.tasksNew()}>Create the first task</a>
    {/snippet}
</DataTable>
```

| Prop | Default | When it shows |
| --- | --- | --- |
| `empty` | `Nothing here yet.` | No rows and no filter |
| `emptyAction` | | A snippet under `empty`, such as a button that creates the first item; not shown for a filter |
| `noResults` | `Nothing matches this filter.` | No rows while a filter is set |
| `filtered` | worked out from `query` | Set it yourself when the filter lives elsewhere, for example in the route's path |

The block carries `data-empty="none"` or `data-empty="filtered"`, handy for tests and styles.

### Placeholder rows while loading

While the first page loads, the table shows a few grey rows shaped like its columns instead of an empty box, so the page does not jump when the data arrives. Later loads keep the rows you already see.

```svelte no-check
<DataTable load={api.tasks.list} {columns} skeletonRows={5} />
```

- `skeletonRows` sets how many, `3` by default, and `0` turns them off.
- The rows are `aria-hidden`; screen readers still hear the `loading` text.
- With DaisyUI they use its `skeleton` class; without, a small pulsing bar of their own. Each carries `data-skeleton`.

### Long lists

With `virtual`, the table sits in a box of its own height, renders only the rows in view, and loads the next page when you scroll near the end. Thousands of rows stay as quick as twenty:

```svelte no-check
<DataTable load={api.tasks.list} query={{ limit: 50 }} key={(task) => task.id} {columns} virtual={{ rowHeight: 40, height: '28rem' }} />
```

| Option | Default | What it does |
| --- | --- | --- |
| `rowHeight` | required | The height of one row in pixels; every row gets exactly this height |
| `height` | `24rem` | The height of the scrolling box, any CSS length |
| `overscan` | `5` | Rows rendered above and below the visible ones, so fast scrolling does not show gaps |

- The paging buttons go away; scrolling is the paging.
- The table keeps `aria-rowcount` with the number of loaded rows, and each row its `aria-rowindex`, so screen readers still know where they are.
- Keep cells to one line, since rows have a fixed height. For text that wraps, use normal paging instead.
- Rows that can be [chosen](#selecting-rows-and-acting-on-them) and [sorted](#sorting-by-a-click-on-the-header) work the same; sorting in the browser sorts the rows loaded so far.

### Opening a row, with the mouse or the keyboard

Give the table `onopen`, and each row opens with a click or with Enter. The rows become one stop in the tab order, and the arrow keys move between them:

```svelte no-check
<DataTable load={api.tasks.list} {columns} onopen={(task) => goto(routes.tasksId({ id: task.id }))} />
```

| Key | What it does |
| --- | --- |
| Tab | Reaches the table once, on the last row you were on |
| Arrow down, Arrow up | The next or the previous row |
| Home, End | The first or the last loaded row |
| Page down, Page up | Ten rows on, or a box height with [`virtual`](#long-lists) |
| Enter | Calls `onopen` with that row |

- Clicks and keys on controls inside a row, such as the [selection](#selecting-rows-and-acting-on-them) checkbox or a link in a custom cell, do their own thing and do not open the row.
- With `virtual`, moving to a row that is not rendered scrolls to it first.
- The focused row shows an outline; with DaisyUI it also highlights on hover.

### Cells with markup

For cells with markup, such as a link or a button, pass a `row` snippet. It renders the cells of one row, and `columns` then only gives the headers:

```svelte no-check
<DataTable load={api.notes.list} columns={[{ key: 'title', label: 'Title' }, { id: 'open', label: '' }]}>
    {#snippet row(note)}
        <td>{note.title}</td>
        <td><a href={routes.notesId({ id: note.id })}>Open</a></td>
    {/snippet}
</DataTable>
```

### Reloading

After a change elsewhere on the page, `bind:this` the table and call its `reload()`:

```svelte no-check
<script lang="ts">
    let table = $state<{ reload(): Promise<void> }>();

    async function remove(id: number) {
        await api.notes.delete(id);
        await table?.reload();
    }
</script>

<DataTable bind:this={table} load={api.notes.list} columns={[{ key: 'title', label: 'Title' }]} />
```

### A server-rendered first page

```ts no-check
export const load: PageLoad = async (event) => {
    return { first: await apiWith(event).notes.list({ limit: '20' }) };
};
```

```svelte no-check
<DataTable load={api.notes.list} query={{ limit: '20' }} first={data.first} columns={[{ key: 'title', label: 'Title' }]} />
```

The route's pages are cursors, so there are no page numbers: the table can go forward and back, not jump.

## Pagination

The paging of [`DataTable`](#datatable) for anything that is not a table: cards, a feed, a list of results. It takes the same `load` and `query`, and you render each item with an `item` snippet:

```svelte no-check
<script lang="ts">
    import { api } from '#api';
    import Pagination from '#components/Pagination.svelte';
</script>

<Pagination load={api.tasks.list} query={{ limit: 6, search }} paging="pages" key={(task) => task.id} label="Tasks">
    {#snippet item(task)}
        <a class="card" href="/tasks/{task.id}">{task.title}</a>
    {/snippet}
</Pagination>
```

| Prop | Default | What it does |
| --- | --- | --- |
| `load` | required | A generated call that returns `Page<T>` |
| `item` | required | A snippet that gets the item and its index |
| `query` | | The other parameters. A change loads the first page again |
| `first` | | A page you already loaded, such as from a `load` function, so nothing is fetched at first |
| `paging` | `more` | `more` adds the next page below, `pages` shows one page at a time with Previous and Next |
| `key` | the index | A stable key for each item |
| `label` | | The accessible name of the list and its page controls |
| `empty`, `emptyAction` | `Nothing here yet.` | The text, and a snippet such as a create button, when there are no items |
| `loading`, `more`, `previous`, `next`, `retry`, `pageText` | English | The texts. `pageText(page)` gives `Page 2` |
| `class`, `listClass` | | Added to the wrapper and to the `<ul>`, for example a grid |

- Items are in a `<ul>`, so screen readers announce how many there are.
- With `more`, the focus moves to the first new item, so keyboard users continue where the new items start.
- With `pages`, the page number is announced when it changes.
- A failed page shows the error with a retry button that loads the same page again.
- `reload()` is exported, for a list that should refresh after you create something: `bind:this={list}` and `list.reload()`.

## FileDrop

A drop area with a file input for an [upload route](../recipes/uploads.md). Files can be dropped on it or chosen, and each one is shown while it travels: a preview for images, the name and size, a progress bar, and the reason when it was refused.

```svelte no-check
<script lang="ts">
    import { api, uploadRules } from '#api';
    import FileDrop from '#components/FileDrop.svelte';

    let documents = $state<StoredFile[]>([]);
</script>

<FileDrop
    label="Add documents"
    hint="PDF or images, up to 5 MiB each."
    multiple
    rules={uploadRules['documents.create']}
    upload={(file, options) => api.documents.create({ file }, options)}
    onuploaded={(stored) => (documents = [...documents, stored])}
/>
```

| Prop | Meaning |
|---|---|
| `upload` | Sends one file. Pass the route's generated function, and hand it the `options` it is given: they carry the progress |
| `label` | The label of the file input. Required |
| `rules` | The route's entry in `uploadRules`. Its types become the input's `accept` |
| `hint` | A line under the input |
| `multiple` | Takes several files. They are sent one after another, each in its own request |
| `onuploaded` | Called with the route's answer and the file, after each one that went through |
| `problem` | Turns a failed upload into the text to show, for your own wording or language. Without it the server's message is shown |
| `uploading` | The start of the progress bar's accessible name, `Uploading` unless given |
| `disabled`, `id`, `class` | As on an input |

The route's rules are checked before a file is sent, as with any call to the generated function, so a file that is too large or of the wrong type is refused at once and nothing is uploaded. A file that went through leaves the list, and one that failed stays with its reason until the next files are chosen.

### Translated problems

The showcase attaches files to a task and names the problem in the visitor's language:

```svelte no-check
<script lang="ts">
    import { api, errorMessage, isUploadError, uploadRules, type Attachment } from '#api';
    import FileDrop from '#components/FileDrop.svelte';
    import { m } from '#i18n';

    let { task, attachments = $bindable() }: { task: Task; attachments: Attachment[] } = $props();

    function uploadProblem(error: unknown): string {
        if (!isUploadError(error)) return errorMessage(error);
        return error.body.code === 'upload.tooLarge' ? m.problemFileTooLarge() : m.problemFileType();
    }
</script>

<FileDrop
    label={m.attachmentsAdd()}
    uploading={m.attachmentsUploading()}
    multiple
    rules={uploadRules['tasks.attachments']}
    upload={(file, options) => api.tasks.attachments(task.id, { file }, options)}
    problem={uploadProblem}
    onuploaded={(stored) => (attachments = [...attachments, ...stored])}
/>
```

## ErrorPage

`components()` also writes `src/routes/+error.svelte`, the page SvelteKit shows when a page cannot be shown. It is three lines around `<ErrorPage />`, which shows:

- the status, such as 404
- the message: the one the server sent in the error body when a call failed, the one you passed to `error(...)`, and otherwise a sentence for 404, 403, 401 or anything else
- the request ID for a status of 500 and above, so a visitor can quote it and you can find the request in the log
- a link back to the start page, `home="/"` unless you pass another

| Prop | Default | Meaning |
|---|---|---|
| `home` | `"/"` | Where the link back leads |

A `load` function no longer has to translate a failed call into a page error. Let it throw:

```ts no-check
export const load: PageLoad = async (event) => {
    return { note: await apiWith(event).notes.get(event.params.id) };
};
```

When the server answers 404 with `{ "message": "That note does not exist." }`, the error page shows 404 and that message. This works through `handleError` in `src/hooks.client.ts`, which `svelteSync` writes. It puts the status, message, request ID and [error code](calling-the-api.md#error-codes) of a failed call into `page.error`, typed through `App.Error`, so your own components can read `page.error.code` too.

The sentences are English until your messages have their keys. With `i18n` on, add the ones you want translated and run `svelteSync`:

| Key | Default |
|---|---|
| `error-not-found` | This page does not exist. |
| `error-forbidden` | You are not allowed to see this page. |
| `error-sign-in` | Sign in to see this page. |
| `error-failed` | Something went wrong. Please try again. |
| `error-request-id` | Request ID: |
| `error-home` | Back to the start page |

Your own files win. If `src/routes/+error.svelte` exists and is not the generated one, it is left alone, and you can use `<ErrorPage />` inside it or not. To change the generated one, remove its first line, and it is yours. The same goes for `src/hooks.client.ts` when `toasts()` is off: keep your own and add `export { handleError } from '#lib/ktor-svelte/errors.ts';` to it.

An error page of your own that keeps the generated content, inside the app's frame:

```svelte no-check
<script lang="ts">
    import ErrorPage from '#components/ErrorPage.svelte';
    import { page } from '$app/state';
</script>

<div class="mx-auto max-w-xl py-16 text-center">
    <ErrorPage home="/board" />
    {#if page.error?.code === 'NotYours'}
        <p class="mt-4">Ask the person who created it to share it with you.</p>
    {/if}
</div>
```

## ThemeToggle and LocaleSwitch

The theme and i18n helpers already know the themes and languages you configured. These two components put them on the page, so a new app has both switches from the start:

```svelte no-check
<script lang="ts">
    import LocaleSwitch from '#components/LocaleSwitch.svelte';
    import ThemeToggle from '#components/ThemeToggle.svelte';
</script>

<ThemeToggle />
<LocaleSwitch />
```

`ThemeToggle` is generated when `daisyUi` is on. With two themes it is a button that flips between them, with more it is a `<select>`. It applies the theme at once and remembers it, as [`setTheme`](./styling.md#switch-themes-in-the-frontend) does.

`LocaleSwitch` is generated when `i18n` is on. It lists each language under its own name, such as English and Deutsch, and switches with [`setLocale`](./i18n.md#in-svelte).

| Prop | Default | Meaning |
|---|---|---|
| `label` | `Theme`, `Language` | The accessible name. Pass a translated one |
| `labels` | none | An object from theme or language to the text to show, to name single entries yourself |
| `id` | none | The id of the button or select |
| `class` | none | Added to the button or select |

```svelte no-check
<ThemeToggle id="theme" class="w-36" label={m.settingsTheme()} labels={{ 'shadcn-light': 'Light', 'shadcn-dark': 'Dark' }} />
<LocaleSwitch id="locale" class="w-28" label={m.settingsLanguage()} />
```

## TimeAgo

"3 minutes ago", "yesterday", in the visitor's language, and kept current while the page stays open. Generated when `i18n` is on.

```svelte no-check
<script lang="ts">
    import TimeAgo from '#components/TimeAgo.svelte';
</script>

<p>{comment.author.name} <TimeAgo class="opacity-70" value={comment.createdAt} /></p>
```

| Prop | Meaning |
|---|---|
| `value` | An ISO date-time text, or a `Date` |
| `class` | Added to the `<time>` element |

It renders a `<time>` element with the exact date and time as its tooltip, and every instance on the page is refreshed by one shared timer, twice a minute. The words come from [`timeAgo`](./i18n.md#relative-time).

## NavigationProgress

A thin bar at the top of the page while SvelteKit navigates, which includes the time a `load` function waits for the server. Without it, a click on a link to a slow page looks like nothing happened. Put it in the root layout, once:

```svelte no-check
<script lang="ts">
    import NavigationProgress from '#components/NavigationProgress.svelte';

    let { children } = $props();
</script>

<NavigationProgress />
{@render children()}
```

| Prop | Default | Meaning |
|---|---|---|
| `delay` | `150` | Milliseconds a navigation must take before the bar appears, so quick ones do not flash |
| `label` | `Loading page` | The accessible name of the progress bar |
| `class` | none | Added to the bar |

- Its color is the theme's primary color with DaisyUI, and the text color otherwise. Set the CSS variable `--ktor-svelte-progress` to choose another.
- It is announced as a progress bar with the name `label`.
- With "reduce motion" set in the visitor's system, it is a still line.

## Modals

A `<dialog>` normally needs a `bind:this`, a `showModal()` and a way to learn how it was closed. `modal()` from `#lib/ktor-svelte/modal.ts` is those three:

```svelte
<script lang="ts">
    import { modal } from '#lib/ktor-svelte/modal.ts';

    const rename = modal<string>();
    let name = $state('');

    async function askForName() {
        const chosen = await rename.open();
        if (chosen) console.log('renamed to', chosen);
    }
</script>

<button onclick={askForName}>Rename</button>

<dialog class="modal" use:rename.attach>
    <div class="modal-box">
        <input bind:value={name} aria-label="New name" />
        <button onclick={() => rename.close(name)}>Save</button>
        <button onclick={() => rename.close()}>Cancel</button>
    </div>
</dialog>
```

| Member | Meaning |
|---|---|
| `modal<T>(options)` | Makes a modal whose result has the type `T` |
| `attach` | The action for the `<dialog>`: `use:rename.attach` |
| `open()` | Shows the dialog and returns a promise of the result |
| `close(result)` | Closes it, and the promise resolves with `result` |
| `isOpen` | Whether it is showing |
| `closeOnBackdrop: false` | An option that keeps a click beside the box from closing it |

`open()` resolves with what `close(result)` was given, or with `undefined` when the dialog was closed any other way: `close()` without a value, Escape, or a click beside the box. Calling `open()` while it is already open returns the same promise.

The markup is yours, so it works with DaisyUI's `modal` classes, as above, and with a plain `<dialog>`.

## Confirm before a call

To only ask a yes or no question before a call, use `confirmed` from `#lib/ktor-svelte/confirm.ts`, which brings its own dialog:

```ts no-check
import { confirmed } from '#lib/ktor-svelte/confirm.ts';

const deleted = await confirmed('Delete this note?', () => api.notes.delete(id), {
    details: 'It cannot be restored.',
    confirm: 'Delete',
    danger: true
});
```

| Option | Meaning |
|---|---|
| `details` | A line under the question |
| `confirm`, `cancel` | The button labels. They default to `confirmMessages.confirm` and `confirmMessages.cancel` |
| `danger` | A red confirm button, with the focus on Cancel |

With DaisyUI on, the question is a modal in your theme that stays open while the call runs and shows its error. Without DaisyUI it is the browser's own `confirm`. The full description is in [Ask before a call](./calling-the-api.md#ask-before-a-call).

## Toasts

With `toasts()` on, failed API calls show up as toasts by themselves, see [Show errors automatically](./calling-the-api.md#show-errors-automatically). You can also show your own, from `#lib/ktor-svelte/toasts.ts`:

```ts no-check
import { toast } from '#lib/ktor-svelte/toasts.ts';

toast('Saved.', { kind: 'success' });
toast('Note archived.', { action: { label: 'Undo', run: restore } });
toast('We just shipped an update.', { duration: 0, action: { label: 'Reload', run: () => location.reload() } });
```

| Option | Default | Meaning |
|---|---|---|
| `kind` | `'info'` | `'info'`, `'success'`, `'warning'` or `'error'` |
| `duration` | `5000` | Milliseconds until it goes away. `0` keeps it until it is closed |
| `action` | none | A button: `{ label, run }`. A click runs it and closes the toast |

- With DaisyUI, toasts are DaisyUI alerts in your theme. Otherwise they bring their own small style.
- Errors and warnings are announced to screen readers as alerts, the others politely.
- Change the built-in texts, such as the network message or the close button's name, through `toastMessages`.
- The server can send toasts too, with `call.toast(...)`, see [Toasts from the server](./calling-the-api.md#toasts-from-the-server).

## Full example

A "new task" form built from generated components, with validation in the browser and from the server, a confirmation before deleting, and toasts. It uses the showcase's `TaskInput`:

::: code-group

```kotlin no-check [Model.kt]
import io.ktor.openapi.JsonSchema

@Serializable
data class TaskInput(
    @Trim
    @JsonSchema.MinLength(1)
    @JsonSchema.MaxLength(120)
    val title: String,
    @JsonSchema.MaxLength(4000)
    val description: String = "",
    val priority: Priority = Priority.NORMAL,
    val dueOn: LocalDate? = null,
    val remindAt: Instant? = null,
)
```

```svelte no-check [tasks/new/+page.svelte]
<script lang="ts">
    import { goto } from '$app/navigation';
    import { api, Priority, TaskInput } from '#api';
    import DateInput from '#components/DateInput.svelte';
    import DateTimeInput from '#components/DateTimeInput.svelte';
    import EnumSelect from '#components/EnumSelect.svelte';
    import Field from '#components/Field.svelte';
    import { m } from '#i18n';
    import { formState } from '#lib/api/form-state.svelte.ts';
    import { confirmed } from '#lib/ktor-svelte/confirm.ts';
    import { toast } from '#lib/ktor-svelte/toasts.ts';
    import { routes } from '#routes';

    const form = formState<TaskInput>({ ...TaskInput.empty(), priority: 'NORMAL' }, { validate: TaskInput.validate });

    const priorityLabels: Record<Priority, () => string> = {
        LOW: m.priorityLow,
        NORMAL: m.priorityNormal,
        HIGH: m.priorityHigh
    };

    async function create(event: SubmitEvent) {
        event.preventDefault();
        const task = await form.submit((draft) => api.tasks.create(draft));
        if (!task) return;
        toast(m.taskCreated({ title: task.title }), { kind: 'success' });
        await goto(routes.tasksId({ id: task.id }));
    }

    async function discard() {
        if (!form.dirty) return goto(routes.board());
        const sure = await confirmed(m.taskDiscardQuestion(), async () => true, { confirm: m.taskDiscard(), danger: true });
        if (sure) await goto(routes.board());
    }
</script>

<h1 class="mb-6 text-3xl font-bold">{m.navNewTask()}</h1>

<form class="grid max-w-xl gap-3" novalidate onsubmit={create}>
    <Field label={m.fieldTitle()} bind:value={form.draft.title} bounds={TaskInput.bounds.title} errors={form.errors.title} />
    <Field
        label={m.fieldDescription()}
        multiline
        rows={4}
        bind:value={form.draft.description}
        bounds={TaskInput.bounds.description}
        errors={form.errors.description}
        hint={m.taskDescriptionHint()}
    />
    <div class="grid gap-3 sm:grid-cols-3">
        <EnumSelect label={m.fieldPriority()} options={Priority} labels={priorityLabels} bind:value={form.draft.priority} />
        <DateInput label={m.fieldDueOn()} bind:value={form.draft.dueOn} errors={form.errors.dueOn} />
        <DateTimeInput label={m.fieldRemindAt()} bind:value={form.draft.remindAt} errors={form.errors.remindAt} />
    </div>
    <div class="flex gap-2">
        <button class="btn btn-primary" type="submit" disabled={form.submitting}>{m.taskCreate()}</button>
        <button class="btn btn-ghost" type="button" onclick={discard}>{m.taskDiscard()}</button>
    </div>
</form>
```

```svelte no-check [+layout.svelte]
<script lang="ts">
    import LocaleSwitch from '#components/LocaleSwitch.svelte';
    import NavigationProgress from '#components/NavigationProgress.svelte';
    import ThemeToggle from '#components/ThemeToggle.svelte';
    import '#lib/ktor-svelte/app.css';
    import { m } from '#i18n';

    let { children } = $props();
</script>

<NavigationProgress label={m.navLoading()} />

<header class="navbar bg-base-100 border-base-300 gap-2 border-b px-4">
    <span class="flex-1 text-lg font-semibold">{m.appTitle()}</span>
    <ThemeToggle class="w-36" label={m.settingsTheme()} />
    <LocaleSwitch class="w-28" label={m.settingsLanguage()} />
</header>

<main class="mx-auto my-8 max-w-4xl px-4">
    {@render children()}
</main>
```

:::

- The `JsonSchema` bounds on the DTO reach the inputs through `bounds`, so the browser knows the title is required and at most 120 characters. See [Validation](./validation.md).
- `form.submit` runs `validate` first and sends nothing while a field is invalid. When the server still answers 422, its messages land in `form.errors` and show under the fields.
- `form.submit` resolves to `undefined` when the call failed, and with `toasts()` on any other failure shows as a toast by itself, so `create` only handles success.

## Guide for coding assistants

`svelteSync` also writes `src/lib/ktor-svelte/AGENTS.md`, a short guide for coding assistants such as Claude Code, Cursor or Copilot. It tells them what they otherwise get wrong in a project like this:

- which files are generated and must not be edited, and which Gradle setting or Kotlin route to change instead
- that the backend is called through the typed client from `#api`, with `apiWith(event)` in `load` functions, never through a hand-written `fetch`
- the libraries you turned on and how to use them: icons, messages, themes, toasts
- your pages by their typed route name, when `routes()` is on
- the Gradle commands to run

It describes your project, not ktor-svelte in general: a project without i18n gets no word about messages. Like every generated file it is kept current by `svelteSync` and checked by `svelteVerifySync`.

Assistants that read nested `AGENTS.md` files find it when they work in the frontend. To make sure, link it from the file your assistant reads at the project root, such as `AGENTS.md` or `CLAUDE.md`:

```md
Read `frontend/src/lib/ktor-svelte/AGENTS.md` before changing anything.
```

Projects created by the setup script have that `AGENTS.md` already. ktor-svelte never edits a root `AGENTS.md` or `CLAUDE.md` of yours.

## Lint rules

Next to the generated files, `svelteSync` writes `src/lib/ktor-svelte/eslint.js`, a small ESLint plugin with rules for mistakes that are easy to make in a ktor-svelte app. They show up in the editor while you type:

| Rule | What it flags |
|---|---|
| `ktor-svelte/no-string-page-links` | An `href`, `goto` or `redirect` that leads to one of your pages as a string, when [typed routes](./routes.md) are on |
| `ktor-svelte/fetch-in-load` | An API call inside a `load` function that goes through neither `apiWith(event)` nor `{ fetch }`, which SvelteKit reports at runtime as `window_fetch_in_load` |
| `ktor-svelte/no-error-body-message` | Reading `error.body.message` from a caught error without narrowing it with `isApiError` first, where [`errorMessage`](./calling-the-api.md) is the safe choice |

A project made by the setup script has them wired in. In an existing project, add two lines to `eslint.config.js`:

```js
import ktorSvelte from './src/lib/ktor-svelte/eslint.js';

export default [
    ...ktorSvelte.configs.recommended
];
```

All three are warnings. To turn one off or make it an error, set it like any other rule:

```js
import ktorSvelte from './src/lib/ktor-svelte/eslint.js';

export default [
    ...ktorSvelte.configs.recommended,
    { rules: { 'ktor-svelte/fetch-in-load': 'error' } }
];
```

The page list inside the file follows your routes, so the first rule stays current the same way `routes.ts` does. For a one-off check across the whole project, and to rewrite string links automatically, use [`svelteVerifyRoutes`](./routes.md#finding-links-that-are-still-strings).

## Use cases

- Forms that show the server's validation next to each field: [`Field`](#field), [`DateInput`](#dateinput-and-datetimeinput), [`EnumSelect`](#enumselect).
- Admin lists over a paged route: [`DataTable`](#datatable).
- Attachments with a progress bar: [`FileDrop`](#filedrop).
- A friendly 404 with the server's own message: [`ErrorPage`](#errorpage).
- An app frame with theme and language switches: [`ThemeToggle` and `LocaleSwitch`](#themetoggle-and-localeswitch), [`NavigationProgress`](#navigationprogress).
- Dialogs that return a value: [`modal`](#modals). Deleting things: [`confirmed`](#confirm-before-a-call).

## Good to know

::: tip The components are a starting point
The generated files are rewritten by every `svelteSync`, so do not edit them. For a different look, write your own component on the same helper. The generated ones are short enough to copy as a start: put the copy in your own folder, such as `src/lib/components`, and change its relative imports to the aliases, such as `#theme` or `#components/Field.svelte`.
:::

::: warning They need the generated client
The components import from `#api`, so the server needs `generateTs = true`.
:::

::: details Without DaisyUI
The components use plain class names, such as `ktor-svelte-field-input`, with a minimal style of their own. Toasts and the confirm dialog work too: toasts bring their own small style, and `confirmed` uses the browser's `confirm`.
:::
