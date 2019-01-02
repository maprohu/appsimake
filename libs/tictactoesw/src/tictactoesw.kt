package tictactoesw

import common.obj
import fbmessagingsw.messageHandler
import fbmessagingsw.messageTitle
import fbmessagingsw.sw
import org.w3c.notifications.NotificationOptions
import tictactoelib.Leave
import tictactoelib.Move
import tictactoelib.Placement
import tictactoelib.Start
import kotlin.js.Promise

fun main(args: Array<String>) {

    messageTitle = {
        val move = Move.of(
            JSON.parse(it.data.json as String)
        )

        val msg = when (move) {
            is Start -> "game started"
            is Leave -> "opponent left"
            is Placement -> "opponent moved"
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
                            this.click_action = fbmessagingsw.sw.registration.scope
                        }
                    }
                } as? Any
            )

        )
    }


}