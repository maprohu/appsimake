package tictactoe

import bootstrap.*
import common.Emitter
import common.resizeEvent
import domx.*
import domx.a as _
import firebase.firestore.DocumentChangeType
import firebase.firestore.onSnapshotNext
import firebase.firestore.orderBy
import firebase.firestore.typeEnum
import killable.Killables
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.css.ElementCSSInlineStyle
import org.w3c.dom.svg.SVGElement
import org.w3c.dom.svg.SVGGElement
import org.w3c.dom.svg.SVGLineElement
import org.w3c.dom.svg.SVGSVGElement
import rx.Rx
import rx.Var
import rx.rxClass
import rx.rxHover
import styles.flexBasis0
import svgx.*
import kotlin.browser.document
import kotlin.browser.window


enum class Orientation {
    Horizontal,
    Vertical
}
data class Size(
    val width: Int,
    val height: Int
) {
    val orientation =
        if (width >= height) Orientation.Horizontal
        else Orientation.Vertical

    val ratio = if (height==0) 1.0 else width.toDouble() / height
}

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
    val tableRatio = 1.0

    val killables = Killables()
    val highlights = Emitter<Highlight>()

    val fields = mutableMapOf<Coords, Var<FieldState>>()
    fun state(coords: Coords) = fields.getOrPut(coords) { Var(FieldState.Free) }
    fun state(x: Int, y: Int) = state(Coords(x, y))

    val ourMark = Var(Mark.X)

    val turn = Var(if (weStart) Turn.Here else Turn.There)

    val ourTurn = Rx { turn() == Turn.Here }

    val freeLeft = Rx {
        ValidCoords.count {
            state(it)() == FieldState.Free
        }
    }
    val isDraw = Rx {
        freeLeft() == 0
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
                    transform.baseVal.appendItem(
                        ownerSVGElement!!.createSVGTransform().apply {
                            setScale(.8f, .8f)
                        }
                    )

                    fun ElementCSSInlineStyle.stl() {
                        style.cssText = "stroke:black;stroke-width:0.1;fill:none;"
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
                    g {
                        markState(xState)

                        line {
                            stl()
                            this.x1.baseVal.value = -.5f
                            this.y1.baseVal.value = -.5f
                            this.x2.baseVal.value = .5f
                            this.y2.baseVal.value = .5f
                        }
                        line {
                            stl()
                            this.x1.baseVal.value = -.5f
                            this.y1.baseVal.value = .5f
                            this.x2.baseVal.value = .5f
                            this.y2.baseVal.value = -.5f
                        }
                    }
                    circle {
                        stl()
                        markState(oState)
                        r.baseVal.value = .5f
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
                        move(
                            Placement().apply {
                                this.x = x
                                this.y = y
                            }
                        )
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

//                style.flexGrow = "1"

            }
//                            width.baseVal.valueAsString = "100%"
//                            height.baseVal.valueAsString = "100%"
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

    root.newRoot {
        div {
            flex()
            flexGrow1()
            padding2()
            div {
                flexGrow1()
                flex()

                val size = Var(Size(offsetWidth, offsetHeight))
                killables += window.resizeEvent {
                    size.now = Size(offsetWidth, offsetHeight)
                }
                val ratio = Rx {
                    size().ratio
                }
                val flexOrientation = Rx {
                    if (tableRatio >= ratio()) Orientation.Vertical
                    else Orientation.Horizontal
                }

                val spacingGrow = Rx {
                    val containerRatio = ratio()
                    val tablePerContainer = if (tableRatio >= containerRatio) {
                        containerRatio / tableRatio
                    } else {
                        tableRatio / containerRatio
                    }
                    val allSpacingPerContainer = 1.0 - tablePerContainer
                    val allSpacingPerTable = allSpacingPerContainer / tablePerContainer
                    val halfSpacingPerTable = allSpacingPerTable / 2.0
                    halfSpacingPerTable
                }

                rxClass(
                    Rx {
                        when (flexOrientation()) {
                            Orientation.Vertical -> "flex-column"
                            Orientation.Horizontal -> "flex-row"
                        }
                    }
                )

                div {
                    classes += flexBasis0
                    spacingGrow.forEach {
                        style.flexGrow = it.toString()
                    }
                }
                column {
                    classes += flexBasis0
                    flexGrow1()

                    column {
                        padding2()
                        flexGrow1()

                        div {
                            flexGrow1()
                            style.position = "relative"

                            board()
                        }


                    }

                }
                div {
                    classes += flexBasis0
                    spacingGrow.forEach {
                        style.flexGrow = it.toString()
                    }
                }

            }
        }

        row {
            bgLight()
            borderTop()
            flexFixedSize()

            row {
                padding1()
                flexFixedSize()
                btnButton {
                    margin1()
                    innerText = "X"
                }
                span {
                    margin1()
                    innerText = "You"
                }
            }
            div {
                flexGrow1()
                flexCenter()
                span {
                    rxText {
                        when (turn()) {
                            Turn.Won -> "You won!"
                            Turn.Lost -> "You lost."
                            Turn.Draw -> "It's a draw."
                            Turn.Check -> "Waiting..."
                            Turn.There -> "Waiting for opponent..."
                            Turn.Here -> "Make a move!"
                            Turn.Alone -> "Opponent left."
                        }
                    }
                }
            }
            row {
                padding1()
                flexFixedSize()
                span {
                    margin1()
                    innerText = "Opponent"
                }
                btnButton {
                    margin1()
                    innerText = "O"
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

        console.dir(winner)

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
        if (isOver.now) return

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
        killables.kill()
        stopListening()
        leaveGame()
    }
}
