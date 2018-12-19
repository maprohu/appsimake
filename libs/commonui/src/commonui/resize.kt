package commonui

import bootstrap.column
import bootstrap.flex
import bootstrap.flexGrow1
import bootstrap.padding2
import common.resizeEvent
import domx.classes
import domx.div
import killable.Killables
import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
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

fun HTMLElement.aspectRatio(
    killables: Killables,
    tableRatio: Double = 1.0,
    fn: HTMLDivElement.() -> Unit
): HTMLDivElement {
    return div {
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
                flexGrow1()

                div {
                    flexGrow1()
                    style.position = "relative"

                    fn()
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