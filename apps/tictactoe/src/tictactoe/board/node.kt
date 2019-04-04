package tictactoe.board

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import org.w3c.dom.Node
import org.w3c.dom.svg.*
import styles.def
import styles.height0
import styles.minWidth0
import svgx.*
import svgx.a
import kotlin.browser.document
import kotlin.dom.appendText

private fun cls(s: String) = def(s, prefix = "tictactoe-")

private val Cls.mark by cls(
    """
        stroke: black;
        stroke-width: 0.1;
        fill: none;
    """.trimIndent()
)
private val Cls.stroke by cls(
    """
        stroke: black;
        stroke-width: 1px;
    """.trimIndent()
)
private val Cls.fieldAnchor by cls(
    """
        fill: transparent;
    """.trimIndent()
)
private val Cls.highlight by cls(
    """
        stroke:red;
        stroke-width:0.3;
        stroke-opacity:0.5;
        stroke-linecap:round;
    """.trimIndent()
)

private val defs by lazy {
    document.body!!.svg {
        cls.dNone
    }
}

private val xGraphics by lazy {
    defs.symbol {
        attributes["overflow"] = "visible"
        g {
            cls.mark
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
}

private val oGraphics by lazy {
    defs.symbol {
        attributes["overflow"] = "visible"
        circle {
            cls.mark
            r.baseVal.value = .5f
        }
    }
}

val standardMarks by lazy {
    listOf(
        xGraphics.ref,
        oGraphics.ref
    )
}

fun Player.markRef() = "#${mark()}"

fun Node.boardNode(board: Board) = with(board) {
    with(control) {
        insert.svg {
            cls {
                m2
                flexGrow1
                height0
            }

            fun SVGElement.fieldUI(coords: Coords) {
                val state = coords.state
                val isFree = rx { state() == FieldState.Free }
                val canClick = rx { ourTurn() && isFree() }

                g {
                    transform.baseVal.appendItem(
                        ownerSVGElement!!.createSVGTransform().apply {
                            setTranslate(coords.x.toFloat(), coords.y.toFloat())
                        }
                    )

                    g {

                        g {
                            transform {
                                setScale(.8f, .8f)
                            }

                            use {
                                rx {
                                    state().let { s ->
                                        when (s) {
                                            FieldState.Free -> null
                                            is FieldState.Taken -> s.player.markRef()
                                        }
                                    }
                                }.forEach { xlinkHref = it }

                            }

                        }


                    }

                    a {
                        href.baseVal = "#"
                        attached {
                            canClick()
                        }
                        click {
                            coords.click()
                        }
                        rect {
                            this.x.baseVal.value = -.5f
                            this.y.baseVal.value = -.5f
                            width.baseVal.value = 1f
                            height.baseVal.value = 1f
                            cls.fieldAnchor
                        }
                    }

                }

            }


            node {
                setAttribute("viewBox", "0 0 ${dimensions.width} ${dimensions.height}")

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
                        cls.stroke
                        attributes["vector-effect"] = "non-scaling-stroke"
                    }
                }

                for (x in 1 until dimensions.width) {
                    stroke(x * 1f, 0f, x * 1f, dimensions.height * 1f)
                }
                for (y in 1 until dimensions.width) {
                    stroke(0f, y * 1f, dimensions.width * 1f, y * 1f)
                }

                g {
                    transform.baseVal.appendItem(
                        ownerSVGElement!!.createSVGTransform().apply {
                            setTranslate(.5f, .5f)
                        }
                    )

                    for (x in 0 until dimensions.width) {
                        for (y in 0 until dimensions.height) {
                            fieldUI(Coords(x, y))
                        }
                    }

                    highlights += { h ->
                        line {
                            cls.highlight
                            this.x1.baseVal.value = h.from.x.toFloat()
                            this.y1.baseVal.value = h.from.y.toFloat()
                            this.x2.baseVal.value = h.to.x.toFloat()
                            this.y2.baseVal.value = h.to.y.toFloat()
                        }
                    }
                }

            }


        }
        div {
            cls {
                flexFixedSize()
                flexCenter()
                bgLight
                borderTop
                p1
            }
            widget %= {
                document.row {
                    cls {
                        m1
                        alignItemsCenter
                    }
                    gameState().also { gs ->
                        when (gs) {
                            GameState.Draw -> {
                                this %= "It's a draw."
                            }
                            is GameState.GameOver -> {
                                if (gs.winner == thisPlayer()) {
                                    appendText("You won!")
                                } else {
                                    appendText("You lost. Winner: ")
                                    playerIcon(gs.winner)
                                }
                            }
                            else -> {
                                turnState().also { ts ->
                                    when (ts) {
                                        TurnState.Waiting -> this %= "Please wait..."
                                        is TurnState.Playing -> {
                                            if (ts.player == thisPlayer()) {
                                                appendText("Place your ")
                                                playerIcon(ts.player)
                                                appendText(" !")
                                            } else {
                                                appendText("Opponent placing ")
                                                playerIcon(ts.player)
                                                appendText(" ...")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

fun Node.playerIcon(p: Player) {
    svg {
        cls {
            mx1
            iconSquare
        }
        viewBox(-.5, -.5, 1.0, 1.0)
        use {
            transform {
                setScale(.8f, .8f)
            }
            xlinkHref = p.markRef()
        }
    }
}

