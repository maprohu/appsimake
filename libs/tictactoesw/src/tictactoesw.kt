package tictactoesw

import common.obj
import fbmessagingsw.messageHandler
import fbmessagingsw.messageTitle
import fbmessagingsw.sw
import firebaseshr.initFrom
import org.w3c.notifications.NotificationOptions
import tictactoelib.Leave
import tictactoelib.Move
import tictactoelib.Placement
import tictactoelib.Start
import kotlin.js.Promise

fun main(args: Array<String>) {

    messageTitle = { msgIn ->
        val d = JSON.parse<dynamic>(msgIn.data.json as String)
        val move = Move.of(d)

        val msg = when (move) {
            is Start -> "game started"
            is Leave -> "opponent left"
            is Placement -> "opponent moved"
            else -> throw Error("unexpected move: $move")
        }

        "TicTacToe: $msg"
    }

    messageHandler = { msg ->
        sw.registration.showNotification(
            messageTitle(msg),
            NotificationOptions(
                tag = "tictactoe",
                renotify = true,
                data = obj<dynamic> {
                    this.FCM_MSG = obj {
                        this.data = msg
                        this.notification = obj {
                            this.click_action = sw.registration.scope
                        }
                    }
                }.unsafeCast<Any?>()
            )

        )
    }


}