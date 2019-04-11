package firebaseshr

import common.dyn

fun decodeMessageData(
    data: dynamic
) = JSON.parse<dynamic>(data.json as String)

fun encodeMessageData(
    data: Any?
) = dyn {
    json = JSON.stringify(data)
}

