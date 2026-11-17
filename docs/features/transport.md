# Transport and compression

JSON, XML and other formats, and compressed API responses. ktor-svelte can set up Ktor's `ContentNegotiation` and `Compression` for you, and compresses API responses by default.

<Badge type="tip" text="Ktor plugin" />

## Quick start

Choose how your API talks inside `install(Svelte)`. Without a `transport` block, nothing is installed and you stay in control.

```kotlin
install(Svelte) {
    transport {
        json { prettyPrint = true }
        xml()
        compression()
    }
}
```

## Formats

| Function | Effect |
|---|---|
| `json()` | Adds JSON to Ktor's `ContentNegotiation`. Takes a `kotlinx.serialization` `Json` builder |
| `xml()` | Adds XML. Needs `implementation("io.ktor:ktor-serialization-kotlinx-xml")` in your build |
| `negotiation { }` | Registers any other format, such as CBOR, on `ContentNegotiation` directly |
| `compression { }` | Installs Ktor's `Compression`. Takes its normal configuration, and defaults to gzip and deflate |

- The client picks a format with its `Accept` header, and the first format you list is the default.
- The generated TypeScript client always speaks JSON.

```kotlin
install(Svelte) {
    transport {
        json { ignoreUnknownKeys = true }
    }
}
```

::: warning Already installing these plugins yourself?
You will get a clear error at startup, so remove one of the two.
:::

## API compression

API responses are compressed by default, without any `transport` block. Responses of 1 KiB or more on your API paths with a JSON, XML, CBOR or text content type are sent with gzip or deflate, whichever the client prefers.

- Browsers decompress them natively, so the generated client and DevTools see plain JSON.
- Clients that send no `Accept-Encoding`, such as curl, get plain JSON too.
- Server-sent events, small responses, other content types and frontend files are left alone.
- Request bodies are never decompressed.
- Files precompressed by your adapter are left alone.

| Setting in `install(Svelte)` | Default | What it does |
|---|---|---|
| `apiCompression` | `true` | Compresses API responses as described above |

### zstd

Add Ktor's zstd module, and current browsers get zstd instead, which compresses about as well as gzip at a fraction of the CPU time:

```kotlin
implementation("io.ktor:ktor-server-compression-zstd:<ktor version>")
```

It adds a native library of about 7 MB to your JAR, which is why it is not included by default.

### Your own configuration

If you install `Compression` yourself, before or after `install(Svelte)`, or use `transport { compression() }`, your configuration is used instead. To send API responses uncompressed:

```kotlin
install(Svelte) {
    apiCompression = false
}
```

### Compression and secrets

::: warning BREACH
A response that contains a secret, such as an API key, next to text an attacker can choose can leak that secret byte by byte through its compressed size (the BREACH attack). ktor-svelte's own CSRF protection uses no tokens, so it is not affected. If one of your endpoints returns such a mix, turn `apiCompression` off or install `Compression` yourself with a condition that skips that route.
:::

### Why compression and not a binary format

For 5000 notes, measured from server to parsed data:

| | 50 Mbit connection | 4G |
|---|---|---|
| Plain JSON | 318 ms | 1537 ms |
| gzip | 152 ms | 381 ms |
| zstd | 84 ms | 345 ms |

CBOR was 7 percent smaller than JSON before compression and larger after it, and decoding it in JavaScript took about seven times as long as `JSON.parse`, so it never came out ahead.

## Full example

An API that serves JSON to the generated client, XML and CBOR to other callers that ask for them, and compresses with your own settings.

::: code-group

```kotlin no-check [build.gradle.kts]
dependencies {
    implementation("io.ktor:ktor-serialization-kotlinx-xml")
    implementation("io.ktor:ktor-serialization-kotlinx-cbor")
}
```

```kotlin no-check [Application.kt]
@OptIn(ExperimentalSerializationApi::class)
fun Application.module() {
    install(Svelte) {
        generateTs = true
        transport {
            json { ignoreUnknownKeys = true }
            xml()
            negotiation { cbor() }
            compression {
                gzip { priority = 1.0 }
                deflate { priority = 0.5 }
            }
        }
    }
    routing {
        get("/api/notes") { call.respond(store.all()) }
    }
}
```

:::

```bash
curl http://localhost:8080/api/notes
curl -H "Accept: application/xml" http://localhost:8080/api/notes
curl -H "Accept-Encoding: gzip" --compressed http://localhost:8080/api/notes
```

JSON stays the default, because it is listed first. A caller that sends `Accept: application/xml` gets XML, and one that asks for `application/cbor` gets CBOR.

## Use cases

- Most apps: nothing to do. JSON through your own `ContentNegotiation`, and API compression on by default.
- One place for the setup: `transport { json() }` instead of installing `ContentNegotiation` yourself.
- Partners that need XML or CBOR: `xml()` or `negotiation { }`.
- Large lists on slow connections: keep `apiCompression` on, and add zstd.
- Responses that mix secrets with user input: turn `apiCompression` off for them, see [Compression and secrets](#compression-and-secrets).

## Good to know

- The generated TypeScript client always speaks JSON, whatever else you add.
- Installing `ContentNegotiation` or `Compression` yourself and through `transport` fails at startup with a clear error.
- See [Calling the API](./calling-the-api.md) for the client, and the [Ktor reference](../reference/ktor.md) for every setting.
