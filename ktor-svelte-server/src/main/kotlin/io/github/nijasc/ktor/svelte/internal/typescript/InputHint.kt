package io.github.nijasc.ktor.svelte.internal.typescript

internal class InputHint(
    val autocomplete: String?,
    val type: String? = null,
)

private val NAME_HINTS: Map<String, InputHint> =
    buildMap {
        listOf("email", "emailaddress", "mail").forEach { put(it, InputHint("email", "email")) }
        listOf("password", "currentpassword").forEach { put(it, InputHint("current-password", "password")) }
        listOf("newpassword", "passwordrepeat", "repeatpassword", "confirmpassword", "passwordconfirmation").forEach {
            put(it, InputHint("new-password", "password"))
        }
        listOf("name", "fullname", "displayname").forEach { put(it, InputHint("name")) }
        listOf("givenname", "firstname", "forename").forEach { put(it, InputHint("given-name")) }
        listOf("familyname", "lastname", "surname").forEach { put(it, InputHint("family-name")) }
        listOf("username", "login", "loginname").forEach { put(it, InputHint("username")) }
        listOf("phone", "phonenumber", "tel", "telephone", "mobile", "mobilephone").forEach { put(it, InputHint("tel", "tel")) }
        listOf("street", "streetaddress", "address", "addressline").forEach { put(it, InputHint("street-address")) }
        listOf("postalcode", "postcode", "zip", "zipcode").forEach { put(it, InputHint("postal-code")) }
        listOf("city", "town", "locality").forEach { put(it, InputHint("address-level2")) }
        listOf("country", "countryname").forEach { put(it, InputHint("country-name")) }
        listOf("organization", "organisation", "company").forEach { put(it, InputHint("organization")) }
        listOf("birthday", "birthdate", "dateofbirth").forEach { put(it, InputHint("bday")) }
        listOf("url", "website", "homepage").forEach { put(it, InputHint("url", "url")) }
        listOf("onetimecode", "otp", "verificationcode").forEach { put(it, InputHint("one-time-code")) }
    }

private val FORMAT_HINTS: Map<String, InputHint> =
    mapOf(
        "email" to InputHint("email", "email"),
        "uri" to InputHint("url", "url"),
        "phone" to InputHint("tel", "tel"),
        "strong-password" to InputHint("new-password", "password"),
    )

internal fun inputHint(
    property: String,
    format: String?,
): InputHint? {
    val byName = NAME_HINTS[property.filter { it.isLetterOrDigit() }.lowercase()]
    val byFormat = format?.let(FORMAT_HINTS::get)
    return when {
        byFormat == null -> byName
        byName == null -> byFormat
        else -> InputHint(byFormat.autocomplete ?: byName.autocomplete, byFormat.type ?: byName.type)
    }
}
