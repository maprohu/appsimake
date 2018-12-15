package tictactoe

import bootstrap.*
import common.resizeEvent
import domx.*
import firebase.firestore.DocumentChangeType
import firebase.firestore.onSnapshotNext
import firebase.firestore.orderBy
import firebase.firestore.typeEnum
import killable.Killables
import org.w3c.dom.get
import rx.Rx
import rx.Var
import rx.rxClass
import styles.flexBasis0
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

fun PlayingCtx.playfieldUI(): () -> Unit {
    val tableRatio = 1.0

    val killables = Killables()

    root.newRoot {
        row {
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
                        border()
                        padding2()
                        flexGrow1()

                        svg {
                            style.flexGrow = "1"
                            width.baseVal.valueAsString = "100%"
                            height.baseVal.valueAsString = "100%"

                            setAttribute("viewBox", "0 0 1 1")
//                            attributes["viewBox"] = "0 0 1 1"
//                            viewBox.baseVal.width = 1.0
//                            viewBox.baseVal.height = 1.0

                            line {
                                x1.baseVal.value = 0f
                                y1.baseVal.value = 0f
                                x2.baseVal.value = 1f
                                y2.baseVal.value = 1f
                                style.cssText = "stroke:rgb(255,0,0);stroke-width:2px"
                                attributes["vector-effect"] = "non-scaling-stroke"
                            }

//                            circle {
//                                r.baseVal.value = 1f
//                            }
                        }
                    }
//                    border()
//                    padding2()


                }
                div {
                    classes += flexBasis0
                    spacingGrow.forEach {
                        style.flexGrow = it.toString()
                    }
                }

            }
        }
    }

    val stopListening = movesRef
        .orderBy(Move::sequence)
        .onSnapshotNext { qs ->
            qs.docChanges()
                .filter { it.typeEnum == DocumentChangeType.added }
                .forEach { dc ->
                    val move = Move.of(dc.doc.data())
                }


        }

    return {
        killables.kill()
        stopListening()
        leaveGame()
    }
}
