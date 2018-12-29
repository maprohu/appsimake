package testapp

import bootstrap.*
import buildenv.serviceWorkerFileName
import common.obj
import commonfb.FbCtx
import domx.button
import domx.div
import domx.form
import domx.input
import firebase.firestore.setOptionsMerge
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
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
    }

    fbCtx.appCtx.root.newRoot {
        padding1()
        div {
            margin1()
            flexGrow1()
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