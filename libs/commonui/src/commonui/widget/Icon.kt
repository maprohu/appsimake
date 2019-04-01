package commonui.widget

import common.res
import domx.*
import fontawesome.*
import killable.NoKill
import rx.*
import styles.width125Em
import styles.widthEm
import svgx.svg
import svgx.use
import kotlin.browser.document

class Icon: ScreenWrap() {
    override val node = document.svg {

    }

    val use by lazy {
        node.use
    }

//    val fafw by lazy {
//        fa
//        fw
//    }

    val fw by lazy {
//        node.classes += Fa.fw
        node.cls.widthIcon
    }

//    val fa by lazy {
//        cls.fa
//    }

//    val faBrands by lazy {
//        cls.faBrands
//    }

    abstract inner class FaImpl(sprites: String): FaBase {
        val base = "${res("$sprites.svg")}#"
        override fun of(cssName: String) {
            use {
                use.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "xlink:href",
                    "$base$cssName"
                )
            }
        }
    }

    val solid: FaSolid = object: FaImpl("solid"), FaSolid {}
    val regular: FaRegular = object: FaImpl("regular"), FaRegular {}
    val brands: FaBrands = object: FaImpl("brands"), FaBrands {}

    val fa = solid


}

val Cls.widthIcon get() = element {
//    classes += cls.widthEm(1.25)
    console.dir(this)
    cls.width125Em
}
