package tictactoesw

import commonshr.properties.NoDynamicOps
import fbmessagingsw.*
import firebaseshr.decodeMessageData
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.notifications.NotificationAction
import org.w3c.notifications.NotificationOptions
import tictactoelib.DisableNotifications
import tictactoelib.GoOnline
import tictactoelib.Move

fun main() {

    messageTitle = { msgIn ->
        val d = decodeMessageData(msgIn)
        val move = Move.of(d, NoDynamicOps)

        val msg = when (move) {
            is Move.Start -> "game started"
            is Move.Leave -> "opponent left"
            is Move.Placement -> "opponent moved"
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
                actions = arrayOf(
                    NotificationAction(
                        "",
                        "Show"
                    ),
                    NotificationAction(
                        DisableNotifications,
                        "Mute"
                    )
                )
            )

        )
    }

    sw.onnotificationclick = { e ->
        GlobalScope.launch {
            focusOrOpenClient().let { cl ->

                if (e.action == GoOnline) {

                }

            }
        }
    }
}