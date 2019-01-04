package common

import kotlin.properties.ReadOnlyProperty
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KClass
import kotlin.reflect.KProperty

inline fun dyn() = js("{}")
inline fun <T> obj() = dyn().unsafeCast<T>()
inline fun dyn(fn: dynamic.() -> Unit) = (dyn() as Any?).apply(fn)
inline fun <T> obj(fn: T.() -> Unit) = obj<T>().apply(fn)

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


class Dyn<T>(private val o: dynamic) : ReadWriteProperty<Any, T> {
    override fun setValue(thisRef: Any, property: KProperty<*>, value: T) { o[property.name] = value }
    override fun getValue(thisRef: Any, property: KProperty<*>): T = o[property.name] as T
}

class Binder<T>(
    private val o: dynamic,
    private val init : (String) -> Unit
) {
    operator fun provideDelegate(
        thisRef: Any,
        prop: KProperty<*>
    ): ReadWriteProperty<Any, T> {
        init(prop.name)
        return Dyn(o)
    }
}

abstract class Wrap(o: dynamic) {

    val wrapped = o ?: obj()

    private val propInit : (String, Any?) -> Unit =
        if (o != null) { { _, _ -> } }
        else { { n, v -> wrapped[n] = v } }

    protected fun <T> dyn() = Dyn<T>(wrapped)
    protected fun <T> dyn(v: T) = Binder<T>(wrapped) { propInit(it, v) }

    val type : String by dyn(this::class.simpleName!!)

}

@Suppress("UNUSED_PARAMETER")
inline fun <T : Any> jsNew(
    constr: JsClass<T>,
    param: dynamic
) : T = js("new constr(param)") as T

// waiting for KClass.sealedSubclasses to be implemented in KotlinJS
fun <T> wrapper(vararg classes: KClass<*>) : (dynamic) -> T {
    val typeMap =
        classes
            .map { it.simpleName!! to it.js }
            .toMap()

    return { d ->
        typeMap
            .getValue(d.type as String)
            .let { jsNew(it, d) as T }
    }
}

