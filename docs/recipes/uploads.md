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

```ts no-check
const form = new FormData();
for (const file of input.files ?? []) form.append('file', file);
const stored = await api.files.create(form, {
    onUploadProgress: ({ loaded, total }) => (progress = total ? loaded / total : 0)
});
```

## Rules for both sides

Which files a route takes is usually written twice: once in Kotlin, and again in the page, so the user is told before a 20 MB upload has finished. Declare it once, on the route:

```kotlin
import io.github.nijasc.ktor.svelte.receiveUploads
import io.github.nijasc.ktor.svelte.uploadRules

post("/api/avatars") {
    val stored = call.receiveUploads().map { file -> files.store(file.fileName ?: "upload", file.bytes) }
    call.respond(HttpStatusCode.Created, stored)
}.uploadRules(maxSize = 5L * 1024 * 1024, types = listOf("image/*", ".pdf"), maxFiles = 3)
```

- `uploadRules` describes the body as multipart form data, so no `describe { requestBody { } }` is needed, and it carries the rules into the generated client.
- `call.receiveUploads()` reads the files and enforces the rules. Each file has `field`, `fileName`, `contentType`, `bytes` and `size`. No file is read beyond its limit.
- `types` are media types (`application/pdf`), families (`image/*`) or file endings (`.csv`).

A file that breaks a rule is answered with a status and a body like this one, and the route's own code never runs:

| Rule | Status | `code` | `message` |
|---|---|---|---|
| `maxSize` | 413 | `upload.tooLarge` | `photo.png is larger than 5 MiB.` |
| `types` | 415 | `upload.type` | `setup.exe is not an accepted file type.` |
| `maxFiles` | 400 | `upload.tooMany` | `At most 3 files can be sent at once.` |

The generated function checks the same rules before it sends anything, and fails with the same `ApiError`, so the page handles one error whether the browser or the server noticed:

```ts no-check
import { api, isUploadError, uploadRules } from '#api';

try {
    await api.avatars.create(form);
} catch (error) {
    if (isUploadError(error)) console.log(error.body.code, error.body.file, error.body.message);
}
```

`uploadRules['avatars.create']` holds the rules as data, for an `<input type="file" accept={uploadRules['avatars.create'].types.join(',')}>` or a hint under the field. With `toasts()` on, the message is shown without any code of yours. For your own wording or another language, pass `{ silent: true }` and choose the text by `error.body.code`.

The server checks the type the browser declares and the file name, as the browser does. Neither proves what the bytes are, so treat stored files as untrusted when you serve them.

## A form with named fields

With `uploadRules`, the generated function takes a `FormData`, and nothing checks the field names in it. When an upload comes with other values, or the field names matter, declare the form:

```kotlin
import io.github.nijasc.ktor.svelte.receiveForm
import io.github.nijasc.ktor.svelte.uploadForm

post("/api/documents") {
    val form = call.receiveForm()
    val title = form.text("title")
    val cover = form.file("cover")
    val pages = form.files("pages")
    call.respondText("$title: ${cover.fileName} and ${pages.size} pages")
}.uploadForm(maxSize = 5L * 1024 * 1024, types = listOf("image/*", ".pdf")) {
    text("title")
    text("note", required = false)
    file("cover")
    files("pages")
}
```

The generated function then takes an object with those fields, and builds the form itself:

```ts no-check
await api.documents.create({ title: 'Report', cover, pages: [first, second] });
```

```ts no-check
export const documentsCreate = (body: { title: string; note?: string; cover: File; pages?: File[] }, options?: RequestOptions) => ...
```

- `file` is one file and required unless you say otherwise, `files` is any number of them, `text` is a text value.
- `maxSize`, `types` and `maxFiles` are the rules from above, for every file in the form. Both sides check them as before.
- `call.receiveForm()` gives `text`, `file` and `files` by name, and `textOrNull` and `fileOrNull` for the optional ones.
- A request with a field the form does not have, without a required one, with a file where text belongs, or with two files for a `file` field, is answered with 400 and a `code` of `upload.field` or `upload.missing`.

On a route without `uploadForm`, `receiveForm()` takes any field, for forms whose fields are not known in advance.

- API bodies are limited to 1 MiB by default. Raise `maxApiBodySize` to the largest upload you accept.
- `readRemaining()` keeps each file in memory. For large files, copy `part.provider()` to a file or object storage instead.
- Never use `originalFileName` as a path on disk. Store files under an ID you choose.
