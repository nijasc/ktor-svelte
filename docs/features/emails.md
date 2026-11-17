# Emails

Write emails as Svelte components. The build renders each one to HTML with its styles inlined, plus a plain text version, and Kotlin gets a typed function per email that fills in the values. Send the result with any mail library.

<Badge type="info" text="Gradle" />

## Quick start

Put a component in `frontend/src/emails`. Its file name is the email's name, and its `<title>` is the subject:

```svelte
<script lang="ts">
    let { name, link }: { name: string; link: string } = $props();
</script>

<svelte:head>
    <title>Welcome, {name}</title>
</svelte:head>

<h1 class="title">Hello {name}</h1>
<p>Your account is ready.</p>
<a class="button" href={link}>Open the board</a>

<style>
    .title {
        color: #7f52ff;
    }
    .button {
        background: #7f52ff;
        color: white;
        padding: 8px 16px;
    }
</style>
```

The next build turns `Welcome.svelte` into `Emails.welcome` in Kotlin:

```kotlin no-check
val email = Emails.welcome(name = user.name, link = "https://board.example.com")

email.subject
email.html
email.text
```

`email.html` is a whole HTML document with the styles on the elements, and `email.text` is the same email as plain text. Nothing is sent: pass the three parts to the mail library you use, such as Jakarta Mail, Simple Java Mail or the API client of your mail provider.

## How it works

`svelteEmails` runs before Kotlin compiles, whenever `src/emails` holds a component:

1. It renders each component once on the server, with Svelte's own server renderer in Vite. No browser is involved.
2. Every prop the component reads gets a marker instead of a value, so the rendered HTML is a template with a slot per prop.
3. Rules from `<style>` become `style` attributes, because many mail programs ignore style sheets. Rules that cannot live on one element, such as `:hover` or `@media`, stay in a `<style>` element in the head.
4. The text version is made from the same HTML: paragraphs become blank lines, list items get a dash, and links show their address.
5. The templates go into the JAR as resources, and `Emails.kt` gets a function per email. Each function takes one `String` per prop, escapes it for HTML and fills it in.

Rendering takes a few seconds, but it only runs again when a file in `src` or the lockfile changes.

## Writing an email

- Only files right in `src/emails` are emails. Put shared parts, such as a layout with your logo and footer, in a subfolder like `src/emails/parts`, and import them.
- The file name must start with an upper case letter and use only letters and digits: `Welcome.svelte` becomes `welcome`, `PasswordReset.svelte` becomes `passwordReset`.
- Props are text. Each prop becomes a `String` parameter in Kotlin, in the order the component declares them. Format numbers, dates and money on the server, for example with the generated `Formats`, and pass the result.
- Show each prop as it is. The component is rendered once, before any value is known, so it cannot change a prop, compare it or count it. Decide such things in Kotlin, and pass the outcome as a prop, or write a second email. A prop the email reads but never shows fails the build.
- The subject comes from `<title>` in `<svelte:head>`. An email without one fails the build.
- Components can import from `$lib`, the `#` aliases in `package.json` and npm packages. `$app` and `$env` only exist inside the SvelteKit app, so emails cannot use them.
- Tailwind classes do not reach emails. Use a `<style>` block or `style` attributes, with plain colors rather than CSS variables, which most mail programs ignore.

Svelte type-checks the components like every other file, so `svelteCheck` catches a wrong prop on the frontend side, and the Kotlin compiler catches one on the server side.

## Languages

With [i18n](./i18n.md) turned on, each email is rendered once per language, with the same messages as the app. Use `m` in the component like on any page:

```svelte no-check
<script lang="ts">
    import { m } from '#i18n';

    let { name, link }: { name: string; link: string } = $props();
</script>

<svelte:head>
    <title>{m.emailWelcomeSubject({ name })}</title>
</svelte:head>

<h1>{m.emailWelcomeTitle({ name })}</h1>
<a href={link}>{m.emailWelcomeAction()}</a>
```

`Emails` then takes a language, like the generated `Messages`:

```kotlin no-check
val email = Emails.forLocale(user.locale).welcome(name = user.name, link = boardLink)
```

| In Kotlin | What it does |
|---|---|
| `Emails.forLocale(locale)` | The emails in that language, or in the default language when it is not one of yours |
| `Emails.locales`, `Emails.defaultLocale` | The languages from `i18n { }` |
| `call.emails` | The emails in the language of the current request, like `call.messages` |

Store the language with the person when you send emails later, for example from a background job, because there is no request to take it from then. A placeholder in a message, such as `{name}`, can take a prop. Plural messages cannot count a prop, because the count is not known when the email is rendered: pick the text in Kotlin with `Messages` and pass it as a prop.

## Good to know

- Props are escaped for HTML in `html`, and filled in as they are in `subject` and `text`. Line breaks in a subject value become spaces.
- A prop used as a link, such as `href={link}`, is escaped but not checked. Build links on the server from values you trust.
- Rendering uses Bun when the project uses Bun, and Node.js otherwise.
- The generated code has no dependencies, not even on `ktor-svelte-server`, so you can call it from any code in the app, such as a background job.
- The function names come from the file names, so renaming a component renames its Kotlin function, and the compiler shows every caller.
- The [showcase](../examples.md#showcase) has a working example: `frontend/src/emails/Welcome.svelte`, rendered when someone registers and returned to admins by `GET /api/admin/emails/welcome`.
