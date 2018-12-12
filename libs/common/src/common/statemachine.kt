package common

interface State1<in I, out O> {
    operator fun invoke(input: I) : Pair<State1<I, O>?, O>
}

interface State0<out O> {
    operator fun invoke() : Pair<State0<O>?, O>
}

fun <I, O> state1(fn: (I) -> Pair<State1<I, O>?, O>) : State1<I, O> {
    return object : State1<I, O> {
        override fun invoke(input: I): Pair<State1<I, O>?, O> = fn(input)
    }
}

fun <O> state0(fn: () -> Pair<State0<O>?, O>) : State0<O> {
    return object : State0<O> {
        override fun invoke(): Pair<State0<O>?, O> = fn()
    }
}

class StateMachine1<I, O>(initial: State1<I, O>) {

    internal var state = initial

    fun process(input: I): O {
        val out = state(input)
        out.first?.let { state = it }
        return out.second
    }
}

class StateMachine0<O>(initial: State0<O>) {

    internal var state = initial

    fun process(): O {
        val out = state()
        out.first?.let { state = it }
        return out.second
    }
}

class LazySM0<T>(fn: () -> T) {

    internal val sm = StateMachine0(
        state0 {
            val v = fn()

            state0 {
                null to v
            } to v
        }
    )

}

