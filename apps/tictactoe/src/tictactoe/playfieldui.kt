package tictactoe

import bootstrap.*
import common.Emitter
import commonui.*
import domx.*
import firebase.firestore.*
import fontawesome.Fa
import domx.a as _
import fontawesome.chevronDown
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node
import org.w3c.dom.css.ElementCSSInlineStyle
import org.w3c.dom.svg.SVGCircleElement
import org.w3c.dom.svg.SVGElement
import org.w3c.dom.svg.SVGGElement
import rx.*
import svgx.*
import tictactoelib.*
import kotlin.browser.document



//fun PlayingCtx.playfieldUI(): () -> Unit {
//    var expectingSequence = SequenceStartsFrom
//
//    val killables = Killables()
//    val highlights = Emitter<Highlight>()
//
//
//    val theirMark = Rx { ourMark().other }
//
//    val isWaiting = Rx {
//        when (turn()) {
//            Turn.Check, Turn.There -> true
//            else -> false
//        }
//    }
//
////    fun message(msg: String) = appCtx.notify(msg)
////
////    turn.forEach {
////        when (it) {
////            Turn.Here -> message("It's your turn!")
////            Turn.Won, Turn.Lost, Turn.Draw -> message("The game has ended.")
////            Turn.Alone -> message("Your opponent left the game.")
////            else -> {}
////        }
////    }
//
//    ui.spinner.rxDisplay(isWaiting)
//
//
//    val freeLeft = Rx {
//        ValidCoords.count {
//            state(it)() == FieldState.Free
//        }
//    }
//    val isDraw = Rx {
//        freeLeft() == 0
//    }
//
//
//
//
//
    fun HTMLDivElement.board() {
        svg {
            style.apply {
                position = "absolute"
                left = "0"
                right = "0"
                top = "0"
                bottom = "0"
                minHeight = "0"
                minWidth = "0"
            }
            setAttribute("preserve-aspect-ratio", "none")
            setAttribute("viewBox", "0 0 3 3")



        }
    }
//
//    ui.root.newRoot {
//        padding1()
//
//        aspectRatio(killables) {
//            margin1()
//
//            board()
//        }
//
////        notificationUI(this)
//     }
//
//    fun Node.markSvg() =
//        svg {
//            width.baseVal.valueAsString = "1em"
//            height.baseVal.valueAsString = "1em"
//            viewBox(-.5, -.5, 1.0, 1.0)
//        }.g {
//            transform {
//                setScale(.8f, .8f)
//            }
//        }
//
//    fun Node.drawMark(rxv: RxVal<Mark>) =
//        markSvg().apply {
//            drawO().apply {
//                rxVisible { rxv() == Mark.O }
//            }
//            drawX().apply {
//                rxVisible { rxv() == Mark.X }
//            }
//        }
//
//    ui.layout.top.middle {
//        flexCenter()
//        span {
//            rxPanel(turn) {
//                when (it) {
//                    Turn.Won -> "You won!".textNode
//                    Turn.Lost -> "You lost.".textNode
//                    Turn.Draw -> "It's a draw.".textNode
//                    Turn.Check -> "Please wait...".textNode
//                    Turn.There -> document.div {
//                        this + "Opponent placing "
//                        drawMark(theirMark)
//                        this + " ..."
//                    }
//                    Turn.Here -> document.div {
//                        this + "Place your "
//                        drawMark(ourMark)
//                        this + " !"
//                    }
//                    Turn.Alone -> "Opponent left.".textNode
//                }
//            }
//        }
//    }
//
//    ui.layout.top.right {
//        cls {
//            dropdown
//            m1
//        }
//
//        faButton(Fa.chevronDown) {
//            dataToggleDropdown()
//        }
//
//        div {
//            cls {
//                dropdownMenu
//                dropdownMenuRight
//            }
//
//            dropdownItemAnchor {
//                text {
//                    this + "Change mark to "
//                    drawMark(theirMark)
//
//                }
//                anchor {
//                    clickEvent {
//                        ourMark.now = ourMark.now.other
//                    }
//                }
//            }
//
//            dropdownItemAnchor {
//                anchor {
//                    toggleNotificationButton(
//                        killables,
//                        loggedInCtx.fcmControl
//                    )
//                }
//            }
//
//        }
//    }
//
//    val gameOverStates = setOf(
//        Turn.Won,
//        Turn.Lost,
//        Turn.Draw,
//        Turn.Alone
//    )
//    val isOver = Rx {
//        turn() in gameOverStates
//    }
//
//    fun Move<*>.isOurs() = player.initial.now.any { it == playerIndex }
//    fun Move<*>.party() = if (isOurs()) Party.This else Party.That
//
//    data class Dir(
//        val dx: Int,
//        val dy: Int
//    )
//    val dirs = listOf(
//        Dir(1, -1),
//        Dir(1, 0),
//        Dir(1, 1),
//        Dir(0, 1)
//    )
//
//    operator fun Coords.plus(dir: Dir) = Coords(x + dir.dx, y + dir.dy)
//
//    fun Dir.sequenceExcluding(from: Coords) = generateSequence(from + this) { it + this }
//
//
//    operator fun Dir.unaryMinus() = Dir(-dx, -dy)
//    fun Dir.opposite() = unaryMinus()
//
//    val winBy = 3
//    fun Coords.checkGameOver() : Boolean {
//        val winner = state(this).now
//
//        if (winner == FieldState.Free) return false
//
//        fun Dir.reach() =
//            listOf(this@checkGameOver) +
//                    sequenceExcluding(this@checkGameOver)
//                        .takeWhile { state(it).now == winner }
//                        .toList()
//
//        val hs = dirs.mapNotNull { d ->
//            val s1 = d.reach()
//            val s2 = d.opposite().reach()
//
//            if (s1.size + s2.size - 1 >= winBy) {
//                Highlight(s1.last(), s2.last())
//            } else {
//                null
//            }
//        }
//
//        hs.forEach { highlights.emit(it) }
//
//        return hs.isNotEmpty()
//    }
//
//    fun Move<*>.process() {
//        if (sequence.iv < expectingSequence) return
//        if (isOver.now) return
//        if (sequence.iv > expectingSequence) throw Error("expecting sequence $expectingSequence, got $sequence")
//        expectingSequence = sequence.iv + 1
//
//        when (this) {
//            is Start -> {
//                turn.now = if (this.player.iv == playerIndex) Turn.There else Turn.Here
//            }
//            is Placement -> {
//                val coords = Coords(x.iv, y.iv)
//                val state = state(coords)
//                val party = party()
//                state.now = party.field
//                turn.now = when {
//                    coords.checkGameOver() -> party.end
//                    isDraw.now -> Turn.Draw
//                    else -> party.next
//                }
//            }
//            is Leave -> {
//                turn.now = Turn.Alone
//            }
//            else -> throw Error()
//        }
//
//        if (isOver.now) {
//            gameRef.set(
//                Game().apply {
//                    this.isOver.cv = true
//                }.props.merge(),
//                setOptionsMerge()
//            )
//        }
//
//    }
//
//    val stopListening = movesWrap
//        .query(db) {
//            Move.sequence.asc()
//        }
//        .query
//        .onSnapshotNext { qs ->
//            qs.docChanges()
//                .filter { it.typeEnum == DocumentChangeType.added }
//                .forEach { dc ->
//                    val d = dc.doc.data<dynamic>()
//                    Move.of(d).process()
//                }
//        }
//
//    return {
//        GlobalScope.launch {
//            leaveGameMove { expectingSequence }
//            killables.kill()
//            stopListening()
//        }
//    }
//}
