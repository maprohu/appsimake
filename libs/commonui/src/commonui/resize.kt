package commonui

import bootstrap.*
import common.resizeEvent
import commonshr.invoke
import domx.classes
import domx.cls
import domx.div
import domx.invoke
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

//fun HTMLElement.aspectRatio(
//    killables: Killables,
//    tableRatio: Double = 1.0,
//    fn: HTMLDivElement.() -> Unit
//): HTMLDivElement {
//    return div {
//        cls {
//            dFlex
//            flexGrow1
//        }
//
//        val size = Var(Size(offsetWidth, offsetHeight))
//        killables += window.resizeEvent {
//            size.now = Size(offsetWidth, offsetHeight)
//        }
//        val ratio = Rx {
//            size().ratio
//        }
//        val flexOrientation = Rx {
//            if (tableRatio >= ratio()) Orientation.Vertical
//            else Orientation.Horizontal
//        }
//
//        val spacingGrow = Rx {
//            val containerRatio = ratio()
//            val tablePerContainer = if (tableRatio >= containerRatio) {
//                containerRatio / tableRatio
//            } else {
//                tableRatio / containerRatio
//            }
//            val allSpacingPerContainer = 1.0 - tablePerContainer
//            val allSpacingPerTable = allSpacingPerContainer / tablePerContainer
//            val halfSpacingPerTable = allSpacingPerTable / 2.0
//            halfSpacingPerTable
//        }
//
//        rxClass(
//            Rx {
//                when (flexOrientation()) {
//                    Orientation.Vertical -> "flex-column"
//                    Orientation.Horizontal -> "flex-row"
//                }
//            }
//        )
//
//        div {
//            cls.flexBasis0
//            spacingGrow.forEach {
//                style.flexGrow = it.toString()
//            }
//        }
//        column {
//            cls {
//                flexBasis0
//                flexGrow1
//            }
//
//            column {
//                cls.flexGrow1
//
//                div {
//                    cls.flexGrow1
//                    style.position = "relative"
//
//                    fn()
//                }
//
//
//            }
//
//        }
//        div {
//            cls.flexBasis0
//            spacingGrow.forEach {
//                style.flexGrow = it.toString()
//            }
//        }
//    }
//
//
//}