package commonfb

import common.StateMachine
import firebase.User
import firebaseui.Login

abstract class LoggingInCtx(
    val fbCtx: FbCtx
) {
    constructor(name: String) : this(FbCtx(name))

    val appCtx = fbCtx.appCtx

    private val login by lazy { Login(fbCtx.app) }

    fun loggedOut() {
        login.loginUi(appCtx.root.newRoot())
    }

    abstract fun loggedIn(user: User) : () -> Unit


    fun start() {
        val stateMachine = StateMachine(LoggedUnknown(this))

        fbCtx.auth.onAuthStateChanged { user ->
            stateMachine.update(user)
        }
    }
}