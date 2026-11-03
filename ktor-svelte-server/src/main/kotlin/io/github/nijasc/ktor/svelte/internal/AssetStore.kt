package io.github.nijasc.ktor.svelte.internal

import java.io.InputStream
import java.nio.file.Files
import java.nio.file.LinkOption
import java.nio.file.Path
import java.security.MessageDigest
import kotlin.io.path.fileSize
import kotlin.io.path.inputStream
import kotlin.io.path.invariantSeparatorsPathString
import kotlin.io.path.isDirectory
import kotlin.io.path.isRegularFile
import kotlin.io.path.readBytes
import kotlin.io.path.relativeTo

private const val MANIFEST_RESOURCE = "ktor-svelte/manifest.json"
private const val PUBLIC_RESOURCE_ROOT = "ktor-svelte/public"

internal fun isHiddenAsset(path: String): Boolean = path.split('/').any { it.startsWith(".") && it != ".well-known" }

internal interface AssetStore {
    fun manifest(): Manifest?

    fun open(path: String): InputStream?
}

internal class ClasspathAssetStore(
    private val classLoader: ClassLoader,
) : AssetStore {
    private val cachedManifest: Manifest? by lazy {
        classLoader
            .getResourceAsStream(MANIFEST_RESOURCE)
            ?.use { stream -> Manifest.parse(stream.readBytes().decodeToString()) }
    }

    override fun manifest(): Manifest? = cachedManifest

    override fun open(path: String): InputStream? = classLoader.getResourceAsStream("$PUBLIC_RESOURCE_ROOT/$path")
}

internal class DirectoryAssetStore(
    private val root: Path,
    private val rescanOnEveryRead: Boolean,
) : AssetStore {
    private val cachedManifest: Manifest? by lazy { scan() }

    override fun manifest(): Manifest? = if (rescanOnEveryRead) scan() else cachedManifest

    override fun open(path: String): InputStream? {
        val file = root.resolve(path).normalize()
        return if (file.startsWith(root.normalize()) && file.isRegularFile(LinkOption.NOFOLLOW_LINKS)) file.inputStream() else null
    }

    private fun scan(): Manifest? {
        if (!root.isDirectory()) return null
        val all =
            Files.walk(root).use { paths ->
                paths
                    .filter { it.isRegularFile(LinkOption.NOFOLLOW_LINKS) }
                    .map { it.relativeTo(root).invariantSeparatorsPathString }
                    .toList()
                    .filterNot(::isHiddenAsset)
                    .toSet()
            }
        if (all.none { it.endsWith(".html") }) return null
        val files =
            all
                .filterNot { path -> isEncodedVariant(path, all) }
                .associateWith { path -> entryFor(path, all) }
        return Manifest(files)
    }

    private fun entryFor(
        path: String,
        all: Set<String>,
    ): ManifestEntry {
        val file = root.resolve(path)
        return ManifestEntry(
            size = file.fileSize(),
            hash = sha256(file),
            encodings =
                AssetEncoding.entries
                    .filter { encoding -> (path + encoding.fileSuffix) in all }
                    .associateWith { encoding -> root.resolve(path + encoding.fileSuffix).fileSize() },
        )
    }

    private fun isEncodedVariant(
        path: String,
        all: Set<String>,
    ): Boolean = AssetEncoding.entries.any { path.endsWith(it.fileSuffix) && path.removeSuffix(it.fileSuffix) in all }

    private fun sha256(file: Path): String =
        MessageDigest
            .getInstance("SHA-256")
            .digest(file.readBytes())
            .joinToString("") { "%02x".format(it) }
}
