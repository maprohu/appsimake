package firebase.storage

inline val StringFormat.Companion.RAW: StringFormat get() = "RAW".asDynamic().unsafeCast<StringFormat>()
inline val StringFormat.Companion.BASE64: StringFormat get() = "BASE64".asDynamic().unsafeCast<StringFormat>()
inline val StringFormat.Companion.BASE64URL: StringFormat get() = "BASE64URL".asDynamic().unsafeCast<StringFormat>()
inline val StringFormat.Companion.DATA_URL: StringFormat get() = "DATA_URL".asDynamic().unsafeCast<StringFormat>()
