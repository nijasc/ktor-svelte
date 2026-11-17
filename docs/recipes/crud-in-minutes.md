# CRUD in minutes

You want to manage a list of things, such as books, customers or products: a table of them, a page per item, a form to add one and a form to change one, with a delete button. This recipe goes from a Kotlin class to working pages with two Gradle commands, and leaves you with ordinary files to redesign.

**Time:** about 10 minutes. **Level:** beginner. **You need:** an app with `generateTs = true`. `routes()` and `i18n` are used when they are on, and are not required.

What you use:

- [`resource`](../features/typescript.md#resource-routes) on the server: five conventional routes, typed end to end.
- [`svelteAdd --crud`](../features/routes.md#pages-for-a-class): list, detail and form pages written from the generated client.

## Step 1: the classes

One class for what the API returns, one for what a form sends. Bounds on the input class reach the browser, so the form checks the same rules as the server:

```kotlin no-check [Books.kt]
@Serializable
data class Book(
    val id: Int,
    val title: String,
    val author: String,
    val pages: Int,
    val inStock: Boolean,
)

@Serializable
data class BookInput(
    @JsonSchema.MinLength(1) @JsonSchema.MaxLength(120) val title: String,
    @JsonSchema.MinLength(1) val author: String,
    @JsonSchema.Minimum(1.0) val pages: Int = 1,
    val inStock: Boolean = true,
)
```

The pages need an `id` field to tell one item from another.

## Step 2: a store

Any storage works: a database table, Exposed, a file. For the recipe, a map:

```kotlin no-check [Books.kt]
class BookStore {
    private val ids = AtomicInteger()
    private val books = ConcurrentHashMap<Int, Book>()

    fun list(): List<Book> = books.values.sortedBy { it.id }

    fun find(id: Int): Book? = books[id]

    fun create(input: BookInput): Book =
        Book(ids.incrementAndGet(), input.title, input.author, input.pages, input.inStock).also { books[it.id] = it }

    fun update(id: Int, input: BookInput): Book? =
        books.computeIfPresent(id) { _, book ->
            book.copy(title = input.title, author = input.author, pages = input.pages, inStock = input.inStock)
        }

    fun delete(id: Int): Boolean = books.remove(id) != null
}
```

## Step 3: the routes

`resource` registers the five routes with the paths, statuses and names that the generated client expects:

```kotlin no-check [Routes.kt]
fun Route.bookRoutes(store: BookStore) {
    resource<Book, Int>("/api/books") {
        missing<Problem> { Problem("That book does not exist.") }
        list { store.list() }
        get { id -> store.find(id) }
        create<BookInput> { input -> store.create(input) }
        update<BookInput> { id, input -> store.update(id, input) }
        delete { id -> store.delete(id) }
    }
}
```

| Block | Route | Client |
| --- | --- | --- |
| `list { }` | `GET /api/books` | `api.books.list()` |
| `get { id -> }` | `GET /api/books/{id}`, 404 for `null` | `api.books.get(id)` |
| `create<BookInput> { }` | `POST /api/books`, 201 | `api.books.create(input)` |
| `update<BookInput> { id, input -> }` | `PUT /api/books/{id}`, 404 for `null` | `api.books.update(id, input)` |
| `delete { id -> }` | `DELETE /api/books/{id}`, 204, or 404 for `false` | `api.books.delete(id)` |

Call `bookRoutes(BookStore())` inside `routing { }`, then generate the client:

```bash
./gradlew svelteGenerateTs
```

## Step 4: the pages

```bash
./gradlew svelteAdd --crud=Book
```

The task finds the route that lists `Book` and the other four next to it, and writes:

| File | What it is |
| --- | --- |
| `frontend/src/routes/books/+page.ts` | Loads the list |
| `frontend/src/routes/books/+page.svelte` | A table of the plain fields, a link to each book, a delete button per row and a link to the new page |
| `frontend/src/routes/books/new/+page.svelte` | The form, which creates a book |
| `frontend/src/routes/books/[id]/+page.ts` | Loads one book |
| `frontend/src/routes/books/[id]/+page.svelte` | The book, the same form filled with it, and a delete button |

It tells you what is left to do. For a detail page that is one line in `install(Svelte)`, so the app serves the page for every id:

```kotlin no-check
install(Svelte) {
    paramRoutes("/books/[id]")
}
```

Start the app, open `/books`, and add the first book.

## What the pages use

- The form is a [`formState`](../features/validation.md#form-state) of `BookInput`, with its `validate` and, per field, its `bounds`. An empty title is refused in the browser with the server's rule, before any request.
- With [`routes()`](../features/routes.md) on, every link and `goto` is a typed route.
- With [`i18n`](../features/frontend-libraries.md#i18n) on, every text is a message. The keys are added to each locale file in English, and keys that are already there are left alone. Translate them.
- Text, numbers and booleans get an input. Other fields, such as lists and enums, are left out of the form and named in the task's output, and the draft keeps their default.

Which pages appear depends on which routes exist: no `create` means no new page, no `delete` means no delete buttons, and so on.

## Step 5: make them yours

The files have no generated header and are never touched again. Change the table, add a search box, put the form in a dialog. For example, a search that filters as you type needs a query class on the `list` block and a few lines in the page: see [Search as you type](search-as-you-type.md).

To protect the pages and the API, add one guard. The API under `/api/books` is then closed by the server, and the pages send visitors to the login page:

```kotlin no-check
install(Svelte) {
    guards {
        signedIn("/books")
    }
}
```

See [Page guards](../features/auth.md#page-guards).

## Variants

| You want | Do this |
| --- | --- |
| The pages in another folder | `./gradlew svelteAdd --crud=Book --page=(app)/library` |
| A string id | `resource<Book>("/api/books")` without the second type |
| Only some of the routes | Leave blocks out. A block that is left out is no route, and the task writes no page for it |
| A Kotlin route stub for a single page | `./gradlew svelteAdd --page=books/[id] --route`. See [A new page](../features/routes.md#a-new-page) |

## Good to know

- `svelteAdd --crud` reads the generated client, so run `svelteGenerateTs` first. It stops and says so when there is no client yet, or no route that lists the class.
- It works for routes one level below the API prefix, such as `/api/books`, not `/api/shop/books`.
- It only creates. It refuses when one of its files is already there, and never edits a file of yours.
- `resource` registers ordinary Ktor routes. Other routes of the same thing, such as `POST /api/books/{id}/lend`, go next to it in a normal `route("/api/books") { }`.
