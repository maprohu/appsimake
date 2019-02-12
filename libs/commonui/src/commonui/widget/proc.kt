package commonui.widget

import common.None
import common.Optional
import common.Some
import commonshr.plusAssign
import killable.KillSet
import killable.addedTo
import killable.killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch
import rx.Rx
import rx.RxIface

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
