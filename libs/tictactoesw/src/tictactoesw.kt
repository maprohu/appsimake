package tictactoesw

import commonshr.properties.NoDynamicOps
import fbmessagingsw.*
import firebaseshr.decodeMessage
import firebaseshr.decodeMessageData
import firebaseshr.postLibMessage
import kotlinx.coroutines.*
import org.w3c.dom.events.Event
import org.w3c.notifications.NotificationAction
import org.w3c.notifications.NotificationOptions
import tictactoelib.*


fun main() {
    initMessaging(
        tictactoeLib,
        decode = { Move.of(it, NoDynamicOps) },
        foreground = {},
        background = { move ->
            title = run {
                val msg = when (move) {
                    is Move.Start -> "game started"
                    is Move.Leave -> "opponent left"
                    is Move.Placement -> "opponent moved"
                    else -> throw Error("unexpected move: $move")
                }

                "TicTacToe: $msg"
            }

            options.actions = arrayOf(
                NotificationAction(
                    GoOnline,
                    "Show"
                ),
                NotificationAction(
                    DisableNotifications,
                    "Mute"
                )
            )
        },
        click = { e ->
            when (e.action) {
                "", GoOnline -> {
                    libMessageToClient(tictactoeLib, GoOnline)
                }
                DisableNotifications -> {
                    libMessageToClient(tictactoeLib, DisableNotifications)
                }
                else -> {
                    console.dir(e)
                }
            }
        }
    )

//    messageTitle = { msgIn ->
//        val d = decodeMessage(msgIn)
//        val move = Move.of(d.data, NoDynamicOps)
//
//    }
//
//    messageHandler = { msg ->
//        console.dir(msg)
//
//        sw.registration.showNotification(
//            messageTitle(msg),
//            NotificationOptions(
//                tag = "tictactoe",
//                renotify = true,
//            )
//
//        )
//    }
//
//    sw.onnotificationclick = { e ->
//        e.waitUntil(
//            GlobalScope.async {
//            }.asPromise()
//        )
//    }
}