package commonui.widget

import commonshr.*
import killable.KillSet
import killable.addedTo
import killable.seq
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import rx.Rx
import rx.Var

//typealias RxSlot<T> = Assign<RxItem<T>>
//typealias RxItem<T> = () -> ((KillSet) -> T)
//
//open class SingleProc(
//    val proc: () -> ProcOrElse = procOrElse().funs.constant
//)
//class SingleSlot(
//    val node: () -> Node? = { null },
//    proc: () -> ProcOrElse = procOrElse().funs.constant
//): SingleProc(proc) {
//    constructor(
//        node: Node?,
//        proc: ProcOrElse
//    ): this(
//        node.funs.constant,
//        proc.funs.constant
//    )
//}
//
//class SingleVar(
//    val node: Var<Node?> = Var(null),
//    val proc: Var<ProcOrElse> = Var(procOrElse())
//) {
//    val slot = SingleSlot(
//        { node() },
//        { proc() }
//    )
//}
//
//operator fun <T> RxSlot<T>.remAssign(v: T) = this(v.funs.ignore1<KillSet>().funs.constant)
//
//fun Factory.toSlot(): Slot {
//    val slotVar = SlotVar()
//    val factory = withSlot(slotVar.slot).visible
//
//    return { n ->
//        factory.apply {
//            when (n) {
//                is HTMLElement -> {
//                    n.applied
//                }
//                null -> {
//                    empty
//                }
//                else -> {
//                    object: ScreenNodeWrap(factory.parent) {
//                        override val node: Node = n
//                    }
//                }
//            }
//        }
//    }
//}
//
//fun singleSlot(
//    ks: KillSet,
//    slot: Hole,
//    proc: AssignProcOrElse
//) = rxSlot(
//    ks,
//    SingleSlot()
//) { iks, s ->
//    Rx { s.node() }.addedTo(iks).forEach(slot)
//    Rx { s.proc() }.addedTo(iks).forEach(proc)
//}
//
//fun <T> slots(
//    ks: KillSet,
//    proc: AssignProcOrElse,
//    initial: T,
//    fn: (T, (() -> ProcOrElse) -> Unit, (Slot, () -> Node?) -> Unit) -> Unit
//) = rxSlot(
//    ks,
//    initial
//) { iks, s ->
//    fn(
//        s,
//        { pr ->
//            Rx { pr() }.addedTo(iks).forEach(proc)
//        },
//        { sl, n ->
//            Rx { n() }.addedTo(iks).forEach(sl)
//        }
//    )
//}
//
//fun <T: SingleProc> singleProc(
//    ks: KillSet,
//    proc: AssignProcOrElse,
//    initial: T,
//    fn: (T, (Slot, () -> Node?) -> Unit) -> Unit
//) = slots(
//    ks,
//    proc,
//    initial
//) { s, pr, sl ->
//    pr(s.proc)
//    fn(s, sl)
//}
//
//fun <T> rxSlot(
//    ks: KillSet,
//    initial: T,
//    activate: (KillSet, T) -> Unit
//): RxSlot<T> {
//    val rxv = Var(initial.funs.ignore1<KillSet>().funs.constant)
//    val kseq = ks.seq()
//    Rx { rxv()() }.addedTo(ks).forEach { fn ->
//        val iks = kseq.killSet()
//        activate(iks, fn(iks))
//    }
//
//    return  { item ->
//        rxv.now = item
//    }
//}

