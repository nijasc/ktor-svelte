# Transport and compression

JSON, XML and other formats, and compressed API responses.

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

| Function | Effect |
|---|---|
| `json()` | Adds JSON to Ktor's `ContentNegotiation`. Takes a `kotlinx.serialization` `Json` builder |
| `xml()` | Adds XML. Needs `implementation("io.ktor:ktor-serialization-kotlinx-xml")` in your build |
| `negotiation { }` | Registers any other format, such as CBOR, on `ContentNegotiation` directly |
| `compression { }` | Installs Ktor's `Compression`. Takes its normal configuration, and defaults to gzip and deflate |

The client picks a format with its `Accept` header, and the first format you list is the default. Already installing these plugins yourself? You will get a clear error at startup, so remove one of the two. Files precompressed by your adapter are left alone. The generated TypeScript client always speaks JSON.

## API compression

API responses are compressed by default, without any `transport` block. Responses of 1 KiB or more on your API paths with a JSON, XML, CBOR or text content type are sent with gzip or deflate, whichever the client prefers. Browsers decompress them natively, so the generated client and DevTools see plain JSON, and clients that send no `Accept-Encoding`, such as curl, get plain JSON too. Server-sent events, small responses, other content types and frontend files are left alone, and request bodies are never decompressed.

Add Ktor's zstd module, and current browsers get zstd instead, which compresses about as well as gzip at a fraction of the CPU time:

```kotlin
implementation("io.ktor:ktor-server-compression-zstd:<ktor version>")
```

It adds a native library of about 7 MB to your JAR, which is why it is not included by default.

Compression and secrets: a response that contains a secret, such as an API key, next to text an attacker can choose can leak that secret byte by byte through its compressed size (the BREACH attack). ktor-svelte's own CSRF protection uses no tokens, so it is not affected. If one of your endpoints returns such a mix, turn `apiCompression` off or install `Compression` yourself with a condition that skips that route.

If you install `Compression` yourself, before or after `install(Svelte)`, or use `transport { compression() }`, your configuration is used instead. To send API responses uncompressed:

```kotlin
install(Svelte) {
    apiCompression = false
}
```

Why compression and not a binary format: for 5000 notes, gzip cut the time from server to parsed data from 318 ms to 152 ms on a 50 Mbit connection and from 1537 ms to 381 ms on 4G, and zstd to 84 ms and 345 ms. CBOR was 7 percent smaller than JSON before compression and larger after it, and decoding it in JavaScript took about seven times as long as `JSON.parse`, so it never came out ahead.
