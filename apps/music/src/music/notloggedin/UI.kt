//package music.notloggedin
//
//import bootstrap.m1
//import commonui.usericon.userIcon
//import commonshr.invoke
//import commonshr.plusAssign
//import commonui.widget.Factory
//import commonui.widget.ui
//import domx.invoke
//import domx.remAssign
//import fontawesome.bars
//import fontawesome.signInAlt
//import killable.KillSet
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
//                left.dropdown {
//                    button {
//                        m1p2
//                        secondary
//                        fa.bars
//                    }
//                    menu {
//                        database
//                        item(SignIn) {
//                            fa.signInAlt
//                            text %= "Sign In"
//                        }
//                    }
//                }
//                title %= "Music"
//                right.userIcon(kills, boot.userIcon).apply {
//                    node {
//                        cls.m1
//                    }
//                }
//            }
//        }
//        it += main.empty
//    }
//}
