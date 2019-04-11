package firebaseshr

import common.dyn

fun decodeMessage(
    msg: dynamic
) = decodeMessageData(msg.data)

fun decodeMessageData(
    data: dynamic
) = JSON.parse<dynamic>(data.json as String)

fun encodeMessageData(
    data: Any?
) = dyn {
    json = JSON.stringify(data)
}

