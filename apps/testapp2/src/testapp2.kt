package testapp2

import bootstrap.*
import buildenv.serviceWorkerFileName
import common.Listeners
import common.obj
import commonfb.FbCtx
import commonui.screenLayout
import domx.*
import firebase.firestore.setOptionsMerge
import firebase.messaging.Messaging
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import styles.scrollVertical
import testapplib.sendMessage
import testapplib.testapp
import testapplib.tokensPath
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear

fun main(args: Array<String>) {


    val fbCtx = FbCtx(
        testapp,
        "Test App 2"
    )

    GlobalScope.launch {

        fbCtx.setupMessaging {

            val token = it.await()

            fbCtx
                .db
                .collection(tokensPath)
                .doc(token)
                .set(obj(), setOptionsMerge())
        }

        val messaging = fbCtx.messaging.await()

        testUI(fbCtx, messaging)
    }
}

fun testUI(
    fbCtx: FbCtx,
    messaging: Messaging
) {
    fbCtx.appCtx.root.newRoot().screenLayout {
        top.apply {
            middleTitle {
                innerText = fbCtx.appCtx.title
            }
        }

        main.apply {
            classes += scrollVertical
            flexColumn()
            flexGrow1()
            listGroup {
                margin2()
                flexGrow1()
                displayBlock()
                messaging.onMessage {
                    listGroupItem {
                        innerText = it.data.message
                        scrollIntoView()
                    }
                }
            }
        }

        val submit = Listeners()

        bottom.apply {
            middle.apply {
                form {
                    flexRow()
                    flexGrow1()
                    input {
                        formControl()
                        margin1()
                        flexGrow1()
                        autofocus = true

                        submit += {
                            fbCtx.call(sendMessage, obj { message = value })
                            value = ""
                            focus()
                        }
                    }

                    onsubmit = {
                        it.preventDefault()
                        submit.fire()
                    }
                }
            }

            right.apply {
                btnButton {
                    margin1()
                    btnPrimary()
                    innerText = "Send"
                    onclick = { submit.fire() }
                }
            }

//                    onsubmit = {
//                        it.preventDefault()
//                    }

        }

    }

}