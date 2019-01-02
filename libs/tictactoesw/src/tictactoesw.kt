package tictactoesw

import fbmessagingsw.messageTitle

fun main(args: Array<String>) {

    messageTitle = {
        console.dir(it)
        "tictactoe msg received"
    }

}