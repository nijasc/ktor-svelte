@file:OptIn(ExperimentalSerializationApi::class)

package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.validation.RulePreset
import io.github.nijasc.ktor.svelte.internal.validation.RulePresets
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.SerialInfo

public object Rule {
    @SerialInfo
    @Target(AnnotationTarget.PROPERTY)
    public annotation class Email

    @SerialInfo
    @Target(AnnotationTarget.PROPERTY)
    public annotation class WebAddress

    @SerialInfo
    @Target(AnnotationTarget.PROPERTY)
    public annotation class Phone

    @SerialInfo
    @Target(AnnotationTarget.PROPERTY)
    public annotation class Slug

    @SerialInfo
    @Target(AnnotationTarget.PROPERTY)
    public annotation class StrongPassword
}

internal fun presetOf(annotation: Annotation): RulePreset? =
    when (annotation) {
        is Rule.Email -> RulePresets.email
        is Rule.WebAddress -> RulePresets.webAddress
        is Rule.Phone -> RulePresets.phone
        is Rule.Slug -> RulePresets.slug
        is Rule.StrongPassword -> RulePresets.strongPassword
        else -> null
    }
