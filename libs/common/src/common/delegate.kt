package common

import kotlin.reflect.KProperty

private object UNINITIALIZED
class LazyDelegate<out T>(private val fn: (Any?, KProperty<*>) -> T) {

    private var value : Any? = UNINITIALIZED

    operator fun getValue(thisRef: Any?, property: KProperty<*>): T {
        if (value === UNINITIALIZED) {
            value = fn(thisRef, property)
        }
        return value.unsafeCast<T>()
    }

}

fun <T> lazyNamed(fn: (String) -> T) = LazyDelegate { _, p -> fn(p.name) }