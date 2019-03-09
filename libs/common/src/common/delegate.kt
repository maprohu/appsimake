package common

//import kotlin.reflect.KProperty
//
//private object UNINITIALIZED
//class LazyDelegate<in O, out T>(private val fn: (O, KProperty<*>) -> T) {
//
//    private var value : Any? = UNINITIALIZED
//
//    operator fun getValue(thisRef: O, property: KProperty<*>): T {
//        if (value === UNINITIALIZED) {
//            value = fn(thisRef, property)
//        }
//        return value.unsafeCast<T>()
//    }
//
//}

//fun <T> lazyNamed(fn: (String) -> T) = LazyDelegate<Any?, T> { _, p -> fn(p.name) }
//fun <O, T> lazyThisNamed(fn: (String) -> T) = LazyDelegate { _, p -> fn(p.name) }
