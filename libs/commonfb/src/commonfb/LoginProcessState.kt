package commonfb

import common.State
import firebase.User
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

    override fun enter(): () -> Unit {
        control.appCtx.hourglass()
        return {}
    }


}

class LoggedOut(control: LoggingInCtx) : LoginProcessState(control) {

    override fun enter(): () -> Unit {
        val killables = Killables()
        control.loggedOut(killables)
        return { killables.kill() }
    }

}

class LoggedIn(
    control: LoggingInCtx,
    private val user: User
) : LoginProcessState(control) {

    override fun enter() = control.loggedIn(user)

}

