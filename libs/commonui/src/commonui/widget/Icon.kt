package commonui.widget

import bootstrap.*
import commonshr.*
import commonui.*
import domx.*
import fontawesome.*
import kotlinx.coroutines.*
import styles.*
import svgx.*
import kotlin.browser.document



class Icon: ScreenWrap() {
    override val node = document.div {
        cls.flexCenter()
    }
    val svg = insert.svg {
        node.attr["fill"] = "currentColor"
    }

    val use by lazy {
        svg.node.use
    }

    fun size(times: Double) {
        cls.iconWidth(times)
        svg.cls.iconSquare(times)
    }

    val fw by lazy {
        size(1.0)
    }

    val x2 by lazy {
        size(2.0)
    }

    val x3 by lazy {
        size(3.0)
    }


    abstract inner class FaImpl(val doc: Deferred<FaDoc>): FaBase {
        override fun of(cssName: String, cs: CoroutineScope) {
            cs.launchReport {
                use.xlinkHref = "#${doc.await().icon(cssName)}"
            }
        }
    }

    val solid: FaSolid by lazy { object: FaImpl(FaDocs.solid), FaSolid {} }
    val regular: FaRegular by lazy { object: FaImpl(FaDocs.regular), FaRegular {} }
    val brands: FaBrands by lazy { object: FaImpl(FaDocs.brands), FaBrands {} }

    val fa by lazy {
        fw
        solid
    }

}

val defaultIconSizeEm = 1.25

fun Cls.iconSquare(times: Double = 1.0) = squareEm(defaultIconSizeEm * times)
fun Cls.iconWidth(times: Double = 1.0) = widthEm(defaultIconSizeEm * times)

val Cls.iconWidth get() = iconWidth()
val Cls.iconSquare get() = iconSquare()
