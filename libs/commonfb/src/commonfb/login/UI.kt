//package commonfb.login
//
//import bootstrap.*
//import commonfb.login.Bind
//import commonshr.*
//import commonui.widget.*
//import domx.*
//import fontawesome.*
//import killable.KillSet
//import org.w3c.dom.HTMLElement
//import kotlin.browser.document
//
//fun UI(
//    kills: KillSet,
//    top: Factory,
//    main: Factory,
//    bind: Bind
//) = with(bind) {
//    ui {
//        it += with(top) {
//            topbar {
//                alignItemsCenter
//                left.button(Back) {
//                    m1p2
//                    secondary
//                    fa.chevronLeft
//                }
//                middle {
//                    h5 {
//                        cls.m1
//                        innerText = "Signing In"
//                    }
//                }
//            }
//        }
//        it += with(main) {
//            wraps.div {
//                cls {
//                    p1
//                    flexGrow1
//                    column()
//                    alignItemsCenter
//                }
//                column {
//                    fun butt(faIcon: FaIcon, label: String, msg: Any): Button {
//                        return widget.insert.button(msg) {
//                            primary
//                            cls {
//                                m1
//                                p1
//                                row()
//                                alignItemsCenter
//                            }
//                            icon {
//                                cls {
//                                    m1
//                                    fa(faIcon) {
//                                        fw
//                                    }
//                                }
//                            }
//
//                            text {
//                                cls {
//                                    m1
//                                }
//                                innerText = label
//                            }
//                        }
//                    }
//                    butt(FaIcon.faBrands { google }, "Sign in with Google", Google)
////                butt(FaIcon.fa { at }, "Sign in with email", Email)
//                    butt(FaIcon.fa { user }, "Continue as guest", Guest)
//                }
//            }
//        }
//    }
//}
