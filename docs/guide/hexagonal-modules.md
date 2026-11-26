# Hexagonal modules

Split the backend into bounded contexts, each built as a hexagon: the domain in the middle, use cases around it, and Ktor and the database at the edge. The setup script can create this layout for you, and this page explains how it works and how to grow it.

## When it pays off

One module is the quickest start, and many apps never need more. Hexagonal modules pay off when:

- the app has areas that change for different reasons, such as orders, billing and the catalog
- several people work on it at once, and you want them to meet at clear interfaces
- you want domain rules that you can test without Ktor, a database or a browser

If you are not sure, start with one module. Moving code into a context later is a matter of moving files, because ktor-svelte does not care where a route is defined.

## Create it

Answer yes to "Split the backend into domain driven, hexagonal modules?" in the [setup script](getting-started.md), or pass the flags:

```bash
curl -fsSL https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.sh | sh -s -- --yes --name=shop --hexagonal --contexts=catalog,orders --aggregate-catalog=Product --shared-kernel
```

| Question | Flag | Default |
|---|---|---|
| Bounded contexts | `--contexts` | `orders` |
| Main aggregate of each context | `--aggregate-<context>` | The name without a trailing `s`, capitalized |
| Modules per context | `--module-layout` | `layers` |
| Shared kernel | `--shared-kernel` | no |

## The layout

With `--module-layout=layers`, each context has three Gradle modules:

```text
shop/
  build.gradle.kts            the app: starts Ktor and wires the contexts
  src/main/kotlin/            Application.kt, Env.kt, Errors.kt, Auth.kt, Database.kt
  build-logic/                kotlin-conventions and ktor-routes-conventions
  shared-kernel/              code every context may use, if you chose it
  catalog/
    domain/                   Product and its rules
    application/              ProductRepository (a port) and ProductService (the use cases)
    adapters/                 web/ProductRoutes.kt and persistence/ the repository
  orders/
    domain/
    application/
    adapters/
  frontend/
```

Each module only sees the one below it:

| Module | Depends on | Holds | Must not use |
|---|---|---|---|
| `domain` | the shared kernel | Aggregates, value objects, rules | Ktor, Exposed, serialization |
| `application` | `domain` | Use cases and the ports they need | Ktor, Exposed |
| `adapters` | `application` | HTTP routes, repositories, clients for other systems | Other contexts' adapters |
| the app | every context's `adapters` | `Application.kt`, which plugs adapters into use cases | Domain rules |

Gradle enforces this: `domain` has no Ktor on its classpath, so an import of `io.ktor` there does not compile. With `--module-layout=single`, each context is one module with a `domain`, `application` and `adapters` package. That is lighter, but nothing stops a domain class from importing Ktor, so keep to the rule yourself, or split the module when the context grows.

## How a request flows

`POST /api/catalog` goes through every layer once:

1. `ProductRoutes.kt` in `adapters/web` receives `NewProduct`, a DTO that ktor-svelte validates like any other.
2. It calls `ProductService.create(name)` in `application`.
3. The service builds a `Product` in `domain`, which checks its own rules, and saves it through the `ProductRepository` port.
4. `ExposedProductRepository` in `adapters/persistence`, or `InMemoryProductRepository` without Postgres, stores it.
5. The route answers with `ProductView`, so the domain class never becomes your API.

```kotlin no-check
fun Route.catalogRoutes(service: ProductService) {
    route("/api/catalog") {
        get {
            call.respond(service.list().map { it.toView() })
        }
        post {
            val request = call.receive<NewProduct>()
            call.respond(HttpStatusCode.Created, service.create(request.name).toView())
        }
    }
}
```

The app wires it together, so it is the only place that knows which adapter fills which port:

```kotlin no-check
routing {
    catalogRoutes(ProductService(ExposedProductRepository()))
}
```

## The TypeScript client sees every module

`generateTs` builds the client from Ktor's OpenAPI model, and the request and response types come from Ktor's compiler plugin. That plugin normally comes with the Ktor Gradle plugin, which also adds the `application` plugin and a fat JAR to whatever module applies it. So route modules apply `ktor-routes-conventions` from `build-logic` instead. It adds only the compiler plugin, with the same OpenAPI options as the app:

```kotlin no-check
plugins {
    id("ktor-routes-conventions")
}

dependencies {
    api(projects.catalogApplication)
    implementation(libs.ktor.server.core)
    implementation(libs.ktor.svelte.server)
}
```

Put a route in a module without it, and its request and response types are missing from `types.ts`.

## Add a context

With `layers`:

1. Add `boundedContext("billing")` to `settings.gradle.kts`.
2. Create `billing/domain`, `billing/application` and `billing/adapters`, each with a `build.gradle.kts` like the ones in an existing context, with the project accessors renamed, such as `projects.billingDomain`.
3. Add `implementation(projects.billingAdapters)` to the root `build.gradle.kts`.
4. Wire its routes in `Application.kt`.

With `single`, add the name to `include(...)` in `settings.gradle.kts`, create `billing/build.gradle.kts` like an existing one, and depend on `projects.billing` in the root build.

Modules depend on each other through type-safe project accessors and on libraries through `gradle/libs.versions.toml`, so the build files hold no versions and no module paths as text.

## Talking between contexts

Keep contexts from reaching into each other's tables or classes. When orders needs a product name, give the catalog's `application` module a small use case for it, and let the orders adapter call that. If two contexts share a type, such as a `Money` value, put it in the shared kernel. Keep the kernel small: everything in it couples every context.

## Errors

With a shared kernel, domain rules throw `DomainException`, and `Errors.kt` answers it with 422 and the message. Without one, the domain uses `require`, and the DTO's validation in the route catches bad input before it gets there. Either way, the domain never knows about HTTP status codes.

## Tests

The domain and application modules need neither Ktor nor a database, so their tests are plain JUnit with the in-memory repository. Test the routes with Ktor's `testApplication` in the adapters module, and the whole app, including the frontend, as in [Checks and tooling](checks-and-tooling.md).
