package music

import bootstrap.*
import common.obj
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import commonui.showClosable
import domx.*
import firebase.firestore.FieldValue
import firebase.firestore.docRef
import firebase.firestore.setOptionsMerge
import fontawesome.*
import indexeddb.clear
import indexeddb.put
import killable.Killables
import killable.addedTo
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import rx.rxClass
import kotlin.browser.window

//fun MusicCtx.home(
//    panel: RootPanel,
//    killables: Killables
//) {
//    panel.newRoot {
//        fun redisplay() {
//            panel.setRoot(this)
//        }
//
//        screenLayout(killables) {
//            top {
//                left {
//                    faButton(Fa.bars) {
//                        cls {
//                            m1
//                            btnSecondary
//                        }
//                        dataToggleDropdown()
//                    }
//                    div {
//                        cls {
//                            dropdownMenu
//                        }
//                        dropdownItemAnchor {
//                            icon.cls.fa.database
//                            text.innerText = "Database"
//                            anchor {
//                                clickEvent {
//                                    showClosable(
//                                        killables,
//                                        { ks, cl -> database(panel.sub(), ks, cl) },
//                                        ::redisplay
//                                    )
//                                }
//                            }
//                        }
//                    }
//                }
//                middleTitle {
//                    innerText = fbCtx.appCtx.title
//                }
//                right {
//                    cls {
//                        flexRow
//                        alignItemsCenter
//                    }
//                    transferStatusIndicator(onlineTasks, killables)
//
//                    onlineStatusButton(onlineTasks, killables) {
//                        cls.m1
//                    }
//                }
//            }
//
//            main {
//            }
//        }
//    }
//
//
//}