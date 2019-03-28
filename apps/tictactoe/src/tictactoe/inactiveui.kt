package tictactoe

//import bootstrap.*
//import common.obj
//import commonui.screenLayout
//import domx.*
//import firebase.firestore.setOptionsMerge
//import fontawesome.fas
//import killable.Killables
//import tictactoelib.Player
//
//fun PlayerInactive.inactiveUI() {
//    control.appCtx.root.newRoot {
//        screenLayout(Killables()) {
//
//            top {
//                ticTacToe()
//                leftButton {
//                    innerText = "Sign Out"
//                    clickEvent {
//                        control.fbCtx.signOut()
//                    }
//                }
//            }
//
//            main {
//                flexCenter()
//                btnButton {
//                    btnPrimary()
//                    innerText = "Enter Waiting Room"
//                    clickEvent {
//                        control.playerRef.set(
//                            Player().apply { active.cv = true }.props.merge(),
//                            setOptionsMerge()
//                        )
//                    }
//                }
//            }
//
//        }
//    }
//}

