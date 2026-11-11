package io.github.nijasc.ktor.svelte

import kotlinx.serialization.Serializable

@Serializable
public data class Page<T>(
    val items: List<T>,
    val next: String? = null,
)
