package io.github.nijasc.ktor.svelte

import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.SerializationException
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import java.math.BigDecimal

internal const val DECIMAL_SERIAL_NAME = "io.github.nijasc.ktor.svelte.Decimal"

public object DecimalSerializer : KSerializer<BigDecimal> {
    override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor(DECIMAL_SERIAL_NAME, PrimitiveKind.STRING)

    override fun serialize(
        encoder: Encoder,
        value: BigDecimal,
    ) {
        encoder.encodeString(value.toPlainString())
    }

    override fun deserialize(decoder: Decoder): BigDecimal {
        val text = decoder.decodeString()
        return text.toBigDecimalOrNull() ?: throw SerializationException("'$text' is not a decimal number such as 12.50.")
    }
}

public typealias Decimal =
    @Serializable(with = DecimalSerializer::class)
    BigDecimal
