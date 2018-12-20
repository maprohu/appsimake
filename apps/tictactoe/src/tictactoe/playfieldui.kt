package tictactoe

import bootstrap.*
import common.Emitter
import common.onResize
import common.removeFromParent
import commonui.*
import domx.*
import domx.a as _
import firebase.firestore.DocumentChangeType
import firebase.firestore.onSnapshotNext
import firebase.firestore.orderBy
import firebase.firestore.typeEnum
import fontawesome.chevronDown
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import org.w3c.dom.css.ElementCSSInlineStyle
import org.w3c.dom.svg.SVGCircleElement
import org.w3c.dom.svg.SVGElement
import org.w3c.dom.svg.SVGGElement
import org.w3c.notifications.*
import rx.*
import svgx.*
import kotlin.browser.document


data class Coords(
    val x: Int,
    val y: Int
)

enum class FieldState {
    Free,
    Friend,
    Foe
}

class Highlight(
    val from: Coords,
    val to: Coords
)

enum class Mark {
    X,
    O
}

val Mark.other
    get() =
        when (this) {
            Mark.X -> Mark.O
            Mark.O -> Mark.X
        }


enum class Turn {
    Here,
    There,
    Check,
    Won,
    Lost,
    Draw,
    Alone
}

enum class Party(
    val field: FieldState,
    val next: Turn,
    val end: Turn
) {
    This(FieldState.Friend, Turn.There, Turn.Won),
    That(FieldState.Foe, Turn.Here, Turn.Lost)
}

enum class MarkState {
    Hidden,
    Suggest,
    Visible
}

val FieldWidth = 3
val FieldHeight = 3
val ValidCoords = (0 until FieldWidth)
    .flatMap { x -> (0 until FieldHeight).map { y -> Coords(x, y) } }

fun PlayingCtx.playfieldUI(): () -> Unit {
    var expectingSequence = SequenceStartsFrom

    val killables = Killables()
    val highlights = Emitter<Highlight>()

    val fields = mutableMapOf<Coords, Var<FieldState>>()
    fun state(coords: Coords) = fields.getOrPut(coords) { Var(FieldState.Free) }
    fun state(x: Int, y: Int) = state(Coords(x, y))

    val ourMark = Var(Mark.X)
    val theirMark = Rx { ourMark().other }

    val turn = Var(if (weStart) Turn.Here else Turn.There)
    val isWaiting = Rx {
        when (turn()) {
            Turn.Check, Turn.There -> true
            else -> false
        }
    }

//    fun message(msg: String) = appCtx.notify(msg)
//
//    turn.forEach {
//        when (it) {
//            Turn.Here -> message("It's your turn!")
//            Turn.Won, Turn.Lost, Turn.Draw -> message("The game has ended.")
//            Turn.Alone -> message("Your opponent left the game.")
//            else -> {}
//        }
//    }

    ui.spinner.rxDisplay(isWaiting)

    val ourTurn = Rx { turn() == Turn.Here }

    val freeLeft = Rx {
        ValidCoords.count {
            state(it)() == FieldState.Free
        }
    }
    val isDraw = Rx {
        freeLeft() == 0
    }

    fun ElementCSSInlineStyle.markStyle() {
        style.cssText = "stroke:black;stroke-width:0.1;fill:none;"
    }

    fun SVGElement.drawX(): SVGGElement {
        return g {
            markStyle()
            line {
                this.x1.baseVal.value = -.5f
                this.y1.baseVal.value = -.5f
                this.x2.baseVal.value = .5f
                this.y2.baseVal.value = .5f
            }
            line {
                this.x1.baseVal.value = -.5f
                this.y1.baseVal.value = .5f
                this.x2.baseVal.value = .5f
                this.y2.baseVal.value = -.5f
            }
        }
    }

    fun SVGElement.drawO(): SVGCircleElement {
        return circle {
            markStyle()
            r.baseVal.value = .5f
        }
    }


    fun SVGElement.fieldUI(x: Int, y: Int) {
        val state = state(x, y)
        val isFree = Rx { state() == FieldState.Free }
        val canClick = Rx { ourTurn() && isFree() }
        val isFoe = Rx { state() == FieldState.Foe }
        val isFriend = Rx { state() == FieldState.Friend }
        val isX = Rx { (ourMark() == Mark.X && isFriend()) || (ourMark() == Mark.O && isFoe())  }
        val isO = Rx { (ourMark() == Mark.O && isFriend()) || (ourMark() == Mark.X && isFoe())  }
        val hover = Var(false)
        val suggest = Rx { ourTurn() && isFree() && hover() }
        val suggestX = Rx { suggest() && ourMark() == Mark.X }
        val suggestO = Rx { suggest() && ourMark() == Mark.O }

        val xState = Rx {
            when {
                isX() -> MarkState.Visible
                suggestX() -> MarkState.Suggest
                else -> MarkState.Hidden
            }
        }
        val oState = Rx {
            when {
                isO() -> MarkState.Visible
                suggestO() -> MarkState.Suggest
                else -> MarkState.Hidden
            }
        }
        g {
            transform.baseVal.appendItem(
                ownerSVGElement!!.createSVGTransform().apply {
                    setTranslate(x.toFloat(), y.toFloat())
                }
            )

            g {

                g {
                    transform {
                        setScale(.8f, .8f)
                    }


                    fun SVGGElement.markState(rx: Rx<MarkState>) {
                        rx.forEach {
                            if (it==MarkState.Hidden) {
                                style.visibility = "hidden"
                            } else  {
                                style.visibility = "visible"
                                val op = when (it) {
                                    MarkState.Suggest -> "0.5"
                                    else -> "1.0"
                                }
                                style.asDynamic().fillOpacity = op
                                style.asDynamic().strokeOpacity = op
                            }
                        }
                    }
                    drawX().apply {
                        markState(xState)
                    }
                    drawO().apply {
                        markState(oState)
                    }
                }


            }

            a {
                canClick.forEach {
                    style.cursor = if (it) "pointer" else "default"
                }
                clickEvent {
                    if (canClick.now) {
                        turn.now = Turn.There
                        state.now = FieldState.Friend
                        GlobalScope.launch {
                            move(
                                expectingSequence,
                                Placement().apply {
                                    this.x = x
                                    this.y = y
                                }
                            )
                        }
                    }
                }
                rxHover(hover)

                rect {
                    this.x.baseVal.value = -.5f
                    this.y.baseVal.value = -.5f
                    width.baseVal.value = 1f
                    height.baseVal.value = 1f
                    style.cssText = "fill:transparent;"
                }
            }

        }

    }

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

            fun stroke(
                x1: Float,
                y1: Float,
                x2: Float,
                y2: Float
            ) {
                line {
                    this.x1.baseVal.value = x1
                    this.y1.baseVal.value = y1
                    this.x2.baseVal.value = x2
                    this.y2.baseVal.value = y2
                    style.cssText = "stroke:black;stroke-width:1px"
                    attributes["vector-effect"] = "non-scaling-stroke"
                }
            }

            stroke(1f, 0f, 1f, 3f)
            stroke(2f, 0f, 2f, 3f)
            stroke(0f, 1f, 3f, 1f)
            stroke(0f, 2f, 3f, 2f)

            g {
                transform.baseVal.appendItem(
                    ownerSVGElement!!.createSVGTransform().apply {
                        setTranslate(.5f, .5f)
                    }
                )

                for (x in 0..2) {
                    for (y in 0..2) {
                        fieldUI(x, y)
                    }
                }
                highlights += { h ->
                    line {
                        this.x1.baseVal.value = h.from.x.toFloat()
                        this.y1.baseVal.value = h.from.y.toFloat()
                        this.x2.baseVal.value = h.to.x.toFloat()
                        this.y2.baseVal.value = h.to.y.toFloat()
                        style.cssText =
                                """
                                    stroke:red;
                                    stroke-width:0.3;
                                    stroke-opacity:0.5;
                                    stroke-linecap:round;
                                """
                    }
                }
            }

        }
    }

    ui.root.newRoot {
        padding1()

        aspectRatio(killables) {
            margin1()

            board()
        }

        notificationUI(this)
     }

    fun Node.markSvg() =
        svg {
            width.baseVal.valueAsString = "1em"
            height.baseVal.valueAsString = "1em"
            viewBox(-.5, -.5, 1.0, 1.0)
        }.g {
            transform {
                setScale(.8f, .8f)
            }
        }

    fun Node.drawMark(rxv: RxVal<Mark>) =
        markSvg().apply {
            drawO().apply {
                rxVisible { rxv() == Mark.O }
            }
            drawX().apply {
                rxVisible { rxv() == Mark.X }
            }
        }

    ui.layout.top.middle {
        flexCenter()
        span {
            rxPanel(turn) {
                when (it) {
                    Turn.Won -> "You won!".textNode
                    Turn.Lost -> "You lost.".textNode
                    Turn.Draw -> "It's a draw.".textNode
                    Turn.Check -> "Waiting...".textNode
                    Turn.There -> document.div {
                        this + "Opponent placing "
                        drawMark(theirMark)
                        this + " ..."
                    }
                    Turn.Here -> document.div {
                        this + "Place your "
                        drawMark(ourMark)
                        this + " !"
                    }
                    Turn.Alone -> "Opponent left.".textNode
                }
            }
        }
    }

    ui.layout.top.right {
        dropdown {
            element {
                margin1()
            }

            button {
                chevronDown()
            }

            menu {
                dropdownMenuRight()

                dropdownItemAnchor {
                    this + "Change mark to "
                    drawMark(theirMark)

                    clickEvent {
                        ourMark.now = ourMark.now.other
                    }
                }
            }

        }
    }

    val gameOverStates = setOf(
        Turn.Won,
        Turn.Lost,
        Turn.Draw,
        Turn.Alone
    )
    val isOver = Rx {
        turn() in gameOverStates
    }

    fun Move.isOurs() = player == playerIndex
    fun Move.party() = if (isOurs()) Party.This else Party.That

    data class Dir(
        val dx: Int,
        val dy: Int
    )
    val dirs = listOf(
        Dir(1, -1),
        Dir(1, 0),
        Dir(1, 1),
        Dir(0, 1)
    )

    operator fun Coords.plus(dir: Dir) = Coords(x + dir.dx, y + dir.dy)

    fun Dir.sequenceExcluding(from: Coords) = generateSequence(from + this) { it + this }


    operator fun Dir.unaryMinus() = Dir(-dx, -dy)
    fun Dir.opposite() = unaryMinus()

    val winBy = 3
    fun Coords.checkGameOver() : Boolean {
        val winner = state(this).now

        if (winner == FieldState.Free) return false

        fun Dir.reach() =
            listOf(this@checkGameOver) +
                    sequenceExcluding(this@checkGameOver)
                        .takeWhile { state(it).now == winner }
                        .toList()

        val hs = dirs.mapNotNull { d ->
            val s1 = d.reach()
            val s2 = d.opposite().reach()

            if (s1.size + s2.size - 1 >= winBy) {
                Highlight(s1.last(), s2.last())
            } else {
                null
            }
        }

        hs.forEach { highlights.fire(it) }

        return hs.isNotEmpty()
    }

    fun Move.process() {
        if (sequence < expectingSequence) return
        if (isOver.now) return
        if (sequence > expectingSequence) throw Error("expecting sequence $expectingSequence, got $sequence")
        expectingSequence = sequence + 1

        when (this) {
            is Placement -> {
                val coords = Coords(x, y)
                val state = state(coords)
                val party = party()
                state.now = party.field
                turn.now = when {
                    coords.checkGameOver() -> party.end
                    isDraw.now -> Turn.Draw
                    else -> party.next
                }
            }
            is Leave -> {
                turn.now = Turn.Alone
            }
        }

    }

    val stopListening = movesRef
        .orderBy(Move::sequence)
        .onSnapshotNext { qs ->
            qs.docChanges()
                .filter { it.typeEnum == DocumentChangeType.added }
                .forEach { dc ->
                    Move.of(dc.doc.data()).process()
                }
        }

    return {
        GlobalScope.launch {
            leaveGame { expectingSequence }
            killables.kill()
            stopListening()
        }
    }
}
