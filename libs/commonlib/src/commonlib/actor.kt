package commonlib

import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch


abstract class Actor<Event>(
    killables: Killables
) {

    abstract inner class Iter
    val Same = object : Iter() {}
    inner class Change(
        val next: Loop
    ): Iter()


    val channel = Channel<Event>()

    fun post(e: Event) {
        GlobalScope.launch {
            channel.send(e)
        }
    }


    inner class Mixin(
        val process: suspend (e: Event) -> Iter?
    )
    inner class Loop(
        val process: suspend (e: Event) -> Iter
    )

    fun mixin(fn: suspend (Event) -> Iter?) = Mixin(fn)
    fun loop(fn: suspend (Event) -> Iter) = Loop(fn)

    infix fun Mixin.or(
        fn: suspend (Event) -> Iter?
    ): Mixin = mixin { e:Event ->
        this.process(e) ?: fn(e)
    }
    infix fun Mixin.or(
        fn: Mixin
    ): Mixin = this or fn.process

    infix fun Mixin.or(
        fn: suspend (Event) -> Iter
    ): Loop = loop { e:Event ->
        this.process(e) ?: fn(e)
    }
    infix fun Mixin.or(
        fn: Loop
    ): Loop = this or fn.process

    abstract val start: Loop

    init {
        GlobalScope.launch {
            var iter: Loop = start
            for (e in channel) {
                val next = iter.process(e)
                if (next is Change) {
                    iter = next.next
                }
            }
        }.let { j ->
            killables += { j.cancel() }
        }
    }
}