package tictactoesw

import commonshr.properties.NoDynamicOps
import fbmessagingsw.*
import firebaseshr.decodeMessage
import firebaseshr.decodeMessageData
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.asPromise
import kotlinx.coroutines.async
import kotlinx.coroutines.launch
import org.w3c.notifications.NotificationAction
import org.w3c.notifications.NotificationOptions
import tictactoelib.DisableNotifications
import tictactoelib.GoOnline
import tictactoelib.Move

fun main() {

    messageTitle = { msgIn ->
        val d = decodeMessage(msgIn)
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
        e.waitUntil(
            GlobalScope.async {
                focusOrOpenClient().let { cl ->
                    when (e.action) {
                        "" -> {
                            cl.postMessage(GoOnline)
                        }
                        DisableNotifications -> {
                            cl.postMessage(DisableNotifications)
                        }
                        else -> {
                            console.dir(e)
                        }
                    }
                }
            }.asPromise()
        )
    }
}