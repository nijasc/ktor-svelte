@file:OptIn(ExperimentalSerializationApi::class)

package io.github.nijasc.ktor.svelte

import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.SerialInfo

@SerialInfo
@Target(AnnotationTarget.PROPERTY)
public annotation class Trim

@SerialInfo
@Target(AnnotationTarget.PROPERTY)
public annotation class Lowercase

@SerialInfo
@Target(AnnotationTarget.PROPERTY)
public annotation class EmptyAsNull
