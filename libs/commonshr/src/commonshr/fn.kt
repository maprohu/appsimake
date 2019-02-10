package commonshr

typealias Assign<T> = (T) -> Unit
typealias OptAssign<T> = Assign<T?>

@Suppress("NOTHING_TO_INLINE")
inline operator fun <T> Assign<T>.remAssign(value: T) = this(value)

typealias Trigger = () -> Unit
typealias AddRemove<T> = (T) -> Trigger

typealias AsyncSetter<T> = suspend (T) -> Unit
suspend operator fun <T> AsyncSetter<T>.remAssign(v: T) { this(v) }

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

