package tictactoe

//import bootstrap.*
//import common.obj
//import common.removeFromParent
//import commonfb.FcmControl
//import commonui.screenLayout
//import domx.*
//import firebase.firestore.setOptionsMerge
//import fontawesome.copy
//import fontawesome.fa
//import fontawesome.fas
//import killable.Killables
//import org.w3c.dom.HTMLElement
//import rx.Rx
//import styles.pointerEventsNone
//import tictactoelib.Player
//import kotlin.browser.document
//import kotlin.browser.window
//
//fun HTMLElement.toggleNotificationButton(
//    killables: Killables,
//    fcmControl: FcmControl
//) {
//    flexRow()
//    val fcmState = Rx { fcmControl.enabled() }
//    killables += fcmState
//    flexAlignItemsCenter()
//    input {
//        cls.pointerEventsNone
//        margin1()
//        type = "checkbox"
//        fcmState.forEach {
//            checked = it == true
//        }
//        rxDisplay { fcmState() != null }
//    }
//    div {
//        spinnerBorderSm()
//        rxDisplay { fcmState() == null }
//    }
//    div {
//        margin1()
//        innerText = "Send me notifications"
//    }
//    clickEvent {
//        fcmControl.toggle { console.log(it) }
//    }
//}
//
//fun PlayerActiveWaiting.waitingUI() : () -> Unit {
//    val killables = Killables()
//    control.appCtx.root.newRoot {
//        screenLayout(killables) {
//            top {
//                ticTacToe()
//                leftButton {
//                    innerText = "Cancel"
//                    clickEvent {
//                        control.playerRef.set(
//                            Player().apply { active.cv = false }.props.merge(),
//                            setOptionsMerge()
//                        )
//                    }
//                }
//            }
//            main {
//                flexColumn()
//                div {
//                    padding2()
//                    flex()
//                    flexGrow1()
//                    flexCenter()
//                    column {
//                        flexAlignItemsCenter()
//                        span {
//                            margin1()
//                            innerText = "Waiting for opponent..."
//                        }
//                        div {
//                            padding1()
//                            btn()
//                            btnPrimary()
//                            toggleNotificationButton(
//                                killables,
//                                control.loggedInCtx.fcmControl
//                            )
//                        }
//                    }
//                }
//
//                row {
//                    cls {
//                        flexFixedSize()
//                    }
//                    padding1()
//                    input {
//                        padding1()
//                        margin1()
//                        flexGrow1()
//                        value = window.location.href
//                        readOnly = true
//                    }
//                    btnButton {
//                        btnSecondary()
//                        margin1()
//                        cls.fa.copy
//                        clickEvent {
//                            document.textarea {
//                                value = window.location.href
//                                document.body!!.appendChild(this)
//                                select()
//                                document.execCommand("copy")
//                                removeFromParent()
//                            }
//                        }
//                    }
//                }
//            }
//        }
//    }
//    return { killables.kill() }
//}

