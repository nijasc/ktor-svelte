package io.github.nijasc.ktor.svelte

import io.ktor.http.HttpStatusCode
import io.ktor.openapi.jsonSchema
import io.ktor.server.routing.Route
import io.ktor.server.routing.openapi.describe
import io.ktor.utils.io.ExperimentalKtorApi

@OptIn(ExperimentalKtorApi::class)
internal fun Route.describeMembers(): Route =
    describe {
        responses {
            HttpStatusCode.OK { schema = jsonSchema<List<Member>>() }
        }
    }
