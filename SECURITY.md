# Security Policy

## Supported versions

Only the latest release gets security fixes. Upgrade to it before you report a problem, if you can.

## Reporting a vulnerability

Please do not open a public issue for a vulnerability.

Report it privately through GitHub: open the [Security tab](https://github.com/nijasc/ktor-svelte/security) of this repository and choose **Report a vulnerability**. If that option is not available, contact the maintainer through the contact options on the [maintainer's GitHub profile](https://github.com/nijasc) and ask for a private channel.

Include:

- the ktor-svelte version, and the Ktor, Kotlin and SvelteKit versions
- the settings in your `install(Svelte) { }` block
- the request or steps that show the problem, and what an attacker gains

You get an answer within 14 days. Fixes are released as soon as they are ready, and the release notes credit you unless you prefer otherwise.

## Scope

In scope are the `ktor-svelte-server` library, the `ktor-svelte-gradle-plugin`, the setup scripts in `scripts/`, and the code ktor-svelte generates into your project.

Out of scope are vulnerabilities in Ktor, SvelteKit, Vite or other dependencies (report them to those projects), the example apps when they run in development mode, and setups that turn a secure default off.

## Secure defaults

ktor-svelte turns these protections on without any configuration. The [security docs](docs/security.md) explain each one and how to change it.

| Protection | Default | Setting |
| --- | --- | --- |
| Files are served only from the build manifest, never from a path built from the request | always on | none |
| `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin` | on | `securityHeaders { }` |
| Strict `Content-Security-Policy` on every HTML page, with hashes for inline scripts | on | `securityHeaders { automaticContentSecurityPolicy }` |
| Cross-site writes to API paths are refused with 403 | on | `originCheck`, `allowedOrigins(...)` |
| Request bodies on API paths are limited to 1 MiB | on | `maxApiBodySize` |
| Writes to API paths are limited to 120 per minute per client | on | `rateLimit { }` |
| Unhandled exceptions answer with a generic message in production | on | `hideErrorDetails` |
| Request bodies are validated against `@JsonSchema` and `Validated` rules, including nested values | on for annotated types | none |
| The dev proxy serves only loopback clients with a local `Host`, only targets loopback hosts, and never forwards credentials | on | `dev.allowRemote` |
| The status endpoint is off, and when on it answers only local requests | off | `statusEndpoint` |
| Swagger UI is served only in development mode | off | `apiDocs` |
| `publicConfig` is served to anyone, so it must never hold secrets | documented | none |
