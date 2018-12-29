package common

import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

fun <T> obj() = js("{}").unsafeCast<T>()
fun <T> obj(fn: T.() -> Unit) = obj<T>().apply(fn)

class NamedDelegate<T>(
    private val init : (String) -> T
) {
    operator fun provideDelegate(
        thisRef: Nothing?,
        prop: KProperty<*>
    ): ReadOnlyProperty<Nothing?, T> {
        val value = init(prop.name)
        return object : ReadOnlyProperty<Nothing?, T> {
            override fun getValue(thisRef: Nothing?, property: KProperty<*>): T = value
        }
    }
}

fun <T> named(fn: (String) -> T) = NamedDelegate(fn)
