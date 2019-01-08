package killable


class KillableSeq(initial: Killable = Killable.empty) : Killable {

    private var current : Killable = initial
    private var killed = false

    override fun kill() {
        if (!killed) {
            killed = true
            current()
            current = Killable.empty
        }
    }

    fun set(k: Killable) {
        if (killed) {
            k.kill()
        } else {
            current()
            current = k
        }
    }
    fun set(fn: () -> Unit) = set(Killable.once(fn))

    operator fun plusAssign(fn: () -> Unit) = set(fn)
    operator fun plusAssign(fn: Killable) = set(fn)
    fun clear() = set(Killable.empty)

    fun killables() = Killables().also { set(it) }
    fun seq() = KillableSeq().also { set(it) }

}

