//package music.loggedin
//
//import bootstrap.m1
//import commonui.usericon.userIcon
//import commonshr.*
//import commonui.widget.*
//import domx.invoke
//import domx.remAssign
//import fontawesome.bars
//import fontawesome.signOutAlt
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
//                        item(SignOut) {
//                            fa.signOutAlt
//                            text %= "Sign Out"
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

