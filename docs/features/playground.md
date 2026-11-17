---
aside: false
---

# Generator playground

Paste an OpenAPI document and see the TypeScript that `generateTs` writes for it. The playground runs the same generator as the Ktor plugin, compiled to JavaScript, so nothing leaves your browser.

<GeneratorPlayground />

## How to use it

1. Get the OpenAPI document of your API. In an app with `generateTs` it is the committed `frontend/src/lib/api/openapi.json`.
2. Paste it above.
3. Read the generated `types.ts` and `services.ts`, and compare them with what [Generated TypeScript](./typescript.md) describes.

## What is different in a real project

- Only paths under the API prefix are kept, as in your app.
- The document must be JSON, which is what Ktor produces.
- In a real project the generator also adds the `LucideIcon` type when `lucide` is enabled and `readPublicConfig()` when you set [`publicConfig`](./runtime-config.md), so those are missing here.

See [Generated TypeScript](./typescript) for what each file contains and how to use it, and [Calling the API](./calling-the-api.md) for how to call the result.
