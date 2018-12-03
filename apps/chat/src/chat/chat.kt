package chat

import common.obj
import common.removeFromParent
import firebase.User
import firebase.app.firestore
import firebase.firestore.withDefaultSettings
import firebaseui.Login
import kotlinx.html.ButtonType
import kotlinx.html.InputType
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.js.*
import pullanappfb.app
import rx.Var
import styles.scrollVertical
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass


val db = app.firestore().withDefaultSettings()
val baseRef = db.collection("apps").doc("chat")
val publicCollection = baseRef.collection("public")

external interface Public {
    var alias: String
}

val root by lazy {
    document.body!!.also { listOf(it, it.parentElement!!).forEach { it.addClass("w-100 h-100") } }
}

fun main(args: Array<String>) {

    val loginDiv = document.create.div()

    app.auth().onAuthStateChanged {
        if (it == null) {
            root.appendChild(loginDiv)
            Login().loginUi(loginDiv)
        } else {
            loginDiv.removeFromParent()
            Chatting(it).start()
        }
    }

}

class Chatting(val user: User) {

    val publicDoc = publicCollection
        .doc(user.uid)

    val alias = Var("<unknown>")

    val lastMessage =
        baseRef
            .collection("messages")
            .doc("last")


    fun start() {
        publicDoc
            .onSnapshot {
                if (it.exists) {
                    alias.now = it.data<Public>().alias
                } else {
                    setAlias(user.uid)
                }
            }

        root.append {
            div("d-flex flex-column w-100 h-100 p-2") {
                span("flex-grow-0 flex-shrink-0") {
                    +"Your alias: "
                    b().also { s -> alias.forEach { s.innerText = it }  }
                }

                form(classes = "d-flex flex-row flex-grow-0 flex-shrink-0 input-group") {
                    val aliasInput = input(classes = "flex-grow-1 form-control", type = InputType.text)
                    button(classes = "btn input-group-append", type = ButtonType.submit) {+"Change alias"}
                    onSubmitFunction = {
                        it.preventDefault()
                        setAlias(aliasInput.value)
                    }
                }

                val list = dl("flex-grow-1 $scrollVertical my-2 border px-2") {}

                var first = true
                lastMessage.onSnapshot { msg ->
                    if (first) {
                        first = false
                    } else if (msg.exists) {
                        val data = msg.data<Message>()
                        list.append {
                            dt {
                                if (data.uid == user.uid) {
                                    +"You said: "
                                } else {
                                    val name = span {}
                                    publicCollection.doc(data.uid).onSnapshot {
                                        if (it.exists) {
                                            name.innerText = it.data<Public>().alias
                                        }
                                    }
                                    + " said:"
                                }
                            }
                            dd {
                                + data.message
                            }
                        }
                        list.scrollTop = (list.scrollHeight - list.clientHeight).toDouble()
                    }
                }

                form(classes = "d-flex flex-row flex-grow-0 flex-shrink-0 input-group") {
                    val messageInput =
                        input(classes = "flex-grow-1 form-control", type = InputType.text).also {e ->
                            window.setTimeout( { e.focus() }, 0 )
                        }
                    button(classes = "btn input-group-append", type = ButtonType.submit) {+"Send"}
                    onSubmitFunction = {
                        it.preventDefault()
                        lastMessage.set(
                            obj<Message> {
                                uid = user.uid
                                message = messageInput.value
                            }
                        )
                        messageInput.value = ""
                    }
                }

            }

        }

    }

    private fun setAlias(newAlias: String) {
        publicDoc.set(
            obj<Public>().apply {
                alias = newAlias
            }
        )
    }

}

external interface Message {
    var uid: String
    var message: String
}

