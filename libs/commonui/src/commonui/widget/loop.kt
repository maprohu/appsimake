package commonui.widget

import commonshr.AddRemove
import commonshr.Assign
import commonshr.plusAssign
import commonshr.remAssign
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch


typealias ProcT<T> = suspend (T) -> Unit
typealias Proc = ProcT<Any>
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

typealias SetProc = Assign<Proc>
typealias AssignProcOrElse = Assign<ProcOrElse>

fun SetProc.toSetProcOrElse(default: Proc = proc()): AssignProcOrElse = { p ->
    this %= p.with(default)
}

typealias AddProcOrElse = AddRemove<ProcOrElse>
fun AddProcOrElse.process(msg: Any, fn: suspend () -> Unit) = this(procOrElse(msg, fn))
fun <T> AddProcOrElse.envelope(marker: Msg<T>, fn: suspend (T) -> Unit) = this.invoke { e, els ->
    if (e is Envelope<*> && e.marker == marker) {
        fn(e.msg.unsafeCast<T>())
    } else {
        els(e)
    }
}

class ProcOrElseList {
    private val procs = mutableListOf<ProcOrElse>()

    private suspend fun next(
        iter: Iterator<ProcOrElse>,
        e: Any,
        els: Proc
    ) {
        if (iter.hasNext()) {
            val n = iter.next()
            n(e) { next(iter, e, els) }
        } else {
            els(e)
        }
    }

    val proc: ProcOrElse = { e, els ->
        val it = procs.iterator()

        next(it, e, els)
    }

    operator fun plusAssign(proc: ProcOrElse) { add(proc) }

    val add: AddProcOrElse = { proc ->
        procs += proc

        {
            procs -= proc
        }
    }

}

class ProcVar(
    var proc: suspend (Any) -> Unit = {}
) {
    val setter: SetProc = { p -> proc = p }
}

fun runLoop(
    channel: Channel<Any>
): SetProc {
    val procVar = ProcVar()

    runLoop(
        channel
    ) { e ->
        procVar.proc(e)
    }

    return procVar.setter
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

class ProcOrElseVar private constructor(
    val proc: ProcOrElse,
    val assign: AssignProcOrElse
) {
    companion object {
        operator fun invoke(initial: ProcOrElse = procOrElse()): ProcOrElseVar {
            var proc: ProcOrElse = initial

            return ProcOrElseVar(
                proc = { e, els -> proc(e, els) },
                assign = { p -> proc = p }
            )
        }
    }

    operator fun remAssign(proc: ProcOrElse) { assign %= proc }
}

fun procVar() = ProcOrElseVar()
fun procOrElses() = ProcOrElseList()

fun ProcOrElseList.assignedTo(pvar: AssignProcOrElse) = also { pvar %= proc }
fun ProcOrElseList.assignedTo(pvar: ProcOrElseVar) = also { pvar %= proc }
fun ProcOrElseVar.addedTo(pset: ProcOrElseList) = also { pset += proc }
fun ProcOrElseVar.addedTo(pset: AddProcOrElse) = also { pset += proc }

fun AddProcOrElse.addProcAssign() = procVar().addedTo(this).assign
fun ProcOrElseList.addProcAssign() = add.addProcAssign()

fun AssignProcOrElse.assignProcAdd() = procOrElses().assignedTo(this).add

