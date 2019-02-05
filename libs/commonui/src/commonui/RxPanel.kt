package commonui

import bootstrap.flexCenter
import bootstrap.flexGrow1
import bootstrap.setupFullScreen
import bootstrap.spinnerBorder
import common.replaceWith
import domx.cls
import domx.div
import domx.invoke
import killable.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.SendChannel
import kotlinx.coroutines.launch
import org.w3c.dom.Node
import rx.Var
import kotlin.browser.document


typealias Setter<T> = (T) -> Unit

@Suppress("NOTHING_TO_INLINE")
inline operator fun <T> Setter<T>.remAssign(value: T) = this(value)

fun <T> Setter<T>.first(trigger: Trigger) = { t:T ->
    trigger()
    this(t)
}

typealias SetPanel = Setter<Node>
fun runPanel(
    node: Node = run {
        setupFullScreen()
        document.body!!.div
    }
): SetPanel {
    val rxv = Var(node)

    rxv.onChange { old, new ->
        old.replaceWith(new)
    }

    return { n ->
        rxv.now = n
    }
}


typealias Proc = suspend (Any) -> Unit
typealias ProcOrElse = suspend (msg: Any, orElse: Proc) -> Unit
fun proc(): Proc = {}
fun procOrElse(): ProcOrElse = { e, els -> els(e) }
fun procOrElse(msg: Any, fn: suspend () -> Unit): ProcOrElse = { e, els ->
    when (e) {
        msg -> fn()
        else -> els(e)
    }
}
infix fun ProcOrElse.with(proc: Proc): Proc = { e -> this(e, proc) }
infix fun ProcOrElse.with(procOrElse: ProcOrElse): ProcOrElse = { e, els -> this(e) { e2 -> procOrElse(e2, els) } }

typealias SetProc = Setter<Proc>
typealias SetProcOrElse = Setter<ProcOrElse>
//typealias SetSubHandle = Setter<SubHandle>

fun SetProc.toSetProcOrElse(default: Proc = proc()): SetProcOrElse = { p ->
    this %= p.with(default)
}

class ProcOrElseSet {
    private val procs = mutableListOf<ProcOrElse>()

    val proc: ProcOrElse = { e, els ->
        val it = procs.iterator()

        suspend fun next() {
            if (it.hasNext()) {
                it.next()(e) { next() }
            } else {
                els(e)
            }
        }

        next()
    }

    operator fun plusAssign(proc: ProcOrElse) { procs += proc }
}

object Back

fun back(fn: suspend () -> Unit): ProcOrElse = procOrElse(Back, fn)

//operator fun SetSubHandle.remAssign(proc: ProcOrElse) { this %= SubHandle(proc) }
typealias Inbox = SendChannel<Any>
//typealias SubProc = (change: (SubHandle) -> Unit, other: Proc) -> suspend (Any) -> Unit
class LoopControl(
    val proc: SetProc,
    val inbox: Inbox
) {
//    fun loops(initial: SubHandle, default: Proc = {}): LoopsControl {
//        var current = initial
//
//        fun activate() {
//            proc %= current.proc with default
//            current.activate()
//        }
//
//        val handles : SetSubHandle = { sh ->
//            current.kill()
//            current = sh
//            activate()
//        }
//
//        val sub = {
//            activate()
//
//            LoopsControl(
//
//            )
//        }
//
//        return LoopsControl(
//            handles,
//            sub,
//            inbox
//        )
//    }
}

//class LoopsControl(
//    val handle: SetSubHandle,
//    val sub: () -> LoopsControl,
//    val inbox: SendChannel<Any>
//
//)

//class LoopsPanel(
//    val loops: LoopsControl,
//    val panel: SetPanel
//) {
//    val inbox = loops.inbox
//    val handle = loops.handle
//
//    fun sub(
//        node: Node,
//        proc: ProcOrElse
//    ): LoopsPanel {
//        return LoopsPanel(
//            LoopsControl(
//                inbox
//            ),
//            panel
//
//        )
//
//    }
//}

//data class SubHandle(
//    val activate: Trigger,
//    val proc: ProcOrElse = procOrElse(),
//    val kill: Trigger = {}
//) {
//    constructor(proc: ProcOrElse, killable: Killable): this(proc, killable.toTrigger())
//
//    companion object {
//        fun from(kills: KillSet, fn: (KillSet) -> ProcOrElse): SubHandle {
//            val ks = kills.killables()
//            return SubHandle(fn(ks.killSet), ks)
//        }
//    }
//}



operator fun <T> SendChannel<T>.plusAssign(msg: T) { this.offer(msg) }

class ProcVar(
    var proc: suspend (Any) -> Unit = {}
) {
    val setter: SetProc = { p -> proc = p }
}

fun runLoop(
    initial: Proc = {}
): LoopControl {
    val channel = Channel<Any>(Channel.UNLIMITED)
    val procVar = ProcVar(initial)

    runLoop(
        channel
    ) { e ->
        procVar.proc(e)
    }

    return LoopControl(
        procVar.setter,
        channel
    )
}


fun runLoop(
    channel: ReceiveChannel<Any>,
    proc: suspend (Any) -> Unit
) {
    GlobalScope.launch {
        for (e in channel) {
            proc(e)
        }
    }
}

fun ((Node) -> Unit).hourglass() {
    this(
        document.div {
            cls {
                flexGrow1
                flexCenter()
            }
            div {
                cls {
                    spinnerBorder
                }
            }
        }

    )
}

typealias Page = (loop: LoopControl, panel: SetPanel, kills: KillSet) -> ProcOrElse
typealias SubPage = (loop: LoopControl, panel: SetPanel, kills: KillSet, back: Trigger) -> Proc

typealias AsyncSetter<T> = suspend (T) -> Unit
suspend operator fun <T> AsyncSetter<T>.remAssign(v: T) { this(v) }

suspend fun <T> asyncKills(ks: KillSet, initial: T, fn: suspend (T) -> Trigger): AsyncSetter<T> {
    class State(
        val value: T,
        val kill: Trigger
    )
    suspend fun state(v: T): State {
        val vks = ks.killables()
        vks += fn(v)
        return State(v, vks.toTrigger())
    }
    var current = state(initial)

    return { v ->
        if (v != current.value) {
            current.kill()
            current = state(v)
        }
    }

}


class ProcOrElseVar private constructor(
    val proc: ProcOrElse,
    val set: SetProcOrElse
) {
    companion object {
        operator fun invoke(initial: ProcOrElse = procOrElse()): ProcOrElseVar {
            var proc: ProcOrElse = initial

            return ProcOrElseVar(
                proc = { e, els -> proc(e, els) },
                set = { p -> proc = p }
            )
        }
    }

    operator fun remAssign(proc: ProcOrElse) { set %= proc }
}

fun procVar() = ProcOrElseVar()
fun procSet() = ProcOrElseSet()

fun ProcOrElseSet.assignedTo(pvar: SetProcOrElse) = also { pvar %= proc }
fun ProcOrElseSet.assignedTo(pvar: ProcOrElseVar) = also { pvar %= proc }
fun ProcOrElseVar.addedTo(pset: ProcOrElseSet) = also { pset += proc }

fun ProcOrElseSet.addProcVar() = commonui.procVar().addedTo(this)
fun SetProcOrElse.assignProcSet() = commonui.procSet().assignedTo(this)

