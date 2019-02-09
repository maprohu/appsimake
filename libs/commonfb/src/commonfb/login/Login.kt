package commonfb.login

import commonui.*
import firebase.auth.GoogleAuthProvider
import killable.KillSet
import killable.Trigger


class Login(
    kills: KillSet,
    inbox: Inbox,
    proc: AssignProcOrElse,
    panel: Slot,
    back: Trigger,
    loggingIn: Trigger
) {
    val bind = Bind(inbox)
    private val ui = UI(kills, panel, bind)
    val procs = proc.assignProcAdd()

    init {
        ui.visible()

        with(bind) {
            procs.process(Google) {
                val provider = GoogleAuthProvider()
                firebase.auth().signInWithPopup(provider)
                loggingIn()
            }
            procs.process(Guest) {
                firebase.auth().signInAnonymously()
                loggingIn()
            }
            procs.process(Back) {
                back()
            }
        }
    }
}