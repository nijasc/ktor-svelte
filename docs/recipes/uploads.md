# Upload files

You want people to upload files, such as avatars or documents, see a progress bar while they upload, and be told at once when a file is too large or of the wrong type, by the browser and by the server alike.

**Time:** about 15 minutes. **Level:** beginner.

What you build, one step at a time:

1. A route that takes files, and a typed function that sends them with progress.
2. Rules for size, type and count, written once and checked on both sides.
3. A drop zone with previews, without writing one.
4. A form with named fields, such as a title and a cover image.

## Step 1: receive the files

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

## Step 2: send them with progress

The generated function takes the `FormData` and an `onUploadProgress` option:

```ts no-check
const form = new FormData();
for (const file of input.files ?? []) form.append('file', file);
const stored = await api.files.create(form, {
    onUploadProgress: ({ loaded, total }) => (progress = total ? loaded / total : 0)
});
```

`total` is missing when the browser does not know the size in advance, so check it before you divide.

## Step 3: raise the body limit

API bodies are limited to 1 MiB by default. Raise `maxApiBodySize` to the largest upload you accept, with a little room for the multipart framing:

```kotlin
install(Svelte) {
    maxApiBodySize = 5L * 1024 * 1024 + 64 * 1024
}
```

See [Body size limit](../security.md#body-size-limit).

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

| Rule | Default | What it does |
| --- | --- | --- |
| `maxSize` | none | Largest size of each file, in bytes |
| `types` | any | Media types (`application/pdf`), families (`image/*`) or file endings (`.csv`) |
| `maxFiles` | none | Most files in one request |

- `uploadRules` describes the body as multipart form data, so no `describe { requestBody { } }` is needed, and it carries the rules into the generated client.
- `call.receiveUploads()` reads the files and enforces the rules. Each file has `field`, `fileName`, `contentType`, `bytes` and `size`. No file is read beyond its limit.
- A rule that is not a media type, a family or a file ending, or a size or count that is not positive, fails at startup.

A file that breaks a rule is answered with a status and a body like this one, and the route's own code never runs:

| Rule | Status | `code` | `message` |
|---|---|---|---|
| `maxSize` | 413 | `upload.tooLarge` | `photo.png is larger than 5 MiB.` |
| `types` | 415 | `upload.type` | `setup.exe is not an accepted file type.` |
| `maxFiles` | 400 | `upload.tooMany` | `At most 3 files can be sent at once.` |

### In the page

The generated function checks the same rules before it sends anything, and fails with the same `ApiError`, so the page handles one error whether the browser or the server noticed:

```ts no-check
import { api, isUploadError, uploadRules } from '#api';

try {
    await api.avatars.create(form);
} catch (error) {
    if (isUploadError(error)) console.log(error.body.code, error.body.file, error.body.message);
}
```

- `uploadRules['avatars.create']` holds the rules as data, for an `<input type="file" accept={uploadRules['avatars.create'].types.join(',')}>` or a hint under the field.
- With `toasts()` on, the message is shown without any code of yours.
- For your own wording or another language, pass `{ silent: true }` and choose the text by `error.body.code`.

::: warning Treat stored files as untrusted
The server checks the type the browser declares and the file name, as the browser does. Neither proves what the bytes are, so treat stored files as untrusted when you serve them.
:::

## A drop zone without the code

With `libraries { components() }`, the generated [`<FileDrop>`](../features/frontend-libraries.md#filedrop) is the input, the drop area, the previews, the progress bars and the refusals for an upload route, in one component:

```svelte no-check
<script lang="ts">
    import { api, uploadRules, type StoredFile } from '#api';
    import FileDrop from '#components/FileDrop.svelte';

    let avatars = $state<StoredFile[]>([]);
</script>

<FileDrop
    label="Add a picture"
    hint="Images or PDF, up to 5 MiB each."
    multiple
    rules={uploadRules['avatars.create']}
    upload={(file, options) => {
        const form = new FormData();
        form.append('file', file);
        return api.avatars.create(form, options);
    }}
    onuploaded={(stored) => (avatars = [...avatars, ...stored])}
/>
```

Hand the `options` it gives you to the generated function: they carry the progress.

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

| Field | Required unless you say | In Kotlin |
| --- | --- | --- |
| `text(name)` | Yes | `form.text(name)`, or `form.textOrNull(name)` when optional |
| `file(name)` | Yes | `form.file(name)`, or `form.fileOrNull(name)` when optional |
| `files(name)` | No | `form.files(name)`, a list |

- `maxSize`, `types` and `maxFiles` are the rules from above, for every file in the form. Both sides check them as before.
- `form.allFiles` lists every file in the form.
- Field names are letters, digits, `_` and `-`, each declared once.
- A request with a field the form does not have, without a required one, with a file where text belongs, or with two files for a `file` field, is answered with 400 and a `code` of `upload.field` or `upload.missing`.

On a route without `uploadForm`, `receiveForm()` takes any field, for forms whose fields are not known in advance.

## Full example

An avatar upload on a profile page, with a preview, a progress bar and the rules from the route:

::: code-group

```kotlin no-check [Routes.kt]
const val MAX_AVATAR_BYTES = 2L * 1024 * 1024

fun Route.avatarRoutes(storage: AvatarStorage) {
    // one picture per user, replaced on each upload
    post("/api/avatars") {
        val user = call.requireUser<User>()
        val file = call.receiveUploads().single()
        val url = storage.save(user.id, file.contentType, file.bytes) // stored under the user's id, not the file name
        call.respond(Avatar(url))
    }.uploadRules(maxSize = MAX_AVATAR_BYTES, types = listOf("image/png", "image/jpeg", "image/webp"), maxFiles = 1)
}
```

```svelte no-check [settings/+page.svelte]
<script lang="ts">
    import { api, isUploadError, uploadRules } from '#api';

    const rules = uploadRules['avatars.create'];

    let progress = $state(0);
    let busy = $state(false);
    let message = $state('');
    let avatar = $state<string | null>(null);

    async function upload(event: Event) {
        const file = (event.currentTarget as HTMLInputElement).files?.[0];
        if (!file) return;
        const form = new FormData();
        form.append('file', file);
        busy = true;
        message = '';
        try {
            avatar = (await api.avatars.create(form, {
                silent: true,
                onUploadProgress: ({ loaded, total }) => (progress = total ? loaded / total : 0)
            })).url;
        } catch (error) {
            if (isUploadError(error)) message = error.body.message;
            else throw error;
        } finally {
            busy = false;
        }
    }
</script>

{#if avatar}<img src={avatar} alt="Your avatar" width="96" height="96" />{/if}
<input type="file" accept={rules.types.join(',')} onchange={upload} disabled={busy} />
{#if busy}<progress value={progress}></progress>{/if}
<p role="alert">{message}</p>
```

:::

## Good to know

- `readRemaining()` and `receiveUploads()` keep each file in memory. For large files, copy `part.provider()` to a file or object storage instead.
- Never use `originalFileName` as a path on disk. Store files under an ID you choose.
- An upload is a write, so the [origin check and the write rate limit](../security.md#api-request-guards) apply to it.
