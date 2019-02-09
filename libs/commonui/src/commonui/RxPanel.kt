package commonui

import bootstrap.flexCenter
import bootstrap.flexGrow1
import bootstrap.setupFullScreen
import bootstrap.spinnerBorder
import common.None
import common.Optional
import common.Some
import common.replaceWith
import commonlib.doc
import commonshr.invoke
import domx.cls
import domx.div
import domx.invoke
import killable.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.SendChannel
import kotlinx.coroutines.launch
import org.w3c.dom.Element
import org.w3c.dom.Node
import rx.Rx
import rx.RxIface
import rx.Var
import kotlin.browser.document



fun <T> Assign<T>.first(trigger: Trigger) = { t:T ->
    trigger()
    this(t)
}

typealias SetPanel = Assign<Node>

interface HasNode {
    val node: Node
    val slot get() = node.widget
}
interface HasElement: HasNode {
    override val node: Element
    val cls get() = node.cls
}

fun <T: HasNode> T.appendTo(parent: Node) = apply {
    parent.appendChild(node)
}
fun <T: HasNode> T.setTo(parent: Slot) = apply {
    parent %= node
}
fun <T: Node> T.setTo(parent: Slot) = apply {
    parent %= this
}
open class NodeWrap(
    override val node: Node
): HasNode
operator fun SetPanel.remAssign(node: HasNode) { this %= node.node }

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
//typealias SetSubHandle = Assign<SubHandle>

fun SetProc.toSetProcOrElse(default: Proc = proc()): AssignProcOrElse = { p ->
    this %= p.with(default)
}

typealias AddProcOrElse = Add<ProcOrElse>

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


fun AddProcOrElse.process(msg: Any, fn: suspend () -> Unit) = this(procOrElse(msg, fn))

object Back

fun back(fn: suspend () -> Unit): ProcOrElse = procOrElse(Back, fn)

typealias Inbox = SendChannel<Any>
class LoopControl(
    val proc: SetProc,
    val inbox: Inbox
)

open class InboxWrap(
    override val inbox: Inbox
): HasInbox


operator fun <T> SendChannel<T>.plusAssign(msg: T) { this.offer(msg) }

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

fun AddProcOrElse.addProcAssign() = commonui.procVar().addedTo(this).assign
fun ProcOrElseList.addProcAssign() = add.addProcAssign()

fun AssignProcOrElse.assignProcAdd() = procOrElses().assignedTo(this).add

fun rxProc(ks: KillSet, fn: () -> ProcOrElse): ProcOrElse {
    val rxv = Rx { fn() }.addedTo(ks)

    return { e, els ->
        rxv.now(e, els)
    }
}
fun <T: Any> rxProcIf(ks: KillSet, rxv: RxIface<T?>, fn: (T) -> ProcOrElse): ProcOrElse {
    return rxProc(ks) {
        rxv().let { us ->
            if (us == null) {
                procOrElse()
            } else {
                fn(us)
            }
        }
    }
}

class AsyncHolder<T>(initial: Optional<T> = None) {
    constructor(initial: T): this(Some(initial))
    internal var opt = initial
    val value get() = opt.get()
}
fun <T> Inbox.async(ks: KillSet, fn: suspend () -> T): AsyncHolder<T> {
    val msg = AsyncHolder<T>()
    GlobalScope.launch {
        msg.opt = Some(fn())
        this@async += msg
    }.addedTo(ks)
    return msg
}

infix fun <T> AsyncHolder<T>.processedBy(fn: suspend (T) -> Unit): ProcOrElse {
    return procOrElse(this) {
        fn(this.value)
    }
}
fun <T> AddProcOrElse.processOnce(kills: KillSet, msg: T, inbox: Inbox, fn: ProcT<T>) {
    val tks = kills.killables()
    tks += this(
        AsyncHolder(msg).also {
            inbox += it
        }.processedBy {
            fn(it)
            tks.kill()
        }
    )
}
fun <T> Inbox.channel(ks: KillSet, ch: ReceiveChannel<T>, fn: ProcT<T>): ProcOrElse {
    val procs = ProcOrElseList()
    GlobalScope.launch {
        for (t in ch) {
            procs.add.processOnce(ks, t, this@channel, fn)
        }
    }
    return procs.proc
}
fun <T> Inbox.rx(ks: KillSet, fnx: () -> T, fn: ProcT<T>): ProcOrElse = rx(ks, Rx { fnx() }.addedTo(ks), fn)

fun <T> Inbox.rx(ks: KillSet, ch: RxIface<T>, fn: ProcT<T>): ProcOrElse {
    val procs = ProcOrElseList()
    ch.forEach { t ->
        procs.add.processOnce(ks, t, this, fn)
    }.addedTo(ks)
    return procs.proc
}
