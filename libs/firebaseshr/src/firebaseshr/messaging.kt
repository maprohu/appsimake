package firebaseshr

import common.obj
import commonshr.Lib
import org.w3c.workers.Client

external interface LibMessage {
    var appsimakeApp: String?
}

external interface LibMessageWithData<D>: LibMessage {
    var data: D
}

external interface MessageInterface: LibMessage {
    var json: String
}

fun decodeMessage(
    msg: dynamic
) = decodeMessageData(msg.data.unsafeCast<MessageInterface>())


class DecodedMessage(
    val lib: String,
    val data: dynamic
)

fun decodeMessageData(
    data: MessageInterface
) = DecodedMessage(
    lib = data.appsimakeApp!!,
    data = JSON.parse(data.json)
)

fun encodeMessageData(
    lib: Lib,
    data: Any?
) = obj<MessageInterface> {
    this.appsimakeApp = lib.name
    this.json = JSON.stringify(data)
}

fun <T> Client.postLibMessage(
    lib: Lib,
    data: T
) = postMessage(
    obj<LibMessageWithData<T>> {
        this.appsimakeApp = lib.name
        this.data = data
    }
)

