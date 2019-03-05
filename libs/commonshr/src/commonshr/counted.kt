package commonshr

import common.None
import common.Optional
import common.Some
import killable.*

class Counted<T>(
    private val create: (KillSet) -> T
) {
    private var current: Optional<Holder> = None

    private inner class Holder(
        val value: T,
        val killable: Trigger
    ) {
        var count = 0

        fun release() {
            count--

            if (count <= 0) {
                current = None
                killable()
            }
        }
    }

    fun get(ks: KillSet): T {
        return current.getOrElse {
            val k = Killables()
            Holder(
                create(k.killSet),
                k.kill
            ).also {
                current = Some(it)
            }
        }.let { holder ->
            holder.count++

            ks += {
                holder.release()
            }.once()

            holder.value
        }
    }
}

class RefCountMap<K, V>(
    val create: KillsApi.(K) -> V
) {
    private val map = mutableMapOf<K, RefCount<V>>()

    fun get(gks: KillSet, key: K): V {
        return map.getOrPut(key) {
            val iks = Killables()
            iks += { map -= key }
            val item = iks.create(key)
            RefCount(item, iks.kill)
        }.apply {
            count += 1
            gks += {
                count -= 1
                if (count == 0) {
                    kill()
                }
            }
        }.value
    }

    fun applyTo(key: K, fn: V.() -> Unit) {
        map[key]?.let { fn(it.value) }
    }

}

class RefCount<T>(
    val value: T,
    val kill: Trigger
) {
    var count = 0
}
