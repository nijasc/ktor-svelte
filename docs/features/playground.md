---
aside: false
---

# Generator playground

Paste an OpenAPI document and see the TypeScript that `generateTs` writes for it. The playground runs the same generator as the Ktor plugin, compiled to JavaScript, so nothing leaves your browser.

<GeneratorPlayground />

Only paths under the API prefix are kept, as in your app. The document must be JSON, which is what Ktor produces. In a real project the generator also adds the `LucideIcon` type when `lucide` is enabled and `readPublicConfig()` when you set `publicConfig`, so those are missing here. See [Generated TypeScript](./typescript) for what each file contains and how to use it.
