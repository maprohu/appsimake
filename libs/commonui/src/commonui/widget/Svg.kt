package commonui.widget

import bootstrap.dNone
import bootstrap.flexCenter
import bootstrap.h100
import common.namedLazy
import common.res
import commonui.launchReport
import domx.*
import fontawesome.*
import killable.NoKill
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Deferred
import org.w3c.dom.Document
import org.w3c.dom.Element
import org.w3c.dom.get
import org.w3c.dom.svg.SVGSVGElement
import rx.*
import styles.square125Em
import styles.squareEm
import styles.width125Em
import styles.widthEm
import svgx.*
import kotlin.browser.document



class Svg: ScreenWrap(), HasSVGElement {
    override val node = document.svg {
    }
}

