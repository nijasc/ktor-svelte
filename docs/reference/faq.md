# FAQ

Questions people ask before and while using ktor-svelte.

**Why `adapter-static` and no server-side rendering?** ktor-svelte exists to ship one JVM app. SSR needs a JavaScript runtime that renders every request, so production would need Node next to the JVM, or a JavaScript engine inside it. That means two processes or a slow embedded engine, two places for auth and config, and two things to deploy and monitor. With `adapter-static`, the frontend is plain files, Ktor is the only backend, and the JAR is the whole app.

**What about SEO and the first paint?** Prerender every page whose content is known at build time with `export const prerender = true`. Those pages are real HTML that search engines and slow devices see right away. Pages that depend on data from your API render in the browser, which suits dashboards, admin areas and anything behind a login.

**How do I load data for a page?** Call your Ktor routes from `load` in `+page.ts` or from the component, through the generated client. `+page.server.ts` and `+server.ts` need a Node server and do not exist here. Write that logic as a Ktor route instead.

**What replaces form actions?** A Ktor route that receives the form as JSON or form data. Validation errors come back as a 422 that `isValidationError` understands, so the form can show them next to each field.

**Can I still add SSR later?** Yes, but not with ktor-svelte. Switch the frontend to `adapter-node`, run it as its own server, and keep Ktor as the API behind it. You lose the single JAR and the same-origin setup, and you need CORS or a proxy.

**Does a dynamic route like `/notes/[id]` work?** Yes. Unknown paths get the fallback page, and SvelteKit renders the route in the browser. List patterns in `paramRoutes` to serve the fallback for them even when a request does not accept HTML.
