package killable

import common.Listeners
import commonshr.Trigger

//interface Killable {
//    fun kill()
//
//    companion object {
//        fun once(fn: () -> Unit) = OnceKillable(fn)
//        fun of(fn: () -> Unit) = object : Killable {
//            override fun kill() {
//                fn()
//            }
//        }
//
//        val empty = object : Killable {
//            override fun kill() {}
//        }
//    }
//
//    operator fun plus(k : Killable): Killable = of {
//        kill()
//        k.kill()
//    }
//
//}

//@Suppress("NOTHING_TO_INLINE")
//inline fun Killable.toTrigger(): Trigger = { kill() }
//
//fun <K: Killable> K.addedTo(killables: KillSet): K {
//    killables.add(this)
//    return this
//}
//
//fun <K: Killable> K.addedTo(killables: Killables): K {
//    killables.add(this)
//    return this
//}
//
//class OnceKillable(private val fn: () -> Unit) : Killable {
//    private var killed = false
//    override fun kill() {
//        if (!killed) {
//            killed = true
//            fn()
//        }
//    }
//
//}
//
//operator fun Killable.invoke() = kill()
//
//
//fun Listeners.add(killable: Killable): () -> Unit {
//    return this.add { killable.kill() }
//}

class KillableValue<T>(
    val value: T,
    val kill: Trigger
)