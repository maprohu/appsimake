package commonui

//import commonshr.Assign
//import commonshr.Trigger
//import commonui.widget.AssignProcOrElse
//import commonui.widget.Inbox
//import commonui.widget.ProcOrElse
//import commonui.widget.procOrElse
//import domx.div
//import org.w3c.dom.Node
//import kotlin.browser.document


//class PageOut(
//    val node: Node,
//    val kill: Trigger = {},
//    val proc: ProcOrElse = procOrElse()
//)
//
//class PageIn(
//    val inbox: Inbox,
//    val back: Trigger
//)
//
//typealias SetPageOut = Assign<PageOut>
//
//class NodeSlot(
//    val node: SetPageOut
//)
//fun runNode(
//    node: Node,
//    proc: AssignProcOrElse
//): SetPageOut {
//    val panel = runPanel(node)
//
//    var current = PageOut(
//        node = node
//    )
//
//    return { po ->
//        current.kill()
//        current = po
//        panel %= current.node
//        proc %= current.proc
//    }
//}

//fun bodyPage(proc: AssignProcOrElse): SetPageOut = runNode(document.body!!.div, proc)


//class PageSlot(
//    val node: (Slot) -> Unit,
//    val page: SetPageOut
//) {
//}
//
//class SubPages(
//    val add: () -> PageSlot,
//    val proc: ProcOrElse,
//    val kill: Trigger
//)
//
//infix fun SubPages.with(page: PageOut) = PageOut(
//    node = page.node,
//    proc = proc with page.proc,
//    kill = kill with page.kill
//)

//fun subPages(): SubPages {
//    val procs = ProcOrElseList()
//
//
//
//    return SubPages(
//        add = {
//
//        }
//
//    )
//}

