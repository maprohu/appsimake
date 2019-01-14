package common

interface State1<in I, out O> {
    operator fun invoke(input: I) : Pair<State1<I, O>?, O>
}

interface State0<out O> {
    operator fun invoke() : Pair<State0<O>?, O>
}

interface AsyncState0<out O> {
    suspend operator fun invoke() : Pair<AsyncState0<O>?, O>
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

fun <O> asyncState0(fn: () -> Pair<AsyncState0<O>?, O>) : AsyncState0<O> {
    return object : AsyncState0<O> {
        override suspend fun invoke() = fn()
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

class AsyncStateMachine0<O>(initial: AsyncState0<O>) {

    internal var state = initial

    suspend fun process(): O {
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



abstract class State<in I, S: State<I, S>> {

    open fun enter() : () -> Unit = {}
    abstract fun process(input: I) : S?

}

class StateMachine<I, S: State<I, S>>(
    private var state: S
) {
    private var destroy : () -> Unit = state.enter()

    fun update(input: I) {
        val nextState = state.process(input)

        if (nextState != null) {
            destroy()
            state = nextState
            destroy = state.enter()
        }
    }

    private fun alreadyShutdown() : Nothing {
        throw RuntimeException("state machine already shut down")
    }

    private inner class AlreadyShutdown : State<I, S>() {
        override fun process(input: I): S? = alreadyShutdown()
    }

    fun shutdown() {
        destroy()
        destroy = { alreadyShutdown() }
        state = AlreadyShutdown().unsafeCast<S>()
    }

}


