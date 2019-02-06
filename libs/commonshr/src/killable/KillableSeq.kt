package killable


class KillableSeq private constructor(
    private var current: Killable = Killable.empty,
    internal val onKill: Killables
) : Killable by onKill {

    constructor(initial: Killable = Killable.empty): this(initial, Killables())

    private var killed = false

    init {
        onKill += {
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

    val assign: Assign<Trigger> = { t -> set(t) }

    operator fun remAssign(fn: Trigger) = set(fn)
    operator fun remAssign(fn: Killable) = set(fn)
    operator fun plusAssign(fn: () -> Unit) = set(fn)
    operator fun plusAssign(fn: Killable) = set(fn)
    fun clear() = set(Killable.empty)

    fun killables() = Killables().also { set(it) }
    fun seq() = KillableSeq().also { set(it) }
    fun killSet() = Killables().also { set(it) }.killSet

}

