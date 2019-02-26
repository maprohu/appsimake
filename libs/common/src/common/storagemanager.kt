package common

import org.w3c.dom.Navigator
import kotlin.browser.window
import kotlin.js.Promise

external interface NavigatorWithStorage {

    val storage: StorageManager

}

inline val Navigator.withStorage get() = unsafeCast<NavigatorWithStorage>()
inline val Navigator.storage get() = withStorage.storage

// https://developer.mozilla.org/en-US/docs/Web/API/StorageManager
external interface StorageManager {

    // https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate
    fun estimate(): Promise<StorageEstimate>

    // https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist
    fun persist(): Promise<Boolean>

    // https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persisted
    fun persisted(): Promise<Boolean>

}

// https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate
external interface StorageEstimate {

    val quota: Long
    val usage: Long

}

val isStorageManagerSupported by lazy {
    window.navigator.asDynamic().storage != null
}
