package commonshr

import common.None
import common.Optional
import common.Some
import killable.Killables

class Counted<T>(
    private val create: (Killables) -> T
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

    fun get(ks: Killables): T {
        return current.getOrElse {
            val k = Killables()
            Holder(
                create(k),
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
