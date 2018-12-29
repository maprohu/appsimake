package testapp

import bootstrap.*
import buildenv.serviceWorkerFileName
import common.obj
import commonfb.FbCtx
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
        "Test App"
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
    fbCtx.appCtx.root.newRoot {
        column {
            classes += scrollVertical
            flexGrow1()
            padding1()
            div {
                margin1()
                flexGrow1()

                listGroup {
                    messaging.onMessage {
                        listGroupItem {
                            innerText = it.data.message
                            scrollIntoView()
                        }
                    }
                }


            }

        }
        form {
            flexFixedSize()
            flexRow()

            val msginput = input {
                formControl()
                margin1()
                flexGrow1()
                autofocus = true
            }
            btnButton {
                type = "submit"
                margin1()
                btnPrimary()
                flexFixedSize()
                innerText = "Send"
            }

            onsubmit = {
                it.preventDefault()
                fbCtx.call(sendMessage, msginput.value)
                msginput.value = ""
                null
            }

        }

    }

}