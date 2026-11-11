# Upload files

Receive the parts in Ktor and describe the body once, so the generated function takes `FormData`:

```kotlin
post("/api/files") {
    val stored = mutableListOf<StoredFile>()
    call.receiveMultipart().forEachPart { part ->
        if (part is PartData.FileItem) {
            stored += files.store(part.originalFileName ?: "upload", part.provider().readRemaining().readByteArray())
        }
        part.dispose()
    }
    call.respond(HttpStatusCode.Created, stored)
}.describe {
    requestBody { ContentType.MultiPart.FormData() }
}
```

```ts
const form = new FormData();
for (const file of input.files ?? []) form.append('file', file);
const stored = await api.files.create(form, {
    onUploadProgress: ({ loaded, total }) => (progress = total ? loaded / total : 0)
});
```

- API bodies are limited to 1 MiB by default. Raise `maxApiBodySize` to the largest upload you accept.
- `readRemaining()` keeps each file in memory. For large files, copy `part.provider()` to a file or object storage instead.
- Never use `originalFileName` as a path on disk. Store files under an ID you choose.
