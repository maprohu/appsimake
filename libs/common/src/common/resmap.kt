package common

import kotlin.browser.window


external interface Resmap {
    val map : dynamic
    val modules : Array<dynamic>
}

// https://discuss.kotlinlang.org/t/js-interop-for-in-and-for-of-loop-of-dynamic-objects/7507/4
@Suppress("NOTHING_TO_INLINE")
inline fun objectKeys(json: dynamic) = js("Object").keys(json).unsafeCast<Array<String>>()

fun res(path: String): String {

    val resmaps = window.asDynamic().resmaps.unsafeCast<Resmap>()

    while (resmaps.modules.isNotEmpty()) {
        val module = resmaps.modules.asDynamic().shift()
        for (k in objectKeys(module)) resmaps.map[k] = module[k]
    }

    return resmaps.map[path] as String
}