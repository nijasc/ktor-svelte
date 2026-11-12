# Add an admin area

Protect the API on the server and only hide the pages in the frontend. A page guard alone protects nothing, because anyone can call the API directly.

```kotlin
fun Route.admin(
    users: Users,
    build: Route.() -> Unit,
) {
    authenticate("session") {
        route("/api/admin") {
            install(
                createRouteScopedPlugin("AdminOnly") {
                    on(AuthenticationChecked) { call ->
                        val user = call.principal<UserSession>()?.let { users.find(it.userId) }
                        if (user?.admin != true) call.respond(HttpStatusCode.Forbidden, Problem("Admins only."))
                    }
                },
            )
            build()
        }
    }
}

routing {
    admin(users) {
        get("/users") { call.respond(users.all()) }
    }
}
```

The check has to run in `on(AuthenticationChecked)`. A plain `onCall` runs before Ktor has read the session, so `call.principal` is still empty there and the check would refuse everyone, admins included.

In SvelteKit, put the admin pages under `src/routes/admin/` and check the user once in their layout:

```ts no-check
import { redirect } from '@sveltejs/kit';
import { apiWith } from '#api';
import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad = async (event) => {
    const me = await apiWith(event).me.list().catch(() => undefined);
    if (!me?.admin) redirect(307, '/login');
    return { me };
};
```

Pages inside it call `api.admin.getUsers()` and the other admin endpoints. Every one of them answers 403 for anyone who is not an admin, whatever the frontend shows.
