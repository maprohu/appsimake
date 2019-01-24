package commonfb

import common.State
import firebase.User
import killable.Killable
import killable.Killables

abstract class LoginProcessState(val control: LoggingInCtx): State<User?, LoginProcessState>() {

    override fun process(input: User?): LoginProcessState? {
        return if (input == null) {
            LoggedOut(control)
        } else {
            LoggedIn(control, input)
        }
    }

}

open class LoggedUnknown(control: LoggingInCtx) : LoginProcessState(control) {

    override fun enter(): Killable {
        control.appCtx.hourglass()
        return Killable.empty
    }


}

class LoggedOut(control: LoggingInCtx) : LoginProcessState(control) {

    override fun enter(): Killable {
        val killables = Killables()
        control.loggedOut(killables)
        return killables
    }

}

class LoggedIn(
    control: LoggingInCtx,
    private val user: User
) : LoginProcessState(control) {

    override fun enter() = control.loggedIn(user)

}

