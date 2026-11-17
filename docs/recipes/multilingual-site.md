# A multilingual site

You want a site in several languages, with each language at its own address such as `/de/about`, so search engines index every one. Texts, error messages from the server, dates and prices should all be in the visitor's language, and the same on the page and in an email from the server.

**Time:** about 30 minutes. **Level:** intermediate.

What you use:

- [`i18n`](../features/frontend-libraries.md#i18n) with `LocaleStrategy.UrlPrefix`: one JSON file per language, typed functions on both sides, a prefix per language.
- [Typed routes](../features/routes.md), which put the language in front of every link.
- [Shared formatting](../features/frontend-libraries.md#numbers-money-and-dates): `formatDate`, `formatMoney` and friends, the same text in TypeScript and Kotlin.
- `<LocaleSwitch>` from [`components()`](../features/frontend-libraries.md#themetoggle-and-localeswitch).

## Step 1: turn it on

```kotlin
import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy

svelte {
    libraries {
        routes()
        components()
        i18n {
            locales("en", "de", "fr")
            defaultLocale = "en"
            strategy = LocaleStrategy.UrlPrefix
        }
    }
}
```

```bash
./gradlew svelteSync
```

`svelteSync` writes the typed functions, `src/hooks.ts` for the prefixes, and an empty message file for every language that has none yet, in `frontend/messages`.

| Strategy | URLs | Best for |
| --- | --- | --- |
| `UrlPrefix` | `/de/about` | Public sites and SEO. Every language gets its own prerendered pages |
| `Cookie` (default) | `/about` | Apps behind a login. Prerendered pages hold the default language and switch on load |

This recipe uses `UrlPrefix`. For an app behind a login, `Cookie` is simpler and everything below works the same, except the addresses.

## Step 2: write the messages

One flat JSON file per language. `{name}` is a parameter, and a plural is written into the message:

::: code-group

```json [messages/en.json]
{
    "app-title": "Bookshop",
    "home-welcome": "Welcome, {name}!",
    "cart-count": "{count, plural, =0 {Your cart is empty} one {# book in your cart} other {# books in your cart}}",
    "cart-total": "Total: {amount}"
}
```

```json [messages/de.json]
{
    "app-title": "Buchladen",
    "home-welcome": "Willkommen, {name}!",
    "cart-count": "{count, plural, =0 {Dein Warenkorb ist leer} one {# Buch im Warenkorb} other {# Buecher im Warenkorb}}",
    "cart-total": "Summe: {amount}"
}
```

```json [messages/fr.json]
{
    "app-title": "Librairie",
    "home-welcome": "Bienvenue, {name} !",
    "cart-count": "{count, plural, =0 {Votre panier est vide} one {# livre dans votre panier} other {# livres dans votre panier}}",
    "cart-total": "Total : {amount}"
}
```

:::

A missing key or a mismatched parameter in any language fails the build, so translations can't drift. While `svelteDev` runs, saving a file updates the functions at once.

## Step 3: use them in the pages

```svelte no-check [+page.svelte]
<script lang="ts">
    import { m } from '#i18n';
    import { formatMoney } from '#format';
    import { routes } from '#routes';

    let { data } = $props();
</script>

<svelte:head>
    <title>{m.appTitle()}</title>
</svelte:head>

<h1>{m.homeWelcome({ name: data.user.name })}</h1>
<p>{m.cartCount({ count: data.cart.items.length })}</p>
<p>{m.cartTotal({ amount: formatMoney(data.cart.total, 'EUR') })}</p>
<a href={routes.cart()}>{m.cartCount({ count: data.cart.items.length })}</a>
```

- `m.cartCount` picks "1 book" or "2 books" by the rules of the language: `one` and `other` in English, German and French, more forms in Polish or Russian.
- `routes.cart()` gives `/de/cart` on a German page. With typed routes every link keeps the language, and every language gets prerendered.
- For a link written as text, wrap it: `localizeHref('/about')` from `#i18n`.

## Step 4: let visitors switch

```svelte no-check [+layout.svelte]
<script lang="ts">
    import LocaleSwitch from '#components/LocaleSwitch.svelte';
    import '#lib/ktor-svelte/app.css';

    let { children } = $props();
</script>

<header>
    <LocaleSwitch label="Language" />
</header>

{@render children()}
```

It lists each language under its own name, such as English and Deutsch, and goes to the same page in the chosen language. Your own button does the same with `setLocale('de')` from `#i18n`.

How a language is chosen, on both sides:

1. The prefix of the address, such as `/de/...`.
2. The language cookie, which the switch sets.
3. The browser's `Accept-Language`.
4. Your `defaultLocale`.

A plain address such as `/about` is redirected to the visitor's language, such as `/de/about`, by the server.

## Step 5: translate the server

The same messages are typed functions in Kotlin. `call.messages` is in the visitor's language, by the same rules:

```kotlin no-check [Routes.kt]
import io.github.nijasc.ktorsvelte.Messages
import io.github.nijasc.ktorsvelte.formats
import io.github.nijasc.ktorsvelte.localizeHref
import io.github.nijasc.ktorsvelte.messages

get("/api/cart/summary") {
    val cart = carts.of(call.requireUser<User>())
    call.respondText(call.messages.cartCount(cart.items.size) + ", " + call.messages.cartTotal(call.formats.formatMoney(cart.total, "EUR")))
}

post("/api/orders") {
    val order = orders.place(call.requireUser<User>())
    call.toast(call.messages.orderPlaced())
    call.respondRedirect(call.localizeHref(FrontendRoutes.ordersId(order.id.toString())))
}

// an email sent later, in the customer's saved language
val german = Messages.forLocale("de")
```

Translate what the server says on its own too:

```kotlin no-check [Application.kt]
install(Svelte) {
    currentUser<User>(signInMessage = { call -> call.messages.problemSignIn() }) { /* ... */ }
    permissions<Permission, User>(refusedMessage = { call -> call.messages.problemNotAllowed() }) { user -> permissionsOf(user) }
    errorCodes<ShopError> { call, code ->
        when (code) {
            ShopError.OutOfStock -> call.messages.problemOutOfStock()
        }
    }
}
```

## Step 6: dates and money

A price on the page and the same price in an email from the server should read the same. Both sides have the same five functions, from one table for your languages:

::: code-group

```ts [In the browser]
import { formatDate, formatDateTime, formatMoney, formatNumber, formatTime } from '#format';

formatNumber(1234567.891, 2); // 1,234,567.89 in English, 1.234.567,89 in German
formatMoney(1234.5, 'EUR');
formatDate('2026-03-07'); // Mar 7, 2026 in English, 07.03.2026 in German
formatDate('2026-03-07', 'long');
formatDateTime(new Date());
formatTime(new Date());
```

```kotlin no-check [On the server]
val formats = call.formats
formats.formatMoney(order.total, "EUR")
formats.formatDate(order.placedOn)
formats.formatDateTime(order.placedAt, call.timeZone)
```

:::

- In the browser, dates and times are in the browser's time zone. In Kotlin you pass the zone, and [`call.timeZone`](../features/calling-the-api.md#the-visitor-s-time-zone) is the visitor's.
- `formatMoney` knows the sign and decimal places of 37 common currencies, and uses the code and two places for others.
- For "3 minutes ago", use `timeAgo` from `#format`, or `<TimeAgo value={order.placedAt} />` with `components()`, which keeps itself current.
- Weekday names, seconds, time zone names, compact numbers such as 1.2K, percent and digits other than 0 to 9 are not covered. Format those on one side only.

## Step 7: titles and link previews per language

Give each page a title and a description as message keys in its `_nav`, and the prerendered page of each language gets the preview tags in that language:

```ts no-check [about/+page.ts]
export const _nav = {
    title: 'about-title',
    description: 'about-lead'
};
```

See [Link previews](../features/routes.md#link-previews). The [sitemap](../features/endpoints.md#sitemap-and-robots-txt) lists the prerendered pages of every language.

## Step 8: remember the language per person

With a sign-in, a `locale` field in the [user preferences](../features/auth.md#theme-and-language) saves the choice for the account, so it follows them to their phone:

```kotlin no-check
@Serializable
data class Preferences(val locale: String? = null)
```

## Keep the translations complete

- In development, the [dev panel](../guide/dev-workflow.md) lists every message on the page that still has the default language's text, and can outline them on the page. See [Messages nobody translated yet](../features/frontend-libraries.md#messages-nobody-translated-yet).
- `./gradlew svelteVerifyMessages` lists messages that nothing uses any more. See [Messages nothing uses](../features/frontend-libraries.md#messages-nothing-uses).
- `svelteSync` refuses a plural without `other`, a form that a language never uses, or a count that is a number in one language and text in another.

## Good to know

- With `UrlPrefix`, a link that bypasses `routes` and `localizeHref` leads to the plain path, which then redirects. It works, but the page is not prerendered in that language. `svelteVerifyRoutes` finds string links.
- A page with a parameter, such as `/books/[id]`, is not prerendered, so it sets its own title when it runs.
- Kotlin plural rules are generated for the configured languages and checked against the browser's for the western and northern European, Slavic and Baltic languages, Romanian, Hebrew, Arabic, and languages without plural forms such as Japanese. A language outside that list is treated like English in Kotlin.
- Formatting covers 64 locales. A region without its own entry uses its language, and a language that is not in the table is formatted like English.
