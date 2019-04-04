package common

import org.w3c.dom.Navigator
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget
import kotlin.browser.window

val Navigator.connection
    get() = asDynamic().connection.unsafeCast<NetworkInformation>()

// https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
external class NetworkInformation: EventTarget {

    val type: NetworkType
    val effectiveType: NetworkEffectiveType
    var onchange: ((Event) -> dynamic)?

}

@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
external interface NetworkType {
    companion object
}
inline val NetworkType.Companion.bluetooth get() = "bluetooth".unsafeCast<NetworkType>()
inline val NetworkType.Companion.cellular get() = "cellular".unsafeCast<NetworkType>()
inline val NetworkType.Companion.ethernet get() = "ethernet".unsafeCast<NetworkType>()
inline val NetworkType.Companion.none get() = "none".unsafeCast<NetworkType>()
inline val NetworkType.Companion.wifi get() = "wifi".unsafeCast<NetworkType>()
inline val NetworkType.Companion.wimax get() = "wimax".unsafeCast<NetworkType>()
inline val NetworkType.Companion.other get() = "other".unsafeCast<NetworkType>()
inline val NetworkType.Companion.unknown get() = "unknown".unsafeCast<NetworkType>()

@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
external interface NetworkEffectiveType {
    companion object
}
inline val NetworkEffectiveType.Companion.slow2g get() = "slow-2g".unsafeCast<NetworkEffectiveType>()
inline val NetworkEffectiveType.Companion.g2 get() = "2g".unsafeCast<NetworkEffectiveType>()
inline val NetworkEffectiveType.Companion.g3 get() = "3g".unsafeCast<NetworkEffectiveType>()
inline val NetworkEffectiveType.Companion.g4 get() = "4g".unsafeCast<NetworkEffectiveType>()

