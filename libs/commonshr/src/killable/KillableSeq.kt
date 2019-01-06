package killable


class KillableSeq(initial: () -> Unit = {}) : Killable {

    private var current = initial
    private var killed = false

    override fun kill() {
        if (!killed) {
            killed = true
            current()
            current = {}
        }
    }

    fun set(fn: () -> Unit) {
        if (killed) {
            fn()
        } else {
            current()
            current = fn
        }
    }

}

