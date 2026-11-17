# Recipes

Complete, step-by-step answers to tasks most apps need. Each recipe starts from what you want to build, shows the Kotlin and the Svelte side together, and uses only Ktor, SvelteKit and what ktor-svelte already does, so you can copy it and adapt the names.

## Pick a recipe

| You want to... | Recipe | Level | Time |
| --- | --- | --- | --- |
| Go from a Kotlin class to a table, a detail page and forms | [CRUD in minutes](crud-in-minutes.md) | Beginner | 10 min |
| Let people sign in and stay signed in | [Sign in with a session cookie](sessions.md) | Beginner | 20 min |
| Give users roles that decide what they may do | [A role-based app](role-based-app.md) | Intermediate | 30 min |
| Add pages and routes that only admins can use | [Add an admin area](admin-area.md) | Intermediate | 20 min |
| Accept files with progress and shared size and type rules | [Upload files](uploads.md) | Beginner | 15 min |
| Show long lists one page at a time | [Page through long lists](pagination.md) | Beginner | 15 min |
| Update results while someone types | [Search as you type](search-as-you-type.md) | Beginner | 10 min |
| Push changes from the server to open pages | [Stream live updates](live-updates.md) | Intermediate | 15 min |
| Offer the site in several languages, with local dates and prices | [A multilingual site](multilingual-site.md) | Intermediate | 30 min |

## Build an app from them

The recipes fit together. A typical team app uses them in this order:

1. [CRUD in minutes](crud-in-minutes.md) for the first resource.
2. [Sign in with a session cookie](sessions.md) to put it behind a login.
3. [A role-based app](role-based-app.md) and [Add an admin area](admin-area.md) when not everyone may do everything.
4. [Page through long lists](pagination.md) and [Search as you type](search-as-you-type.md) once the lists grow.
5. [Upload files](uploads.md), [Stream live updates](live-updates.md) and [A multilingual site](multilingual-site.md) as the app needs them.

`examples/showcase` is such an app: a team board with sign-in, roles, an admin area, uploads, paged tables and two languages. Read its source next to the recipes, or see [Examples](../examples.md).

## Smaller answers

Some tasks are a few lines and live on the feature pages:

| You want to... | Where |
| --- | --- |
| Keep a typed value in a cookie | [Typed cookies](sessions.md#typed-cookies) |
| Ask for consent before setting a cookie | [Cookie consent](sessions.md#cookie-consent) |
| Warn before a session ends | [When the session ends](../features/auth.md#when-the-session-ends) |
| Check one field on the server while someone types | [Checks only the server can make](../features/validation.md#checks-only-the-server-can-make) |
| Show a message from a route as a toast | [Toasts from the server](../features/calling-the-api.md#toasts-from-the-server) |
| Check health from a load balancer | [Health endpoint](../features/endpoints.md#health-endpoint) |
