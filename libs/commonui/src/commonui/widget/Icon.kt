package commonui.widget

import domx.*
import fontawesome.*
import killable.NoKill
import rx.*
import kotlin.browser.document

class Icon: ScreenWrap() {
    override val node = document.span {

    }

    val fafw by lazy {
        fa
        fw
    }

    val fw by lazy {
        node.classes += Fa.fw
    }

    val fa by lazy {
        cls.fa
    }

    val faBrands by lazy {
        cls.faBrands
    }

}
