package commonfb

import bootstrap.btn
import bootstrap.btnSecondary
import bootstrap.flexCenter
import common.StateMachine
import commonlib.Lib
import commonui.screenLayout
import domx.a
import domx.div
import firebase.User
import firebaseui.Login

abstract class LoggingInCtx(
    val fbCtx: FbCtx
) {
//    constructor(name: String) : this(name, name)
    constructor(lib: Lib, title: String) : this(FbCtx(lib, title))

    val appCtx = fbCtx.appCtx

    private val login by lazy { Login(fbCtx.app) }

    fun loggedOut() {
        login.loginUi(
            loginDiv()
        )
    }

    open fun loginDiv() =
        appCtx.root.newRoot().screenLayout {
            top {
                left {
                    a {
                        btn()
                        btnSecondary()

                        href = "index.html"
                        innerText = "Exit"
                    }
                }
                middleTitle {
                    innerText = appCtx.title
                }
            }
        }.main.apply {
            flexCenter()
        }.div()

    abstract fun loggedIn(user: User) : () -> Unit


    fun start() {
        val stateMachine = StateMachine(LoggedUnknown(this))

        fbCtx.auth.onAuthStateChanged { user ->
            stateMachine.update(user)
        }
    }
}