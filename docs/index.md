---
layout: home

hero:
  name: ktor-svelte
  text: One app. One JAR. One port.
  tagline: Ship your Ktor API and your SvelteKit frontend together, with a TypeScript client that always matches your routes.
  actions:
    - theme: brand
      text: Get started
      link: /guide/getting-started
    - theme: alt
      text: What is ktor-svelte?
      link: /guide/introduction
    - theme: alt
      text: View on GitHub
      link: https://github.com/nijasc/ktor-svelte

features:
  - title: One port, one JAR
    details: Your built frontend goes inside the JAR, next to your API. Works with jar, Shadow and Ktor's buildFatJar. No CORS, no second server.
    link: /guide/deployment
    linkText: Deploy it
  - title: Generated TypeScript
    details: Types, services and validation helpers come from your Ktor routes, with no npm dependencies. Change a route and the frontend follows.
    link: /features/typescript
    linkText: See the client
  - title: Real hot reload
    details: One command runs Vite, the Kotlin compiler and your app. Svelte changes hot reload, Kotlin changes restart the app.
    link: /guide/dev-workflow
    linkText: Dev workflow
  - title: Secure by default
    details: Strict CSP from build hashes, security headers, origin checks, body limits, rate limits and hidden error details, each with a one-line opt-out.
    link: /security
    linkText: Security
  - title: Fast in production
    details: Immutable caching, ETags, precompressed files with zstd, Brotli and gzip, and compressed API responses.
    link: /features/transport
    linkText: Transport
  - title: Frontend libraries from Kotlin
    details: Turn on Tailwind, DaisyUI, Lucide, i18n, image optimization and error toasts in Gradle, with typed icons, themes and messages on both sides.
    link: /features/frontend-libraries
    linkText: Libraries
---
