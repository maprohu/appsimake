package commonshr

typealias Assign<T> = (T) -> Unit
typealias Callback<T> = (T) -> Unit
typealias OptAssign<T> = Assign<T?>

@Suppress("NOTHING_TO_INLINE")
inline operator fun <T> Assign<T>.remAssign(value: T) = this(value)

typealias Trigger = () -> Unit
typealias AddRemove<T> = (T) -> Trigger

typealias AsyncSetter<T> = suspend (T) -> Unit
suspend operator fun <T> AsyncSetter<T>.remAssign(v: T) { this(v) }

class Funs<T> {
    @Suppress("NOTHING_TO_INLINE")
    inline fun <P1> ignore1() = { _:P1 -> value }
}
inline val <T> T.funs get() = this.unsafeCast<Funs<T>>()
inline val <T> Funs<T>.value get() = this.unsafeCast<T>()
inline val <T> Funs<T>.constant get() = { value }

inline val <O> (() -> O).ignoreThis: Any?.() -> O get() = { this@ignoreThis() }
inline val <I, O> ((I) -> O).ignoreThis: Any?.(I) -> O get() = { i -> this@ignoreThis(i) }

fun Trigger.once(): Trigger {
    var triggered = false

    return {
        if (!triggered) {
            triggered = true
            this()
        }
    }
}

fun <T> Assign<T>.first(trigger: Trigger) = { t:T ->
    trigger()
    this(t)
}

infix fun Trigger.with(trigger: Trigger): Trigger = {
    this()
    trigger()
}


operator fun <T> AddRemove<T>.plusAssign(trigger: T) { this(trigger) }

