package commonfb

//import bootstrap.*
//import common.Optional
//import commonshr.invoke
//import commonui.RootPanel
//import commonui.ToolBar
//import commonui.faButton
//import commonui.screenLayout
//import domx.*
//import firebaseshr.HasFBProps
//import fontawesome.Fa
//import fontawesome.pen
//import killable.KillSet
//import org.w3c.dom.Element
//import org.w3c.dom.HTMLButtonElement
//import org.w3c.dom.HTMLDivElement
//import org.w3c.dom.Node
//import styles.scrollVertical
//
//data class ViewScreenConfig<T: HasFBProps<*>>(
//    val title: String,
//    val edit: (KillSet, RootPanel, T, () -> Unit) -> Unit,
//    val top: ToolBar.(ToolbarConfig) -> Unit = standardToolbar,
//    val view: HTMLDivElement.(ViewScreenState, T) -> Unit
//) {
//    companion object {
//
//        fun Node.editButton(
//            killables: KillSet,
//            edit: (KillSet) -> Unit
//        ): HTMLButtonElement {
//            return faButton(Fa.pen) {
//                cls {
//                    btnPrimary
//                }
//                clickEventSeq(killables) { ks, _ ->
//                    edit(ks)
//                }
//            }
//        }
//
//        fun ToolBar.leftMiddle(
//            title: String,
//            close: () -> Unit
//        ) {
//            backButton(close)
//            middleTitle {
//                innerText = title
//            }
//        }
//        data class ToolbarConfig(
//            val state: ViewScreenState,
//            val title: String,
//            val edit: (KillSet) -> Unit
//        )
//        val standardToolbar: ToolBar.(
//            config: ToolbarConfig
//        ) -> Unit = {
//            with(it) {
//                leftMiddle(title, state.close)
//                right {
//                    editButton(state.killables, edit).apply {
//                        cls.m1
//                    }
//                }
//            }
//        }
//
//
//
//    }
//}
//
//data class ViewScreenState(
//    val killables: KillSet,
//    val panel: RootPanel,
//    val redisplay: () -> Unit,
//    val close: () -> Unit
//)
//
//fun <T: HasFBProps<*>> ViewScreenConfig<T>.build(
//    killables: KillSet,
//    panel: RootPanel,
//    item: T,
//    close: () -> Unit
//) {
//
//    panel.newRoot {
//        fun displayViewer() {
//            panel.setRoot(this)
//        }
//        val state = ViewScreenState(
//            killables,
//            panel,
//            ::displayViewer,
//            close
//        )
//        screenLayout(killables) {
//            top {
//                this@build.top(
//                    this,
//                    ViewScreenConfig.Companion.ToolbarConfig(
//                        state,
//                        this@build.title
//                    ) { eks ->
//                        edit(eks, panel.sub(), item, ::displayViewer)
//                    }
//                )
//            }
//            main {
//                view(this, state, item)
//            }
//
//        }
//    }
//
//}
//
//
//fun Element.scrollPanel(fn: HTMLDivElement.() -> Unit): HTMLDivElement {
//    cls {
//        scrollVertical
//    }
//    return div {
//        cls {
//            p1
//        }
//        fn()
//    }
//}
//
//fun Node.viewFieldLabel(title: String) {
//    span {
//        cls {
//            m1
//            fontWeightBold
//        }
//        innerText = title
//    }
//}
//
//fun Node.viewTextField(ks: KillSet, label: String, fn: () -> Optional<String>) {
//    viewFieldLabel(label)
//    span {
//        cls.m1
//    }.rxTextOrEmpty(ks, fn)
//}