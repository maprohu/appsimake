package commonshr

import common.None
import common.Optional
import common.Some
import killable.Killable
import killable.Killables

class Counted<T>(
    private val create: (Killables) -> T
) {
    private var current: Optional<Holder> = None

    private inner class Holder(
        val value: T,
        val killable: Killable
    ) {
        var count = 0

        fun release() {
            count--

            if (count <= 0) {
                current = None
                killable.kill()
            }
        }
    }

    fun get(ks: Killables): T {
        return current.getOrElse {
            val k = Killables()
            Holder(
                create(k),
                k
            ).also {
                current = Some(it)
            }
        }.let { holder ->
            holder.count++

            ks += Killable.once {
                holder.release()
            }

            holder.value
        }
    }
}
