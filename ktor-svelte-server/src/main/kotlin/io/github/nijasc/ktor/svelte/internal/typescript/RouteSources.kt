package io.github.nijasc.ktor.svelte.internal.typescript

import io.ktor.server.routing.HttpMethodRouteSelector
import io.ktor.server.routing.PathSegmentConstantRouteSelector
import io.ktor.server.routing.PathSegmentOptionalParameterRouteSelector
import io.ktor.server.routing.PathSegmentParameterRouteSelector
import io.ktor.server.routing.PathSegmentTailcardRouteSelector
import io.ktor.server.routing.RoutingNode
import java.io.DataInputStream

internal data class SourceLocation(
    val file: String,
    val line: Int,
)

internal fun routeSources(root: RoutingNode): Map<String, SourceLocation> {
    val handlersGetter = RoutingNode::class.java.methods.firstOrNull { it.name.startsWith("getHandlers") && it.parameterCount == 0 }
    val locations = mutableMapOf<String, SourceLocation>()

    fun walk(
        node: RoutingNode,
        path: String,
        method: String?,
    ) {
        val selector = node.selector
        val nodePath =
            when (selector) {
                is PathSegmentConstantRouteSelector -> "$path/${selector.value}"
                is PathSegmentParameterRouteSelector -> "$path/${selector.prefix.orEmpty()}{${selector.name}}${selector.suffix.orEmpty()}"
                is PathSegmentOptionalParameterRouteSelector -> "$path/${selector.prefix.orEmpty()}{${selector.name}}${selector.suffix.orEmpty()}"
                is PathSegmentTailcardRouteSelector -> "$path/{${selector.name}...}"
                else -> path
            }
        val nodeMethod = (selector as? HttpMethodRouteSelector)?.method?.value ?: method
        if (nodeMethod != null && handlersGetter != null) {
            val handler = runCatching { (handlersGetter.invoke(node) as? List<*>)?.lastOrNull() }.getOrNull()
            handler?.let(::sourceOf)?.let { locations.putIfAbsent("$nodeMethod ${nodePath.ifEmpty { "/" }}", it) }
        }
        node.children.forEach { walk(it, nodePath, nodeMethod) }
    }
    walk(root, "", null)
    return locations
}

internal fun sourceOf(handler: Any): SourceLocation? {
    val type = handler.javaClass
    val bytes = type.classLoader?.getResourceAsStream(type.name.replace('.', '/') + ".class")?.use { it.readBytes() } ?: return null
    val info = runCatching { readClassInfo(bytes) }.getOrNull() ?: return null
    val file = info.sourceFile ?: return null
    val line = info.firstLine ?: return null
    val directory = type.packageName.replace('.', '/')
    return SourceLocation(if (directory.isEmpty()) file else "$directory/$file", line)
}

private class ClassInfo(
    val sourceFile: String?,
    val firstLine: Int?,
)

private fun readClassInfo(bytes: ByteArray): ClassInfo {
    val input = DataInputStream(bytes.inputStream())
    check(input.readInt() == 0xCAFEBABE.toInt())
    input.skipBytes(4)
    val utf8 = arrayOfNulls<String>(input.readUnsignedShort())
    var index = 1
    while (index < utf8.size) {
        when (val tag = input.readUnsignedByte()) {
            1 -> utf8[index] = input.readUTF()
            3, 4 -> input.skipBytes(4)
            5, 6 -> {
                input.skipBytes(8)
                index++
            }
            7, 8, 16, 19, 20 -> input.skipBytes(2)
            9, 10, 11, 12, 17, 18 -> input.skipBytes(4)
            15 -> input.skipBytes(3)
            else -> error("Unknown constant pool tag $tag")
        }
        index++
    }
    input.skipBytes(6)
    input.skipBytes(2 * input.readUnsignedShort())
    repeat(input.readUnsignedShort()) {
        input.skipBytes(6)
        skipAttributes(input)
    }
    var firstLine: Int? = null
    repeat(input.readUnsignedShort()) {
        input.skipBytes(2)
        val name = utf8[input.readUnsignedShort()]
        input.skipBytes(2)
        repeat(input.readUnsignedShort()) {
            val attribute = utf8[input.readUnsignedShort()]
            val length = input.readInt()
            if (name == "invokeSuspend" && attribute == "Code") {
                firstLine = firstLineOf(input, utf8)
            } else {
                input.skipBytes(length)
            }
        }
    }
    var sourceFile: String? = null
    repeat(input.readUnsignedShort()) {
        val attribute = utf8[input.readUnsignedShort()]
        val length = input.readInt()
        if (attribute == "SourceFile") sourceFile = utf8[input.readUnsignedShort()] else input.skipBytes(length)
    }
    return ClassInfo(sourceFile, firstLine)
}

private fun firstLineOf(
    input: DataInputStream,
    utf8: Array<String?>,
): Int? {
    input.skipBytes(4)
    input.skipBytes(input.readInt())
    input.skipBytes(8 * input.readUnsignedShort())
    var first: Int? = null
    repeat(input.readUnsignedShort()) {
        val attribute = utf8[input.readUnsignedShort()]
        val length = input.readInt()
        if (attribute == "LineNumberTable") {
            repeat(input.readUnsignedShort()) {
                input.skipBytes(2)
                val line = input.readUnsignedShort()
                first = minOf(first ?: line, line)
            }
        } else {
            input.skipBytes(length)
        }
    }
    return first
}

private fun skipAttributes(input: DataInputStream) {
    repeat(input.readUnsignedShort()) {
        input.skipBytes(2)
        input.skipBytes(input.readInt())
    }
}
