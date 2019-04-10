package domx

import commonshr.identity
import killable.HasNoKill
import org.w3c.dom.get
import org.w3c.dom.set
import rx.Var
import rx.forEach
import rx.forEachLater
import kotlin.browser.localStorage

class LocalStorageValue<T>(
    private val key: String,
    private val encode: (T) -> String?,
    private val decode: (String?) -> T
) {
    var value: T
        get() = decode(localStorage[key])
        set(v) {
            encode(v).let { e ->
                if (e == null) {
                    localStorage.removeItem(key)
                } else {
                    localStorage[key] = e
                }
            }
        }

    companion object {
        fun boolean(key: String, default: Boolean = false) = LocalStorageValue<Boolean>(
            key,
            encode = { it.toString() },
            decode = { it?.toBoolean() ?: default }
        )
        fun stringOpt(key: String) = LocalStorageValue(
            key,
            encode = identity(),
            decode = identity()
        )
    }

    val rxv = Var(value).apply {
        forEachLater(HasNoKill) {
            value = it
        }
    }
}
